# Backend Documentation

This documentation provides an overview of the backend codebase for the project.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

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

## Configuration

The backend application uses Prisma for database management, which is configured in prisma/schema.prisma. The TypeScript configuration is located in tsconfig.json.

## Database Schema

The database schema is defined in prisma/schema.prisma. The User model is defined with fields for id, name, email, password_hash, createdAt, and updatedAt.
