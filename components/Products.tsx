import { mainProducts } from "@/constants/utils";
import { fetchAllProucts, fetchByCategorie } from "@/lib";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const products = await fetchAllProucts();

  console.log(products);
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
      {mainProducts.map((prod) => (
        <div className="w-full rounded-lg" key={prod.to}>
          <Link
            href={`/products/${prod.title}`}
            className="text-xl font-semibold py-2 bg-white w-full px-10 rounded-tr-lg rounded-tl-lg hover:underline underline-offset-2"
          >
            {prod.title}
          </Link>
          <div className="w-full h-72 flex-start flex-col flex-1 relative bg-white z-50 rounded-tr-lg rounded-br-lg rounded-bl-lg">
            <Image
              src={prod.img}
              alt={prod.title}
              fill
              className="object-cover rounded-tr-lg rounded-br-lg rounded-bl-lg hover:opacity-80 saturate-200"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
