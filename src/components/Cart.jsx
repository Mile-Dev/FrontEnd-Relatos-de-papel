import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import './../App.css'

const Cart = ({ cart, onIncrement, onDecrement, onRemove }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="cart">
      <h2 className="cart__title">Carrito</h2>
      {cart.length === 0 ? (
        <p className="cart__empty">No hay productos en el carrito</p>
      ) : (
        <div>
          <ul className="cart__list">
            {cart.map((item) => (
              <li key={item.id} className="cart__item">
                <div className="cart__item-info">
                  <div className="cart__item-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart__item-image"
                    />
                  </div>
                  <h4 className="cart__item-title">{item.title}</h4>
                  <p className="cart__item-author">{item.author}</p>
                  <p className="cart__item-price">${item.price.toFixed(2)}</p>
                  <p className="cart__item-quantity">
                    <b>Cantidad: {item.quantity}</b>
                  </p>
                </div>
                <div className="cart__item-actions">
                  <button
                    className="cart__button cart__button--decrement"
                    onClick={() => onDecrement(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    className="cart__button cart__button--increment"
                    onClick={() => onIncrement(item)}
                  >
                    +
                  </button>
                  <button
                    className="cart__button cart__button--remove"
                    onClick={() => onRemove(item)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>

          {/* Mostrar el botón solo si no está en /checkout */}
          {location.pathname !== '/checkout' && (
            <button
              className="btn btn-success"
              onClick={() => navigate('/checkout')}
            >
              Proceder con el Pago
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Cart
