import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-16 px-6 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200">
      <h2 className="text-5xl font-bold text-center text-indigo-700 mb-12">Contact Us</h2>
      
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
        <p className="text-lg text-gray-700 mb-8 text-center">
          We'd love to hear from you! Reach out to us through any of our social media platforms:
        </p>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-lg font-medium transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-lg font-medium transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-lg font-medium transition duration-300"
          >
            Twitter
          </a>
        </div>

        <p className="text-lg text-gray-600 mb-8 text-center">
          Or, you can send us a message using the form below:
        </p>
        
        {/* Contact Form */}
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              rows="6"
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
