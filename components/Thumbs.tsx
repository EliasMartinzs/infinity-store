"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";

export default function Thumbs({ images }: { images: string[] }) {
  const [slider, setSlider] = useState(images[0]);

  const handleSlider = (idx: number) => {
    console.log(idx);
    const sliderImg = images[idx];

    setSlider(sliderImg);
  };

  return (
    <div className="w-full flex gap-x-5 flex-start">
      <div className="flex relative flex-col gap-y-5">
        {images.map((img, idx) => (
          <Image
            alt={img}
            key={idx}
            src={img}
            height={80}
            width={80}
            className="object-cover"
            onClick={() => handleSlider(idx)}
          />
        ))}
      </div>
      <div className="w-full h-96 relative order-1">
        {<Image src={slider} fill alt="s" className="object-fill" />}
      </div>
    </div>
  );
}
