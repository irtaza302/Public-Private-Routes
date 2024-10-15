import React from 'react';

const UserProfile: React.FC = () => {
  const user = {
    name: 'Irtaza',
    email: 'malikirtaza96@gmail.com',
    joinDate: '2023-01-01',
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <p className="text-gray-700">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Join Date
          </label>
          <p className="text-gray-700">{user.joinDate}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;