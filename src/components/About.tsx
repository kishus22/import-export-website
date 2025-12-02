import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Shield, Globe, Clock } from 'lucide-react';

export default function About() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl font-bold text-[#0F1113] mb-4">About DAYNIT</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C8A55A] to-[#D97742] mx-auto"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-lg text-[#4A2F24] leading-relaxed mb-6">
              <span className="text-2xl font-bold text-[#C8A55A]">DAYNIT</span> is a new but fast-growing export company from India offering premium spices, coffee, agricultural items, frozen products, eco plates, and general commodities. We source verified quality from across India, match buyer requirements, and maintain transparent, reliable export support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F5EFE7] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <TrendingUp className="text-[#C8A55A] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#0F1113] mb-2">Fast Growing</h3>
              <p className="text-sm text-[#4A2F24]">Expanding network across India</p>
            </div>
            <div className="bg-[#F5EFE7] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Shield className="text-[#D97742] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#0F1113] mb-2">Quality First</h3>
              <p className="text-sm text-[#4A2F24]">Every shipment inspected</p>
            </div>
            <div className="bg-[#F5EFE7] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Globe className="text-[#C8A55A] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#0F1113] mb-2">Global Reach</h3>
              <p className="text-sm text-[#4A2F24]">Export-ready solutions</p>
            </div>
            <div className="bg-[#F5EFE7] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Clock className="text-[#D97742] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#0F1113] mb-2">Fast Response</h3>
              <p className="text-sm text-[#4A2F24]">Quick documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
