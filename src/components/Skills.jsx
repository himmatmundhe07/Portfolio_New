import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Terminal, Server, Pin, CheckSquare, Square } from 'lucide-react';

const SkillNote = ({ title, skills, icon: Icon, color, rotation, delay, pinColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
            className={`relative group ${color} text-gray-800 rounded-sm p-6 shadow-[10px_10px_20px_rgba(0,0,0,0.2)] w-full max-w-sm mx-auto aspect-square flex flex-col items-center justify-center transform transition-shadow hover:shadow-[15px_15px_30px_rgba(0,0,0,0.3)]`}
        >
            {/* Paper Texture Effect */}
            <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(transparent,transparent_19px,#000_20px)] rounded-sm pointer-events-none mix-blend-multiply"></div>

            {/* Realistic Pin */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                {/* Pin Head */}
                <div className={`w-6 h-6 rounded-full ${pinColor} shadow-[2px_2px_5px_rgba(0,0,0,0.3)] border border-white/20 relative`}>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white/40 rounded-full blur-[1px]"></div>
                </div>
                {/* Pin Needle (Visual only, hidden behind paper mostly) */}
            </div>

            {/* Pin Hole/Shadow on Paper */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/20 rounded-full blur-[2px] -z-10"></div>


            <div className="mb-4 p-3 bg-white/40 rounded-full backdrop-blur-sm border border-white/50 shadow-sm z-10">
                <Icon size={32} className="text-gray-900" />
            </div>

            <h3 className="text-2xl font-black font-serif mb-4 text-center border-b-2 border-gray-900/10 pb-2 w-full mx-auto z-10 relative">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2 justify-center content-center z-10 relative">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 text-xs font-bold font-mono bg-yellow-50 border border-yellow-200/50 rounded-sm text-gray-800 shadow-sm rotate-1 hover:rotate-0 transition-transform cursor-help"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const ToDoNote = ({ title, items, delay, rotation }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
            className="relative group bg-white text-gray-800 rounded-sm p-6 shadow-[10px_10px_20px_rgba(0,0,0,0.2)] w-full max-w-sm mx-auto aspect-square flex flex-col transform transition-shadow hover:shadow-[15px_15px_30px_rgba(0,0,0,0.3)]"
        >
            {/* Lined Paper Lines */}
            <div className="absolute inset-0 top-12 bg-[repeating-linear-gradient(transparent,transparent_23px,#a0aec0_24px)] pointer-events-none opacity-50"></div>
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-300 opacity-50"></div>

            {/* Tape at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 backdrop-blur-sm shadow-sm rotate-[-2deg] border-l border-r border-white/40"></div>

            <h3 className="text-xl font-bold font-handwriting mb-6 text-center text-gray-600 uppercase tracking-widest mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {title}
            </h3>

            <div className="flex flex-col gap-3 pl-4 z-10 w-full overflow-hidden">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        {item.done ? (
                            <CheckSquare size={20} className="text-green-500 flex-shrink-0" />
                        ) : (
                            <Square size={20} className="text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`font-mono text-sm truncate ${item.done ? 'line-through text-gray-400' : 'text-gray-800 font-bold'}`}>
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-auto text-right">
                <span className="text-[10px] text-gray-400 font-mono">Keep Growing...</span>
            </div>
        </motion.div>
    )
}

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Magic",
            icon: Layout,
            color: "bg-[#ffff99]",
            pinColor: "bg-red-500",
            rotation: -3,
            skills: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui"]
        },
        {
            title: "Backend & Database",
            icon: Server,
            color: "bg-[#ffccff]",
            pinColor: "bg-blue-500",
            rotation: 2,
            skills: ["C / C++", "Node.js", "Express", "MongoDB", "Supabase", "PostgreSQL", "REST APIs"]
        },
        {
            title: "AI & Dev Tools",
            icon: Terminal,
            color: "bg-[#ccffff]",
            pinColor: "bg-green-500",
            rotation: -2,
            skills: ["Data Analytics", "SEO Optimization", "Gemini 2.5 Flash", "Git & GitHub", "Postman", "Figma", "Vercel"]
        }
    ];

    const learningList = [
        { text: "Next.js", done: false },
        { text: "Data Structures", done: true }
    ];

    return (
        <section id="skills" className="py-8 md:py-24 pb-12 md:pb-48 relative px-6 md:px-12 overflow-hidden">

            {/* Wooden Board Background / Corkboard feel container */}
            <div className="max-w-7xl mx-auto relative z-10 mb-8 md:mb-32">
                {/* Board Frame - Rough Texture */}
                <div
                    className="absolute inset-0 -mx-4 -my-8 bg-[#8B5A2B] rounded-xl shadow-2xl skew-y-1 transform border-t-8 border-l-8 border-[#5C3A1E] opacity-100 -z-20 hidden md:block"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')" }}
                ></div>

                {/* Inner Board - Fine Woollen Checks */}
                <div
                    className="absolute inset-0 -mx-2 -my-6 bg-[#D2B48C] rounded-lg opacity-100 -z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] hidden md:block border-4 border-[#8B4513]"
                    style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0,0,0,0.05) 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0,0,0,0.05) 8px), url('https://www.transparenttextures.com/patterns/felt.png')" }}
                ></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 pt-8"
                >
                    {/* Tape for the Header */}
                    <div className="inline-block relative">
                        <div className="absolute -top-4 -left-6 w-32 h-8 bg-white/20 rotate-[-15deg] backdrop-blur-sm border-l border-r border-white/30 skew-x-12 shadow-sm"></div>
                        <div className="absolute -top-4 -right-6 w-32 h-8 bg-white/20 rotate-[15deg] backdrop-blur-sm border-l border-r border-white/30 skew-x-12 shadow-sm"></div>

                        <h2 className="text-5xl md:text-7xl font-fancy text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] rotate-[-2deg] px-8 py-2">
                            Skill Board
                        </h2>
                    </div>
                    <p className="text-amber-100 font-mono text-sm tracking-widest uppercase mt-4 opacity-80 font-bold drop-shadow-md">Pinned for Quick Access</p>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 pb-12 max-w-7xl mx-auto items-start">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="w-full transform hover:z-20 transition-all duration-300">
                            <SkillNote
                                {...category}
                                delay={index * 0.15 + 0.2}
                            />
                        </div>
                    ))}

                    <div className="w-full transform hover:z-20 transition-all duration-300">
                        <ToDoNote
                            title="Learning..."
                            items={learningList}
                            rotation={3}
                            delay={0.8}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
