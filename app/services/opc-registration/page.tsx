import Link from "next/link";

export default function OPCRegistrationPage() {
return ( <main>

  {/* Hero */}
  <section className="bg-gradient-to-r from-black via-slate-900 to-yellow-950 text-white py-24">

    <div className="container mx-auto px-6 text-center">

      <span className="px-5 py-2 rounded-full bg-yellow-500/20 text-yellow-300">
        One Person Company Registration
      </span>

      <h1 className="text-6xl font-black mt-6 mb-6">
        OPC Registration
      </h1>

      <p className="max-w-3xl mx-auto text-slate-300 text-lg">
        Start your business as a legally recognized One Person Company
        with limited liability and complete ownership control.
      </p>

    </div>

  </section>

  {/* Small Lead Form */}
  <section className="-mt-12 relative z-20">

    <div className="container mx-auto px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-black text-center mb-8">
          Get Free Consultation
        </h2>

        <form className="grid md:grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="Name"
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            placeholder="Mobile"
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded-xl px-4 py-3"
          />

          <select className="border rounded-xl px-4 py-3">
            <option>OPC Registration</option>
            <option>Private Limited</option>
            <option>LLP Registration</option>
            <option>GST Registration</option>
          </select>

          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-bold"
          >
            Submit
          </button>

        </form>

      </div>

    </div>

  </section>

  {/* About */}
  <section className="py-20 bg-white">

    <div className="container mx-auto px-6 text-center">

      <h2 className="text-5xl font-black mb-8">
        What is OPC?
      </h2>

      <p className="max-w-4xl mx-auto text-slate-600 leading-8">
        One Person Company (OPC) allows a single entrepreneur to
        enjoy the benefits of a company structure while maintaining
        full control of the business.
      </p>

    </div>

  </section>

  {/* Benefits */}
  <section className="py-20 bg-slate-50">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        Benefits of OPC
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {[
          "Single Owner",
          "Limited Liability",
          "Separate Legal Entity",
          "Easy Funding",
          "Professional Identity",
          "Business Growth",
        ].map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="font-bold text-xl text-yellow-700">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </div>

  </section>

  {/* Documents */}
  <section className="py-20 bg-black text-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        Documents Required
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-5 text-yellow-400">
            Director Documents
          </h3>

          <ul className="space-y-3">
            <li>✔ PAN Card</li>
            <li>✔ Aadhaar Card</li>
            <li>✔ Passport Photo</li>
            <li>✔ Mobile Number</li>
            <li>✔ Email ID</li>
          </ul>

        </div>

        <div className="bg-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-5 text-yellow-400">
            Office Address
          </h3>

          <ul className="space-y-3">
            <li>✔ Electricity Bill</li>
            <li>✔ Rent Agreement</li>
            <li>✔ Property Documents</li>
            <li>✔ Owner NOC</li>
          </ul>

        </div>

      </div>

    </div>

  </section>

  {/* Process */}
  <section className="py-20 bg-gradient-to-r from-yellow-50 to-amber-50">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        Registration Process
      </h2>

      <div className="grid md:grid-cols-6 gap-5">

        {[
          "DSC",
          "DIN",
          "Name Approval",
          "SPICe+",
          "PAN TAN",
          "COI",
        ].map((step, index) => (
          <div
            key={step}
            className="bg-white p-6 rounded-2xl shadow text-center"
          >
            <div className="text-4xl font-black text-yellow-600">
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

  {/* Pricing */}
  <section className="py-20 bg-white">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-12">
        OPC Packages
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border-2 border-yellow-300 rounded-3xl p-10">

          <h3 className="text-3xl font-black">
            Standard
          </h3>

          <div className="text-5xl font-black text-yellow-600 my-5">
            ₹4,999
          </div>

          <ul className="space-y-3">
            <li>✔ OPC Registration</li>
            <li>✔ PAN TAN</li>
            <li>✔ MCA Filing</li>
          </ul>

        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-3xl p-10">

          <h3 className="text-3xl font-black">
            Premium
          </h3>

          <div className="text-5xl font-black my-5">
            ₹8,999
          </div>

          <ul className="space-y-3">
            <li>✔ OPC Registration</li>
            <li>✔ GST Registration</li>
            <li>✔ MSME Registration</li>
            <li>✔ Startup Consultation</li>
          </ul>

        </div>

      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="py-24 bg-black text-white text-center">

    <div className="container mx-auto px-6">

      <h2 className="text-5xl font-black mb-6">
        Start Your OPC Today
      </h2>

      <p className="text-slate-300 mb-8">
        Quick, Affordable and MCA Compliant OPC Registration.
      </p>

      <Link
        href="/contact"
        className="px-10 py-4 rounded-xl bg-yellow-500 text-black font-bold"
      >
        Get Free Consultation
      </Link>

    </div>

  </section>

</main>


);
}

