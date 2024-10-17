"use client";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div
      className={`fixed inset-0 z-[1000] ${navOpen} transform transition-transform duration-300`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gray-400 opacity-70"
        onClick={closeNav}
      ></div>

      {/* Nav Links */}
      <div className="relative flex flex-col h-full w-[80%] sm:w-[60%] bg-orange-200 space-y-6 z-[10001]">
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer"
        />
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white font-medium hover:text-orange-400">
              {navlink.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
