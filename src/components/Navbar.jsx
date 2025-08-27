import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My Event App</h1>
        <button className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-gray-200">
          Login
        </button>
      </div>
    </nav>
  );
}
