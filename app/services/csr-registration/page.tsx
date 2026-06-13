import {
  Building2,
  ShieldCheck,
  CheckCircle,
  FileText,
  Briefcase,
  Phone,
  Mail,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "CSR Registration & CSR-1 Filing | ACS Consultancy",
  description:
    "CSR Registration and CSR-1 Filing Assistance for NGOs, Trusts, Societies and Section 8 Companies.",
};

export default function CSRRegistrationPage() {
  const eligibility = [
    "Registered Trust",
    "Registered Society",
    "Section 8 Company",
    "Valid PAN",
    "Active Registration Certificate",
    "Compliant Governing Body",
  ];

  const documents = [
    "PAN Card of Organization",
    "Registration Certificate",
    "Trust Deed / MOA",
    "Board Resolution",
    "PAN of Authorized Signatory",
    "Email & Mobile Number",
    "Digital Signature (DSC)",
  ];

  const process = [
    "Document Collection",
    "Eligibility Verification",
    "CSR-1 Preparation",
    "MCA Filing",
    "Department Processing",
    "CSR Registration Approval",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-blue-800 py-3 text-center text-white">
        CSR Registration & CSR-1 Filing Assistance Portal
      </section>

      {/* Hero */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-6 py-14">
          <div className="flex items-center gap-3">
            <Landmark className="h-10 w-10 text-blue-700" />

            <div>
              <h1 className="text-4xl font-bold">
                CSR Registration (CSR-1)
              </h1>

              <p className="mt-2 text-slate-600">
                Professional CSR-1 Registration Assistance
                for NGOs, Trusts, Societies and Section 8 Companies.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
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

      {/* Eligibility */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold">
          Eligibility Criteria
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {eligibility.map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-6"
            >
              <CheckCircle className="mb-3 text-green-600" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-3xl font-bold">
            Required Documents
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
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

      {/* Benefits */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold">
          Benefits of CSR Registration
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Eligible for CSR Funding",
            "Enhanced Credibility",
            "Corporate Partnership Opportunities",
            "National Recognition",
            "Compliance with Companies Act",
            "Transparency & Governance",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-6"
            >
              <Briefcase className="mb-3 text-blue-700" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-3xl font-bold">
            Registration Process
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white">
                  {index + 1}
                </div>

                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-2xl border bg-white p-8">
          <h2 className="mb-6 text-2xl font-bold">
            Service Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <strong>Service Name:</strong>
              <p>CSR-1 Registration</p>
            </div>

            <div>
              <strong>Applicable Law:</strong>
              <p>Companies Act, 2013</p>
            </div>

            <div>
              <strong>Processing Time:</strong>
              <p>3–10 Working Days</p>
            </div>

            <div>
              <strong>Mode:</strong>
              <p>Online Filing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="container mx-auto px-6 py-8">
        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
          <h3 className="mb-2 font-bold">
            Important Notice
          </h3>

          <p>
            ACS Consultancy is a professional consultancy
            organization. We provide assistance in CSR-1 filing,
            documentation and compliance support. Government fees
            and statutory charges, if applicable, are payable separately.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-amber-400" />

          <h2 className="text-3xl font-bold">
            Need CSR Registration Assistance?
          </h2>

          <p className="mt-3 text-slate-300">
            Contact ACS Consultancy today.
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