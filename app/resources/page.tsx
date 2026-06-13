import Link from "next/link";
import {
  BookOpen,
  Calculator,
  FileText,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Resources | ArikaSoft",
  description:
    "Explore calculators, forms, FAQs, and knowledge resources from ArikaSoft.",
};

const resources = [
  {
    title: "Knowledge Base",
    description: "Browse guides, tutorials, and documentation.",
    href: "/resources/knowledge-base",
    icon: BookOpen,
  },
  {
    title: "FAQ",
    description: "Find answers to frequently asked questions.",
    href: "/resources/faq",
    icon: HelpCircle,
  },
  {
    title: "Download Forms",
    description: "Access official forms and downloadable documents.",
    href: "/resources/download-forms",
    icon: FileText,
  },
  {
    title: "GST Calculator",
    description: "Calculate GST inclusive and exclusive amounts.",
    href: "/resources/gst-calculator",
    icon: Calculator,
  },
  {
    title: "Income Tax Calculator",
    description: "Estimate your annual income tax liability.",
    href: "/resources/income-tax-calculator",
    icon: Calculator,
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Resources Center</h1>

          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Access calculators, forms, FAQs, documentation, and business
            resources from ArikaSoft Private Limited.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    {item.title}
                  </h2>

                  <p className="text-slate-600 mb-5">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-700 font-semibold">
                    Open Resource
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl border shadow-sm p-10 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Need More Help?
            </h2>

            <p className="text-slate-600 mb-6">
              Our support team is available to help with your business,
              technology, and compliance requirements.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}