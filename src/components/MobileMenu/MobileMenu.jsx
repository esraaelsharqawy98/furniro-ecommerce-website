import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import { FiAlignLeft } from "react-icons/fi";

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    
  return (
    <>
      <div className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.container}>
          <button onClick={toggleMobileMenu}>
            <FiAlignLeft className={styles.closeButton} />
          </button>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className={styles.navLink} onClick={toggleMobileMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink} onClick={toggleMobileMenu}>
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
        />
      )}
    </>
  );
};

export default MobileMenu;
