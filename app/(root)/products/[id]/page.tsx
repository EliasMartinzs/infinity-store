import { fetchByCategorie } from "@/lib";
import ProductCard from "@/components/ProductCard";

interface Params {
  params: { id: string };
}

export default async function page({ params }: Params) {
  const fetchProducts = await fetchByCategorie(params.id);

  const { products } = fetchProducts;

  return <ProductCard products={products} params={params} />;
}
