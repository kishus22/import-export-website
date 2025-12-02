import { useState, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const slides = [
  {
    title: 'Premium Spices from India',
    subtitle: 'Black Pepper • Cardamom • Red Chilli • Turmeric • Cumin • Coriander',
    image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'World-Class Coffee Beans',
    subtitle: 'Arabica & Robusta • Direct from Plantations',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Fresh Fruits & Vegetables',
    subtitle: 'Farm-Fresh Export Quality',
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Agricultural Excellence',
    subtitle: 'Premium Commodities from Across India',
    image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 transition-all duration-1000">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover transition-all duration-1000"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1113]/60 via-[#0F1113]/70 to-[#0F1113]/80"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className={`transition-all duration-700 max-w-4xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-[#C8A55A] mb-8 font-light tracking-wide">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:border-[#C8A55A] transition-all duration-300">
              <Check size={20} className="text-[#C8A55A] flex-shrink-0" />
              <span className="text-white font-medium">Available 24 Hours</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:border-[#D97742] transition-all duration-300">
              <Check size={20} className="text-[#D97742] flex-shrink-0" />
              <span className="text-white font-medium">100% Assured Quality</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={scrollToQuote}
              className="bg-[#C8A55A] hover:bg-[#D97742] text-[#0F1113] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Request Quote
            </button>
            <button
              onClick={scrollToQuote}
              className="bg-transparent border-2 border-[#C8A55A] hover:bg-[#C8A55A] text-[#C8A55A] hover:text-[#0F1113] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Sample
            </button>
            <button
              onClick={scrollToQuote}
              className="bg-[#D97742] hover:bg-[#C8A55A] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Check Container Availability
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#C8A55A] w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-[#C8A55A]" />
        </div>
      </div>
    </div>
  );
}
