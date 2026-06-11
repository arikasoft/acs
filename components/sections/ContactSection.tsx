import HeroSection from "@/components/sections/HeroSection";
import TrustedClientsSection from "@/components/sections/TrustedClientsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CounterSection from "@/components/sections/CounterSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactLeadForm from "@/components/sections/ContactLeadForm";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* Hero */}
      <HeroSection />

      {/* Trusted Companies & NGOs */}
      <TrustedClientsSection />

      {/* About ACS */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Statistics */}
      <CounterSection />

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Process */}
      <ProcessSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* FAQ */}
      <FAQSection />

      {/* Lead Form */}
      <ContactLeadForm />

      {/* Call To Action */}
      <CTASection />

    </main>
  );
}