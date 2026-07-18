"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      setError(error.message);
      return;
    }

    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-[#5A0F17]">
          R.G. NOOR ELECTRICALS
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Admin Login
        </p>
        {error && (
          <div className="mb-4 rounded-lg bg-red-100 border border-red-300 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-[#5A0F17]"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 outline-none focus:border-[#5A0F17]"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#5A0F17] text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}