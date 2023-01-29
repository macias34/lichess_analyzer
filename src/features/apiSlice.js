import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://lichess.org/api/user" }),
  endpoints: (builder) => ({
    getCardData: builder.query({
      query: (username) => `${username}`,
    }),
    getRatingHistory: builder.query({
      query: (username) => `${username}/rating-history`,
    }),
    getPerformanceData: builder.query({
      query: ({ username, gameFormat }) => `${username}/perf/${gameFormat}`,
    }),
  }),
});

export const {
  useGetCardDataQuery,
  useGetRatingHistoryQuery,
  useGetPerformanceDataQuery,
} = userApi;
