import { useEffect, useRef, useState } from 'react';
import { Package, Truck, Box, CheckCircle2 } from 'lucide-react';

export default function ReadyToShip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-[#0F1113] via-[#1a1d20] to-[#0F1113] text-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl font-bold mb-4">Ready to Ship</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C8A55A] to-[#D97742] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            All products are sourced across India based on the quality and grade required by the buyer. DAYNIT provides any quantity, full container availability, flexible packaging, and fast shipping based on buyer demand.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#C8A55A]/20 hover:border-[#C8A55A] transition-all duration-300 transform hover:-translate-y-2">
            <Package className="text-[#C8A55A] mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Any Quantity</h3>
            <p className="text-gray-400">From samples to full containers</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#D97742]/20 hover:border-[#D97742] transition-all duration-300 transform hover:-translate-y-2">
            <Box className="text-[#D97742] mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Container Options</h3>
            <p className="text-gray-400">20ft / 40ft / 40ft HC</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#C8A55A]/20 hover:border-[#C8A55A] transition-all duration-300 transform hover:-translate-y-2">
            <Package className="text-[#C8A55A] mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Flexible Packaging</h3>
            <p className="text-gray-400">Jute, PP, Paper, Vacuum, Bulk</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#D97742]/20 hover:border-[#D97742] transition-all duration-300 transform hover:-translate-y-2">
            <Truck className="text-[#D97742] mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Fast Shipping</h3>
            <p className="text-gray-400">Worldwide delivery options</p>
          </div>
        </div>

        <div className={`bg-[#C8A55A]/10 backdrop-blur-sm border border-[#C8A55A]/30 rounded-2xl p-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-6 text-[#C8A55A]">Why Choose DAYNIT?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Verified sourcing from trusted suppliers',
              'Fast documentation and export process',
              'Flexible packaging to match buyer needs',
              'Buyer-matched quality standards',
              'Transparent pricing with no hidden costs',
              'Long-term partnership approach',
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C8A55A] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
