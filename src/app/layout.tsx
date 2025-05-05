// src/app/layout.tsx

import Header from "@/components/layout/Header";
import "./globals.css";
import {
  Libre_Baskerville,
  Work_Sans,
} from "next/font/google";

// Load fonts with desired weights/styles
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"], // add '400' for normal, '700' for bold
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  title: "Monteluxe",
  description: "Luxury Watch Ecommerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${workSans.variable}`}
    >
      <Header />
      <body>{children}</body>
    </html>
  );
}
