import type { Metadata } from "next";
import {
  Shield,
  BadgeCheck,
  Search,
  FileCheck,
  Award,
  Phone,
  Mail,
  Globe,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trademark Registration | ACS Consultancy",
  description:
    "Trademark Registration Services for Brand Name, Logo, Slogan and Business Identity Protection.",
};

export default function TrademarkRegistrationPage() {
  const benefits = [
    "Legal Brand Protection",
    "Exclusive Rights to Use Mark",
    "Build Customer Trust",
    "Protection Against Infringement",
    "Nationwide Recognition",
    "Valuable Intellectual Property Asset",
  ];

  const documents = [
    "PAN Card",
    "Aadhaar Card",
    "Business Registration Proof",
    "Logo (if available)",
    "Brand Name",
    "Address Proof",
    "Mobile Number",
    "Email ID",
  ];

  const process = [
    "Trademark Search",
    "Application Preparation",
    "TM Filing",
    "Examination",
    "Publication",
    "Registration Certificate",
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-amber-500 to-orange-600 opacity-20 blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <span className="rounded-full border border-amber-400 px-4 py-2 text-sm text-amber-300">
              Intellectual Property Protection
            </span>

            <h1 className="mt-6 text-6xl font-black">
              Trademark Registration
            </h1>

            <p className="mt-6 text-xl text-slate-300">
              Protect your brand name, logo, slogan and business identity
              with professional trademark registration services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black"
              >
                Apply Now
              </a>

              <a
                href="tel:+918009090599"
                className="rounded-xl border border-white/20 px-6 py-3"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">
          Benefits of Trademark Registration
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <CheckCircle className="mb-4 text-green-400" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="bg-black/20 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-4xl font-bold">
            Required Documents
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <FileCheck className="text-amber-400" />
                {doc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">
          Registration Process
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {process.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black font-bold">
                {index + 1}
              </div>

              {step}
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">
          What Can Be Registered?
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Brand Name",
            "Logo",
            "Tagline",
            "Business Name",
            "Product Name",
            "Service Name",
            "Packaging",
            "Label Design",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Service Info */}
      <section className="container mx-auto px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="mb-8 text-3xl font-bold">
            Service Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <strong>Authority</strong>
              <p>Controller General of Patents, Designs & Trademarks</p>
            </div>

            <div>
              <strong>Validity</strong>
              <p>10 Years (Renewable)</p>
            </div>

            <div>
              <strong>Coverage</strong>
              <p>Across India</p>
            </div>

            <div>
              <strong>Mode</strong>
              <p>Online Filing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-red-700/20 to-amber-500/20 border border-white/10 p-12 text-center">
            <Shield className="mx-auto mb-6 h-14 w-14 text-amber-400" />

            <h2 className="text-4xl font-bold">
              Protect Your Brand Today
            </h2>

            <p className="mt-4 text-slate-300">
              Trademark Registration • Logo Protection • Brand Security
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918009090599"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3"
              >
                <Phone size={18} />
                +91 80090 90599
              </a>

              <a
                href="mailto:admin@acsconsultancy.in"
                className="flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-black"
              >
                <Mail size={18} />
                admin@acsconsultancy.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}