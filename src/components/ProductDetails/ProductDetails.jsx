import React from "react";
import styles from "./ProductDetails.module.css";
import StarRating from "../StarRating/StarRating";
import { useCartStore } from "../../store/cartStore";
import useProductStore from "../../store/productStore";
import { formatCurrency } from "../../utils/formatCurrency";
const ProductDetails = ({ product }) => {
  const { selectedQuantity, increaseQuantity, decreaseQuantity } = useProductStore();
  const { addItem} = useCartStore();

  const handleAddToCart = () => {
    addItem(product , selectedQuantity);
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
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className={styles.quantity} aria-live="polite">
            {selectedQuantity}
          </span>
          <button
            className={styles.quantityButton}
            onClick={increaseQuantity}
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
