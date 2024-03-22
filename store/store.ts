import { type Cart, type Review } from "@/fake_api/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface CartState {
  cart: Cart;
}

export interface ReviewsState {
  reviews: Review[] | null;
}

const initialState: CartState = {
  cart: {
    products: [],
  },
};

const initialReviews: ReviewsState = {
  reviews: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
  },
});

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: initialReviews,
  reducers: {
    setReviews: (state, action: PayloadAction<Review[]>) => {
      state.reviews = action.payload;
    },
  },
});

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
      reviews: reviewsSlice.reducer,
    },
  });

export const { setCart } = cartSlice.actions;

export const { setReviews } = reviewsSlice.actions;

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useCart = () => useSelector((state: RootState) => state.cart.cart);

export const useReviews = () =>
  useSelector((state: RootState) => state.reviews.reviews);
