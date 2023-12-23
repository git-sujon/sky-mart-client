import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/products";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (arg: Record<string, any>) => ({
        url: urlExtension,
        method: "GET",
        params: arg,
      }),

      providesTags: [tagTypes.products],
    }),

    getSingleProduct: build.query({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.products],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
