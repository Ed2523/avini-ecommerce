import React from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const Product = ({ product }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image}></img>
      </Link>
      <Link>
        <p>{product.name}</p>
      </Link>
      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
