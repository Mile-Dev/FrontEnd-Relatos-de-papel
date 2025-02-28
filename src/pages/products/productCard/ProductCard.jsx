import React from 'react'
import Swal from 'sweetalert2'
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate()

  if (!product) {
    return null
  }

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product)
      Swal.fire({
        icon: 'success',
        title: '¡Libro agregado al carrito!',
        text: `${product.title} ha sido agregado a tu carrito.`,
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  const handleViewDetails = () => {
    navigate(`/book/${product.id}`)
  }

  const hasDiscount = product.discount && product.discount > 0

  const discountedPrice = hasDiscount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product.price

  return (
    <div className="card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
          className="image"
          onClick={handleViewDetails}
        />
      </div>

      <h3 className="title">{product.title}</h3>
      <p className="author">{product.author}</p>

      <div className="pricing">
        {hasDiscount && (
          <span className="discount">
            {product.discount}% dcto.
          </span>
        )}
        <span className="price"> ${product.price}</span>


      </div>

      <div className="button-container">
        <button className="button-yellow" onClick={handleViewDetails}>
          <FontAwesomeIcon className="button-yellow" icon={faEye} />
        </button>
        <button className="button" onClick={handleAddToCart}>
          <FontAwesomeIcon className="button" icon={faCartPlus} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
