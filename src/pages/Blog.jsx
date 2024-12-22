import React from 'react';

const Blog = () => {
  // Sample blog post data
  const posts = [
    {
      id: 1,
      title: "How to Choose the Perfect Pair of Sneakers",
      description: "Discover the key features to look for when choosing the best sneakers for comfort and style.",
      image: "1.jpg",
    },
    {
      id: 2,
      title: "Caring for Your Leather Shoes",
      description: "Learn how to maintain and care for your leather shoes to keep them looking their best for years.",
      image: "2.jpg",
    },
    {
      id: 3,
      title: "Top 5 Shoe Trends This Season",
      description: "Stay on top of the latest shoe trends, from bold sneakers to stylish boots for every occasion.",
      image: "3.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-10 bg-gray-100">
      <h2 className="text-4xl text-center font-bold mb-10 text-indigo-600">Blog</h2>
      
      {/* Blog Post Grid - 3 items per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="px-6 py-6">
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <a
                href="#"
                className="text-indigo-500 mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
