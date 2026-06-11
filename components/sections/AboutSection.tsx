import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="rounded-3xl bg-slate-100 h-[500px] flex items-center justify-center">
              <span className="text-slate-500 text-lg">
                ACS Consultancy Image
              </span>
            </div>
          </div>

          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              About ACS Consultancy
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
              Professional Business &
              NGO Consultancy Services
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              ACS Consultancy provides complete
              registration, compliance, taxation,
              legal documentation and advisory
              solutions for startups, businesses,
              NGOs, trusts and societies across India.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-50 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold text-blue-600">
                  500+
                </h3>
                <p className="text-slate-600 mt-2">
                  Clients Served
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold text-blue-600">
                  10+
                </h3>
                <p className="text-slate-600 mt-2">
                  Years Experience
                </p>
              </div>

            </div>

            <Link
              href="/about"
              className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}