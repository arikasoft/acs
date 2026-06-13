"use client";

import { useState } from "react";

export default function IncomeTaxCalculatorPage() {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(0);

  const calculateTax = () => {
    const annualIncome = Number(income);

    let totalTax = 0;

    if (annualIncome <= 400000) {
      totalTax = 0;
    } else if (annualIncome <= 800000) {
      totalTax = (annualIncome - 400000) * 0.05;
    } else if (annualIncome <= 1200000) {
      totalTax =
        20000 + (annualIncome - 800000) * 0.1;
    } else if (annualIncome <= 1600000) {
      totalTax =
        60000 + (annualIncome - 1200000) * 0.15;
    } else if (annualIncome <= 2000000) {
      totalTax =
        120000 + (annualIncome - 1600000) * 0.2;
    } else if (annualIncome <= 2400000) {
      totalTax =
        200000 + (annualIncome - 2000000) * 0.25;
    } else {
      totalTax =
        300000 + (annualIncome - 2400000) * 0.3;
    }

    setTax(totalTax);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Income Tax Calculator
          </h1>

          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Calculate your estimated income tax instantly based on
            your annual taxable income.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">
              Tax Calculation
            </h2>

            <label className="block mb-2 font-medium">
              Annual Income (₹)
            </label>

            <input
              type="number"
              placeholder="Enter Annual Income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={calculateTax}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Calculate Tax
            </button>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-800">
                Estimated Income Tax
              </h3>

              <p className="text-4xl font-bold text-green-700 mt-2">
                ₹ {tax.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Slabs */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">
                New Tax Regime Slabs
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 text-left">Income Range</th>
                    <th className="p-4 text-left">Tax Rate</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Up to ₹4,00,000</td>
                    <td className="p-4">Nil</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">₹4,00,001 – ₹8,00,000</td>
                    <td className="p-4">5%</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">₹8,00,001 – ₹12,00,000</td>
                    <td className="p-4">10%</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">₹12,00,001 – ₹16,00,000</td>
                    <td className="p-4">15%</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">₹16,00,001 – ₹20,00,000</td>
                    <td className="p-4">20%</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">₹20,00,001 – ₹24,00,000</td>
                    <td className="p-4">25%</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Above ₹24,00,000</td>
                    <td className="p-4">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Disclaimer: This calculator provides an estimated tax
            amount and should not be considered professional tax advice.
          </p>
        </div>
      </section>
    </main>
  );
}