import axios from "axios";
const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCategories = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/categories`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Failed to get Categories list"
    );
  }
};

export const getCategoryById = async (
  id: string
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/categories/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get Category");
  }
};
