"use client";
import React from "react";
import {
  ShieldCheck,
  Wrench,
  RefreshCcw,
  Truck,
} from "lucide-react";

const WarrantyAndServices = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-serif mb-10">
          Warranty & Services
        </h1>

        {/* Warranty Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: (
                <ShieldCheck
                  className="text-luxury-gold"
                  size={32}
                />
              ),
              title:
                "5-Year International Warranty",
              desc: "All Monteluxe watches are covered against manufacturing defects for 5 years from the date of purchase.",
            },
            {
              icon: (
                <Wrench
                  className="text-luxury-gold"
                  size={32}
                />
              ),
              title: "Authorized Servicing",
              desc: "Repairs and servicing are handled exclusively by our trained horologists to ensure precision and authenticity.",
            },
            {
              icon: (
                <RefreshCcw
                  className="text-luxury-gold"
                  size={32}
                />
              ),
              title: "30-Day Hassle-Free Returns",
              desc: "Changed your mind? Return the watch in original condition within 30 days for a full refund or exchange.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4"
            >
              {item.icon}
              <div>
                <h3 className="font-serif text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-text-muted">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {/* Warranty Coverage */}
          <section>
            <h2 className="text-2xl font-serif mb-4">
              What&apos;s Covered
            </h2>
            <p className="text-text-muted mb-4">
              Monteluxe offers an extensive 5-year
              international warranty on all
              timepieces. This warranty covers
              defects in materials and workmanship
              under normal use.
            </p>
            <ul className="list-disc pl-6 text-text-muted space-y-2">
              <li>
                Manufacturing faults in the
                movement, hands, and dial.
              </li>
              <li>
                Battery replacement within the
                first 2 years.
              </li>
              <li>
                Water resistance failures (if
                rated and tested).
              </li>
            </ul>
          </section>

          {/* Exclusions */}
          <section>
            <h2 className="text-2xl font-serif mb-4">
              What&apos;s Not Covered
            </h2>
            <p className="text-text-muted mb-4">
              The warranty does not cover damage
              resulting from misuse, accidents, or
              unauthorized repairs.
            </p>
            <ul className="list-disc pl-6 text-text-muted space-y-2">
              <li>
                Normal wear and tear (e.g.,
                scratches on case or strap).
              </li>
              <li>
                Damage due to water infiltration
                if watch is not water-resistant.
              </li>
              <li>
                Modifications or servicing by
                third-party providers.
              </li>
            </ul>
          </section>

          {/* Servicing & Care */}
          <section>
            <h2 className="text-2xl font-serif mb-4">
              Servicing & Care
            </h2>
            <p className="text-text-muted mb-4">
              To maintain the integrity and
              performance of your Monteluxe
              timepiece, we recommend servicing
              every 3–5 years. All servicing is
              conducted at our
              Monteluxe-authorized service centers
              worldwide.
            </p>
            <ul className="list-disc pl-6 text-text-muted space-y-2">
              <li>
                Professional cleaning and
                lubrication of mechanical
                movements.
              </li>
              <li>
                Pressure testing and resealing for
                water-resistant models.
              </li>
              <li>
                Genuine Monteluxe parts
                replacement only.
              </li>
            </ul>
          </section>

          {/* Shipping & Returns */}
          <section>
            <h2 className="text-2xl font-serif mb-4">
              Shipping & Returns
            </h2>
            <div className="flex items-start space-x-4">
              <Truck
                className="text-luxury-gold"
                size={28}
              />
              <div>
                <p className="text-text-muted">
                  We offer free worldwide shipping
                  and returns. All watches are
                  shipped fully insured and
                  require signature on delivery.
                  Return requests must be
                  initiated within 30 days from
                  receipt of the item.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WarrantyAndServices;
