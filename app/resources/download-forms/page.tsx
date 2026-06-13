import { Download, FileText } from "lucide-react";

const forms = [
  {
    title: "Employee Registration Form",
    description: "Download employee registration application form.",
    file: "/forms/employee-registration.pdf",
  },
  {
    title: "Client Onboarding Form",
    description: "Download client onboarding application form.",
    file: "/forms/client-onboarding.pdf",
  },
  {
    title: "Vendor Registration Form",
    description: "Download vendor registration form.",
    file: "/forms/vendor-registration.pdf",
  },
  {
    title: "Internship Application Form",
    description: "Download internship application form.",
    file: "/forms/internship-application.pdf",
  },
];

export const metadata = {
  title: "Download Forms | ArikaSoft",
  description:
    "Download official forms, applications, and documents from ArikaSoft Private Limited.",
};

export default function DownloadFormsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Download Forms
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            Access and download official forms, applications, and documents
            required for various services.
          </p>
        </div>
      </section>

      {/* Forms List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {forms.map((form, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FileText className="w-6 h-6 text-blue-700" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {form.title}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      {form.description}
                    </p>

                    <a
                      href={form.file}
                      download
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}