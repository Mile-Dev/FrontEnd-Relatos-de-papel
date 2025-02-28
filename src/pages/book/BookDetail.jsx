import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookDetail.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";


import useReviews from "../../hooks/useReviews";

import productService from "../../services/productService";

const BookDetail = ({ onAddToCart }) => {
  const { id } = useParams();


  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [baseReviews, setBaseReviews] = useState([]);

  const {
    reviews,
    addReview: addReviewLocal,
    likeReview: likeReviewLocal,
    dislikeReview: dislikeReviewLocal,
    calculateAverageRating,
  } = useReviews(baseReviews);


  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);


  useEffect(() => {
    productService
      .getProductById(id)
      .then((response) => {
        const productData = response.data;
        setProduct(productData);
        setBaseReviews(productData.reviews || []);
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setError("No se pudo cargar el producto.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);


  const persistReviews = async (updatedReviews) => {
    if (!id) {
      console.error("Error: ID del libro es undefined, no se puede actualizar.");
      return;
    }

    try {
      console.log("Enviando PATCH a:", `http://localhost:8087/api/books/${id}/reviews`);
      console.log("Datos enviados:", updatedReviews);

      await productService.updateReviews(id, updatedReviews);
    } catch (error) {
      console.error("Error al actualizar reseñas en el servidor:", error);
    }
  };

  const handleLike = (reviewIndex) => {
    const updatedReviews = reviews.map((review, index) => {
      if (index === reviewIndex) {
        return {
          ...review,
          likes: review.userLiked ? review.likes - 1 : review.likes + 1,
          userLiked: !review.userLiked,
          dislikes: review.userDisliked ? review.dislikes - 1 : review.dislikes,
          userDisliked: false,
        };
      }
      return review;
    });

    likeReviewLocal(reviewIndex);

    persistReviews(updatedReviews);
  };

  const handleDislike = (reviewIndex) => {
    const updatedReviews = reviews.map((review, index) => {
      if (index === reviewIndex) {
        return {
          ...review,
          dislikes: review.userDisliked ? review.dislikes - 1 : review.dislikes + 1,
          userDisliked: !review.userDisliked,
          likes: review.userLiked ? review.likes - 1 : review.likes,
          userLiked: false,
        };
      }
      return review;
    });

    dislikeReviewLocal(reviewIndex);

    persistReviews(updatedReviews);
  };

  const handleAddReview = () => {
    if (!newComment.trim() || rating === 0) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, escribe un comentario y elige una calificación.",
      });
      return;
    }

    const newReview = {
      comment: newComment,
      rating,
      likes: 0,
      dislikes: 0,
      userLiked: false,
      userDisliked: false,
    };

    const updatedReviews = [...reviews, newReview];

    addReviewLocal(newComment, rating);

    persistReviews(updatedReviews);

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

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
      Swal.fire({
        icon: "success",
        title: "¡Libro agregado al carrito!",
        text: `${product.title} ha sido agregado a tu carrito.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="book-detail__container">
      <div className="book-detail__main">
        <div className="book-detail__image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="book-detail__info">
          <h1><b>{product.title}</b></h1>
          <h3>{product.author}</h3>
          <div className="delivery-info">Envío: 3 días hábiles</div>
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
            <button
              className="btn btn-success align__center"
              onClick={handleAddReview}
            >
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
              <p>
                <strong>Comentario:</strong> {review.comment}
              </p>
              <p>
                <strong>Calificación:</strong> {"⭐".repeat(review.rating)} (
                {review.rating}/5)
              </p>
              <div className="likes-dislikes">
                <button
                  className={`like-button ${review.userLiked ? 'active' : ''}`}
                  onClick={() => handleLike(index)}
                >
                  <FontAwesomeIcon icon={faThumbsUp} /> {review.likes}
                </button>
                <button
                  className={`dislike-button ${review.userDisliked ? 'active' : ''}`}
                  onClick={() => handleDislike(index)}
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
