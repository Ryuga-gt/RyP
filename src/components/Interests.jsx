import React from 'react';

const interests = [
    { id: 1, title: 'Elden Ring', category: 'Game', date: 'Played Recently' },
    { id: 2, title: 'Three.js Journey', category: 'Learning', date: 'In Progress' },
    { id: 3, title: 'One Piece', category: 'Manga', date: 'Chapter 1100+' },
    { id: 4, title: 'Generative Art', category: 'Code', date: 'Experimenting' },
    { id: 5, title: 'Arcane S2', category: 'Show', date: 'Watched' },
    { id: 6, title: 'Rust Lang', category: 'Tech', date: 'Exploring' },
];

const Interests = () => {
    return (
        <section className="w-full py-40 bg-white/5 relative z-10 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-20">
                <div className="flex justify-between items-end mb-20">
                    <h2 className="text-6xl md:text-8xl font-display text-white">The Feed</h2>
                    <p className="font-mono text-xs opacity-50 hidden md:block uppercase tracking-widest">What I've been up to</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {interests.map((item) => (
                        <div key={item.id} className="bg-black p-10 group cursor-pointer hover:bg-neutral-900 transition-colors relative overflow-hidden">
                            <div className="flex justify-between items-start mb-10">
                                <span className="font-mono text-xs text-brand-white/40 uppercase">{item.category}</span>
                                <span className="font-mono text-xs text-brand-white/40">{item.date}</span>
                            </div>

                            <h3 className="text-3xl font-display text-white group-hover:scale-105 transition-transform origin-left duration-500">{item.title}</h3>

                            {/* Hover effect accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
