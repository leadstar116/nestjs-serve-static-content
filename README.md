# Polkadot Scanner Backend

A simple node.js server that is able to serve static content and protect it behind a password.

## Used Stacks:

- Typescript
- Nest.js
- Bcrypt

## Main Functionalities of App

1. Serve a password prompt on unauthorized access, and after user enter a valid password, it can serve the static content
2. The content are not accessiable without authentication
3. The server serve the content that was built by https://github.com/leadstar116/polkadot-scanner

# Project Run

Using node version 16 and npm for installing the dependencies.
Install dependencies and start app.
Visit http://localhost:3000.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
