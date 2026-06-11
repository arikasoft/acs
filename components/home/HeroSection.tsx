"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-emerald-50">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              <BadgeCheck size={16} />
              Trusted Business Consultancy
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mt-6 leading-tight">
              Business Registration &
              <span className="text-teal-700">
                {" "}Compliance Services
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Company Registration, NGO Registration,
              GST, Trademark, ROC Compliance,
              Income Tax and Legal Services under one roof.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-2xl font-semibold flex items-center gap-2"
              >
                Free Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="border-2 border-slate-300 hover:border-teal-600 px-6 py-4 rounded-2xl font-semibold"
              >
                Explore Services
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-teal-700">
                  500+
                </h3>
                <p className="text-slate-600">
                  Registrations
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-emerald-700">
                  200+
                </h3>
                <p className="text-slate-600">
                  NGO Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-600">
                  98%
                </h3>
                <p className="text-slate-600">
                  Success Rate
                </p>
              </div>

            </div>

          </div>

          {/* Right Cards */}
          <div className="relative">

            <div className="grid gap-5">

              <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
                    <Building2 className="text-cyan-700" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl">
                      Company Registration
                    </h3>

                    <p className="text-slate-500">
                      Pvt Ltd, LLP, OPC
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Landmark className="text-emerald-700" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl">
                      NGO Registration
                    </h3>

                    <p className="text-slate-500">
                      Trust, Society, 12A, 80G
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <ShieldCheck className="text-orange-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl">
                      GST & Trademark
                    </h3>

                    <p className="text-slate-500">
                      Compliance & Protection
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}