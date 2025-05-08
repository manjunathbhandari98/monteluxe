import { featuredCollections } from "@/data/featuredCollection";
import WatchCard from "../custom/WatchCard";
import Button from "../custom/Button";
import { ArrowRight } from "lucide-react";

const Featured = () => {
  return (
    <section
      className="py-20 md:py-28 bg-background-dark relative overflow-hidden"
      id="collections"
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-luxury-gold/10 to-transparent opacity-40"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Featured{" "}
              <span className="text-luxury-gold">
                Collections
              </span>
            </h2>
            <p className="font-sans text-text-muted max-w-md">
              Discover our most coveted
              timepieces, each a testament to
              exceptional craftsmanship and
              timeless design.
            </p>
          </div>
          <Button
            variant="outline"
            size="medium"
            className="mt-6 md:mt-0 font-semibold"
          >
            View All Collections{" "}
            <ArrowRight
              size={16}
              className="ml-2"
            />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredCollections.map(
            (collection, index) => (
              <WatchCard
                key={index}
                collection={collection}
                delay={index * 0.1}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
