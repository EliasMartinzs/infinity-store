import Image from "next/image";
import React from "react";

export default function Banners() {
  return (
    <section className="w-full h-32 md:h-52 lg:h-96 bg-slate-400 overflow-hidden relative">
      <Image
        src="/banner1.webp"
        alt="banner1"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        priority
      />
    </section>
  );
}
