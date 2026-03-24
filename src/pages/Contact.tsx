import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CTASection } from '@/components/CTASection';
import { SEOHead } from '@/components/SEOHead';

import {
  MapPin, Phone, Mail, Clock, Send, MessageCircle,
  CheckCircle, Facebook, Instagram, Youtube
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  useScrollReveal('.animate-item');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Address', content: <p>Bk/No. 246,<br />Mukund Nagar, Ulhasnagar, Maharashtra 421002, India</p>, link: null },
    { icon: Phone, title: 'Phone', content: '+91 93229 41313 / +91 84848 65000', link: 'tel:+919322941313' },
    { icon: Mail, title: 'Email', content: 'shreesairamtrust@gmail.com', link: 'mailto:shreesairamtrust@gmail.com' },
    { icon: Clock, title: 'Temple Timings', content: '5:30 AM - 8:30 PM (Daily)', link: null },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      <SEOHead
        title="Contact Us – Temple Address, Phone & Directions"
        description="Contact Shree Sai Ram Trust in Ulhasnagar. Visit us at Bk/No. 246, Mukund Nagar, or call +91 93229 41313. Temple timings 5:30 AM – 8:30 PM daily."
        keywords="Shree Sai Ram Trust contact, Ulhasnagar temple address, temple phone number, temple directions, visit Sai Baba temple"
      />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <img
            src="/images/contact_hero_realistic.png"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30 scale-105"
          />


          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />
        </div>
        <div className="relative z-10 text-center px-6 w-full max-w-[750px] mx-auto mt-8 md:mt-12">
          <div className="animate-item mb-6">
            <span className="inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase shadow-xl">
              Get in Touch
            </span>
          </div>
          <h1 className="animate-item font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="animate-item text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl mx-auto">
            We welcome your questions, suggestions, and participation in our temple activities
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div>
              <span className="animate-item inline-block px-3 py-1 bg-saffron/10 text-saffron rounded-full text-xs font-medium mb-3">
                Contact Information
              </span>
              <h2 className="animate-item font-heading text-2xl md:text-3xl font-bold text-espresso mb-3">
                Visit or <span className="text-saffron">Reach Out</span>
              </h2>
              <p className="animate-item text-taupe text-sm leading-relaxed mb-6">
                Whether you want to plan a visit, volunteer for seva, or have any questions about our programs, we are here to help.
              </p>

              <div className="space-y-3 mb-6">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="animate-item flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} className="text-saffron" />
                    </div>
                    <div>
                      <h3 className="font-medium text-espresso text-sm mb-0.5">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-taupe text-sm hover:text-saffron transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-taupe text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="animate-item">
                <h3 className="font-medium text-espresso text-sm mb-3">Follow Us</h3>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    href="https://wa.me/919322941313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="animate-item">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="font-heading text-xl font-semibold text-espresso mb-6">Send us a Message</h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h4 className="font-heading text-xl font-semibold text-espresso mb-2">Message Sent!</h4>
                    <p className="text-taupe">Thank you for reaching out. We will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-taupe mb-2">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-cream rounded-xl border-0 focus:ring-2 focus:ring-saffron text-espresso"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-taupe mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-cream rounded-xl border-0 focus:ring-2 focus:ring-saffron text-espresso"
                          placeholder="+91 93229 41313"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-taupe mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-cream rounded-xl border-0 focus:ring-2 focus:ring-saffron text-espresso"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-taupe mb-2">Subject</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-cream rounded-xl border-0 focus:ring-2 focus:ring-saffron text-espresso"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="visit">Plan a Visit</option>
                        <option value="seva">Volunteer / Seva</option>
                        <option value="donation">Donation Query</option>
                        <option value="event">Event Booking</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-taupe mb-2">Your Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-cream rounded-xl border-0 focus:ring-2 focus:ring-saffron text-espresso resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-saffron text-white rounded-xl font-medium hover:bg-saffron-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Location
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Find Us on the <span className="text-saffron">Map</span>
            </h2>
            <p className="animate-item text-taupe">
              We are located in Mukund Nagar, Ulhasnagar, easily accessible by road and public transport.
            </p>
          </div>

          <div className="animate-item grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            {/* Left: Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2762!2d73.1660!3d19.2384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjVQOStSODQsIE11a3VuZCBOYWdhciwgVWxoYXNuYWdhciwgTWFoYXJhc2h0cmEgNDIxMDAyLCBJbmRpYQ!5e0!3m2!1sen!2sin!4v1710547200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Sai Ram Trust Location"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right: Address & Directions */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-saffron" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-espresso">Shree Sai Ram Trust</h3>
                </div>
                <p className="text-taupe text-sm leading-relaxed mb-3">
                  Bk/No. 246,<br />
                  Mukund Nagar, Ulhasnagar, Maharashtra 421002, India
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=65P9%2BR84%2C+Mukund+Nagar%2C+Ulhasnagar%2C+Maharashtra+421002%2C+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-saffron text-white rounded-lg font-medium text-sm hover:bg-saffron-dark transition-all duration-300"
                >
                  <MapPin size={14} />
                  Open in Google Maps
                </a>
              </div>

              {[
                { title: 'By Train', desc: 'Nearest station is Ulhasnagar Railway Station (2 km away)' },
                { title: 'By Bus', desc: 'Regular buses from Kalyan, Thane, and Mumbai' },
                { title: 'By Car', desc: 'Ample parking space available near the temple' },
              ].map((item, i) => (
                <div key={i} className="bg-cream rounded-xl p-4 flex items-center gap-3">
                  <div className="w-7 h-7 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-saffron text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-espresso text-sm">{item.title}</h4>
                    <p className="text-taupe text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Quick Help
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Frequently Asked <span className="text-saffron">Questions</span>
            </h2>
          </div>

          <div className="animate-item grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { q: 'What should I wear to the temple?', a: 'Modest clothing is recommended. Traditional Indian attire is welcome.' },
              { q: 'Can I bring offerings?', a: 'Yes, fresh flowers, fruits, and sweets are welcome as offerings.' },
              { q: 'Is photography allowed?', a: 'Photography is allowed in the courtyard but not during aarti.' },
              { q: 'Are there facilities for senior citizens?', a: 'Yes, we have wheelchair access and seating areas.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5">
                <h4 className="font-medium text-espresso mb-2">{faq.q}</h4>
                <p className="text-taupe text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
