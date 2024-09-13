import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInfo}>
          <div className={styles.left}>
            <h1>Funiro.</h1>
            <address className={styles.address}>
              400 University Drive Suite 200 <br />
              Coral Gables, FL 33134 USA
            </address>
          </div>
          <div className={styles.right}>
            <nav className={styles.footerLinks}>
              <div className={styles.links}>
                <h5>Links</h5>
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
                    <Link to="/about" className={styles.navLink}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className={styles.navLink}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.links}>
                <h5>Help</h5>
                <ul className={styles.navList}>
                  <li>
                    <Link to="/payment-options" className={styles.navLink}>
                      Payment Options
                    </Link>
                  </li>
                  <li>
                    <Link to="/returns" className={styles.navLink}>
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policies" className={styles.navLink}>
                      Privacy Policies
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className={styles.subscribe}>
              <h5>Newsletter</h5>
              <form className={styles.inputGroup}>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  className={styles.input}
                  aria-label="Email Address"
                />
                <button type="submit" className={styles.btn}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p> 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
