
import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={{marginTop:'80px'}} >
      <input className='search-input'
        type="text"
        placeholder="Enter city name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
