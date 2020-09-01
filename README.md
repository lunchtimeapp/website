# Website of lunchtimeapp.com
![CI/CD](https://github.com/lunchtimeapp/website/workflows/CI/CD/badge.svg?branch=master)

## Folder Structure

```ini
┬╴website
├─╴api     # Serverless Azure Functions.
├─╴dist    # Build output files for distribution. (git ignored)
├┬╴src     # Source code requiring compilation.
│└─╴app    # Application source code.
└─╴static  # Static files to be copied to the (dist) output folder.
```

## Development

### Prerequisites

- Node.js
  - `npm install`
- mkcert – https://mkcert.dev
  - `mkcert -install localhost` – generates a certificate for localhost for use with the development server.
- Environment variables (.env files supported)
  - `AWS_COGNITO_REGION` (e.g. 'us-west-2')
  - `AWS_USER_POOLS_ID` (e.g. 'us-west-2_212378SHs')
  - `AWS_USER_POOLS_WEB_CLIENT_ID` (e.g. 'asdhj21837hasd12uioqjwd')
  - `AWS_USER_POOLS_OAUTH_DOMAIN` (e.g. 'myuserpool.auth.us-west-2.amazoncognito.com')

### Start

- `npm start` – Starts the Parcel.js local development server and uses the generated certificate for localhost.
- Open https://localhost:1234/index.html in a browser. (note the `index.html` path due to multiple entry points)

### Cleanup

- `npm run clean` – Deletes `.cache` and `dist` folders.

## Production

### Build

- `npm run build` – Builds the app with Parcel.js and outputs to the `dist` folder.
