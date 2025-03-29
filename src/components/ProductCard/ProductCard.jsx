import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { CartContext } from '../../contexts/CartContext';

const ProductCard = ({product}) => {
  const {addToCart} = useContext(CartContext);
  const {id, image, category, title, price} = product;
  return (
    <Link className={styles.card} to={`/product/${id}`}>
      <div className={styles.cardImg}><img src={image} alt={title} /></div>
      <div className={styles.cardInfo}>
        <div className={styles.cardLeft}>
          <p className={styles.cardTitle}>{title}</p>
          <p className={styles.cardPrice}>{price} $</p>
        </div>
        <p className={styles.cardRight} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToCart(product, id);
        }}>+</p>
      </div>
    </Link>
  )
}

export default ProductCard