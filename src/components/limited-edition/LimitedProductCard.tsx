import Image from "next/image";
import Button from "../custom/Button";
import { IndianRupee } from "lucide-react";

const LimitedProductCard = () => {
  return (
    <div className="rounded-md w-full h-full px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col md:flex-row border border-text-muted/10 rounded-md overflow-hidden">
        {/* product image */}
        <div className="md:w-1/2 relative w-full h-64 md:h-auto">
          <div className="bg-luxury-gold absolute top-3 left-3 rounded-2xl w-fit px-2 py-1 text-black font-serif font-semibold text-sm z-10">
            Only 49 Pieces
          </div>
          <Image
            src="https://images.pexels.com/photos/9978681/pexels-photo-9978681.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="product"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>

        {/* product details */}
        <div className="md:w-1/2 w-full flex flex-col font-serif items-start justify-center px-5 sm:px-8 md:px-10 py-8 gap-5">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Celestial Masterpiece
          </h1>
          <p className="text-base sm:text-lg max-w-2xl text-gray-300">
            A revolutionary timepiece featuring a
            unique celestial complication,
            displaying the real-time positions of
            stars and constellations visible from
            your location.
          </p>
          <ul className="list-disc pl-5 sm:pl-10 text-luxury-gold text-base sm:text-lg space-y-1">
            <li>
              Hand-finished 18K rose gold case
            </li>
            <li>
              Perpetual calendar with moonphase
            </li>
            <li>Individual numbering</li>
          </ul>
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-5">
            {/* price */}
            <div className="flex flex-col font-serif gap-1">
              <p className="text-base sm:text-lg">
                Starting from
              </p>
              <p className="text-lg flex gap-1 items-center text-luxury-gold">
                <IndianRupee size={18} />
                12999
              </p>
            </div>
            <Button
              size="medium"
              className="text-black h-12 font-semibold font-serif w-full sm:w-auto"
            >
              Reserve Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedProductCard;
