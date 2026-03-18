import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import {
  Music, Utensils, Users, Heart, Calendar, Clock,
  ChevronDown, ChevronUp, Flower

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
      activities: ['Aarti', 'Abhishek', 'Prasad Distribution']
    },
    {
      icon: Utensils,
      title: 'Madhyan Aarti & Prasad',
      time: '12:00 PM - 1:00 PM',
      desc: 'Midday prayers followed by community lunch (bhandara) served to all devotees free of cost.',
      activities: ['Aarti', 'Community Lunch', 'Anna Distribution']
    },
    {
      icon: Music,
      title: 'Dhoop Aarti (Evening)',
      time: '5:00 PM - 6:00 PM',
      desc: 'Evening prayers with devotional songs and bhajans that fill the temple with divine energy.',
      activities: ['Aarti', 'Bhajans', 'Kirtan']
    },
    {
      icon: Users,
      title: 'Shej Aarti & Satsang',
      time: '7:00 PM - 8:30 PM',
      desc: 'The final aarti of the day followed by satsang, spiritual discourse, and community gathering.',
      activities: ['Aarti', 'Satsang', 'Spiritual Discourse', 'Q&A']
    },
  ];

  const weeklyPrograms = [
    { day: 'Thursday', title: 'Sai Baba Special Aarti', time: '7:00 AM & 7:00 PM', highlight: true },
    { day: 'Saturday', title: 'Hanuman Chalisa & Bhajans', time: '6:00 PM', highlight: false },
    { day: 'Sunday', title: 'Special Satsang & Prasad', time: '10:00 AM - 1:00 PM', highlight: true },
  ];

  const upcomingEvents = [
    {
      title: 'Ram Navami Celebration',
      date: '27 March 2026',
      time: '7:00 AM - 6:00 PM',
      description: 'Join us for a grand celebration of Lord Ram\'s birth anniversary. The day will include special pujas, bhajans, kirtan, and community feast.',
      activities: ['Special Puja', 'Bhajan Sandhya', 'Community Bhandara', 'Cultural Programs'],
      image: '/images/event_ramnavami_realistic.png'
    },
    {
      title: 'Guru Purnima',
      date: '29 July 2026',
      time: '7:00 AM - 6:00 PM',
      description: 'A day dedicated to honoring our spiritual teachers. Special programs including paduka puja, guru vandana, and devotional singing.',
      activities: ['Paduka Puja', 'Guru Vaudana', 'Satsang', 'Special Prasad'],
      image: '/images/event_gurupurnima_realistic.png'
    },
    {
      title: 'Sai Baba Punyatithi (Vijayadashami)',
      date: '22 October 2026',
      time: '7:00 AM - 6:00 PM',
      description: 'Commemorating the day Sai Baba left his physical body. A day of remembrance, prayer, and reflection on his teachings.',
      activities: ['Continuous Bhajans', 'Reading of Sai Satcharitra', 'Annadan', 'Deep Daan'],
      image: '/images/event_punyatithi_realistic.png'
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

      {/* Daily Programs */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Daily Schedule
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Daily <span className="text-saffron">Programs</span>
            </h2>
            <p className="animate-item text-taupe">
              Join us every day for prayers, aarti, and community gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dailyPrograms.map((program, i) => (
              <div
                key={i}
                className="animate-item bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <program.icon size={24} className="text-saffron" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-espresso mb-1">{program.title}</h3>
                    <p className="text-saffron font-medium text-sm mb-3">{program.time}</p>
                    <p className="text-taupe text-sm mb-4">{program.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.activities.map((activity, j) => (
                        <span key={j} className="px-3 py-1 bg-cream text-taupe text-xs rounded-full">
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                Weekly Schedule
              </span>
              <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                Weekly <span className="text-saffron">Special Programs</span>
              </h2>
              <p className="animate-item text-taupe leading-relaxed mb-8">
                In addition to our daily programs, we host special gatherings throughout the week. Thursday is particularly significant as it is Sai Baba's day, featuring extended aartis and special prasad.
              </p>

              <div className="animate-item bg-cream rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold text-espresso mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-saffron" />
                  Temple Timings
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-taupe">Opening Time</span>
                    <span className="font-medium text-espresso">5:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-taupe">Closing Time</span>
                    <span className="font-medium text-espresso">8:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-taupe">Best Time to Visit</span>
                    <span className="font-medium text-espresso">6:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {weeklyPrograms.map((program, i) => (
                <div
                  key={i}
                  className={`animate-item rounded-2xl p-6 ${program.highlight
                    ? 'bg-saffron text-white'
                    : 'bg-cream text-espresso'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium mb-1 ${program.highlight ? 'text-gold' : 'text-saffron'}`}>
                        {program.day}
                      </p>
                      <h3 className="font-heading text-lg font-semibold">{program.title}</h3>
                    </div>
                    <div className="text-right">
                      <Clock size={18} className={`inline mr-1 ${program.highlight ? 'text-gold' : 'text-saffron'}`} />
                      <span className="text-sm">{program.time}</span>
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

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="animate-item bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="h-48 md:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 bg-saffron/10 text-saffron rounded-full text-sm font-medium flex items-center gap-1">
                        <Calendar size={14} />
                        {event.date}
                      </span>
                      <span className="px-3 py-1 bg-cream text-taupe rounded-full text-sm flex items-center gap-1">
                        <Clock size={14} />
                        {event.time}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-semibold text-espresso mb-3">{event.title}</h3>
                    <p className="text-taupe text-sm mb-4">{event.description}</p>

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
                      className="mt-4 text-saffron font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
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
    </div>
  );
}
