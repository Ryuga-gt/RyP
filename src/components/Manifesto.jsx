import React, { useRef } from 'react';

const Manifesto = () => {
    const containerRef = useRef(null);

    return (
        <section id="manifesto" ref={containerRef} className="min-h-screen flex flex-col justify-between py-24 px-6 md:px-20 z-10 relative bg-transparent text-white overflow-hidden">

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center items-center my-20 w-full">

                <div className="max-w-6xl text-center leading-none tracking-tighter mix-blend-normal">
                    {/* Main Title with Gradient */}
                    <h2 className="text-6xl md:text-9xl font-oswald font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#E0E0E0] to-[#999999] mb-4">
                        IMMERSIVE CODE
                    </h2>

                    {/* Subtitle with Hurricane Font & Gold */}
                    <p className="font-hurricane text-[#D4AF37] text-4xl md:text-7xl mb-12">
                        made with curiosity, caffeine, and an unhealthy respect for edge cases
                    </p>

                    {/* Body Text */}
                    <div className="max-w-3xl mx-auto space-y-4 font-sans text-sm md:text-base text-[#E0E0E0]/80 leading-relaxed font-light tracking-wide">
                        <p>I build things that feel like they belonged there all along — clean, purposeful, a little cheeky.</p>
                        <p>I listen to users, translate their messy hopes into elegant flows, and then make the failure states secretly graceful.</p>
                        <p>If a bug survives my tests, we both deserve a medal (or therapy).</p>
                    </div>
                </div>
            </div>

            {/* Footer / Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-white/10 pt-16">
                <div>
                    <span className="font-mono text-[10px] uppercase opacity-60 mb-4 block text-[#D4AF37]">[01]</span>
                    <h3 className="font-oswald uppercase text-3xl mb-4 text-[#D4AF37] tracking-wide">EXPERIENCED CRAFTSMANSHIP</h3>
                    <p className="font-mono text-xs leading-relaxed opacity-70 uppercase max-w-sm text-[#E0E0E0]">
                        I sweat the small stuff so the experience stays effortless: thoughtful APIs, readable code, and surprises that make people smile.
                    </p>
                </div>
                <div className="text-right flex flex-col items-end">
                    <span className="font-mono text-[10px] uppercase opacity-60 mb-4 block text-right w-full text-[#D4AF37]">[02]</span>
                    <h3 className="font-oswald uppercase text-3xl mb-4 text-[#D4AF37] tracking-wide">CURIOUS, NOT CLEVER</h3>
                    <p className="font-mono text-xs leading-relaxed opacity-70 uppercase max-w-sm text-right text-[#E0E0E0]">
                        I favor useful innovation over clever tricks. Measure, iterate, ship — and always keep the rollback plan handy.
                    </p>
                </div>
            </div>

            {/* Bottom Tagline & Japanese Word with Lines */}
            <div className="mt-20 flex flex-col items-center gap-10">
                <p className="text-center font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-50 text-[#E0E0E0]">
                    This is how I roll: human-first, unit-tested, and ready to refactor when the world (or product) insists.
                </p>

                <div className="w-full flex items-center justify-center gap-6 opacity-90">
                    <div className="h-px bg-white/20 w-32 md:w-64"></div>
                    <span className="font-japanese text-[#D4AF37] text-xl tracking-[0.5em]">信念</span>
                    <div className="h-px bg-white/20 w-32 md:w-64"></div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
