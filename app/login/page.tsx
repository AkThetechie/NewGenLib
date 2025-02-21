"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    const data = await res.json();
    if (res.ok) {
      alert("Login successful");
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 text-white rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 text-white rounded"
        />
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
