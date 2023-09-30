import Link from "next/link";
import { Dropdown } from "./DropdownMenu";
import ButtonMenu from "./ButtonMenu";

import Search from "./Search";
import Category from "./Category";

export default function Header() {
  return (
    <header>
      <nav className="w-full h-full flex flex-col justify-center items-center py-5 bg-slate-950">
        <div className="w-full flex items-center justify-center gap-x-5">
          <Link
            href="/"
            className="text-lg md:text-xl lg:text-2xl flex gap-2 font-black text-white max-sm:hidden"
          >
            Infinity Store
          </Link>
          <Search />
          <Dropdown />
          <ButtonMenu />
        </div>
      </nav>
      <Category />
    </header>
  );
}
