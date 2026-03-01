export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-navy-dark overflow-hidden pt-16 md:pt-20"
    >
      {/* Background image at 45% opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt=""
          aria-hidden="true"
          style={{ opacity: 0.45, objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-yellow opacity-5 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Digital Marketing Agency</span>
        </div>

        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/logo__1_-removebg-preview.png"
            alt="Growth Byte Digital"
            style={{ height: '190px', width: 'auto', objectFit: 'contain' }}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Heading */}
        <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Growth Byte{' '}
          <span className="text-brand-yellow">Digital</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Helping Businesses Grow with{' '}
          <span className="text-white font-medium">Smart Digital Marketing</span>
        </p>

        {/* CTA */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleScroll('#services')}
            className="px-8 py-4 bg-brand-yellow border-2 border-brand-yellow text-navy-dark font-heading font-semibold text-base rounded-md hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-200 w-full sm:w-auto"
          >
            Our Services
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 md:gap-12 max-w-lg mx-auto">
          {[
            { value: '200+', label: 'Clients Served' },
            { value: '5x', label: 'Avg. ROI' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-brand-yellow text-2xl md:text-3xl">{stat.value}</div>
              <div className="text-white/50 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs">Scroll down</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
