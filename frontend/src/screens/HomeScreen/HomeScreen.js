import React from "react";
import Product from "../../components/Product/Product";
import styles from "./HomeScreen.module.scss";
import products from "../../products";

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      {products.map((product) => (
        <Product />
      ))}
    </div>
  );
};

export default HomeScreen;
