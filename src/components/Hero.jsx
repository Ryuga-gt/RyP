import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
    "United, Unbound",
    "Creative Developer",
    "Visual Storyteller",
    "Digital Experience"
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen w-full relative overflow-hidden z-0 bg-black">
            {/* Spline Background - Interactive */}
            <div className="absolute inset-0 z-0 cursor-crosshair">
                <iframe
                    src='https://my.spline.design/particles-2fd28c88cb8aabaf9770dce1af66eb64/'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    title="Hero Background"
                    className="w-full h-full"
                ></iframe>
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
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
