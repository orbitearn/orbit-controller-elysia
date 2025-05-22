import * as fs from "fs-extra";
import * as path from "path";
import * as chokidar from "chokidar";
import { l } from "../../common/utils";
import { LogService } from "../db/log.service";

export class LogWatcher {
  private filePath: string;
  private updateTimer: NodeJS.Timeout | null = null;
  private lastUploadedContent: string = "";
  private collectionName: string;
  private readonly RECORD_ID = "current_log"; // Fixed ID for the single record

  constructor(filePath: string, collectionName: string = "server_logs") {
    this.filePath = filePath;
    this.collectionName = collectionName;
  }

  /**
   * Initialize the log watcher
   */
  public initialize(): void {
    try {
      // Create directory if it doesn't exist
      const dir = path.dirname(this.filePath);
      fs.ensureDirSync(dir);

      // Create empty log file if it doesn't exist
      if (!fs.existsSync(this.filePath)) {
        fs.writeFileSync(this.filePath, "", "utf8");
      }

      // Start watching the file
      this.startWatching();
    } catch (err) {
      l("Failed to initialize LogWatcher:", err);
    }
  }

  /**
   * Start watching the log file for changes
   */
  private startWatching(): void {
    // Create a watcher with chokidar
    const watcher = chokidar.watch(this.filePath, {
      persistent: true,
      awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval: 100,
      },
    });

    watcher.on("change", () => this.handleFileChange());
    l(`Started watching log file: ${this.filePath}`);
  }

  /**
   * Handle file change event
   */
  private handleFileChange(): void {
    l(`Log file changed: ${this.filePath}`);

    // Reset the timer if it's already running
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
    }

    // Set a new timer for 30 seconds
    this.updateTimer = setTimeout(() => {
      this.uploadToMongoDB();
    }, 30000); // 30 seconds
  }

  /**
   * Upload log content to MongoDB, replacing previous record
   */
  private async uploadToMongoDB(): Promise<void> {
    try {
      // Read the log file
      const fileContent = await fs.readFile(this.filePath, "utf8");

      // Only upload if there's new content
      if (fileContent !== this.lastUploadedContent && fileContent.trim()) {
        // Parse log entries if they're in JSON format
        let logEntries: any[] = [];
        try {
          // Split by newline and parse each line as JSON
          logEntries = fileContent
            .split("\n")
            .filter((line) => line.trim())
            .map((line) => {
              try {
                return JSON.parse(line);
              } catch (e) {
                return { raw: line, timestamp: new Date() };
              }
            });
        } catch (e) {
          // If parsing fails, store as raw text
          logEntries = [
            {
              raw: fileContent,
              timestamp: new Date(),
              parseError: (e as Error).message,
            },
          ];
        }

        // Create log entry data
        const logData = {
          timestamp: new Date(),
          source: path.basename(this.filePath),
          entries: logEntries,
          rawContent: fileContent,
          recordId: this.RECORD_ID,
        };

        // Update or create the log entry using findOneAndUpdate with upsert
        await LogService.updateLog(
          fileContent,
          logEntries,
          path.basename(this.filePath)
        );

        l(`Updated log data in MongoDB collection: ${this.collectionName}`);
        this.lastUploadedContent = fileContent;
      } else {
        l("No new content to upload");
      }
    } catch (err) {
      l("Error uploading logs to MongoDB:", err);
    }
  }

  /**
   * Stop watching and clean up resources
   */
  public stop(): void {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
      this.updateTimer = null;
    }
  }
}
