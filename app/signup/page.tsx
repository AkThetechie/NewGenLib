import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student",
    additionalInfo: "hosteller",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Signup successful!");
      router.push("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="Username" className="input" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" className="input" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" className="input" onChange={handleChange} required />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input" onChange={handleChange} required />
          
          <select name="userType" className="input" onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          
          {formData.userType === "student" ? (
            <select name="additionalInfo" className="input" onChange={handleChange}>
              <option value="hosteller">Hosteller</option>
              <option value="day-scholar">Day Scholar</option>
            </select>
          ) : (
            <select name="additionalInfo" className="input" onChange={handleChange}>
              <option value="professor">Professor</option>
              <option value="research-scholar">Research Scholar</option>
            </select>
          )}

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all mt-4">Sign Up</button>
        </form>
        <p className="text-center mt-4">Already have an account? <Link href="/login" className="text-blue-400">Login</Link></p>
      </div>
    </div>
  );
}
