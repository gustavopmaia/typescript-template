# Frontend Documentation

This documentation provides an overview of the frontend codebase for the project.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The frontend codebase is located in the `web/` directory. Here are the main directories and their purposes:

- `src/`: This is where the main application code resides. It includes the following subdirectories:
  - `components/`: This directory contains all the React components used in the application, such as `Box` and `Footer`.
  - `services/`: This directory is for any services that the application might use, such as Axios.
  - `pages/`: This directory is for the different pages of the application.
- `public/`: This directory is for public assets that are to be served directly by the server.

## Installation

To install the necessary dependencies, navigate to the `web/` directory and run the following command:

```sh
npm install
```

## Usage

To run the frontend application in development mode, use the following command:

```sh
npm run dev
```

## Configuration

The frontend application uses Tailwind CSS for styling, which is configured in tailwind.config.cjs. The TypeScript configuration is located in tsconfig.json.
