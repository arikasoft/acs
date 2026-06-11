import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-600">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready To Start Your Business?
        </h2>

        <p className="mt-6 text-blue-100 max-w-2xl mx-auto">
          Get professional consultancy for registration,
          compliance, taxation and NGO services.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Get Free Consultation
          </Link>

          <Link
            href="/services"
            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold"
          >
            Explore Services
          </Link>

        </div>
      </div>
    </section>
  );
}