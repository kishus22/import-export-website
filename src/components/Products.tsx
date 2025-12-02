import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    title: 'Premium Spices',
    items: ['Black Pepper', 'Cardamom', 'Red Chilli', 'Turmeric', 'Cumin', 'Coriander'],
    image: 'https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Coffee Beans',
    items: ['Arabica Coffee', 'Robusta Coffee', 'Roasted Beans', 'Green Beans'],
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Fruits & Vegetables',
    items: ['Fresh Fruits', 'Export Vegetables', 'Seasonal Produce', 'Organic Options'],
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Frozen Food',
    items: ['Frozen Vegetables', 'Frozen Fruits', 'Ready-to-Cook', 'IQF Products'],
    image: 'https://thumbs.dreamstime.com/b/various-frozen-products-food-vegetables-fruits-meat-bread-fish-white-background-top-view-296220719.jpg',
  },
  {
    title: 'Eco Products',
    items: ['Biodegradable Plates', 'Eco Cutlery', 'Compostable Packaging', 'Sustainable Items'],
    image: 'https://images.pexels.com/photos/6994302/pexels-photo-6994302.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Agricultural Products',
    items: ['Grains & Pulses', 'Rice Varieties', 'Seeds', 'Dry Fruits'],
    image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Products() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(products.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="py-24 px-4 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0F1113] mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C8A55A] to-[#D97742] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A2F24] max-w-3xl mx-auto">
            Export-quality products sourced directly from verified suppliers across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: '1fr' }}>
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-700 h-full ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
