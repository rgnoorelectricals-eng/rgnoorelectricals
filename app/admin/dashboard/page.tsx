"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const router = useRouter();
  const [dealers, setDealers] = useState<any[]>([]);
const [products, setProducts] = useState<any[]>([]);
const [serialCount, setSerialCount] = useState(0);
const [warrantyCount, setWarrantyCount] = useState(0);

useEffect(() => {
  const checkLogin = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/admin/login");
      return;
    }

    loadDealers();
    loadProducts();
    loadCounts();
  };

  checkLogin();
}, []);

async function loadDealers() {
  const { data, error } = await supabase
    .from("dealers")
    .select("id, dealer_name, business_name, mobile, city, status")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    alert(error.message);
    return;
  }

  setDealers(data || []);
}

async function loadProducts() {
  const { data, error } = await supabase
    .from("product_master")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    alert(error.message);
    return;
  }

  setProducts(data || []);
}

async function handleUpdateStatus(id: number, status: string) {
  const { error } = await supabase
    .from("dealers")
    .update({ status })
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  loadDealers();
}
async function loadCounts() {
  const { count: serials } = await supabase
    .from("serial_numbers")
    .select("*", { count: "exact", head: true });

  const { count: warranties } = await supabase
    .from("warranty")
    .select("*", { count: "exact", head: true });

  setSerialCount(serials || 0);
  setWarrantyCount(warranties || 0);
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-[#5A0F17]">
        Admin Dashboard
      </h1>

      <p className="text-gray-600 mt-2">
        Welcome, Abdul Majid 👋
      </p>
<button
  onClick={async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }}
  className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
>
  Logout
</button>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">Products</h2>
    <p className="text-3xl font-bold mt-3">
      {products.length}
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-gray-500">Total Dealers</h2>
    <p className="text-3xl font-bold mt-3">
      {dealers.length}
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-lg p-6">
  <h2 className="text-gray-500">Serial Numbers</h2>
  <p className="text-3xl font-bold mt-3">
    {serialCount}
  </p>
</div>

  <div className="bg-white rounded-xl shadow-lg p-6">
  <h2 className="text-gray-500">Activated Warranties</h2>
  <p className="text-3xl font-bold mt-3">
    {warrantyCount}
  </p>
</div>

</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

  <Link
    href="/admin/products"
    className="bg-[#5A0F1C] text-white rounded-xl p-6 shadow-lg hover:scale-105 transition"
  >
    <h2 className="text-2xl font-bold">📦</h2>
    <p className="mt-2 font-semibold">Product Management</p>
  </Link>

  <Link
    href="/admin/serial_generator"
    className="bg-blue-600 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition"
  >
    <h2 className="text-2xl font-bold">🔢</h2>
    <p className="mt-2 font-semibold">Serial Generator</p>
  </Link>

  <Link
   href="/admin/warranty"
    className="bg-green-600 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition"
  >
    <h2 className="text-2xl font-bold">🛡</h2>
    <p className="mt-2 font-semibold">Warranty Activation</p>
  </Link>

  <Link
    href="/admin/dealers"
    className="bg-orange-500 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition"
  >
    <h2 className="text-2xl font-bold">👥</h2>
    <p className="mt-2 font-semibold">Dealer Management</p>
  </Link>

</div>
      <div className="bg-white rounded-xl shadow-lg mt-8 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#5A0F17] text-white">
            <tr>
              <th className="p-4 text-left">Dealer</th>
              <th className="p-4 text-left">Business</th>
              <th className="p-4 text-left">Mobile</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>

            {dealers.map((dealer) => (
              <tr key={dealer.id} className="border-b">

                <td className="p-4">{dealer.dealer_name}</td>
                <td className="p-4">{dealer.business_name}</td>
                <td className="p-4">{dealer.mobile}</td>
                <td className="p-4">{dealer.city}</td>
                <td className="p-4">{dealer.status}</td>
<td className="p-4">
  {dealer.status === 'Pending'? (
    <>
      <button
        onClick={() => handleUpdateStatus(dealer.id, "Approved")}
        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2"
      >
        Approve
      </button>

      <button
        onClick={() => handleUpdateStatus(dealer.id, "Rejected")}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
      >
        Reject
      </button>
    </>
  ) : (
    <span className="text-gray-400 text-sm">-</span>
  )}
</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
