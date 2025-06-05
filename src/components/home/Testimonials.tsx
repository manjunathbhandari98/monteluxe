"use client";
import React, { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);
  const [animating, setAnimating] =
    useState(false);

  const goToNext = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(
      (prev) => (prev + 1) % testimonials.length
    );
    setTimeout(() => setAnimating(false), 500);
  };

  const goToPrev = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-luxury-green/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Client{" "}
            <span className="text-luxury-gold">
              Testimonials
            </span>
          </h2>
          <p className="text-text-muted">
            Discover what our esteemed clients
            have to say about their Chronomaster
            experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="relative transition-all duration-500 ease-in-out"
              style={{ height: "300px" }}
            >
              {testimonials.map(
                (testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === activeIndex
                        ? "opacity-100 translate-x-0"
                        : index < activeIndex ||
                          (activeIndex === 0 &&
                            index ===
                              testimonials.length -
                                1)
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="bg-background-darker bg-opacity-50 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-luxury-gold/10">
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(5)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={
                                i <
                                testimonial.rating
                                  ? "text-luxury-gold"
                                  : "text-text-muted opacity-30"
                              }
                              fill={
                                i <
                                testimonial.rating
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          )
                        )}
                      </div>

                      <blockquote className="text-lg md:text-xl font-serif italic mb-8">
                        &quot;{testimonial.quote}
                        &quot;
                      </blockquote>

                      <div className="flex items-center">
                        <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                          <Image
                            src={
                              testimonial.avatar
                            }
                            alt={testimonial.name}
                            fill
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">
                            {testimonial.name}
                          </p>
                          <p className="text-text-muted text-sm">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:bg-opacity-10 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-luxury-gold w-6"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${
                    index + 1
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:bg-opacity-10 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
