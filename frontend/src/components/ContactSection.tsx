import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = '916265381119';
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a free consultation with Growth Byte Digital.");

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <div>
            <h3 className="font-heading font-semibold text-white text-xl mb-6">
              Let's Start a Conversation
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, label: 'Call Us', value: '+91 8815610500', href: 'tel:+918815610500' },
                { icon: Mail, label: 'Email Us', value: 'gbdigital@gmail.com', href: 'mailto:gbdigital@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'India', href: '#' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs">{item.label}</div>
                      <div className="text-white font-medium text-sm group-hover:text-brand-yellow transition-colors">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/60 text-sm leading-relaxed">
              <span className="text-brand-yellow font-semibold">Free Audit Includes:</span> Website analysis, social media review, competitor research, and a custom growth roadmap — all at zero cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
