import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Users, Target, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const trustees = [
    { name: 'Shri Sunil Somani', role: 'President', image: '/images/trustee1.jpg' },
    { name: 'Smt. Meenakshi Iyer', role: 'Secretary', image: '/images/trustee2.jpg' },
    { name: 'Shri Rajesh Patel', role: 'Treasurer', image: '/images/trustee3.jpg' },
  ];

  const values = [
    { icon: Heart, title: 'Seva (Service)', desc: 'Selfless service to humanity without expecting anything in return' },
    { icon: Users, title: 'Community', desc: 'Building a strong, supportive community of devotees' },
    { icon: Target, title: 'Devotion', desc: 'Deep faith and dedication to Sai Baba teachings' },
    { icon: Lightbulb, title: 'Wisdom', desc: 'Spreading spiritual knowledge and guidance' },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Page Header */}
      <div className="relative py-20 md:py-28 bg-espresso">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/about_interior.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="animate-item font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-gold">Us</span>
          </h1>
          <p className="animate-item text-white/70 text-lg max-w-2xl mx-auto">
            Discover our journey, mission, and the dedicated team behind Shree Sai Ram Trust
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                A Journey of <span className="text-saffron">Faith & Service</span>
              </h2>
              <div className="space-y-4 text-taupe leading-relaxed">
                <p>
                  Shree Sai Ram Trust was established in 2009 with a simple yet profound vision: to create a sacred space where devotees could come together to pray, learn, and serve the community. Located on Jhulelal Mandir Road in Ulhasnagar, our temple has grown from a small prayer hall to a vibrant spiritual center.
                </p>
                <p>
                  Over the past 15 years, we have been blessed to serve thousands of devotees who visit our temple daily. Our mission is guided by Sai Baba's teachings of "Sabka Malik Ek" (One God governs all) and his emphasis on selfless service to humanity.
                </p>
                <p>
                  Through daily aartis, weekly satsangs, community meals, and charitable activities, we strive to create an environment where everyone feels welcome, regardless of their background or beliefs.
                </p>
              </div>
            </div>
            <div className="animate-item relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/hero_courtyard.jpg"
                  alt="Temple"
                  className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover"
                />
                <img
                  src="/images/events_group.jpg"
                  alt="Community"
                  className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="animate-item bg-cream rounded-3xl p-8 md:p-10">
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} className="text-saffron" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-espresso mb-4">Our Mission</h3>
              <p className="text-taupe leading-relaxed">
                To spread Sai Baba's message of love, compassion, and unity through spiritual practices, community service, and charitable activities. We aim to create a welcoming space where devotees can connect with the divine and serve humanity.
              </p>
            </div>
            <div className="animate-item bg-cream rounded-3xl p-8 md:p-10">
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb size={28} className="text-saffron" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-espresso mb-4">Our Vision</h3>
              <p className="text-taupe leading-relaxed">
                To be a beacon of spiritual light in our community, inspiring individuals to lead lives of purpose, compassion, and devotion. We envision a world where the teachings of Sai Baba bring peace and harmony to all.
              </p>
            </div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="animate-item bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-saffron" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-espresso mb-2">{value.title}</h3>
                <p className="text-taupe text-sm">{value.desc}</p>
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
                  <div className="absolute inset-0 bg-saffron rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110" />
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-espresso mb-1">{trustee.name}</h3>
                <p className="text-saffron font-medium text-sm">{trustee.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
