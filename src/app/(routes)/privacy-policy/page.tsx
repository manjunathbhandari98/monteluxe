"use client";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-8">
          Privacy Policy
        </h1>

        <p className="text-sm text-muted mb-6">
          Last updated: March 1, 2025
        </p>

        <div className="space-y-6 text-base text-gray-100 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Introduction
            </h2>
            <p>
              At Monteluxe, your privacy is a top
              priority. This policy explains how
              we collect, use, and protect your
              personal information when you visit
              or make a purchase from our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Personal details such as name,
                email address, and phone number.
              </li>
              <li>
                Billing and shipping addresses.
              </li>
              <li>
                Payment information (processed
                securely via third-party
                gateways).
              </li>
              <li>
                Device and usage data (e.g., IP
                address, browser type, visit
                duration).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Process and deliver your orders.
              </li>
              <li>Provide customer support.</li>
              <li>
                Send important updates and
                promotional offers (you can opt
                out at any time).
              </li>
              <li>
                Improve website performance and
                personalization.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Data Sharing
            </h2>
            <p>
              We never sell your data. However, we
              may share information with
              third-party service providers for
              payment processing, delivery
              services, or analytics — only when
              necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Cookies
            </h2>
            <p>
              Monteluxe uses cookies and similar
              technologies to enhance user
              experience. You can control cookie
              preferences in your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Security
            </h2>
            <p>
              We implement strict security
              measures to protect your data,
              including SSL encryption and secure
              payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Your Rights
            </h2>
            <p>
              You have the right to access,
              correct, or delete your data.
              Contact us at{" "}
              <span className="text-primary font-medium">
                support@monteluxe.com
              </span>{" "}
              for any privacy-related inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this policy from time
              to time. Changes will be posted on
              this page with a revised effective
              date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions regarding
              this privacy policy, please contact
              us at{" "}
              <span className="text-primary font-medium">
                privacy@monteluxe.com
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
