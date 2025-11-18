import { TrendingUp, AlertTriangle, Bell, LineChart } from 'lucide-react';

export default function BusinessMonitoring() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm h-48 rounded-lg"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm h-24 rounded-lg"></div>
                <div className="bg-white/20 backdrop-blur-sm h-24 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Activity Monitoring
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Track business-critical metrics and KPIs alongside your Azure infrastructure. Get a complete view of your operations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Metrics</h3>
                  <p className="text-gray-600">
                    Define and track business-specific KPIs and performance indicators
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Anomaly Detection</h3>
                  <p className="text-gray-600">
                    AI-powered alerts for unusual patterns in business and technical metrics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Alerts</h3>
                  <p className="text-gray-600">
                    Configure intelligent alerts with custom thresholds and notification channels
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Executive Dashboards</h3>
                  <p className="text-gray-600">
                    Create custom dashboards for stakeholders with relevant business insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
