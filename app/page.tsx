"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">VIT Chennai Library</h1>
        <div className="space-x-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/catalog" className="text-gray-700 hover:text-blue-600 font-medium">Catalog</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/tracking" className="text-gray-700 hover:text-blue-600 font-medium">Tracking</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h2 className="text-4xl font-bold text-gray-800" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>Welcome to VIT Chennai Library</motion.h2>
        <p className="text-gray-600 mt-4 text-lg">Explore a vast collection of books, research papers, and digital resources.</p>
        <div className="mt-6">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/catalog" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Browse Catalog
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
        <motion.div className="bg-white p-6 shadow-md rounded-lg text-center" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold text-blue-600">Biometric Tracking</h3>
          <p className="text-gray-600 mt-2">Track student & faculty movements seamlessly.</p>
        </motion.div>
        <motion.div className="bg-white p-6 shadow-md rounded-lg text-center" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold text-blue-600">Facial Recognition</h3>
          <p className="text-gray-600 mt-2">A modern approach to secure and seamless check-ins.</p>
        </motion.div>
        <motion.div className="bg-white p-6 shadow-md rounded-lg text-center" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold text-blue-600">Real-Time Reports</h3>
          <p className="text-gray-600 mt-2">Get instant insights into library activity.</p>
        </motion.div>
      </section>
    </motion.main>
  );
}
