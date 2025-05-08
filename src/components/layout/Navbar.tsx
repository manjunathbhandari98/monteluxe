"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      option: "Collections",
      link: "/collections",
    },
    { option: "Men", link: "/men" },
    { option: "Women", link: "/women" },
    {
      option: "Limited Editions",
      link: "/limited-edition",
    },
    { option: "About", link: "/about" },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {links.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className={`text-sm font-semibold uppercase tracking-wider
            ${
              pathname.startsWith(item.link)
                ? "text-luxury-gold"
                : "text-white"
            }
            hover:text-[#d4af37] transition-colors duration-300`}
        >
          {item.option}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
