import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface ProductCardProps {
  title: string;
  items: string[];
  image: string;
}

export default function ProductCard({ title, items, image }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToQuote = () => {
    const formElement = document.getElementById('quote-form');
    if (formElement) {
      const productInput = formElement.querySelector(
        'input[name="product"]'
      ) as HTMLInputElement;

      if (productInput) {
        productInput.value = title;
      }

      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group h-full flex flex-col">
      
      {/* PRODUCT IMAGE */}
      <div className="relative w-full" style={{ height: '220px' }}>
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F5EFE7]">
            <div className="w-12 h-12 border-4 border-[#C8A55A] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {imageError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600 text-sm">Image unavailable</span>
          </div>
        )}

        <img
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          style={{ opacity: imageLoaded && !imageError ? 1 : 0 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/80 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {title}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex-1 flex flex-col">
        <ul className="space-y-3 mb-6 flex-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-[#4A2F24]">
              <CheckCircle size={18} className="text-[#C8A55A]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* ONLY GET QUOTE BUTTON (WhatsApp removed) */}
        <button
          onClick={scrollToQuote}
          className="w-full bg-gradient-to-r from-[#C8A55A] to-[#D97742] hover:from-[#D97742] hover:to-[#C8A55A] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md mt-auto"
          aria-label={`Get quote for ${title}`}
          title={`Get quote for ${title}`}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}
