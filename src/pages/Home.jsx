import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to SpotEvents 🎉</h1>
      <p className="mt-2 text-gray-600">Find and manage local events easily.</p>
      <div className="mt-4 space-x-4">
        <Link to="/events" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Browse Events
        </Link>
        <Link to="/login" className="px-4 py-2 bg-gray-700 text-white rounded-lg">
          Login
        </Link>
      </div>
    </div>
  );
}
