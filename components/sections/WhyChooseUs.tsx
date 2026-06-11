import {
  ShieldCheck,
  Users,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Consultancy",
    desc: "Professional registration and compliance support.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Experienced consultants and legal advisors.",
  },
  {
    icon: Clock3,
    title: "Fast Processing",
    desc: "Quick documentation and filing process.",
  },
  {
    icon: BadgeCheck,
    title: "100% Compliance",
    desc: "Reliable and transparent service delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase">
            Why Choose ACS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Your Trusted Business Partner
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}