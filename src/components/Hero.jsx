import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
    <span key="1"><span className="font-mono text-4xl md:text-[4rem] tracking-widest uppercase">United</span> <span className="text-[#FF3333]">.</span> <span className="font-corinthia text-4xl md:text-[6rem] tracking-widest">Unbound</span></span>,
    <span key="2"><span className="font-hindi text-4xl md:text-6xl">बुनियाद</span> <span className="text-[#FF3333] ">.</span> <span className="font-mono text-4xl md:text-[4rem] tracking-widest uppercase">Bytes</span></span>,
    <span key="3"><span className="font-korean text-4xl md:text-6xl">인연</span> <span className="text-[#FF3333] ">.</span> <span className="font-mono text-4xl md:text-[4rem] tracking-widest uppercase">Interface</span></span>,
    <span key="4"><span className="font-japanese text-4xl md:text-6xl">間</span> <span className="text-[#FF3333] ">.</span> <span className="font-orbitron text-4xl md:text-[4rem] tracking-widest uppercase">Minimalism</span></span>
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    const [isSplineLoaded, setIsSplineLoaded] = useState(false);

    useEffect(() => {
        // Defer Spline loading to prioritize LCP/FCP
        const timer = setTimeout(() => {
            setIsSplineLoaded(true);
        }, 1500); // 1.5s delay to clear main thread
        return () => clearTimeout(timer);
    }, []);

    // Phrase rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4000); // Slower interval
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen w-full relative overflow-hidden z-0 bg-black">
            {/* Spline Background */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                {isSplineLoaded && (
                    <iframe
                        src='https://my.spline.design/particles-2fd28c88cb8aabaf9770dce1af66eb64/'
                        frameBorder='0'
                        width='100%'
                        height='100%'
                        title="Hero Background"
                        loading="lazy"
                        className="w-full h-full scale-110 fade-in duration-1000" // Scaled to hide the watermark
                    ></iframe>
                )}
            </div>

            {/* Interaction Blockers (to allow scrolling on edges but interaction in center) */}
            <div className="absolute inset-0 z-1 pointer-events-none">
                {/* Top Blocker */}
                <div className="absolute top-0 left-0 w-full h-[15vh] bg-transparent pointer-events-auto" />
                {/* Bottom Blocker */}
                <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-transparent pointer-events-auto" />
                {/* Left Blocker */}
                <div className="absolute top-0 left-0 w-[15vw] h-full bg-transparent pointer-events-auto" />
                {/* Right Blocker */}
                <div className="absolute top-0 right-0 w-[15vw] h-full bg-transparent pointer-events-auto" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end pb-32 items-center text-center">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={index}
                        className="text-6xl md:text-8xl font-display font-light text-white tracking-tighter mix-blend-difference pointer-events-auto"
                        initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
                        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {phrases[index]}
                    </motion.h1>
                </AnimatePresence>
            </div>

            {/* Scroll Indicator - Bottom Left */}
            <motion.div
                className="absolute bottom-10 left-10 text-xs md:text-sm font-sans tracking-widest uppercase opacity-70 z-20 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1 }}
            >
                <div className="flex flex-col gap-2 items-start">
                    <span>Scroll Down</span>
                    <div className="w-px h-10 bg-white/50 animate-bounce ml-4" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
