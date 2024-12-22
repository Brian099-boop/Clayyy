import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-red-500">SapatosStore</h2>
            <p className="text-gray-400 text-sm mt-2">
              Step into the world of premium footwear and style.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; 2024 ShoeStore. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a
              href="#about"
              className="text-gray-400 hover:text-red-500 text-sm transition duration-300"
            >
              About Us
            </a>
            <a
              href="#privacy"
              className="text-gray-400 hover:text-red-500 text-sm transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-red-500 text-sm transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
