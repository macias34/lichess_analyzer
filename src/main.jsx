import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import gameFormatReducer from "./features/gameFormat";
import userReducer from "./features/user";
import cardReducer from "./features/user";
import ratingHistoryReducer from "./features/user";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { userApi } from "./features/apiSlice";

const store = configureStore({
  reducer: {
    gameFormat: gameFormatReducer,
    user: userReducer,
    userApi: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
