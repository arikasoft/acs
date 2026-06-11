const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "Discuss your business and compliance requirements.",
  },
  {
    step: "02",
    title: "Documentation",
    desc: "Collect and verify all required documents.",
  },
  {
    step: "03",
    title: "Processing",
    desc: "Registration and filing by our experts.",
  },
  {
    step: "04",
    title: "Completion",
    desc: "Receive certificates and compliance support.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase">
            Our Process
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Simple & Transparent Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="text-5xl font-bold text-blue-600">
                {item.step}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}