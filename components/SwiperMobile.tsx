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
    <div className="-z-50 relative">
      <Swiper
        pagination
        modules={[Pagination, Navigation]}
        navigation
        className="w-full h-96 max-lg:hidden mix-blend-multiply -z-50 relative"
      >
        {images.map((img) => (
          <SwiperSlide className="w-full h-96 relative" key={img}>
            <Image
              src={img}
              fill
              alt="img"
              className="object-cover object-center saturate-200"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
