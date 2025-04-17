import { useState } from "react";

const BlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = { title, content };

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddBlog(data);
        setTitle("");
        setContent("");
      })
      .catch((err) => console.error("Error posting blog:", err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-2xl shadow"
    >
      <h3 className="text-lg font-bold mb-4 text-gray-700">Add new blog</h3>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
      <br />

      <textarea
        placeholder="Add your content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
      <br />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add blog
      </button>
    </form>
  );
};

export default BlogForm;
