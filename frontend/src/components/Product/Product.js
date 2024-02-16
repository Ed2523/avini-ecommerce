import React from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image}></img>
        <a>{product.name}</a>
        <p>${product.price}</p>
      </Link>
    </div>
  );
};

export default Product;
