import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  const {id, title, image, price, amount} = item;
  return (
    <div className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link className={styles.img} to={'/product:id'}><img src={image} alt={title} /></Link>
          <div className={styles.info}>
            <Link className={styles.title} to={'/product/:id'}>{title}</Link>
            <div className={styles.details}>
              <div className={styles.amount}>
                <p onClick={() => decreaseAmount(id)}>-</p>
                <p>{amount}</p>
                <p onClick={() => increaseAmount(id)}>+</p>
              </div>
              <div className={styles.price}>{price}$ x {amount} {amount === 1 ? 'item' : 'items'} = {price*amount} $</div>
            </div>
          </div>
        </div>
        <div className={styles.right} onClick={() => removeFromCart(id)}>x</div>
      </div>
    </div>
  )
}

export default CartItem