"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function DealersPage() {
  const [dealers, setDealers] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  loadDealers();
}, []);

async function loadDealers() {
  setLoading(true);

  const { data, error } = await supabase
    .from("dealers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    alert(error.message);
  } else {
    setDealers(data || []);
  }

  setLoading(false);
}
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-[#5A0F17]">
        Dealer Management
      </h1>

      <p className="text-gray-600 mt-2">
        Manage all registered dealers.
      </p>

      <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#5A0F1C] text-white">
  <tr>
    <th className="p-4 text-left">Dealer Name</th>
    <th className="p-4 text-left">Business Name</th>
    <th className="p-4 text-left">Mobile</th>
    <th className="p-4 text-left">City</th>
    <th className="p-4 text-left">Status</th>
    <th className="p-4 text-left">Registered On</th>
  </tr>
</thead>
          <tbody>

  {loading ? (
    <tr>
      <td colSpan={6} className="text-center p-6">
        Loading...
      </td>
    </tr>
  ) : dealers.length === 0 ? (
    <tr>
      <td colSpan={6} className="text-center p-6">
        No Dealers Found
      </td>
    </tr>
  ) : (
    dealers.map((dealer) => (
      <tr key={dealer.id} className="border-b">

        <td className="p-4">{dealer.dealer_name}</td>

        <td className="p-4">{dealer.business_name}</td>

        <td className="p-4">{dealer.mobile}</td>

        <td className="p-4">{dealer.city}</td>

        <td className="p-4">{dealer.status}</td>

        <td className="p-4">
          {dealer.created_at?.split("T")[0]}
        </td>

      </tr>
    ))
  )}

</tbody>

        </table>

      </div>

    </main>
  );
}