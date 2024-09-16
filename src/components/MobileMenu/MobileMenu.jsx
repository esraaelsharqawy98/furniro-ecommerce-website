import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({isMobileMenuOpen,toggleMobileMenu}) => {
  return (
   <>
    <div className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.container}>
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
      </div>
    </div>
    {isMobileMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={toggleMobileMenu}
          aria-label="Close Mobile Menu"
        />
      )}
   </>
  );
};

export default MobileMenu;
