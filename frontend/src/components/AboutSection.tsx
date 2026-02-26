import { TrendingUp, Award, Clock } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-navy-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-brand-yellow opacity-10 blur-3xl rounded-full scale-110" />
              <img
                src="/assets/generated/logo.dim_512x512.png"
                alt="Growth Byte Digital"
                style={{ objectFit: 'contain' }}
                className="relative z-10 w-56 h-56 md:w-72 md:h-72 drop-shadow-2xl"
              />
            </div>

            {/* Floating stat cards */}
            <div className="absolute top-4 -right-4 md:right-8 bg-white rounded-xl shadow-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-yellow-dark" />
              </div>
              <div>
                <div className="font-heading font-bold text-navy-dark text-lg leading-none">5x ROI</div>
                <div className="text-muted-foreground text-xs mt-0.5">Average Return</div>
              </div>
            </div>

            <div className="absolute bottom-4 -left-4 md:left-0 bg-white rounded-xl shadow-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-400/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-sky-500" />
              </div>
              <div>
                <div className="font-heading font-bold text-navy-dark text-lg leading-none">200+</div>
                <div className="text-muted-foreground text-xs mt-0.5">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block text-brand-yellow font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
              We Help Businesses{' '}
              <span className="text-brand-yellow">Thrive Online</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
              At Growth Byte Digital, we are passionate about helping businesses unlock their full potential in the digital world. We combine data-driven strategies with creative execution to build meaningful online presences that drive real, measurable results.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
              Whether you're a local business looking to dominate your neighborhood or a growing brand aiming for national reach, our team of digital marketing experts crafts personalized strategies that align with your goals, budget, and audience — delivering consistent growth and a strong competitive edge.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {[
                { icon: TrendingUp, label: 'Growth-Focused', desc: 'Every strategy is built around your growth goals' },
                { icon: Clock, label: 'Always On', desc: 'Continuous monitoring and optimization' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white text-sm">{item.label}</div>
                      <div className="text-white/50 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
