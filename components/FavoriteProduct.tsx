"use client";

import { toggleFavorite } from "@/redux/slices/cart.slice";
import { favoriteProducts } from "@/redux/slices/favorite.slice";
import { useDispatch } from "@/redux/store";
import { Heart } from "lucide-react";
import { useState } from "react";

type Params = {
  product: {
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
  };
};

export default function FavoriteProduct({ product }: Params) {
  const dispatch = useDispatch();
  return (
    <Heart
      onClick={() => dispatch(favoriteProducts(product))}
      className="text-red-500 hover:fill-red-500"
    />
  );
}
