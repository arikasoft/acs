import {
  Building2,
  Target,
  Eye,
  Users,
  Award,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-emerald-700 to-cyan-700 text-white">

        {/* Animated Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-6 py-32 text-center relative z-10">

          <h1 className="text-6xl font-black mb-6 animate-bounce">
            About ACS Consultancy
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-white/90">
            Empowering Businesses, NGOs and Startups with
            Registration, Compliance and Consultancy Services.
          </p>

        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-24 fill-white"
          >
            <path d="M0,0V46.29c47.79,22,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,5.19V0Z"></path>
          </svg>
        </div>

      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-teal-600 font-bold uppercase">
                Our Story
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-6">
                Building Trust Through Professional Consultancy
              </h2>

              <p className="text-slate-600 text-lg leading-8">
                ACS Consultancy provides comprehensive business,
                NGO, GST, Trademark and Legal Compliance services.
                We help entrepreneurs, startups and organizations
                achieve legal compliance and sustainable growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-12 shadow-xl">
              <Building2 className="w-20 h-20 text-teal-700 mb-6" />
              <h3 className="text-3xl font-bold">
                Trusted Consultancy Partner
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-slate-50">

        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition">

              <Target className="w-14 h-14 text-orange-500 mb-5" />

              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-slate-600">
                To simplify registration and compliance services
                for businesses and NGOs across India.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition">

              <Eye className="w-14 h-14 text-cyan-600 mb-5" />

              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-slate-600">
                To become India's most trusted consultancy
                platform for entrepreneurs and organizations.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">

        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                500+
              </h2>
              <p>Registrations</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-emerald-400">
                200+
              </h2>
              <p>NGO Projects</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-amber-400">
                98%
              </h2>
              <p>Success Rate</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-purple-400">
                24/7
              </h2>
              <p>Support</p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose ACS */}
      <section className="py-24 bg-white">

        <div className="container mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose ACS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <Users className="w-14 h-14 mx-auto text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold">
                Expert Team
              </h3>
            </div>

            <div className="text-center">
              <Award className="w-14 h-14 mx-auto text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold">
                Proven Experience
              </h3>
            </div>

            <div className="text-center">
              <ShieldCheck className="w-14 h-14 mx-auto text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold">
                Trusted Services
              </h3>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}