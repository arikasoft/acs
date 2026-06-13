import type { Metadata } from "next";
import {
  UtensilsCrossed,
  ShieldCheck,
  CheckCircle,
  FileText,
  Store,
  Truck,
  Factory,
  Phone,
  Mail,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FSSAI License Registration | ACS Consultancy",
  description:
    "FSSAI License Registration Services for Food Businesses, Restaurants, Manufacturers, Retailers and Food Startups.",
};

export default function FSSAILicensePage() {
  const licenses = [
    "Basic FSSAI Registration",
    "State FSSAI License",
    "Central FSSAI License",
  ];

  const businesses = [
    "Restaurant",
    "Cloud Kitchen",
    "Food Manufacturer",
    "Food Distributor",
    "Retail Food Shop",
    "Bakery",
    "Dairy Business",
    "Food Startup",
  ];

  const documents = [
    "PAN Card",
    "Aadhaar Card",
    "Business Address Proof",
    "Passport Size Photograph",
    "Mobile Number",
    "Email ID",
    "Business Registration Proof",
    "Food Business Details",
  ];

  const process = [
    "Eligibility Check",
    "Document Collection",
    "Application Filing",
    "Department Verification",
    "License Approval",
    "Certificate Delivery",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-orange-500 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Food Safety & Compliance
            </span>

            <h1 className="mt-6 text-6xl font-black">
              FSSAI License Registration
            </h1>

            <p className="mt-6 text-xl text-green-50">
              Obtain your FSSAI Registration or License for
              restaurants, manufacturers, food startups,
              retailers and food businesses across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700"
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

      {/* License Types */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold text-slate-900">
          Types of FSSAI License
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {licenses.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-6 shadow-lg border"
            >
              <BadgeCheck className="mb-4 text-green-600" />
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Eligible Businesses */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-4xl font-bold text-slate-900">
            Who Needs FSSAI License?
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {businesses.map((item) => (
              <div
                key={item}
                className="rounded-xl border p-5 text-center bg-green-50"
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
          Required Documents
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-3 rounded-xl bg-white border p-4 shadow-sm"
            >
              <FileText className="text-orange-500" />
              {doc}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-green-50 py-16">
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
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  {index + 1}
                </div>

                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold text-slate-900">
          Benefits of FSSAI License
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Legal Compliance",
            "Consumer Trust",
            "Business Expansion",
            "Food Safety Assurance",
            "Government Recognition",
            "Brand Credibility",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white border p-6 shadow-sm"
            >
              <CheckCircle className="mb-3 text-green-600" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-6 h-14 w-14 text-green-400" />

          <h2 className="text-4xl font-bold">
            Need FSSAI Registration Assistance?
          </h2>

          <p className="mt-4 text-slate-300">
            Restaurants • Food Startups • Manufacturers • Retailers
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
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3"
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