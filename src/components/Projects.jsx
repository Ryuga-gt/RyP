import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "EcoScale",
        category: "Cloud Architecture",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "NeuroFlow",
        category: "AI Dashboard",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "DefiPrime",
        category: "Fintech Platform",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Orbit",
        category: "Space Analytics",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000&auto=format&fit=crop",
    }
];

const ProjectItem = ({ project, index }) => {
    return (
        <motion.div
            className="relative w-full aspect-[2/3] group cursor-pointer border border-white/5 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                <motion.div>
                    <p className="text-xs font-mono uppercase tracking-widest text-brand-white/70 mb-2">{project.category}</p>
                    <h3 className="text-3xl md:text-4xl font-display text-white group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="works" className="w-full py-32 z-10 relative">
            <div className="container mx-auto px-6 md:px-20">
                <div className="mb-20 flex items-end justify-between">
                    <h2 className="text-sm font-mono uppercase tracking-widest">Selected Works</h2>
                    <span className="text-xs font-mono opacity-50 hidden md:block">(04)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                    {/* Column 1 - Starts normally */}
                    <div className="flex flex-col gap-20">
                        {projects.filter((_, i) => i % 2 === 0).map((project, index) => (
                            <ProjectItem key={project.id} project={project} index={index * 2} />
                        ))}
                    </div>

                    {/* Column 2 - Starts lower (20% offset simulation with top margin) */}
                    <div className="flex flex-col gap-20 md:mt-32"> {/* md:mt-32 creates the visual offset/stagger */}
                        {projects.filter((_, i) => i % 2 !== 0).map((project, index) => (
                            <ProjectItem key={project.id} project={project} index={index * 2 + 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
