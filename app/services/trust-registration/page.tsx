import Link from "next/link";

export default function TrustRegistrationPage() {
return ( <main>

  {/* Hero */}
  <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-24">

    <div className="container mx-auto px-6 text-center">

      <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20">
        NGO & Charitable Trust Registration
      </span>

      <h1 className="text-6xl font-black mt-6 mb-6">
        Trust Registration
      </h1>

      <p className="max-w-3xl mx-auto text-slate-300 text-lg">
        Register your Charitable, Religious, Educational or Social Welfare
        Trust with complete legal documentation and compliance support.
      </p>

    </div>

  </section>

  {/* Quick Lead Form */}
  <section className="-mt-10 relative z-20">

    <div className="container mx-auto px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-black text-center mb-6 text-slate-900">
          Apply for Trust Registration
        </h2>

        <form className="grid md:grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="Name"
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="hidden"
            value="Trust Registration"
          />

          <button
            className="
            rounded-xl
            bg-gradient-to-r
            from-blue-800
            to-slate-900
            text-white
            font-bold
            "
          >
            Apply Now
          </button>

        </form>

      </div>

    </div>

  </section>

  {/* About */}
  <section className="py-20 bg-white">

    <div className="container mx-auto px-6 text-center">

      <h2 className="text-5xl font-black mb-8">
        What is a Trust?
      </h2>

      <p className="max-w-5xl mx-auto text-slate-600 leading-8">
        A Trust is a legal arrangement where property or assets are held
        by trustees for charitable, religious, educational, healthcare,
        environmental and public welfare purposes.
      </p>

    </div>

  </section>

  {/* Benefits */}
  <section className="py-20 bg-slate-100">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        Benefits of Trust Registration
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {[
          "Legal Recognition",
          "CSR Funding Eligibility",
          "Donor Trust",
          "Tax Benefits",
          "Property Ownership",
          "Long-Term Sustainability",
        ].map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="font-bold text-xl text-blue-900">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </div>

  </section>

  {/* Documents */}
  <section className="py-20 bg-blue-950 text-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        Documents Required
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-5">
            Trustee Documents
          </h3>

          <ul className="space-y-3">
            <li>✔ PAN Card</li>
            <li>✔ Aadhaar Card</li>
            <li>✔ Mobile Number</li>
            <li>✔ Email ID</li>
            <li>✔ Passport Size Photo</li>
          </ul>

        </div>

        <div className="bg-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-5">
            Trust Documents
          </h3>

          <ul className="space-y-3">
            <li>✔ Trust Deed Draft</li>
            <li>✔ Registered Office Proof</li>
            <li>✔ Utility Bill</li>
            <li>✔ Owner NOC</li>
          </ul>

        </div>

      </div>

    </div>

  </section>

  {/* Registration Process */}
  <section className="py-20 bg-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        Registration Process
      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        {[
          "Name Selection",
          "Trust Deed Drafting",
          "Stamp Duty",
          "Registrar Filing",
          "Certificate Issued",
        ].map((step, index) => (
          <div
            key={step}
            className="bg-slate-100 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-black text-blue-800">
              {index + 1}
            </div>

            <div className="mt-3 font-semibold">
              {step}
            </div>

          </div>
        ))}

      </div>

    </div>

  </section>

  {/* 12A & 80G */}
  <section className="py-20 bg-slate-50">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        Future Tax Benefits
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            12A Registration
          </h3>
          <p>
            Provides income tax exemption to the Trust.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            80G Registration
          </h3>
          <p>
            Donors receive income tax deduction benefits.
          </p>
        </div>

      </div>

    </div>

  </section>

  {/* Pricing */}
  <section className="py-20 bg-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        Registration Packages
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border-2 border-blue-200 rounded-3xl p-10">

          <h3 className="text-3xl font-black text-blue-900">
            Standard
          </h3>

          <div className="text-5xl font-black my-5 text-blue-700">
            ₹4,999
          </div>

          <ul className="space-y-3">
            <li>✔ Trust Deed</li>
            <li>✔ Registration Support</li>
            <li>✔ Documentation</li>
          </ul>

        </div>

        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl p-10">

          <h3 className="text-3xl font-black">
            Premium
          </h3>

          <div className="text-5xl font-black my-5">
            ₹9,999
          </div>

          <ul className="space-y-3">
            <li>✔ Trust Registration</li>
            <li>✔ PAN Application</li>
            <li>✔ NGO Darpan Guidance</li>
            <li>✔ 12A & 80G Consultation</li>
          </ul>

        </div>

      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="py-24 bg-gradient-to-r from-blue-950 to-slate-900 text-white">

    <div className="container mx-auto px-6 text-center">

      <h2 className="text-5xl font-black mb-6">
        Register Your Trust Today
      </h2>

      <p className="text-slate-300 mb-8">
        Complete Trust Registration with Expert Legal Support.
      </p>

      <Link
        href="/contact"
        className="inline-block px-10 py-4 rounded-xl bg-white text-blue-900 font-bold"
      >
        Get Free Consultation
      </Link>

    </div>

  </section>

</main>


);
}
