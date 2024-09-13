import React from "react";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductItem = ({ product }) => {
  const { setSelectedProduct} = useProductStore();
  const {addItem} = useCartStore();

  const handleProductSelect = () => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    addItem(product,1)
  };

  return (
    <div className={styles.product} role="region" aria-labelledby={`product-${product.id}`}>
      <div className={styles.productImg}>
        <img src={product.image} alt={product.title} />
        <div className={styles.overlay}>
          <button
            className={styles.addToCart}
            aria-label={`Add ${product.title} to cart`}
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <Link
          to={`/product/${product.id}`}
          className={styles.link}
          onClick={handleProductSelect}
          aria-labelledby={`product-title-${product.id}`}
        >
          <h2 id={`product-title-${product.id}`} className={styles.productTitle}>
            {product.title}
          </h2>
        </Link>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>Rs. {formatCurrency(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
