import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Megaphone,
  BarChart3,
  Search,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Executive | ACS Consultancy Careers",
  description:
    "Apply for Digital Marketing Executive position at ACS Consultancy.",
};

export default function DigitalMarketingExecutivePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Digital Marketing Executive
          </h1>

          <p className="mt-4 max-w-3xl text-pink-100">
            Help ACS Consultancy grow its online presence,
            generate leads, manage campaigns and build
            brand awareness across digital platforms.
          </p>
        </div>
      </section>

      {/* Job Summary */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <div className="rounded-xl bg-white p-6 shadow">
            <Briefcase className="mb-3 text-pink-600" />
            <h3 className="font-semibold">Employment</h3>
            <p>Full Time</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <MapPin className="mb-3 text-pink-600" />
            <h3 className="font-semibold">Location</h3>
            <p>India / Remote</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-pink-600" />
            <h3 className="font-semibold">Experience</h3>
            <p>1–4 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-pink-600" />
            <h3 className="font-semibold">Qualification</h3>
            <p>Graduate / Marketing Background</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Key Responsibilities
          </h2>

          <ul className="space-y-3">
            <li>✔ SEO & Website Optimization</li>
            <li>✔ Social Media Management</li>
            <li>✔ Google Ads Campaigns</li>
            <li>✔ Lead Generation Activities</li>
            <li>✔ Content Marketing</li>
            <li>✔ Email Marketing Campaigns</li>
            <li>✔ Performance Tracking & Reporting</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Search className="text-pink-600" />
              SEO Knowledge
            </div>

            <div className="flex items-center gap-3">
              <Megaphone className="text-pink-600" />
              Social Media Marketing
            </div>

            <div className="flex items-center gap-3">
              <BarChart3 className="text-pink-600" />
              Analytics & Reporting
            </div>

            <div className="flex items-center gap-3">
              <Globe className="text-pink-600" />
              Digital Campaign Management
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Creative Work Environment</li>
            <li>✔ Learning & Certifications</li>
            <li>✔ Performance Incentives</li>
            <li>✔ Career Growth Opportunities</li>
            <li>✔ Flexible Work Culture</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/career"
            className="rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white hover:bg-pink-700"
          >
            Apply For This Position
          </Link>
        </div>
      </section>
    </main>
  );
}