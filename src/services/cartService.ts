import { CartProps } from "@/types";
import axios from "axios";
const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

export const addToCart = async (
  cartItem: CartProps,
  userId: string
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/cart/${userId}`,
      cartItem,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getToken(
            "authToken"
          )}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw new Error("Failed to add item to cart");
  }
};
