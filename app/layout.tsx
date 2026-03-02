import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPorto | 30 Projects Portfolio",
  description: "Showcasing my 30 programming projects built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-50 text-zinc-900 antialiased`}>
        <CustomCursor />
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}