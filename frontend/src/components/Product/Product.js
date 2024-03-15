import React from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const Product = ({ product }) => {
  return (
    <Link className={styles.card} to={`/product/${product._id}`}>
      <img src={product.image}></img>

      <p>{product.name}</p>

      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      <p>${product.price}</p>
    </Link>
  );
};

export default Product;
