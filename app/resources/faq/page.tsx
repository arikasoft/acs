import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "FAQ | ArikaSoft",
  description:
    "Frequently Asked Questions about ArikaSoft services, support, projects, and solutions.",
};

const faqs = [
  {
    question: "What services does ArikaSoft provide?",
    answer:
      "ArikaSoft provides software development, web development, mobile applications, cloud solutions, IT consulting, and digital transformation services.",
  },
  {
    question: "How can I request a project quotation?",
    answer:
      "You can submit your requirements through our Contact Us page, and our team will provide a detailed quotation.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes. We offer website maintenance, security monitoring, performance optimization, and technical support.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "Project timelines vary depending on complexity. Basic websites may take 1–2 weeks, while custom enterprise solutions may require several weeks or months.",
  },
  {
    question: "Do you provide custom software solutions?",
    answer:
      "Yes. We specialize in custom software tailored to business requirements and operational needs.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team through the Contact page, email, or phone support during business hours.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Find answers to the most common questions about ArikaSoft services,
            solutions, projects, and support.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-sm border p-6"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h2 className="text-lg font-semibold text-slate-800">
                    {faq.question}
                  </h2>

                  <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white border rounded-3xl shadow-sm p-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Still Have Questions?
            </h2>

            <p className="text-slate-600 mb-6">
              Our team is ready to assist you with any additional questions or
              project requirements.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}