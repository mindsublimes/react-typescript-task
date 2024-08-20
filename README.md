# React Task

This README provides instructions for setting up and running the project locally.

## Getting Started

Follow these steps to get your development environment up and running:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```
git clone https://github.com/yourusername/your-repo-name.git
```

### 2. Install Dependencies

Navigate to the project directory:

```
cd your-repo-name
```

Install the project dependencies using npm. Make sure you are using Node.js version 20, as specified in the `package.json` file. If you are not on the correct version, please use a version manager like `nvm` to switch to the appropriate version.

```
npm install
```

### 3. Start the Project

Start the project in development mode with the following command:

```
npm run dev
```

Your project will now be running in development mode and should be accessible at `http://localhost:3000` (or the port specified in your configuration).

## Project Structure

Here's an overview of the project's directory structure:


### `/store/store.ts`
Configured redux store.

### `/store/slices`
Redux slices used throughout the app.

### `/utils`
Utility functions used across the application.

### `/constants`
Constant variables.

### `/components`
React components used in the project.


