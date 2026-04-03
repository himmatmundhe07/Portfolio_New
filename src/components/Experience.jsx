import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Calendar } from 'lucide-react';

const experiences = [
    {
        id: '01',
        role: "Freelance Full Stack Developer",
        company: "PNC Public School",
        period: "2026",
        description: "Engineered a comprehensive, secure School Management System featuring role-based multi-dashboards for administration. Simultaneously delivered a fully-featured Summer Camp Web Platform, including promotional landing pages, dynamic registration forms, and a dedicated camp management admin panel.",
        icon: Briefcase,
        tech: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
        gradient: "from-indigo-500 to-purple-600",
    },
    {
        id: '02',
        role: "Frontend Architect",
        company: "Team 4-Bits",
        period: "2025 - Present",
        description: "Leading the UI/UX architecture for intensive hackathon projects like Sanjeevani. Focused on high-performance React applications, hardware-accelerated rendering, and interactive 3D web experiences under extreme time constraints.",
        icon: Globe,
        tech: ["React 18", "Framer Motion", "Three.js", "Figma"],
        gradient: "from-purple-500 to-pink-500",
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-12 md:py-20 px-6 relative z-10 w-full">
            <div className="container mx-auto max-w-6xl">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 md:mb-14 text-center"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-4">Experience</h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Real-world projects delivered end-to-end for clients and teams.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent -translate-x-1/2" />

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className={`relative flex flex-col md:flex-row items-start gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} ring-4 ring-[#8b6fc0]/60 shadow-lg`} />
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Card */}
                                <div className="ml-14 md:ml-0 md:w-1/2">
                                    <div className="bg-[#1a1028] rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`} />

                                        <div className="flex items-center justify-between mb-5">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg`}>
                                                <exp.icon size={22} className="text-white" />
                                            </div>
                                            <span className="text-xs font-mono font-bold text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                                                <Calendar size={12} /> {exp.period}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-2xl font-bold text-white mb-1 leading-tight">{exp.role}</h3>
                                        <p className="text-purple-300 font-semibold text-sm mb-4">@ {exp.company}</p>
                                        <p className="text-white/60 text-sm leading-relaxed mb-6">{exp.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
