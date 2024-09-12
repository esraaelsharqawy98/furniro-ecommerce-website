import React, { useEffect, useState } from "react";
import HeroImg from "/images/hero-home.png";
import styles from "./HomePage.module.css";
import { fetchCategories } from "../../api/categoryApi";
import { Link } from "react-router-dom";

const categoryImages = {
  "jewelery": "/images/jewelery.jpg",
  "electronics": "/images/electronics.jpg",
  "women's clothing": "/images/women.jpg",
  "men's clothing": "/images/men.jpg",
};
const categoryDefaultImg = '/images/default-category.jpg';
const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <img src={HeroImg} alt="hero banner image" />
      </section>
      <div className={styles.container}>
        <section className={styles.category}>
          <h2 className={styles.title}>Categories</h2>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <Link to={`/shop/${category}`} className={styles.categoryItem} key={category}>
                  <div className={styles.categoryImg}>
                    <img
                      src={
                        categoryImages[category.toLowerCase()] || categoryDefaultImg
                      }
                      alt={`${category} category`}
                    />
                  </div>
                  <h3>{category}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
