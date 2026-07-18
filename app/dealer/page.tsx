"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DealerRegistration() {
  const [dealerName, setDealerName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  async function handleRegister() {
    const { error } = await supabase.from("dealers").insert([
      {
        dealer_name: dealerName,
        business_name: businessName,
        mobile,
        email,
        city,
        address,
        status: "Pending",
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Dealer Registered Successfully");

    setDealerName("");
    setBusinessName("");
    setMobile("");
    setEmail("");
    setCity("");
    setAddress("");
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center text-[#5A0F17]">
          Dealer Registration
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          R.G. NOOR ELECTRICALS
        </p>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Dealer Name"
            value={dealerName}
            onChange={(e) => setDealerName(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Business Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded-lg p-3 h-28"
          />

          <button
            onClick={handleRegister}
            className="w-full bg-[#5A0F17] text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Register Dealer
          </button>

        </div>

      </div>
    </main>
  );
}