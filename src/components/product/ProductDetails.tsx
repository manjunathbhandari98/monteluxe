"use client";
import React, { useState } from "react";
import { ProductProps } from "@/types";
import {
  Heart,
  Share2,
  Shield,
  Clock,
  Package,
} from "lucide-react";
import Button from "../custom/Button";
import Image from "next/image";

const ProductDetails = ({
  product,
}: {
  product: ProductProps;
}) => {
  const [selectedImage, setSelectedImage] =
    useState(0);
  const [selectedSize, setSelectedSize] =
    useState(product.case_size || "");

  const images = [
    product.image,
    ...(product?.images || []),
  ];

  const specs = {
    Gender: product.gender,
    "Case Material": product.case_material,
    "Crystal Type": product.crystal_type,
    "Water Resistance": product.water_resistance,
    Movement: product.movement,
    Strap: product.strap_material,
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-background-darker">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-background-darker">
                <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
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
                    src={img}
                    alt={`${product.name} view ${
                      index + 1
                    }`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl mb-4">
                {product.name}
              </h1>
              <p className="text-luxury-gold text-2xl font-serif">
                {product.currency}{" "}
                {product.price.toLocaleString()}
              </p>
            </div>

            <p className="text-text-muted">
              {product.description}
            </p>

            {/* Case Size Selection */}
            {product.case_size && (
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-3">
                  Case Size
                </h3>
                <div className="flex space-x-4">
                  {[product.case_size].map(
                    (size) => (
                      <button
                        key={size}
                        onClick={() =>
                          setSelectedSize(size)
                        }
                        className={`px-6 py-3 rounded border transition-all ${
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
            <div className="flex space-x-4">
              <Button
                variant="primary"
                size="large"
                className="flex-1 font-semibold text-black"
              >
                ADD TO BAG
              </Button>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-text-muted/10 pt-8">
              <div className="flex items-center space-x-3">
                <Shield
                  className="text-luxury-gold"
                  size={24}
                />
                <div>
                  <p className="font-medium">
                    5-Year Warranty
                  </p>
                  <p className="text-text-muted text-sm">
                    International coverage
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock
                  className="text-luxury-gold"
                  size={24}
                />
                <div>
                  <p className="font-medium">
                    Free Returns
                  </p>
                  <p className="text-text-muted text-sm">
                    Within 30 days
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Package
                  className="text-luxury-gold"
                  size={24}
                />
                <div>
                  <p className="font-medium">
                    Free Shipping
                  </p>
                  <p className="text-text-muted text-sm">
                    Worldwide delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl mb-8">
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
                    <p className="text-text-muted uppercase text-sm tracking-wider mb-2">
                      {label}
                    </p>
                    <p className="font-medium">
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
