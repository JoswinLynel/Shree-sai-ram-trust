import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import { Heart, Users, Target, Lightbulb, Flame, Globe } from 'lucide-react';
import { AuthorCard } from '@/components/ui/content-card';
import { CTASection } from '@/components/CTASection';


function TeachingCard({
  title, description, icon: Icon, delay, bgImage
}: { title: string, description: string, icon: any, delay: number, bgImage: string }) {
  return (
    <div
      className="animate-item relative rounded-2xl p-6 md:p-8 cursor-pointer overflow-hidden group
        bg-white/5 backdrop-blur-md border border-white/10 shadow-xl
        hover:border-saffron/40 hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle Watermark Silhouette */}
      <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none transform scale-150 grayscale">
        <img src={bgImage} alt="" aria-hidden="true" className="w-64 h-64 object-contain" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent opacity-60 group-hover:opacity-100 group-hover:via-gold transition-all duration-500" />

      {/* Glow blob */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-saffron/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors duration-700 pointer-events-none" />

      {/* Icon Container */}
      <div className="relative w-12 h-12 bg-gradient-to-br from-saffron/20 to-transparent border border-saffron/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold/50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-inner">
        <div className="absolute inset-0 bg-saffron/10 blur-sm rounded-xl group-hover:bg-gold/20 transition-colors duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
        <Icon size={22} className="text-saffron relative z-10 group-hover:text-gold transition-colors duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] drop-shadow-sm" />
      </div>

      <div className="relative z-10">
        <h3 className="font-heading text-xl md:text-[22px] font-bold text-white mb-3 leading-tight group-hover:text-gold/90 transition-colors duration-500 ease-out">
          {title}
        </h3>

        <div className="w-10 h-[2px] bg-saffron/50 mb-4 group-hover:w-20 group-hover:bg-gold transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />

        <p className="text-white/70 text-sm md:text-base leading-[1.7] group-hover:text-white/90 transition-colors duration-500 ease-out font-light">
          {description}
        </p>
      </div>
    </div>
  );
}


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('.hero-animate'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
      );

      gsap.to('.hero-parallax', {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  useScrollReveal('.animate-item');


  const trustees = [
    { name: 'Sunil Sudhamomal Somani', image: '/images/Trustee 1.png', objectPosition: 'center 35%' },
    { name: 'Radhika Sudhamomal Somani', image: '/images/Trustee 2.png', objectPosition: 'center 90%' },
    { name: 'Sandeep (Sandy) Vazirani', image: '/images/Trustee 3.png', objectPosition: 'center 45%' },
  ];

  const values = [
    { 
      icon: <Heart size={24} />, 
      title: 'Seva (Service)', 
      desc: 'Selfless service to humanity without expecting anything in return',
      bg: '/images/core_value_seva.png'
    },
    { 
      icon: <Users size={24} />, 
      title: 'Community', 
      desc: 'Building a strong, supportive community of devotees',
      bg: '/images/core_value_community.png'
    },
    { 
      icon: <Target size={24} />, 
      title: 'Devotion', 
      desc: 'Deep faith and dedication to Sai Baba teachings',
      bg: '/images/core_value_devotion.png'
    },
    { 
      icon: <Lightbulb size={24} />, 
      title: 'Wisdom', 
      desc: 'Spreading spiritual knowledge and guidance',
      bg: '/images/core_value_wisdom.png'
    },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
        <div className="absolute inset-0 hero-parallax">
          <img
            src="/images/about_hero_realistic.png"
            alt="Sai Baba Temple Interior"
            className="w-full h-full object-cover opacity-30 scale-105"
          />


          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-[750px] mx-auto mt-8 md:mt-12">
          <div className="hero-animate mb-6">
            <span className="inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase shadow-xl">
              Our Journey
            </span>
          </div>
          <h1 className="hero-animate font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            About <span className="text-gold">Us</span>
          </h1>
          <p className="hero-animate text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl mx-auto">
            Discover the rich history and spiritual heritage of Shree Sai Ram Trust
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-item">
              <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                A Journey of <span className="text-saffron">Faith & Service</span>
              </h2>

              <div className="animate-item space-y-4 text-taupe leading-relaxed">
                <p>
                  Shree Sai Ram Trust was established in 1993 by Sunil Sudhamomal Somani in loving memory of Late Shri Sudhamomal G. Somani. The trust was founded as a tribute to his life, values, and dedication to faith, kindness, and service to society.
                </p>
                <p>
                  Inspired by the teachings of Shree Sai Baba, the trust works to promote spirituality, compassion, and support for the community. It aims to continue the noble ideals of Late Shri Sudhamomal G. Somani by encouraging devotion, unity, and charitable activities that benefit people from all walks of life.
                </p>
                <p>
                  Located in the city of Ulhasnagar, Shree Sai Ram Trust stands as a symbol of remembrance, faith, and service, keeping alive the legacy and values of Late Shri Sudhamomal G. Somani.
                </p>
              </div>

            </div>
            <div className="animate-item relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/saibaba_early_1.jpg"
                  alt="Sai Baba Early Life"
                  className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover object-top"
                />
                <img
                  src="/images/saibaba_teachings_2.jpg"
                  alt="Sai Baba Preaching"
                  className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover mt-8 object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Teachings (Replaces Mission & Vision) */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-espresso">
        {/* Soft immersive background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-saffron/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] mix-blend-screen" />
          {/* Subtle warm temple texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #DDAF54 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Section heading */}
          <div className="animate-item text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-saffron/10 border border-saffron/20 text-saffron rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 shadow-[0_0_15px_rgba(235,123,38,0.1)]">
              Spiritual Wisdom
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 drop-shadow-lg">
              Sai Baba's <span className="text-gold">Guiding Teachings</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              These core principles illuminate our path, guiding our devotion, inspiring our service, and uniting our community.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 pb-6">
            <TeachingCard
              title="Shraddha & Saburi"
              description="Faith and Patience. Trust implicitly in the divine timing and remain steadfast and patient throughout life's journey."
              icon={Flame}
              delay={0}
              bgImage="/images/hero_saibaba.png"
            />

            <TeachingCard
              title="Service to Humanity"
              description="Helping others and performing selfless seva is the highest form of devotion. See the divine in every living being."
              icon={Heart}
              delay={150}
              bgImage="/images/teaching_card_saibaba.png"
            />

            <TeachingCard
              title="Unity & Compassion"
              description="All paths lead to the same ultimate truth. Treat everyone with boundless love, kindness, and universal equality."
              icon={Globe}
              delay={300}
              bgImage="/images/about_interior_saibaba.png"
            />
          </div>

        </div>
      </section>


      {/* Core Values */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Core Values
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Principles That <span className="text-saffron">Guide Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {values.map((value, i) => (
              <div key={i} className="animate-item h-full">
                <AuthorCard
                  backgroundImage={value.bg}
                  author={{
                    name: value.title,
                    icon: value.icon,
                  }}
                  content={{
                    title: value.title,
                    description: value.desc,
                  }}
                  className="h-full min-h-[400px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Meet the <span className="text-saffron">Trustees</span>
            </h2>
            <p className="animate-item text-taupe">
              Dedicated souls serving the community with devotion and commitment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustees.map((trustee, i) => (
              <div
                key={i}
                className="animate-item text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-saffron rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 scale-110 group-hover:scale-125 blur-sm" />
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative z-10"
                    style={{ objectPosition: trustee.objectPosition ?? 'center top' }}
                  />
                </div>
                <h3 className="animate-item font-heading text-lg font-semibold text-espresso">{trustee.name}</h3>
              </div>

            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
