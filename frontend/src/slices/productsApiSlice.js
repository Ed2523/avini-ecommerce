import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `/api/products/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

/**
 * Auto-Generated Hooks: For each endpoint you define,
 *  RTK Query automatically generates corresponding hooks.
 *  For a query endpoint, it generates a
 * hook named use[EndpointName]Query.
 *  In your case, since the
 * endpoint is getProducts,
 * the hook is named useGetProductsQuery.
 */
export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice;
