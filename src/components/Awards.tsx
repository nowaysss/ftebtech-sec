import { Award, Shield, Star, Trophy } from 'lucide-react';

export default function Awards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recognized Excellence
          </h2>
          <p className="text-xl text-gray-600">
            Award-winning platform trusted by enterprises worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Microsoft Partner</h3>
            <p className="text-gray-600">Gold Cloud Platform</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-cyan-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">SOC 2 Certified</h3>
            <p className="text-gray-600">Type II Compliant</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">GDPR Compliant</h3>
            <p className="text-gray-600">Data Protection</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-cyan-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Leader</h3>
            <p className="text-gray-600">Gartner Recognized</p>
          </div>
        </div>
      </div>
    </section>
  );
}
