import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "/images/icon-cart.svg";
import LogoImg from "/images/logo.svg";
import styles from "./Header.module.css";
import CartMenu from "../../components/CartMenu/CartMenu";
import { useCartStore } from "../../store/cartStore";
const Header = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const isCartPage = useLocation().pathname === "/cart";
  const {cartItems} = useCartStore();
  
  const toggleCartMenu = () => {
     if (!isCartPage) {
      setIsCartMenuOpen((prevState) => !prevState)
    };
  };


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
            <img src={LogoImg} alt="Funiro logo" className={styles.logoImg} />
            <h1 className="sr-only">Funiro</h1>
        </div>

        <nav aria-label="Primary Navigation">
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className={styles.navLink}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleCartMenu}
          className={styles.cartButton}
          aria-expanded={isCartMenuOpen}
          aria-controls="cart-menu"
          aria-label="Toggle Cart Menu"
        >{
          !isCartPage && cartItems.length > 0 && 
          (<span className={styles.cartCount}>{cartItems.length}</span>)
        }
          <img src={CartIcon} alt="Shopping cart" className={styles.cartImg} />
        </button>

        <CartMenu isCartMenuOpen={isCartMenuOpen} toggleCartMenu={toggleCartMenu} />
      </div>
    </header>
  );
};

export default Header;
