import React from "react";

const FeaturedBlogs = ({ blog }) => {
  if (!blog) {
    return (
      <p className="text-gray-500 text-center mt-4">No featured blog yet.</p>
    );
  }
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-2xl shadow mb-6">
      <h2 className="text-xl font-bold text-blue-800">Featured Blog</h2>
      <h3 className="text-lg font-semibold mt-2 text-blue-700">{blog.title}</h3>
      <p className="text-blue-600">{blog.content}</p>
    </div>
  );
};

export default FeaturedBlogs;
