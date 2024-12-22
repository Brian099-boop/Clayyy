import React from 'react';

const Content = () => {
  return (
    <div>
      {/* Image Background */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/t1.jpg)' }}>
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Welcome to ShoeStore</h1>
          <p className="text-lg italic mb-6">
            "Step into the world of premium footwear and style."
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 flex flex-col">
            <img src="/a.webp" alt="Magic Shoes" className="w-full h-64 object-cover" />
            <div className="flex flex-col p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Magic Shoes</h3>
              <p className="text-lg text-gray-600 mb-4">
                With +40 Movement Speed and +10% Cooldown Reduction, these shoes offer a perfect blend of performance and style.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-xl font-bold text-gray-900">$109.99</p>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg transition duration-300 w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 flex flex-col">
            <img src="/s.webp" alt="Warrior Boots" className="w-full h-64 object-cover" />
            <div className="flex flex-col p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Warrior Boots</h3>
              <p className="text-lg text-gray-600 mb-4">
                These boots provide +40 Movement Speed and +22 Physical Defense, making them ideal for tough battles.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-xl font-bold text-gray-900">$109.99</p>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg transition duration-300 w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 flex flex-col">
            <img src="/v.webp" alt="Swift Boots" className="w-full h-64 object-cover" />
            <div className="flex flex-col p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Swift Boots</h3>
              <p className="text-lg text-gray-600 mb-4">
                These boots boost +40 Movement Speed and +15% Attack Speed, perfect for quick, agile movements.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-xl font-bold text-gray-900">$109.99</p>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg transition duration-300 w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 flex flex-col">
            <img src="/z.webp" alt="Rapid Boots" className="w-full h-64 object-cover" />
            <div className="flex flex-col p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Rapid Boots</h3>
              <p className="text-lg text-gray-600 mb-4">
                These boots grant +65 Movement Speed and +35% Slow Reduction, with a tactical trade-off after damage.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-xl font-bold text-gray-900">$109.99</p>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg transition duration-300 w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
