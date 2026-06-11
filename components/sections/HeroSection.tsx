import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500">
      <div className="container mx-auto px-6 py-28">

        <div className="max-w-3xl text-white">

          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Trusted Business & NGO Consultancy
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Registration, Compliance &
            Business Growth Solutions
          </h1>

          <p className="mt-6 text-lg text-blue-50">
            Private Limited Company, LLP, GST,
            Trust, Society, NGO Darpan, Trademark,
            CSR and Compliance Services Across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white hover:bg-amber-600"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24 fill-white"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}