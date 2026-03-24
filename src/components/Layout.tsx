import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sai-baba', label: 'Sai Baba' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Top Bar - Marquee */}
      <div className="bg-saffron text-white py-2 overflow-hidden flex relative whitespace-nowrap shimmer-bar">
        <div className="animate-[marquee-lr_50s_linear_infinite] flex w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex px-4 items-center space-x-4 text-xs md:text-sm">
              <span>🌼 Ram Navami Celebration – 27 March 2026 | Morning Aarti at 7:00 AM | All devotees are warmly invited.</span>
              <span>|</span>
              <span>🌼 राम नवमी उत्सव – 27 मार्च 2026 | सुबह 7:00 बजे काकड़ आरती | सभी भक्तों का हार्दिक स्वागत है।</span>
              <span className="pr-4">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Shree Sai Ram"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path)
                  ? 'bg-saffron text-white'
                  : 'text-espresso hover:bg-saffron/10 hover:text-saffron'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/donate"
              className="px-6 py-2.5 bg-gradient-to-r from-saffron to-saffron-dark text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 text-espresso hover:text-saffron transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
            <img src="/images/logo.png" alt="Shree Sai Ram" className="h-10 w-auto" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-espresso hover:text-saffron bg-cream rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 overflow-y-auto flex-1">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive(link.path)
                    ? 'bg-saffron text-white'
                    : 'text-espresso hover:bg-saffron/10 hover:text-saffron'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                to="/donate"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-saffron to-saffron-dark text-white rounded-xl font-medium"
              >
                Donate Now
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-4 text-sm text-taupe">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-saffron" />
                <a href="tel:+919322941313" className="hover:text-saffron transition-colors">+91 93229 41313 / +91 84848 65000</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-saffron" />
                <a href="mailto:info@shreesaibabatrust.org" className="hover:text-saffron transition-colors">info@shreesaibabatrust.org</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-espresso text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Column */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <img
                  src="/images/logo.png"
                  alt="Shree Sai Ram"
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                A sacred space dedicated to Sai Baba's teachings of love, compassion, and service to humanity. Join us in prayer and community.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron transition-colors">
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-gold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 text-sm hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-heading font-semibold text-gold mb-4">Daily Programs</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li className="flex justify-between">
                  <span>Morning Aarti</span>
                  <span className="text-gold">6:30 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Afternoon Prasad</span>
                  <span className="text-gold">12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Evening Satsang</span>
                  <span className="text-gold">7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Closing Time</span>
                  <span className="text-gold">8:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-gold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-saffron mt-0.5 flex-shrink-0" />
                  <span>Bk/No. 246,<br />Mukund Nagar, Ulhasnagar, Maharashtra 421002, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-saffron flex-shrink-0" />
                  <a href="tel:+919322941313" className="hover:text-gold transition-colors">+91 93229 41313 / +91 84848 65000</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-saffron flex-shrink-0" />
                  <a href="mailto:info@shreesaibabatrust.org" className="hover:text-gold transition-colors">info@shreesaibabatrust.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/50">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
              <div className="flex items-center gap-4">
                <p>Made with devotion for the community</p>
                <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                <a 
                  href="https://www.esyai.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold transition-colors"
                >
                  Made by EsyAI
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
