import React from "react";
import styles from "./CartItemRow.module.css";
import DeleteIcon from "/images/trash.svg";
import { formatCurrency } from "../../utils/formatCurrency";

const CartItemRow = ({ item, removeItem }) => {
  const itemSubtotal = item.price * item.quantity;

  return (
    <tr>
      <td className={styles.cartImg}>
        <img className={styles.image} src={item.image} alt={item.title} />
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
        <p className={styles.subtotal}>Rs. {formatCurrency(itemSubtotal)}</p>
      </td>
      <td>
        <button onClick={() => removeItem(item.id)} className={styles.deleteBtn}>
          <img src={DeleteIcon} alt="delete icon" className={styles.delete} />
        </button>
      </td>
    </tr>
  );
};

export default CartItemRow;
