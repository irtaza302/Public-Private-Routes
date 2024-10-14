import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Welcome to your private dashboard. Only authenticated users can see this page.</p>
    </div>
  );
};

export default Dashboard;