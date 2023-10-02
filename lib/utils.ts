import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const someFees = (fees: number) => {
  const percent = fees / 12;

  return `${percent.toFixed(2)}$`;
};
