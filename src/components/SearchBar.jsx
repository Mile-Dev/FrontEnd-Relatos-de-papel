import React, { useState } from 'react';
import '../App.css';

const SearchBar = ({ onSearch = () => {} }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    console.log("🔍 Ejecutando búsqueda para:", inputValue);
    onSearch(inputValue); // Se asegura de que onSearch sea una función
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar libros..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-bar__input"
      />
      <button
        className="search-bar__button"
        onClick={handleSearchClick}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
