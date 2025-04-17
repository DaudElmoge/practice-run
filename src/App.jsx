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
    fetch("http://localhost:3005/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs || data)) // supports both raw array or { blogs: [...] }
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);
  const addPost = (newBlog) => setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div>
        <h1>BlogCard</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {blogs.length > 0 && <FeaturedBlogs blog={blogs[0]} />}
        {filteredBlogs.map((blogs) => (
          <BlogCard key={blogs.id} blog={blogs} />
        ))}
        <FeaturedBlogs />
        <BlogForm onAddBlog={addPost} />
      </div>
    </>
  );
}

export default App;
