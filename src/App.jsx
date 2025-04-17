import { useEffect, useState } from "react";
import "./App.css";
import { BlogCard } from "./Components/BlogCard";
import BlogForm from "./Components/BlogForm";
import FeaturedBlogs from "./Components/FeaturedBlogs";
import SearchBar from "./Components/SearchBar";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs || data)) // supports both { blogs: [] } or raw array
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);

  const addPost = (newBlog) => setBlogs((prevBlogs) => [...prevBlogs, newBlog]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
        Blogs
      </h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <FeaturedBlogs />
      <BlogForm onAddBlog={addPost} />
    </div>
  );
}

export default App;
