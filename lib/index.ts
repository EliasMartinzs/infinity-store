import { ProductIdParams, ProductsParams } from "@/types";

export const fetchByCategorie = async (
  category: string
): Promise<ProductsParams> => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );

  const fetchCategory = await response.json();

  return fetchCategory;
};

export const fetchById = async (id: number): Promise<ProductIdParams> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  const fetchId = await response.json();

  return fetchId;
};

export const fetchBySearch = async (query: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );

  const fetchSearch = await response.json();

  return fetchSearch;
};
