# LLM Program Learning Frontend

This repository contains the frontend code of LLM programming learning project.
The frontend is written with React in TypeScript, and utilizes Vite and React Router as frameworks.

## Development

To contribute to this project, you need to set up an appropriate Node.js environment.

1. Download and install Node.js. v22.13.0 LTS is tested and should be used.
2. Install dependencies. Simply run `npm install` and it should be good to go.
3. Start development. To serve your site locally, try running `npm run dev`.

You might need to configure a mirror for NPM registry if network problems are encountered.

## Deployment

This app is designed as a Single Page App (SPA), which means that only a single index page is used when deployed to a server.
To deploy the project, first run `npm run build`, and then all files needed should be located in the `build` directory.
As server side rendering (SSR) is disabled for now, only `client` directory should be generated.
Simply copy all its content to a HTTP server, and redirect **ALL** requests to `index.html`.
