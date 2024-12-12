import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import LoadingReduce from "./features/loadingSlice";
import productReducer from "./features/productSlice";
import { loadComponents } from "next/dist/server/load-components";
export const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
    LoadingReduce,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;