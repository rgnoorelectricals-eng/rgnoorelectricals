export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-[#5A0F1C] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About R.G. NOOR ELECTRICALS™
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            For Every Home and Every Light,
            <br />
            R.G. NOOR ELECTRICALS Gets It Right.
          </p>

        </div>
      </section>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    <div>
      <h2 className="text-4xl font-bold text-[#5A0F1C]">
        Who We Are
      </h2>

      <p className="mt-6 text-gray-700 leading-8">
        R.G. NOOR ELECTRICALS™ is committed to delivering reliable,
        energy-efficient and long-lasting LED lighting solutions.
        Our focus is to provide quality products that customers can
        trust for their homes, offices and commercial spaces.
      </p>

      <p className="mt-6 text-gray-700 leading-8">
        Every product is developed with attention to quality,
        durability and customer satisfaction because we believe
        that lighting is more than illumination—it is comfort,
        safety and confidence.
      </p>
    </div>

    
    <img 
  src="/poster.png" 
  alt="Company Image" 
  className="rounded-2xl h-96 w-full object-contain bg-white-100"
/>

  </div>
</section>
<section className="py-20 bg-[#F8F8F8]">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-[#5A0F1C]">
      Our Mission & Vision
    </h2>

    <div className="grid md:grid-cols-2 gap-10 mt-14">

      <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-5">🎯</div>
        <h3 className="text-2xl font-bold text-[#5A0F1C]">
          Our Mission
        </h3>

        <p className="mt-4 text-gray-700 leading-8">
          To deliver reliable, energy-efficient and high-quality LED lighting
          solutions that bring comfort, safety and value to every customer.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-5">🚀</div>
        <h3 className="text-2xl font-bold text-[#5A0F1C]">
          Our Vision
        </h3>

        <p className="mt-4 text-gray-700 leading-8">
          To become one of India's trusted lighting brands by focusing on
          innovation, quality and long-term customer satisfaction.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-[#5A0F1C]">
      Our Core Values
    </h2>

    <div className="grid md:grid-cols-4 gap-8 mt-14">

      <div className="text-center p-6 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl">⭐</div>
        <h3 className="mt-5 text-xl font-bold">Quality</h3>
        <p className="mt-3 text-gray-600">
          Every product is built with attention to quality and durability.
        </p>
      </div>

      <div className="text-center p-6 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl">🤝</div>
        <h3 className="mt-5 text-xl font-bold">Trust</h3>
        <p className="mt-3 text-gray-600">
          Building long-term relationships through genuine service.
        </p>
      </div>

      <div className="text-center p-6 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl">💡</div>
        <h3 className="mt-5 text-xl font-bold">Innovation</h3>
        <p className="mt-3 text-gray-600">
          Continuously improving lighting solutions for modern needs.
        </p>
      </div>

      <div className="text-center p-6 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl">🛡️</div>
        <h3 className="mt-5 text-xl font-bold">Reliability</h3>
        <p className="mt-3 text-gray-600">
          Products you can rely on every single day.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-20 bg-[#5A0F1C] text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold">
      Why Choose R.G. NOOR ELECTRICALS™ ?
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-gray-200 text-lg">
      We believe that quality is not just a feature—it is a commitment.
      Every product is designed to deliver reliable performance, energy efficiency,
      and long-lasting brightness.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-14">

      <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-2xl font-bold">Premium Materials</h3>
        <p className="mt-4 text-gray-200">
          Carefully selected components for dependable quality.
        </p>
      </div>

      <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-2xl font-bold">Customer Satisfaction</h3>
        <p className="mt-4 text-gray-200">
          We focus on delivering products customers can trust.
        </p>
      </div>

      <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">
        <h3 className="text-2xl font-bold">Future Ready</h3>
        <p className="mt-4 text-gray-200">
          Continuously improving our products with modern technology.
        </p>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}