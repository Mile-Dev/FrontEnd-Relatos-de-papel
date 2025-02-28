import axios from 'axios'

const endPoint = 'https://apirelatosdepapel.ingenius-soft.com/api/books'

const productService = {
  getProducts: () => axios.get(`${endPoint}`), // Listar libros
  getProductById: (id) => axios.get(`${endPoint}/${id}`), // Obtener libro por ID
  updateReviews: (id, updatedReviews) => axios.patch(`${endPoint}/${id}/reviews`, updatedReviews),
}

export default productService
