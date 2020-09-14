## First steps

### Installing node
Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm)
Nvm approach is preferred.

### Install dependencies
Run `npm install` or `yarn` from rootpath of the project.

#### Starting

To start the server by default (development) run:

`npm run start`

To start a specific environment, run:

`npm run start-env environment`

#### Environment variables
This project requires environment file with these keys:
- REACT_APP_BASE_URL : the api url

#### Only building

To only build the application in a specific env, run:

`npm run build environment`
