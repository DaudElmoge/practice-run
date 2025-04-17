import React from "react";

const FeaturedBlogs = ({ blog }) => {// This component is responsible for rendering the featured blog
  // It takes in a blog object as a prop
  // The component checks if the blog object is available
  // If not, it returns a message indicating that there is no featured blog yet
  // If the blog object is available, it renders the blog title and content
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
