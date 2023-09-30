import RatingStar from "@/components/RatingStar";
import { fetchByCategorie } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Params {
  params: { id: string };
}

export default async function page({ params }: Params) {
  const fetchProducts = await fetchByCategorie(params.id);

  const { products } = fetchProducts;

  const someFees = (fees: number) => {
    const percent = fees / 12;

    return `${percent.toFixed(2)}$`;
  };

  return (
    <div className="w-full bg-[#ffffff] px-2 md:px-5 lg:px-40">
      <h3 className="text-xl md:text-2xl lg:text-3xl py-10">
        Results for <span className="capitalize">"{params.id}"</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-start gap-8">
        {products.map((product) => (
          <div
            className="w-full h-52 lg:h-[450px] lg:max-h-[450px] bg-[#f7f7f7] grid grid-cols-2 lg:grid-cols-1 gap-2"
            key={product.id}
          >
            <div className="w-full h-full lg:h-64 relative overflow-hidden">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-start flex-col gap-y-1 lg:px-2">
              <Link
                href={`/product/${product.id}`}
                className="hover:underline underline-offset-2"
              >
                {product.brand} {product.title}
              </Link>
              <RatingStar rating={product.rating} />
              <p className="font-semibold lg:text-xl">
                ${product.price.toFixed(2)}
              </p>
              <small className="font-extralight">
                Cash on credit card or in up to 12 installments without fees
                <span> {someFees(product.price)}</span>
              </small>
              <p>Free shipping option available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
