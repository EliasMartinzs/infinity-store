"use client";

import { useDispatch, useSelector } from "@/redux/store";
import { toggleMenu } from "@/redux/slices/cart.slice";
import { selectToggleCart } from "@/redux/slices/selector";
import { MenuIcon, X } from "lucide-react";
import Menu from "./Menu";
import { Fragment } from "react";

export default function ButtonMenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectToggleCart);

  const openMenu = () => {
    dispatch(toggleMenu(!isOpen));
  };

  return (
    <div className="lg:hidden items-center flex">
      <button onClick={openMenu}>
        {isOpen ? (
          <X className="text-white" />
        ) : (
          <MenuIcon className="text-white" />
        )}
      </button>

      {isOpen && isOpen ? <Menu /> : null}
    </div>
  );
}
