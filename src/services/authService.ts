import { UserProps } from "@/types";
import axios from "axios";
const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

export const registerUser = async (
  userData: UserProps
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/register`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error
    );
    throw new Error("Failed to register user");
  }
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error logging in user:",
      error
    );
    throw new Error("Failed to login user");
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/me`,
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
    console.error("Error getting User: ", error);
    throw new Error("Failed to fetch User");
  }
};
