"use client";

import { someFees } from "@/lib/utils";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FavoriteProduct from "./FavoriteProduct";
import { Heart, HeartCrack } from "lucide-react";

import { useDispatch, useSelector } from "@/redux/store";
import { selectCartItems, selectIsFavorited } from "@/redux/slices/selector";
import { ProductIdParams } from "@/types";
import {
  favoriteProducts,
  unFavoriteProducts,
} from "@/redux/slices/favorite.slice";

type Params = {
  products: [
    {
      id: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }
  ];
  params: { id?: string };
};

export default function ProductCard({ products, params }: Params) {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-[#ffffff] px-2 md:px-5 lg:px-40">
      <h3 className="text-xl md:text-2xl lg:text-3xl py-10">
        Results for <span className="capitalize">"{params?.id}"</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-start gap-8">
        {products.map((product) => (
          <div
            className="w-full h-52 lg:h-[450px] lg:max-h-[450px] bg-[#f7f7f7] grid grid-cols-2 lg:grid-cols-1 gap-2"
            key={product?.id}
          >
            <div className="w-full h-full lg:h-64 relative overflow-hidden">
              <Image
                src={product?.thumbnail}
                alt={product?.title}
                fill
                className="object-cover"
              />
              <Heart
                className="absolute text-red-500 hover:fill-red-500 top-2 right-2 heart"
                onClick={() => dispatch(favoriteProducts(product))}
              />
            </div>
            <div className="flex-start flex-col gap-y-1 lg:px-2">
              <Link
                href={`/product/${product?.id}`}
                className="hover:underline underline-offset-2"
              >
                {product?.brand} {product?.title}
              </Link>
              <p className="font-semibold lg:text-xl">
                ${product?.price.toFixed(2)}
              </p>
              <small className="font-extralight">
                Cash on credit card or in up to 12 installments without fees
                <span> {someFees(product?.price)}</span>
              </small>
              <p>Free shipping option available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
