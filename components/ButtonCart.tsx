"use client";

import { useDispatch, useSelector } from "@/redux/store";
import { Button } from "./ui/button";
import { addToCart } from "@/redux/slices/cart.slice";
import { selectCartItems } from "@/redux/slices/selector";

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

export default function ButtonCart({ product }: Params) {
  const dispatch = useDispatch();

  const fav = useSelector(selectCartItems);

  return (
    <Button
      className="rounded-full w-full py-7 xl:py-0"
      onClick={() => dispatch(addToCart(product))}
    >
      Add to Cart
    </Button>
  );
}
