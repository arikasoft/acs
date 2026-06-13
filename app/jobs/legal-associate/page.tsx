import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Scale,
  FileText,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Associate | ACS Consultancy Careers",
  description:
    "Apply for Legal Associate position at ACS Consultancy.",
};

export default function LegalAssociatePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Legal Associate
          </h1>

          <p className="mt-4 max-w-3xl text-orange-100">
            Join our legal team and support businesses,
            NGOs, trusts, societies and startups with
            registrations, agreements and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Job Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <div className="rounded-xl bg-white p-6 shadow">
            <Briefcase className="mb-3 text-orange-700" />
            <h3 className="font-semibold">Employment</h3>
            <p>Full Time</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <MapPin className="mb-3 text-orange-700" />
            <h3 className="font-semibold">Location</h3>
            <p>India</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-orange-700" />
            <h3 className="font-semibold">Experience</h3>
            <p>1–5 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-orange-700" />
            <h3 className="font-semibold">Qualification</h3>
            <p>LLB / LLM</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Key Responsibilities
          </h2>

          <ul className="space-y-3">
            <li>✔ Legal Drafting & Documentation</li>
            <li>✔ Agreement Review & Preparation</li>
            <li>✔ Regulatory Compliance Support</li>
            <li>✔ Trust, Society & NGO Legal Matters</li>
            <li>✔ Corporate Documentation</li>
            <li>✔ Legal Research & Advisory</li>
            <li>✔ Client Consultation Support</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Scale className="text-orange-700" />
              Legal Drafting
            </div>

            <div className="flex items-center gap-3">
              <FileText className="text-orange-700" />
              Contract Management
            </div>

            <div className="flex items-center gap-3">
              <Shield className="text-orange-700" />
              Compliance Knowledge
            </div>

            <div className="flex items-center gap-3">
              <Scale className="text-orange-700" />
              Legal Research
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Exposure to Diverse Legal Matters</li>
            <li>✔ Professional Development</li>
            <li>✔ Career Advancement Opportunities</li>
            <li>✔ Learning & Training Support</li>
            <li>✔ Performance Incentives</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/career"
            className="rounded-xl bg-orange-700 px-8 py-4 font-semibold text-white hover:bg-orange-800"
          >
            Apply For This Position
          </Link>
        </div>
      </section>
    </main>
  );
}