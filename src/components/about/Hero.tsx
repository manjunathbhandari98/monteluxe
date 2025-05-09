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
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/classic.jpg"
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
        className={`absolute z-20 bottom-25 w-full text-white ml-10 space-y-4
            transition-all duration-1000 delay-300 transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
            `}
      >
        <h1 className="text-2xl md:text-3xl font-bold leading-tight font-serif">
          Our&apos;s{" "}
          <span className="text-luxury-gold">
            Legacy
          </span>
        </h1>
        <p className="font-serif text-lg max-w-2xl">
          Since 2014, we have been crafting
          exceptional timepieces that blend
          traditional watchmaking with modern
          innovation. Each Chronomaster watch is a
          testament to our commitment to
          excellence and precision.
        </p>
      </div>
    </div>
  );
};

export default Hero;
