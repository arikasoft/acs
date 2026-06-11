import Link from "next/link";

export default function LLPRegistrationPage() {
return ( <main>

  {/* Hero */}
  <section className="relative overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-900 to-violet-900 text-white py-24">

    <div className="container mx-auto px-6 text-center">

      <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
        LLP Registration Service
      </span>

      <h1 className="text-6xl font-black mb-6">
        Limited Liability Partnership
      </h1>

      <p className="max-w-3xl mx-auto text-lg text-purple-100">
        Start your LLP with legal protection, lower compliance,
        flexible management and professional business identity.
      </p>

      <div className="mt-10 flex justify-center gap-4">

        <Link
          href="/contact"
          className="px-8 py-4 rounded-xl bg-white text-purple-900 font-bold hover:scale-105 transition"
        >
          Start LLP Registration
        </Link>

        <Link
          href="/contact"
          className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10"
        >
          Talk to Expert
        </Link>

      </div>

    </div>

  </section>

  {/* About LLP */}
  <section className="py-20 bg-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-8 text-slate-900">
        What is LLP?
      </h2>

      <p className="max-w-5xl mx-auto text-center text-slate-600 leading-8">
        LLP (Limited Liability Partnership) is a business structure
        governed under the LLP Act, 2008. It combines partnership
        flexibility with limited liability protection.
      </p>

    </div>

  </section>

  {/* Benefits */}
  <section className="py-20 bg-slate-50">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-14">
        LLP Advantages
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          "Limited Liability",
          "Separate Legal Entity",
          "Low Compliance",
          "Easy Management",
          "No Minimum Capital",
          "Flexible Ownership",
          "Tax Efficiency",
          "Professional Image"
        ].map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition"
          >
            <h3 className="font-bold text-lg text-purple-700">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </div>

  </section>

  {/* Documents */}
  <section className="py-20 bg-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-14">
        Documents Required
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-purple-50 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold mb-6 text-purple-800">
            Partner Documents
          </h3>

          <ul className="space-y-3">
            <li>✔ PAN Card</li>
            <li>✔ Aadhaar Card</li>
            <li>✔ Passport Size Photo</li>
            <li>✔ Email ID</li>
            <li>✔ Mobile Number</li>
          </ul>

        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold mb-6 text-indigo-800">
            Registered Office
          </h3>

          <ul className="space-y-3">
            <li>✔ Electricity Bill</li>
            <li>✔ Water Bill</li>
            <li>✔ Rent Agreement</li>
            <li>✔ Property Documents</li>
            <li>✔ NOC from Owner</li>
          </ul>

        </div>

      </div>

    </div>

  </section>

  {/* Process */}
  <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-14">
        LLP Registration Process
      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        {[
          "DSC",
          "DPIN",
          "Name Reservation",
          "LLP Agreement",
          "Certificate"
        ].map((step, index) => (
          <div
            key={step}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl text-center"
          >
            <div className="text-4xl font-black text-yellow-300">
              {index + 1}
            </div>

            <h3 className="mt-4 font-bold">
              {step}
            </h3>
          </div>
        ))}

      </div>

    </div>

  </section>

  {/* Fees */}
  <section className="py-20 bg-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-14">
        Registration Packages
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="rounded-3xl border-2 border-purple-200 p-10">

          <h3 className="text-3xl font-black text-purple-800">
            Standard
          </h3>

          <div className="text-5xl font-black mt-4 mb-6">
            ₹5,999
          </div>

          <ul className="space-y-3">
            <li>✔ LLP Registration</li>
            <li>✔ PAN</li>
            <li>✔ TAN</li>
            <li>✔ MCA Filing</li>
          </ul>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-10">

          <h3 className="text-3xl font-black">
            Premium
          </h3>

          <div className="text-5xl font-black mt-4 mb-6">
            ₹9,999
          </div>

          <ul className="space-y-3">
            <li>✔ LLP Registration</li>
            <li>✔ GST Registration</li>
            <li>✔ MSME Registration</li>
            <li>✔ Startup Support</li>
          </ul>

        </div>

      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-violet-900 text-white">

    <div className="container mx-auto px-6 text-center">

      <h2 className="text-5xl font-black mb-6">
        Register Your LLP Today
      </h2>

      <p className="text-lg text-purple-100 mb-8">
        Fast, Affordable and MCA Compliant LLP Registration.
      </p>

      <Link
        href="/contact"
        className="inline-block px-10 py-4 rounded-xl bg-white text-purple-900 font-bold hover:scale-105 transition"
      >
        Get Free Consultation
      </Link>

    </div>

  </section>

</main>

);
}

