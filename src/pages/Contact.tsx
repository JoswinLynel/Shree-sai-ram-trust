import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Address', content: 'Jhulelal Mandir Road, Ulhasnagar, Maharashtra 421002', link: null },
    { icon: Phone, title: 'Phone', content: '+91 98765 43210', link: 'tel:+919876543210' },
    { icon: Mail, title: 'Email', content: 'info@shreesairamtrust.org', link: 'mailto:info@shreesairamtrust.org' },
    { icon: Clock, title: 'Temple Timings', content: '5:30 AM - 8:30 PM (Daily)', link: null },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Page Header */}
      <div className="relative py-20 md:py-28 bg-espresso">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/visit_courtyard.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="animate-item font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="animate-item text-white/70 text-lg max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us for any queries or to plan your visit.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div>
              <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                Contact Information
              </span>
              <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                Visit or <span className="text-saffron">Reach Out</span>
              </h2>
              <p className="animate-item text-taupe leading-relaxed mb-8">
                Whether you want to plan a visit, volunteer for seva, or have any questions about our programs, we are here to help. Feel free to contact us through any of the channels below.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, i) => (
                  <div 
                    key={i} 
                    className="animate-item flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={22} className="text-saffron" />
                    </div>
                    <div>
                      <h3 className="font-medium text-espresso mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-taupe hover:text-saffron transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-taupe">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="animate-item">
                <h3 className="font-medium text-espresso mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    <Facebook size={22} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    <Instagram size={22} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    <Youtube size={22} />
                  </a>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    <MessageCircle size={22} />
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
                          placeholder="+91 98765 43210"
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
              We are located on Jhulelal Mandir Road in Ulhasnagar, easily accessible by road and public transport.
            </p>
          </div>

          <div className="animate-item relative rounded-2xl overflow-hidden shadow-xl">
            {/* Placeholder for Google Maps */}
            <div className="aspect-video bg-cream flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={40} className="text-saffron" />
                </div>
                <h3 className="font-heading font-semibold text-espresso mb-2">Shree Sai Ram Trust</h3>
                <p className="text-taupe text-sm mb-4">Jhulelal Mandir Road, Ulhasnagar</p>
                <a 
                  href="https://maps.google.com/?q=Jhulelal+Mandir+Road+Ulhasnagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white rounded-full font-medium hover:bg-saffron-dark transition-all duration-300"
                >
                  <MapPin size={18} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="animate-item mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: 'By Train', desc: 'Nearest station is Ulhasnagar Railway Station (2 km away)' },
              { title: 'By Bus', desc: 'Regular buses from Kalyan, Thane, and Mumbai' },
              { title: 'By Car', desc: 'Ample parking space available near the temple' },
            ].map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 text-center">
                <h4 className="font-heading font-semibold text-espresso mb-2">{item.title}</h4>
                <p className="text-taupe text-sm">{item.desc}</p>
              </div>
            ))}
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
    </div>
  );
}
