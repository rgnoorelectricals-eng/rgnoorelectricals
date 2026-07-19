"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
export default  function Home() {
 const [data, setData] = useState<any[]>([]);
const [error, setError] = useState<any>(null);

useEffect(() => {
  const loadProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    setData(data || []);
    setError(error);

    console.log(data);
    console.log(error);
  };

  loadProducts();
}, []);
  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
  <div className="text-2xl font-bold text-[#4B0013]">
    R.G. NOOR ELECTRICALS™
  </div>

  <Link
    href="/admin/login"
    className="inline-block mt-2 bg-[#5A0F1C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#5A0F1C] border-2 border-[#5A0F1C] transition"
  >
    Login
  </Link>
</div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#">Home</a>
            <Link href="/products" className="hover:text-[#5A0F1C] transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-[#5A0F1C] transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#5A0F1C] transition">
              Contact
            </Link>
            <Link href="/dealer" className="hover:text-[#5A0F1C] transition">
  Become Dealer
</Link>
          </div>

        </div>
      </nav>
      <section className="bg-white text-[#5A0F1C] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

         <motion.div
  initial={{ opacity: 0, scale: 0.8, y: 40 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: { duration: 1 },
    scale: { duration: 1 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="flex justify-center mb-8"
>
            <Image
              src="/logo.png"
              alt="R.G. NOOR ELECTRICALS"
              width={500}
              height={500}
              priority
             sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
  className="w-[300px] md:w-[400px] lg:w-[500px] h-auto"
/>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-xl"
          >
            For Every Home and Every Light,
          </motion.p>

          <p className="mt-4 text-lg text-gray-600">
            R.G. NOOR ELECTRICALS Gets It Right.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="bg-white text-[#5A0F1C] px-4 py-2 rounded-full font-semibold shadow">
              ✓ Premium Quality
            </span>

            <span className="bg-white text-[#5A0F1C] px-4 py-2 rounded-full font-semibold shadow">
              ✓ Energy Efficient
            </span>

            <span className="bg-white text-[#5A0F1C] px-4 py-2 rounded-full font-semibold shadow">
              ✓ Long Lasting Brightness
            </span>
        </div>

{/* Ye naya wrapper add karo */}
<div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
  
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href="/products" className="bg-white text-[#5A0F1C] font-bold px-8 py-4 rounded-xl shadow-xl border-2 border-[#5A0F1C]">
      Explore Products →
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href="/dealer" className="bg-[#5A0F1C] text-white font-bold px-8 py-4 rounded-xl shadow-xl">
      Become Dealer
    </Link>
  </motion.div>

</div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <motion.div

              whileHover={{
                scale: 1.08,
                y: -10,
                rotate: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="bg-[#F8F8F8] backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-xl min-w-[200px]"
            >
              <h3 className="text-4xl font-extrabold">25,000+</h3>
              <p className="mt-2 text-lg text-gray-600 font-medium">
                Hours Life
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.08,
                y: -10,
                rotate: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="bg-[#F8F8F8] backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-xl min-w-[200px]"
            >
              <h3 className="text-4xl font-extrabold">85%</h3>
              <p className="mt-2 text-lg text-gray-600 font-medium">
                Energy Saving
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.08,
                y: -10,
                rotate: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="bg-[#F8F8F8] backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-xl min-w-[200px]"
            >
              <h3 className="text-4xl font-extrabold">20 Months</h3>
              <p className="mt-2 text-lg text-gray-600 font-medium">
                Quality Assurance
              </p>
            </motion.div>

            

            </div>
          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#5A0F1C]">
            Our Products
          </h2>
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg">
              Trusted lighting solutions designed with premium quality,
              long-lasting performance and energy efficiency for every home,
              office and commercial space.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <motion.div
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="border rounded-xl p-8 shadow"
            >
              <h3 className="text-2xl font-bold">
                9W LED Bulb
              </h3>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 text-lg text-gray-600"
              >
                Bright, energy efficient and designed for long lasting performance.
              </motion.p>

              
            </motion.div>

            <motion.div
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="border rounded-xl p-8 shadow"
            >
              <h3 className="text-2xl font-bold">
                LED Tube Light
              </h3>

              <p className="mt-4 text-gray-600">
                Reliable lighting solution for homes, offices and commercial spaces.
              </p>

              
            </motion.div>

            <motion.div
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="border rounded-xl p-8 shadow"
            >
              <h3 className="text-2xl font-bold">
                Electrical Products
              </h3>

              <p className="mt-4 text-gray-600">
                Quality electrical products built for everyday use.
              </p>

              
            </motion.div>

          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5A0F1C]">
            Why Choose R.G. NOOR ELECTRICALS™
          </h2>

         <div className="grid md:grid-cols-3 gap-8 mt-12">

  <motion.div
    whileHover={{
      scale: 1.06,
      rotate: -1,
      y: -10
    }}
    transition={{
      type: "spring",
      stiffness: 250
    }}
    className="bg-white rounded-xl shadow-lg p-8 text-center"
  >
    <div className="text-5xl">💡</div>
    <h3 className="text-xl font-bold mt-4">Premium LED Technology</h3>
    <p className="mt-3 text-gray-600">
      Built using quality components for reliable brightness and long life.
    </p>
  </motion.div>

  <motion.div
    whileHover={{
      scale: 1.06,
      rotate: 1,
      y: -10
    }}
    transition={{
      type: "spring",
      stiffness: 250
    }}
    className="bg-white rounded-xl shadow-lg p-8 text-center"
  >
    <div className="text-5xl">⚡</div>
    <h3 className="text-xl font-bold mt-4">Energy Efficient</h3>
    <p className="mt-3 text-gray-600">
      Designed to reduce electricity consumption without compromising performance.
    </p>
  </motion.div>

  <motion.div
    whileHover={{
      scale: 1.06,
      rotate: -1,
      y: -10
    }}
    transition={{
      type: "spring",
      stiffness: 250
    }}
    className="bg-white rounded-xl shadow-lg p-8 text-center"
  >
    <div className="text-5xl">🛡️</div>
    <h3 className="text-xl font-bold mt-4">20 Months Warranty</h3>
    <p className="mt-3 text-gray-600">
      Confidence backed by our official warranty support.
    </p>
  </motion.div>

</div>

        </div>
      </section>
      <section className="bg-[#5A0F1C] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Light Up Your Space?
          </h2>

          <p className="mt-4 text-lg text-gray-200">
            Discover reliable LED lighting solutions from R.G. NOOR ELECTRICALS™
          </p>

        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5A0F1C]">
            R.G. NOOR ELECTRICALS™
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering reliable LED lighting solutions with quality, performance and customer satisfaction.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">

            <div>
              <h3 className="text-4xl font-bold text-[#5A0F1C]">9W</h3>
              <p className="text-gray-600 mt-2">LED Bulb</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#5A0F1C]">20</h3>
              <p className="text-gray-600 mt-2">Months Warranty</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#5A0F1C]">25k+</h3>
              <p className="text-gray-600 mt-2">Hours Life</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#5A0F1C]">85%</h3>
              <p className="text-gray-600 mt-2">Energy Saving</p>
            </div>

          </div>

        </div>
      </section>
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#5A0F1C]">
            Trusted Quality, Trusted Performance
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Every R.G. NOOR ELECTRICALS LED Bulb is designed to deliver reliable
            brightness, energy efficiency and long-lasting performance for homes,
            offices and commercial spaces.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <span className="bg-[#5A0F1C] text-white px-5 py-2 rounded-full">
              20 Months Warranty
            </span>

            <span className="bg-[#5A0F1C] text-white px-5 py-2 rounded-full">
              25,000+ Hours Life
            </span>

            <span className="bg-[#5A0F1C] text-white px-5 py-2 rounded-full">
              Premium LED Technology
            </span>

            <span className="bg-[#5A0F1C] text-white px-5 py-2 rounded-full">
              Up to 85% Energy Saving
            </span>
          </div>

        </div>
      </section>
      <section className="bg-[#5A0F1C] text-white py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            For Every Home and Every Light,
          </h2>

          <p className="mt-3 text-2xl font-semibold text-yellow-300">
            R.G. NOOR ELECTRICALS Gets It Right.
          </p>

          <p className="mt-6 text-gray-200">
            Built with quality, backed by trust, and designed for long-lasting brightness.
          </p>

        </div>
      </section>
      <section className="py-20 bg-[#5A0F1C]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Verify Your Product Warranty
          </h2>

          <p className="mt-5 text-white/90 max-w-2xl mx-auto">
            Enter your product serial number to verify authenticity and warranty
            status through the official R.G. NOOR ELECTRICALS Warranty System.
          </p>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/warranty"
              className="inline-block mt-10 bg-white text-[#5A0F1C] font-bold px-10 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              Verify Warranty
            </Link>
          </motion.div>

        </div>
      </section>
      <footer className="bg-[#3E0A14] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold">
            R.G. NOOR ELECTRICALS™
          </h2>

          <p className="mt-3 text-gray-300 italic">
            "For Every Home and Every Light, R.G. NOOR ELECTRICALS Gets It Right."
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-gray-300">

            <div>
              <h3 className="font-bold text-white">📞 Phone</h3>
              <p>+91 9194066199</p>
            </div>

            <div>
              <h3 className="font-bold text-white">📧 Email</h3>
              <p>rgnoorelectricals@gmail.com</p>
            </div>

            <div>
              <h3 className="font-bold text-white">📍 Address</h3>
              <p>Allahabad, Uttar Pradesh, India, 212208</p>
            </div>
            <div className="mt-10 border-t border-white/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Quick Links
              </h3>

              <div className="flex flex-wrap gap-6 text-gray-300">
                <Link href="/" className="hover:text-white transition">Home</Link>
<Link href="/products" className="hover:text-white transition">Products</Link>
<Link href="/about" className="hover:text-white transition">About Us</Link>
<Link href="/contact" className="hover:text-white transition">Contact</Link>
               <Link href="/verify" className="hover:text-white transition">
  Warranty
</Link>
                <Link href="/dealer" className="hover:text-white transition">
  Become Dealer
</Link>

              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-6 text-center text-gray-300">
            Run by: R.G. ENTERPRISES
            © 2026 All Rights Reserved.
          </div>

        </div>
      </footer>
      <motion.a
        animate={{
          scale: [1, 1.15, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        href="https://wa.me/919194066199"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50"
      >
        💬
      </motion.a>
    </main>
  );
}
