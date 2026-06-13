import {
  BadgeCheck,
  Building2,
  FileText,
  ShieldCheck,
  CheckCircle,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "NGO Darpan Registration | ACS Consultancy",
  description:
    "NGO Darpan Registration Assistance by ACS Consultancy.",
};

export default function NGODarpanPage() {
  const benefits = [
    "Unique NGO Darpan ID",
    "Recognition on Government Portal",
    "Required for Many Government Grants",
    "Improved Transparency",
    "Centralized NGO Profile",
    "Easy Department Verification",
  ];

  const documents = [
    "NGO Registration Certificate",
    "PAN Card of NGO",
    "PAN of Office Bearers",
    "Aadhaar of Authorized Person",
    "Mobile Number",
    "Email ID",
    "Address Proof",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-blue-800 text-white py-3 text-center">
        NGO Darpan Registration Assistance Portal
      </section>

      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-14">
          <div className="flex items-center gap-3">
            <Building2 className="h-10 w-10 text-blue-700" />

            <div>
              <h1 className="text-4xl font-bold">
                NGO Darpan Registration
              </h1>

              <p className="text-slate-600 mt-2">
                Get your NGO registered on the NGO Darpan
                Portal with ACS Consultancy.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Apply Now
            </a>

            <a
              href="tel:+918009090599"
              className="border px-6 py-3 rounded-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Benefits of NGO Darpan
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div
              key={item}
              className="bg-white border rounded-xl p-6"
            >
              <CheckCircle className="text-green-600 mb-3" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Required Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div
                key={doc}
                className="border rounded-lg p-4 flex items-center gap-3"
              >
                <FileText className="text-blue-700" />
                {doc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Registration Process
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            "Document Collection",
            "Verification",
            "Portal Registration",
            "Application Submission",
            "NGO Darpan ID Generation",
          ].map((step, index) => (
            <div
              key={step}
              className="bg-white border rounded-xl p-5 text-center"
            >
              <div className="h-10 w-10 rounded-full bg-blue-700 text-white flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>

              {step}
            </div>
          ))}
        </div>
      </section>

      {/* Service Information */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Service Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <strong>Service Name:</strong>
              <p>NGO Darpan Registration</p>
            </div>

            <div>
              <strong>Mode:</strong>
              <p>Online</p>
            </div>

            <div>
              <strong>Processing Time:</strong>
              <p>2–7 Working Days</p>
            </div>

            <div>
              <strong>Eligibility:</strong>
              <p>
                Trust, Society, Section 8 Company
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="container mx-auto px-6 py-8">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
          <h3 className="font-bold mb-2">
            Important Notice
          </h3>

          <p>
            ACS Consultancy is a consultancy service provider.
            We assist applicants in NGO Darpan registration
            and documentation. We are not a Government
            Department.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-amber-400 mb-4" />

          <h2 className="text-3xl font-bold">
            Need NGO Darpan Registration?
          </h2>

          <p className="text-slate-300 mt-3">
            Contact ACS Consultancy today.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+918009090599"
              className="bg-green-600 px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Phone size={18} />
              +91 80090 90599
            </a>

            <a
              href="mailto:admin@acsconsultancy.in"
              className="bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2"
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