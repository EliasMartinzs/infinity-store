"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function SwiperMobile({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full h-96 max-lg:hidden"
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <Image
              src={img}
              width={500}
              height={500}
              alt="img"
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
