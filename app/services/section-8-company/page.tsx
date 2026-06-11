import Link from "next/link";
import ApplyNowPopup from "@/components/forms/ApplyNowPopup";

export default function Section8CompanyPage() {
return (
<> <ApplyNowPopup />

  <main>

    {/* Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-sky-900 to-cyan-900 text-white py-24">

      <div className="container mx-auto px-6 text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
          NGO & Charitable Organization Registration
        </span>

        <h1 className="text-6xl font-black mt-6 mb-6">
          Section 8 Company Registration
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-cyan-100">
          Establish a legally recognized Non-Profit Organization under
          the Companies Act, 2013 with benefits of CSR Funding,
          12A, 80G and National Credibility.
        </p>

      </div>

    </section>

    {/* Lead Form */}
    <section className="-mt-10 relative z-20">

      <div className="container mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-black text-center mb-6 text-blue-900">
            Apply for Section 8 Company
          </h2>

          <form className="grid md:grid-cols-4 gap-4">

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

            <button
              className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-700
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

        <h2 className="text-5xl font-black mb-8 text-blue-950">
          What is Section 8 Company?
        </h2>

        <p className="max-w-5xl mx-auto text-slate-600 leading-8">
          Section 8 Company is a non-profit organization registered
          under the Companies Act, 2013 for charitable, educational,
          environmental, healthcare, social welfare and religious
          purposes.
        </p>

      </div>

    </section>

    {/* Benefits */}
    <section className="py-20 bg-sky-50">

      <div className="container mx-auto px-6">

        <h2 className="text-5xl font-black text-center mb-12">
          Benefits of Section 8 Company
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Separate Legal Entity",
            "CSR Funding Eligibility",
            "Higher Credibility",
            "National Operations",
            "Tax Benefits",
            "Government Recognition",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h3 className="font-bold text-xl text-blue-800">
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

            <h3 className="text-2xl font-bold mb-5 text-cyan-300">
              Director Documents
            </h3>

            <ul className="space-y-3">
              <li>✔ PAN Card</li>
              <li>✔ Aadhaar Card</li>
              <li>✔ Mobile Number</li>
              <li>✔ Email ID</li>
              <li>✔ Passport Photo</li>
            </ul>

          </div>

          <div className="bg-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-5 text-cyan-300">
              Registered Office
            </h3>

            <ul className="space-y-3">
              <li>✔ Electricity Bill</li>
              <li>✔ Rent Agreement</li>
              <li>✔ NOC from Owner</li>
              <li>✔ Address Proof</li>
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

        <div className="grid md:grid-cols-6 gap-5">

          {[
            "DSC",
            "Name Approval",
            "MOA & AOA",
            "SPICe+ Filing",
            "MCA Approval",
            "Certificate",
          ].map((step, index) => (
            <div
              key={step}
              className="bg-sky-50 p-6 rounded-2xl text-center"
            >
              <div className="text-4xl font-black text-cyan-600">
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

    {/* CSR & Tax Benefits */}
    <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">

      <div className="container mx-auto px-6">

        <h2 className="text-5xl font-black text-center mb-12">
          CSR, 12A & 80G Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="font-bold text-2xl text-blue-900 mb-4">
              CSR Funding
            </h3>
            <p>
              Eligible to receive CSR grants from companies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="font-bold text-2xl text-blue-900 mb-4">
              12A Registration
            </h3>
            <p>
              Income tax exemption on eligible income.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="font-bold text-2xl text-blue-900 mb-4">
              80G Registration
            </h3>
            <p>
              Donors can claim income tax deduction.
            </p>
          </div>

        </div>

      </div>

    </section>

    {/* CTA */}
    <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">

      <div className="container mx-auto px-6 text-center">

        <h2 className="text-5xl font-black mb-6">
          Start Your NGO Journey Today
        </h2>

        <p className="text-cyan-100 mb-8">
          Get expert assistance for Section 8 Company Registration,
          12A, 80G and CSR Compliance.
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
</>

);
}
