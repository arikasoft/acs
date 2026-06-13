import {
  Award,
  CheckCircle,
  FileText,
  Landmark,
  ShieldCheck,
  Phone,
  Mail,
  Gift,
} from "lucide-react";

export const metadata = {
  title: "80G Registration | ACS Consultancy",
  description:
    "80G Registration Assistance for Trusts, Societies and Section 8 Companies.",
};

export default function Registration80GPage() {
  const benefits = [
    "Tax Deduction for Donors",
    "Increased Donor Confidence",
    "Higher Fundraising Opportunities",
    "Enhanced NGO Credibility",
    "Recognition under Income Tax Act",
    "Better CSR Funding Prospects",
  ];

  const documents = [
    "NGO Registration Certificate",
    "PAN Card of NGO",
    "12A Registration Certificate",
    "Trust Deed / MOA",
    "Financial Statements",
    "Activity Report",
    "Bank Account Details",
  ];

  const process = [
    "Document Collection",
    "Eligibility Verification",
    "Application Preparation",
    "Income Tax Portal Filing",
    "Department Review",
    "80G Registration Approval",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top Header */}
      <section className="bg-blue-800 py-3 text-center text-white">
        80G Registration Assistance Portal
      </section>

      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-14">
          <div className="flex items-center gap-3">
            <Gift className="h-10 w-10 text-blue-700" />

            <div>
              <h1 className="text-4xl font-bold">
                80G Registration
              </h1>

              <p className="mt-2 text-slate-600">
                Help your donors claim income tax benefits
                through 80G Registration.
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

      {/* Benefits */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold">
          Benefits of 80G Registration
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
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
                {step}
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
              <strong>Service:</strong>
              <p>80G Registration</p>
            </div>

            <div>
              <strong>Authority:</strong>
              <p>Income Tax Department</p>
            </div>

            <div>
              <strong>Mode:</strong>
              <p>Online Filing</p>
            </div>

            <div>
              <strong>Applicable Law:</strong>
              <p>Income Tax Act, 1961</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="container mx-auto px-6 py-8">
        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
          <h3 className="mb-2 font-bold">
            Important Notice
          </h3>

          <p>
            ACS Consultancy provides professional assistance
            for 80G registration. Approval is subject to
            verification and decision by the Income Tax Department.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-amber-400" />

          <h2 className="text-3xl font-bold">
            Need 80G Registration Assistance?
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