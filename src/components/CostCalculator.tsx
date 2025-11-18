import { Calculator, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CostCalculator() {
  const [spending, setSpending] = useState(10000);
  const savingsPercentage = 30;
  const monthlySavings = (spending * savingsPercentage) / 100;
  const annualSavings = monthlySavings * 12;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Azure Cost Savings Calculator
          </h2>
          <p className="text-xl text-cyan-50">
            Estimate your potential savings with Turbo360
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 text-gray-900">
          <div className="mb-8">
            <label className="block text-lg font-semibold mb-4">
              What is your monthly Azure spending?
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">
                $
              </span>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={spending}
                onChange={(e) => setSpending(Number(e.target.value))}
                className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer mb-4"
              />
              <input
                type="number"
                value={spending}
                onChange={(e) => setSpending(Number(e.target.value))}
                className="w-full pl-12 pr-4 py-4 text-2xl font-bold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-2">Estimated Monthly Savings</p>
                <p className="text-4xl font-bold text-blue-600">
                  ${monthlySavings.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Estimated Annual Savings</p>
                <p className="text-4xl font-bold text-cyan-500">
                  ${annualSavings.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                * Based on average {savingsPercentage}% cost reduction achieved by Turbo360 customers
              </p>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            Start Saving Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
