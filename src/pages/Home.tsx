import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronRight, Heart, Users, Calendar, Music,
  Utensils, ArrowRight, User, Phone, Sparkles
} from 'lucide-react';
import { TravelCard } from '@/components/ui/card-7';
import { HeroInteractives } from '@/components/ui/hero-interactives';
import { GalleryCarousel } from '@/components/GalleryCarousel';
import { CTASection } from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEOHead } from '@/components/SEOHead';

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
    // Handled by useScrollReveal hook


    // About section directional animations
    gsap.fromTo('.about-image',
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-image', start: 'top 85%', end: 'bottom 15%', toggleActions: 'play reverse play reverse' }
      }
    );
    gsap.fromTo('.about-text',
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text', start: 'top 85%', end: 'bottom 15%', toggleActions: 'play reverse play reverse' }
      }
    );

    // Memorial section directional animations
    gsap.fromTo('.memorial-portrait',
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.memorial-portrait', start: 'top 85%', end: 'bottom 15%', toggleActions: 'play reverse play reverse' }
      }
    );
    gsap.fromTo('.memorial-text',
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.memorial-text', start: 'top 85%', end: 'bottom 15%', toggleActions: 'play reverse play reverse' }
      }
    );


    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // Global scroll reveal
  useScrollReveal('.animate-item');


  const programs = [
    { icon: Music, title: 'Morning Aarti', time: '6:30 AM', desc: 'Start your day with divine blessings and sacred morning prayers', image: '/images/Daily_programme_images (1).png' },
    { icon: Utensils, title: 'Afternoon Prasad', time: '12:00 PM', desc: 'Community meal distribution bringing everyone together in service', image: '/images/Daily_programme_images (2).png' },
    { icon: Music, title: 'Evening Satsang', time: '7:00 PM', desc: 'Bhajans and spiritual discourse to end the day in peace', image: '/images/Daily_programme_images (3).png' },
  ];

  const events = [
    { title: 'Ram Navami', date: '27 March 2026', image: '/images/Upcoming_events_images (1).png', overview: 'Celebrate the birth of Lord Rama with special prayers, devotional songs, and community prasad distribution.' },
    { title: 'Guru Purnima', date: '29 July 2026', image: '/images/Upcoming_events_images (2).png', overview: 'Honor the sacred guru-disciple tradition with ceremonies, offerings, and heartfelt gratitude.' },
    { title: 'Sai Baba Punyatithi (Vijayadashami)', date: '22 October 2026', image: '/images/Upcoming_events_images (3).png', overview: 'Commemorate Sai Baba\'s legacy with special bhajans, 108 lamp ceremony, and community seva.' },

  ];

  return (
    <div className="overflow-hidden">
      <SEOHead
        title="Shree Sai Ram Trust – Sai Baba Temple in Ulhasnagar | Daily Aarti & Satsang"
        description="Shree Sai Ram Trust is a Sai Baba temple in Ulhasnagar, Maharashtra, established in 1993. Join daily aarti, satsang, community prasad, and spiritual programs guided by Sai Baba's teachings of Shraddha & Saburi."
        keywords="Shree Sai Ram Trust, Sai Baba temple Ulhasnagar, Shirdi Sai Baba, daily aarti, satsang, prasad, Hindu temple Maharashtra, Shraddha Saburi, साई बाबा मंदिर उल्हासनगर"
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center">
        <HeroInteractives />
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/home_hero_image.png"
            alt="Sai Baba"
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
              A sacred space born of love and remembrance, serving the community of Ulhasnagar since 1993. Join daily aarti, weekly satsangs, and celebrations that bring us together.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="group px-8 py-4 bg-saffron text-white rounded-full font-medium hover:bg-saffron-dark transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                View Latest Event
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                Gallery
              </Link>
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
            <div className="about-image relative">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform-style-3d"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const { left, top, width, height } = el.getBoundingClientRect();
                  const x = e.clientX - left;
                  const y = e.clientY - top;
                  const rotateX = ((y - height / 2) / (height / 2)) * -6;
                  const rotateY = ((x - width / 2) / (width / 2)) * 6;
                  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
                  el.style.transition = 'transform 0.1s ease-out';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                  el.style.transition = 'transform 0.4s ease-in-out';
                }}
              >
                <img
                  src="/images/about_interior_saibaba.png"
                  alt="Devotees praying to Sai Baba in the Temple"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl shadow-xl p-6 max-w-[200px] z-10">
                <div className="text-4xl font-bold text-saffron mb-1">Est. 1993</div>
                <p className="text-taupe text-sm">A living tribute to Late Shri Sudhamomal G. Somani</p>
              </div>
            </div>

            {/* Content */}
            <div className="about-text">
              <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                Rooted in Faith, <span className="text-saffron">Open to All</span>
              </h2>
              <p className="text-taupe text-lg leading-relaxed mb-6">
                Established in 1993 by Sunil Sudhamomal Somani as a heartfelt tribute to his father, Shree Sai Ram Trust has grown into a living symbol of faith and remembrance right here in Ulhasnagar. Every prayer offered within these walls carries forward a legacy of kindness.
              </p>
              <p className="text-taupe/80 leading-relaxed mb-8">
                Guided by Sai Baba's timeless call to love and serve, the trust nurtures devotion, unity, and compassion, opening its doors to every soul, regardless of background, just as he once did.
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

      {/* Memorial Tribute Section */}
      <section className="pt-16 md:pt-20 pb-0 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-saffron/30" />
            <span className="text-saffron/60 text-xl">✦</span>
            <div className="h-px w-16 bg-saffron/30" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Portrait */}
            <div className="memorial-portrait animate-pulse-saffron rounded-full flex-shrink-0 relative">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-saffron/30 shadow-2xl ring-4 ring-gold/20">
                <img
                  src="/images/sudhamomal somani.jpg"
                  alt="Late Shri Sudhamomal G. Somani"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Text */}
            <div className="memorial-text text-left">
              <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-xs font-medium tracking-widest uppercase mb-4">
                In Loving Memory
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-3">
                Late Shri <span className="text-saffron">Sudhamomal G. Somani</span>
              </h2>
              <p className="text-taupe leading-relaxed mb-4">
                A man of unwavering faith, quiet kindness, and selfless devotion to others. His life was a prayer — lived for family, community, and God.
              </p>
              <p className="text-taupe/70 text-sm leading-relaxed italic border-l-2 border-saffron/40 pl-4">
                "This trust was built in his name, so that his spirit of service and love would continue to touch lives long after him."
                <span className="block mt-1 not-italic text-taupe/50">— Sunil Sudhamomal Somani, Founder · Est. 1993</span>
              </p>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-saffron/30" />
            <span className="text-saffron/60 text-xl">✦</span>
            <div className="h-px w-16 bg-saffron/30" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsRef} className="pt-8 md:pt-12 pb-12 md:pb-16 bg-white">
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
                className="animate-item group relative rounded-3xl overflow-hidden h-[380px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-7">
                  {/* Top: Time Badge */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                      <span className="text-white text-sm font-semibold tracking-wide">{program.time}</span>
                    </div>
                    <div className="w-11 h-11 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-saffron group-hover:border-saffron transition-all duration-300">
                      <program.icon size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Bottom: Title & Description */}
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {program.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed max-w-[90%] group-hover:text-white/90 transition-colors duration-300">
                      {program.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
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

      {/* Ram Navami Celebration Event Section */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-cream to-white relative overflow-hidden border-t border-saffron/10">
        {/* Soft background glow */}
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-saffron/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Content */}
            <div className="animate-item">
              <span className="animate-pulse-saffron inline-block px-3 py-1 bg-saffron/10 text-saffron rounded-full text-[10px] font-semibold tracking-wider uppercase mb-3 shadow-[0_0_10px_rgba(235,123,38,0.1)]">
                Upcoming Event
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-3 leading-tight drop-shadow-sm">
                Ram Navami <span className="text-saffron">Celebration</span>
              </h2>
              <p className="text-saffron font-semibold mb-4 text-lg flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 27 March 2026
              </p>
              <p className="text-taupe md:text-base leading-relaxed mb-4 font-light max-w-lg">
                Ram Navami will be celebrated with deep devotion. All devotees are lovingly invited to join the sacred festivities.
              </p>
              <p className="text-espresso font-medium md:text-base leading-relaxed mb-5 max-w-lg border-l-4 border-saffron/60 pl-4 bg-saffron/5 py-1.5 pr-4 rounded-r-lg">
                Celebration begins at <span className="text-saffron font-bold">7:00 AM</span> with Morning Aarti. Further programs will be announced.
              </p>

              {/* Supporting Elements */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { label: 'Aarti', icon: Music },
                  { label: 'Celebration', icon: Sparkles },
                  { label: 'Seva', icon: Heart },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-saffron/20 shadow-sm hover:border-saffron/40 hover:shadow-md transition-all cursor-default">
                    <item.icon size={12} className="text-saffron" />
                    <span className="text-xs font-medium text-espresso">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Contact Card */}
              <div className="relative bg-white rounded-2xl p-4 md:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-saffron/20 group hover:border-saffron/40 transition-colors duration-500 max-w-md">
                {/* Decorative Line */}
                <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-saffron/30 to-transparent opacity-50 group-hover:via-saffron/50 transition-all duration-500" />
                
                <h3 className="font-heading text-base text-espresso font-semibold mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-saffron/10 flex items-center justify-center shadow-inner group-hover:bg-saffron/20 transition-colors duration-500">
                    <Heart size={14} className="text-saffron" />
                  </div>
                  Contact for Seva & Participation
                </h3>
                
                <div className="space-y-2">
                  {/* Name */}
                  <div className="flex items-center gap-3 p-2 rounded-xl bg-cream/50 group-hover:bg-cream transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-saffron/10 flex items-center justify-center flex-shrink-0 relative z-10">
                      <User size={14} className="text-saffron" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-[9px] text-taupe uppercase tracking-widest font-semibold mb-0.5">Contact Person</p>
                      <p className="font-medium text-espresso text-sm">Sandeep (Sandy) Vazirani</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 p-2 rounded-xl bg-cream/50 group-hover:bg-cream transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 delay-100" />
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-saffron/10 flex items-center justify-center flex-shrink-0 relative z-10">
                      <Phone size={14} className="text-saffron" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-[9px] text-taupe uppercase tracking-widest font-semibold mb-0.5">Phone</p>
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <a href="tel:+919322941313" className="font-semibold text-espresso hover:text-saffron transition-colors text-sm">93229 41313</a>
                        <span className="text-taupe/40 text-xs">|</span>
                        <a href="tel:+918484865000" className="font-semibold text-espresso hover:text-saffron transition-colors text-sm">84848 65000</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Devotional Image */}
            <div className="animate-item relative">
              <div className="animate-pulse-saffron relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl p-1.5 md:p-2 bg-white/60 backdrop-blur-md border border-white/80 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-saffron/30 to-gold/30 rounded-2xl md:rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                <img
                  src="/images/Upcoming_events_images (1).png"
                  alt="Ram Navami Celebration"
                  className="relative z-10 w-full h-[280px] md:h-[380px] object-cover rounded-[1rem] md:rounded-[1.5rem] shadow-inner transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                />
                {/* Soft overlay gradient on image */}
                <div className="absolute bottom-1.5 left-1.5 right-1.5 h-1/2 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent z-20 rounded-b-[1rem] md:rounded-b-[1.5rem] pointer-events-none opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="pt-12 pb-20 bg-white overflow-hidden border-t border-saffron/10">
        <div className="text-center max-w-3xl mx-auto mb-10 px-4">
          <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
            Glimpses of Devotion
          </span>
          <h2 className="animate-item font-heading text-3xl md:text-5xl font-bold text-espresso">
            Temple Moments & <span className="text-saffron">Celebrations</span>
          </h2>
        </div>
        <GalleryCarousel />
        
        <div className="text-center mt-10 px-4">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-saffron text-white rounded-full font-medium hover:bg-saffron-dark transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            View All Gallery
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-20 md:py-28 bg-cream border-t border-saffron/10">
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
              <TravelCard
                key={i}
                className="animate-item max-w-full h-[420px]"
                imageUrl={event.image}
                imageAlt={event.title}
                logo={<Calendar className="h-5 w-5 text-white/80" />}
                title={event.title}
                location={event.date}
                overview={event.overview}
                price={event.date.split(',')[0]}
                pricePeriod={event.date.split(',')[1]?.trim() || ''}
                onBookNow={() => window.location.href = '/donate'}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
