import React from "react";
import styles from "./CartItemRow.module.css";
import DeleteIcon from "/images/trash.svg";
import { formatCurrency } from "../../utils/formatCurrency";
import { Link } from 'react-router-dom';

const CartItemRow = ({ item, removeItem }) => {
  const itemSubtotal = item.price * item.quantity;

  return (
    <tr className={styles.cartItem}>
      <td className={styles.cartImg}>
        <Link to={`/product/${item.id}`}>
        <img className={styles.image} src={item.image} alt={item.title} />
        </Link>
      </td>
      <td className={styles.cartTitle}>
        <h3 className={styles.title}>{item.title}</h3>
      </td>
      <td className={styles.cartPrice}>
        <p className={styles.price}>Rs. {formatCurrency(item.price)}</p>
      </td>
      <td className={styles.cartQuantity}>
        <p className={styles.quantity}>{item.quantity}</p>
      </td>
      <td className={styles.cartSubtotal}>
        <p className={styles.subtotal}>Rs. {formatCurrency(itemSubtotal)}</p>
      </td>
      <td className={styles.cartButton}>
        <button onClick={() => removeItem(item.id)} className={styles.deleteBtn}>
          <img src={DeleteIcon} alt="delete icon" className={styles.delete} />
        </button>
      </td>
    </tr>
  );
};

export default CartItemRow;
