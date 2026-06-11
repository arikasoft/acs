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
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C197.81,89.17,126.63,95.4,0,72V0H1200V27.35c-58.09,18.89-123.06,40.92-218.09,48.65C740.77,95.47,618.3,12.39,321.39,56.44Z"
            fill="#0f172a"
          />
        </svg>
      </div>

      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container mx-auto px-6 pt-32 pb-10 relative z-10">

        <div className="grid gap-10 lg:grid-cols-5 md:grid-cols-2">

          {/* Company */}
          <div>
            <h2 className="text-4xl font-black mb-4">
              ACS <span className="text-emerald-400">Consultancy</span>
            </h2>

            <p className="text-slate-400 leading-7 text-sm">
              Professional Consultancy Services for Company Registration,
              NGO Registration, GST, Income Tax, Trademark, Startup,
              Legal Compliance and Business Growth Solutions.
            </p>

            <div className="flex gap-4 mt-6">

              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube />
              </Link>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-5">Services</h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/services/trust-registration" className="block hover:text-emerald-400">
                Trust Registration
              </Link>

              <Link href="/services/society-registration" className="block hover:text-emerald-400">
                Society Registration
              </Link>

              <Link href="/services/gst-registration" className="block hover:text-emerald-400">
                GST Registration
              </Link>

              <Link href="/services/trademark-registration" className="block hover:text-emerald-400">
                Trademark Registration
              </Link>

              <Link href="/services/private-limited-company" className="block hover:text-emerald-400">
                Private Limited Company
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/" className="block hover:text-emerald-400">Home</Link>
              <Link href="/about" className="block hover:text-emerald-400">About Us</Link>
              <Link href="/blog" className="block hover:text-emerald-400">Blog</Link>
              <Link href="/gallery" className="block hover:text-emerald-400">Gallery</Link>
              <Link href="/career" className="block hover:text-emerald-400">Career</Link>
              <Link href="/contact" className="block hover:text-emerald-400">Contact</Link>

            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-5">Legal</h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/privacy-policy" className="block hover:text-emerald-400">
                Privacy Policy
              </Link>

              <Link href="/terms-and-conditions" className="block hover:text-emerald-400">
                Terms & Conditions
              </Link>

              <Link href="/refund-policy" className="block hover:text-emerald-400">
                Refund Policy
              </Link>

              <Link href="/disclaimer" className="block hover:text-emerald-400">
                Disclaimer
              </Link>

              <Link href="/cookies-policy" className="block hover:text-emerald-400">
                Cookies Policy
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-bold mb-5">Contact Us</h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@acsconsultancy.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Darbhanga, Bihar, India</span>
              </div>

            </div>

            <div className="mt-6">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none"
              />

              <button
                className="
                w-full
                mt-3
                py-3
                rounded-xl
                bg-gradient-to-r
                from-emerald-600
                via-green-600
                to-emerald-700
                hover:scale-105
                transition-all
                duration-300
                font-bold
                shadow-lg
                "
              >
                Subscribe Now
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-slate-400 text-sm">

          <p>
            © {new Date().getFullYear()} ACS Consultancy. All Rights Reserved.
          </p>

          <p>
            Developed & Maintained by{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              ArikaSoft Technology Pvt. Ltd.
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}