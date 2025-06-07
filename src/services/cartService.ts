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
          Authorization: `Bearer ${localStorage.getItem(
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

export const getCartItems = async (
  userId: string
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/cart/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "authToken"
          )}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching cart items:",
      error
    );
    throw new Error("Failed to fetch cart items");
  }
};

export const updateCart = async (
  userId: string,
  updatedCart: CartProps
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/cart/${userId}`,
      updatedCart,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "authToken"
          )}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw new Error("Failed to update cart");
  }
};

export const clearCart = async (
  userId: string
) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/cart/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "authToken"
          )}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw new Error("Failed to clear cart");
  }
};
