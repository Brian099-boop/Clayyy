import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-10 bg-gray-100">
      <h2 className="text-4xl text-center font-bold mb-10 text-indigo-600">Contact Us</h2>
      
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-6 text-center">
          We'd love to hear from you! Reach out to us through any of our social media platforms:
        </p>
        
        {/* Social Media Links */}
        <div className="flex justify-center mb-6">
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 mx-4"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 mx-4"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 mx-4"
          >
            Twitter
          </a>
        </div>

        <p className="text-gray-600 mb-6 text-center">
          Or, you can send us a message using the form below:
        </p>
        
        {/* Contact Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
