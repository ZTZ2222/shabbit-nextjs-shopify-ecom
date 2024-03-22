"use client";
import { type Cart } from "@/fake_api/types";
import { setCart } from "@/store/store";
import { useDispatch } from "react-redux";

export default function AddToCart({
  addToCartAction,
}: {
  addToCartAction: () => Promise<Cart>;
}) {
  const dispatch = useDispatch();
  return (
    <button
      className="mt-6 rounded-lg bg-blue-800 px-8 py-2 text-lg font-bold text-white"
      onClick={async () => {
        dispatch(setCart(await addToCartAction()));
      }}
    >
      Add To Cart
    </button>
  );
}
