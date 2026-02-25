import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
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

  const galleryImages = [
    { src: '/images/gallery_bhajan.jpg', title: 'Sai Bhajan Program', category: 'spiritual', desc: 'Devotees singing devotional songs' },
    { src: '/images/gallery_ramnavami.jpg', title: 'Ram Navami Celebration', category: 'festival', desc: 'Grand festival celebration' },
    { src: '/images/gallery_prasad.jpg', title: 'Community Prasad', category: 'seva', desc: 'Serving food to devotees' },
    { src: '/images/gallery_aarti.jpg', title: 'Evening Aarti', category: 'spiritual', desc: 'Traditional lamp ceremony' },
    { src: '/images/gallery_gurupurnima.jpg', title: 'Guru Purnima', category: 'festival', desc: 'Honoring spiritual teachers' },
    { src: '/images/events_group.jpg', title: 'Community Gathering', category: 'community', desc: 'Devotees coming together' },
    { src: '/images/hero_courtyard.jpg', title: 'Temple Courtyard', category: 'temple', desc: 'Main temple courtyard' },
    { src: '/images/about_interior.jpg', title: 'Temple Interior', category: 'temple', desc: 'Beautiful temple interior' },
    { src: '/images/seva_offering.jpg', title: 'Flower Offering', category: 'seva', desc: 'Preparing offerings' },
    { src: '/images/donate_plate.jpg', title: 'Prayer Offering', category: 'spiritual', desc: 'Traditional offerings' },
    { src: '/images/visit_courtyard.jpg', title: 'Devotees Visiting', category: 'community', desc: 'Families visiting the temple' },
    { src: '/images/closing_lamps.jpg', title: 'Evening Lamps', category: 'temple', desc: 'Beautiful lamp decoration' },
  ];

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'spiritual', label: 'Spiritual' },
    { key: 'festival', label: 'Festivals' },
    { key: 'seva', label: 'Seva' },
    { key: 'community', label: 'Community' },
    { key: 'temple', label: 'Temple' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Page Header */}
      <div className="relative py-20 md:py-28 bg-espresso">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/gallery_aarti.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="animate-item font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Photo <span className="text-gold">Gallery</span>
          </h1>
          <p className="animate-item text-white/70 text-lg max-w-2xl mx-auto">
            Glimpses of our spiritual programs, festivals, and community gatherings
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="animate-item flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-saffron text-white'
                    : 'bg-white text-espresso hover:bg-saffron/10 hover:text-saffron'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, i) => (
              <div 
                key={i} 
                className="animate-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold text-xs font-medium uppercase tracking-wide">{image.category}</p>
                  <h3 className="text-white font-medium text-sm">{image.title}</h3>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-taupe">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Videos
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Watch Our <span className="text-saffron">Programs</span>
            </h2>
            <p className="animate-item text-taupe">
              Experience the divine atmosphere through our recorded programs
            </p>
          </div>

          <div className="animate-item grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-cream rounded-2xl overflow-hidden">
              <div className="aspect-video bg-espresso/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-taupe text-sm">Thursday Special Aarti</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-espresso mb-2">Sai Baba Thursday Aarti</h3>
                <p className="text-taupe text-sm">Experience the divine Thursday evening aarti dedicated to Sai Baba</p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl overflow-hidden">
              <div className="aspect-video bg-espresso/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-taupe text-sm">Sunday Satsang</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-espresso mb-2">Weekly Satsang Highlights</h3>
                <p className="text-taupe text-sm">Bhajans, spiritual discourse, and community gathering</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
