import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Development Executive | ACS Consultancy Careers",
  description:
    "Apply for Business Development Executive position at ACS Consultancy.",
};

export default function BusinessDevelopmentExecutivePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Business Development Executive
          </h1>

          <p className="mt-4 max-w-3xl text-blue-100">
            Help ACS Consultancy grow by generating leads,
            building client relationships and expanding our
            professional services across India.
          </p>
        </div>
      </section>

      {/* Job Info */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <div className="rounded-xl bg-white p-6 shadow">
            <Briefcase className="mb-3 text-blue-700" />
            <h3 className="font-semibold">Employment</h3>
            <p>Full Time</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <MapPin className="mb-3 text-blue-700" />
            <h3 className="font-semibold">Location</h3>
            <p>India / Remote</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-blue-700" />
            <h3 className="font-semibold">Experience</h3>
            <p>0–5 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-blue-700" />
            <h3 className="font-semibold">Qualification</h3>
            <p>Graduate / MBA Preferred</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Key Responsibilities
          </h2>

          <ul className="space-y-3">
            <li>✔ Generate Business Leads</li>
            <li>✔ Client Relationship Management</li>
            <li>✔ Sales & Revenue Growth</li>
            <li>✔ Service Presentation & Consultation</li>
            <li>✔ Market Research & Competitor Analysis</li>
            <li>✔ Follow-Up & Conversion Management</li>
            <li>✔ CRM & Reporting Activities</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-blue-700" />
              Sales & Lead Generation
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-blue-700" />
              Client Communication
            </div>

            <div className="flex items-center gap-3">
              <Target className="text-blue-700" />
              Target Achievement
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-blue-700" />
              Negotiation Skills
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Attractive Incentive Structure</li>
            <li>✔ Career Growth Opportunities</li>
            <li>✔ Performance Rewards</li>
            <li>✔ Learning & Development</li>
            <li>✔ Leadership Exposure</li>
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