import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { ENV } from "./backend/envs";

const app = new Elysia().use(swagger()).listen(ENV.PORT);

app.group("/", (app) => app.get("", () => "Hello Elysia"));

app.group("/api", (app) =>
  app.get("/test", () => ({
    data: 42,
  }))
);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

// describe("Elysia", () => {
//   it("return a response", async () => {
//     const app = new Elysia().get("/", () => "hi");

//     const response = await app
//       .handle(new Request("http://localhost/"))
//       .then((res) => res.text());

//     expect(response).toBe("hi");
//   });
// });
