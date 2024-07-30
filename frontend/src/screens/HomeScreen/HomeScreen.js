import React from "react";
import Product from "../../components/Product/Product";
import styles from "./HomeScreen.module.scss";
import { useGetProductsQuery } from "../../slices/productsApiSlice";

const HomeScreen = () => {
  /** 
   * Old way to do it before using redux toolkit slices
   *  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  */

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {error && <div>{error?.data?.message || error.error}</div>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1 className={styles.latest}>Latest Products</h1>
          <div className={styles.homeScreen}>
            {products?.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
