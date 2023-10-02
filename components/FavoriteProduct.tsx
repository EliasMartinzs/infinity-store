import { toggleFavorite } from "@/redux/slices/cart.slice";
import { useDispatch } from "@/redux/store";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function FavoriteProduct() {
  return (
    <Heart className="absolute text-red-500 hover:fill-red-500 top-2 right-2 heart" />
  );
}
