import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Calculator,
  FileText,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Income Tax Executive | ACS Consultancy Careers",
  description:
    "Apply for Income Tax Executive position at ACS Consultancy.",
};

export default function IncomeTaxExecutivePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Income Tax Executive
          </h1>

          <p className="mt-4 max-w-3xl text-purple-100">
            Join our taxation team and assist individuals,
            businesses, NGOs and startups with income tax
            compliance, return filing and advisory services.
          </p>
        </div>
      </section>

      {/* Job Details */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <div className="rounded-xl bg-white p-6 shadow">
            <Briefcase className="mb-3 text-purple-600" />
            <h3 className="font-semibold">Employment</h3>
            <p>Full Time</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <MapPin className="mb-3 text-purple-600" />
            <h3 className="font-semibold">Location</h3>
            <p>India</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-purple-600" />
            <h3 className="font-semibold">Experience</h3>
            <p>1–5 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-purple-600" />
            <h3 className="font-semibold">Qualification</h3>
            <p>B.Com / M.Com / CA Inter</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Key Responsibilities
          </h2>

          <ul className="space-y-3">
            <li>✔ Income Tax Return Filing (ITR-1 to ITR-7)</li>
            <li>✔ Income Tax Notice Handling</li>
            <li>✔ Tax Computation & Review</li>
            <li>✔ AIS/TIS Reconciliation</li>
            <li>✔ Tax Planning Support</li>
            <li>✔ Client Communication</li>
            <li>✔ E-Filing Portal Operations</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Calculator className="text-purple-600" />
              Income Tax Computation
            </div>

            <div className="flex items-center gap-3">
              <FileText className="text-purple-600" />
              ITR Filing Knowledge
            </div>

            <div className="flex items-center gap-3">
              <Landmark className="text-purple-600" />
              Income Tax Portal
            </div>

            <div className="flex items-center gap-3">
              <FileText className="text-purple-600" />
              Notice Compliance
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Taxation Career Growth</li>
            <li>✔ Exposure to Diverse Clients</li>
            <li>✔ Continuous Learning</li>
            <li>✔ Performance-Based Incentives</li>
            <li>✔ Leadership Opportunities</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/career"
            className="rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white hover:bg-purple-700"
          >
            Apply For This Position
          </Link>
        </div>
      </section>
    </main>
  );
}