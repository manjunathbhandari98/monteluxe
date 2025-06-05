"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

export default function RouteLoader() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  //   const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  //   const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const hourDeg =
    ((hours % 12) / 12) * 360 + minuteDeg / 12;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-lg flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-28 h-28 rounded-full border-[6px] border-yellow-500 bg-gradient-to-br from-black via-zinc-900 to-gray-800 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center">
          {/* Tick Marks */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-3 bg-yellow-500 origin-bottom"
              style={{
                transform: `rotate(${
                  i * 30
                }deg) translateY(-94px)`,
              }}
            />
          ))}
          {/* Hour Hand */}
          <div
            className="absolute w-[3px] h-10 bg-yellow-400 origin-bottom rounded-full"
            style={{
              transform: `translate(-50%, -50%) rotate(${hourDeg}deg)`,
            }}
          />
          {/* Minute Hand */}
          <div
            className="absolute w-[2px] h-14 bg-white origin-bottom rounded-full"
            style={{
              transform: `translate(-50%, -50%) rotate(${minuteDeg}deg)`,
            }}
          />

          {/* Center Sun/Dot */}
          <div className="absolute w-3 h-3 bg-yellow-500 rounded-full border-[1.5px] border-white shadow-lg z-10" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
