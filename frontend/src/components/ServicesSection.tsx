import { Share2, Target, Search, Users, MapPin } from 'lucide-react';

const services = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Build a powerful social media presence that engages your audience, grows your following, and converts followers into loyal customers.',
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-100',
    cardBg: 'bg-sky-50',
    cardBorder: 'border-sky-200',
    titleColor: 'text-sky-900',
    descColor: 'text-sky-800/70',
  },
  {
    icon: Target,
    title: 'Meta Ads Management',
    description:
      'Precision-targeted Facebook and Instagram ad campaigns that maximize your reach and deliver measurable results within your budget.',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-100',
    cardBg: 'bg-violet-50',
    cardBorder: 'border-violet-200',
    titleColor: 'text-violet-900',
    descColor: 'text-violet-800/70',
  },
  {
    icon: Search,
    title: 'Google Ads',
    description:
      'Dominate search results with expertly managed Google Ads campaigns that drive high-intent traffic and boost conversions.',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-100',
    cardBg: 'bg-rose-50',
    cardBorder: 'border-rose-200',
    titleColor: 'text-rose-900',
    descColor: 'text-rose-800/70',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description:
      'Attract and capture qualified leads through strategic funnels, landing pages, and targeted campaigns designed to fill your pipeline.',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    cardBg: 'bg-emerald-50',
    cardBorder: 'border-emerald-200',
    titleColor: 'text-emerald-900',
    descColor: 'text-emerald-800/70',
  },
  {
    icon: MapPin,
    title: 'Local Business Marketing',
    description:
      'Dominate your local market with geo-targeted campaigns, Google Business optimization, and community-focused digital strategies.',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    cardBg: 'bg-amber-50',
    cardBorder: 'border-amber-200',
    titleColor: 'text-amber-900',
    descColor: 'text-amber-800/70',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block text-brand-yellow font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="font-heading font-bold text-navy-dark text-3xl sm:text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Comprehensive digital marketing solutions tailored to accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group ${service.cardBg} border ${service.cardBorder} rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.iconBg} mb-5`}>
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className={`font-heading font-semibold ${service.titleColor} text-lg mb-3`}>
                  {service.title}
                </h3>
                <p className={`${service.descColor} text-sm leading-relaxed`}>{service.description}</p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="bg-navy-dark rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-card">
            <div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">
                Ready to grow your business?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Let's discuss a custom strategy tailored specifically for your goals and budget.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 px-6 py-3 bg-brand-yellow text-navy-dark font-heading font-bold text-sm rounded-md hover:bg-brand-yellow-dark transition-colors duration-200 text-center"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
