import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const ProductCard = ({product}) => {
  console.log(product)
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
          console.log('click +')
        }}>+</p>
      </div>
    </Link>
  )
}

export default ProductCard