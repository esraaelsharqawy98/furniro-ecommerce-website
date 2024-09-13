import React from "react";
import Banner from "../../components/Banner/Banner";
import styles from "./CartPage.module.css";
import CartTable from "../../components/CartTable/CartTable";
import { useCartStore } from "../../store/cartStore";
const CartPage = () => {
  const {total , subtotal} = useCartStore();

  return (
    <>
      <Banner title="Cart" subtitle="Cart" />
      <section className={styles.cart}>
        <div className={styles.container}>
          <CartTable/>
          <div className={styles.cartTotals}>
            <h2 className={styles.cartTotalsTitle}>Cart Totals</h2>
            <p className={styles.subtotalText}>
              Subtotal
              <span className={styles.subtotalAmount}>Rs. {subtotal.toFixed(2)}</span>
            </p>
            <p className={styles.totalText}>
              Total <span className={styles.totalAmount}>Rs. {total.toFixed(2)}</span>
            </p>
            <button className={styles.checkoutButton}>Check Out</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
