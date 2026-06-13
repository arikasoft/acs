import {
  Receipt,
  CheckCircle,
  FileText,
  ShieldCheck,
  Phone,
  Mail,
  Building2,
  Calculator,
} from "lucide-react";

export const metadata = {
  title: "GST Registration | ACS Consultancy",
  description:
    "GST Registration Services by ACS Consultancy. Fast and hassle-free GST registration with expert support.",
};

export default function GSTRegistrationPage() {
  const benefits = [
    "Legal GST Compliance",
    "Input Tax Credit (ITC)",
    "Business Expansion Across India",
    "Improved Business Credibility",
    "Eligibility for Government Tenders",
    "E-Commerce Seller Compliance",
  ];

  const documents = [
    "PAN Card",
    "Aadhaar Card",
    "Passport Size Photograph",
    "Mobile Number",
    "Email Address",
    "Business Address Proof",
    "Bank Account Details",
    "Business Registration Proof (if applicable)",
  ];

  const process = [
    "Document Collection",
    "Application Preparation",
    "GST Portal Filing",
    "Verification Process",
    "GSTIN Generation",
    "GST Certificate Issuance",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Government Style Header */}
      <section className="bg-blue-800 py-3 text-center text-white">
        GST Registration Assistance Portal
      </section>

      {/* Hero Section */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-6 py-14">
          <div className="flex items-center gap-4">
            <Receipt className="h-12 w-12 text-blue-700" />

            <div>
              <h1 className="text-4xl font-bold">
                GST Registration
              </h1>

              <p className="mt-2 text-slate-600">
                Obtain your GST Registration Certificate with
                professional assistance from ACS Consultancy.
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
          Benefits of GST Registration
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

      {/* Registration Process */}
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
              <p>GST Registration</p>
            </div>

            <div>
              <strong>Authority:</strong>
              <p>GST Network (GSTN)</p>
            </div>

            <div>
              <strong>Mode:</strong>
              <p>Online Filing</p>
            </div>

            <div>
              <strong>Applicable Law:</strong>
              <p>CGST Act, 2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold">
          Who Needs GST Registration?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6">
            <Building2 className="mb-3 text-blue-700" />
            Business Owners
          </div>

          <div className="rounded-xl border bg-white p-6">
            <Calculator className="mb-3 text-blue-700" />
            Professionals & Consultants
          </div>

          <div className="rounded-xl border bg-white p-6">
            <Receipt className="mb-3 text-blue-700" />
            E-Commerce Sellers
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
            ACS Consultancy provides professional assistance
            for GST Registration. GSTIN issuance is subject
            to verification and approval by the GST authorities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-amber-400" />

          <h2 className="text-3xl font-bold">
            Need GST Registration?
          </h2>

          <p className="mt-3 text-slate-300">
            Contact ACS Consultancy today for expert assistance.
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