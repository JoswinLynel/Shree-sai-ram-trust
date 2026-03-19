import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CTASection } from '@/components/CTASection';

import {
  Music, Utensils, Users, Heart, Calendar, Clock,
  ChevronDown, ChevronUp, Flower, Sparkles, User, Phone
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Programs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);


  useScrollReveal('.animate-item');


  const dailyPrograms = [
    {
      icon: Music,
      title: 'Kakad Aarti (Morning)',
      time: '6:30 AM - 7:30 AM',
      desc: 'Begin your day with the divine morning aarti dedicated to Sai Baba. Experience the peaceful atmosphere as devotees gather for the first prayers of the day.',
      activities: ['Aarti', 'Abhishek', 'Prasad Distribution'],
      image: '/images/Daily_programme_images (1).png'
    },
    {
      icon: Utensils,
      title: 'Madhyan Aarti & Prasad',
      time: '12:00 PM - 1:00 PM',
      desc: 'Midday prayers followed by community lunch (bhandara) served to all devotees free of cost.',
      activities: ['Aarti', 'Community Lunch', 'Anna Distribution'],
      image: '/images/Daily_programme_images (2).png'
    },
    {
      icon: Music,
      title: 'Dhoop Aarti (Evening)',
      time: '5:00 PM - 6:00 PM',
      desc: 'Evening prayers with devotional songs and bhajans that fill the temple with divine energy.',
      activities: ['Aarti', 'Bhajans', 'Kirtan'],
      image: '/images/Daily_programme_images (3).png'
    },
    {
      icon: Users,
      title: 'Shej Aarti & Satsang',
      time: '7:00 PM - 8:30 PM',
      desc: 'The final aarti of the day followed by satsang, spiritual discourse, and community gathering.',
      activities: ['Aarti', 'Satsang', 'Spiritual Discourse', 'Q&A'],
      image: '/images/Daily_programme_images (4).png'
    },
  ];

  const weeklyPrograms = [
    { day: 'Thursday', title: 'Sai Baba Special Aarti', time: '7:00 AM & 7:00 PM', highlight: true, image: '/images/daily_aarti_realistic.png' },
    { day: 'Saturday', title: 'Hanuman Chalisa & Bhajans', time: '6:00 PM', highlight: false, image: '/images/daily_satsang_realistic.png' },
    { day: 'Sunday', title: 'Special Satsang & Prasad', time: '10:00 AM - 1:00 PM', highlight: true, image: '/images/daily_prasad_realistic.png' },
  ];

  const upcomingEvents = [
    {
      title: 'Ram Navami Celebration',
      date: '27 March 2026',
      time: '7:00 AM - 6:00 PM',
      description: 'Join us for a grand celebration of Lord Ram\'s birth anniversary. The day will include special pujas, bhajans, kirtan, and community feast.',
      activities: ['Special Puja', 'Bhajan Sandhya', 'Community Bhandara', 'Cultural Programs'],
      image: '/images/Upcoming_events_images (1).png'
    },
    {
      title: 'Guru Purnima',
      date: '29 July 2026',
      time: '7:00 AM - 6:00 PM',
      description: 'A day dedicated to honoring our spiritual teachers. Special programs including paduka puja, guru vandana, and devotional singing.',
      activities: ['Paduka Puja', 'Guru Vaudana', 'Satsang', 'Special Prasad'],
      image: '/images/Upcoming_events_images (2).png'
    },
    {
      title: 'Sai Baba Punyatithi (Vijayadashami)',
      date: '22 October 2026',
      time: '7:00 AM - 6:00 PM',
      description: 'Commemorating the day Sai Baba left his physical body. A day of remembrance, prayer, and reflection on his teachings.',
      activities: ['Continuous Bhajans', 'Reading of Sai Satcharitra', 'Annadan', 'Deep Daan'],
      image: '/images/Upcoming_events_images (3).png'
    },

  ];

  const sevaOpportunities = [
    { icon: Utensils, title: 'Prasad Preparation', desc: 'Help prepare and serve community meals' },
    { icon: Flower, title: 'Flower Decoration', desc: 'Decorate the temple with fresh flowers' },
    { icon: Users, title: 'Event Management', desc: 'Assist in organizing temple events' },
    { icon: Heart, title: 'Community Service', desc: 'Participate in charitable activities' },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <img
            src="/images/programs_bowl.jpg"
            alt="Programs Background"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />
        </div>
        <div className="relative z-10 text-center px-6 w-full max-w-[750px] mx-auto mt-8 md:mt-12">
          <div className="animate-item mb-6">
            <span className="inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase shadow-xl">
              Programs & Events
            </span>
          </div>
          <h1 className="animate-item font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Programs & <span className="text-gold">Events</span>
          </h1>
          <p className="animate-item text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl mx-auto">
            Discover our daily rituals, weekly gatherings, and special celebrations throughout the year
          </p>
        </div>
      </div>

      {/* Ram Navami Celebration Event Section */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-cream to-white relative overflow-hidden">
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

      {/* Daily Programs */}
      <section className="py-12 md:py-16 bg-cream border-t border-saffron/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Daily Schedule
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-3">
              Daily <span className="text-saffron">Programs</span>
            </h2>
            <p className="animate-item text-taupe text-sm md:text-base">
              Join us every day for prayers, aarti, and community gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {dailyPrograms.map((program, i) => (
              <div
                key={i}
                className="animate-item group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-default"
              >
                {/* Background Image */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/30 opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 p-5 md:p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:bg-saffron/30 transition-colors duration-500">
                    <program.icon size={20} className="text-white drop-shadow-sm" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-base md:text-lg font-bold text-white mb-0.5 group-hover:text-gold transition-colors duration-300">{program.title}</h3>
                    <p className="text-gold font-medium text-[10px] md:text-xs mb-2.5 uppercase tracking-wide">{program.time}</p>
                    <p className="text-white/75 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">{program.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {program.activities.map((activity, j) => (
                        <span key={j} className="px-2.5 py-0.5 bg-white/10 backdrop-blur-sm text-white/90 text-[10px] md:text-xs rounded-full border border-white/10">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Programs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#fceee8] text-[#c94b26] rounded-full text-xs font-semibold tracking-wide mb-4">
                Weekly Schedule
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2a1d18] mb-6">
                Weekly <span className="text-[#c94b26]">Special Programs</span>
              </h2>
              <p className="text-[#746C65] md:text-lg leading-relaxed mb-8">
                In addition to our daily programs, we host special gatherings throughout the week. Thursday is particularly significant as it is Sai Baba's day, featuring extended aartis and special prasad.
              </p>

              <div className="bg-[#f7f5f0] rounded-2xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold text-[#2a1d18] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#fceee8] rounded-full flex items-center justify-center">
                    <Clock size={18} className="text-[#c94b26]" />
                  </div>
                  Temple Timings
                </h3>
                <div className="space-y-4 text-sm font-medium">
                  <div className="flex justify-between items-center pb-4 border-b border-[#e9e4dc]">
                    <span className="text-[#746C65]">Opening Time</span>
                    <span className="text-[#2a1d18]">5:30 AM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-[#e9e4dc]">
                    <span className="text-[#746C65]">Closing Time</span>
                    <span className="text-[#2a1d18]">8:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#746C65]">Best Time to Visit</span>
                    <span className="text-[#2a1d18]">6:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-5 pt-10 lg:pt-0">
              {weeklyPrograms.map((program, i) => (
                <div
                  key={i}
                  className="animate-item relative rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-default group overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Background Image */}
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  
                  {/* Gradient Overlay */}
                  {program.highlight ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#b44322]/95 via-[#b44322]/80 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-90 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-transparent backdrop-blur-[2px] z-0 transition-opacity duration-500 group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-white/40 z-0" />
                    </>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <div>
                      <p className={`text-sm font-semibold mb-1 tracking-wider uppercase ${program.highlight ? 'text-gold' : 'text-saffron'}`}>
                        {program.day}
                      </p>
                      <h3 className={`font-heading text-xl md:text-2xl font-bold ${program.highlight ? 'text-white' : 'text-espresso'}`}>
                        {program.title}
                      </h3>
                    </div>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      program.highlight 
                        ? 'bg-black/25 backdrop-blur-md text-white border border-white/10 shadow-inner' 
                        : 'bg-white/70 backdrop-blur-md text-espresso border border-saffron/10 shadow-sm'
                    }`}>
                      <Clock size={16} className={program.highlight ? 'text-gold' : 'text-saffron'} />
                      {program.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Special Occasions
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Upcoming <span className="text-saffron">Events</span>
            </h2>
            <p className="animate-item text-taupe">
              Mark your calendar for these special celebrations at our temple
            </p>
          </div>

          <div className="space-y-5">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="animate-item bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="h-44 md:h-auto md:w-[260px] flex-shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-saffron/10 text-saffron rounded-full text-xs font-medium flex items-center gap-1">
                        <Calendar size={12} />
                        {event.date}
                      </span>
                      <span className="px-3 py-1 bg-cream text-taupe rounded-full text-xs flex items-center gap-1">
                        <Clock size={12} />
                        {event.time}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-espresso mb-2">{event.title}</h3>
                    <p className="text-taupe text-sm leading-relaxed">{event.description}</p>

                    <div className={`overflow-hidden transition-all duration-300 ${expandedEvent === i ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {event.activities.map((activity, j) => (
                          <span key={j} className="px-3 py-1 bg-cream text-taupe text-xs rounded-full">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedEvent(expandedEvent === i ? null : i)}
                      className="mt-3 text-saffron font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {expandedEvent === i ? 'Show Less' : 'Show More'}
                      {expandedEvent === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seva Opportunities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                Get Involved
              </span>
              <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                Seva <span className="text-saffron">Opportunities</span>
              </h2>
              <p className="animate-item text-taupe leading-relaxed mb-8">
                Service to humanity is service to God. We invite you to participate in our various seva activities. Whether you have an hour or a day to spare, your contribution makes a difference in our community.
              </p>

              <div className="animate-item grid sm:grid-cols-2 gap-4">
                {sevaOpportunities.map((seva, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                    <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <seva.icon size={20} className="text-saffron" />
                    </div>
                    <div>
                      <h4 className="font-medium text-espresso text-sm">{seva.title}</h4>
                      <p className="text-taupe text-xs mt-1">{seva.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-item">
              <img
                src="/images/seva_offering.jpg"
                alt="Seva"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
