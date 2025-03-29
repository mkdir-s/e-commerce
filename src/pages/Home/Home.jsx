import React, {useContext} from 'react';
import {ProductContext} from '../../contexts/ProductContext';
import styles from './Home.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const {products} = useContext(ProductContext);
  console.log(products)
  return (
    <>
      <section className={styles.home}>
        <div className="container">
          <div className={styles.cards}>
            {products.map(product => {
              return (
                <ProductCard key={product.id} product={product} />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home