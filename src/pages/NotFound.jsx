import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-xl text-gray-700 mb-4">Oops! Page not found.</p>
      <Link
        to="/"
        className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
