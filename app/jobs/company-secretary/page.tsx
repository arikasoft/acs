import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Company Secretary (CS) | ACS Consultancy Careers",
  description: "Apply for Company Secretary position at ACS Consultancy.",
};

export default function CompanySecretaryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Company Secretary (CS)
          </h1>
          <p className="mt-4 text-slate-300">
            Join ACS Consultancy and build your professional career.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-5 rounded-xl shadow">
            <Briefcase />
            <p className="mt-2">Full Time</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <MapPin />
            <p className="mt-2">India</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <Clock />
            <p className="mt-2">1–5 Years</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <GraduationCap />
            <p className="mt-2">CS Qualified</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Responsibilities
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>ROC Compliance Management</li>
          <li>Board Meeting Documentation</li>
          <li>MCA Filings</li>
          <li>Corporate Governance Support</li>
        </ul>

        <h2 className="text-3xl font-bold mt-10 mb-4">
          Requirements
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Qualified Company Secretary</li>
          <li>Knowledge of MCA Portal</li>
          <li>Good Communication Skills</li>
          <li>Compliance Experience Preferred</li>
        </ul>

        <div className="mt-12">
          <Link
            href="/career"
            className="bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}