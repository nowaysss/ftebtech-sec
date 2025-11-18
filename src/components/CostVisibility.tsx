import { Eye, BarChart3, PieChart, Activity } from 'lucide-react';

export default function CostVisibility() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Azure Cost Visibility
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get full transparency into your Azure spending with detailed cost breakdowns, trend analysis, and predictive forecasting.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Unified Dashboard</h3>
                  <p className="text-blue-100">
                    View all your Azure costs and resources in a single, intuitive dashboard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Detailed Reports</h3>
                  <p className="text-blue-100">
                    Generate comprehensive reports with custom filters and export options
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PieChart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cost Breakdown</h3>
                  <p className="text-blue-100">
                    Analyze spending by service, resource group, or custom tags
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Trend Analysis</h3>
                  <p className="text-blue-100">
                    Identify patterns and forecast future costs with advanced analytics
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="space-y-4">
              <div className="bg-white/20 h-48 rounded-lg"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 h-24 rounded-lg"></div>
                <div className="bg-white/20 h-24 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
