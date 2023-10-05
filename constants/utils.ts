export const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
] as const;

export const mainCategories = [
  {
    title: "laptops",
    icons: "/laptop-2.svg",
    to: "/products/laptops",
  },
  {
    title: "groceries",
    icons: "/store.svg",
    to: "/products/groceries",
  },
  {
    title: "automotive",
    icons: "/car-front.svg",
    to: "/products/automotive",
  },
  {
    title: "mens shirts",
    icons: "/shirt.svg",
    to: "/products/mens-shirts",
  },
  {
    title: "womens bags",
    icons: "/briefcase.svg",
    to: "/products/womens-bags",
  },
] as const;

export const linksMenu = [
  {
    title: "Home",
    icon: "/home.svg",
    to: "/",
  },
  {
    title: "Offers of the day",
    icon: "/badge-dollar-sign.svg",
    to: "/offers",
  },
  {
    title: "Historic",
    icon: "/history.svg",
    to: "/historic",
  },
  {
    title: "Contact",
    icon: "/headphones.svg",
    to: "/contact",
  },
] as const;

export const mainProducts = [
  {
    title: "Laptops",
    img: "/laptop.webp",
    to: "/products/laptops",
  },
  {
    title: "Automotive",
    img: "/automotive.webp",
    to: "/products/automotive",
  },
  {
    title: "Watches",
    img: "/watches.webp",
    to: "/products/mens-watches",
  },
  {
    title: "Fragrances",
    img: "/fragrances.jpg",
    to: "/products/fragrances",
  },
] as const;

export const categoriesPopular = [
  {
    categorie: "Smartphones",
    icon: "/icons/smartphone.svg",
    to: "/products/smartphones",
  },
  {
    categorie: "Motorcycle",
    icon: "/icons/bike.svg",
    to: "/products/motorcycle",
  },
  {
    categorie: "Automotive",
    icon: "/icons/car.svg",
    to: "/products/automotive",
  },
  {
    categorie: "Shoes",
    icon: "/icons/footprints.svg",
    to: "/products/mens-shoes",
  },
  {
    categorie: "Home Decorations",
    icon: "/icons/home.svg",
    to: "/products/home-decoration",
  },
  {
    categorie: "Laptops",
    icon: "/icons/laptop.svg",
    to: "/products/laptops",
  },
  {
    categorie: "Shirt",
    icon: "/icons/shirt.svg",
    to: "/products/mens-shirts",
  },
  {
    categorie: "Watches",
    icon: "/icons/watch.svg",
    to: "/products/mens-watches",
  },
] as const;
