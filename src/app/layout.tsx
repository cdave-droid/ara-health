import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedNavbar } from "@/components/animated-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ara Health - Patient-First Healthcare AI",
  description:
    "Solving values misalignment in healthcare with patient-first AI platform dedicated to improving patient experience and outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-source-sans">
        <AnimatedNavbar />
        {children}
      </body>
    </html>
  );
}
