"use client";
import {
  Minus,
  Plus,
  ShoppingBag,
  ShoppingBagIcon,
  ShoppingCart,
  ShoppingCartIcon,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "@/redux/store";
import { selectCartItems } from "@/redux/slices/selector";
import Image from "next/image";
import {
  removeAllItem,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/slices/cart.slice";
import Link from "next/link";

export function Dropdown() {
  const productCart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-slate-950 hover:bg-slate-900 transition-colors px-0">
          <ShoppingCartIcon className="text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Products</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="px-2">
          {productCart.length === 0 ? (
            <p>Does not contain any products</p>
          ) : (
            <>
              {productCart.map((prod) => (
                <div
                  className="flex justify-start items-start gap-2 min-w-[250px] max-w-[350px]"
                  key={prod.id}
                >
                  <Image
                    src={prod.thumbnail}
                    width={100}
                    height={100}
                    alt={prod.title}
                    className="object-contain object-center"
                  />
                  <div className="flex-start flex-col w-full">
                    <p>
                      {prod.brand} {prod.title}
                    </p>
                    <span className="font-semibold"></span>
                    <div className="flex-center h-full w-full">
                      <span className="flex-center gap-x-3">
                        <Button
                          variant="ghost"
                          className="px-2 text-4xl font-extralight"
                          onClick={() => dispatch(decreaseQuantity(prod))}
                        >
                          -
                        </Button>
                        {prod.quantity}
                        <Button
                          variant="ghost"
                          className="px-2 text-3xl font-extralight"
                          onClick={() => dispatch(increaseQuantity(prod))}
                        >
                          +
                        </Button>
                      </span>
                      <span className="flex-end h-full w-full">
                        <Trash2
                          className="text-red-500 cursor-pointer"
                          onClick={() => dispatch(removeAllItem(prod))}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          <Link href="/my-cart">
            <Button
              className="my-5 hover:underline underline-offset-4"
              variant="ghost"
            >
              Cart Details
            </Button>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
