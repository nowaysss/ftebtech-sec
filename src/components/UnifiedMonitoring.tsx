import { Server, Database, Network, HardDrive } from 'lucide-react';

export default function UnifiedMonitoring() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unified Azure Monitoring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor all your Azure resources from a single pane of glass. Get real-time insights into performance, availability, and health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Server className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Virtual Machines</h3>
                <p className="text-gray-600">
                  Monitor CPU, memory, disk I/O, and network performance across all VMs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Databases</h3>
                <p className="text-gray-600">
                  Track database performance, query execution, and resource utilization
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Network className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Networking</h3>
                <p className="text-gray-600">
                  Monitor network traffic, latency, and connectivity across your infrastructure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <HardDrive className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Storage</h3>
                <p className="text-gray-600">
                  Track storage consumption, IOPS, and data transfer metrics
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-64 rounded-lg"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 h-32 rounded-lg"></div>
                <div className="bg-gray-100 h-32 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
