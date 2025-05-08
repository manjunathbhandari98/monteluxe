/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

import { CollectionType } from "@/types";
import Button from "../custom/Button";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  collection: CollectionType;
}

const CollectionCard: React.FC<
  CollectionCardProps
> = ({ collection }) => {
  return (
    <div className="flex flex-col gap-2 border rounded-md p-3 h-full">
      {/* Image */}
      <div className="relative w-full h-48">
        {" "}
        {/* Fixed height */}
        <Image
          src={`${collection.image}`}
          alt="image"
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Name */}
      <div className="mt-10">
        <h1 className="text-2xl font-serif">
          {collection.name}
        </h1>
      </div>

      {/* Description */}
      <div>
        <p className=" mt-3 font-serif">
          {collection.description}
        </p>
        <ul className="list-disc pl-4 mt-2 font-serif">
          {collection.features?.map(
            (feature, index) => (
              <li
                key={index}
                className="list"
              >
                {feature}
              </li>
            )
          )}
        </ul>
      </div>
      {/* button */}
      <div className="flex justify-between items-center font-serif mt-auto text-luxury-gold font-semibold">
        <h5>₹{collection.price}</h5>
        <Button
          size="small"
          variant="outline"
          className="border-thin-gold font-semibold flex gap-4"
        >
          Explore
          <ArrowRight size={17} />
        </Button>
      </div>
    </div>
  );
};

export default CollectionCard;
