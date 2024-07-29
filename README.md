<!-- TOC -->

- [Random Card Generator Application](#random-card-generator-application)
    - [Main conponents](#main-conponents)
    - [Getting Started](#getting-started)
        - [Pre-requises](#pre-requises)
        - [Environment variables](#environment-variables)
        - [Run docker services](#run-docker-services)
        - [Run the development server](#run-the-development-server)
    - [Features](#features)

<!-- /TOC -->

# Random Card Generator Application

Random Letter Generator is a Next.js application. It showcases such things as server functions and API requests, context/state manipulation, code structure and algorithms. And it’s all written in Typescript!

## Main conponents

Our solution has two major components:

1. Application (Next.js)
    Frontend: React (handled by Next.js for server-side rendering and other optimizations)
    Backend: Next.js (handles server-side rendering, API routes, and other backend functionalities)

2. Database
    MongoDB: For storing and managing application data

## Getting Started

### Pre-requises

To run de dev server, you must have docker and node.js (>=18) installed on your machine.

### Environment variables

Create a copy of `.env.example` to `.env.local`.

```bash:
cp .env.local.example .env.local
```

### Run docker services

For our data storage we are using a mongoDB instance with docker.
For the application to have access to the data, we must first start our mongoDB container.

```bash:
docker-compose --env-file .env.local up
```

> We are using the `--env-file` option to overwrite the  env file docker tries to read by default (`.env`).

### Run the development server

With the data-base running we can now start our app.

> Don't forget to install the node dependicies with `npm install` if it is your first run.

```bash:
npm install
npm run dev
```

## Features

- Generate random letters and display them on a grid (using Next.js [https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations](server-functions))
- Request an API endpoint to generate a secret code

Open [http://localhost:3000](http://localhost:3000) in your browser and see the result.

**TODO**:

Some steps need it to make this a production ready solution

- Unit and integration tests
- Centralize error handling
- Add CD/CI integration
- Sanitize request data and handle CORS
- Git integrations to handle commits and git hools
- API documentation
- Frontend animations

