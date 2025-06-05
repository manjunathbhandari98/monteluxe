import { collections } from "@/data/collections";
import CollectionCard from "./CollectionCard";

const Collections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-3 items-stretch">
      {collections.map((collection, index) => (
        <div key={index}>
          <CollectionCard
            collection={collection}
          />
        </div>
      ))}
    </div>
  );
};

export default Collections;
