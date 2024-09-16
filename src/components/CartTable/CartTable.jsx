import React from "react";
import styles from "./CartTable.module.css";
import { useCartStore } from "../../store/cartStore";
import CartItemRow from "../CartItemRow/CartItemRow";

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
          cartItems.map((item) => (
            <CartItemRow key={item.id} item={item} removeItem={removeItem} />
          ))
        ) : (
          <tr>
            <td colSpan="6" className={styles.emptyCart}>
              <p>No products yet</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CartTable;
