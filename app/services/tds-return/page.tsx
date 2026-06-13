"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  ShieldCheck,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function TDSReturnClient() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl font-black">
              TDS Return Filing
            </h1>

            <p className="mt-6 text-xl text-slate-300 max-w-3xl">
              Complete TDS compliance, quarterly return filing,
              correction returns and TAN services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Form 24Q",
            "Form 26Q",
            "Form 27Q",
            "Form 27EQ",
            "TDS Corrections",
            "TAN Services",
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <FileSpreadsheet className="mb-4 text-emerald-400" />
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-emerald-400" />

          <h2 className="text-4xl font-bold">
            Need TDS Filing Assistance?
          </h2>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+918009090599"
              className="bg-green-600 px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <Phone size={18} />
              +91 80090 90599
            </a>

            <a
              href="mailto:admin@acsconsultancy.in"
              className="bg-cyan-600 px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <Mail size={18} />
              admin@acsconsultancy.in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}