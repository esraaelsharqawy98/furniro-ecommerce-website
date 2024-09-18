import React, { useState, useEffect } from "react";
import styles from "./ProductDetails.module.css";
import StarRating from "../StarRating/StarRating";
import { useCartStore } from "../../store/cartStore";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductDetails = ({ product }) => {
  const { addItem, updateQuantity, cartItems } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setQuantity(productInCart.quantity);
    } else {
      setQuantity(1);
    }
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    if (cartItems.some((item) => item.id === product.id)) {
      updateQuantity(product.id, quantity);
    } else {
      addItem(product, quantity);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <section className={styles.productInfo}>
      <h2 className={styles.title}>
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
          >
            -
          </button>
          <span className={styles.quantity}>
            {quantity}
          </span>
          <button
            className={styles.quantityButton}
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <button
          className={styles.addToCart}
          onClick={handleAddToCart}
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
