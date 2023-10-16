import React from 'react';
import './styles.css'; // Import the styles.css file

function Search() {
  return (
    <div className="search">
      <input type="text" id="searchInput" placeholder="Enter an ingredient..." />
      <button id="searchButton">Search</button>
    </div>
  );
}

export default Search;
