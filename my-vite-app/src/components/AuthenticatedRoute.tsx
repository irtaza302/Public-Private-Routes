import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface AuthenticatedRouteProps {
  isAuthenticated: boolean;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default AuthenticatedRoute;