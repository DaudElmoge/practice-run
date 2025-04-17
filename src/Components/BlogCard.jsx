import React from "react";// This component is responsible for rendering individual blog cards

export function BlogCard({ blog, onDelete }) {// The BlogCard component takes in a blog object and an onDelete function as props
  // It destructures the blog object to extract the title and content
  // const { title, content } = blog;
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
      {blog.image && (// If the blog object has an image property, it renders the image
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      )}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
      <p className="text-gray-600">{blog.content}</p>
      <button onClick={() => onDelete(blog.id)}// This function is called when the delete button is clicked
      // It takes in the blog id as a parameter
      // The onDelete function is passed down from the parent component
      // It calls the onDelete function with the blog id
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Delete
      </button>
    </div>
  );
}
