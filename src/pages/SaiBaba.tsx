import { useEffect, useRef } from 'react';
import { Timeline } from '@/components/ui/timeline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TestimonialStack } from '@/components/ui/glass-testimonial-swiper';
import type { Testimonial } from '@/components/ui/glass-testimonial-swiper';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import { DottedSurface } from '@/components/ui/dotted-surface';


gsap.registerPlugin(ScrollTrigger);

export default function SaiBaba() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (heroRef.current) {
            gsap.fromTo(heroRef.current.querySelectorAll('.hero-animate'),
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );

            gsap.to('.hero-parallax', {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
            });
        }
    }, []);

    const data = [
        {
            title: "Early Life",
            leftContent: (
                <div className="grid grid-cols-2 gap-4 group">
                    <img
                        src="/images/saibaba_early_1.jpg"
                        alt="banyan tree early life"
                        className="rounded-3xl object-cover h-48 md:h-72 lg:h-80 w-full shadow-lg group-hover:-translate-y-2 transition-transform duration-500"
                    />
                    <img
                        src="/images/saibaba_early_2.jpg"
                        alt="indian village"
                        className="rounded-3xl object-cover h-48 md:h-72 lg:h-80 w-full shadow-lg mt-8 md:mt-12 group-hover:-translate-y-2 transition-transform duration-500"
                    />
                </div>
            ),
            rightContent: (
                <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-espresso/5 hover:bg-white/80 transition-colors duration-500">
                    <p className="text-taupe text-base lg:text-lg font-medium mb-6 leading-relaxed">
                        The exact place and date of Sai Baba's birth remain unknown, reflecting his core teaching that spiritual figures transcend earthly origins and boundaries.
                    </p>
                    <p className="text-taupe text-base lg:text-lg leading-relaxed">
                        He arrived in the village of Shirdi, Maharashtra, as a young ascetic, meditating under a neem tree. His profound presence, deep meditation, and remarkable detachment from worldly affairs quickly caught the attention of the villagers, marking the beginning of a profound spiritual era.
                    </p>
                </div>
            )
        },
        {
            title: "Return to Shirdi",
            leftContent: (
                <div className="grid grid-cols-2 gap-4 group">
                    <img
                        src="/images/saibaba_return_1.jpg"
                        alt="prayers at dusk"
                        className="rounded-3xl object-cover h-48 md:h-72 lg:h-80 w-full shadow-lg group-hover:-translate-y-2 transition-transform duration-500"
                    />
                    <img
                        src="/images/saibaba_return_2.jpg"
                        alt="spiritual fire dhuni"
                        className="rounded-3xl object-cover h-48 md:h-72 lg:h-80 w-full shadow-lg mt-8 md:mt-12 group-hover:-translate-y-2 transition-transform duration-500"
                    />
                </div>
            ),
            rightContent: (
                <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-espresso/5 hover:bg-white/80 transition-colors duration-500">
                    <p className="text-taupe text-base lg:text-lg leading-relaxed mb-6 font-medium">
                        After a brief period away, Sai Baba returned to Shirdi permanently around 1858.
                    </p>
                    <p className="text-taupe text-base lg:text-lg leading-relaxed mb-6">
                        He took up residence in a dilapidated mosque, which he lovingly named <span className="text-espresso font-semibold">'Dwarkamai'</span>.
                    </p>
                    <p className="text-taupe text-base lg:text-lg leading-relaxed group-hover:text-espresso transition-colors duration-500">
                        Here, he welcomed people of all faiths, actively blurring the lines between Hindu and Islamic traditions, and began his lifelong mission of healing, teaching, and offering spiritual guidance to anyone who sought it.
                    </p>
                </div>
            )
        },
        {
            title: "Teachings & Miracles",
            leftContent: (
                <div className="grid grid-cols-2 gap-4 group">
                    <img
                        src="/images/saibaba_teachings_1.jpg"
                        alt="spiritual hands"
                        className="rounded-3xl object-cover h-48 md:h-72 lg:h-80 w-full shadow-lg group-hover:-translate-y-2 transition-transform duration-500"
                    />
                    <img
                        src="/images/saibaba_teachings_2.jpg"
                        alt="teachings light"
                        className="rounded-3xl object-cover h-48 md:h-72 lg:h-80 w-full shadow-lg mt-8 md:mt-12 group-hover:-translate-y-2 transition-transform duration-500"
                    />
                </div>
            ),
            rightContent: (
                <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-espresso/5 hover:bg-white/80 transition-colors duration-500">
                    <p className="text-taupe text-base lg:text-lg font-medium mb-8 leading-relaxed">
                        Sai Baba stood firmly against all persecution based on religion or caste. His core philosophy centered on two unshakeable pillars: <b className="text-saffron">Shraddha</b> (faith) and <b className="text-saffron">Saburi</b> (patience/compassion).
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <span className="text-saffron text-xl">✨</span>
                            <span className="text-taupe text-base lg:text-lg">Emphasized <strong>"Sabka Malik Ek"</strong> (One God governs all).</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="text-saffron text-xl">✨</span>
                            <span className="text-taupe text-base lg:text-lg">Maintained the eternal fire (Dhuni) representing spiritual purification.</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="text-saffron text-xl">✨</span>
                            <span className="text-taupe text-base lg:text-lg">Healed the sick and distributed holy ash (Udi) as a profound blessing.</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="text-saffron text-xl">✨</span>
                            <span className="text-taupe text-base lg:text-lg">Encouraged the reading of holy scriptures from all major religions.</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Mahasamadhi",
            leftContent: (
                <div className="grid grid-cols-2 gap-4 group">
                    <img
                        src="/images/saibaba_maha_1.jpg"
                        alt="mahasamadhi idol"
                        className="rounded-3xl object-cover h-48 md:h-72 lg:h-80 w-full shadow-lg group-hover:-translate-y-2 transition-transform duration-500"
                    />
                    <img
                        src="/images/saibaba_maha_2.jpg"
                        alt="mahasamadhi shrine"
                        className="rounded-3xl object-cover h-48 md:h-72 lg:h-80 w-full shadow-lg mt-8 md:mt-12 group-hover:-translate-y-2 transition-transform duration-500"
                    />
                </div>
            ),
            rightContent: (
                <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-espresso/5 hover:bg-white/80 transition-colors duration-500">
                    <p className="text-taupe text-base lg:text-lg font-medium mb-8 leading-relaxed">
                        On October 15, 1918, Baba took Mahasamadhi, peacefully leaving his physical body.
                    </p>
                    <div className="relative p-6 md:p-8 bg-saffron/5 rounded-2xl border-l-4 border-saffron my-8">
                        <p className="italic text-espresso text-lg lg:text-xl font-medium leading-relaxed">
                            "My tomb shall speak and move with those who make me their sole refuge."
                        </p>
                    </div>
                    <p className="text-taupe text-base lg:text-lg leading-relaxed">
                        Today, millions of devotees visit Shirdi every year, testifying to his eternal living presence, experiencing his miracles, and continuing his legacy of boundless love.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-cream w-full overflow-hidden">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
                <div className="absolute inset-0 hero-parallax">
                    <img
                        src="/images/about_interior_saibaba.png"
                        alt="Sai Baba Shrine"
                        className="w-full h-[130%] object-cover object-center opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/50 to-espresso/90" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8 md:mt-12">
                    <span className="hero-animate inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase mb-6 shadow-xl">
                        A Divine Journey
                    </span>
                    <h1 className="hero-animate font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
                        About Sri <span className="text-gold">Sai Baba</span>
                    </h1>
                    <p className="hero-animate text-white/90 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
                        "Sabka Malik Ek" - One God Governs All
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="-mt-12 relative z-20">
                <Timeline data={data} />
            </div>

            {/* Velocity Scroll Section */}
            <div className="py-2 md:py-6 bg-cream overflow-hidden">
                <VelocityScroll
                    text="Shraddha · Aur · Saburi — Sabka Malik Ek —"
                    default_velocity={1.5}
                    singleLine
                    className="font-heading text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-saffron drop-shadow-sm md:leading-[5rem]"
                />
                <VelocityScroll
                    text="श्रद्धा · और · सबूरी — सबका मालिक एक —"
                    default_velocity={-1.5}
                    singleLine
                    className="font-heading text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-espresso/70 drop-shadow-sm leading-[3rem] md:leading-[5rem]"
                />
            </div>

            {/* Teachings Section */}
            <TeachingsSection />
        </div>
    );
}

/* ── Teachings auto-rotate section ── */
function TeachingsSection() {
    const teachings: Testimonial[] = [
        {
            id: 1,
            initials: 'ॐ',
            name: 'Shirdi Sai Baba',
            role: 'On Faith',
            quote: 'Why fear when I am here? Be calm and have faith. I shall protect you from all harm.',
            quoteHindi: 'जब मैं हूँ तो डर काहे का? शांत रहो और विश्वास रखो। मैं तुम्हें हर हानि से बचाऊँगा।',
            tags: [],
            stats: [],
            avatarGradient: 'linear-gradient(135deg, #B93F1F, #DDAF54)',
        },
        {
            id: 2,
            initials: 'ॐ',
            name: 'Shirdi Sai Baba',
            role: 'On Unity',
            quote: 'Sabka Malik Ek — there is only one God who governs all. All religions lead to the same truth.',
            quoteHindi: 'सबका मालिक एक — सब धर्म एक ही सत्य की ओर ले जाते हैं।',
            tags: [],
            stats: [],
            avatarGradient: 'linear-gradient(135deg, #DDAF54, #B93F1F)',
        },
        {
            id: 3,
            initials: 'ॐ',
            name: 'Shirdi Sai Baba',
            role: 'On Patience',
            quote: 'Shraddha and Saburi — have faith and be patient. These two virtues will take you to the highest pinnacle of spiritual attainment.',
            quoteHindi: 'श्रद्धा और सबूरी — विश्वास रखो और धैर्य रखो। ये दो गुण तुम्हें आध्यात्मिक उपलब्धि के सर्वोच्च शिखर पर ले जाएँगे।',
            tags: [],
            stats: [],
            avatarGradient: 'linear-gradient(135deg, #6E5A4F, #DDAF54)',
        },
        {
            id: 4,
            initials: 'ॐ',
            name: 'Shirdi Sai Baba',
            role: 'On Service',
            quote: 'If you give water to the thirsty, bread to the hungry, clothes to the naked, and shelter to the homeless, God will be pleased.',
            quoteHindi: 'प्यासे को पानी, भूखे को रोटी, नंगे को कपड़ा और बेघर को आश्रय दो — भगवान प्रसन्न होंगे।',
            tags: [],
            stats: [],
            avatarGradient: 'linear-gradient(135deg, #B93F1F, #6E5A4F)',
        },
        {
            id: 5,
            initials: 'ॐ',
            name: 'Shirdi Sai Baba',
            role: 'On Devotion',
            quote: 'If you look to me, I look to you. My tomb shall speak and move with those who make me their sole refuge.',
            quoteHindi: 'तुम मेरी ओर देखो, मैं तुम्हारी ओर देखूँगा। मेरी समाधि उनसे बोलेगी जो मुझे अपना एकमात्र सहारा बनाएँगे।',
            tags: [],
            stats: [],
            avatarGradient: 'linear-gradient(135deg, #DDAF54, #6E5A4F)',
        },
        {
            id: 6,
            initials: 'ॐ',
            name: 'Shirdi Sai Baba',
            role: 'On Surrender',
            quote: 'Leave everything to me. I will take care of you. What you need to do is simply surrender with full faith.',
            quoteHindi: 'सब कुछ मुझ पर छोड़ दो। मैं तुम्हारी देखभाल करूँगा। तुम्हें बस पूर्ण विश्वास से समर्पण करना है।',
            tags: [],
            stats: [],
            avatarGradient: 'linear-gradient(135deg, #2B1E1A, #B93F1F)',
        },
        {
            id: 7,
            initials: 'ॐ',
            name: 'Shirdi Sai Baba',
            role: 'On Truth',
            quote: 'Unless there is some relationship or connection, nobody goes anywhere. God draws you to the place He wants you.',
            quoteHindi: 'जब तक कोई संबंध या जुड़ाव न हो, कोई कहीं नहीं जाता। भगवान तुम्हें वहाँ खींचते हैं जहाँ वे तुम्हें चाहते हैं।',
            tags: [],
            stats: [],
            avatarGradient: 'linear-gradient(135deg, #6E5A4F, #B93F1F)',
        },
        {
            id: 8,
            initials: 'ॐ',
            name: 'Shirdi Sai Baba',
            role: 'On Peace',
            quote: 'Be wherever you wish; do whatever you please. Remember this well — I know everything you do.',
            quoteHindi: 'जहाँ चाहो रहो, जो चाहो करो। यह अच्छी तरह याद रखो — मैं तुम्हारा सब कुछ जानता हूँ।',
            tags: [],
            stats: [],
            avatarGradient: 'linear-gradient(135deg, #B93F1F, #DDAF54)',
        },
    ];

    return (
        <section className="pt-8 md:pt-12 pb-20 md:pb-28 bg-cream relative overflow-hidden">
            <DottedSurface />
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center mb-14 md:mb-20">
                    <span className="inline-block px-5 py-2 bg-saffron/10 text-saffron rounded-full text-sm font-semibold tracking-widest uppercase mb-6">
                        Words of Wisdom
                    </span>
                    <h2 className="font-heading text-4xl md:text-6xl text-espresso font-bold mb-5">
                        Teachings of <span className="text-saffron">Sai Baba</span>
                    </h2>
                    <p className="text-taupe text-lg md:text-xl max-w-2xl mx-auto">
                        Timeless lessons that continue to guide millions of devotees on the path of love, faith, and service.
                    </p>
                </div>
                <TestimonialStack testimonials={teachings} autoRotateMs={3000} />
            </div>
        </section>
    );
}
