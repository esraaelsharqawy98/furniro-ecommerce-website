import React from "react";
import styles from "./CartMenu.module.css";
import shoppingIcon from "/images/shopping.svg";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

const CartMenu = ({ isCartMenuOpen, toggleCartMenu }) => {
  const { cartItems , subtotal} = useCartStore();
  const isScrollable = cartItems?.length > 4;

  return (
    <>
      <div className={`${styles.CartMenu} ${isCartMenuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.container}>
          <div className={styles.cartHeader}>
            <button 
              className={styles.btn} 
              onClick={toggleCartMenu}
              aria-label="Toggle Cart Menu"
            >
              <img src={shoppingIcon} alt="Shopping cart icon" />
            </button>
            <h2 className={styles.title}>Shopping Cart</h2>
            <div className={styles.line}></div>
          </div>
          <div className={`${styles.cartBody} ${isScrollable ? styles.scrollable : ""}`}>
            { cartItems.length === 0 ? (
              <p className={styles.emptyMessage}>Cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
        <div className={styles.menuFooter}>
          <div className={styles.subtotal}>
            <h3 className={styles.subtitle}>Subtotal</h3>
            <p className={styles.price}>Rs. {subtotal.toFixed(2)}</p>
          </div>
          <div className={styles.line}></div>
          <Link to="/cart" className={styles.cartBtn} onClick={toggleCartMenu}>
             Cart
          </Link>
        </div>
      </div>
      {isCartMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={toggleCartMenu}
          aria-label="Close Cart Menu"
        />
      )}
    </>
  );
};

export default CartMenu;
