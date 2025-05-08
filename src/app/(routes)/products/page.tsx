import ProductGrid from "@/components/product/ProductList";
import { product } from "@/data/product";

const ProductsPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-serif mb-8">
        Our Watches
      </h1>
      <ProductGrid products={product} />
    </div>
  );
};

export default ProductsPage;
