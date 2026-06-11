export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-6">

      {/* Animated Background */}
      <div className="absolute inset-0">

        {/* Glow Effects */}
        <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>

        {/* Biometric Rings */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="relative h-[700px] w-[700px]">

            <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping"></div>

            <div className="absolute inset-10 rounded-full border border-emerald-400/30 animate-pulse"></div>

            <div className="absolute inset-20 rounded-full border border-cyan-400/20"></div>

            <div className="absolute inset-32 rounded-full border border-emerald-300/20"></div>

            <div className="absolute inset-44 rounded-full border border-cyan-300/20"></div>

            <div className="absolute inset-56 rounded-full border border-emerald-500/20"></div>

          </div>

        </div>

        {/* Wave Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1440 900"
          fill="none"
        >
          <path
            d="M0 300C240 200 480 500 720 350C960 200 1200 500 1440 300"
            stroke="#10B981"
            strokeWidth="2"
          />

          <path
            d="M0 450C240 350 480 650 720 450C960 250 1200 650 1440 450"
            stroke="#06B6D4"
            strokeWidth="2"
          />

          <path
            d="M0 600C240 500 480 800 720 600C960 400 1200 800 1440 600"
            stroke="#34D399"
            strokeWidth="2"
          />
        </svg>

      </div>

      {/* Login Card */}
      <div className="relative z-20 w-full max-w-md">

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-10 border border-white/30">

          {/* Logo */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-black">
              <span className="text-slate-900">ACS</span>
              <span className="text-emerald-600"> CRM</span>
            </h1>

            <p className="text-slate-500 mt-2">
              Secure Business Management Portal
            </p>

          </div>

          {/* Biometric Scanner */}
          <div className="flex justify-center mb-8">

            <div className="relative h-24 w-24">

              <div className="absolute inset-0 rounded-full border-2 border-emerald-500"></div>

              <div className="absolute inset-2 rounded-full border border-cyan-400 animate-pulse"></div>

              <div className="absolute left-0 right-0 top-1/2 h-1 bg-emerald-400 animate-bounce"></div>

            </div>

          </div>

          {/* Login Form */}
          <form className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="admin@acs.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold shadow-lg transition-all duration-300"
            >
              Secure Login
            </button>

          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-slate-500">
            Protected by ACS Security Layer
          </div>

        </div>

      </div>

    </div>
  );
}