"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const subject = encodeURIComponent(
      `ACS Consultancy Inquiry - ${formData.get("name")}`
    );

    const body = encodeURIComponent(`
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Service: ${formData.get("service")}

Message:
${formData.get("message")}
`);

    window.location.href = `mailto:admin@acsconsultancy.in?subject=${subject}&body=${body}`;

    setLoading(false);
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            Contact ACS Consultancy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg"
          >
            Expert Assistance for Company Registration, GST,
            ROC Compliance, NGO Registration, Trademark &
            Business Consultancy Services.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <Phone className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-lg">Phone</h3>
            <a
              href="tel:+918009090599"
              className="text-slate-600"
            >
              +91 80090 90599
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <Mail className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-lg">Email</h3>
            <a
              href="mailto:admin@acsconsultancy.in"
              className="text-slate-600"
            >
              admin@acsconsultancy.in
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <MapPin className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-lg">Office</h3>
            <p className="text-slate-600">
              ACS Office, Sanghati (OM Fuel Pump),
              Chandauli-232120, Varanasi,
              Uttar Pradesh
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                name="name"
                required
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <select
                name="service"
                className="w-full border rounded-xl p-4"
              >
                <option>Company Registration</option>
                <option>GST Registration</option>
                <option>NGO Registration</option>
                <option>Trademark Registration</option>
                <option>ROC Compliance</option>
                <option>Income Tax Filing</option>
              </select>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full border rounded-xl p-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>

          {/* Office Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                Office Information
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <Clock className="text-blue-700" />
                  <div>
                    <h4 className="font-semibold">
                      Working Hours
                    </h4>
                    <p>
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="text-green-600" />
                  <div>
                    <h4 className="font-semibold">
                      WhatsApp Support
                    </h4>
                    <a
                      href="https://wa.me/918009090599"
                      target="_blank"
                      className="text-green-600"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=OM%20Fuel%20Pump%20Chandauli&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <a
        href="https://wa.me/918009090599"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50"
      >
        <MessageCircle />
      </a>
    </main>
  );
}