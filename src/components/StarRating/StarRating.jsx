import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './StarRating.module.css'
const StarRating = ({ rating, maxRating = 5 , count }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className={styles.star} />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
      } else {
        stars.push(<FaRegStar key={i} className={styles.star} />);
      }
    }

    return stars;
  };
  return <div  className={styles.container}>{renderStars()} <span className={styles.count}>( {count} )</span></div>;
};

export default StarRating;
