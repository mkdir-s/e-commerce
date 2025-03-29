import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart, total, amount } = useContext(CartContext);

  if (amount < 1) {
    return (
      <section className={styles.notFound}>
        <div className="container">
          <p className={styles.text}>You haven't chosen anything yet</p>
          <div className={styles.bottom}><Link className={styles.button} to={'/'}>go to home</Link></div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.cart}>
      <div className="container">
        <h2 className={styles.title}>
          Your cart - {amount} {amount === 1 ? "item" : "items"}
        </h2>
        <div className={styles.items}>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className={styles.bottom}>
          <p className={styles.total}>
            <span>Total: </span>
            {total.toFixed(2)} $
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
