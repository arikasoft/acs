import type { Metadata } from "next";
import {
  Briefcase,
  Users,
  GraduationCap,
  Trophy,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | ACS Consultancy",
  description:
    "Join ACS Consultancy and build your career in taxation, compliance, legal services, NGO consulting and technology.",
};

const jobs = [
  "Company Secretary (CS)",
  "Chartered Accountant (CA)",
  "GST Executive",
  "Income Tax Executive",
  "ROC Compliance Executive",
  "NGO Compliance Executive",
  "Legal Associate",
  "Business Development Executive",
  "Digital Marketing Executive",
  "React Developer",
  "Full Stack Developer",
  "Customer Support Executive",
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
            Join ACS Consultancy
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black">
            Build Your Career With Us
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-lg">
            Work with a fast-growing consultancy serving businesses,
            startups, NGOs, trusts, societies and professionals
            across India.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#jobs"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold"
            >
              View Open Positions
            </a>

            <a
              href="#apply"
              className="rounded-xl border border-white/20 px-6 py-3"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 -mt-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["1000+", "Clients Served"],
            ["20+", "Professional Services"],
            ["50+", "Projects Completed"],
            ["100%", "Growth Focused"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-700">
                {value}
              </div>
              <div className="text-slate-600 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Join ACS Consultancy?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Trophy className="h-10 w-10 text-blue-700" />,
              title: "Career Growth",
            },
            {
              icon: <GraduationCap className="h-10 w-10 text-blue-700" />,
              title: "Learning Opportunities",
            },
            {
              icon: <Users className="h-10 w-10 text-blue-700" />,
              title: "Collaborative Culture",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow p-8"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs */}
      <section
        id="jobs"
        className="bg-white py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Open Positions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job}
                className="border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xl">
                      {job}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      Full Time • India
                    </p>
                  </div>

                  <Briefcase className="text-blue-700" />
                </div>

                <button className="mt-6 flex items-center gap-2 text-blue-700 font-semibold">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Internship Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "CA Articleship",
            "CS Training",
            "Legal Internship",
            "Digital Marketing Internship",
            "Web Development Internship",
            "NGO Management Internship",
          ].map((item) => (
            <div
              key={item}
              className="bg-white shadow rounded-2xl p-6"
            >
              <CheckCircle className="text-green-600 mb-4" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recruitment Process
          </h2>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              "Apply",
              "Screening",
              "Interview",
              "Assessment",
              "Selection",
              "Offer Letter",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-xl p-5 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-700 text-white flex items-center justify-center">
                  {index + 1}
                </div>

                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section
        id="apply"
        className="container mx-auto px-6 py-20"
      >
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-bold mb-8">
            Apply Now
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Full Name"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="Email"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="Phone Number"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="Position Applied For"
              className="border rounded-xl p-4"
            />

            <textarea
              placeholder="Tell us about yourself"
              rows={5}
              className="md:col-span-2 border rounded-xl p-4"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-blue-700 text-white py-4 rounded-xl font-semibold"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Contact HR */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Contact HR Team
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Mail />
              careers@acsconsultancy.in
            </div>

            <div className="flex items-center gap-3">
              <Phone />
              +91 80090 90599
            </div>

            <div className="flex items-center gap-3">
              <MapPin />
              Chandauli, Uttar Pradesh
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}