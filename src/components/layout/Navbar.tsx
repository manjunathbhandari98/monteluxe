import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      {[
        "Collections",
        "Men",
        "Women",
        "Limited Edition",
        "About",
      ].map((item) => (
        <Link
          key={item}
          href={`#${item
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="text-sm font-medium uppercase tracking-wider hover:text-luxury-gold transition-colors duration-300"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
