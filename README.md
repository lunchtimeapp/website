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

### Start

- `npm start` – Starts the Parcel.js local development server and uses the generated certificate for localhost.
- Open https://localhost:1234/index.html in a browser. (note the `index.html` path due to multiple entry points)

### Cleanup

- `npm run clean` – Deletes `.cache` and `dist` folders.

## Production

### Build

- `npm run build` – Builds the app with Parcel.js and outputs to the `dist` folder.
