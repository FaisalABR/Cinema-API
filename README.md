# CINEMA API

CINEMA API is RESTful API for ordering cinema seats. Using Node.Js as a main language with the framework express, mongoDB, and Redis.

## Contents

- [Tech Stacks](#tech-stacks)
- [Installation](#installation)
- [Features](#features)
- [Endpoint API](#endpoint-api)

## Tech Stacks

CINEMA API use Node.js as a main progamming language, and the following are the stack that we use:

- **Express.Js**: Backend Framework.
- **MongoDB**: NoSQL Database.
- **Redis**: Memory Caching for increase performance.

## Installation

1. Clone this repository to your local:
   ```bash
   git clone https://github.com/FaisalABR/Cinema-API.git
   ```
2. Get into project directory:
   ```bash
   cd Cinema-API
   ```
3. Install Dependencies:
   ```bash
   npm install
   ```
4. Configurate env file:
   ```env
   MONGO_URL= <<your_mongo_atlas_url>>
   REDIS_PASSWORD=<<your_redis_password>>
   ```
5. Run the app:
   ```env
   npm run dev
   ```

## Features

The following are main features that Cinema API offers:

- Movies Information
- Ordering Cinema Ticket by Seats
- Refund Order Cinema Ticket
- Add Balance

## Endpoint API

- [Movies Spec API](docs/movies.md)
- [Seat Spec API](docs/seat.md)
- [Ticket Spec API](docs/ticket.md)
- [Balance Spec API](docs/balance.md)
