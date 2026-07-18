"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SerialGeneratorPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(100);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const { data } = await supabase
      .from("product_master")
      .select("*")
      .eq("status", "Active");

    setProducts(data || []);
  }
async function generateSerials() {
  if (!productId) {
    alert("Please select a product");
    return;
  }

  const product = products.find(
    (p) => String(p.id) === String(productId)
  );

  const rows = [];

  for (let i = 1; i <= qty; i++) {
    const serial =
      `RGN${product.watt}W${Date.now()}${i}`;

    rows.push({
      product_id: product.id,
      serial_number: serial,
      status: "Unused",
    });
  }

  const { error } = await supabase
    .from("serial_numbers")
    .insert(rows);

  if (error) {
    alert(error.message);
    return;
  }

  alert(`${qty} Serial Numbers Generated Successfully`);
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-[#5A0F17] mb-8">
        Serial Number Generator
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg">

        <label className="block mb-2 font-semibold">
          Select Product
        </label>

        <select
          className="w-full border p-3 rounded mb-5"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        >
          <option value="">Choose Product</option>

          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.model_name}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-semibold">
          Quantity
        </label>

        <input
          type="number"
          className="w-full border p-3 rounded mb-6"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />

       <button
  onClick={generateSerials}
  className="bg-[#5A0F17] text-white px-6 py-3 rounded"
>
  Generate Serial Numbers
</button>

      </div>
    </div>
  );
}