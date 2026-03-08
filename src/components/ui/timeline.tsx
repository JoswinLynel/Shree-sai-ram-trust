"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";


/* Right-pointing arrow SVG (play-button style) */
const ArrowPointer = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-saffron ml-0.5">
        <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
);

interface TimelineEntry {
    title: string;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    content?: ReactNode; // fallback
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setHeight(rect.height);
            }
        };

        // Delay to allow images and content to load
        updateHeight();
        const timer = setTimeout(updateHeight, 500);
        window.addEventListener("resize", updateHeight);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-cream font-sans overflow-hidden"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20 px-4 md:px-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row w-full justify-between items-center md:items-start pt-16 md:pt-40 relative z-10 group"
                    >
                        {/* Mobile Arrow + Title */}
                        <div className="md:hidden flex flex-row items-center z-40 w-full mb-6 ml-12">
                            <div className="h-11 w-11 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-xl border border-saffron/20">
                                <ArrowPointer />
                            </div>
                            <h3 className="font-heading text-3xl font-bold text-espresso pl-3">
                                {item.title}
                            </h3>
                        </div>

                        {/* Left Content (Images) */}
                        <div className="relative w-full md:w-[45%] md:pr-12 md:pl-0 pl-14 md:text-right">
                            <div className="md:hidden mb-6">{item.leftContent || item.content}</div>
                            <div className="hidden md:block">{item.leftContent}</div>
                        </div>

                        {/* Desktop Center Dot */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-white items-center justify-center shadow-xl z-40 top-40 group-hover:scale-110 transition-transform duration-300">
                            <div className="h-5 w-5 rounded-full bg-saffron border-2 border-saffron-dark animate-pulse" />
                        </div>

                        {/* Right Content (Text) */}
                        <div className="relative w-full md:w-[45%] md:pl-12 pl-14 mt-6 md:mt-0">
                            <h3 className="hidden md:block font-heading text-4xl lg:text-5xl font-bold text-espresso mb-8">
                                {item.title}
                            </h3>
                            <div className="md:hidden">{item.rightContent}</div>
                            <div className="hidden md:block">{item.rightContent || item.content}</div>
                        </div>
                    </div>
                ))}

                {/* Vertical Line */}
                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-1/2 left-9 md:-translate-x-1/2 top-10 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-espresso/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-saffron via-gold to-transparent from-[0%] via-[20%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
