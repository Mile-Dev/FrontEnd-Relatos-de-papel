import axios from 'axios'

const endPoint = 'https://apirelatosdepapel.ingenius-soft.com/api/payment'

const paymentService = {
  createPayment: (model) => axios.post(`${endPoint}`, model),
}

export default paymentService
