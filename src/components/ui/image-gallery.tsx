'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface GalleryImage {
    src: string;
    title: string;
    category?: string;
    desc?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
    onImageSelect?: (src: string) => void;
}

export function ImageGallery({ images, onImageSelect }: ImageGalleryProps) {
    // Distribute images into 3 columns for a masonry look
    const columns: GalleryImage[][] = [[], [], []];
    images.forEach((img, i) => {
        columns[i % 3].push(img);
    });

    return (
        <div className="relative flex w-full flex-col items-center justify-center py-10 px-4">
            <div className="mx-auto grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {columns.map((colImages, colIndex) => (
                    <div key={colIndex} className="grid gap-6 h-fit">
                        {colImages.map((img, index) => {
                            // Assign random portrait/landscape aspect ratios for masonry effect
                            const isPortrait = Math.random() > 0.5;
                            const ratio = isPortrait ? 9 / 16 : 16 / 9;

                            return (
                                <AnimatedImage
                                    key={`${colIndex}-${index}`}
                                    imageData={img}
                                    ratio={ratio}
                                    onImageSelect={onImageSelect}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

interface AnimatedImageProps {
    imageData: GalleryImage;
    className?: string;
    ratio: number;
    onImageSelect?: (src: string) => void;
}

function AnimatedImage({ imageData, ratio, className, onImageSelect }: AnimatedImageProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });
    const [isLoading, setIsLoading] = React.useState(true);

    const handleError = () => {
        // Fallback or placeholder logic if needed
    };

    return (
        <AspectRatio
            ref={ref}
            ratio={ratio}
            className={cn("bg-accent overflow-hidden relative size-full rounded-2xl border shadow-md group hover:shadow-xl transition-all duration-300 cursor-pointer", className)}
            onClick={() => onImageSelect?.(imageData.src)}
        >
            <img
                alt={imageData.title}
                src={imageData.src}
                className={cn(
                    'size-full rounded-2xl object-cover opacity-0 translate-y-8 transition-all duration-1000 ease-in-out group-hover:scale-105',
                    {
                        'opacity-100 translate-y-0': isInView && !isLoading,
                    },
                )}
                onLoad={() => setIsLoading(false)}
                loading="lazy"
                onError={handleError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                {imageData.category && <p className="text-gold text-xs font-medium uppercase tracking-wide">{imageData.category}</p>}
                <h3 className="text-white font-medium text-sm">{imageData.title}</h3>
            </div>
        </AspectRatio>
    );
}
