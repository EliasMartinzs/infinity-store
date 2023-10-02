import SwiperMobile from "@/components/SwiperMobile";
import Thumbs from "@/components/Thumbs";
import { Button } from "@/components/ui/button";
import { fetchByCategorie, fetchById } from "@/lib";
import { Rating } from "@mui/material";
import { Heart } from "lucide-react";
import Link from "next/link";

type Params = {
  params: { id: number };
};

export default async function page({ params }: Params) {
  const productId = await fetchById(params.id);
  const {
    category,
    images,
    brand,
    description,
    discountPercentage,
    id,
    price,
    rating,
    stock,
    title,
    thumbnail,
    isFavorited,
    quantity,
  } = productId;

  const similarProducts = await fetchByCategorie(category);
  const { products } = similarProducts;

  return (
    <section className="w-full h-[5000px] lg:bg-[#d7d7d7] overflow-hidden lg:px-20 2xl:px-96 mx-auto">
      <div className="w-full max-xl:hidden py-5 flex-start flex-col">
        <h4 className="flex gap-x-3 text-sm">
          <span className="font-bold">Similar Products:</span>
          {products.map((prod) => (
            <Link
              href={`/product/${prod.id}`}
              className="hover:underline"
              key={prod.id}
            >
              {prod.title}
            </Link>
          ))}
        </h4>
      </div>
      <div className="w-full bg-[#f7f7f7] rounded-md p-5 grid grid-cols-2 place-items-start gap-x-5">
        <Thumbs images={images} />
        <SwiperMobile images={images} />
        {/* <div className="w-full grid grid-cols-2 gap-y-3 gap-x-2">
          <div className="w-full">
            <span className="w-full flex-between">
              <small>New Product</small>
              <Heart />
            </span>

            <div className="w-full">
              <h3 className="text-3xl font-semibold">
                {brand} {title}
              </h3>
              <span className="flex gap-x-2 items-center">
                <Rating size="small" readOnly value={rating} />
                {Math.floor(rating)}
              </span>
            </div>

            <div className="w-full">
              <h3 className="font-semibold text-2xl">${price.toFixed(2)}</h3>
              <p>in 10x {price / 10} interest-free</p>
            </div>

            <div className="mt-10 flex flex-col gap-y-2">
              <p className="font-semibold">About this item</p>
              <h4>{description}</h4>
            </div>
          </div>

          <div className="w-full flex-start gap-y-3 flex-col border rounded-md p-5">
            <span className="text-xl font-bold">${price.toFixed(2)}</span>
            <p className="font-semibold">Delivery Free</p>
            <p className="text-red-900">
              Only {stock} left in stock - order soon
            </p>
            <div className="flex flex-col gap-y-3">
              <Button className="bg-slate-600 px-10 rounded-full">
                Add to Cart
              </Button>
              <Button className="bg-slate-950 px-10 rounded-full">
                Buy Now
              </Button>
              <div className="grid grid-cols-2 gap-y-1">
                <small>Ships From </small>
                <small className="font-semibold">Infinity Store</small>
                <small>Sold By</small>
                <small>{brand}</small>
                <small>Return</small>
                <small>
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </small>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
