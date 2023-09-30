import { fetchById } from "@/lib";

type Params = {
  params: { id: number };
};

export default async function page({ params }: Params) {
  const productId = await fetchById(params.id);

  return <div>page</div>;
}
