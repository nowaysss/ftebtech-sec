import { Play, TrendingDown, Zap, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Supercharge your{' '}
            <span className="text-blue-600">Azure Cost Saving</span> Monitoring
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Optimize costs, monitor resources, and generate technical documentation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg transition-all transform hover:scale-105">
              Try for Free
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all">
              <Play className="w-5 h-5" fill="currentColor" />
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingDown className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">30%</h3>
              <p className="text-gray-600">Average Cost Savings</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10x</h3>
              <p className="text-gray-600">Quicker Resolution</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50%</h3>
              <p className="text-gray-600">Faster Time to Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
