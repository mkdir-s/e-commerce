import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import styles from "./ProductDetails.module.scss";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const currentProduct = products.find((item) => item.id === Number(id));

  if (!currentProduct) {
    return (
      <section className={styles.notFound}>
        <div className="container">
          <p className={styles.text}>You haven't chosen anything yet</p>
          <div className={styles.bottom}><Link className={styles.button} to={'/'}>go to home</Link></div>
          </div>
      </section>
    );
  }
  const {title, price, description, image, category} = currentProduct;
  return (
    <section className={styles.details}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.img}><img src={image} alt={title} /></div>
          <div className={styles.info}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.category}>{category}</p>
            <p className={styles.descr}>{description}</p>
            <p className={styles.price}>{price} $</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
