import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, onLogout }) => { 
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">My App</Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
              <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
              <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
              <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
