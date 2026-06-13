import {
  Building2,
  CheckCircle,
  Clock,
  FileText,
  ShieldCheck,
  Users,
  Phone,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Society Registration | ACS Consultancy",
  description:
    "Online Society Registration Assistance by ACS Consultancy.",
};

export default function SocietyRegistrationPage() {
  const documents = [
    "Aadhaar Card of Members",
    "PAN Card of Members",
    "Passport Size Photographs",
    "Registered Office Address Proof",
    "Memorandum of Association (MOA)",
    "Rules & Regulations",
  ];

  const steps = [
    "Application Consultation",
    "Document Verification",
    "MOA & Rules Drafting",
    "Application Filing",
    "Department Verification",
    "Certificate Issuance",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Government Style Header */}
      <section className="bg-blue-800 text-white">
        <div className="container mx-auto px-6 py-3 text-center text-sm font-medium">
          Society Registration Assistance Portal | ACS Consultancy
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-10 w-10 text-blue-700" />
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Society Registration
              </h1>
              <p className="text-slate-600">
                Professional Assistance for Society Registration
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-blue-700 px-6 py-3 text-white"
            >
              Apply Now
            </a>

            <a
              href="tel:+918009090599"
              className="rounded-lg border px-6 py-3"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Online Filing",
            "Expert Support",
            "Document Verification",
            "PAN India Service",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-6 shadow-sm border"
            >
              <CheckCircle className="mb-3 text-green-600" />
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Service Information */}
      <section className="container mx-auto px-6 py-10">
        <div className="rounded-2xl bg-white border p-8">
          <h2 className="mb-6 text-2xl font-bold">
            Service Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <strong>Service Name:</strong>
              <p>Society Registration</p>
            </div>

            <div>
              <strong>Processing Time:</strong>
              <p>15–30 Working Days</p>
            </div>

            <div>
              <strong>Applicable Law:</strong>
              <p>Societies Registration Act, 1860</p>
            </div>

            <div>
              <strong>Mode:</strong>
              <p>Online / Offline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="mb-8 text-2xl font-bold">
          Eligibility Criteria
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Minimum 7 Members",
            "Registered Office Address",
            "Governing Body Required",
            "MOA & Rules Required",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-5"
            >
              <Users className="mb-3 text-blue-700" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-2xl font-bold">
            Required Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 rounded-lg border p-4"
              >
                <FileText className="text-blue-700" />
                {doc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-2xl font-bold">
          Registration Process
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-xl bg-white border p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white">
                {index + 1}
              </div>

              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notice */}
      <section className="container mx-auto px-6 py-8">
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
          <h3 className="font-bold mb-2">
            Important Notice
          </h3>

          <p className="text-slate-700">
            ACS Consultancy is a professional consultancy
            service provider and is not a Government
            Department. Government fees, stamp duty and
            statutory charges shall be payable separately
            wherever applicable.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-amber-400" />

          <h2 className="text-3xl font-bold">
            Need Assistance?
          </h2>

          <p className="mt-3 text-slate-300">
            Contact ACS Consultancy for Society Registration
            support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918009090599"
              className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3"
            >
              <Phone size={18} />
              +91 80090 90599
            </a>

            <a
              href="mailto:admin@acsconsultancy.in"
              className="flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3"
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