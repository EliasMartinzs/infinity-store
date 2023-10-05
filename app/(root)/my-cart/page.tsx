"use client";

import { Button } from "@/components/ui/button";
import { decreaseQuantity, removeAllItem } from "@/redux/slices/cart.slice";
import { selectCartItems } from "@/redux/slices/selector";
import { useDispatch, useSelector } from "@/redux/store";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const productCard = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <section className="w-full bg-[#f5f5f5]">
      {productCard.length === 0 ? (
        <div className="w-full h-full flex-center flex-col gap-y-3 py-20 md:py-32 lg:py-52">
          <ShoppingCart className="h-56 w-56 text-slate-600 opacity-30" />
          <p className="text-lg text-slate-500">
            Empty cart? Continue exploring
          </p>
          <Button className="px-10 md:px-20">Access</Button>
          <Button className="px-10 md:px-20 bg-slate-600">Exploring</Button>
        </div>
      ) : null}

      {productCard.length >= 1 ? (
        <div className="w-full px-2 2xl:px-72 pt-5 2xl:pt-10 space-y-5">
          <div className="w-full bg-white px-2 rounded-lg py-5">
            <span className="text-xl md:text-2xl font-semibold flex-start flex-row">
              <h3>Cart Items (1)</h3>
            </span>
          </div>

          <div className="w-full bg-white px-2">
            <ul className="w-full flex-start flex-col py-5 gap-5">
              {productCard.map((prod) => (
                <li
                  key={prod.id}
                  className="w-full flex-start flex-row gap-x-6"
                >
                  <Image
                    src={prod.thumbnail}
                    width={100}
                    height={100}
                    className="object-contain"
                    alt={prod.title}
                  />
                  <Link
                    href={`/product/${prod.id}`}
                    className="w-full flex-start flex-col"
                  >
                    <p className="text-sm md:text-base">{prod.title}</p>
                  </Link>
                  <span className="w-full flex-end">
                    <Trash2
                      className="cursor-pointer"
                      onClick={() => dispatch(decreaseQuantity(prod))}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
