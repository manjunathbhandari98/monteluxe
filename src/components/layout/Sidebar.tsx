"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../custom/Button";

interface SidebarProps {
  setIsSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  setIsSidebarOpen,
}) => {
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

  const handleClose = () =>
    setIsSidebarOpen(false);

  return (
    <div className="flex flex-col h-[90%] text-white px-6 py-4 space-y-6">
      <nav className="flex flex-col space-y-8">
        {links.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            onClick={handleClose}
            className={`text-base font-semibold uppercase tracking-wide ${
              pathname.startsWith(item.link)
                ? "text-luxury-gold"
                : "text-white"
            } hover:text-[#d4af37] transition-colors duration-300`}
          >
            {item.option}
          </Link>
        ))}
      </nav>

      <div className="border-t border-white/20 pt-6 mt-auto space-y-4">
        <Link
          href="/book-appointment"
          onClick={handleClose}
        >
          <Button
            variant="primary"
            size="small"
            className="w-full text-black font-medium"
          >
            Book Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
