/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import MonteluxeLogo from "../logo/MonteluxeLogo";
import Navbar from "./Navbar";
import Button from "../custom/Button";
import Link from "next/link";
import { ProductProps } from "@/types";
import Sidebar from "./Sidebar";
import { getProducts } from "@/services/productService";
import ProfileMenu from "../profile/ProfileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] =
    useState(false);
  const [isSearchOpen, setIsSearchOpen] =
    useState(false);
  const [searchTerm, setSearchTerm] =
    useState("");
  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);
  const [products, setProducts] = useState<
    ProductProps[]
  >([]);

  const [user, setUser] = useState(
    localStorage.getItem("authToken")
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error(
          "Failed to fetch products:",
          error
        );
      }
    };
    fetchProducts();
  }, []);

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

  useEffect(() => {
    if (isSearchOpen || isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSearchOpen, isSidebarOpen]);

  useEffect(() => {
    if (searchTerm) {
      const results = products?.filter((p) =>
        p.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [products, searchTerm]);

  const BlurredBackground = () => (
    <div
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      onClick={() => setIsSearchOpen(false)}
    />
  );

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <>
      {isSearchOpen && <BlurredBackground />}
      {isSearchOpen ? (
        <div
          className="fixed top-0 left-0 w-full z-50 p-4 flex items-center bg-black/60 backdrop-blur shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            className="flex-grow bg-transparent border-b border-gray-500 text-white placeholder-gray-300 focus:outline-none py-2 px-2 text-sm md:text-base"
            autoFocus
            type="text"
            placeholder="Search anything..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
          <X
            className="ml-3 cursor-pointer text-white"
            onClick={() => setIsSearchOpen(false)}
          />
          {filteredProducts.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-2 bg-black text-white shadow-lg rounded-lg max-h-60 overflow-auto z-50">
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
          className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            isScrolled
              ? "bg-black/60 shadow-md backdrop-blur"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* Sidebar Menu Toggle */}
            <div className="md:hidden">
              <button
                className="p-2"
                onClick={() =>
                  setIsSidebarOpen(true)
                }
              >
                <Menu size={22} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <MonteluxeLogo />
              </Link>
            </div>

            {/* Navbar (desktop only) */}
            <nav className="hidden md:flex">
              <Navbar />
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                aria-label="Search"
                className="p-2 hover:text-luxury-gold transition-colors"
              >
                <Search
                  size={20}
                  onClick={() =>
                    setIsSearchOpen(true)
                  }
                />
              </button>
              {user ? (
                <div className="flex gap-5">
                  <Link href="/cart">
                    <button
                      aria-label="Shopping Bag"
                      className="p-2 relative hover:text-luxury-gold transition-colors"
                    >
                      <ShoppingBag size={20} />
                      <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full bg-luxury-gold text-black text-[10px] font-semibold">
                        2
                      </span>
                    </button>
                  </Link>
                  <ProfileMenu
                    onLogout={handleLogout}
                  />
                </div>
              ) : (
                <div className="flex gap-10">
                  <Link href="/register">
                    <Button
                      variant="primary"
                      size="medium"
                      className="text-black font-medium rounded-sm"
                    >
                      Register
                    </Button>
                  </Link>

                  <Link
                    href="/login"
                    className="hidden md:flex"
                  >
                    <Button
                      variant="outline"
                      size="medium"
                      className="text-black font-medium rounded-sm"
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
      )}

      {/* Sidebar (mobile) */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() =>
              setIsSidebarOpen(false)
            }
          />
          <div className="fixed left-0 top-0 z-50 bg-black w-72 max-w-full h-full shadow-lg overflow-auto">
            <div className="flex justify-end p-4">
              <X
                className="cursor-pointer text-white"
                onClick={() =>
                  setIsSidebarOpen(false)
                }
              />
            </div>
            <Sidebar
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
