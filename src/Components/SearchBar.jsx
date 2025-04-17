import React from "react";// This component is responsible for rendering the search bar
// It allows users to filter blogs based on their title

const SearchBar = ({ searchTerm, setSearchTerm }) => {// The SearchBar component takes in two props: searchTerm and setSearchTerm
  // searchTerm is the current value of the search input
  return (// The component returns a JSX element
    <input
      type="text"
      placeholder="Search blogs"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 mb-6"
    />
  );
};

export default SearchBar;
