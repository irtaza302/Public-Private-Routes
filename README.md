# Vite React TypeScript Authentication App

This project demonstrates a robust authentication system built with Vite, React, TypeScript, and React Router. It showcases login functionality, protected routes, and responsive design using Tailwind CSS.

## Features

- Fast development and building with Vite
- React with TypeScript for type-safe components
- React Router for navigation and protected routes
- Tailwind CSS for responsive styling
- Simple authentication system (username/password)
- Public and private pages
- Error boundary for graceful error handling
- Forgot password functionality
- User profile page

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
- `src/routes`: Route configuration
- `src/constants`: Constant values used across the app
- `src/App.tsx`: Main application component and routing setup
- `src/main.tsx`: Entry point of the application

## Authentication

The app uses a simple authentication system:
- Username: Irtaza
- Password: apple

Only users with these credentials can access the private pages.

## Pages

- Home: Public page accessible to all users
- About: Public page accessible to all users
- Login: Authentication page
- Dashboard: Private page only accessible to authenticated users
- User Profile: Private page showing user information
- Forgot Password: Public page for password reset functionality

## Technologies Used

- React 18
- TypeScript
- Vite
- React Router 6
- Tailwind CSS
- ESLint for code linting

## Key Components

- ErrorBoundary: Catches and handles errors gracefully
- PrivateRoute: Protects routes that require authentication
- AuthenticatedRoute: Redirects authenticated users from public routes
- Navbar: Navigation component with conditional rendering based on auth status

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
