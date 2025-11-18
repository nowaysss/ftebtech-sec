import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600">Turbo360</div>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-6">
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                    Platform <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                    Solutions <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                </div>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Pricing
                </a>
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                    Resources <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                </div>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Partners
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
              Login
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors">
              Try for Free
            </button>
            <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600 font-medium transition-colors">
              Request Demo
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Platform</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Solutions</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Pricing</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Resources</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Partners</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Login</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg">
              Try for Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
