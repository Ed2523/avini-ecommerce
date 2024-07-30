import React from "react";
import { useParams, Link } from "react-router-dom"; //Hook to obtain id from url
import Rating from "../../components/Rating";
import styles from "./ProductScreen.module.scss";
import { useGetProductDetailsQuery } from "../../slices/productsApiSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <div>{error?.message || "An error occurred"}</div>;
  return (
    <>
      <Link to='/'>
        <button className={styles.goBack}>Go back</button>
      </Link>

      <div className={styles.productDetails}>
        <div className={styles.imageContainer}>
          <img src={product.image}></img>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.product_name}>{product.name}</div>
          <div className={styles.product_rating}>
            {" "}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>

          <div className={styles.product_price}>Price: {product.price}</div>
          <div className={styles.product_description}>
            Price: {product.description}
          </div>
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>
            <p>Price:</p> {product.price}
          </div>
          <div className={styles.status}>
            <p>Status:</p>{" "}
            {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </div>
          <div className={styles.button_container}>
            <button disabled={product.countInStock === 0}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
