import { fetchBySearch } from "@/lib";
import ProductCard from "@/components/ProductCard";

type Params = {
  params: { id: string };
};

export default async function page({ params }: Params) {
  const searchProducts = await fetchBySearch(params.id);

  const { products } = searchProducts;

  return <ProductCard products={products} params={params} />;
}
