import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { publicRoutes, privateRoutes } from './routes/routeConfig';
import Login from './pages/Login';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogin = useCallback((username: string, password: string): boolean => {
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
          <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
            {publicRoutes.map((route) => (
              route.path !== '/login' ? (
                <Route key={route.path} path={route.path} element={route.element} />
              ) : null
            ))}
          </Route>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            {privateRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
