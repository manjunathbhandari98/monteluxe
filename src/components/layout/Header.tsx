"use client";

import { useEffect, useState } from "react";
import {
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import MonteluxeLogo from "../logo/MonteluxeLogo";
import Navbar from "./Navbar";
import Button from "../custom/Button";
import Link from "next/link";
import { product } from "@/data/product";
import { ProductProps } from "@/types";

const Header = () => {
  const [isScrolled, setIsScrolled] =
    useState(false);
  const [isSearchOpen, setIsSearchOpen] =
    useState(false);
  const [searchTerm, setSearchTerm] =
    useState("");
  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>([]);

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

  // Lock scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSearchOpen]);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      const results = product.filter((p) =>
        p.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  const BlurredBackground = () => (
    <div
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      onClick={() => setIsSearchOpen(false)}
    ></div>
  );

  return (
    <>
      {isSearchOpen && <BlurredBackground />}
      {isSearchOpen ? (
        <div
          className="fixed items-center top-0 left-0 w-full flex z-50 p-5 bg-black/60 shadow-md backdrop-blur transition-all ease-in-out duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            className="focus:outline-none border-b w-full outline-none bg-transparent py-2"
            autoFocus
            type="text"
            placeholder="Search anything..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
          <X
            className="cursor-pointer"
            onClick={() => setIsSearchOpen(false)}
          />
          {filteredProducts.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-2 bg-black text-white shadow-lg rounded-lg max-h-60 overflow-auto">
              <ul>
                {filteredProducts.map(
                  (product, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-900 cursor-pointer"
                    >
                      <Link
                        href={`/product/${product.slug}`}
                        onClick={() =>
                          setIsSearchOpen(false)
                        }
                      >
                        {product.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <header
          className={`fixed top-0 left-0 w-full z-50 pt-3 transition-colors duration-300 ${
            isScrolled
              ? "bg-black/60 shadow-md backdrop-blur"
              : "bg-transparent"
          } `}
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <MonteluxeLogo />
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
                <Search
                  size={20}
                  onClick={() =>
                    setIsSearchOpen(true)
                  }
                />
              </button>
              <Link href="/cart">
                <button
                  aria-label="Shopping Bag"
                  className="p-2 cursor-pointer hover:text-luxury-gold transition-colors duration-300 relative"
                >
                  <ShoppingBag size={20} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full bg-luxury-gold text-black text-[10px] font-semibold">
                    2
                  </span>
                </button>
              </Link>
              <Link href="/book-appointment">
                <Button
                  variant="primary"
                  size="small"
                  className="text-black font-medium"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
