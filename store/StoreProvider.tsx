"use client";
import { Provider } from "react-redux";
import { type Cart } from "@/fake_api/types";
import { useRef } from "react";
import { createStore, setCart } from "./store";

const StoreProvider = ({
  cart,
  children,
}: {
  cart: Cart;
  children: React.ReactNode;
}) => {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.dispatch(setCart(cart));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
