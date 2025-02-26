import { useState } from "react";

const useReviews = (initialReviews = []) => {
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (comment, rating) => {
    const newReview = {
      comment,
      rating,
      likes: 0,
      dislikes: 0,
      userLiked: false,
      userDisliked: false,
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  const likeReview = (index) => {
    setReviews((prevReviews) =>
      prevReviews.map((review, i) =>
        i === index
          ? {
            ...review,
            likes: review.userLiked ? review.likes - 1 : review.likes + 1,
            dislikes: review.userDisliked ? review.dislikes - 1 : review.dislikes,
            userLiked: !review.userLiked,
            userDisliked: false,
          }
          : review
      )
    );
  };

  const dislikeReview = (index) => {
    setReviews((prevReviews) =>
      prevReviews.map((review, i) =>
        i === index
          ? {
            ...review,
            dislikes: review.userDisliked ? review.dislikes - 1 : review.dislikes + 1,
            likes: review.userLiked ? review.likes - 1 : review.likes,
            userDisliked: !review.userDisliked,
            userLiked: false,
          }
          : review
      )
    );
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  return {
    reviews,
    addReview,
    likeReview,
    dislikeReview,
    calculateAverageRating,
  };
};

export default useReviews;
