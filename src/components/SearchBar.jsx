import React, { useState } from 'react';
import '../App.css';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const term = e.target.value;
    setInputValue(term);
    onSearch(term);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar libros..."
        value={inputValue}
        onChange={handleInputChange}
        className="search-bar__input"
      />
      <button
        className="search-bar__button"
        onClick={() => onSearch(inputValue)}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
