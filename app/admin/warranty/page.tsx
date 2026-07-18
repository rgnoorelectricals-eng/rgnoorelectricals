"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
export default function WarrantyPage() {
    const [serial, setSerial] = useState("");
const [customerName, setCustomerName] = useState("");
const [customerMobile, setCustomerMobile] = useState("");
const [purchaseDate, setPurchaseDate] = useState("");
async function activateWarranty() {
  const { data: serialData, error: serialError } = await supabase
    .from("serial_numbers")
    .select("*")
    .eq("serial_number", serial)
    .single();

  if (serialError || !serialData) {
    alert("Invalid Serial Number");
    return;
  }

  if (serialData.status === "Used") {
    alert("Warranty already activated");
    return;
  }

  const { error: warrantyError } = await supabase
    .from("warranty")
    .insert({
      serial_no: serial,
      model_name: "",
      customer_name: customerName,
      customer_phone: customerMobile,
      purchase_date: purchaseDate,
      status: "Active",
    });

  if (warrantyError) {
    alert(warrantyError.message);
    return;
  }

  await supabase
    .from("serial_numbers")
    .update({ status: "Used" })
    .eq("serial_number", serial);

  alert("Warranty Activated Successfully");
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-[#5A0F17]">
        Warranty Activation
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8 max-w-xl">

       <input
  type="text"
  placeholder="Serial Number"
  value={serial}
  onChange={(e) => setSerial(e.target.value)}
  className="w-full border p-3 rounded mb-4"
/>

       <input
  type="text"
  placeholder="Customer Name"
  value={customerName}
  onChange={(e) => setCustomerName(e.target.value)}
  className="w-full border p-3 rounded mb-4"
/>

        <input
  type="text"
  placeholder="Customer Mobile"
  value={customerMobile}
  onChange={(e) => setCustomerMobile(e.target.value)}
  className="w-full border p-3 rounded mb-4"
/>

        <input
  type="date"
  value={purchaseDate}
  onChange={(e) => setPurchaseDate(e.target.value)}
  className="w-full border p-3 rounded mb-6"
/>

       <button
  onClick={activateWarranty}
  className="bg-[#5A0F17] text-white px-6 py-3 rounded w-full"
>
  Activate Warranty
</button>

      </div>
    </div>
  );
}