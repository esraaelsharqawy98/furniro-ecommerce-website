import React from "react";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/productStore";

const ProductItem = ({ product }) => {
  const { setSelectedProduct } = useProductStore();

  const handleOnClick = () => {
    setSelectedProduct(product);
  };

  return (
    <div className={styles.product} role="region" aria-labelledby={`product-${product.id}`}>
      <div className={styles.productImg}>
        <img src={product.image} alt={product.title} />
        <div className={styles.overlay}>
          <button
            className={styles.addToCart}
            aria-label={`Add ${product.title} to cart`}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <Link
          to={`/product/${product.id}`}
          className={styles.link}
          onClick={handleOnClick}
          aria-label={`View details for ${product.title}`}
        >
          <h2 className={styles.productTitle}>{product.title}</h2>
        </Link>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
