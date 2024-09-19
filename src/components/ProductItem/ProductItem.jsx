import React, { useState } from "react";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";
import { formatCurrency } from "../../utils/formatCurrency";
import ToastNotification from "../ToastNotification/ToastNotification";

const ProductItem = ({ product }) => {
  const { setSelectedProduct } = useProductStore();
  const { addItem, cartItems, updateQuantity } = useCartStore();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const currentQuantity = productInCart ? productInCart.quantity : 1;
  const [showToast, setShowToast] = useState(false);

  const handleProductSelect = () => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (productInCart) {
      updateQuantity(product.id, currentQuantity + 1);
    } else {
      addItem(product, 1);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <>
      <div className={styles.product}>
        <div className={styles.productImg}>
          <img src={product.image} alt={product.title} />
          <div className={styles.overlay}>
            <button className={styles.addToCart} onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
        <div className={styles.productInfo}>
          <Link
            to={`/product/${product.id}`}
            className={styles.link}
            onClick={handleProductSelect}
          >
            <h2
              id={`product-title-${product.id}`}
              className={styles.productTitle}
            >
              {product.title}
            </h2>
          </Link>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>Rs. {formatCurrency(product.price)}</p>
        </div>
      </div>
      {showToast && (
        <ToastNotification
          message="this product has been added successfully!"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ProductItem;
