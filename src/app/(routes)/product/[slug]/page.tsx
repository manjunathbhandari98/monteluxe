// app/products/[slug]/page.tsx

import { notFound } from "next/navigation";
import { product as productData } from "@/data/product";
import { ProductProps } from "@/types";
import ProductDetails from "@/components/product/ProductDetails";

export async function generateStaticParams() {
  return productData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  // Simulate fetching product data, replace with real fetch if needed
  const selectedProduct:
    | ProductProps
    | undefined = productData.find(
    (p) => p.slug === params.slug
  );

  if (!selectedProduct) {
    return notFound();
  }

  return (
    <ProductDetails product={selectedProduct} />
  );
}
