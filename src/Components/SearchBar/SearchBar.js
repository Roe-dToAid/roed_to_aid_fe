import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ inputRef, handleSearchChange }) => {
  return (
    <div className="search-container">
      <span className="material-symbols-outlined">search</span>
      <input
        ref={inputRef}
        className="search"
        type="search"
        placeholder="Search for state..."
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
