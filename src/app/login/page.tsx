"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/login", user);

      toast.success("Login successful");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-purple-600">
        <h1 className="text-4xl font-extrabold text-center text-purple-300 mb-8">
          {loading ? "Processing..." : "Login"}
        </h1>

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
          autoComplete="current-password"
        />

        <button
          onClick={onLogin}
          disabled={buttonDisabled || loading}
          className={`w-full p-4 rounded-xl font-bold text-lg transition ${
            buttonDisabled || loading
              ? "bg-purple-800 cursor-not-allowed text-purple-400"
              : "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-purple-500/50"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-6 text-purple-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-purple-300 font-semibold hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
