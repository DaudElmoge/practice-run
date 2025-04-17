import React from "react";

export function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
      <p className="text-gray-600">{blog.content}</p>
    </div>
  );
}
