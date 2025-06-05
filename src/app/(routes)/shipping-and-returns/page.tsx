"use client";
import React from "react";
import { Truck, Undo2, Info } from "lucide-react";

// Simulated admin-managed data (replaceable JSON structure)
const returnPolicyData = {
  title: "Return Policy",
  content: `We want you to love your Monteluxe timepiece. If you are not fully satisfied, you may return your watch within 30 days of delivery.`,
  conditions: [
    "Item must be unused and in original packaging",
    "Original proof of purchase is required",
    "Return shipping is free for all orders within eligible countries",
  ],
  exclusions: [
    "Customized or engraved watches are non-returnable",
    "Items marked as final sale cannot be returned",
  ],
};

const shippingData = {
  title: "Shipping Information",
  regions: [
    {
      region: "India",
      estimatedTime: "2-4 business days",
      const: "Free",
    },
    {
      region: "Asia & Oceania",
      estimatedTime: "5–7 business days",
      cost: "Free",
    },

    {
      region: "Europe",
      estimatedTime: "8–10 business days",
      cost: "Free",
    },
    {
      region: "United States",
      estimatedTime: "8–10 business days",
      cost: "Free over $300, otherwise $25",
    },
  ],
  notes: `All orders are shipped fully insured with tracking and require a signature upon delivery. Processing time is typically 1–2 business days.`,
};

const ReturnsAndShipping = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-serif mb-10">
          Returns & Shipping
        </h1>

        {/* Return Policy Section */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <Undo2
              className="text-luxury-gold mr-2"
              size={28}
            />
            <h2 className="text-2xl font-serif">
              {returnPolicyData.title}
            </h2>
          </div>
          <p className="text-text-muted mb-4">
            {returnPolicyData.content}
          </p>

          <h3 className="font-semibold text-lg mb-2">
            Conditions:
          </h3>
          <ul className="list-disc pl-6 text-text-muted mb-4 space-y-1">
            {returnPolicyData.conditions.map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>

          <h3 className="font-semibold text-lg mb-2">
            Exclusions:
          </h3>
          <ul className="list-disc pl-6 text-text-muted space-y-1">
            {returnPolicyData.exclusions.map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </section>

        {/* Shipping Section */}
        <section>
          <div className="flex items-center mb-4">
            <Truck
              className="text-luxury-gold mr-2"
              size={28}
            />
            <h2 className="text-2xl font-serif">
              {shippingData.title}
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">
              Regions & Timelines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shippingData.regions.map(
                (region, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-4 shadow-sm"
                  >
                    <h4 className="text-lg font-serif mb-1">
                      {region.region}
                    </h4>
                    <p className="text-sm text-text-muted">
                      <strong>
                        Estimated Time:
                      </strong>{" "}
                      {region.estimatedTime}
                    </p>
                    <p className="text-sm text-text-muted">
                      <strong>Cost:</strong>{" "}
                      {region.cost}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Info
              className="text-luxury-gold mt-1"
              size={20}
            />
            <p className="text-sm text-text-muted">
              {shippingData.notes}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReturnsAndShipping;
