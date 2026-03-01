import { BarChart2, DollarSign, Database, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: BarChart2,
    title: 'Result-Driven Strategy',
    description:
      "Every campaign we run is built around clear KPIs and measurable outcomes. We don't just run ads — we engineer growth.",
    color: 'text-brand-yellow',
    bg: 'bg-brand-yellow/15',
  },
  {
    icon: DollarSign,
    title: 'Affordable Solutions',
    description:
      "Premium digital marketing doesn't have to break the bank. We offer flexible packages designed to deliver maximum value at every budget level.",
    color: 'text-green-400',
    bg: 'bg-green-400/15',
  },
  {
    icon: Database,
    title: 'Data-Based Optimization',
    description:
      'We let the numbers guide every decision. Real-time analytics and A/B testing ensure your campaigns continuously improve and outperform.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/15',
  },
  {
    icon: MapPin,
    title: 'Local Business Expertise',
    description:
      'We understand the unique challenges local businesses face. Our hyper-local strategies help you stand out in your community and attract nearby customers.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/15',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block text-brand-yellow font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Our Advantage
          </span>
          <h2 className="font-heading font-bold text-navy-dark text-3xl sm:text-4xl md:text-5xl mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            We bring together strategy, creativity, and technology to deliver results that matter.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative bg-card border border-border rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Number */}
                <div className="absolute top-6 right-6 font-heading font-bold text-5xl text-border select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${reason.bg} mb-5`}>
                  <Icon className={`w-6 h-6 ${reason.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-navy-dark text-xl mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
