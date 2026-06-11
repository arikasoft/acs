"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Landmark,
  Receipt,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition-all duration-300 hover:text-amber-300 ${pathname === href
          ? "text-amber-300 font-semibold"
          : "text-white"
        }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 shadow-xl">

        <div className="container mx-auto px-4">

          <div className="flex items-center justify-between h-16">

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">

              {navLink("/", "Home")}
              {navLink("/about", "About")}

              {/* Services */}
              <div className="group relative">

                <button className="flex items-center gap-1 text-white hover:text-amber-300 py-5">
                  Services
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 top-full h-6 w-full"></div>
                <div
                  className="
  absolute left-0 top-full
  opacity-0 invisible
  group-hover:opacity-100
  group-hover:visible
  group-hover:grid
  grid-cols-4
  gap-8
  bg-white
  rounded-3xl
  shadow-2xl
  p-8
  w-[1100px]
  text-slate-700
  transition-all
  duration-300
  z-50
  "
                >

                  {/* Company */}
                  <div>
                    <h3 className="flex items-center gap-2 text-teal-700 font-bold mb-4">
                      <Building2 size={18} />
                      Company
                    </h3>

                    <Link href="/services/private-limited-company" className="block py-1">
                      Private Limited
                    </Link>

                    <Link href="/services/llp-registration" className="block py-1">
                      LLP Registration
                    </Link>

                    <Link href="/services/opc-registration" className="block py-1">
                      OPC Registration
                    </Link>

                    <Link href="/services/section-8-company" className="block py-1">
                      Section 8 Company
                    </Link>
                  </div>

                  {/* NGO */}
                  <div>
                    <h3 className="flex items-center gap-2 text-emerald-700 font-bold mb-4">
                      <Landmark size={18} />
                      NGO Services
                    </h3>

                    <Link href="/services/trust-registration" className="block py-1">
                      Trust Registration
                    </Link>

                    <Link href="/services/society-registration" className="block py-1">
                      Society Registration
                    </Link>

                    <Link href="/services/ngo-darpan" className="block py-1">
                      NGO Darpan
                    </Link>

                    <Link href="/services/csr-registration" className="block py-1">
                      CSR Registration
                    </Link>

                    <Link href="/services/12a-registration" className="block py-1">
                      12A Registration
                    </Link>

                    <Link href="/services/80g-registration" className="block py-1">
                      80G Registration
                    </Link>
                  </div>

                  {/* GST */}
                  <div>
                    <h3 className="flex items-center gap-2 text-orange-600 font-bold mb-4">
                      <Receipt size={18} />
                      GST & Tax
                    </h3>

                    <Link href="/services/gst-registration" className="block py-1">
                      GST Registration
                    </Link>

                    <Link href="/services/gst-return-filing" className="block py-1">
                      GST Return Filing
                    </Link>

                    <Link href="/services/itr-filing" className="block py-1">
                      ITR Filing
                    </Link>

                    <Link href="/services/tds-return" className="block py-1">
                      TDS Return
                    </Link>
                  </div>

                  {/* Legal */}
                  <div>
                    <h3 className="flex items-center gap-2 text-purple-700 font-bold mb-4">
                      <ShieldCheck size={18} />
                      Legal
                    </h3>

                    <Link href="/services/trademark-registration" className="block py-1">
                      Trademark
                    </Link>

                    <Link href="/services/fssai-license" className="block py-1">
                      FSSAI License
                    </Link>

                    <Link href="/services/msme-registration" className="block py-1">
                      MSME Registration
                    </Link>

                    <Link href="/services/iec-code" className="block py-1">
                      IEC Code
                    </Link>
                  </div>

                </div>

              </div>

              {/* Resources */}
              <div className="group relative">

                <button className="flex items-center gap-1 text-white hover:text-amber-300">
                  Resources
                  <ChevronDown size={16} />
                </button>

                <div className="absolute top-12 left-0 hidden group-hover:block bg-white rounded-2xl shadow-2xl p-5 min-w-[260px]">

                  <Link href="/resources" className="block py-2 text-slate-700">
                    Download Forms
                  </Link>

                  <Link href="/resources" className="block py-2 text-slate-700">
                    GST Calculator
                  </Link>

                  <Link href="/resources" className="block py-2 text-slate-700">
                    Income Tax Calculator
                  </Link>

                  <Link href="/resources" className="block py-2 text-slate-700">
                    FAQ
                  </Link>

                  <Link href="/resources" className="block py-2 text-slate-700">
                    Knowledge Base
                  </Link>

                </div>

              </div>

              {navLink("/blog", "Blog")}
              {navLink("/gallery", "Gallery")}
              {navLink("/career", "Career")}
              {navLink("/testimonials", "Testimonials")}
              {navLink("/contact", "Contact")}

            </div>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center gap-3">

              <Link
                href="/login"
                className="px-4 py-2 rounded-xl border border-white/30 text-white hover:bg-white/10"
              >
                Login
              </Link>

              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold"
              >
                CRM Dashboard
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-amber-400 text-slate-900 font-bold hover:bg-amber-300"
              >
                <BookOpen size={18} />
                Free Consultation
              </Link>

            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>
      </nav>

      {/* Quick Service Strip */}
      <div className="hidden xl:block bg-white border-b border-slate-200">

        <div className="container mx-auto px-4">

          <div className="flex items-center justify-center gap-8 py-2 text-sm font-medium text-slate-600">

            <Link href="/services/gst-registration">
              GST Registration
            </Link>

            <Link href="/services/trademark-registration">
              Trademark
            </Link>

            <Link href="/services/trust-registration">
              Trust Registration
            </Link>

            <Link href="/services/society-registration">
              Society Registration
            </Link>

            <Link href="/services/private-limited-company">
              Pvt Ltd Company
            </Link>

            <Link href="/services/ngo-darpan">
              NGO Darpan
            </Link>

          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-950 text-white shadow-2xl">

          <div className="flex flex-col p-5 space-y-4">

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/career">Career</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login</Link>
            <Link href="/dashboard">Dashboard</Link>

          </div>

        </div>
      )}
    </>
  );
}