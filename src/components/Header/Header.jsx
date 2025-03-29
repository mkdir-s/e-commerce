import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import styles from './Header.module.scss';
import { IoBag } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  const {amount} = useContext(CartContext);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link className={styles.logo} to={'/'}>e-commerce</Link>
          <Link className={styles.cart} to={'/cart'}>
            <IoBag />
            <p className={styles.amount}>{amount}</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header