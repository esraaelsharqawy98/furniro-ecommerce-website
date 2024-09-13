import React, { useEffect } from "react";
import styles from "./ProductDetailsPage.module.css";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import {useProductStore} from "../../store/productStore";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const { selectedProduct, fetchProductById} = useProductStore();
  useEffect(() => {
    if (!selectedProduct || selectedProduct.id !== id) {
      fetchProductById(id);
    }
  }, [id, selectedProduct, fetchProductById]);

  return (
    <>
      <Breadcrumb productname={selectedProduct.title}/>
      <section className={styles.container}>
        <div className={styles.productImage}>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
        <ProductDetails product={selectedProduct} />
      </section>
      <div className={styles.line}></div>
      <section className={styles.productDescription}>
        <h2 className={styles.title}>Description</h2>
        <p className={styles.description}>
          {selectedProduct.description}
        </p>
      </section>
    </>
  );
};

export default ProductDetailsPage;
