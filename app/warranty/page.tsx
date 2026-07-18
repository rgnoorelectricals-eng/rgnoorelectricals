"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";
export default function WarrantyPage() {
  const [serialNumber, setSerialNumber] = useState("");
const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);
const handleVerify = async () => {
  setLoading(true);
  setResult("");
  setTimeout(async() => {
const { data, error } = await supabase
  .from("products")
  .select("*")
  .eq("serial_number", serialNumber.trim())
  .single();

console.log(data);
console.log(error);

if (data && !error) {
  setResult("success");
} else {
  setResult("failed");
}

setLoading(false);
      }, 1500);
};  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-[#5A0F1C] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Warranty Verification
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Verify the authenticity of your R.G. NOOR ELECTRICALS® product.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-[#5A0F1C] text-center">
            Verify Your Product
          </h2>
<p className="mt-5 text-center text-gray-600 leading-7">
  Enter the unique serial number printed on your R.G. NOOR ELECTRICALS®
  product or product box to verify its authenticity and warranty status.
</p>
          <input
            type="text"
            placeholder="Enter Serial Number"
            className="w-full mt-8 border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#5A0F1C]"
          value={serialNumber}
onChange={(e) => setSerialNumber(e.target.value)}
          />
<p className="mt-3 text-sm text-gray-500">
  Example: RGN9W-2607012345
</p>
<p className="mt-2 text-sm text-[#5A0F1C] font-medium">
  ℹ️ The serial number is printed on the product body or packaging.
</p>
          <button
  onClick={handleVerify}
  disabled={loading}
  className="w-full mt-6 bg-[#5A0F1C] text-white py-4 rounded-lg hover:bg-[#430010] transition disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? "Verifying..." : "Verify Product"}
</button>
          {result === "success" && (
  <div className="mt-8 rounded-2xl border-2 border-green-500 bg-green-50 p-8 shadow-lg">

    <h3 className="text-3xl font-bold text-green-700 text-center">
      🛡️ Verification Successful
    </h3>

    <p className="mt-6 text-xl font-semibold text-center text-green-600">
      ✅ Genuine R.G. NOOR ELECTRICALS® Product
    </p>

    <div className="mt-8 space-y-3 text-gray-700">

      <p><strong>💡 Product :</strong> 9W LED Bulb</p>

      <p><strong>📦 Model :</strong> RGN-9W</p>

      <p><strong>🔢 Serial Number :</strong> {serialNumber}</p>

      <p><strong>📅 Manufacturing :</strong> July 2026</p>

      <p><strong>🛡️ Warranty :</strong> 20 Months</p>

      <p><strong>📆 Warranty Status :</strong>
        <span className="text-green-700 font-bold">
          {" "}Active
        </span>
      </p>

    </div>

    <div className="mt-8 rounded-xl bg-white p-5 border">

      <p className="text-center text-sm text-gray-600">
        Verified by
      </p>

      <p className="text-center font-bold text-[#5A0F1C] mt-2">
        R.G. NOOR ELECTRICALS® Official Warranty System
      </p>

    </div>

  </div>
)}

{result === "failed" && (
  <div className="mt-8 rounded-xl border border-red-500 bg-red-50 p-6">
    <h3 className="text-2xl font-bold text-red-700">
      ❌ Verification Failed
    </h3>

    <p className="mt-3">
      This serial number could not be verified.
    </p>
  </div>
)}
<p className="mt-5 text-center text-sm text-gray-500">
  🔒 Your information is used only for product verification and warranty validation.
</p>
        </div>
      </section>
    </main>
  );
}