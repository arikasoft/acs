import type { Metadata } from "next";
import {
  Building2,
  BadgeCheck,
  CheckCircle,
  FileText,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Phone,
  Mail,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MSME / Udyam Registration | ACS Consultancy",
  description:
    "MSME (Udyam) Registration Services for Startups, Small Businesses, Manufacturers and Service Providers.",
};

export default function MSMERegistrationPage() {
  const benefits = [
    "Government Recognition",
    "Easy Bank Loan Access",
    "Priority Sector Lending",
    "Subsidy Benefits",
    "Tender Participation",
    "Business Growth Support",
  ];

  const eligible = [
    "Proprietorship",
    "Partnership Firm",
    "LLP",
    "Private Limited Company",
    "One Person Company",
    "Service Providers",
    "Manufacturers",
    "Startups",
  ];

  const documents = [
    "Aadhaar Number",
    "PAN Card",
    "Mobile Number",
    "Email Address",
    "Business Address",
    "Bank Account Details",
    "Business Activity Information",
    "GST Number (if applicable)",
  ];

  const process = [
    "Business Information Collection",
    "Document Verification",
    "Udyam Registration Filing",
    "Government Processing",
    "Certificate Generation",
    "Certificate Delivery",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Startup & Business Growth Services
            </span>

            <h1 className="mt-6 text-6xl font-black">
              MSME / Udyam Registration
            </h1>

            <p className="mt-6 text-xl text-blue-50">
              Register your business under MSME (Udyam) and
              unlock government benefits, subsidies, loans,
              tenders and business growth opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700"
              >
                Apply Now
              </a>

              <a
                href="tel:+918009090599"
                className="rounded-xl border border-white px-6 py-3"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold text-slate-900">
          Benefits of MSME Registration
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white border p-6 shadow-sm"
            >
              <CheckCircle className="mb-4 text-green-600" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-4xl font-bold text-slate-900">
            Who Can Apply?
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {eligible.map((item) => (
              <div
                key={item}
                className="rounded-xl border p-5 text-center bg-blue-50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold text-slate-900">
          Required Information & Documents
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-3 rounded-xl bg-white border p-4 shadow-sm"
            >
              <FileText className="text-cyan-600" />
              {doc}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-4xl font-bold text-slate-900">
            Registration Process
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                  {index + 1}
                </div>

                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold text-slate-900">
          Why Register Under Udyam?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white border p-6">
            <TrendingUp className="mb-4 text-blue-600" />
            Better Growth Opportunities
          </div>

          <div className="rounded-2xl bg-white border p-6">
            <Briefcase className="mb-4 text-blue-600" />
            Government Tender Benefits
          </div>

          <div className="rounded-2xl bg-white border p-6">
            <Landmark className="mb-4 text-blue-600" />
            Easier Financial Assistance
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="container mx-auto px-6 py-16">
        <div className="rounded-3xl border bg-white p-10">
          <h2 className="mb-8 text-3xl font-bold">
            Service Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <strong>Registration Type</strong>
              <p>Udyam Registration</p>
            </div>

            <div>
              <strong>Authority</strong>
              <p>Ministry of MSME</p>
            </div>

            <div>
              <strong>Mode</strong>
              <p>Online Registration</p>
            </div>

            <div>
              <strong>Coverage</strong>
              <p>Across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-6 h-14 w-14 text-cyan-400" />

          <h2 className="text-4xl font-bold">
            Grow Your Business with MSME Registration
          </h2>

          <p className="mt-4 text-slate-300">
            Udyam Registration • Subsidies • Loans • Government Benefits
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
              className="flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3"
            >
              <Mail size={18} />
              admin@acsconsultancy.in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}