import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Receipt,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Executive | ACS Consultancy Careers",
  description:
    "Apply for GST Executive position at ACS Consultancy.",
};

export default function GSTExecutivePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            GST Executive
          </h1>

          <p className="mt-4 max-w-3xl text-cyan-100">
            Join our indirect tax team and help businesses
            manage GST registrations, return filings and
            compliance requirements across India.
          </p>
        </div>
      </section>

      {/* Job Summary */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <div className="rounded-xl bg-white p-6 shadow">
            <Briefcase className="mb-3 text-cyan-600" />
            <h3 className="font-semibold">Employment</h3>
            <p>Full Time</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <MapPin className="mb-3 text-cyan-600" />
            <h3 className="font-semibold">Location</h3>
            <p>India</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-cyan-600" />
            <h3 className="font-semibold">Experience</h3>
            <p>1–5 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-cyan-600" />
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
            <li>✔ GST Registration Processing</li>
            <li>✔ GSTR-1 & GSTR-3B Filing</li>
            <li>✔ GST Reconciliation</li>
            <li>✔ GST Notice Handling</li>
            <li>✔ Client Coordination</li>
            <li>✔ Compliance Monitoring</li>
            <li>✔ GST Portal Operations</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Receipt className="text-cyan-600" />
              GST Return Filing
            </div>

            <div className="flex items-center gap-3">
              <FileCheck className="text-cyan-600" />
              GST Compliance
            </div>

            <div className="flex items-center gap-3">
              <Receipt className="text-cyan-600" />
              Reconciliation Skills
            </div>

            <div className="flex items-center gap-3">
              <FileCheck className="text-cyan-600" />
              GST Portal Knowledge
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Professional Development</li>
            <li>✔ Performance Incentives</li>
            <li>✔ Learning Opportunities</li>
            <li>✔ Career Advancement</li>
            <li>✔ Supportive Work Environment</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/career"
            className="rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white hover:bg-cyan-700"
          >
            Apply For This Position
          </Link>
        </div>
      </section>
    </main>
  );
}