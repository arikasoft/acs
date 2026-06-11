const testimonials = [
  {
    name: "Rahul Kumar",
    company: "Startup Founder",
    review:
      "ACS Consultancy helped us complete company registration quickly and professionally.",
  },
  {
    name: "Priya Sharma",
    company: "NGO Director",
    review:
      "Excellent guidance for Trust Registration and NGO compliance.",
  },
  {
    name: "Amit Singh",
    company: "Business Owner",
    review:
      "Professional GST and taxation support. Highly recommended.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8"
            >
              <p className="text-slate-600 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-slate-500 text-sm">
                  {item.company}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}