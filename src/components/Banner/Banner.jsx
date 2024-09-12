import React from "react";
import styles from "./Banner.module.css";
import arrow from "/images/arrow.svg";
import { Link } from "react-router-dom";
import logoImg from '/images/logo.svg'
const Banner = ({title , subtitle}) => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerImage}></div>
      <div className={styles.text}>
        <img src={logoImg} alt="logo image" className={styles.logo}/>
        <h1 className={styles.title}>{title}</h1>
        <ul className={styles.breadcrumb}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <img src={arrow} alt="arrow icon" />
          </li>
          <li>
            <span>{subtitle}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
