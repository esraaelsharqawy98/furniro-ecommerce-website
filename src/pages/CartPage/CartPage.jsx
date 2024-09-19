import React from "react";
import Banner from "../../components/Banner/Banner";
import styles from "./CartPage.module.css";
import CartTable from "../../components/CartTable/CartTable";
import { useCartStore } from "../../store/cartStore";
import { formatCurrency } from "../../utils/formatCurrency";

const CartPage = () => {
  const { total, subtotal, cartItems } = useCartStore();

  return (
    <>
      <Banner title="Cart" subtitle="Cart" />
      <section className={styles.cart}>
        <div className={styles.container}>
          {cartItems.length > 0 ? (
            <CartTable />
          ) : (
            <div className={styles.empty}>
              <p>Cart is empty</p>
            </div>
          )}
          <div className={styles.cartTotals}>
            <h2 className={styles.cartTotalsTitle}>Cart Totals</h2>
            <p className={styles.subtotalText}>
              Subtotal
              <span className={styles.subtotalAmount}>
                Rs. {formatCurrency(subtotal)}
              </span>
            </p>
            <p className={styles.totalText}>
              Total{" "}
              <span className={styles.totalAmount}>
                Rs. {formatCurrency(total)}
              </span>
            </p>
            <button className={styles.checkoutButton}>Check Out</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
