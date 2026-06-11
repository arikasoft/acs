const faqs = [
  {
    question: "How long does company registration take?",
    answer: "Usually 7–15 working days depending on approvals.",
  },
  {
    question: "Can you help with NGO registration?",
    answer: "Yes, Trust, Society, Section 8 and NGO Darpan services available.",
  },
  {
    question: "Do you provide GST filing services?",
    answer: "Yes, GST registration, return filing and compliance support.",
  },
  {
    question: "Do you work across India?",
    answer: "Yes, ACS Consultancy serves clients across India.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">
              FAQ
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-lg">
                  {faq.question}
                </h3>

                <p className="mt-3 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}