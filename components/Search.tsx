"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export default function Search({ classname }: { classname: string }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const searchedProduct = () => {
    const search = query?.split(" ").join("-");

    if (search) {
      router.push(`/search/${search}`);

      setQuery("");
    }
  };

  return (
    <div
      className={twMerge(
        "relative flex flex-row items-center rounded-xl cursor-pointer hover:bg-slate-800"
      )}
    >
      <Input
        className={cn(
          "outline-none placeholder:text-slate-600 focus:border-slate-950 rounded-none bg-slate-200",
          classname
        )}
        placeholder="Search Products"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <span className="px-2">
        <SearchIcon
          className="cursor-pointer text-white"
          onClick={searchedProduct}
        />
      </span>
    </div>
  );
}
