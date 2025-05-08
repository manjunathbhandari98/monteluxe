"use client";

import { useEffect, useState } from "react";
import {
  Search,
  ShoppingBag,
} from "lucide-react";
import MonteluxeLogo from "../logo/MonteluxeLogo";
import Navbar from "./Navbar";
import Button from "../custom/Button";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 pt-3 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/60 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href='/'>
           <MonteluxeLogo/>
          </Link>
         
        </div>

        {/* Navbar */}
        <nav className="hidden md:flex">
          <Navbar />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="p-2 cursor-pointer hover:text-luxury-gold transition-colors duration-300"
          >
            <Search size={20} />
          </button>
          <button
            aria-label="Shopping Bag"
            className="p-2 cursor-pointer hover:text-luxury-gold transition-colors duration-300 relative"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full bg-luxury-gold text-black text-[10px] font-semibold">
              2
            </span>
          </button>
          <Button
            variant="primary"
            size="small"
            className="text-black font-medium"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
