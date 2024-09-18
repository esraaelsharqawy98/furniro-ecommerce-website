import React from "react";
import styles from "./CartTable.module.css";
import { useCartStore } from "../../store/cartStore";
import CartItemRow from "../CartItemRow/CartItemRow";
import { Link } from "react-router-dom";

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
        {cartItems.map((item) => (
          <CartItemRow key={item.id} item={item} removeItem={removeItem} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
