import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Calculator,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chartered Accountant (CA) | ACS Consultancy Careers",
  description:
    "Apply for Chartered Accountant position at ACS Consultancy.",
};

export default function CharteredAccountantPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="text-5xl font-bold mt-6">
            Chartered Accountant (CA)
          </h1>

          <p className="mt-4 text-green-100 max-w-3xl">
            Join our growing tax and compliance team and help
            businesses, NGOs and startups stay financially compliant.
          </p>
        </div>
      </section>

      {/* Job Info */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow p-6">
            <Briefcase className="text-green-600 mb-3" />
            <h3 className="font-semibold">Employment</h3>
            <p>Full Time</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <MapPin className="text-green-600 mb-3" />
            <h3 className="font-semibold">Location</h3>
            <p>India</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <Clock className="text-green-600 mb-3" />
            <h3 className="font-semibold">Experience</h3>
            <p>2–7 Years</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <GraduationCap className="text-green-600 mb-3" />
            <h3 className="font-semibold">Qualification</h3>
            <p>Qualified CA</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Responsibilities
          </h2>

          <ul className="space-y-3">
            <li>✔ Income Tax Return Filing</li>
            <li>✔ GST Compliance & Advisory</li>
            <li>✔ Tax Audit Support</li>
            <li>✔ Financial Statement Review</li>
            <li>✔ Client Consultation</li>
            <li>✔ Tax Planning & Advisory</li>
            <li>✔ Compliance Management</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Required Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Calculator className="text-green-600" />
              Income Tax Knowledge
            </div>

            <div className="flex items-center gap-3">
              <FileText className="text-green-600" />
              GST Compliance
            </div>

            <div className="flex items-center gap-3">
              <Calculator className="text-green-600" />
              Audit & Accounts
            </div>

            <div className="flex items-center gap-3">
              <FileText className="text-green-600" />
              Financial Reporting
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Professional Growth</li>
            <li>✔ Leadership Exposure</li>
            <li>✔ Performance Incentives</li>
            <li>✔ Learning Opportunities</li>
            <li>✔ Flexible Work Environment</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/career"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Apply For This Position
          </Link>
        </div>
      </section>
    </main>
  );
}