import { Link } from 'react-router-dom';
import { Image, Heart } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Gifs/devotion_bg.gif"
          alt="Temple Devotion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="animate-item font-heading text-3xl md:text-5xl font-bold text-white mb-6">
          Witness Our <span className="text-gold animate-pulse inline-block">Devotion</span>
        </h2>
        <p className="animate-item text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Explore our gallery to see the vibrant celebrations, peaceful prayers, and the community that makes Shree Sai Ram Trust special.
        </p>
        <div className="animate-item flex flex-wrap justify-center gap-4">
          <Link
            to="/gallery"
            className="group px-8 py-4 bg-saffron text-white rounded-full font-medium hover:bg-saffron-dark transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Image size={18} className="inline mr-2" />
            View Gallery
          </Link>
          <Link
            to="/donate"
            className="px-8 py-4 bg-white text-espresso rounded-full font-medium hover:bg-cream transition-all duration-300 flex items-center gap-2"
          >
            <Heart size={18} className="inline mr-2" />
            Support Our Mission
          </Link>
        </div>
      </div>
    </section>
  );
}
