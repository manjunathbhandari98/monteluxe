import Image from "next/image";
import Button from "../custom/Button";
import { IndianRupee } from "lucide-react";

const LimitedProductCard = () => {
  return (
    <div className="rounded-md w-full h-full px-10 my-30">
      <div className="flex border-thin-gold border-text-muted/10 rounded-md">
        {/* product image */}
        <div className="w-1/2 relative">
          <div className="bg-luxury-gold absolute top-3 left-3 rounded-2xl w-fit px-2 py-1 text-black font-serif font-semibold text-sm">
            Only 49 Pieces
          </div>
          <Image
            src={
              "https://images.pexels.com/photos/9978681/pexels-photo-9978681.jpeg?auto=compress&cs=tinysrgb&w=1920"
            }
            alt="product"
            height={500}
            width={500}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* product details */}
        <div className="w-1/2 flex flex-col font-serif items-start justify-center px-10 gap-5">
          <h1 className="text-3xl">
            Celestial Masterpiece
          </h1>
          <p className="text-lg max-w-2xl">
            A revolutionary timepiece featuring a
            unique celestial complication,
            displaying the real-time positions of
            stars and constellations visible from
            your location.
          </p>
          <ul className="list-disc font-serif px-10 text-lg text-luxury-gold gap-10">
            <li>
              Hand-finished 18K rose gold case
            </li>
            <li>
              Perpetual calendar with moonphase
            </li>
            <li>Individual numbering</li>
          </ul>
          <div className="flex w-full justify-between items-center">
            {/* price */}
            <div className="flex flex-col mt-3 font-serif gap-2">
              <p className="text-lg">
                Starting from
              </p>
              <p className="text-lg flex gap-1 items-center text-luxury-gold">
                <IndianRupee size={18} />
                12999
              </p>
            </div>
            <Button
              size="medium"
              className="text-black h-12 font-semibold font-serif"
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
