"use client";

import React, {
  useEffect,
  useState,
} from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash,
  X,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/custom/Button";
import Image from "next/image";
import { CartProps, UserProps } from "@/types";
import { getUser } from "@/services/authService";
import {
  getCartItems,
  updateCart,
} from "@/services/cartService";

const Cart: React.FC = () => {
  const [cartData, setCartData] =
    useState<CartProps | null>(null);
  const [user, setUser] =
    useState<UserProps | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
      console.log("Fetched User: ", fetchedUser);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchCartItems = async () => {
      const cart = await getCartItems(user.id);
      setCartData(cart);
      console.log("Fetched Cart Items: ", cart);
    };
    fetchCartItems();
  }, [user]);

  const handleIncrease = async (
    productId: string
  ) => {
    if (!cartData || !user) return;

    const updatedItems = cartData.items.map(
      (item) => {
        if (item.productId === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price:
              item.price +
              item.price / item.quantity, // unit price
          };
        }
        return item;
      }
    );

    const updatedCart = {
      ...cartData,
      items: updatedItems,
    };
    const response = await updateCart(
      user.id,
      updatedCart
    );
    setCartData(response);
  };

  const handleDecrease = async (
    productId: string
  ) => {
    if (!cartData || !user) return;

    const updatedItems = cartData.items
      .map((item) => {
        if (item.productId === productId) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price:
                item.price -
                item.price / item.quantity, // unit price
            };
          }
          return null; // remove if quantity becomes 0
        }
        return item;
      })
      .filter(Boolean) as CartProps["items"];

    const updatedCart = {
      ...cartData,
      items: updatedItems,
    };
    const response = await updateCart(
      user.id,
      updatedCart
    );
    setCartData(response);
  };

  const handleRemove = async (
    productId: string
  ) => {
    if (!cartData || !user) return;

    const updatedItems = cartData.items.filter(
      (item) => item.productId !== productId
    );

    const updatedCart = {
      ...cartData,
      items: updatedItems,
    };
    const response = await updateCart(
      user.id,
      updatedCart
    );
    setCartData(response);
  };

  const subtotal =
    cartData?.items?.reduce(
      (acc, item) =>
        acc + item.price * item.quantity,
      0
    ) || 0;

  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (!cartData) {
    return (
      <div className="pt-20 h-full w-full flex justify-center items-center m-auto text-center text-xl text-gray-600">
        Loading your cart...
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">
          Shopping Cart
        </h1>

        {cartData.items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartData?.items.map((item) => (
                <div
                  key={item.productId}
                  className="bg-background-darker rounded-lg p-4 sm:p-6 border border-luxury-gold/10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className="w-full sm:w-24 sm:h-24 relative rounded-lg overflow-hidden">
                      <Image
                        src={`/images/classic.jpg`}
                        alt={item.productName}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 w-full">
                      <Link
                        href={`/product/${item.productId}`}
                        className="font-serif text-lg hover:text-luxury-gold transition-colors block"
                      >
                        {item.productName}
                      </Link>
                      <p className="text-luxury-gold mt-2">
                        $
                        {item.price.toLocaleString()}
                      </p>

                      <div className="flex items-center space-x-4 mt-4">
                        <button
                          onClick={() =>
                            handleDecrease(
                              item.productId
                            )
                          }
                          className="p-1 text-text-muted hover:text-luxury-gold transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleIncrease(
                              item.productId
                            )
                          }
                          className="p-1 text-text-muted hover:text-luxury-gold transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="sm:self-start sm:mt-0 hidden sm:flex mt-4">
                      <button
                        onClick={() =>
                          handleRemove(
                            item.productId
                          )
                        }
                        className="p-2 text-text-muted hover:text-luxury-gold transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="sm:self-start sm:mt-0 flex sm:hidden mt-4">
                      <Button
                        onClick={() =>
                          handleRemove(
                            item.productId
                          )
                        }
                        variant="outline"
                        className="p-2 text-text-muted hover:text-luxury-gold transition-colors"
                      >
                        <h3 className="flex gap-1 items-center">
                          <Trash size={14} />
                          Remove
                        </h3>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/collections"
                className="inline-block text-luxury-gold hover:text-luxury-gold/80 transition-colors mt-6"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-background-darker rounded-lg p-6 border border-luxury-gold/10 sticky top-24">
                <h2 className="font-serif text-xl mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 pb-6 border-b border-text-muted/10">
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

                <div className="flex justify-between py-6 border-b border-text-muted/10">
                  <span className="font-serif text-lg">
                    Total
                  </span>
                  <span className="font-serif text-lg">
                    ${total.toLocaleString()}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <Link href="/checkout">
                    <Button
                      variant="primary"
                      size="large"
                      className="w-full text-black font-serif font-semibold"
                    >
                      CHECKOUT
                    </Button>
                  </Link>

                  <p className="text-text-muted mt-3 text-sm text-center">
                    Secure checkout powered by
                    Razorpay
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Your cart is empty
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
              Looks like you haven’t added
              anything to your cart yet. Start
              shopping and find something you
              love!
            </p>
            <Link href="/collection">
              <button className="mt-6 px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
