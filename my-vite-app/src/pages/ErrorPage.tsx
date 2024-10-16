import React from 'react';

interface ErrorPageProps {
  error: Error;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">An Error Occurred</h1>
      <p className="text-lg mb-4">We're sorry, but something went wrong.</p>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error.message}</span>
      </div>
      {error.stack && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Stack Trace:</h2>
          <pre className="whitespace-pre-wrap">{error.stack}</pre>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
