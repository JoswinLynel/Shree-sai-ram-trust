import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { CSSProperties } from 'react';

// --- Component Interfaces ---
export interface Testimonial {
    id: string | number;
    initials: string;
    name: string;
    role: string;
    quote: string;
    quoteHindi?: string;
    tags: { text: string; type: 'featured' | 'default' }[];
    stats: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string; }[];
    avatarGradient: string;
}

export interface TestimonialStackProps {
    testimonials: Testimonial[];
    /** How many cards to show behind the main card */
    visibleBehind?: number;
    /** Auto-rotate interval in ms (0 = off) */
    autoRotateMs?: number;
}

// --- The Component ---
export const TestimonialStack = ({ testimonials, visibleBehind = 2, autoRotateMs = 0 }: TestimonialStackProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const dragStartRef = useRef(0);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const totalCards = testimonials.length;

    const navigate = useCallback((newIndex: number) => {
        setActiveIndex((newIndex + totalCards) % totalCards);
    }, [totalCards]);

    // Auto-rotate
    useEffect(() => {
        if (autoRotateMs <= 0 || isDragging) return;
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % totalCards);
        }, autoRotateMs);
        return () => clearInterval(interval);
    }, [autoRotateMs, totalCards, isDragging]);

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent, index: number) => {
        if (index !== activeIndex) return;
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        dragStartRef.current = clientX;
        cardRefs.current[activeIndex]?.classList.add('is-dragging');
    };

    const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
        if (!isDragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragOffset(clientX - dragStartRef.current);
    }, [isDragging]);

    const handleDragEnd = useCallback(() => {
        if (!isDragging) return;
        cardRefs.current[activeIndex]?.classList.remove('is-dragging');
        if (Math.abs(dragOffset) > 50) {
            navigate(activeIndex + (dragOffset < 0 ? 1 : -1));
        }
        setIsDragging(false);
        setDragOffset(0);
    }, [isDragging, dragOffset, activeIndex, navigate]);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleDragMove);
            window.addEventListener('touchmove', handleDragMove);
            window.addEventListener('mouseup', handleDragEnd);
            window.addEventListener('touchend', handleDragEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleDragMove);
            window.removeEventListener('touchmove', handleDragMove);
            window.removeEventListener('mouseup', handleDragEnd);
            window.removeEventListener('touchend', handleDragEnd);
        };
    }, [isDragging, handleDragMove, handleDragEnd]);

    if (!testimonials?.length) return null;

    return (
        <section className="testimonials-stack relative pb-10">
            {testimonials.map((testimonial, index) => {
                const displayOrder = (index - activeIndex + totalCards) % totalCards;

                const style: CSSProperties = {};
                if (displayOrder === 0) {
                    style.transform = `translateX(${dragOffset}px)`;
                    style.opacity = 1;
                    style.zIndex = totalCards;
                } else if (displayOrder <= visibleBehind) {
                    const scale = 1 - 0.05 * displayOrder;
                    const translateY = -2 * displayOrder;
                    style.transform = `scale(${scale}) translateY(${translateY}rem)`;
                    style.opacity = 1 - 0.2 * displayOrder;
                    style.zIndex = totalCards - displayOrder;
                } else {
                    style.transform = 'scale(0)';
                    style.opacity = 0;
                    style.zIndex = 0;
                }

                return (
                    <div
                        ref={el => { cardRefs.current[index] = el; }}
                        key={testimonial.id}
                        className="testimonial-card glass-effect backdrop-blur-xl"
                        style={style}
                        onMouseDown={(e) => handleDragStart(e, index)}
                        onTouchStart={(e) => handleDragStart(e, index)}
                    >
                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-semibold text-xl" style={{ background: testimonial.avatarGradient }}>
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h3 className="text-espresso font-semibold text-xl">{testimonial.name}</h3>
                                    <p className="text-saffron text-sm font-medium mt-0.5">{testimonial.role}</p>
                                </div>
                            </div>

                            <blockquote className="font-serif italic text-espresso leading-relaxed text-xl md:text-2xl mb-6">
                                "{testimonial.quote}"
                            </blockquote>

                            {testimonial.quoteHindi && (
                                <>
                                    <div className="border-t border-espresso/10 my-6"></div>
                                    <p className="text-taupe text-lg md:text-xl leading-relaxed italic">
                                        "{testimonial.quoteHindi}"
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                );
            })}

            <div className="pagination flex gap-2 justify-center absolute bottom-0 left-0 right-0">
                {testimonials.map((_, index) => (
                    <button key={index} aria-label={`Go to testimonial ${index + 1}`} onClick={() => navigate(index)} className={`pagination-dot ${activeIndex === index ? 'active' : ''}`} />
                ))}
            </div>
        </section>
    );
};
