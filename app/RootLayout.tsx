"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-r from-blue-100 to-indigo-200">
        {/* Navbar */}
        <nav className="bg-white shadow-lg p-4 flex justify-between items-center fixed top-0 w-full z-50 px-6">
          {/* LOGO SECTION */}
          <div className="p-2 rounded-md border border-blue-500">
            <Image src="/images/logo.png" alt="VIT Chennai Logo" width={120} height={50} priority />
          </div>

          <div className="space-x-6 flex">
            {["Home", "Catalog", "Login", "About", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-900 hover:text-blue-700 text-lg font-semibold transform transition-transform duration-300 ease-in-out"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-20 pb-10">{children}</div>
      </body>
    </html>
  );
}
