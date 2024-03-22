import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/store/StoreProvider";
import { clearCart, getCart } from "@/fake_api/cart";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Shabbit E-commerce",
  description: "Buy products online with ease",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getCart();
  const clearCartAction = async () => {
    "use server";
    return await clearCart();
  };
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StoreProvider cart={cart}>
          <Navbar clearCartAction={clearCartAction} />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </StoreProvider>
      </body>
    </html>
  );
}
