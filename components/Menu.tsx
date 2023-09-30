import { selectToggleCart } from "@/redux/slices/selector";
import { useSelector } from "@/redux/store";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import { linksMenu, mainCategories } from "@/constants/utils";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  const isOpen = useSelector(selectToggleCart);

  return (
    <div
      className={`w-full absolute top-20 z-50 transition ease-in-out delay-150 bg-white space-y-3 overflow-hidden ${
        isOpen ? "left-0" : "-left-[999px]"
      }`}
    >
      <div className="w-full bg-slate-950 py-3">
        <div className="w-full flex-center flex-row mx-5 gap-x-3">
          <User className="w-20 h-14 flex-center text-white hover:bg-white hover:text-black rounded-full transition-colors hover:p-2" />
          <div className="text-slate-50 m-2">
            <p>Welcome</p>
            <p className="font-extralight">
              Sign in to your account to access your favorites and purchases
            </p>
          </div>
        </div>
        <div className="w-full flex-center p-5 gap-x-5">
          <Button className="w-full hover:bg-slate-50 hover:text-slate-950 transition-colors">
            Sign In
          </Button>
          <Button className="w-full bg-slate-50 text-slate-950 hover:bg-slate-900 hover:text-slate-50">
            Sign Up
          </Button>
        </div>
      </div>

      <div className="w-full flex-start flex-col gap-y-2">
        {linksMenu.map((link) => (
          <Link
            href={link.to}
            key={link.title}
            className="flex flex-row gap-x-3 py-2 hover:bg-slate-100 w-full px-4 hover:text-blue-600"
          >
            <Image src={link.icon} alt={link.title} width={22} height={22} />
            <span>{link.title}</span>
          </Link>
        ))}
      </div>

      <div className="w-full flex-start flex-col gap-y-2">
        <h3 className="font-semibold text-xl px-4">Main Categories</h3>

        {mainCategories.map((cat) => (
          <Link
            href={cat.to}
            key={cat.title}
            className="flex flex-row gap-x-3 py-2 hover:bg-slate-100 w-full px-4 hover:text-blue-600"
          >
            <Image src={cat.icons} alt={cat.title} width={22} height={22} />

            <span className="capitalize">{cat.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
