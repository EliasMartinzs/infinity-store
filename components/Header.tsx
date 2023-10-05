import Link from "next/link";
import { Dropdown } from "./DropdownMenu";
import ButtonMenu from "./ButtonMenu";

import Search from "./Search";
import Category from "./Category";
import Favorites from "./Favorites";

export default function Header() {
  return (
    <header className="w-full z-50">
      <nav className="w-full flex flex-col">
        <div className="bg-slate-950 flex-between px-2 md:px-20 xl:px-40 py-4">
          <Link href="/" className="text-2xl xl:text-3xl text-white font-black">
            Infinity
          </Link>
          <div className="w-full flex-center mx-32 max-lg:hidden">
            <Search classname="xl:w-96 2xl:w-[800px] rounded-full" />
          </div>
          <div className="flex items-center gap-x-4">
            <Dropdown />
            <Favorites />
            <ButtonMenu />
          </div>
        </div>
        <div className="bg-slate-950 lg:hidden w-full">
          <Search classname="w-full rounded-full px-10 my-2 mx-2" />
        </div>
        <Category />
      </nav>
    </header>
  );
}

// <header className="overflow-hidden">
// <nav className="w-full h-full flex flex-col justify-center items-center py-5 bg-slate-950">
//   <div className="w-full flex items-center justify-center gap-x-5">
//     <Link
//       href="/"
//       className="text-lg md:text-xl lg:text-2xl flex gap-2 font-black text-white"
//     >
//       Infinity <span className="max-md:hidden">Store</span>
//     </Link>
//     <Search classname="" />
//     <Dropdown />
//     <div className="max-xl:hidden space-x-3">
//       <Favorites classname="text-white fill-white" />
//     </div>
//     <ButtonMenu />
//   </div>
// </nav>
// <Category />
// </header>
