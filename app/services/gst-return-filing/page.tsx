import {
  FileCheck,
  Calendar,
  CheckCircle,
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  AlertTriangle,
  Calculator,
} from "lucide-react";

export const metadata = {
  title: "GST Return Filing | ACS Consultancy",
  description:
    "Professional GST Return Filing Services including GSTR-1, GSTR-3B, Annual Return and Compliance Support.",
};

export default function GSTReturnFilingPage() {
  const returns = [
    "GSTR-1",
    "GSTR-3B",
    "GSTR-9",
    "GSTR-9C",
    "Nil Return Filing",
    "GST Amendment Services",
  ];

  const benefits = [
    "Avoid Late Fees & Penalties",
    "Maintain GST Compliance",
    "Input Tax Credit Reconciliation",
    "Accurate Return Filing",
    "Professional Support",
    "Timely Submission",
  ];

  const documents = [
    "GST Login Credentials",
    "Sales Invoices",
    "Purchase Invoices",
    "Bank Statements",
    "Expense Records",
    "Previous GST Returns",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top Banner */}
      <section className="bg-blue-800 py-3 text-center text-white">
        GST Return Filing Assistance Portal
      </section>

      {/* Hero Section */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-6 py-14">
          <div className="flex items-center gap-4">
            <FileCheck className="h-12 w-12 text-blue-700" />

            <div>
              <h1 className="text-4xl font-bold">
                GST Return Filing
              </h1>

              <p className="mt-2 text-slate-600">
                Timely and accurate GST Return Filing with
                expert support from ACS Consultancy.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-blue-700 px-6 py-3 text-white"
            >
              File Return Now
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

      {/* GST Returns Covered */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold">
          GST Returns Covered
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {returns.map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-6"
            >
              <Calculator className="mb-3 text-blue-700" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-3xl font-bold">
            Benefits of Professional Filing
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-xl border p-6"
              >
                <CheckCircle className="mb-3 text-green-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold">
          Required Documents
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-3 rounded-lg border bg-white p-4"
            >
              <FileText className="text-blue-700" />
              {doc}
            </div>
          ))}
        </div>
      </section>

      {/* Filing Process */}
      <section className="bg-slate-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-3xl font-bold">
            Filing Process
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Document Collection",
              "Data Review",
              "GST Return Preparation",
              "Return Filing",
            ].map((step, index) => (
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

      {/* Due Dates */}
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-2xl border bg-white p-8">
          <h2 className="mb-6 text-2xl font-bold">
            Important GST Compliance
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Calendar className="mb-2 text-blue-700" />
              <strong>Regular Return Filing</strong>
              <p>
                Timely filing helps avoid penalties and notices.
              </p>
            </div>

            <div>
              <AlertTriangle className="mb-2 text-amber-500" />
              <strong>Late Filing</strong>
              <p>
                Delay may attract late fees, interest and compliance issues.
              </p>
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
            ACS Consultancy provides professional GST Return
            Filing assistance. Filing obligations and due dates
            are governed by applicable GST laws and regulations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-amber-400" />

          <h2 className="text-3xl font-bold">
            Need GST Return Filing Support?
          </h2>

          <p className="mt-3 text-slate-300">
            ACS Consultancy can help you stay compliant.
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