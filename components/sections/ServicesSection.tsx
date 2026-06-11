import Link from "next/link";
import {
  Building2,
  Landmark,
  Receipt,
  ShieldCheck,
  ArrowRight,
  Briefcase,
  FileCheck,
  Scale,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Registration",
    desc: "Private Limited, LLP, OPC Registration",
    link: "/services/private-limited-company",
  },
  {
    icon: Landmark,
    title: "NGO Registration",
    desc: "Trust, Society, Section 8 Company",
    link: "/services/trust-registration",
  },
  {
    icon: Receipt,
    title: "GST Services",
    desc: "GST Registration & Return Filing",
    link: "/services/gst-registration",
  },
  {
    icon: ShieldCheck,
    title: "Trademark",
    desc: "Brand Protection & Registration",
    link: "/services/trademark-registration",
  },
  {
    icon: Briefcase,
    title: "MSME Registration",
    desc: "Udyam Registration Services",
    link: "/services/msme-registration",
  },
  {
    icon: FileCheck,
    title: "12A & 80G",
    desc: "NGO Tax Exemption Approval",
    link: "/services/12a-registration",
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    desc: "ROC Filing & Annual Compliance",
    link: "/services/roc-filing",
  },
  {
    icon: Building2,
    title: "FSSAI License",
    desc: "Food Business Registration",
    link: "/services/fssai-license",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container mx-auto px-4">

        <div className="text-center mb-14">

          <span className="text-teal-600 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Professional Business Solutions
          </h2>

          <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
            End-to-end consultancy services for startups,
            businesses, NGOs and professionals.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center mb-6">

                  <Icon
                    size={32}
                    className="text-teal-700"
                  />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  {service.desc}
                </p>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-teal-700 font-semibold group-hover:text-emerald-600"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}