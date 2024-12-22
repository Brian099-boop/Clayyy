import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
  // State to hold product data
  const [products, setProducts] = useState([]);

  // Fetch data from a fake API (JSONPlaceholder)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Slice to show only 9 items
  const limitedProducts = products.slice(0, 9);

  return (
    <div className="container mx-auto py-10 bg-gray-100">
      <h2 className="text-4xl text-center font-bold mb-10 text-indigo-600">Shop</h2>
      
      {/* Product Grid - 3 items per row with wider cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {limitedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-xl transition duration-300 ease-in-out max-w-sm mx-auto hover:ring-4 hover:ring-black hover:ring-opacity-60"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="px-6 py-6">
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.description.slice(0, 80)}...</p>
              <p className="text-xl font-bold text-indigo-500 mt-4">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
