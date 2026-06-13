import Link from "next/link";
import {
  BookOpen,
  FileText,
  HelpCircle,
  Calculator,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Knowledge Base | ArikaSoft",
  description:
    "Explore guides, tutorials, FAQs, calculators, and resources from ArikaSoft.",
};

const resources = [
  {
    title: "Frequently Asked Questions",
    description:
      "Find answers to commonly asked questions about our services and solutions.",
    href: "/resources/faq",
    icon: HelpCircle,
  },
  {
    title: "Download Forms",
    description:
      "Download official forms, applications, and business documents.",
    href: "/resources/download-forms",
    icon: FileText,
  },
  {
    title: "GST Calculator",
    description:
      "Calculate GST inclusive and exclusive amounts instantly.",
    href: "/resources/gst-calculator",
    icon: Calculator,
  },
  {
    title: "Income Tax Calculator",
    description:
      "Estimate your annual income tax liability quickly.",
    href: "/resources/income-tax-calculator",
    icon: Calculator,
  },
];

export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Knowledge Base
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Access guides, FAQs, calculators, forms, and helpful resources
            designed to support businesses, professionals, and clients.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group bg-white rounded-3xl p-8 shadow-md border hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-4 rounded-2xl">
                      <Icon className="w-8 h-8 text-blue-700" />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-800 mb-3">
                        {resource.title}
                      </h2>

                      <p className="text-slate-600 leading-relaxed">
                        {resource.description}
                      </p>

                      <div className="flex items-center gap-2 mt-5 text-blue-700 font-semibold">
                        Explore Resource
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-md border p-10 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Need Additional Assistance?
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              If you cannot find the information you are looking for,
              our support team is available to assist you.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}