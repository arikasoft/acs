import Link from "next/link";

export default function PrivateLimitedCompanyPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white py-24">

        <div className="container mx-auto px-6 text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 mb-6">
            Company Registration Service
          </span>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Private Limited Company Registration
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300">
            Start your business with a legally recognized Private Limited
            Company. Fast Registration, MCA Compliance, PAN, TAN, GST &
            Startup Support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-bold"
            >
              Get Free Consultation
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

      {/* Overview */}
      <section className="py-20 bg-white">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8 text-center">
            What is a Private Limited Company?
          </h2>

          <p className="max-w-5xl mx-auto text-center text-slate-600 leading-8">
            A Private Limited Company is one of the most popular business
            structures in India under the Companies Act, 2013. It offers
            separate legal identity, limited liability protection and
            greater business credibility.
          </p>

        </div>

      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Separate Legal Entity",
              "Limited Liability",
              "Easy Fund Raising",
              "Better Credibility",
              "Startup Recognition",
              "Business Expansion",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-bold text-lg">{item}</h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Documents */}
      <section className="py-20 bg-white">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Documents Required
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-slate-50 p-8 rounded-2xl">

              <h3 className="text-2xl font-bold mb-5">
                Directors Documents
              </h3>

              <ul className="space-y-3">
                <li>✔ PAN Card</li>
                <li>✔ Aadhaar Card</li>
                <li>✔ Mobile Number</li>
                <li>✔ Email ID</li>
                <li>✔ Passport Size Photograph</li>
              </ul>

            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">

              <h3 className="text-2xl font-bold mb-5">
                Office Documents
              </h3>

              <ul className="space-y-3">
                <li>✔ Electricity Bill</li>
                <li>✔ Water Bill</li>
                <li>✔ Rent Agreement</li>
                <li>✔ Property Tax Receipt</li>
                <li>✔ Owner NOC</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="py-20 bg-slate-950 text-white">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Registration Process
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {[
              "Name Approval",
              "DSC",
              "DIN",
              "SPICe+ Filing",
              "PAN & TAN",
              "COI Issued",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-black text-emerald-400">
                  {index + 1}
                </div>

                <div className="mt-3">{step}</div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Fees */}
      <section className="py-20 bg-white">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Registration Fees
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-50 p-8 rounded-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Basic Package
              </h3>

              <div className="text-5xl font-black text-emerald-600 mb-4">
                ₹4,999
              </div>

              <ul className="space-y-2">
                <li>✔ Company Registration</li>
                <li>✔ PAN & TAN</li>
                <li>✔ MCA Filing</li>
                <li>✔ Expert Support</li>
              </ul>

            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Premium Package
              </h3>

              <div className="text-5xl font-black text-blue-600 mb-4">
                ₹9,999
              </div>

              <ul className="space-y-2">
                <li>✔ Company Registration</li>
                <li>✔ GST Registration</li>
                <li>✔ MSME Registration</li>
                <li>✔ Startup Consultation</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Name Change */}
      <section className="py-20 bg-slate-50">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            Company Name Change Service
          </h2>

          <div className="max-w-5xl mx-auto">

            <p className="text-slate-600 leading-8">
              Existing companies can change their name through MCA
              approval process. Name change requires Board Resolution,
              Shareholder Approval, RUN Application and updated MOA/AOA.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              <div className="bg-white p-8 rounded-2xl">

                <h3 className="font-bold text-xl mb-4">
                  Documents Required
                </h3>

                <ul className="space-y-2">
                  <li>✔ Board Resolution</li>
                  <li>✔ EGM Notice</li>
                  <li>✔ Altered MOA</li>
                  <li>✔ Altered AOA</li>
                  <li>✔ Shareholders Resolution</li>
                </ul>

              </div>

              <div className="bg-white p-8 rounded-2xl">

                <h3 className="font-bold text-xl mb-4">
                  Professional Fees
                </h3>

                <div className="text-4xl font-black text-purple-600">
                  ₹5,000 - ₹15,000
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-12 text-center text-white">

            <h2 className="text-5xl font-black mb-5">
              Start Your Company Today
            </h2>

            <p className="mb-8 text-lg">
              Get expert guidance for registration, compliance and growth.
            </p>

            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-emerald-700 rounded-xl font-bold"
            >
              Get Free Consultation
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}