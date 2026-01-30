import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto = () => {
    const containerRef = useRef(null);
    const text = "We are digital natives embracing the creative freedom to build immersive experiences. We integrate, collaborate, and challenge the norms of web design. Our goal is not just to display content, but to evoke emotion and drive connection.";

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "center center"]
    });

    // Map scroll progress to color/opacity
    // 0 -> start (gray), 1 -> end (white)

    return (
        <section ref={containerRef} className="min-h-[50vh] flex flex-col justify-center items-center py-20 px-6 md:px-20 z-10 relative bg-black">
            <div className="max-w-4xl text-center">
                <h2 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-10">Manifesto</h2>

                <p className="text-3xl md:text-5xl leading-tight font-display font-light tracking-tight flex flex-wrap justify-center gap-x-3">
                    {text.split(" ").map((word, i) => {
                        const start = i / text.split(" ").length;
                        const end = start + (1 / text.split(" ").length);
                        // Per-word opacity based on scroll
                        // This is a bit complex for global scroll. 
                        // Simpler approach: Map global scroll to opacity of the whole block or chunks.
                        // But requirements said "as user scrolls down it fills up". 
                        // Let's use opacity on the whole block based on scroll, OR word by word.

                        // Let's try a simpler reveal: The text is gray, and a gradient text mask moves? 
                        // Or just changing color from gray to white.

                        return (
                            <Word key={i} word={word} progress={scrollYProgress} range={[start * 0.5, start * 0.5 + 0.5]} />
                        )
                    })}
                </p>
            </div>
        </section>
    );
};

const Word = ({ word, progress, range }) => {
    const opacity = useTransform(progress, [range[0], range[1]], [0.3, 1]);
    const color = useTransform(progress, [range[0], range[1]], ["#555555", "#FFFFFF"]);

    return (
        <motion.span style={{ color: color }} className="transition-colors duration-200">
            {word}
        </motion.span>
    )
}

export default Manifesto;
