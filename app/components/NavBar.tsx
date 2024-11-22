"use client";
import Link from "next/link";
import { MdRealEstateAgent } from "react-icons/md";
import ActiveLink from "./ActiveLink";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { IoMenuOutline } from "react-icons/io5";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const NavBar = () => {
  return (
    <div className="  bg-slate-900">
      <div className="flex justify-between items-center h-20 max-w-screen-2xl mx-auto px-4 ">
        <Link href={"/"}>
          <MdRealEstateAgent color="white" size={42} />
        </Link>
        <Links className="  text-white hidden md:flex font-bold tracking-wide gap-8" />
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;

export const Links = ({ className }: { className?: string }) => {
  const currentPath = usePathname();

  return (
    <div className={className}>
      <ActiveLink href={"/"}>Home</ActiveLink>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${
            currentPath.includes("/projects")
              ? "hover:text-red-600 text-red-700"
              : "hover:text-red-600 "
          }`}
        >
          Projects
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-900  p-4 grid border gap-2 text-left border-white">
          <ActiveLink href={"/projects"}>All</ActiveLink>
          <ActiveLink href={"/projects/buy"}>Buy</ActiveLink>
          <ActiveLink href={"/projects/rent"}>Rent</ActiveLink>
        </DropdownMenuContent>
      </DropdownMenu>

      <ActiveLink href={"/team"}>Team</ActiveLink>
      <ActiveLink href={"/contact"}>Contact</ActiveLink>
    </div>
  );
};

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <IoMenuOutline color="white" size={23} className="cursor-pointer " />
      </SheetTrigger>
      <SheetContent className="bg-slate-900 text-white border-0 grid justify-center items-center font-bold md:hidden">
        <SheetHeader>
          <SheetTitle className="hidden">Menu</SheetTitle>
          <SheetDescription
            asChild
            className="gap-8 grid font-bold text-lg text-white"
          >
            <Links className="tracking-wide"/>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
