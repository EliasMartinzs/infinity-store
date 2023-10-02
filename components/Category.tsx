"use client";

import { categories } from "@/constants/utils";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";

export default function Category() {
  const pathname = usePathname();
  return (
    <div className="h-10 bg-slate-900 max-lg:hidden">
      <ul className="h-full flex items-center justify-center lg:gap-x-1">
        {categories
          .filter((_, idx) => idx < 10)
          .map((category) => (
            <li key={category}>
              <Link
                className={`text-white p-2 capitalize cursor-pointer hover:bg-slate-700 transition-colors ${
                  pathname === `/products/${category}`
                    ? "bg-slate-700 font-bold"
                    : ""
                }`}
                href={`/products/${category}`}
              >
                {category}
              </Link>
            </li>
          ))}
        <Navigation />
      </ul>
    </div>
  );
}
