"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/custom/Button";
import Image from "next/image";

const Checkout: React.FC = () => {
  const [step, setStep] = useState<
    "details" | "payment"
  >("details");

  const cartItems = [
    {
      id: 1,
      name: "Royal Chronograph Masterpiece",
      reference: "RCM-2024-001",
      price: 12500,
      size: "41mm",
      image:
        "https://images.pexels.com/photos/9978681/pexels-photo-9978681.jpeg?auto=compress&cs=tinysrgb&w=800",
      quantity: 1,
    },
    {
      id: 2,
      name: "Celestial Automatic",
      reference: "CA-2024-002",
      price: 8950,
      size: "39mm",
      image:
        "https://images.pexels.com/photos/1034065/pexels-photo-1034065.jpeg?auto=compress&cs=tinysrgb&w=800",
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <Link
          href="/cart"
          className="inline-flex items-center text-luxury-gold hover:text-luxury-gold/80 transition-colors mb-8"
        >
          <ArrowLeft
            size={16}
            className="mr-2"
          />{" "}
          Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div
                className={`flex items-center ${
                  step === "details"
                    ? "text-luxury-gold"
                    : "text-text-muted"
                }`}
              >
                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2">
                  1
                </div>
                Details
              </div>
              <div
                className={`w-20 h-0.5 mx-4 ${
                  step === "payment"
                    ? "bg-luxury-gold"
                    : "bg-text-muted/30"
                }`}
              ></div>
              <div
                className={`flex items-center ${
                  step === "payment"
                    ? "text-luxury-gold"
                    : "text-text-muted"
                }`}
              >
                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2">
                  2
                </div>
                Payment
              </div>
            </div>

            {step === "details" ? (
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-background-darker rounded-lg p-6 border border-luxury-gold/10">
                  <h2 className="font-serif text-xl mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-background-darker rounded-lg p-6 border border-luxury-gold/10">
                  <h2 className="font-serif text-xl mb-6">
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">
                        Apartment, suite, etc.
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">
                        Country
                      </label>
                      <select className="w-full [&>option]:bg-black/90 border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold">
                        <option>India</option>
                        <option>Canada</option>
                        <option>
                          United Kingdom
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="large"
                  fullWidth
                  onClick={() =>
                    setStep("payment")
                  }
                  className="text-black font-semibold"
                >
                  Continue to Payment
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Payment Information */}
                <div className="bg-background-darker rounded-lg p-6 border border-luxury-gold/10">
                  <h2 className="font-serif text-xl mb-6">
                    Payment Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold pl-10"
                        />
                        <CreditCard
                          size={16}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-2">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full bg-background-dark border border-text-muted/30 rounded px-4 py-2 focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-luxury-gold/5 rounded-lg p-4 flex items-start space-x-4">
                  <Lock
                    size={20}
                    className="text-luxury-gold flex-shrink-0 mt-1"
                  />
                  <p className="text-sm text-text-muted">
                    Your payment information is
                    encrypted and secure. We use
                    industry-standard SSL/TLS
                    encryption href protect your
                    data.
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="large"
                  fullWidth
                  className="text-black font-semibold"
                >
                  Complete Purchase
                </Button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-background-darker rounded-lg p-6 border border-luxury-gold/10 sticky top-24">
              <h2 className="font-serif text-xl mb-6">
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 pb-6 border-b border-text-muted/10">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        {item.name}
                      </p>
                      <p className="text-text-muted text-sm">
                        Size: {item.size}
                      </p>
                      <p className="text-luxury-gold">
                        $
                        {item.price.toLocaleString()}
                      </p>
                    </div>
                    <span className="text-text-muted">
                      ×{item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-4 py-6 border-b border-text-muted/10">
                <div className="flex justify-between">
                  <span className="text-text-muted">
                    Subtotal
                  </span>
                  <span>
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">
                    Shipping
                  </span>
                  <span className="text-luxury-gold">
                    Free
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">
                    Estimated Tax
                  </span>
                  <span>
                    ${tax.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <span className="font-serif text-lg">
                  Total
                </span>
                <span className="font-serif text-lg">
                  ${total.toLocaleString()}
                </span>
              </div>

              {/* Security Badges */}
              <div className="mt-8 pt-6 border-t border-text-muted/10">
                <div className="flex items-center justify-center space-x-4">
                  <Shield
                    size={24}
                    className="text-luxury-gold"
                  />
                  <span className="text-text-muted text-sm">
                    Secure Checkout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
