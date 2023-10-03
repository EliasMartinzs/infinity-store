"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import Navigation from "./Navigation";

export default function Banners() {
  return (
    <section className="w-full h-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay
        pagination={{ dynamicBullets: true }}
        className="w-full h-52 md:h-[20rem] xl:h-[30rem] relative"
      >
        <SwiperSlide>
          <Image
            src="/banner2.jpg"
            fill
            alt="banner1"
            className="object-contain xl:object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner3.jpg"
            fill
            alt="banner1"
            className="object-contain xl:object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner4.jpg"
            fill
            alt="banner1"
            className="object-contain xl:object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
