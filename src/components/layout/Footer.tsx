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
    {
      name: "facebook",
      link: "/",
    },
    {
      name: "instagram",
      link: "/",
    },
    {
      name: "twitter",
      link: "/",
    },
    {
      name: "youtube",
      link: "/",
    },
  ];

  const quickLinks = [
    {
      lable: "Collections",
      link: "/collectons",
    },
    {
      lable: "Men's Watches",
      link: "/collectons",
    },
    {
      lable: "Women's Watches",
      link: "/collectons",
    },
    {
      lable: "New Arrivals",
      link: "/collectons",
    },
    {
      lable: "Gift Cards",
      link: "/collectons",
    },
  ];

  const information = [
    {
      lable: "About Us",
      link: "/collectons",
    },
    {
      lable: "Craftsmanship",
      link: "/collectons",
    },
    {
      lable: "Warranty & Service",
      link: "/collectons",
    },
    {
      lable: "Shipping & Returns",
      link: "/collectons",
    },
    {
      lable: "FAQs",
      link: "/collectons",
    },
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
      <div className="border-t border-luxury-gold pt-20 pb-10 mx-10">
        {/* main */}
        <div className="flex justify-around">
          {/* logo and desc */}
          <div className="flex flex-col gap-10 w-2/5">
            {/* logo */}
            <MonteluxeLogo />
            <div className="desc font-serif text-lg">
              Crafting exceptional timepieces that
              blend traditional watchmaking with
              modern innovation since 1898.
            </div>

            {/* social links */}
            <div className="flex gap-8 [&>img]:w-4 [&>img]:h-4">
              {socialLinks.map((link, index) => (
                <img
                  key={index}
                  src={`/images/icons/${link.name}.png`}
                  alt={link.name}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-1/5">
            <h1 className="font-serif text-xl mb-10">
              QuickLinks
            </h1>

            <div className="flex flex-col gap-5">
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className="text-sm font-semibold"
                >
                  <Link href={link.link}>
                    {link.lable}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col  w-1/5">
            <h1 className="font-serif text-xl mb-10">
              Information
            </h1>

            <div className="flex flex-col gap-5">
              {information.map((link, index) => (
                <div
                  key={index}
                  className="text-sm font-semibold"
                >
                  <Link href={link.link}>
                    {link.lable}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Contact Us */}
          <div className="flex flex-col  w-1/5">
            <h1 className="font-serif text-xl mb-10">
              Contact Us
            </h1>

            <div className="flex flex-col gap-5">
              {contactUs.map((link, index) => (
                <div
                  key={index}
                  className="text-sm flex items-center gap-4 font-semibold"
                >
                  <div className="icon text-luxury-gold">
                    {link.icon}
                  </div>

                  {link.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* border */}
        <div className="border-b py-8"></div>
        {/* copyright */}

        <div className="flex text-sm font-serif justify-between pt-6">
          <p>
            © 2025 Monteluxe. All rights reserved.
          </p>
          <div className="flex justify-between space-x-7">
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookie Policy </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
