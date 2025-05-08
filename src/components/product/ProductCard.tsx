import { ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  product,
}: {
  product: ProductProps;
}) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="rounded-md p-4 hover:shadow-lg hover:scale-3d hover:scale-102 transition">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="mt-4 text-center">
          <h2 className="font-serif text-lg">
            {product.name}
          </h2>
          <p className="text-sm text-gray-500">
            {product.gender}
          </p>
          <p className="text-sm text-luxury-gold">
            {product.currency}{" "}
            {product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
