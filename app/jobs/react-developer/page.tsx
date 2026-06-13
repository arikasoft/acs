import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Code2,
  MonitorSmartphone,
  Database,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "React Developer | ACS Consultancy Careers",
  description:
    "Apply for React Developer position at ACS Consultancy.",
};

export default function ReactDeveloperPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-900 via-sky-700 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            React Developer
          </h1>

          <p className="mt-4 max-w-3xl text-cyan-100">
            Build modern web applications, portals and SaaS
            platforms using React, Next.js and modern frontend
            technologies.
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
            <p>Remote / Hybrid</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-cyan-600" />
            <h3 className="font-semibold">Experience</h3>
            <p>1–4 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-cyan-600" />
            <h3 className="font-semibold">Qualification</h3>
            <p>BCA / MCA / B.Tech / Equivalent</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Key Responsibilities
          </h2>

          <ul className="space-y-3">
            <li>✔ Develop React & Next.js Applications</li>
            <li>✔ Build Responsive User Interfaces</li>
            <li>✔ API Integration</li>
            <li>✔ Optimize Performance & SEO</li>
            <li>✔ Component-Based Development</li>
            <li>✔ Collaborate with Backend Team</li>
            <li>✔ Bug Fixing & Maintenance</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Code2 className="text-cyan-600" />
              React.js
            </div>

            <div className="flex items-center gap-3">
              <MonitorSmartphone className="text-cyan-600" />
              Next.js
            </div>

            <div className="flex items-center gap-3">
              <Database className="text-cyan-600" />
              REST APIs
            </div>

            <div className="flex items-center gap-3">
              <Cpu className="text-cyan-600" />
              TypeScript & JavaScript
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Remote Work Opportunities</li>
            <li>✔ Latest Technology Stack</li>
            <li>✔ Career Growth</li>
            <li>✔ Learning & Certification Support</li>
            <li>✔ Performance Bonuses</li>
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