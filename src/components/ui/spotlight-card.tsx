import React, { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
    size?: 'sm' | 'md' | 'lg';
    customSize?: boolean;
}

const glowColorMap = {
    blue: { color: '59, 130, 246', hsl: '217, 91%, 60%' },
    purple: { color: '147, 51, 234', hsl: '271, 76%, 53%' },
    green: { color: '34, 197, 94', hsl: '142, 71%, 45%' },
    red: { color: '239, 68, 68', hsl: '0, 84%, 60%' },
    orange: { color: '234, 88, 12', hsl: '21, 90%, 48%' },
};

const sizeMap = {
    sm: 'w-48 h-64',
    md: 'w-64 h-80',
    lg: 'w-80 h-96',
};

const GlowCard: React.FC<GlowCardProps> = ({
    children,
    className = '',
    glowColor = 'blue',
    size = 'md',
    customSize = false,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const { color: rgb } = glowColorMap[glowColor];
    const sizeClasses = customSize ? '' : sizeMap[size];

    return (
        <div
            ref={cardRef}
            className={`relative group cursor-pointer ${sizeClasses} ${className}`}
        >
            {/* Outer glow border that follows mouse */}
            <div
                className="absolute -inset-1 rounded-[inherit] transition-opacity duration-300 pointer-events-none"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(
            350px circle at ${position.x}px ${position.y}px,
            rgba(${rgb}, 0.6),
            rgba(${rgb}, 0.25) 40%,
            transparent 70%
          )`,
                    filter: 'blur(2px)',
                }}
            />
            {/* Outer ambient glow/shadow */}
            <div
                className="absolute -inset-2 rounded-[inherit] transition-opacity duration-500 pointer-events-none"
                style={{
                    opacity: isHovering ? 0.7 : 0,
                    background: `radial-gradient(
            500px circle at ${position.x}px ${position.y}px,
            rgba(${rgb}, 0.35),
            transparent 60%
          )`,
                    filter: 'blur(15px)',
                }}
            />
            {/* Inner card container */}
            <div className="relative h-full w-full rounded-[inherit] overflow-hidden bg-cream">
                {/* Spotlight overlay on content */}
                <div
                    className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        background: `radial-gradient(
              350px circle at ${position.x}px ${position.y}px,
              rgba(${rgb}, 0.15),
              transparent 50%
            )`,
                        mixBlendMode: 'soft-light',
                    }}
                />
                {children}
            </div>
        </div>
    );
};

export { GlowCard };
