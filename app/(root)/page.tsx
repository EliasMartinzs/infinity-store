import Banners from "@/components/Banners";
import Products from "@/components/Products";
import React from "react";

export default function page() {
  return (
    <main className="w-full bg-[#d7d7d7] px-2 md:px-5 lg:px-20 xl:px-52">
      <Banners />
      <Products />
    </main>
  );
}
