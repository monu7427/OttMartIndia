import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const ErrorPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []); 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
      <div className="mt-8 text-gray-600 text-sm">
        <p>Powered by</p>
        <h2 className='text-lg'>ottmartindia</h2>
      </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go to Homepage
        </Link>
      </div>
     
    </div>
  );
}

export default ErrorPage;
