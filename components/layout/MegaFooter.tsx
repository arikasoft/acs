import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function MegaFooter() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              ACS Consultancy
            </h3>

            <p className="text-slate-400">
              Registration, Compliance,
              NGO, GST, Trademark and
              Business Consultancy Services.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Company
            </h4>

            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Services
            </h4>

            <ul className="space-y-2">
              <li><Link href="/services/gst-registration">GST</Link></li>
              <li><Link href="/services/trademark-registration">Trademark</Link></li>
              <li><Link href="/services/trust-registration">Trust</Link></li>
              <li><Link href="/services/society-registration">Society</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Contact
            </h4>

            <div className="space-y-3">

              <p className="flex gap-2">
                <Phone size={18}/>
                +91 9876543210
              </p>

              <p className="flex gap-2">
                <Mail size={18}/>
                info@acsconsultancy.in
              </p>

              <p className="flex gap-2">
                <MapPin size={18}/>
                Darbhanga, Bihar
              </p>

            </div>
          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-5 text-center text-slate-400">
        © 2026 ACS Consultancy. All Rights Reserved.
      </div>

    </footer>
  );
}