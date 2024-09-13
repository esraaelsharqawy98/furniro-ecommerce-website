import React from 'react'
import styles from './CartTable.module.css'
import DeleteIcon from "/images/trash.svg";
import { useCartStore } from "../../store/cartStore";
const CartTable = () => {
  const { cartItems, removeItem  , subtotal } = useCartStore();
  return (
    <table>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th className={styles.headerQty}>Quantity</th>
                <th>SubTotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {cartItems.map((item) => {
              const itemSubtotal = item.price * item.quantity;
             return ( <tr key={item.id}>
                <td>
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.title}
                  />
                </td>
                <td>
                  <h3 className={styles.title}>{item.title}</h3>
                </td>
                <td>
                  <p className={styles.price}>Rs. {item.price.toFixed(2)}</p>
                </td>
                <td>
                  <span className={styles.quantity}>{item.quantity}</span>
                </td>
                <td>
                  <p className={styles.subtotal}>Rs. {itemSubtotal.toFixed(2)}</p>
                </td>
                <td>
                  <button onClick={()=> removeItem(item.id)}>
                    <img src={DeleteIcon} alt="delete icon" className={styles.delete} />
                  </button>
                </td>
              </tr>)
            })}
            </tbody>
          </table>
  )
}

export default CartTable