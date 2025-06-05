/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { CollectionType } from "@/types";
import Button from "../custom/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CollectionCardProps {
  collection: CollectionType;
}

const CollectionCard: React.FC<
  CollectionCardProps
> = ({ collection }) => {
  return (
    <div className="flex flex-col gap-4 border rounded-md p-4 h-full">
      {/* Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
        <Image
          src={`${collection.image}`}
          alt="collection image"
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Name */}
      <h1 className="text-xl sm:text-2xl font-serif mt-2">
        {collection.name}
      </h1>

      {/* Description */}
      <div className="text-sm sm:text-base font-serif text-muted-foreground">
        <p className="mt-1">
          {collection.description}
        </p>
        {collection.features && (
          <ul className="list-disc pl-5 mt-2">
            {collection.features.map(
              (feature, index) => (
                <li key={index}>{feature}</li>
              )
            )}
          </ul>
        )}
      </div>

      {/* Button and Price */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto text-luxury-gold font-semibold">
        <h5 className="text-lg">
          ₹{collection.price}
        </h5>
        <Link
          href={`/products?category=${collection.name}`}
          className="w-full sm:w-fit"
        >
          <Button
            size="small"
            variant="outline"
            className="w-full sm:w-fit border-thin-gold font-semibold flex justify-center sm:justify-start items-center gap-2"
          >
            Explore
            <ArrowRight size={17} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
