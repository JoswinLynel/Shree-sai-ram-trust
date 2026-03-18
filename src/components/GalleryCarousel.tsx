

const galleryImages = [
  '/images/gallery/DSC01349 (1).jpg',
  '/images/gallery/DSC01350 (1).jpg',
  '/images/gallery/DSC01358 (1).jpg',
  '/images/gallery/DSC01362 (1).jpg',
  '/images/gallery/DSC01364.JPG',
  '/images/gallery/DSC01368 (1).jpg',
  '/images/gallery/DSC01369.JPG',
  '/images/gallery/DSC01387.JPG',
];

export function GalleryCarousel() {
  // We duplicate the array to allow for a seamless infinite scroll loop
  // Triple the array to ensure enough content for wide screens
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <div className="w-full relative overflow-hidden py-10 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      {/* We use a custom CSS animation 'scroll-left' in index.css */}
      <div className="flex gap-4 md:gap-6 px-4 animate-[scroll-left_60s_linear_infinite] group-hover:[animation-play-state:paused] hover:cursor-grab active:cursor-grabbing w-max">
        {duplicatedImages.map((src, i) => (
          <div 
            key={i} 
            className="relative h-[200px] md:h-[300px] w-[280px] md:w-[450px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:ring-4 ring-gold/50"
          >
            <img 
              src={src} 
              alt="Temple Moment" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
