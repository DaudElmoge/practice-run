import { useEffect, useState } from "react";
import "./App.css";
import { BlogCard } from "./Components/BlogCard";
import BlogForm from "./Components/BlogForm";
import FeaturedBlogs from "./Components/FeaturedBlogs";
import SearchBar from "./Components/SearchBar";

function App() {// This component is responsible for rendering the main application
  // It uses the useState hook to manage the state of the blogs and the search term
  const [blogs, setBlogs] = useState([]);// The blogs state variable is initialized to an empty array
  // This array will hold the blog objects fetched from the server
  // The setBlogs function is used to update the blogs state variable
  const [searchTerm, setSearchTerm] = useState("");// The searchTerm state variable is initialized to an empty string
  // This string will hold the current value of the search input
  // The setSearchTerm function is used to update the searchTerm state variable
  // The useEffect hook is used to fetch the blogs from the server when the component mounts

  useEffect(() => {// This function is called when the component mounts
    // It makes a GET request to the server to fetch the blogs
    // The fetch function is used to make the request
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs || data)) // supports both { blogs: [] } or raw array
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);

  const addPost = (newBlog) => setBlogs((prevBlogs) => [...prevBlogs, newBlog]);// This function is used to add a new blog to the blogs state variable
  // It takes in a newBlog object as a parameter
  // The function uses the setBlogs function to update the blogs state variable
  // It appends the newBlog object to the existing array of blogs
  // The prevBlogs parameter is the previous state of the blogs array
  // The spread operator (...) is used to create a new array that contains all the elements of the prevBlogs array

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())// This function filters the blogs based on the search term
  // It takes in a blog object as a parameter
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
