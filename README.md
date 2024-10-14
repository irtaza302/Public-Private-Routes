# Vite React TypeScript Authentication App

This project is a simple authentication system built with Vite, React, TypeScript, and React Router. It demonstrates basic login functionality and protected routes.

## Features

- Vite for fast development and building
- React with TypeScript for type-safe components
- React Router for navigation and protected routes
- Tailwind CSS for responsive styling
- Simple authentication system (username/password)
- Public and private pages

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server:
```
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:
```
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/components`: Reusable React components
- `src/pages`: Individual page components
- `src/App.tsx`: Main application component and routing setup
- `src/main.tsx`: Entry point of the application

## Authentication

The app uses a simple authentication system:
- Username: Irtaza
- Password: apple

Only users with these credentials can access the Dashboard page.

## Pages

- Home: Public page accessible to all users
- About: Public page accessible to all users
- Login: Authentication page
- Dashboard: Private page only accessible to authenticated users

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
