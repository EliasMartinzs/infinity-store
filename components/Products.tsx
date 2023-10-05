import { categoriesPopular, mainProducts } from "@/constants/utils";
import { fetchAllProucts } from "@/lib";
import { ProductIdParams, ProductsParams } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Products() {
  const fetchProducts = await fetchAllProucts();

  const { products } = fetchProducts;

  const home: ProductIdParams[] = products.filter(
    (cat: any) => cat.category === "home-decoration"
  );

  const fragrances: ProductIdParams[] = products.filter(
    (cat: any) => cat.category === "fragrances"
  );

  return (
    <section className="w-full space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 px-2 ">
        {mainProducts.map((prod) => (
          <Link
            href={prod.to}
            className="w-full h-72 bg-white shadow-md p-5 relative last-of-type:lg:hidden"
            key={prod.title}
          >
            <h3 className="text-lg font-semibold text-slate-900 absolute inset-0 z-50 w-full h-10 bg-white/40 flex items-center px-2">
              {prod.title}
            </h3>
            <Image
              src={prod.img}
              alt={prod.title}
              fill
              className="object-cover"
            />
          </Link>
        ))}
      </div>

      <div className="w-full flex-start flex-col gap-x-2 p-5 bg-white shadow-md">
        <h3 className="font-semibold text-2xl mb-2">
          Frequently repurchased in Home
        </h3>
        <div className="w-full lg:h-72 gap-y-2 grid grid-cols-2 md:flex md:flex-row gap-x-2">
          {home.map((item) => (
            <Link
              href={`/product/${item.id}`}
              key={item.id}
              className="w-full h-72 relative p-2 hover:border border-slate-950/40 hover:scale-105 last-of-type:max-md:hidden"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover saturate-200"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full flex-start flex-col gap-x-2 p-5 bg-white shadow-md">
        <h3 className="font-semibold text-2xl mb-2">Best fragances for you</h3>
        <div className="w-full lg:h-72 gap-y-2 grid grid-cols-2 md:flex md:flex-row gap-x-2">
          {fragrances.map((item) => (
            <Link
              href={`/product/${item.id}`}
              key={item.id}
              className="w-full h-72 relative p-2 hover:border border-slate-950/40 hover:scale-105 last-of-type:max-md:hidden"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover saturate-200"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full h-full flex flex-col lg:flex-row bg-white rounded-lg hover:shadow-lg">
          <div className="lg:w-1/2 p-10 flex items-start justify-center flex-col gap-y-2">
            <h4 className="font-extralight text-xl">Enjoy</h4>
            <h5 className="font-semibold text-2xl text-slate-700">
              Selected glasses
            </h5>

            <Link href="/products/sunglasses">
              <Button className="bg-slate-800 font-semibold hover:bg-slate-950 transition-colors">
                View More
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 h-72 relative">
            <Image
              src="/sunglass.jpg"
              fill
              alt="sunglass"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row bg-white rounded-lg hover:shadow-lg">
          <div className="lg:w-1/2 p-10 flex items-start justify-center flex-col gap-y-2">
            <h4 className="font-extralight text-xl">Enjoy</h4>
            <h5 className="font-semibold text-2xl text-slate-700">
              Best lights for your home
            </h5>

            <Link href="/products/lighting">
              <Button className="bg-slate-800 font-semibold hover:bg-slate-950 transition-colors">
                View More
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 h-72 relative">
            <Image
              src="/lighting.jpg"
              fill
              alt="lighting"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <h3 className="w-full flex-start text-xl font-semibold my-2">
          Popular Categories
        </h3>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg: lg:grid-cols-8 gap-2 text-center">
          {categoriesPopular.map((cat) => (
            <Link
              href={cat.to}
              key={cat.categorie}
              className="w-full flex-center flex-col bg-white py-4 rounded-lg hover:shadow-lg hover:scale-110 hover:border border-blue-500"
            >
              <Image
                alt={cat.categorie}
                width={50}
                height={50}
                src={cat.icon}
              />
              <p>{cat.categorie}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
