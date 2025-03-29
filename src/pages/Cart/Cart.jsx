import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart, total, amount } = useContext(CartContext);
  return (
    <section className={styles.cart}>
      <div className="container">
        <h2 className={styles.title}>Your cart - {amount} {amount === 1 ? 'item' : 'items'}</h2>
        <div className={styles.items}>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className={styles.bottom}>
          <p className={styles.total}>
            <span>Total: </span>{total} $
          </p>
          <a href="#" className={styles.button}>
            Checkout
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cart;
