### Project Description

***orbit-controller-elysia*** (distribution controller) is a script running Elysia server to update contract state and DB data periodically. It enables capture mode of the contract, queries estimated aUSDC price, collects user data, calculates expected total yield, USDC yield and assets to buy. After that it sends the tx to claim yield, swap assets and update aUSDC price in the contract. Also it stores historical data in MongoDB and provides REST API for all time data 


### Settings (Ubuntu 22.04)

1) Connect to server over SSH
```
ssh root@<server_ip>
```

2) Install required system updates and components
```
sudo apt update && sudo apt -y upgrade
sudo apt-get install -y curl
sudo apt-get install git
```

3) Install and check volta, Node.js, bun
```
curl https://get.volta.sh | bash
volta install node@22.15.1

curl -fsSL https://bun.sh/install | bash
bun -v
```

4) Clone the project repositiry and install dependencies

```
git clone https://github.com/orbitearn/orbit-controller-elysia.git
cd orbit-controller-elysia && bun i
```

5) Create env file and specify seed phrase for account sending messages to orbit contract

```
touch .env && chmod 600 .env
nano .env
```

Enter actual values (replace placeholders <_>)

```
SEED=<your_seed_phrase>
USER_SEED=<your_seed_phrase>

DATABASE_URL_PRISMA=<MongoDB_URI>/<db_name>?retryWrites=true&w=majority

PROD_KEY=<path_to_production_key>
PROD_CERT=<path_to_production_cert>

DEV_KEY=<path_to_development_key>
DEV_CERT=<path_to_development_cert>

PORT=<port>

LOCAL_IP_LIST=["http://127.0.0.1","http://localhost"]
LOCAL_PORT_LIST=[3000,4000,5173]

BE_DEV_URL=http://localhost:4000
BE_TUNNEL_URL=<tunnel_server_url>
BE_PROD_URL=http://<production_server_ip>:<port>

FE_DEV_URL=<development_server_url>
FE_STAGE_URL=<staging_server_url>
FE_PROD_URL=<production_server_url>

IS_PROD=true
```

Save the file (Ctrl+X, then Y, then Enter)

6) Replenish the account balance with several amount of NTRN (optional step)

7) Specify the account address in address config of the orbit bank contract (optional step)

```
{
  "update_address_config": {
    "controller": "<address>"
  }
}
```

8) Build app binary
```
bun compile
```

9) Run the server
```
./run.sh
```

### Updating the Codebase

To update the codebase:

1) Stop the service
```
sudo lsof -i :<port>
sudo kill -9 <PID>
```
2) Fetch updates
```
cd orbit-controller-elysia && git fetch origin && git reset --hard origin/main && bun i && bun compile
```
3) Restart the service
```
./run.sh
```


## REST API

Swagger interface: `http://<server_ip>:<port>/swagger`

Base API URL is `http://<server_ip>:<port>/api`

GET requests:

`/average-entry-price` - returns captured in [DISTRIBUTION_PERIOD](#distribution-period)* ago list of user's asset and it's average price `[string, number][]`. Request parameters: `address` (required, string) - user's wallet, `from` (required, number) - start timestamp of the calculation period, `to` (required, number) - end timestamp of the calculation period, `excludeAsset` (required, string) - stablecoin used to buy assets

`/profit` - returns captured in [DISTRIBUTION_PERIOD](#distribution-period)* ago list of user's asset and profit based it's current price `[string, number][]`. Request parameters: `address` (required, string) - user's wallet, `from` (required, number) - start timestamp of the calculation period, `to` (required, number) - end timestamp of the calculation period, `excludeAsset` (required, string) - stablecoin used to buy assets

`/first-data` - returns first user's data DB record. Request parameters: `address` (required, string) - user's wallet

`/apr` - returns list of APR (%) and timestamp period end as `[number, number][]`. Request parameters: `from` (required, number) - first timestamp of the list, `to` (required, number) - last timestamp of the list, `period` (required, string: "day" | "week" | "month" | "year") - timestamp period of the list

`/app-data-in-timestamp-range` - returns list of streaming asset prices and timestamps as [AppDataItem[]](https://github.com/orbitearn/orbit-controller-elysia/blob/main/src/backend/interfaces/db.ts#L16). Request parameters: `from` (required, number) - first timestamp of the list, `to` (required, number) - last timestamp of the list

`/user-data-in-timestamp-range` - returns list of user's bought in streaming assets and timestamp period end as [UserDataItem[]](https://github.com/orbitearn/orbit-controller-elysia/blob/main/src/backend/interfaces/db.ts#L23). Request parameters: `address` (required, string) - user's wallet, `from` (required, number) - first timestamp of the list, `to` (required, number) - last timestamp of the list, `period` (required, string: "none" | "day" | "week" | "month" | "year") - timestamp period of the list

POST requests:

`/update-user-assets` - writes to DB users assets bought in streaming (calculated dynamically). If there is no assets to add it will handle corresponding error preserving successful response. Request parameters: `addressList` (required, string[]) - list of users

<a id="distribution-period"></a> *[DISTRIBUTION_PERIOD](https://github.com/orbitearn/orbit-controller-elysia/blob/main/src/backend/constants.ts#L17)


## Historical Data

The script creates `orbit_controller` database in MongoDB with following collections:

`app_data` - stores all asset prices (including aUSDC) captured on each distribution with timestamp and app distribution counter

`user_data` - stores user asset amounts bought on each distribution with timestamp
