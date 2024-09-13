import React from 'react'
import styles from './CartItem.module.css'
import deleteIcon from '/images/delete.svg'
import  {useCartStore}  from '../../store/cartStore'
import { formatCurrency } from "../../utils/formatCurrency";
const CartItem = ({item}) => {
  const {removeItem} = useCartStore();
  const handleRemove = () => {
    removeItem(item.id);
  };
  return (
    <div className={styles.cartItem}>
        <button className={styles.btn} onClick={handleRemove}>
            <img src={deleteIcon} alt="delete icon" />
        </button>
        <div className={styles.cartImage}>
            <img src={item.image} alt="product image"/>
        </div>
        <div className={styles.cartDetails}>
            <h3 className={styles.productName}>{item.title}</h3>
            <p className={styles.subtotal}>{item.quantity} x <span className={styles.price}>Rs {formatCurrency(item.price)}</span></p>
        </div>
    </div>
  )
}

export default CartItem