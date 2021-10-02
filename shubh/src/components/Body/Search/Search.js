import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="search">
      <h2>SEARCH</h2>
      <form className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Enter Search Term"
        />
        <button className="search__icon">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
