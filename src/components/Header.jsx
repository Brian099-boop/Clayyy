import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white py-6 fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Branding or Logo */}
        <div className="text-4xl font-extrabold ml-5 text-red-500">
          Sapatos<span className="text-white">Store</span>
        </div>

        {/* Navigation Links Centered */}
        <div className="flex space-x-8 justify-center">
          <Link
            to="/"
            className="hover:text-red-500 transition-all duration-300 font-semibold uppercase"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-red-500 transition-all duration-300 font-semibold uppercase"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="hover:text-red-500 transition-all duration-300 font-semibold uppercase"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-500 transition-all duration-300 font-semibold uppercase"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
