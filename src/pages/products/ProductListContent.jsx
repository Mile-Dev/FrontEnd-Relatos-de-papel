import React, { useState, useEffect } from 'react';
import ProductCard from './productCard/ProductCard';
import SearchBar from '../../components/SearchBar';
import productService from '../../services/productService';

const ProductListContent = ({ filteredProductsList, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    productService.getProducts()
      .then((response) => {
        const data = response.data;
        const booksArray = data.books || [];
        setProducts(booksArray);
        setFilteredProducts(booksArray);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
        setError('No se pudieron cargar los productos.');
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  const listToRender = (Array.isArray(filteredProductsList) && filteredProductsList.length > 0)
    ? filteredProductsList
    : filteredProducts;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div style={styles.container}>
        {listToRender.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
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
