import React from "react";
import Product from "../../components/Product/Product";
import styles from "./HomeScreen.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
