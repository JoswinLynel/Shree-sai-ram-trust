import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Users, Target, Lightbulb } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

function MissionVisionCard({ title, description, icon: Icon }: { title: string, description: string, icon: any }) {
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = !shouldReduceMotion;

  const containerVariants: any = {
    rest: {
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hover: shouldAnimate ? {
      scale: 1.02,
      y: -4,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
      }
    } : {},
  };

  const contentVariants: any = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.95,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className="bg-[#F7F2EB] rounded-[2rem] p-10 md:p-12 shadow-sm border border-saffron/5 h-full cursor-pointer relative overflow-hidden group"
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col h-full relative z-10"
      >
        <motion.div variants={itemVariants} className="w-14 h-14 bg-[#F3E1D9] rounded-2xl flex items-center justify-center mb-8">
          <Icon size={24} className="text-[#A53E2B]" />
        </motion.div>

        <motion.h3 variants={itemVariants} className="font-heading text-[28px] font-bold text-espresso mb-5">
          {title}
        </motion.h3>

        <motion.p variants={itemVariants} className="text-[#6D635B] text-base md:text-lg leading-[1.8]">
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
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
    gsap.set('.animate-item', { opacity: 0, y: 30 });

    ScrollTrigger.batch('.animate-item', {
      interval: 0.1,
      batchMax: 3,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', overwrite: true }),
      onLeave: batch => gsap.to(batch, { opacity: 0, y: -30, duration: 0.8, stagger: 0.15, ease: 'power3.inOut', overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', overwrite: true }),
      onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.inOut', overwrite: true }),
      start: 'top 85%',
      end: 'bottom 15%',
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const trustees = [
    { name: 'Sunil Sudhamomal Somani', role: 'President', image: '/images/trustee1_new.jpg' },
    { name: 'Radhika Sudhamomal Somani', role: 'Secretary', image: '/images/trustee2_new.png' },
    { name: 'Sandeep Vazirani', role: 'Treasurer', image: '/images/trustee3.jpg' },
  ];

  const values = [
    { icon: Heart, title: 'Seva (Service)', desc: 'Selfless service to humanity without expecting anything in return' },
    { icon: Users, title: 'Community', desc: 'Building a strong, supportive community of devotees' },
    { icon: Target, title: 'Devotion', desc: 'Deep faith and dedication to Sai Baba teachings' },
    { icon: Lightbulb, title: 'Wisdom', desc: 'Spreading spiritual knowledge and guidance' },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
        <div className="absolute inset-0 hero-parallax">
          <img
            src="/images/about_interior.jpg"
            alt="About Us Background"
            className="w-full h-[130%] object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/50 to-espresso/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8 md:mt-12">
          <span className="hero-animate inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase mb-6 shadow-xl">
            Our Heritage
          </span>
          <h1 className="hero-animate font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            About <span className="text-gold">Us</span>
          </h1>
          <p className="hero-animate text-white/90 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
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

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <MissionVisionCard
              title="Our Mission"
              description="To spread Sai Baba's message of love, compassion, and unity through spiritual practices, community service, and charitable activities. We aim to create a welcoming space where devotees can connect with the divine and serve humanity."
              icon={Target}
            />
            <MissionVisionCard
              title="Our Vision"
              description="To be a beacon of spiritual light in our community, inspiring individuals to lead lives of purpose, compassion, and devotion. We envision a world where the teachings of Sai Baba bring peace and harmony to all."
              icon={Lightbulb}
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
