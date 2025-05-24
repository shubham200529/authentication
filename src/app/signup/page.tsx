"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/signup", user);
      toast.success("Signup successful!");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.username && user.email && user.password));
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-purple-600">
        <h1 className="text-4xl font-extrabold text-center text-purple-300 mb-8">
          Create Your Account
        </h1>

        <label htmlFor="username" className="block text-sm font-semibold mb-2 text-purple-300">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="w-full p-3 mb-6 rounded-xl bg-gray-800 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="Enter your username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          autoComplete="username"
        />

        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-purple-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-3 mb-6 rounded-xl bg-gray-800 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          autoComplete="email"
        />

        <label htmlFor="password" className="block text-sm font-semibold mb-2 text-purple-300">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-3 mb-8 rounded-xl bg-gray-800 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          autoComplete="new-password"
        />

        <button
          onClick={onSignup}
          disabled={buttonDisabled || loading}
          className={`w-full p-4 rounded-xl font-bold text-lg transition ${
            buttonDisabled || loading
              ? "bg-purple-800 cursor-not-allowed text-purple-400"
              : "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-purple-500/50"
          }`}
        >
          {loading ? "Signing up..." : buttonDisabled ? "Fill all fields" : "Signup"}
        </button>

        <p className="text-center mt-6 text-purple-400">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-300 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
