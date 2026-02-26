import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube } from 'react-icons/si';
import { Heart, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'growth-byte-digital');

  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5 md:col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-3"
            >
              <img
                src="/assets/generated/logo.dim_512x512.png"
                alt="Growth Byte Digital Logo"
                style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
              />
              <span className="font-heading font-bold text-white text-lg leading-tight">
                Growth Byte<br />
                <span className="text-brand-yellow">Digital</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Helping businesses grow with smart, data-driven digital marketing strategies that deliver real results.
            </p>
            {/* Contact Details */}
            <div className="flex flex-col gap-2">
              <a
                href="tel:6265381119"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-brand-yellow transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                +91 62653 81119
              </a>
              <a
                href="mailto:gbdigital@gmail.com"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-brand-yellow transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                gbdigital@gmail.com
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-yellow hover:text-navy-dark transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/50 text-sm hover:text-brand-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Social Media Marketing',
                'Meta Ads Management',
                'Google Ads',
                'Lead Generation',
                'Local Business Marketing',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                    className="text-white/50 text-sm hover:text-brand-yellow transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Growth Byte Digital. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-brand-yellow fill-brand-yellow" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-yellow hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
