import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen bg-brand-white text-brand-black flex flex-col justify-between py-24 px-6 md:px-12">
            <div>
                <div className="flex justify-between items-start mb-24">
                    <h2 className="text-sm font-mono uppercase tracking-widest">Contact</h2>
                    <div className="hidden md:flex flex-col text-right font-mono text-xs uppercase gap-2">
                        <span>Available for freelance</span>
                        <span>Remote / Worldwide</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-6xl md:text-8xl lg:text-9xl font-display tracking-tight leading-none mb-8">
                        Keep in <br /> touch <span className="font-sans font-light italic text-4xl align-top">@</span>
                    </h3>

                    <a href="mailto:hello@ryuga.dev" className="text-2xl md:text-4xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 hover:opacity-80 transition-opacity">
                        hello@ryuga.dev
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-8 border-t border-black/10">
                <div>
                    <h4 className="font-display text-xl mb-4">Socials</h4>
                    <ul className="space-y-2 opacity-60 font-mono text-xs uppercase">
                        <li><a href="https://discord.com/users/451254880150224916" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:opacity-100">Discord</a></li>
                        <li><a href="#" className="hover:text-black hover:opacity-100">GitHub</a></li>
                        <li><a href="#" className="hover:text-black hover:opacity-100">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-display text-xl mb-4">Location</h4>
                    <div className="flex gap-2 items-center opacity-60 font-mono text-xs uppercase">
                        <span>Remote</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
