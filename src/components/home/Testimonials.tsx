/* eslint-disable @next/next/no-img-element */
"use client";
import { testimonials } from "@/data/testimonials";
import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [
    activeTestimonial,
    setActiveTestimonial,
  ] = useState(0);

  const onNext = () => {
    setActiveTestimonial((prev) =>
      prev >= testimonials.length - 1
        ? 0
        : prev + 1
    );
  };

  const onPrev = () => {
    setActiveTestimonial((prev) =>
      prev <= 0
        ? testimonials.length - 1
        : prev - 1
    );
  };

  useEffect(() => {
    setInterval(() => {
      onNext();
    }, 8000);
  }, []);

  //   const testimonial =
  //     testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-black/20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-luxury-green/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-16">
          Client{" "}
          <span className="text-luxury-gold">
            Testimonials
          </span>
          <p className="text-sm opacity-80 mt-4">
            Discover what our esteemed clients
            have to say about their Chronomaster
            experience.
          </p>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Testimonial Card */}

          <div className="relative overflow-hidden max-w-4xl mx-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  activeTestimonial * 100
                }%)`,
              }}
            >
              {testimonials.map(
                (testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-full px-4 py-6 border rounded-sm border-luxury-gold shadow-lg flex-shrink-0"
                  >
                    {/* Stars */}
                    <div className="flex gap-2">
                      {[...Array(5)].map(
                        (_, index) => (
                          <Star
                            key={index}
                            size={20}
                            className={
                              index <
                              testimonial.rating
                                ? "text-luxury-gold"
                                : "text-gray-600"
                            }
                          />
                        )
                      )}
                    </div>

                    {/* Review */}
                    <p className="text-xl italic font-serif max-w-3xl text-text-muted mt-7">
                      {testimonial.quote}
                    </p>

                    {/* Reviewer */}
                    <div className="flex items-center mt-5">
                      <img
                        src={testimonial.avatar}
                        alt="Reviewer"
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-md font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-text-muted">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex gap-4 mt-10 items-center justify-center">
          <button
            onClick={onPrev}
            className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:bg-opacity-10 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-3 justify-center items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  setActiveTestimonial(index)
                }
                className={`rounded-full transition-all ${
                  activeTestimonial == index
                    ? "w-7 bg-luxury-gold"
                    : "w-2 bg-gray-500"
                }
                 h-2 `}
              />
            ))}
          </div>
          <button
            onClick={onNext}
            className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:bg-opacity-10 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
