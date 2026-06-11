"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="h-16 w-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl text-3xl">
        💬
      </div>
    </a>
  );
}