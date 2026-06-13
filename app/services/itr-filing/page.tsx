"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Calculator,
  Landmark,
  Receipt,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function ITRFilingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 opacity-20 blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="rounded-full border border-violet-400 px-4 py-2 text-sm">
              ACS Consultancy
            </span>

            <h1 className="mt-6 text-6xl font-black">
              Income Tax Services
            </h1>

            <p className="mt-6 max-w-3xl text-slate-300 text-xl">
              ITR Filing, Income Tax Notices, Tax Planning,
              NGO Tax Compliance, Business Taxation &
              Refund Assistance.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="/contact"
                className="rounded-xl bg-violet-600 px-6 py-3"
              >
                File Your Return
              </a>

              <a
                href="tel:+918009090599"
                className="rounded-xl border px-6 py-3"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Income Tax Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "ITR-1 Filing",
            "ITR-2 Filing",
            "ITR-3 Filing",
            "ITR-4 Filing",
            "Income Tax Notice Reply",
            "Tax Planning",
            "Capital Gains Tax",
            "Refund Assistance",
            "Business Tax Filing",
            "NGO Tax Compliance",
            "PAN Services",
            "TAN Services",
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <FileText className="mb-4 text-cyan-400" />
              <h3 className="font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Who We Serve
        </h2>

        <div className="grid md:grid-cols-5 gap-5">
          {[
            "Salaried",
            "Freelancers",
            "Consultants",
            "Businesses",
            "NGOs",
            "Trusts",
            "Societies",
            "LLPs",
            "Companies",
            "Startups",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white/5 border border-white/10 p-5 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Filing Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Consultation",
            "Document Review",
            "Tax Computation",
            "E-Filing",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600">
                {index + 1}
              </div>

              {step}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 p-12 text-center">
            <Shield className="mx-auto mb-6 h-12 w-12" />

            <h2 className="text-4xl font-bold">
              Need Income Tax Assistance?
            </h2>

            <p className="mt-4 text-slate-300">
              ITR Filing • Notices • Refunds • NGO Taxation •
              Business Compliance
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+918009090599"
                className="rounded-xl bg-green-600 px-6 py-3 flex items-center gap-2"
              >
                <Phone size={18} />
                +91 80090 90599
              </a>

              <a
                href="mailto:admin@acsconsultancy.in"
                className="rounded-xl bg-cyan-600 px-6 py-3 flex items-center gap-2"
              >
                <Mail size={18} />
                admin@acsconsultancy.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}