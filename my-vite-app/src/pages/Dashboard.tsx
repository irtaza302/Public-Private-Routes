import React from 'react';

const Dashboard: React.FC = () => {
  // throw new Error('This is a test error');
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-4">Welcome to your private dashboard. Only authenticated users can see this page.</p>
    </div>
  );
};

export default Dashboard;
