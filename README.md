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

## Prerequisites

- Node.js
  - `npm install`
- mkcert – https://mkcert.dev
  - `mkcert -install localhost` – Generates a certificate for localhost for use with the development server
- Environment variables (.env files supported)
  - `AWS_COGNITO_REGION` (e.g. 'us-west-2')
  - `AWS_USER_POOLS_ID` (e.g. 'us-west-2_212378SHs')
  - `AWS_USER_POOLS_WEB_CLIENT_ID` (e.g. 'asdhj21837hasd12uioqjwd')
  - `AWS_USER_POOLS_OAUTH_DOMAIN` (e.g. 'myuserpool.auth.us-west-2.amazoncognito.com')

## CLI Commands

- `npm install` – Installs dependencies
- `npm run dev` – Run a development, HMR server
- `npm run build` – Production-ready build
- `npm run build -- --brotli` – Production-ready build with Brotli compressed files
- `npm run serve` – Run a production-like server
- `npm run lint` – Pass TypeScript files using TSLint
- `npm run test` – Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests
- `npm run clean` – Deletes `.cache` and `dist` folders

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
