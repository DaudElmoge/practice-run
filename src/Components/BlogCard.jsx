import React from "react";// This component is responsible for rendering individual blog cards

export function BlogCard({ blog }) {// The BlogCard component takes in a blog object as a prop
  // It destructures the blog object to extract the title and content
  // const { title, content } = blog;
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
      <p className="text-gray-600">{blog.content}</p>
    </div>
  );
}
