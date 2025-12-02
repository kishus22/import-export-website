import { Shield, Package, Truck, DollarSign, FileText, Clock } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    title: 'Verified Sourcing',
    description: 'Direct partnerships with certified suppliers',
    gradient: 'from-[#C8A55A] to-[#D97742]',
  },
  {
    icon: Package,
    title: 'Flexible Packaging',
    description: 'Customized solutions for your needs',
    gradient: 'from-[#D97742] to-[#C8A55A]',
  },
  {
    icon: Truck,
    title: 'Container Availability',
    description: 'Full container load options ready',
    gradient: 'from-[#C8A55A] to-[#D97742]',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden costs, clear quotations',
    gradient: 'from-[#D97742] to-[#C8A55A]',
  },
  {
    icon: FileText,
    title: 'Fast Documentation',
    description: 'Quick export paperwork & clearance',
    gradient: 'from-[#C8A55A] to-[#D97742]',
  },
  {
    icon: Clock,
    title: '24-Hour Communication',
    description: 'Always available for your queries',
    gradient: 'from-[#D97742] to-[#C8A55A]',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F1113] mb-4">Why Choose DAYNIT</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C8A55A] to-[#D97742] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={36} />
                </div>
                <h3 className="font-bold text-[#0F1113] text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4A2F24]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
