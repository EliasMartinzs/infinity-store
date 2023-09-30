"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { categories } from "@/constants/utils";
import Link from "next/link";

import React from "react";

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-slate-900 text-white hover:bg-slate-700">
            All Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            {categories
              .filter((_, idx) => idx > 10)
              .map((category) => (
                <Link
                  href={`/products/${category}`}
                  legacyBehavior
                  passHref
                  key={category}
                  className="w-full"
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {category}
                  </NavigationMenuLink>
                </Link>
              ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
