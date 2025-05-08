/* eslint-disable @next/next/no-img-element */
"use client";
import { categories } from "@/data/categories";
import React, { useState } from "react";
import Button from "../custom/Button";

const WatchCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-background-dark to-background-darker">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-16">
          Exceptional{" "}
          <span className="text-luxury-gold">
            Craftsmanship
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Category Tabs */}
          <div className="lg:w-1/3">
            <div className="flex flex-col space-y-5">
              {categories.map(
                (category, index) => (
                  <button
                    key={index}
                    className={`text-left px-6 py-4 transition-all duration-300 border-l-2 ${
                      activeCategory === index
                        ? "border-luxury-gold text-white"
                        : "border-text-muted/30 text-text-muted hover:border-text-muted hover:text-white"
                    }`}
                    onClick={() =>
                      setActiveCategory(index)
                    }
                  >
                    <h3 className="font-serif text-xl mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-80 max-w-xs">
                      {category.shortDescription}
                    </p>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Category Content */}
          <div className="lg:w-2/3">
            <div className="relative">
              {categories.map(
                (category, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      activeCategory === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 absolute inset-0 pointer-events-none translate-y-4"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl mb-4">
                          {category.name}{" "}
                          <span className="text-luxury-gold">
                            Collection
                          </span>
                        </h3>
                        <p className="text-text-muted mb-6">
                          {category.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {category.features.map(
                            (feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-text-muted"
                              >
                                <span className="text-luxury-gold mr-2">
                                  •
                                </span>
                                {feature}
                              </li>
                            )
                          )}
                        </ul>
                        <p className="text-lg font-serif mb-6">
                          Starting at{" "}
                          <span className="text-luxury-gold">
                            {
                              category.startingPrice
                            }
                          </span>
                        </p>
                        <Button variant="primary">
                          Explore Collection
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchCategories;
