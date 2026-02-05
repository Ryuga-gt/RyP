import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import hogwartsImg from '../assets/hogwarts_legacy.avif';
import chessImg from '../assets/chess.avif';
import lichessImg from '../assets/lichess.org.avif';
import haikyuuImg from '../assets/haikyuu.avif';
import haikyuuVideo from '../assets/Haikyuu_edit.mp4';
import harryPotterImg from '../assets/Harry-Potter-Wallpaper.avif';

import harryPotterSound from '../assets/harry_potter_sound.mp3';

const interests = [
    {
        id: 1,
        title: 'Hogwarts Legacy',
        category: 'Game',
        status: 'Played Recently',
        hoverImage: hogwartsImg,
        detailLink: 'https://www.hogwartslegacy.com/en-us',
        description: 'Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart.',
        expandable: true,
        hasSound: true
    },
    {
        id: 2,
        title: 'Chess Journey',
        category: 'Learning',
        status: 'In Progress',
        hoverImage: chessImg,
        detailImage: lichessImg,
        detailLink: 'https://lichess.org/@/ItsErito',
        description: 'Always up for a challenge! Anyone can challenge me on LiChess.',
        expandable: true
    },
    {
        id: 3,
        title: 'Haikyuu',
        category: 'Manga',
        status: 'Chapter 400+',
        hoverImage: haikyuuImg,
        detailVideo: haikyuuVideo,
        description: 'ooohh its niceeeeeeeee!!!',
        expandable: true
    },
    {
        id: 4,
        title: 'Agentic Ai',
        category: 'Code',
        status: 'Experimenting',
        expandable: false,
        noHoverImage: true
    },
    {
        id: 5,
        title: 'Harry Potter',
        category: 'Show',
        status: 'Watched',
        hoverImage: harryPotterImg,
        directLink: 'https://www.rottentomatoes.com/m/harry_potter_and_the_deathly_hallows_part_2',
        expandable: false,
        hasSound: true
    },
    {
        id: 6,
        title: 'Vim',
        category: 'Tech',
        status: 'Exploring',
        expandable: false,
        noHoverImage: true
    },
];

const VideoPlayer = ({ src }) => {
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.5;
        }
    }, []);

    return (
        <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
        />
    );
};

const Interests = () => {
    const [selectedId, setSelectedId] = useState(null);
    const audioRef = React.useRef(null); // Current audio element
    const timeoutRef = React.useRef(null); // Timer for fade out/stop

    // Initialize audio only once per source to avoid lag? 
    // Or just create new Audio on hover. "new Audio()" is cheap.

    const stopCurrentAudio = () => {
        if (audioRef.current) {
            const audio = audioRef.current;
            // Fade out logic could be added here but simple pause is safer for quick interaction
            audio.pause();
            audio.currentTime = 0;
            audioRef.current = null;
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };



    const handleTileClick = (item) => {
        if (item.hasSound) {
            if (audioRef.current && !audioRef.current.paused) {
                stopCurrentAudio();
            } else {
                stopCurrentAudio(); // Ensure previous is stopped
                const audio = new Audio(harryPotterSound);
                audio.volume = 0.5;
                audio.loop = true;
                audio.play().catch(e => console.log('Audio play failed:', e));
                audioRef.current = audio;
            }
        }

        if (item.directLink) {
            window.open(item.directLink, '_blank');
        } else if (item.expandable) {
            setSelectedId(item.id);
        }
    };

    React.useEffect(() => {
        return () => {
            stopCurrentAudio();
        };
    }, []);

    return (
        <section className="w-full py-40 bg-white/5 relative z-10 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-20">
                <div className="flex justify-between items-end mb-20">
                    <h2 className="text-6xl md:text-8xl font-display text-white">The Feed</h2>
                    <p className="font-mono text-xs opacity-50 hidden md:block uppercase tracking-widest">What I've been up to</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {interests.map((item) => (
                        <div
                            key={item.id}
                            className="bg-black p-10 group cursor-pointer hover:bg-neutral-900 transition-colors relative h-80 flex flex-col justify-between overflow-hidden"
                            onClick={() => handleTileClick(item)}
                        >
                            {/* Hover Image Background */}
                            {!item.noHoverImage && item.hoverImage && (
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-0">
                                    <img src={item.hoverImage} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                            )}

                            {/* Lighting Animation (kept as per request) */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

                            <div className="flex justify-between items-start relative z-10">
                                <span className="font-mono text-xs text-brand-white/40 uppercase mix-blend-difference">{item.category}</span>
                                {item.status && <span className="font-mono text-xs text-brand-white/40 mix-blend-difference">{item.status}</span>}
                            </div>

                            <motion.h3 layoutId={`title-${item.id}`} className="text-3xl font-display text-white group-hover:scale-105 transition-transform origin-left duration-500 relative z-10 mix-blend-difference">
                                {item.title}
                            </motion.h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expanded View */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={selectedId} // Shared layout transition might not work perfectly with different structures, but good for title/box
                            className="bg-neutral-900 w-full max-w-3xl overflow-hidden relative border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Button Close */}
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 text-white z-50 mix-blend-difference font-mono uppercase text-xs"
                            >
                                [Close]
                            </button>

                            {interests.map((item) => {
                                if (item.id !== selectedId) return null;
                                return (
                                    <div key={item.id} className="flex flex-col md:flex-row h-full">
                                        {/* Visual Side */}
                                        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
                                            {item.detailVideo ? (
                                                <VideoPlayer src={item.detailVideo} />
                                            ) : (
                                                <img
                                                    src={item.detailImage || item.hoverImage}
                                                    alt={item.title}
                                                    className={`w-full h-full object-cover ${item.category === 'Learning' ? 'object-contain p-10' : ''}`}
                                                />
                                            )}
                                        </div>

                                        {/* Info Side */}
                                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                            <span className="font-mono text-xs text-brand-white/40 uppercase mb-4">{item.category}</span>
                                            <motion.h2 layoutId={`title-${item.id}`} className="text-4xl md:text-5xl font-display text-white mb-6">
                                                {item.title}
                                            </motion.h2>
                                            <p className="font-sans text-gray-300 mb-8 leading-relaxed">
                                                {item.description}
                                            </p>

                                            {item.detailLink && (
                                                <a
                                                    href={item.detailLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block px-6 py-3 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors text-center"
                                                >
                                                    {item.category === 'Learning' ? 'Challenge Me' : 'Visit Website'}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Interests;
