import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import styles from "./ShopPage.module.css";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useProductStore } from "../../store/productStore";

const ShopPage = () => {
  const { categoryName } = useParams();
  const {
    products,
    currentPage,
    totalPages,
    fetchAllProducts,
    fetchProductsByCategory,
    setPage,
  } = useProductStore();
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    if (categoryName) {
      fetchProductsByCategory(categoryName, currentPage);
    } else {
      fetchAllProducts(currentPage);
    }
  }, [categoryName, currentPage, fetchAllProducts, fetchProductsByCategory]);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  }, [totalPages]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  return (
    <>
      <Banner title="Shop" subtitle={categoryName ? categoryName : "Shop"} />
      <section className={styles.productsList}>
        <div className={styles.container}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.pagination}>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`${styles.pageItem} ${
                currentPage === pageNumber ? styles.active : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className={styles.btn}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
