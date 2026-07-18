"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VerifyPage() {
  const [serial, setSerial] = useState("");
const [result, setResult] = useState<any>(null);
async function verifyWarranty() {
  const { data, error } = await supabase
    .from("warranty")
    .select("*")
    .eq("serial_no", serial)
    .single();

  if (error || !data) {
    alert("Warranty Not Found");
    return;
  }

  setResult(data);
}
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-[#5A0F17] mb-6 text-center">
          Warranty Verification
        </h1>

        <input
          type="text"
          placeholder="Enter Serial Number"
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
          className="w-full border p-3 rounded mb-5"
        />

        <button
  onClick={verifyWarranty}
  className="bg-[#5A0F17] text-white w-full py-3 rounded"
>
  Verify Warranty
</button>
{result && (
  <div className="mt-6 border rounded-lg p-4 bg-green-50">

    <h2 className="text-xl font-bold text-green-700 mb-4">
      Warranty Verified ✅
    </h2>

    <p><b>Serial Number:</b> {result.serial_no}</p>

    <p><b>Customer Name:</b> {result.customer_name}</p>

    <p><b>Mobile:</b> {result.customer_phone}</p>

    <p><b>Purchase Date:</b> {result.purchase_date}</p>

    <p><b>Status:</b> {result.status}</p>

  </div>
)}
      </div>

    </div>
  );
}