/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, {
  useEffect,
  useState,
} from "react";
import {
  CartProps,
  ProductProps,
  UserProps,
} from "@/types";
import {
  Heart,
  Share2,
  Shield,
  Clock,
  Package,
} from "lucide-react";
import Button from "../custom/Button";
import Image from "next/image";
import { getUser } from "@/services/authService";
import { addToCart } from "@/services/cartService";

const ProductDetails = ({
  product,
}: {
  product: ProductProps;
}) => {
  const [selectedImage, setSelectedImage] =
    useState(0);
  const [selectedSize, setSelectedSize] =
    useState(product.caseSize || "");
  const [user, setUser] =
    useState<UserProps | null>(null);

  const images = [
    product.image,
    ...(product?.images || []),
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
      console.log("Fetched User: ", fetchedUser);
    };
    fetchUser();
  }, []);

  const specs = {
    Gender: product.gender,
    "Case Material": product.caseMaterial,
    "Crystal Type": product.crystalType,
    "Water Resistance": product.waterResistance,
    Movement: product.movement,
    Strap: product.strapMaterial,
  };

  const addToBag = async () => {
    if (!user || !product?.id) {
      console.error("Missing user or product ID");
      return;
    }

    const cartData: CartProps = {
      userId: user.id,
      items: [
        {
          productId: product.id,
          price: product.price,
          quantity: 1,
          image: product.image,
          productName: product.name,
        },
      ],
    };

    console.log(cartData);

    await addToCart(cartData, user.id);
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Wishlist & Share Buttons (Mobile Only) */}
        <div className="flex justify-end gap-4 md:hidden mb-4 px-3">
          <button className="text-text-muted hover:text-luxury-gold transition">
            <Heart size={22} />
          </button>
          <button className="text-text-muted hover:text-luxury-gold transition">
            <Share2 size={22} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-background-darker relative w-full">
              <Image
                src={`/images/${images[selectedImage]}`}
                alt={product.name}
                fill
                priority
                className="object-cover rounded-lg"
              />
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedImage(index)
                  }
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-luxury-gold"
                      : "border-transparent hover:border-luxury-gold/50"
                  }`}
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`${product.name} view ${
                      index + 1
                    }`}
                    width={100}
                    height={100}
                    priority
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4">
                {product.name}
              </h1>
              <p className="text-luxury-gold text-xl sm:text-2xl font-serif">
                {product.currency}{" "}
                <span className="font-bold">
                  {product.price.toLocaleString()}
                </span>
              </p>
            </div>

            <p className="text-text-muted text-sm sm:text-base">
              {product.description}
            </p>

            {/* Case Size Selection */}
            {product.caseSize && (
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-3">
                  Case Size
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[product.caseSize].map(
                    (size) => (
                      <button
                        key={size}
                        onClick={() =>
                          setSelectedSize(size)
                        }
                        className={`px-6 py-2 sm:py-3 rounded border text-sm sm:text-base transition-all ${
                          selectedSize === size
                            ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold"
                            : "border-text-muted/30 hover:border-luxury-gold/50"
                        }`}
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="large"
                className="flex-1 font-semibold text-black"
                onClick={addToBag}
              >
                ADD TO BAG
              </Button>
              <div className="gap-4 hidden sm:flex">
                <Button
                  variant="outline"
                  size="large"
                >
                  <Heart size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="large"
                >
                  <Share2 size={20} />
                </Button>
              </div>
            </div>

            {/* Features */}
            {product.features?.length > 0 && (
              <div className="border-t border-text-muted/10 pt-8">
                <h3 className="font-serif text-xl mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className="flex items-center font-serif text-text-muted"
                      >
                        <span className="text-luxury-gold mr-2">
                          •
                        </span>
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-t border-text-muted/10 pt-8">
              {[
                {
                  icon: (
                    <Shield
                      className="text-luxury-gold"
                      size={24}
                    />
                  ),
                  title: "5-Year Warranty",
                  desc: "International coverage",
                },
                {
                  icon: (
                    <Clock
                      className="text-luxury-gold"
                      size={24}
                    />
                  ),
                  title: "Free Returns",
                  desc: "Within 30 days",
                },
                {
                  icon: (
                    <Package
                      className="text-luxury-gold"
                      size={24}
                    />
                  ),
                  title: "Free Shipping",
                  desc: "Worldwide delivery",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center space-x-3"
                >
                  {item.icon}
                  <div>
                    <p className="font-medium">
                      {item.title}
                    </p>
                    <p className="text-text-muted text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl mb-8 text-luxury-gold">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(specs).map(
              ([label, value]) =>
                value ? (
                  <div
                    key={label}
                    className="border-b border-text-muted/10 pb-6"
                  >
                    <p className="text-text-muted font-bold uppercase text-sm tracking-wider mb-2">
                      {label}
                    </p>
                    <p className="font-medium ">
                      {value}
                    </p>
                  </div>
                ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
