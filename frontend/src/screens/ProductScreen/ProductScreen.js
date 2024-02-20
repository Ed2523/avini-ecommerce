import React from "react";
import { useParams } from "react-router-dom"; //Hook to obtain id from url
import products from "../../products";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((product) => product._id === productId);

  return <div>ProductScreen</div>;
};

export default ProductScreen;
