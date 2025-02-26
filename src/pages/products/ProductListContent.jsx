import React, { useState, useEffect } from 'react';
import ProductCard from './productCard/ProductCard';
import SearchBar from '../../components/SearchBar';
import products from '../products/list/products';

const ProductListContent = ({ filteredProductsList, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const combinedProducts = React.useMemo(() => {
    return [...products];
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(combinedProducts);
    } else {
      const filtered = combinedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, combinedProducts]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  console.log(typeof onAddToCart);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div style={styles.container}>
        {filteredProductsList.length > 0
          ? filteredProductsList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
          : filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
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
