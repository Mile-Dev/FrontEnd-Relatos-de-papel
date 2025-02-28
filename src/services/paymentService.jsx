
import axios from 'axios';
const endPoint = 'https://apirelatosdepapel.ingenius-soft.com/api/payment/orders'
// const endPoint = 'http://localhost:8087/api/payment/orders';

const paymentService = {
  createPayment: (model) =>
    axios.post(endPoint, model, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};

export default paymentService;
