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

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <div>{error?.message || "An error occurred"}</div>;

  return (
    <>
      <h1 className={styles.latest}>Latest Products</h1>
      <div className={styles.homeScreen}>
        {products?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
