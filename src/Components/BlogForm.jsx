import { useState } from "react";

const BlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = { title, content };

    fetch("http://localhost:3005/blogs", {
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
    <form onSubmit={handleSubmit}>
      <h3>Add new blog</h3>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />

      <textarea
        placeholder="Add your content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <br />

      <button type="submit">Add blog</button>
    </form>
  );
};

export default BlogForm;
