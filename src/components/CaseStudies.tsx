import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Turbo360 helped us reduce our Azure costs by 35% in the first quarter. The insights and recommendations were invaluable.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "Tech Corp"
    },
    {
      quote: "The monitoring capabilities have transformed how we manage our Azure infrastructure. We can now proactively address issues before they impact our business.",
      author: "Michael Chen",
      role: "DevOps Manager",
      company: "Global Solutions"
    },
    {
      quote: "Implementation was seamless, and we started seeing value within days. The ROI has been exceptional.",
      author: "Emily Rodriguez",
      role: "Cloud Architect",
      company: "Enterprise Systems"
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Success Stories
          </h2>
          <p className="text-xl text-gray-300">
            See how organizations are transforming their Azure operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <Quote className="w-12 h-12 text-cyan-400 mb-6" />
            <p className="text-2xl mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="font-bold text-xl">{testimonials[currentIndex].author}</p>
              <p className="text-cyan-400">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
