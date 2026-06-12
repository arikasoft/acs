"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#071A3D] to-[#000814] text-white">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-40 w-full"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V0H1200V95.8C1132.19,118.92,1057.52,111.31,985.66,92.83Z"
            fill="#071A3D"
          />
        </svg>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-0 h-96 w-96 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-emerald-500/10 blur-[120px]" />
      <div className="absolute top-40 right-40 h-72 w-72 bg-blue-500/10 blur-[100px]" />

      <div className="container mx-auto px-6 pt-36 pb-10 relative z-10">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-4xl font-black tracking-wide mb-4">
              <span className="text-white">ACS</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Consultancy
              </span>
            </h2>

            <p className="text-slate-300 leading-7 text-sm">
              ACS Consultancy provides professional services for
              Company Registration, NGO Registration, Trust Registration,
              Society Registration, Section 8 Company, GST Registration,
              Income Tax, Trademark, Startup Advisory, Legal Compliance
              and Business Growth Solutions.
            </p>

            <div className="flex gap-4 mt-6">

              <Link
                href="#"
                className="h-11 w-11 rounded-full bg-slate-800/70 border border-slate-700 flex items-center justify-center hover:scale-110 transition-all"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="h-11 w-11 rounded-full bg-slate-800/70 border border-slate-700 flex items-center justify-center hover:scale-110 transition-all"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="h-11 w-11 rounded-full bg-slate-800/70 border border-slate-700 flex items-center justify-center hover:scale-110 transition-all"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="h-11 w-11 rounded-full bg-slate-800/70 border border-slate-700 flex items-center justify-center hover:scale-110 transition-all"
              >
                <FaYoutube />
              </Link>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">
              Services
            </h3>

            <div className="space-y-3 text-slate-300">
              <Link href="/services/trust-registration" className="block hover:text-cyan-400">Trust Registration</Link>
              <Link href="/services/society-registration" className="block hover:text-cyan-400">Society Registration</Link>
              <Link href="/services/gst-registration" className="block hover:text-cyan-400">GST Registration</Link>
              <Link href="/services/trademark-registration" className="block hover:text-cyan-400">Trademark Registration</Link>
              <Link href="/services/private-limited-company" className="block hover:text-cyan-400">Private Limited Company</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">
              Quick Links
            </h3>

            <div className="space-y-3 text-slate-300">
              <Link href="/" className="block hover:text-cyan-400">Home</Link>
              <Link href="/about" className="block hover:text-cyan-400">About Us</Link>
              <Link href="/blog" className="block hover:text-cyan-400">Blog</Link>
              <Link href="/gallery" className="block hover:text-cyan-400">Gallery</Link>
              <Link href="/career" className="block hover:text-cyan-400">Career</Link>
              <Link href="/contact" className="block hover:text-cyan-400">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">
              Legal
            </h3>

            <div className="space-y-3 text-slate-300">
              <Link href="/privacy-policy" className="block hover:text-cyan-400">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="block hover:text-cyan-400">Terms & Conditions</Link>
              <Link href="/refund-policy" className="block hover:text-cyan-400">Refund Policy</Link>
              <Link href="/disclaimer" className="block hover:text-cyan-400">Disclaimer</Link>
            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-bold mb-5 text-white">
              Contact Us
            </h3>

            <div className="space-y-5 text-slate-300">

              <div className="flex gap-3">
                <Phone className="text-emerald-400 mt-1" size={18} />
                <a href="tel:+918009090599">
                  +91 80090 90599
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-cyan-400 mt-1" size={18} />
                <a href="mailto:admin@acsconsultancy.in">
                  admin@acsconsultancy.in
                </a>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-orange-400 mt-1" size={18} />
                <span>
                  ACS Office, Sanghati (OM Fuel Pump),
                  Chandauli - 232120,
                  Varanasi, Uttar Pradesh, India
                </span>
              </div>

            </div>

            <div className="mt-6">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white"
              />

              <button
                className="mt-3 w-full rounded-xl py-3 font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 hover:scale-[1.02] transition-all"
              >
                Subscribe Newsletter
              </button>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">

            <p className="text-slate-400">
              © {new Date().getFullYear()} ACS Consultancy.
              All Rights Reserved.
            </p>

            <p className="text-slate-400">
              Designed, Developed & Maintained by{" "}
              <a
                href="https://arikasoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-400"
              >
                ArikaSoft Technology Pvt. Ltd.
              </a>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
