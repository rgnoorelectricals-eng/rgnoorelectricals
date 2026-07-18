export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-[#5A0F1C] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            We'd love to hear from you.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-[#5A0F1C]">
              Get In Touch
            </h2>

            <p className="mt-6 text-gray-600">
              Have a question about our products, dealership or warranty?
              Feel free to contact us.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h3 className="font-bold">📞 Phone</h3>
                <p>+91 9194066199</p>
              </div>

              <div>
                <h3 className="font-bold">📧 Email</h3>
                <p>rgnoorelectricals@gmail.com</p>
              </div>

              <div>
                <h3 className="font-bold">📍 Address</h3>
                <p>Allahabad, Uttar Pradesh, India, 212208</p>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">

  <h2 className="text-3xl font-bold text-[#5A0F1C]">
    Send Us a Message
  </h2>

  <form className="mt-8 space-y-5">

    <input
      type="text"
      placeholder="Your Name"
      className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#5A0F1C]"
    />

    <input
      type="tel"
      placeholder="Mobile Number"
      className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#5A0F1C]"
    />

    <input
      type="email"
      placeholder="Email Address"
      className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#5A0F1C]"
    />

    <textarea
      rows={5}
      placeholder="Your Message"
      className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#5A0F1C]"
    ></textarea>

    <button
      type="submit"
      className="w-full bg-[#5A0F1C] text-white py-4 rounded-lg hover:bg-[#430010] transition"
    >
      Send Message
    </button>

  </form>

</div>

        </div>
      </section>
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-[#5A0F1C]">
      How Can We Help You?
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-14">

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl">💡</div>
        <h3 className="mt-5 text-2xl font-bold">Product Enquiry</h3>
        <p className="mt-3 text-gray-600">
          Get complete information about our LED lighting products.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl">🛡️</div>
        <h3 className="mt-5 text-2xl font-bold">Warranty Support</h3>
        <p className="mt-3 text-gray-600">
          Need warranty assistance? Our support team is here to help.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl">🤝</div>
        <h3 className="mt-5 text-2xl font-bold">Dealer Enquiry</h3>
        <p className="mt-3 text-gray-600">
          Interested in becoming an authorized R.G. NOOR dealer? Contact us today.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-20 bg-[#5A0F1C] text-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center">
      Business Hours
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-14">

      <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-md">
        <div className="text-5xl">🕘</div>
        <h3 className="mt-5 text-2xl font-bold">
          Working Days
        </h3>

        <p className="mt-4 text-gray-200">
          Monday – Saturday
        </p>
      </div>

      <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-md">
        <div className="text-5xl">⏰</div>
        <h3 className="mt-5 text-2xl font-bold">
          Office Hours
        </h3>

        <p className="mt-4 text-gray-200">
          9:00 AM – 10:00 PM
        </p>
      </div>

      <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-md">
        <div className="text-5xl">📞</div>
        <h3 className="mt-5 text-2xl font-bold">
          Quick Support
        </h3>

        <p className="mt-4 text-gray-200">
          We're happy to assist you during business hours.
        </p>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}