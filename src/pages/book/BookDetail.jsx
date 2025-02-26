import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetail.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import useReviews from '../../hooks/useReviews'

const BookDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { reviews, addReview, likeReview, dislikeReview, calculateAverageRating } = useReviews(
    product.reviews || []
  );

  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    Swal.fire({
      icon: "success",
      title: "¡Libro agregado al carrito!",
      text: `${product.title} ha sido agregado a tu carrito.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddReview = () => {
    addReview(newComment, rating);
    setNewComment("");
    setRating(0);
    Swal.fire({
      icon: "success",
      title: "¡Comentario agregado!",
      text: "Tu comentario ha sido añadido con éxito.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const renderStars = (average) => {
    const fullStars = Math.floor(average);
    const halfStar = average % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"⭐".repeat(fullStars)}
        {halfStar && "⭐"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="book-detail__container">
      <div className="book-detail__main">
        <div className="book-detail__image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="book-detail__info">
          <h1><b>{product.title}</b></h1>
          <h3>{product.author}</h3>
          <div className="delivery-info">
            Envío: 3 días hábiles
          </div>
          <h3>{product.category}</h3>
          <h3>{product.subcategory}</h3>
          <div className="ratings">
            <h4>Valoración promedio:</h4>
            {renderStars(calculateAverageRating())} ({calculateAverageRating()}/5)
          </div>
        </div>

        <div className="book-detail__price--and--button">
          <div className="book-detail__price">
            <span className="new">Libro Nuevo</span>
            <span className="price">${product.price}</span>
          </div>
          <button className="button" onClick={handleAddToCart}>
            Agregar Al Carrito
          </button>
          <div className="book-detail__comments--form">
            <h4>Deja tu comentario:</h4>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe tu comentario aquí..."
              rows="4"
              className="comment-textarea"
            />
            <div className="rating">
              <label>Calificación:</label>
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className={`star ${star <= rating ? "active" : ""}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <button className="btn btn-success align__center" onClick={handleAddReview}>
              Enviar Comentario
            </button>
          </div>
        </div>
      </div>

      <div className="book-detail__extra book-detail__obs">
        <h4>Descripción:</h4>
        <p>{product.description}</p>
      </div>

      <div className="book-detail__reviews book-detail__comments">
        <h4>Comentarios:</h4>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <p><strong>Comentario:</strong> {review.comment}</p>
              <p><strong>Calificación:</strong> {"⭐".repeat(review.rating)} ({review.rating}/5)</p>
              <div className="likes-dislikes">
                <button
                  className={`like-button ${review.userLiked ? "active" : ""}`}
                  onClick={() => likeReview(index)}
                >
                  <FontAwesomeIcon icon={faThumbsUp} /> {review.likes}
                </button>
                <button
                  className={`dislike-button ${review.userDisliked ? "active" : ""}`}
                  onClick={() => dislikeReview(index)}
                >
                  <FontAwesomeIcon icon={faThumbsDown} /> {review.dislikes}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay comentarios disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
