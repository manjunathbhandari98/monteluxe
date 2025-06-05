/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import MonteluxeLogo from "../logo/MonteluxeLogo";
import {
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "facebook", link: "/" },
    { name: "instagram", link: "/" },
    { name: "twitter", link: "/" },
    { name: "youtube", link: "/" },
  ];

  const quickLinks = [
    { lable: "Collections", link: "/collectons" },
    {
      lable: "Men's Watches",
      link: "/men",
    },
    {
      lable: "Women's Watches",
      link: "/women",
    },
    {
      lable: "New Arrivals",
      link: "/new-arrivals",
    },
  ];

  const information = [
    { lable: "About Us", link: "/about" },
    {
      lable: "Craftsmanship",
      link: "/craftsmanship",
    },
    {
      lable: "Warranty & Service",
      link: "/waranty-services",
    },
    {
      lable: "Shipping & Returns",
      link: "/shipping-and-returns",
    },
    { lable: "FAQs", link: "/faqs" },
    {
      lable: "Privacy Policy",
      link: "/privacy-policy",
    },
  ];

  const contactUs = [
    {
      icon: <MapPin />,
      label:
        "Starway Street, Hampkar, Ansyor - KH 8765234",
    },
    {
      icon: <PhoneCall />,
      label: "+1 (555) 123-4567",
    },
    {
      icon: <Mail />,
      label: "contact@monteluxe.com",
    },
  ];

  return (
    <div className="mt-4">
      <div className="border-t border-luxury-gold pt-20 pb-10 px-4 md:px-10">
        {/* main */}
        <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-6">
          {/* Logo and description */}
          <div className="flex flex-col gap-6 md:w-2/5 w-full">
            <MonteluxeLogo />
            <p className="font-serif text-lg">
              Crafting exceptional timepieces that
              blend traditional watchmaking with
              modern innovation since 1898.
            </p>

            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                >
                  <img
                    src={`/images/icons/${link.name}.png`}
                    alt={link.name}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* QuickLinks */}
          <div className="flex flex-col md:w-1/5 w-full">
            <h1 className="font-serif text-xl mb-6">
              QuickLinks
            </h1>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="text-sm font-semibold"
                >
                  {link.lable}
                </Link>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col md:w-1/5 w-full">
            <h1 className="font-serif text-xl mb-6">
              Information
            </h1>
            <div className="flex flex-col gap-4">
              {information.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="text-sm font-semibold"
                >
                  {link.lable}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col md:w-1/5 w-full">
            <h1 className="font-serif text-xl mb-6">
              Contact Us
            </h1>
            <div className="flex flex-col gap-4">
              {contactUs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm font-semibold"
                >
                  <div className="text-luxury-gold mt-1">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b py-8 mt-10"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-serif pt-6 gap-4 text-center md:text-left">
          <p>
            © 2025 Monteluxe. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
