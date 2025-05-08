"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Button from "../custom/Button";
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
        src="/images/hero.jpeg"
        alt="Hero Image"
        fill
        className={`absolute object-cover inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        priority
      />

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent z-10" />

      {/* Content */}
      <div
        className={`absolute z-20 top-25 left-10 text-white max-w-xl space-y-4
            transition-all duration-1000 delay-300 transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
            `}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-serif">
          <span className="text-luxury-gold">
            Timeless{" "}
          </span>
          Luxury for the{" "}
          <span className="text-luxury-gold">
            Connoisseur
          </span>
        </h1>
        <p className="text-lg md:text-xl font-serif text-gray-500">
          Discover our exquisite collection of
          handcrafted <br /> timepieces, where
          precision engineering meets <br />{" "}
          unparalleled artistry.
        </p>
        <div className="flex flex-col grow [&>Button]:font-semibold sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            variant="primary"
            size="large"
            className="text-black"
          >
            Explore Collection{" "}
            <ChevronRight
              size={18}
              className="ml-2"
            />
          </Button>
          <Button
            variant="outline"
            size="large"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
