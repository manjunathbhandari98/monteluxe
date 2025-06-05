"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  LogOut,
  User,
  Settings,
  Package,
} from "lucide-react";
import Image from "next/image";

interface ProfileMenuProps {
  onLogout: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  onLogout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (
    event: MouseEvent
  ) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(
        event.target as Node
      )
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      className="relative"
      ref={menuRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center space-x-2 hover:text-luxury-gold transition-colors"
      >
        <Image
          src="/images/icons/User.png"
          alt="User Profile"
          width={32}
          height={32}
          priority
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50 text-sm text-black">
          <ul className="divide-y divide-gray-200">
            <li>
              <Link
                href="/profile"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <User
                  size={16}
                  className="mr-2"
                />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <Package
                  size={16}
                  className="mr-2"
                />
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <Settings
                  size={16}
                  className="mr-2"
                />
                Settings
              </Link>
            </li>
            <li>
              <button
                className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500"
                onClick={() => {
                  setIsOpen(false);
                  onLogout();
                }}
              >
                <LogOut
                  size={16}
                  className="mr-2"
                />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
