import React from 'react';
import ProductListContent from '../pages/products/ProductListContent';

const ProductList = ({ filteredProductsList, onAddToCart }) => {
  return (
    <div>
      <h1>Más Populares</h1>
      <ProductListContent
        filteredProductsList={filteredProductsList}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default ProductList;
