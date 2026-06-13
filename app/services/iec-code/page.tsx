import type { Metadata } from "next";
import {
  Globe,
  Ship,
  Plane,
  FileCheck,
  Building2,
  CheckCircle,
  ShieldCheck,
  Phone,
  Mail,
  Package,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IEC Code Registration | ACS Consultancy",
  description:
    "Import Export Code (IEC) Registration Services for Exporters, Importers, Manufacturers, Traders and Startups.",
};

export default function IECCodePage() {
  const benefits = [
    "Start Import Business",
    "Start Export Business",
    "Global Market Access",
    "International Payments",
    "Government Export Benefits",
    "Business Expansion Opportunities",
  ];

  const documents = [
    "PAN Card",
    "Aadhaar Card",
    "Passport Size Photo",
    "Business Address Proof",
    "Cancelled Cheque",
    "Bank Account Details",
    "Email ID",
    "Mobile Number",
  ];

  const process = [
    "Document Collection",
    "Application Preparation",
    "DGFT Filing",
    "Verification",
    "IEC Generation",
    "Certificate Delivery",
  ];

  const businesses = [
    "Exporters",
    "Importers",
    "Manufacturers",
    "Wholesalers",
    "Traders",
    "E-Commerce Exporters",
    "Startups",
    "Private Limited Companies",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 opacity-20 blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <span className="rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-300">
              International Trade Services
            </span>

            <h1 className="mt-6 text-6xl font-black">
              IEC Code Registration
            </h1>

            <p className="mt-6 text-xl text-slate-300">
              Obtain your Import Export Code (IEC) and expand
              your business globally through international trade.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
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
          Benefits of IEC Registration
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <CheckCircle className="mb-4 text-green-400" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Eligible Businesses */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-4xl font-bold">
            Who Needs IEC?
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {businesses.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">
          Required Documents
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <FileCheck className="text-cyan-400" />
              {doc}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-4xl font-bold">
            Registration Process
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-black font-bold">
                  {index + 1}
                </div>

                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Opportunities */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">
          International Trade Opportunities
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Ship className="mb-4 text-cyan-400" />
            Export Goods Worldwide
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Plane className="mb-4 text-cyan-400" />
            Import International Products
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Package className="mb-4 text-cyan-400" />
            Cross-Border E-Commerce
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Globe className="mb-4 text-cyan-400" />
            Global Business Expansion
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="container mx-auto px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="mb-8 text-3xl font-bold">
            Service Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <strong>Registration</strong>
              <p>Import Export Code (IEC)</p>
            </div>

            <div>
              <strong>Authority</strong>
              <p>Directorate General of Foreign Trade (DGFT)</p>
            </div>

            <div>
              <strong>Validity</strong>
              <p>Lifetime (subject to applicable regulations)</p>
            </div>

            <div>
              <strong>Mode</strong>
              <p>Online Registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-700/20 to-cyan-500/20 p-12 text-center">
            <ShieldCheck className="mx-auto mb-6 h-14 w-14 text-cyan-400" />

            <h2 className="text-4xl font-bold">
              Ready to Go Global?
            </h2>

            <p className="mt-4 text-slate-300">
              IEC Registration • Export Business • Import Business
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
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-black"
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