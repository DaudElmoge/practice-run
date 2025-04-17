import React from "react";

const FeaturedBlogs = ({ blogs }) => {
  if (!blogs) {
    return <p>No featured blog yet.</p>;
  }
  return (
    <div>
      <h2>Featured Blog</h2>
      <h3>{blogs.title}</h3>
      <p>{blogs.content}</p>
    </div>
  );
};

export default FeaturedBlogs;
