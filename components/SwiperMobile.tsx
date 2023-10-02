"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SwiperMobile({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        pagination
        modules={[Pagination, Navigation]}
        navigation
        className="w-full h-72 md:h-96 max-lg:hidden mix-blend-multiply"
      >
        {images.map((img) => (
          <SwiperSlide className="w-full h-full" key={img}>
            <Image
              src={img}
              fill
              alt="img"
              className="object-contain object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
