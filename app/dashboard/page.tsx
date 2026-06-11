export default function DashboardPage() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Total Leads</h3>
          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Clients</h3>
          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Staff</h3>
          <p className="text-4xl font-bold mt-3">
            15
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Conversions</h3>
          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

      </div>

    </div>
  );
}