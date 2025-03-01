import axios from 'axios'

const endPoint = 'https://apirelatosdepapel.ingenius-soft.com/api/books'
// const endPoint = 'http://localhost:8087/api/books'

const productService = {
  getProducts: () => axios.get(`${endPoint}`),
  getProductById: (id) => axios.get(`${endPoint}/${id}`),
  updateReviews: (id, updatedReviews) => axios.patch(`${endPoint}/${id}/reviews`, updatedReviews),
  getProductsParams: (search) => axios.get(`${endPoint}?search=${search}`)

}

export default productService
