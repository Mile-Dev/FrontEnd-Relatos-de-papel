import React from 'react';
import ProductCard from './productCard/ProductCard';
import SearchBar from '../../components/SearchBar';

const ProductListContent = ({ filteredProductsList, onSearch, onAddToCart }) => {
  console.log( onSearch)
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <div style={styles.container}>
        {filteredProductsList.length > 0 ? (
          filteredProductsList.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '16px',
  },
};

export default ProductListContent;
