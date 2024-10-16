import React from 'react';
import Login from './Login';

interface LoginWrapperProps {
  onLogin: (username: string, password: string) => Promise<boolean>;
}

const LoginWrapper: React.FC<LoginWrapperProps> = ({ onLogin }) => {
  return <Login onLogin={onLogin} />;
};

export default LoginWrapper;