// app/products/[slug]/page.tsx

import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getProducts,
} from "@/services/productService";
import { getCategoryById } from "@/services/categoryService";
import { ProductProps } from "@/types";
import ProductDetails from "@/components/product/ProductDetails";

// ✅ Optional but recommended for static site generation (SSG)
export async function generateStaticParams() {
  const allProducts = await getProducts();
  return allProducts.map((p: ProductProps) => ({
    slug: p.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("Slug from params:", params.slug);

  const product = await getProductBySlug(
    params.slug
  );

  if (!product) {
    return notFound();
  }

  let categoryName: string | undefined;

  // ✅ Fetch and safely attach category name
  if (product.categoryId) {
    try {
      const category = await getCategoryById(
        product.categoryId
      );
      categoryName = category?.name;
    } catch (error) {
      console.error(
        "Error fetching category name:",
        error
      );
    }
  }

  return (
    <ProductDetails
      product={{
        ...product,
        categoryName, // attach safely here
      }}
    />
  );
}
