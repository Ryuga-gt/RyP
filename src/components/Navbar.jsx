import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Simple smooth scroll or use lenis if available globally (it is in App.jsx but standard scrollIntoView works with lenis usually)
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const links = [
        { name: "WORK", id: "works" },
        { name: "MANIFESTO", id: "manifesto" },
        { name: "PROFILE", id: "profile" },
        { name: "CONTACT", id: "contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-start p-6 md:p-10 pointer-events-none mix-blend-difference text-white">
            {/* Logo / Brand - Top Left */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <div className="flex flex-col text-xs font-bold tracking-widest uppercase group-hover:opacity-70 transition-opacity">
                    <span className="text-lg">ryuga dev</span>
                </div>
            </motion.div>

            {/* Vertical Menu - Top Right */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto"
            >
                <div className="flex flex-col items-end gap-2 text-[10px] font-mono tracking-widest uppercase">
                    {links.map((link, i) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="hover:text-gray-400 transition-colors py-1 text-right"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
