import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const whatsappNumber = '916265381119';
  const whatsappMessage = encodeURIComponent('Hi! I\'d like to book a free consultation with Growth Byte Digital.');

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block text-brand-yellow font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Ready to take your business to the next level? Let's talk strategy — completely free, no strings attached.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-heading font-semibold text-white text-xl mb-6">
                Let's Start a Conversation
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Phone, label: 'Call Us', value: '+91 6265381119', href: 'tel:+916265381119' },
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

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-2">Message Sent!</h3>
                <p className="text-white/60 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and goals..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-yellow text-navy-dark font-heading font-bold text-base rounded-lg hover:bg-brand-yellow-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-1"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
