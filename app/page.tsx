"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Hero Section */}
      <section className="w-full flex justify-center items-center min-h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/library-bg.jpg')" }}>
        <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-90 p-10 rounded-xl shadow-lg text-center max-w-3xl">
          <motion.h2 className="text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Welcome to VIT Chennai Library
          </motion.h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">Your gateway to knowledge and endless learning resources.</p>
          <motion.div whileHover={{ scale: 1.1 }} className="mt-8">
            <Link href="/catalog" className="bg-blue-700 text-white px-10 py-4 rounded-lg shadow-lg hover:bg-blue-800 transition text-lg font-semibold">
              Browse Catalog
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
