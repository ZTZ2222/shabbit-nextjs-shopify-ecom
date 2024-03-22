"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";
import { Button as MovingBorderButton } from "./ui/moving-border";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useCart, setCart } from "@/store/store";
import { Cart } from "@/fake_api/types";
import { useDispatch } from "react-redux";

const Cart = ({
  clearCartAction,
}: {
  clearCartAction: () => Promise<Cart>;
}) => {
  const cart = useCart();
  const dispatch = useDispatch();
  return (
    <Drawer direction="right">
      <DrawerTrigger className="relative">
        <FiShoppingCart fontSize={24} strokeWidth={1} />
        <span
          key={cart.products.length}
          className="animate-pingOnce absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 font-mono text-xs text-white"
        >
          {cart.products.length}
        </span>
      </DrawerTrigger>
      <DrawerContent
        className="ml-auto h-full w-[300px] rounded-none"
        showBar={false}
      >
        <DrawerHeader className="border-b p-3">
          <DrawerTitle className="flex justify-between">
            <span className="flex items-center text-2xl font-bold">
              Your Cart
            </span>
            <DrawerClose>
              <Button variant="ghost" className="p-2.5">
                <AiOutlineClose fontSize={24} strokeWidth={1} />
              </Button>
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        {cart.products.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-2xl font-bold">Your cart is empty</span>
          </div>
        ) : (
          <>
            <div className="overflow-auto p-3">
              <Table>
                <TableCaption>A list of your products.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-0">🚚 Products</TableHead>
                    <TableHead className="flex-nowrap px-0">💰 Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell className="p-0">
                        <Card className="my-2 flex w-fit flex-col gap-2 px-4 py-1">
                          <CardHeader className="relative h-32 w-32 p-0">
                            <Image
                              src={product.image}
                              alt="product"
                              fill
                              className="object-cover"
                            />
                          </CardHeader>
                          <CardContent className="p-0 text-left">
                            <CardTitle className="text-xl">
                              {product.name}
                            </CardTitle>
                            <CardDescription>${product.price}</CardDescription>
                          </CardContent>
                          <CardFooter className="p-0">
                            <Button variant="ghost" size="sm">
                              Remove
                            </Button>
                          </CardFooter>
                        </Card>
                      </TableCell>
                      <TableCell className="p-0 text-center">$0.00</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <DrawerFooter className="border-t">
              <DrawerClose>
                <MovingBorderButton>Check out</MovingBorderButton>
              </DrawerClose>
              <Button
                onClick={async () => {
                  dispatch(setCart(await clearCartAction()));
                }}
                variant="destructive"
                className="mx-12"
              >
                Clear Cart
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
