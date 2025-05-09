import React from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  X,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/custom/Button";
import Image from "next/image";

const Cart: React.FC = () => {
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
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">
          Shopping Cart
        </h1>

        {cartItems.length > 1 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-background-darker rounded-lg p-6 border border-luxury-gold/10"
                >
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <Link
                        href={`/product/${item.id}`}
                        className="font-serif text-lg hover:text-luxury-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-text-muted text-sm">
                        Ref: {item.reference}
                      </p>
                      <p className="text-text-muted text-sm">
                        Size: {item.size}
                      </p>
                      <p className="text-luxury-gold mt-2">
                        $
                        {item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4">
                      <button className="p-1 text-text-muted hover:text-luxury-gold transition-colors">
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">
                        {item.quantity}
                      </span>
                      <button className="p-1 text-text-muted hover:text-luxury-gold transition-colors">
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button className="p-2 text-text-muted hover:text-luxury-gold transition-colors">
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
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
