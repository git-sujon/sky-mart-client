import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/carts";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyCart: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${urlExtension}/get-my-cart`,
        method: "GET",
        params: arg,
      }),

      providesTags: [tagTypes.carts, tagTypes.auth],
    }),

    addToCart: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/add-to-cart`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.carts, tagTypes.auth],
    }),
  }),
});

export const { useGetMyCartQuery, useAddToCartMutation } = cartApi;
