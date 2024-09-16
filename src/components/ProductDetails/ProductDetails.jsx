import React, { useState, useEffect } from "react";
import styles from "./ProductDetails.module.css";
import StarRating from "../StarRating/StarRating";
import { useCartStore } from "../../store/cartStore";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductDetails = ({ product }) => {
  const { addItem, updateQuantity, cartItems } = useCartStore();
  const [localQuantity, setLocalQuantity] = useState(1);

  useEffect(() => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setLocalQuantity(productInCart.quantity);
    } else {
      setLocalQuantity(1);
    }
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    if (cartItems.some((item) => item.id === product.id)) {
      updateQuantity(product.id, localQuantity);
    } else {
      addItem(product, localQuantity);
    }
  };

  const handleIncreaseQuantity = () => {
    setLocalQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setLocalQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <section className={styles.productInfo} aria-labelledby={`product-details-${product.id}`}>
      <h2 id={`product-details-${product.id}`} className={styles.title}>
        {product.title}
      </h2>
      <p className={styles.price}>Rs {formatCurrency(product.price)}</p>
      <StarRating rating={product.rating.rate} count={product.rating.count} />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.container}>
        <div className={styles.quantityContainer}>
          <button
            className={styles.quantityButton}
            onClick={handleDecreaseQuantity}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className={styles.quantity} aria-live="polite">
            {localQuantity}
          </span>
          <button
            className={styles.quantityButton}
            onClick={handleIncreaseQuantity}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          className={styles.addToCart}
          onClick={handleAddToCart}
          aria-label={`Add ${product.title} to cart`}
        >
          Add to cart
        </button>
      </div>
      <div className={styles.line}></div>
      <p className={styles.category}>
        Category <span>:</span> {product.category}
      </p>
    </section>
  );
};

export default ProductDetails;
