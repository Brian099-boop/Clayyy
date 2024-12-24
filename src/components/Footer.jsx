import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold text-red-500">MovieFlix</h2>
          <p className="text-gray-400 text-sm mt-2">
            Stream your favorite movies for free, anytime, anywhere.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-red-500" aria-label="Facebook">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500" aria-label="Twitter">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500" aria-label="Instagram">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 my-6"></div>
        <p className="text-gray-400 text-sm">
          &copy; 2024 MovieFlix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
