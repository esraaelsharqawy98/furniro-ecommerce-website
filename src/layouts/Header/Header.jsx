import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "/images/icon-cart.svg";
import { FaAlignLeft } from "react-icons/fa";
import LogoImg from "/images/logo.svg";
import styles from "./Header.module.css";
import CartMenu from "../../components/CartMenu/CartMenu";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import { useCartStore } from "../../store/cartStore";

const Header = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isCartPage = useLocation().pathname === "/cart";
  const { cartItems } = useCartStore();

  const toggleCartMenu = () => {
    if (!isCartPage) {
      setIsCartMenuOpen((prevState) => !prevState);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <button
          className={styles.mobileMenuButton}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle Mobile Menu"
          onClick={toggleMobileMenu}
        >
          <FaAlignLeft />
        </button>
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
        >
          {!isCartPage && cartItems.length > 0 && (
            <span className={styles.cartCount}>{cartItems.length}</span>
          )}
          <img src={CartIcon} alt="Shopping cart" className={styles.cartImg} />
        </button>

        <CartMenu isCartMenuOpen={isCartMenuOpen} toggleCartMenu={toggleCartMenu} />

        {isMobileMenuOpen && <MobileMenu  isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu}/>}
      </div>
    </header>
  );
};

export default Header;
