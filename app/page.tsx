import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/fake_api/products";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="flex flex-wrap gap-2">
      <ul role="list" className="m-2 flex flex-row flex-wrap gap-4">
        {products.map((product) => (
          <li key={product.id} className="md:w-1/3">
            <Link href={`/products/${product.id}`}>
              <ProductCard {...product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
