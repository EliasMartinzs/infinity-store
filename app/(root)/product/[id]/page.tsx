import Swipers from "@/components/Swipers";
import { fetchByCategorie, fetchById } from "@/lib";
import Link from "next/link";

type Params = {
  params: { id: number };
};

export default async function page({ params }: Params) {
  const productId = await fetchById(params.id);

  const { category } = productId;

  const similarProducts = await fetchByCategorie(category);
  const { products } = similarProducts;

  console.log(similarProducts);

  return (
    <section className="w-full h-[5000px] lg:bg-[#d7d7d7] overflow-hidden lg:px-96 mx-auto">
      <div className="w-full max-lg:hidden py-5 flex-start flex-col">
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
        {}
      </div>
      <div className="w-full bg-[#f7f7f7] h-20 border border-black shadow-md rounded-md">
        <Swipers />
      </div>
    </section>
  );
}
