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
  async function handleUpdateStatus(id: string, newStatus: string) {
  const { error } = await supabase
   .from("dealers")
   .update({ status: newStatus })
   .eq("id", id);

  if (error) {
    alert("Error: " + error.message);
  } else {
    loadDealers();
  }
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
    <th className="p-4 text-left">Action</th> {/* YE NAYI LINE */}
  </tr>
</thead>
          <tbody>

  {loading ? (
    <tr>
      <td colSpan={7} className="text-center p-6">
        Loading...
      </td>
    </tr>
  ) : dealers.length === 0 ? (
    <tr>
      <td colSpan={7} className="text-center p-6">
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

       <td className="p-4">
  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
    dealer.status === 'Approved' ? 'bg-green-100 text-green-700' : 
    dealer.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
    'bg-yellow-100 text-yellow-700'
  }`}>
    {dealer.status}
  </span>
</td>

        <td className="p-4">
          {dealer.created_at?.split("T")[0]}
        </td>
        
<td className="p-4">
  {dealer.status === 'Pending'? (
    <div className="flex gap-2">
      <button
        onClick={() => handleUpdateStatus(dealer.id, 'Approved')}
        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
      >
        Approve
      </button>
      <button
        onClick={() => handleUpdateStatus(dealer.id, 'Rejected')}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
      >
        Reject
      </button>
    </div>
  ) : (
    <span className="text-gray-400 text-sm">-</span>
  )}
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
