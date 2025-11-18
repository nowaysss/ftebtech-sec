import { Target, Lightbulb, Settings, CheckCircle } from 'lucide-react';

export default function CostOptimization() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 h-48 rounded-lg"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-100 h-24 rounded-lg"></div>
                <div className="bg-cyan-100 h-24 rounded-lg"></div>
                <div className="bg-blue-100 h-24 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intelligent Cost Optimization
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Leverage AI-powered recommendations to optimize your Azure infrastructure and reduce costs without compromising performance.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Recommendations</h3>
                  <p className="text-gray-600">
                    Receive personalized optimization suggestions based on your usage patterns
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Actions</h3>
                  <p className="text-gray-600">
                    Implement optimization strategies automatically with one-click approval
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Resource Rightsizing</h3>
                  <p className="text-gray-600">
                    Automatically identify and resize over-provisioned resources
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Monitoring</h3>
                  <p className="text-gray-600">
                    Track optimization impact and ensure sustained cost savings
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
