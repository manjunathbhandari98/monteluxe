"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full md:h-[80vh] h-[50vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/classic.jpg"
        alt="Hero Image"
        fill
        className={`absolute object-cover inset-0 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        priority
      />

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      {/* Content */}
      <div
        className={`absolute z-20 w-full px-4 sm:px-10 text-white flex flex-col items-center justify-center text-center top-1/2 transform -translate-y-1/2 space-y-4
        transition-all duration-1000 delay-300 ${
          isLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif">
          Men&apos;s{" "}
          <span className="text-luxury-gold">
            Timepieces
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-serif max-w-2xl">
          Sophisticated watches that combine bold
          design with exceptional craftsmanship,
          perfect for the modern gentleman.
        </p>
      </div>
    </div>
  );
};

export default Hero;
