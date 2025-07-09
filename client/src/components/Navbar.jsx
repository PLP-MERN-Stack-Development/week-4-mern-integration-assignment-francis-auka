import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition">
          📝 MERN Blog
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/create" className="hover:text-yellow-300">Create</Link>
          <Link to="/" className="hover:underline">Posts</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
          <Link to="/register" className="hover:text-yellow-300">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
