"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  ArrowRight,
  Building2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const slides = [
  {
    title: "Business Registration Made Easy",
    subtitle:
      "Private Limited, LLP, OPC & Startup Registration Services",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    title: "NGO Registration & Compliance",
    subtitle:
      "Trust, Society, NGO Darpan, 12A & 80G Registration",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "GST & Trademark Experts",
    subtitle:
      "GST Registration, Return Filing and Trademark Protection",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
];

export default function SlideSection() {
  return (
    <section className="relative">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-[750px]"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div
              className="relative h-[750px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 container mx-auto px-6 h-full flex items-center">

                <div className="max-w-3xl text-white">

                  <span className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400 px-4 py-2 rounded-full mb-6">

                    <ShieldCheck size={18} />
                    Trusted Consultancy Services

                  </span>

                  <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight animate-pulse">

                    {slide.title}

                  </h1>

                  <p className="mt-6 text-xl text-slate-200">

                    {slide.subtitle}

                  </p>

                  <div className="flex flex-wrap gap-4 mt-10">

                    <Link
                      href="/contact"
                      className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition"
                    >
                      Free Consultation
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href="/services"
                      className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
                    >
                      Explore Services
                    </Link>

                  </div>

                  {/* Counters */}
                  <div className="grid grid-cols-3 gap-8 mt-16">

                    <div>
                      <h2 className="text-4xl font-bold text-amber-400">
                        500+
                      </h2>
                      <p>Registrations</p>
                    </div>

                    <div>
                      <h2 className="text-4xl font-bold text-emerald-400">
                        200+
                      </h2>
                      <p>NGO Projects</p>
                    </div>

                    <div>
                      <h2 className="text-4xl font-bold text-cyan-400">
                        98%
                      </h2>
                      <p>Success Rate</p>
                    </div>

                  </div>

                </div>

              </div>

              {/* Floating Cards */}

              <div className="hidden xl:block">

                <div className="absolute right-24 top-40 bg-white rounded-3xl p-6 shadow-2xl animate-bounce">

                  <Building2
                    size={40}
                    className="text-teal-600 mb-2"
                  />

                  <h3 className="font-bold">
                    Company Registration
                  </h3>

                </div>

                <div className="absolute right-40 bottom-40 bg-white rounded-3xl p-6 shadow-2xl animate-pulse">

                  <Landmark
                    size={40}
                    className="text-emerald-600 mb-2"
                  />

                  <h3 className="font-bold">
                    NGO Registration
                  </h3>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-white"
        >
          <path d="M321.39,56.44C197.74,90.22,0,0,0,0V120H1200V0s-194.78,92.73-321.39,56.44C758.8,25.29,644.08,0,480,20.36,403.45,29.76,363.92,47.72,321.39,56.44Z" />
        </svg>
      </div>

    </section>
  );
}