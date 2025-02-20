"use client";
import { useState } from "react";
import Link from "next/link";

const books = [
  { title: "Introduction to AI", author: "John McCarthy", available: true },
  { title: "Data Structures & Algorithms", author: "Robert Lafore", available: false },
  { title: "Computer Networks", author: "Andrew S. Tanenbaum", available: true },
  { title: "Deep Learning", author: "Ian Goodfellow", available: false },
];

export default function Page() {
  const [search, setSearch] = useState("");
  
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Catalog</h1>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/tracking" className="text-gray-700 hover:text-blue-600 font-medium">Tracking</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </div>
      </nav>
      
      <section className="max-w-4xl mx-auto mt-6">
        <input
          type="text"
          placeholder="Search books..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBooks.length > 0 ? filteredBooks.map((book, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
              <p className={`mt-2 font-medium ${book.available ? "text-green-600" : "text-red-600"}`}>
                {book.available ? "Available" : "Checked Out"}
              </p>
            </div>
          )) : (
            <p className="text-gray-500 text-center col-span-2">No books found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
