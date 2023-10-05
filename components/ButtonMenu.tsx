"use client";

import { useDispatch, useSelector } from "@/redux/store";
import { toggleMenu } from "@/redux/slices/cart.slice";
import { selectToggleIsOpen } from "@/redux/slices/selector";
import { MenuIcon, X } from "lucide-react";
import Menu from "./Menu";

export default function ButtonMenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectToggleIsOpen);

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
