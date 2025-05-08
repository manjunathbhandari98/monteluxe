/* eslint-disable @next/next/no-img-element */
"use client";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { CollectionType } from "../../types";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

interface WatchCardProps {
  collection: CollectionType;
  delay?: number;
}

const WatchCard: React.FC<WatchCardProps> = ({
  collection,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] =
    useState(false);
  const [isHovered, setIsHovered] =
    useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay to make the animations sequential
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-background-darker rounded-lg overflow-hidden transition-all duration-700 transform ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-luxury-silver/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      {/* Image */}
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={`/images/${collection.name}.jpeg`}
          alt={collection.name}
          fill
          priority
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Black left-side overlay fade to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-xl font-serif font-medium mb-2 text-white">
          {collection.name}
        </h3>
        <p className="text-text-muted text-sm mb-4">
          {collection.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-luxury-gold font-semibold">
            From ₹{collection.price}
          </span>
          <button
            className={`p-1 rounded-full bg-luxury-gold/10 text-luxury-gold hover:bg-luxury-gold hover:text-background-dark transition-all duration-300 transform ${
              isHovered
                ? "scale-110 rotate-90"
                : ""
            }`}
          >
            <PlusCircle size={20} />
          </button>
        </div>
      </div>

      {/* Luxury indicator */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-background-darker/80 backdrop-blur-sm text-luxury-gold text-xs uppercase tracking-wider z-10">
        {collection.category}
      </div>
    </div>
  );
};

export default WatchCard;
