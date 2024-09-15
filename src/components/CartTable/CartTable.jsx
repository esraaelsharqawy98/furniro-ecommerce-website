import React from "react";
import styles from "./CartTable.module.css";
import DeleteIcon from "/images/trash.svg";
import { useCartStore } from "../../store/cartStore";
import { formatCurrency } from "../../utils/formatCurrency";

const CartTable = () => {
  const { cartItems, removeItem } = useCartStore();

  return (
    <table>
      <thead>
        <tr>
          <th className={styles.headerImg}></th>
          <th>Product</th>
          <th>Price</th>
          <th className={styles.headerQty}>Quantity</th>
          <th>SubTotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const itemSubtotal = item.price * item.quantity;

            return (
              <tr key={item.id}>
                <td className={styles.cartImg}>
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.title}
                  />
                </td>
                <td className={styles.cartTitle}>
                  <h3 className={styles.title}>{item.title}</h3>
                </td>
                <td className={styles.cartPrice}>
                  <p className={styles.price}>Rs. {formatCurrency(item.price)}</p>
                </td>
                <td>
                  <span className={styles.quantity}>{item.quantity}</span>
                </td>
                <td>
                  <p className={styles.subtotal}>
                    Rs. {formatCurrency(itemSubtotal)}
                  </p>
                </td>
                <td>
                  <button onClick={() => removeItem(item.id)} className={styles.deleteBtn}>
                    <img
                      src={DeleteIcon}
                      alt="delete icon"
                      className={styles.delete}
                    />
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="6" className={styles.emptyCart}>
             <p> No products yet</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CartTable;
