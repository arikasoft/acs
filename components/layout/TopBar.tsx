import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  BadgeCheck,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white border-b border-slate-800">

      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 py-2">

          {/* Left Side */}
          <div className="flex flex-wrap items-center gap-4 text-sm">

            <div className="flex items-center gap-2 text-slate-200">
              <Phone size={14} />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-2 text-slate-200">
              <Mail size={14} />
              <span>info@acsconsultancy.in</span>
            </div>

            <div className="hidden xl:flex items-center gap-2 text-slate-200">
              <MapPin size={14} />
              <span>Darbhanga, Bihar, India</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-emerald-400">
              <Clock3 size={14} />
              <span>Mon - Sat : 09:00 AM - 06:00 PM</span>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-wrap items-center gap-2 text-xs">

            <span className="flex items-center gap-1 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
              <BadgeCheck size={12} />
              GST
            </span>

            <span className="flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">
              <BadgeCheck size={12} />
              NGO
            </span>

            <span className="flex items-center gap-1 bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">
              <BadgeCheck size={12} />
              ROC
            </span>

            <span className="flex items-center gap-1 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
              <BadgeCheck size={12} />
              Trademark
            </span>

            <div className="hidden md:flex items-center gap-3 ml-2">

              <Link
                href="/contact"
                className="text-cyan-300 hover:text-white transition"
              >
                Support
              </Link>

              <span className="text-slate-600">|</span>

              <Link
                href="/career"
                className="text-cyan-300 hover:text-white transition"
              >
                Career
              </Link>

              <span className="text-slate-600">|</span>

              <Link
                href="/contact"
                className="text-cyan-300 hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}