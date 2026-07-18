"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#5A0F17] text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        R.G. NOOR
      </h1>

      <nav className="space-y-3">

        <Link href="/admin/dashboard" className="block p-3 rounded-lg hover:bg-white hover:text-[#5A0F17]">
          📊 Dashboard
        </Link>

        <Link href="#" className="block p-3 rounded-lg hover:bg-white hover:text-[#5A0F17]">
          📦 Products
        </Link>

        <Link href="#" className="block p-3 rounded-lg hover:bg-white hover:text-[#5A0F17]">
          🤝 Dealers
        </Link>

        <Link href="#" className="block p-3 rounded-lg hover:bg-white hover:text-[#5A0F17]">
          🔢 Serial Numbers
        </Link>

        <Link href="#" className="block p-3 rounded-lg hover:bg-white hover:text-[#5A0F17]">
          📷 QR Generator
        </Link>

        <Link href="#" className="block p-3 rounded-lg hover:bg-white hover:text-[#5A0F17]">
          🛡 Warranty
        </Link>

        <Link href="#" className="block p-3 rounded-lg hover:bg-white hover:text-[#5A0F17]">
          ⚙ Settings
        </Link>

        <Link href="#" className="block p-3 rounded-lg hover:bg-red-600">
          🚪 Logout
        </Link>

      </nav>
    </aside>
  );
}