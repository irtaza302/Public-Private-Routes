import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { publicRoutes, privateRoutes } from './routes/routeConfig';
import LoginWrapper from './pages/LoginWrapper';


const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  const handleLogin = useCallback(async (username: string, password: string): Promise<boolean> => {
    if (username === 'Irtaza' && password === 'apple') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route element={<AuthenticatedRoute isAuthenticated={isAuthenticated} />}>
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.path === '/login' ? (
                    <LoginWrapper onLogin={handleLogin} />
                  ) : (
                    route.element
                  )
                }
              />
            ))}
          </Route>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  {route.element}
                </PrivateRoute>
              }
            />
          ))}
          <Route 
            path="*" 
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
