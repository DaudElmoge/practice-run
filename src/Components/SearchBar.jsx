import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
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
