import React from "react";
import styles from "./Breadcrumb.module.css";
import { NavLink } from "react-router-dom";
import arrow from "/images/arrow.svg";
const Breadcrumb = ({productname}) => {
  return (
    <section className={styles.breadcrumb}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li>
            <NavLink to={"/"} className={styles.navLink}>Home</NavLink>
          </li>
          <li>
          <img src={arrow} alt="arrow icon" />
          </li>
          <li>
            <NavLink to={"/shop"} className={styles.navLink}>Shop</NavLink>
          </li>
          <li>
          <img src={arrow} alt="arrow icon" />
          </li>
          <li>
            <span className={styles.divider}></span>
          </li>
          <li>
            <span className={styles.title}>{productname}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
