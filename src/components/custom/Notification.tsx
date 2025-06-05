// components/ui/Notification.tsx
"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  mode: "success" | "error";
  onClose: () => void;
};

const Notification: React.FC<
  NotificationProps
> = ({ title, message, mode, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const borderColor =
    mode === "success"
      ? "border-l-green-500"
      : "border-l-red-500";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 100, y: 50 }}
        transition={{ duration: 0.4 }}
        className={`fixed bottom-5 right-5 w-[320px] sm:w-[360px] bg-background border-l-4 ${borderColor} shadow-xl rounded-lg p-4 z-50`}
      >
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-base mb-1">
              {title}
            </h4>
            <p className="text-sm text-text-muted">
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-600 transition"
          >
            <X size={18} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
