"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center fixed top-0 w-full z-50">
      {/* LOGO SECTION */}
      <div className="flex items-center">
        <Image 
          src="/images/logo.png" 
          alt="VIT Chennai Logo" 
          width={160} 
          height={60} 
          priority 
          className="h-auto w-auto"
        />
      </div>

      {/* NAVIGATION LINKS */}
      <div className="space-x-6 flex">
        {["Home", "Catalog", "Tracking", "About", "Contact"].map((item) => (
          <motion.div key={item} whileHover={{ scale: 1.1 }}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-800 hover:text-blue-700 text-lg font-semibold transition-all"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
