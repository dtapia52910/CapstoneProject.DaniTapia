import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    // Cart Endpoints
    getAllCarts: builder.query({
      query: () => "/carts",
      providesTags: ["Cart"],
    }),
    getSingleCart: builder.query({
      query: (cartId) => `/carts/${cartId}`,
      providesTags: ["Cart"],
    }),
    updateCart: builder.mutation({
      query: ({ cartId, newCartData }) => ({
        url: `/carts/${cartId}`,
        method: "PUT",
        body: newCartData,
      }),
      invalidatesTags: ["Cart"],
    }),
    checkoutCart: builder.mutation({
      query: () => ({
        url: "/checkout",
        method: "POST",
      }),
    }),

    addToCart: builder.mutation({
      query: (productData) => ({
        url: "/carts",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/carts/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCartItemQuantity: builder.mutation({
      query: ({ productId, newQuantity }) => ({
        url: `/carts/${productId}`,
        method: "PATCH",
        body: { quantity: newQuantity },
      }),
      invalidatesTags: ["Cart"],
    }),
    login: builder.mutation({
        query: (credentials) => ({
          url: "/auth/login",
          method: "POST",
          body: credentials,
        }),
      }),
  }),
});

export const {
  useGetAllCartsQuery,
  useGetSingleCartQuery,
  useUpdateCartMutation,
  useCheckoutCartMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartItemQuantityMutation,
  useLoginMutation,
} = api;
