import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  Search,
  MessageCircleMore,
  ShieldCheck,
} from "lucide-react";

export default function MainHeader() {
  return (
    <header className="bg-white shadow-sm">

      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center justify-between py-3 gap-4">

          {/* Logo Area */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="ACS Consultancy"
              width={60}
              height={60}
              className="rounded-xl object-contain"
              priority
            />

            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
                ACS Consultancy
              </h1>

              <p className="text-slate-500 text-xs">
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
                className="w-[280px] h-10 rounded-full border border-slate-300 pl-10 pr-4 outline-none focus:border-blue-500"
              />

              <Search
                size={16}
                className="absolute left-3 top-3 text-slate-500"
              />

            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-wrap items-center gap-3">

            <div className="hidden md:flex items-center gap-2">

              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <ShieldCheck
                  size={18}
                  className="text-emerald-600"
                />
              </div>

              <div>
                <p className="text-[11px] text-slate-500">
                  Trusted Consultancy
                </p>

                <p className="font-semibold text-sm text-slate-800">
                  Since 2018
                </p>
              </div>

            </div>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              <PhoneCall size={16} />
              Call
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              <MessageCircleMore size={16} />
              WhatsApp
            </a>

          </div>

        </div>

      </div>

      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500"></div>

    </header>
  );
}