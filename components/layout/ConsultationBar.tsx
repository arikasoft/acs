export default function ConsultationBar() {
  return (
    <div className="fixed left-0 bottom-0 w-full bg-blue-600 text-white z-50">

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        <span>
          Need Business Registration Help?
        </span>

        <a
          href="/contact"
          className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold"
        >
          Book Consultation
        </a>

      </div>

    </div>
  );
}