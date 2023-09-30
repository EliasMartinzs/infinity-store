"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const searched = (search: string) => {
    if (search) {
      search.split(" ").join("-");
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className="relative flex flex-row items-center bg-slate-900 rounded-xl cursor-pointer hover:bg-slate-800">
      <Input
        className="w-48 h-8 md:w-72 md:h-10 lg:w-[700px] outline-none placeholder:text-slate-600 focus:border-slate-950 rounded-none bg-slate-200"
        placeholder="Buscar Produtos"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <span className="px-2">
        <SearchIcon
          className="cursor-pointer text-white"
          onClick={searched(query)}
        />
      </span>
    </div>
  );
}
