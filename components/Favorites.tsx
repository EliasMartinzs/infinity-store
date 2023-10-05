"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { selectIsFavorited } from "@/redux/slices/selector";
import { useSelector } from "@/redux/store";

import { LucideHeart } from "lucide-react";
import Image from "next/image";

export default function Favorites() {
  const favoritesProducts = useSelector(selectIsFavorited);

  return (
    <Popover>
      <PopoverTrigger>
        <LucideHeart className="text-white fill-white" />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-y-5">
        {favoritesProducts.length === 0 ? (
          <p>Does not contain any products</p>
        ) : (
          <>
            {favoritesProducts.map((prod) => (
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
                </div>
              </div>
            ))}
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
