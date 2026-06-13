"use client";

import { useState } from "react";

export default function GstCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [type, setType] = useState<"exclusive" | "inclusive">("exclusive");

  const amountValue = parseFloat(amount) || 0;
  const rateValue = parseFloat(gstRate) || 0;

  let gstAmount = 0;
  let totalAmount = 0;
  let baseAmount = 0;

  if (type === "exclusive") {
    gstAmount = (amountValue * rateValue) / 100;
    totalAmount = amountValue + gstAmount;
    baseAmount = amountValue;
  } else {
    baseAmount = amountValue / (1 + rateValue / 100);
    gstAmount = amountValue - baseAmount;
    totalAmount = amountValue;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-xl mb-8">
          <h1 className="text-4xl font-bold">GST Calculator</h1>
          <p className="mt-2 text-emerald-100">
            Calculate GST Inclusive & Exclusive Amounts Instantly
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Amount (₹)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                GST Rate (%)
              </label>
              <select
                value={gstRate}
                onChange={(e) => setGstRate(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="3">3%</option>
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                Calculation Type
              </label>

              <div className="flex gap-4">
                <button
                  onClick={() => setType("exclusive")}
                  className={`flex-1 py-3 rounded-xl font-medium ${
                    type === "exclusive"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100"
                  }`}
                >
                  GST Exclusive
                </button>

                <button
                  onClick={() => setType("inclusive")}
                  className={`flex-1 py-3 rounded-xl font-medium ${
                    type === "inclusive"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100"
                  }`}
                >
                  GST Inclusive
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Calculation Result
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-100 rounded-2xl p-5">
              <p className="text-sm text-slate-500">Base Amount</p>
              <p className="text-2xl font-bold">
                ₹{baseAmount.toFixed(2)}
              </p>
            </div>

            <div className="bg-green-100 rounded-2xl p-5">
              <p className="text-sm text-green-700">GST Amount</p>
              <p className="text-2xl font-bold text-green-700">
                ₹{gstAmount.toFixed(2)}
              </p>
            </div>

            <div className="bg-blue-100 rounded-2xl p-5">
              <p className="text-sm text-blue-700">Total Amount</p>
              <p className="text-2xl font-bold text-blue-700">
                ₹{totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}