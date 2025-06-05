"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import RouteLoader from "./ClockLoader";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(
      () => setLoading(false),
      1000
    ); // simulate loading
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <RouteLoader />}
      {children}
    </>
  );
}
