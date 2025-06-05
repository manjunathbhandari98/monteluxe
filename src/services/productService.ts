import axios from "axios";
const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;
const AUTH_TOKEN =
  process.env.NEXT_PUBLIC_API_KEY;

export const addProduct = async (
  product: FormData
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/products`,
      product,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product", error);
    throw new Error("Failed to add product.");
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error gettings products",
      error
    );
    throw new Error("Failed to get products.");
  }
};

// productService.ts
export const getProductBySlug = async (
  slug: string
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/slug/${slug}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Failed to get Product by slug"
    );
  }
};
