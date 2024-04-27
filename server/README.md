# Backend Documentation

This documentation provides an overview of the backend codebase for the project.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Database Schema](#database-schema)

## Project Structure

The backend codebase is located in the `server/` directory. Here are the main directories and their purposes:

- `src/`: This is where the main application code resides. It includes the following subdirectories:
  - `lib/`: This directory contains utility files such as `prisma.ts`.
  - `modules/`: This directory contains the actions and controllers for the application.
- `prisma/`: This directory contains the Prisma schema and migrations for the database.

## Installation

To install the necessary dependencies, navigate to the `server/` directory and run the following command:

```sh
npm install
```

## Usage

To run the backend application in development mode, use the following command:

```sh
npm run dev
```

## Routes

- `POST /users`: This route is used to create a new user. It calls the createUser function which expects a request body with name, email, and password.

- `GET /users/:id`: This route is used to get a specific user by their ID. It calls the getUser function and uses the authMiddleware for authentication.

- `GET /users`: This route is used to get all users. It calls the getUsers function and uses the authMiddleware for authentication.

- `PUT /users`: This route is used to update a user. It calls the updateUser function and uses both the authMiddleware and userMiddleware for authentication and user validation.

- `DELETE /users/:id`: This route is used to delete a specific user by their ID. It calls the deleteUser function and uses both the authMiddleware and userMiddleware for authentication and user validation.

- `POST /login`: This route is used to log in a user. It calls the loginUser function which expects a request body with email and password.

### Middlewares

- `authMiddleware`: This middlewares verify the user token, if it's valid

- `userMiddleware`: Verify if the user that is trying to delete an account is the owner of this account

## Configuration

The backend application uses Prisma for database management, which is configured in prisma/schema.prisma. The TypeScript configuration is located in tsconfig.json.

## Database Schema

The database schema is defined in prisma/schema.prisma. The User model is defined with fields for id, name, email, password_hash, createdAt, and updatedAt.
