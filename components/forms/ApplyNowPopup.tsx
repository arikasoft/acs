"use client";

import { useEffect, useState } from "react";

export default function ApplyNowPopup() {
const [open, setOpen] = useState(false);

useEffect(() => {
const timer = setTimeout(() => {
setOpen(true);
}, 60000); // 1 Minute

return () => clearTimeout(timer);


}, []);

if (!open) return null;

return ( <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">

  <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative">

    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 text-2xl"
    >
      ×
    </button>

    <h2 className="text-3xl font-black text-center text-blue-900 mb-3">
      Apply Now
    </h2>

    <p className="text-center text-slate-500 mb-6">
      Get Free Section 8 Company Consultation
    </p>

    <form className="space-y-4">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        type="text"
        placeholder="Mobile Number"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border rounded-xl px-4 py-3"
      />

      <button
        className="
        w-full
        py-3
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-700
        text-white
        font-bold
        "
      >
        Submit Application
      </button>

    </form>

  </div>

</div>

);
}
