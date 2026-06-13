import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Code2,
  Database,
  Server,
  Layers3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full Stack Developer | ACS Consultancy Careers",
  description:
    "Apply for Full Stack Developer position at ACS Consultancy.",
};

export default function FullStackDeveloperPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-violet-900 via-purple-800 to-fuchsia-700 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            ACS Consultancy Careers
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Full Stack Developer
          </h1>

          <p className="mt-4 max-w-3xl text-purple-100">
            Build scalable web applications, business portals,
            CRM systems and SaaS products using modern frontend
            and backend technologies.
          </p>
        </div>
      </section>

      {/* Job Summary */}
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
            <p>Remote / Hybrid</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-purple-600" />
            <h3 className="font-semibold">Experience</h3>
            <p>2–6 Years</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-3 text-purple-600" />
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
            <li>✔ Develop End-to-End Web Applications</li>
            <li>✔ Frontend Development using React & Next.js</li>
            <li>✔ Backend API Development</li>
            <li>✔ Database Design & Management</li>
            <li>✔ Authentication & Security Implementation</li>
            <li>✔ Performance Optimization</li>
            <li>✔ Deployment & Maintenance</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Required Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Code2 className="text-purple-600" />
              React.js / Next.js
            </div>

            <div className="flex items-center gap-3">
              <Server className="text-purple-600" />
              Node.js / API Development
            </div>

            <div className="flex items-center gap-3">
              <Database className="text-purple-600" />
              MySQL / PostgreSQL
            </div>

            <div className="flex items-center gap-3">
              <Layers3 className="text-purple-600" />
              Full Stack Architecture
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-3xl font-bold">
            Benefits
          </h2>

          <ul className="space-y-3">
            <li>✔ Modern Development Environment</li>
            <li>✔ Remote Work Opportunities</li>
            <li>✔ Learning Budget & Certifications</li>
            <li>✔ Career Advancement</li>
            <li>✔ Performance Incentives</li>
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