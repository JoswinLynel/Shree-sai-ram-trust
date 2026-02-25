import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, Heart, Users, Calendar, Music, 
  Utensils, MapPin, ArrowRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-content', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
    );

    gsap.fromTo('.hero-badge',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.5 }
    );

    // Scroll animations
    const sections = [aboutRef, programsRef, eventsRef];
    sections.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(ref.current.querySelectorAll('.animate-item'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const programs = [
    { icon: Music, title: 'Morning Aarti', time: '6:30 AM', desc: 'Start your day with divine blessings' },
    { icon: Utensils, title: 'Afternoon Prasad', time: '12:00 PM', desc: 'Community meal distribution' },
    { icon: Music, title: 'Evening Satsang', time: '7:00 PM', desc: 'Bhajans and spiritual discourse' },
  ];

  const events = [
    { title: 'Ram Navami', date: 'April 6, 2025', image: '/images/gallery_ramnavami.jpg' },
    { title: 'Guru Purnima', date: 'July 10, 2025', image: '/images/gallery_gurupurnima.jpg' },
    { title: 'Sai Baba Punyatithi', date: 'October 15, 2025', image: '/images/gallery_bhajan.jpg' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero_courtyard.jpg" 
            alt="Temple Courtyard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gold text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Welcome to Shree Sai Ram Trust
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Where Devotion Meets{' '}
              <span className="text-gold">Daily Life</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              A sacred space for prayer, community, and service. Join daily aarti, weekly satsangs, and celebrations that bring us together.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="group px-8 py-4 bg-saffron text-white rounded-full font-medium hover:bg-saffron-dark transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Explore Programs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                Plan Your Visit
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-6">
              {[
                { value: '15+', label: 'Years of Service' },
                { value: '1000+', label: 'Devotees Daily' },
                { value: '50+', label: 'Annual Events' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold text-gold">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={aboutRef} className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="animate-item relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about_interior.jpg" 
                  alt="Temple Interior" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                <div className="text-4xl font-bold text-saffron mb-1">15+</div>
                <p className="text-taupe text-sm">Years of serving the community with devotion</p>
              </div>
            </div>

            {/* Content */}
            <div className="animate-item">
              <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                Rooted in Faith, <span className="text-saffron">Open to All</span>
              </h2>
              <p className="text-taupe text-lg leading-relaxed mb-6">
                Founded by devotees for devotees, Shree Sai Ram Trust has been a beacon of spiritual light on Jhulelal Mandir Road in Ulhasnagar. We preserve traditions while welcoming everyone—families, elders, youth, and seekers.
              </p>
              <p className="text-taupe/80 leading-relaxed mb-8">
                Our temple is dedicated to Sai Baba's teachings of love, compassion, and service to humanity. Through daily prayers, community meals, and charitable activities, we strive to make a positive impact on society.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Heart, label: 'Selfless Service' },
                  { icon: Users, label: 'Community First' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-saffron" />
                    </div>
                    <span className="font-medium text-espresso">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-saffron font-medium hover:gap-3 transition-all"
              >
                Learn More About Us
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsRef} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Daily Programs
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              A Day Filled with <span className="text-saffron">Grace</span>
            </h2>
            <p className="animate-item text-taupe text-lg">
              From morning aarti to evening satsang, there is always a moment to pause, pray, and reconnect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, i) => (
              <div 
                key={i} 
                className="animate-item group bg-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-saffron group-hover:scale-110 transition-all duration-300">
                  <program.icon size={28} className="text-saffron group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-espresso mb-2">{program.title}</h3>
                <p className="text-saffron font-medium mb-3">{program.time}</p>
                <p className="text-taupe text-sm">{program.desc}</p>
              </div>
            ))}
          </div>

          <div className="animate-item text-center mt-10">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-saffron text-saffron rounded-full font-medium hover:bg-saffron hover:text-white transition-all duration-300"
            >
              View Full Schedule
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                Upcoming Events
              </span>
              <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso">
                Celebrate <span className="text-saffron">Together</span>
              </h2>
            </div>
            <Link
              to="/programs"
              className="animate-item inline-flex items-center gap-2 text-saffron font-medium hover:gap-3 transition-all"
            >
              View All Events
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {events.map((event, i) => (
              <div 
                key={i} 
                className="animate-item group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-saffron text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar size={14} className="inline mr-1" />
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-espresso mb-2">{event.title}</h3>
                  <p className="text-taupe text-sm mb-4">
                    Join us for special prayers, bhajans, and community prasad distribution.
                  </p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-1 text-saffron font-medium text-sm hover:gap-2 transition-all"
                  >
                    Learn More
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/closing_lamps.jpg" 
            alt="Temple Lamps" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Step Into the <span className="text-gold">Light</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Visit us this week. Bring a prayer, a question, or simply your presence. Everyone is welcome at Shree Sai Ram Trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-saffron text-white rounded-full font-medium hover:bg-saffron-dark transition-all duration-300 shadow-lg"
            >
              <MapPin size={18} className="inline mr-2" />
              Plan Your Visit
            </Link>
            <Link
              to="/donate"
              className="px-8 py-4 bg-white text-espresso rounded-full font-medium hover:bg-cream transition-all duration-300"
            >
              <Heart size={18} className="inline mr-2" />
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
