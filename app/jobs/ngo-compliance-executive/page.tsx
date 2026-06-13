import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  HeartHandshake,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "NGO Compliance Executive | ACS Consultancy Careers",
  description:
    "Apply for NGO Compliance Executive position at ACS Consultancy.",
};

export default function NGOComplianceExecutivePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-emerald-800 to-teal-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            NGO Compliance Executive
          </h1>

          <p className="mt-4 max-w-3xl text-green-100">
            Help Trusts, Societies, NGOs and Section 8 Companies
            maintain legal compliance, registrations and regulatory filings.
          </p>
        </div>
      </section>

      {/* Job Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <div className="rounded-xl bg-white p-6 shadow">
            <Briefcase className="mb-3 text-green-700" />
            <h3 className="font-semibold">Employment</h3>
            <p>Full Time</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <MapPin className="mb-3 text-green-700" />
            <h3 className="font-semibold">Location</h3>
            <p>India</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-green-700" />
            <h3 className="font-semibold">Experience</h3>
            <p>1–5 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-green-700" />
            <h3 className="font-semibold">Qualification</h3>
            <p>Graduate / CS / Law / NGO Management</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Key Responsibilities
          </h2>

          <ul className="space-y-3">
            <li>✔ NGO Registration Support</li>
            <li>✔ Trust & Society Compliance</li>
            <li>✔ NGO Darpan Registration</li>
            <li>✔ CSR-1 Filing Support</li>
            <li>✔ 12A & 80G Compliance</li>
            <li>✔ Annual Return & Documentation</li>
            <li>✔ Client Coordination & Advisory</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <HeartHandshake className="text-green-700" />
              NGO Sector Knowledge
            </div>

            <div className="flex items-center gap-3">
              <FileCheck className="text-green-700" />
              Documentation Skills
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-700" />
              Regulatory Compliance
            </div>

            <div className="flex items-center gap-3">
              <FileCheck className="text-green-700" />
              Government Portal Handling
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Work with NGOs Across India</li>
            <li>✔ Compliance & Legal Exposure</li>
            <li>✔ Professional Growth Opportunities</li>
            <li>✔ Learning & Development</li>
            <li>✔ Performance-Based Incentives</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/career"
            className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
          >
            Apply For This Position
          </Link>
        </div>
      </section>
    </main>
  );
}