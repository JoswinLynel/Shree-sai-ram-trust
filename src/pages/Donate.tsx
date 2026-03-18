import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CTASection } from '@/components/CTASection';

import { Users, Utensils, Home, Sparkles, Heart, User, Phone } from 'lucide-react';
import HighlightCard from '@/components/ui/highlight-card';

gsap.registerPlugin(ScrollTrigger);

export default function Donate() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  useScrollReveal('.animate-item');

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
        {/* Background with darker overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/donate_plate.jpg"
            alt="Donate Background"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />
        </div>

        {/* Centered Content with limited width */}
        <div className="relative z-10 text-center px-6 w-full max-w-[750px] mx-auto">
          <div className="animate-item mb-4">
            <span className="inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase shadow-xl">
              Donate
            </span>
          </div>

          <h1 className="animate-item font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Support Our <span className="text-gold">Mission</span>
          </h1>

          <p className="animate-item text-white/70 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl mx-auto">
            Your generous contributions help us continue our spiritual and charitable work in the community.
          </p>
        </div>
      </div>

      {/* Support Matters Section (Compact Version) */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Soft Background Gradients & Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cream to-white" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-saffron/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        {/* Subtle patterned texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #DDAF54 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="animate-item inline-block px-3 py-1 bg-saffron/10 text-saffron rounded-full text-[10px] font-semibold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(235,123,38,0.1)]">
              Where Your Donation Goes
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-3 drop-shadow-sm">
              Your Support <span className="text-saffron">Matters</span>
            </h2>
            <p className="animate-item text-taupe md:text-lg font-medium italic text-saffron/80 mb-2">
              "Every contribution becomes a blessing that touches lives."
            </p>
            <p className="animate-item text-taupe text-sm md:text-base leading-relaxed font-light">
              See how your generous contributions help us serve the community, uphold traditions, and maintain our sacred spaces.
            </p>
          </div>

          {/* Featured Card (Daily Prasad Seva) */}
          <div className="animate-item relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl mb-6 md:mb-8 group cursor-default">
            <div className="absolute inset-0">
              <img
                src="/images/donate_seva_image.png"
                alt="Daily Prasad Seva"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            <div className="relative z-10 p-6 md:p-8 lg:p-10 h-[250px] md:h-[320px] flex flex-col justify-end">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20 shadow-inner group-hover:bg-saffron/40 transition-colors duration-500 group-hover:scale-110 transform">
                <Utensils size={24} className="text-white drop-shadow-md" />
              </div>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg group-hover:tracking-wide transition-all duration-500">
                Daily Prasad <span className="text-gold">Seva</span>
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed font-light drop-shadow-md group-hover:text-white transition-colors duration-500">
                Support our sacred community meal program that feeds hundreds of devotees every single day. Your generosity ensures that no one leaves the temple hungry, sharing Baba's love through the gift of food.
              </p>
            </div>
          </div>

          {/* Supporting Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { 
                icon: Home, 
                title: 'Temple Maintenance', 
                desc: 'Help us preserve and maintain the sacred premises, providing a pristine and peaceful environment for all devotees to pray.' 
              },
              { 
                icon: Sparkles, 
                title: 'Festival Celebrations', 
                desc: 'Contribute to the grand celebrations, magnificent floral decorations, and elaborate rituals during our major temple festivals.' 
              },
              { 
                icon: Users, 
                title: 'Charitable Activities', 
                desc: 'Empower our outreach programs, extending a helping hand to the underprivileged through education, healthcare, and essential support.' 
              },
            ].map((cause, i) => (
              <HighlightCard
                key={i}
                className="animate-item h-full"
                title={cause.title}
                description={[cause.desc]}
                icon={<cause.icon size={24} />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Offer Your Seva Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cream to-white relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-saffron/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div className="animate-item">
              <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(235,123,38,0.1)]">
                Offer Your Seva
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-5 leading-tight drop-shadow-sm">
                Offer Your <span className="text-saffron">Seva & Support</span>
              </h2>
              <p className="text-taupe md:text-lg leading-relaxed mb-8 font-light max-w-lg">
                Devotion takes many forms. Whether through your time, resources, or heartfelt service, your contributions help sustain the light of our temple and nurture our community programs.
              </p>

              {/* Supporting Elements */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: 'Temple Seva', icon: Home },
                  { label: 'Annadan Seva', icon: Utensils },
                  { label: 'Festival Support', icon: Sparkles },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-saffron/20 shadow-sm hover:border-saffron/40 hover:shadow-md transition-all cursor-default">
                    <item.icon size={14} className="text-saffron" />
                    <span className="text-sm font-medium text-espresso">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Contact Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-saffron/20 group hover:border-saffron/40 transition-colors duration-500">
                {/* Decorative Line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-saffron/30 to-transparent opacity-50 group-hover:via-saffron/50 transition-all duration-500" />
                
                <h3 className="font-heading text-lg text-espresso font-semibold mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center shadow-inner group-hover:bg-saffron/20 transition-colors duration-500">
                    <Heart size={16} className="text-saffron" />
                  </div>
                  Reach Out to Contribute
                </h3>
                
                <div className="space-y-3">
                  {/* Name */}
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-cream/50 group-hover:bg-cream transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-saffron/10 flex items-center justify-center flex-shrink-0 relative z-10">
                      <User size={18} className="text-saffron" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-[10px] text-taupe uppercase tracking-widest font-semibold mb-0.5">Contact Person</p>
                      <p className="font-medium text-espresso text-base">Sandeep (Sandy) Vazirani</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-cream/50 group-hover:bg-cream transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 delay-100" />
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-saffron/10 flex items-center justify-center flex-shrink-0 relative z-10">
                      <Phone size={18} className="text-saffron" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-[10px] text-taupe uppercase tracking-widest font-semibold mb-1">Phone</p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <a href="tel:+919322941313" className="font-semibold text-espresso hover:text-saffron transition-colors text-base">93229 41313</a>
                        <span className="text-taupe/40 text-sm">|</span>
                        <a href="tel:+918484865000" className="font-semibold text-espresso hover:text-saffron transition-colors text-base">84848 65000</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Devotional Image */}
            <div className="animate-item relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl p-2 bg-white/60 backdrop-blur-md border border-white/80 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-saffron/30 to-gold/30 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                <img
                  src="/images/seva_offering.jpg"
                  alt="Offering Aarti"
                  className="relative z-10 w-full h-[400px] md:h-[500px] object-cover rounded-[1.5rem] shadow-inner transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                />
                {/* Soft overlay gradient on image */}
                <div className="absolute bottom-2 left-2 right-2 h-1/2 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent z-20 rounded-b-[1.5rem] pointer-events-none opacity-80" />
              </div>
              
              {/* Optional floating element for extra aesthetics */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/15 rounded-full blur-[30px] z-0 animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-saffron/15 rounded-full blur-[40px] z-0 animate-pulse" style={{ animationDuration: '5s' }} />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
