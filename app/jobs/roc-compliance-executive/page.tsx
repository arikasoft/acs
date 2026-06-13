import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Building2,
  FileCheck,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ROC Compliance Executive | ACS Consultancy Careers",
  description:
    "Apply for ROC Compliance Executive position at ACS Consultancy.",
};

export default function ROCComplianceExecutivePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            ROC Compliance Executive
          </h1>

          <p className="mt-4 max-w-3xl text-blue-100">
            Work with companies, LLPs and startups to manage
            MCA filings, annual compliances and corporate
            governance requirements.
          </p>
        </div>
      </section>

      {/* Job Summary */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow">
            <Briefcase className="mb-3 text-blue-700" />
            <h3 className="font-semibold">Employment</h3>
            <p>Full Time</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <MapPin className="mb-3 text-blue-700" />
            <h3 className="font-semibold">Location</h3>
            <p>India</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-blue-700" />
            <h3 className="font-semibold">Experience</h3>
            <p>1–5 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-blue-700" />
            <h3 className="font-semibold">Qualification</h3>
            <p>B.Com / CS / CS Executive</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Key Responsibilities
          </h2>

          <ul className="space-y-3">
            <li>✔ Annual ROC Filings</li>
            <li>✔ MCA Portal Compliance</li>
            <li>✔ DIR, MGT & AOC Form Filing</li>
            <li>✔ Company Incorporation Support</li>
            <li>✔ LLP Compliance Management</li>
            <li>✔ Board Resolution Documentation</li>
            <li>✔ Client Coordination</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Building2 className="text-blue-700" />
              MCA Portal Knowledge
            </div>

            <div className="flex items-center gap-3">
              <FileCheck className="text-blue-700" />
              ROC Filing Experience
            </div>

            <div className="flex items-center gap-3">
              <Shield className="text-blue-700" />
              Corporate Compliance
            </div>

            <div className="flex items-center gap-3">
              <FileCheck className="text-blue-700" />
              Documentation Skills
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Corporate Law Exposure</li>
            <li>✔ Professional Development</li>
            <li>✔ Compliance Expertise Growth</li>
            <li>✔ Performance Incentives</li>
            <li>✔ Long-Term Career Opportunities</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/career"
            className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800"
          >
            Apply For This Position
          </Link>
        </div>
      </section>
    </main>
  );
}