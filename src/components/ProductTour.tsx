import { Monitor } from 'lucide-react';

export default function ProductTour() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Turbo360 in Action
          </h2>
          <p className="text-xl text-gray-600">
            Take a tour of our comprehensive Azure management platform
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-500 aspect-video max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Monitor className="w-24 h-24 mx-auto mb-4 opacity-90" />
              <p className="text-2xl font-semibold">Interactive Dashboard Preview</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {['Real-time Monitoring', 'Cost Analytics', 'Resource Management', 'Alert System'].map((feature, index) => (
            <div key={index} className="text-center p-4">
              <div className="w-3 h-3 bg-blue-600 rounded-full mx-auto mb-3"></div>
              <p className="font-semibold text-gray-900">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
