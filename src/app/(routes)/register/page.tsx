"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import { registerUser } from "@/services/authService";
import Notification from "@/components/custom/Notification";
import { Loader2 } from "lucide-react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "CUSTOMER",
  });
  const [loader, setLoader] = useState(false);
  const [notification, setNotification] =
    useState<{
      title: string;
      message: string;
      mode: "success" | "error";
    } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    setLoader(true);
    try {
      await registerUser(form);
      setNotification({
        title: "Success",
        message:
          "You have registered successfully!",
        mode: "success",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "CUSTOMER",
      });
    } catch (error) {
      setNotification({
        title: "Error",
        message:
          "Something went wrong during registration.",
        mode: "error",
      });
      console.error(error);
    } finally {
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
        Create an Account
      </h1>
      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-luxury-gold"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-luxury-gold"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
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
            name="password"
            value={form.password}
            onChange={handleChange}
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
            "Register"
          )}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-text-muted">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-luxury-gold hover:underline"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
