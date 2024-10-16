import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import LoginWrapper from '../pages/LoginWrapper';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import UserProfile from '../pages/UserProfile';
import ErrorPage from '../pages/ErrorPage';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

export const publicRoutes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/login', element: <LoginWrapper onLogin={() => Promise.resolve(false)} /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/error', element: <ErrorPage error={new Error('Default error message')} /> },
];

export const privateRoutes: RouteConfig[] = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/profile', element: <UserProfile /> },
];
