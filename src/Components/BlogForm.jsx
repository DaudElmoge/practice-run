import { useState } from "react";

const BlogForm = ({ onAddBlog }) => {// This component is responsible for rendering the form to add a new blog
  // It takes in a prop onAddBlog, which is a function to handle the addition of a new blog
  // The component uses the useState hook to manage the state of the title and content inputs
  const [title, setTitle] = useState("");// The title state variable is initialized to an empty string
  const [content, setContent] = useState("");// The content state variable is also initialized to an empty string

  const handleSubmit = (e) => {// This function handles the form submission
    // It prevents the default form submission behavior
    e.preventDefault();

    const newBlog = { title, content };// A new blog object is created with the current title and content

    fetch("http://localhost:3000/blogs", {// A POST request is made to the server to add the new blog
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
      onSubmit={handleSubmit}// This function is called when the form is submitted
      className="bg-gray-100 p-6 rounded-2xl shadow"
    >
      <h3 className="text-lg font-bold mb-4 text-gray-700">Add new blog</h3>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}// This function updates the title state variable
        required//the input is required
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
