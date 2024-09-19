import React, { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
import { useCartStore } from "../../store/cartStore";
import { formatCurrency } from "../../utils/formatCurrency";
import ToastNotification from "../ToastNotification/ToastNotification";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product }) => {
  const { addItem, updateQuantity, cartItems } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    setQuantity(productInCart ? productInCart.quantity : 1);
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    if (cartItems.some((item) => item.id === product.id)) {
      updateQuantity(product.id, quantity);
    } else {
      addItem(product, quantity);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <>
    {
      showToast && <ToastNotification
      message="this product has been added successfully!"
      duration={3000}
      onClose={() => setShowToast(false)}
    />
    }
    <section className={styles.productInfo}>
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.price}>Rs {formatCurrency(product.price)}</p>
      <StarRating rating={product.rating.rate} count={product.rating.count} />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.container}>
        <div className={styles.quantityContainer}>
          <button className={styles.quantityButton} onClick={handleDecreaseQuantity}>-</button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.quantityButton} onClick={handleIncreaseQuantity}>+</button>
        </div>
        <button className={styles.addToCart} onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
      <div className={styles.line}></div>
      <p className={styles.category}>
        Category <span>:</span> {product.category}
      </p>
    </section>
    </>
  );
};

export default ProductDetails;
