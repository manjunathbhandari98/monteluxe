"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../custom/Button";
import { Timer } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full md:h-[90vh] h-[50vh] overflow-hidden">
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
        className={`absolute z-20 text-white bottom-10 md:bottom-20 px-6 sm:px-12 md:px-20 max-w-full
          transition-all duration-1000 delay-300 transform
          ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif">
          Limited&apos;s{" "}
          <span className="text-luxury-gold">
            Edition
          </span>
        </h1>

        <p className="font-serif text-sm sm:text-xl md:text-2xl max-w-2xl mt-4">
          Exclusive timepieces crafted in limited
          quantities, representing the pinnacle of
          our watchmaking expertise.
        </p>

        <Button
          size="large"
          variant="primary"
          className="mt-6 text-black font-semibold flex gap-4 items-center"
        >
          <Timer size={20} />
          Register Interest
        </Button>
      </div>
    </div>
  );
};

export default Hero;
