import React from "react";
import Product from "../../components/Product/Product";
import styles from "./HomeScreen.module.scss";
import products from "../../products";

const HomeScreen = () => {
  return (
    <>
      <h1 className={styles.latest}>Latest Products</h1>
      <div className={styles.homeScreen}>
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
