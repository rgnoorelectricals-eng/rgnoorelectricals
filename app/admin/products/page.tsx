"use client";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
const [editingId, setEditingId] = useState<string | null>(null);
 const [image, setImage] = useState<File | null>(null);
const [form, setForm] = useState({
  model_name: "",
  watt: "",
  mrp: "",
  warranty_months: "",
  status: "Active",
  image_url: "",
});

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
  const { data, error } = await supabase
    .from("product_master")
    .select("*");

  console.log("DATA =", data);
  console.log("ERROR =", error);

  if (error) {
    alert(error.message);
    return;
  }

  setProducts(data ?? []);
}
async function saveProduct() {
  let imageUrl = form.image_url;

if (image) {
  const fileName = `${Date.now()}-${image.name}`;

  const { error: uploadError } = await supabase.storage
    .from("products")
    .upload(fileName, image);

  if (uploadError) {
    alert(uploadError.message);
    return;
  }

  const { data } = supabase.storage
    .from("products")
    .getPublicUrl(fileName);

  imageUrl = data.publicUrl;
}

if (editingId) {
    const { error } = await supabase
      .from("product_master")
      .update({
  ...form,
  image_url: imageUrl || form.image_url,
})
      .eq("id", editingId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product Updated Successfully");
  } else {
    const { error } = await supabase
      .from("product_master")
      .insert([
  {
    ...form,
    image_url: imageUrl,
  },
])

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product Added Successfully");
  }

  setShowForm(false);
  setEditingId(null);

  setForm({
  model_name: "",
  watt: "",
  mrp: "",
  warranty_months: "",
  status: "Active",
  image_url: "",
});

  loadProducts();
}
function editProduct(product: any) {
  setEditingId(product.id);

  setForm({
  model_name: product.model_name,
  watt: product.watt,
  mrp: product.mrp,
  warranty_months: product.warranty_months,
  status: product.status,
  image_url: product.image_url || "",
});

  setShowForm(true);
}

async function deleteProduct(id: string) {
  if (!confirm("Delete this product?")) return;

  const { error } = await supabase
    .from("product_master")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  loadProducts();
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">
{showForm && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-[420px]">

      <h2 className="text-2xl font-bold mb-5">
        Add Product
      </h2>

      <input
        placeholder="Model Name"
        className="w-full border p-3 rounded mb-3"
        value={form.model_name}
        onChange={(e) =>
          setForm({ ...form, model_name: e.target.value })
        }
      />

      <input
        placeholder="Watt"
        className="w-full border p-3 rounded mb-3"
        value={form.watt}
        onChange={(e) =>
          setForm({ ...form, watt: e.target.value })
        }
      />

      <input
        placeholder="MRP"
        className="w-full border p-3 rounded mb-3"
        value={form.mrp}
        onChange={(e) =>
          setForm({ ...form, mrp: e.target.value })
        }
      />

      <input
        placeholder="Warranty (Months)"
        className="w-full border p-3 rounded mb-3"
        value={form.warranty_months}
        onChange={(e) =>
          setForm({
            ...form,
            warranty_months: e.target.value,
          })
        }
      />
<input
  type="file"
  accept="image/*"
  onChange={(e) => setImage(e.target.files?.[0] || null)}
  className="w-full border p-3 rounded mb-3"
/>
      <select
        className="w-full border p-3 rounded mb-5"
        value={form.status}
        onChange={(e) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowForm(false)}
          className="px-5 py-2 rounded bg-gray-300"
        >
          Cancel
        </button>

        <button
         onClick={saveProduct}
          className="px-5 py-2 rounded bg-[#5A0F17] text-white"
        >
          Save
        </button>
      </div>

    </div>
  </div>
)}
      <h1 className="text-4xl font-bold text-[#5A0F17]">
        Product Management
      </h1>
<p>Total Products: {products.length}</p>
      <p className="text-gray-600 mt-2">
        Manage all R.G. NOOR ELECTRICALS products
      </p>

      <div className="mt-8">
        <button
  onClick={() => setShowForm(true)}
  className="bg-[#5A0F17] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
>
  + Add Product
</button>
      </div>

      <div className="bg-white rounded-xl shadow-lg mt-8 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#5A0F17] text-white">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Watt</th>
              <th className="p-4 text-left">MRP</th>
              <th className="p-4 text-left">Warranty</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-4 text-left">Action</th>
              
            </tr>
          </thead>
          <tbody>
  {products.map((product) => (
    <tr key={product.id} className="border-b">
      <td className="p-4">{product.model_name}</td>
      <td className="p-4">{product.watt}W</td>
      <td className="p-4">₹{product.mrp}/-</td>
      <td className="p-4">{product.warranty_months} Months</td>
      <td className="p-4">{product.status}</td>
<td className="p-4">{product.image_url ? <img src={product.image_url} alt={product.model_name} className="w-14 h-14 object-cover rounded" /> : 'No Image'}</td>
      <td className="p-4">
        <button
  onClick={() => editProduct(product)}
  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
>
  Edit
</button>

       <button
  onClick={() => deleteProduct(product.id)}
  className="bg-red-600 text-white px-3 py-1 rounded"
>
  Delete
</button>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>

    </div>
  );
}