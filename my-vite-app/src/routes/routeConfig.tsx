import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import UserProfile from '../pages/UserProfile';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

export const publicRoutes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
];

export const privateRoutes: RouteConfig[] = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/profile', element: <UserProfile /> },
];
