import React from "react";
import styles from "./Product.module.scss";

const Product = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image}></img>
      <a>{product.name}</a>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
