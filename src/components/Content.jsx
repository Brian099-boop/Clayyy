import React from 'react';

const Content = () => {
  return (
    <div>
      {/* Image Background */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/q.jpg)' }}>
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Welcome to MovieFlix</h1>
          <p className="text-lg italic mb-6">
            "Stream your favorite movies for free, anytime, anywhere."
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg transition duration-300">
            Start Watching
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
