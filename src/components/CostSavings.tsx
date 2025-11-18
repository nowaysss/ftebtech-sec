import { DollarSign, Shield, TrendingUp } from 'lucide-react';

export default function CostSavings() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Maximize Your Azure Cost Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identify wasteful spending, optimize resource allocation, and reduce your cloud costs significantly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cost Optimization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Automatically identify underutilized resources and receive actionable recommendations to reduce waste and optimize spending.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-cyan-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Budget Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Set custom alerts and thresholds to prevent cost overruns and ensure your Azure spending stays within budget.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Usage Analytics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Gain deep insights into your resource consumption patterns and forecast future costs with advanced analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
