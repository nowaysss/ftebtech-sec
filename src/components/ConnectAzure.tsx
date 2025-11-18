import { Cloud, ArrowRight } from 'lucide-react';

export default function ConnectAzure() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Cloud className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Connect Your Azure Account in Minutes
          </h2>
          <p className="text-xl text-cyan-50 mb-12">
            Secure, fast, and seamless integration with your Azure environment. No complex setup required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">1</div>
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-cyan-50">Create your Turbo360 account in seconds</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">2</div>
              <h3 className="text-xl font-bold mb-3">Connect Azure</h3>
              <p className="text-cyan-50">Authorize secure access to your Azure resources</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">3</div>
              <h3 className="text-xl font-bold mb-3">Start Saving</h3>
              <p className="text-cyan-50">Begin optimizing costs immediately</p>
            </div>
          </div>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
