"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/collection-hero.jpeg"
        alt="Hero Image"
        fill
        className={`absolute object-cover inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        priority
      />

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      {/* Content */}
      <div
        className={`absolute z-20 bottom-25 w-full text-white  text-center space-y-4
            transition-all duration-1000 delay-300 transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
            `}
      >
        <h1 className="text-2xl md:text-3xl font-bold leading-tight font-serif">
          Our{" "}
          <span className="text-luxury-gold">
            Collections
          </span>
        </h1>
        <p className="font-serif">
          Discover our complete range of
          exceptional timepieces, each crafted
          with precision and unparalleled
          attention to detail.
        </p>
      </div>
    </div>
  );
};

export default Hero;
