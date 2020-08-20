# Website of lunchtimeapp.com
![CI/CD](https://github.com/lunchtimeapp/website/workflows/CI/CD/badge.svg?branch=master)

## Development

### Prerequisites
- Node.js
- `npm install`

### Start
- `npm start` – Starts the Parcel.js local development server.
- Open http://localhost:1234/index.html in a browser. (note the `index.html` path due to multiple entry points)

### Cleanup
- `npm run clean` – Deletes `.cache` and `dist` folders.

## Production

### Build
- `npm run build` – Builds the app with Parcel.js and outputs to the `dist` folder.
