"use client";
import AuthLayout from "@/components/auth/AuthLayout";
import Notification from "@/components/custom/Notification";
import { loginUser } from "@/services/authService";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [notification, setNotification] =
    useState<{
      title: string;
      message: string;
      mode: "success" | "error";
    } | null>(null);
  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      setLoader(true);
      const data = {
        email,
        password,
      };
      const { token, user } = await loginUser(
        data
      );
      localStorage.setItem("authToken", token);
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
      setNotification({
        title: "Success",
        message:
          "You have logged in successfully!",
        mode: "success",
      });
      setLoader(false);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      setNotification({
        title: "Error",
        message:
          "Something went wrong during login.",
        mode: "error",
      });
      setLoader(false);
    }
  };

  return (
    <AuthLayout>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          mode={notification.mode}
          onClose={() => setNotification(null)}
        />
      )}
      <h1 className="text-2xl font-serif text-center mb-6">
        Sign In to Your Account
      </h1>
      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-luxury-gold"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-luxury-gold"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer py-2 text-center bg-luxury-gold text-black font-semibold rounded-lg hover:bg-luxury-gold/90 transition"
        >
          {loader ? (
            <Loader2
              size={24}
              className="animate-spin text-blue-500 mx-auto"
            />
          ) : (
            "Login"
          )}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-text-muted">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-luxury-gold hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Page;
