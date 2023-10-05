"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import Navigation from "./Navigation";

export default function Banners() {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay
        pagination={{ dynamicBullets: true }}
        className="w-full h-72 md:h-[20rem] xl:h-[30rem] 2xl:h-[35rem] relative -z-50"
      >
        <SwiperSlide>
          <Image
            src="/banner2.jpg"
            fill
            alt="banner1"
            className="object-contain xl:object-cover relative -z-50"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner3.jpg"
            fill
            alt="banner1"
            className="object-contain xl:object-cover relative -z-50"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner4.jpg"
            fill
            alt="banner1"
            className="object-contain xl:object-cover relative -z-50"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
