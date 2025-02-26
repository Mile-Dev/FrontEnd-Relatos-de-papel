import axios from 'axios';

const endPoint = 'http://localhost:8089';

const productService = {
  getProducts: () => axios.get(`${endPoint}/products`), // Endpoint en el Gateway
  getProductById: (id) => axios.get(`${endPoint}/products/${id}`),
};

export default productService;
