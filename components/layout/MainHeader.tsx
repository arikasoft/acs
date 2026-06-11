import Link from "next/link";
import {
  PhoneCall,
  Search,
  MessageCircleMore,
  ShieldCheck,
} from "lucide-react";

export default function MainHeader() {
  return (
    <header className="bg-white">

      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center justify-between py-5 gap-5">

          {/* Logo Area */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-xl">

              <span className="text-white text-3xl font-black">
                ACS
              </span>

            </div>

            <div>

              <h1 className="text-3xl font-extrabold text-slate-900">
                ACS Consultancy
              </h1>

              <p className="text-slate-500 text-sm">
                Registration • Compliance • Advisory
              </p>

            </div>

          </Link>

          {/* Search */}
          <div className="hidden xl:flex items-center">

            <div className="relative">

              <input
                type="text"
                placeholder="Search services..."
                className="w-[350px] h-12 rounded-full border border-slate-300 pl-12 pr-5 outline-none focus:border-amber-500"
              />

              <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-500"
              />

            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-wrap items-center gap-4">

            <div className="hidden md:flex items-center gap-3">

              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <ShieldCheck
                  size={22}
                  className="text-emerald-600"
                />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Trusted Consultancy
                </p>

                <p className="font-bold text-slate-800">
                  Since 2018
                </p>
              </div>

            </div>

            {/* Call Button */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              <PhoneCall size={18} />
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              <MessageCircleMore size={18} />
              WhatsApp
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Highlight Bar */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-emerald-500"></div>

    </header>
  );
}