import { ProductProps } from "@/types";
import Image from "next/image";

const ProductDetails = ({
  product,
}: {
  product: ProductProps;
}) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 p-6">
      <div className="flex-1">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover rounded-md w-full"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-serif">
          {product.name}
        </h1>
        <p className="text-lg text-gray-700">
          {product.currency}{" "}
          {product.price.toLocaleString()}
        </p>
        <p className="text-sm">
          {product.description}
        </p>
        <ul className="list-disc pl-5 text-sm">
          <li>
            <strong>Gender:</strong>{" "}
            {product.gender}
          </li>
          <li>
            <strong>Case Size:</strong>{" "}
            {product.case_size}
          </li>
          <li>
            <strong>Case Material:</strong>{" "}
            {product.case_material}
          </li>
          <li>
            <strong>Crystal Type:</strong>{" "}
            {product.crystal_type}
          </li>
          <li>
            <strong>Water Resistance:</strong>{" "}
            {product.water_resistance}
          </li>
          <li>
            <strong>Movement:</strong>{" "}
            {product.movement}
          </li>
          <li>
            <strong>Strap:</strong>{" "}
            {product.strap_material}
          </li>
        </ul>
        <h3 className="mt-4 font-semibold">
          Key Features
        </h3>
        <ul className="list-disc pl-5 text-sm">
          {product.features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
