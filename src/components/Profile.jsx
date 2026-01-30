import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Word = ({ word, progress, range }) => {
    const opacity = useTransform(progress, [range[0], range[1]], [0.3, 1]);
    const color = useTransform(progress, [range[0], range[1]], ["#555555", "#FFFFFF"]);

    return (
        <motion.span style={{ color: color }} className="transition-colors duration-200">
            {word}
        </motion.span>
    )
}

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const bioText = "Specializing in full-stack development, distributed systems, and creative solutions. I build scalable applications that solve real-world problems while ensuring top-tier user experiences.";

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "center center"]
    });

    return (
        <section ref={containerRef} className="min-h-screen w-full flex items-center justify-center relative py-20 z-10">
            <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Image Side */}
                <div className="relative group">
                    {/* Gradient Glow */}
                    <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/30 to-orange-500/30 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                    <motion.div
                        className="relative w-full aspect-[3/4] md:w-[400px] mx-auto overflow-hidden rounded-sm z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={profileImg}
                            alt="Ayush Kumar"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Name Overlay - Positioned to overlap with z-index control */}
                    <h2 className="absolute top-20 -right-10 md:-right-20 text-6xl md:text-8xl font-display font-bold text-white tracking-tighter z-20 pointer-events-none mix-blend-difference opacity-0 md:opacity-100 animate-slide-in">
                        Ayush <br /> Kumar
                    </h2>

                    {/* Mobile Name */}
                    <h2 className="md:hidden mt-4 text-5xl font-display font-bold text-white tracking-tighter">
                        Ayush <br /> Kumar
                    </h2>
                </div>

                {/* Bio Interaction Side */}
                <div className="relative h-[300px] flex flex-col justify-center pl-0 md:pl-20">
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 z-20 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="plus"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                >
                                    <Plus size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="absolute top-full md:top-auto md:left-40 mt-4 md:mt-0 max-w-md font-light leading-relaxed text-lg backdrop-blur-sm bg-black/80 p-6 rounded-lg pointer-events-none md:pointer-events-auto z-30 border border-white/10"
                                initial={{ opacity: 0, y: 20, x: -20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, y: 10, x: -10 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="mb-4">
                                    <strong className="text-white block mb-2 font-display">Software Development Engineer</strong>
                                    {bioText.split(" ").map((word, i) => {
                                        const start = i / bioText.split(" ").length;
                                        const end = start + (1 / bioText.split(" ").length);
                                        return (
                                            <React.Fragment key={i}>
                                                <Word word={word} progress={scrollYProgress} range={[start * 0.5, start * 0.5 + 0.5]} />
                                                {" "}
                                            </React.Fragment>
                                        )
                                    })}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Profile;
