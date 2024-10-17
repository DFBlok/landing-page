"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { navLinks } from "@/constant/constant";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${navBg ? "bg-gray-800" : ""} h-[10vh] z-[100] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-full max-w-screen-xl px-4 sm:px-8 xl:px-12 mx-auto">
        {/* Logo */}
        <div className="flex items-center ">
          <Image
            src={"/Velisa-Landscape-Logo.png"}
            height={60}
            width={100}
            alt="Velisa Africa Academy"
            className="object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-14 text-gray-900">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <p className="font-medium text-white hover:text-orange-400">
                {navlink.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Login and Mobile Burger Menu */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <div className="flex items-center cursor-pointer text-white space-x-2 hover:text-orange-400 transition-all duration-200">
            <FaUserCircle className="w-5 h-5" />
            <p className="font-bold text-xs sm:text-base">Login / Register</p>
          </div>
          {/* Mobile Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
