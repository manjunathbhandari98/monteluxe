"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Simulated admin-managed JSON data
const faqData = [
  {
    question:
      "What is the warranty period for Monteluxe watches?",
    answer:
      "All Monteluxe timepieces come with a 2-year international warranty from the date of purchase, covering manufacturing defects.",
  },
  {
    question:
      "Can I return my watch if I don't like it?",
    answer:
      "Yes, we offer a 30-day return policy. The watch must be unused and returned in its original packaging. For full details, please visit our Returns page.",
  },
  {
    question:
      "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping times and costs may vary based on your region. Most regions qualify for free shipping.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is dispatched, you’ll receive a tracking link via email. You can also view tracking information in your Monteluxe account.",
  },
  {
    question: "Can I engrave my Monteluxe watch?",
    answer:
      "We currently do not offer engraving services, but our team is working on bringing personalized options soon.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<
    number | null
  >(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(
      index === openIndex ? null : index
    );
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-serif mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left flex items-center justify-between px-4 py-3 font-medium text-lg hover:bg-gray-900 transition"
                onClick={() => toggleIndex(idx)}
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === idx
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-text-muted text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
