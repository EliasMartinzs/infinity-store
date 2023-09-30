import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-slate-950 hover:bg-slate-900 transition-colors">
          <ShoppingCart className="text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">oi</DropdownMenuContent>
    </DropdownMenu>
  );
}
