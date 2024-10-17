"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="relative z-[100]">
      {/* Desktop Navigation */}
      <Nav openNav={openNavHandler} />

      {/* Mobile Navigation */}
      {showNav && <MobileNav showNav={showNav} closeNav={closeNavHandler} />}
    </div>
  );
};

export default ResponsiveNav;
