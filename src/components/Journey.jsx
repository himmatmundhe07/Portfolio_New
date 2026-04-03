import React from 'react';
import { motion } from 'framer-motion';
import { Flag, MapPin, GraduationCap, Users, Code2, Rocket, Binary, Database, Cloud, Code, Puzzle, Cpu, Globe, Zap, Wifi, Star, Loader, BookOpen, Sparkles } from 'lucide-react';

const FloatingElement = ({ delay, duration, top, left, size = "w-12 h-12", icon: Icon, color = "text-white/5" }) => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      rotate: [0, 5, -5, 0],
      opacity: [0.1, 0.3, 0.1]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }}
    className={`absolute ${top} ${left} ${size} ${color} pointer-events-none z-0`}
  >
    <Icon className="w-full h-full" />
  </motion.div>
);

const MapNode = ({ title, year, description, icon: Icon, align = 'left', delay }) => {
  return (
    <div className={`relative flex items-center justify-between w-full mb-12 md:mb-32 ${align === 'left' ? 'flex-row-reverse' : ''}`}>

      {/* Empty space for the opposite side */}
      <div className="hidden md:block w-5/12" />

      {/* Connector Line (Horizontal) - Dimmed */}
      <div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-amber-700/40 to-transparent w-1/4 -z-10 ${align === 'left' ? 'right-1/2 origin-right' : 'left-1/2 origin-left'}`}
      ></div>

      {/* The Node/Marker on the road */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 translate-y-[-50%] top-0 md:top-auto">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', delay: delay, stiffness: 200 }}
          className="w-14 h-14 md:w-20 md:h-20 bg-gray-900 border-4 border-amber-600/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.2)] z-20 relative"
        >
          <Icon className="w-6 h-6 md:w-10 md:h-10 text-amber-500" />
        </motion.div>
        {/* Ripple Effect - Subtle */}
        <div className="absolute inset-0 bg-amber-600/20 rounded-full animate-ping -z-10"></div>
      </div>

      {/* The Content Card */}
      <motion.div
        initial={{ opacity: 0, x: align === 'left' ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-5/12 p-8 bg-gray-900/60 backdrop-blur-xl border border-amber-800/20 rounded-2xl shadow-xl hover:bg-gray-800/80 transition-colors group ${align === 'left' ? 'text-right md:text-right' : 'text-left'}`}
      >
        <div className={`flex flex-col ${align === 'left' ? 'md:items-end' : 'md:items-start'}`}>
          <span className="inline-block px-4 py-1 bg-amber-900/10 text-amber-500 text-sm font-mono font-bold rounded-full mb-3 border border-amber-900/20">
            {year}
          </span>
          <h3 className="text-3xl font-bold text-white mb-3 font-serif group-hover:text-amber-500 transition-colors">{title}</h3>
          <p className="text-gray-400 text-base leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 relative overflow-hidden">
      {/* Background Map Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements - Dimmed and Subtle */}
      <FloatingElement top="top-20" left="left-10" duration={5} delay={0} icon={Binary} size="w-24 h-24" color="text-amber-500/10" />
      <FloatingElement top="top-40" left="right-20" duration={6} delay={1} icon={Code} size="w-16 h-16" color="text-orange-500/20" />
      <FloatingElement top="bottom-1/3" left="left-20" duration={7} delay={0.5} icon={Database} size="w-32 h-32" color="text-blue-500/10" />
      <FloatingElement top="bottom-20" left="right-10" duration={8} delay={2} icon={Cloud} size="w-20 h-20" color="text-purple-500/10" />
      <FloatingElement top="top-1/2" left="left-1/3" duration={9} delay={1.5} icon={Puzzle} size="w-12 h-12" color="text-green-500/10" />

      {/* PREVIOUS Elements */}
      <FloatingElement top="top-32" left="left-1/2" duration={8} delay={3} icon={Cpu} size="w-20 h-20" color="text-red-500/5" />
      <FloatingElement top="bottom-1/4" left="right-32" duration={6} delay={2.5} icon={Globe} size="w-28 h-28" color="text-indigo-500/5" />
      <FloatingElement top="top-2/3" left="left-20" duration={7} delay={1} icon={Zap} size="w-16 h-16" color="text-yellow-400/10" />
      <FloatingElement top="top-10" left="right-1/4" duration={5} delay={0.2} icon={Wifi} size="w-14 h-14" color="text-cyan-500/10" />
      <FloatingElement top="bottom-40" left="left-1/4" duration={8} delay={1.8} icon={Star} size="w-10 h-10" color="text-amber-200/20" />

      {/* NEW ADDITIONS for Density */}
      <FloatingElement top="top-1/4" left="right-10" duration={6} delay={0.5} icon={Sparkles} size="w-8 h-8" color="text-white/10" />
      <FloatingElement top="bottom-10" left="left-10" duration={7} delay={1.2} icon={Code2} size="w-12 h-12" color="text-pink-500/5" />


      <div className="container mx-auto max-w-5xl relative">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center mb-12 md:mb-20 pt-12 md:pt-20"
        >
          <motion.h2
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="font-serif tracking-wider text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-amber-200 bg-[length:200%_auto] mb-8 py-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] filter"
          >
            Adventure Map
          </motion.h2>
          <p className="text-amber-100 font-mono text-sm tracking-widest uppercase max-w-lg mx-auto bg-black/50 inline-block px-6 py-2 rounded-full backdrop-blur-md border border-amber-500/20 shadow-lg">
            LEVELING UP THROUGH THE YEARS
          </p>
        </motion.div>

        {/* The Main Highway Path (Dimmed Gold) - REVERTED to subtle static gradient */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-72 md:top-96 bottom-20 w-1 md:w-3 bg-gradient-to-b from-amber-600/60 via-amber-800/40 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.2)] rounded-full"></div>

        <div className="relative z-10 pb-16 md:pb-32">
          <MapNode
            year="2021 - 2023"
            title="Secondary School (10th)"
            description="Completed Secondary School Foundation at Shree Swaminarayan International School."
            icon={GraduationCap}
            align="right"
            delay={0.2}
          />

          <MapNode
            year="2023 - 2025"
            title="Higher Secondary (12th)"
            description="Completed Higher Secondary Education at Shree Swaminarayan International School with a focus on Science/Mathematics."
            icon={BookOpen}
            align="left"
            delay={0.4}
          />

          <MapNode
            year="2025 - Present"
            title="B.E. in Computer Engineering"
            description="Pursuing Bachelor's in Computer Engineering at Swaminarayan University, Kalol. CGPA: 9.2/10. Specializing in Full Stack Development (MERN) and System Design through Coding Gita collaboration."
            icon={Code2}
            align="right"
            delay={0.6}
          />
        </div>

        {/* Pursuing Degree Indicator */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center relative z-20 mt-[-50px]"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-amber-600/50 bg-gray-900 shadow-[0_0_25px_rgba(245,158,11,0.2)] flex items-center justify-center relative overflow-hidden group">
            {/* Glow effect inside */}
            <div className="absolute inset-0 bg-amber-600/10 animate-pulse"></div>
            <BookOpen className="w-10 h-10 text-amber-200 relative z-10" />
          </div>

          <div className="mt-6 px-6 py-3 bg-gray-900/80 backdrop-blur-md border border-amber-700/30 rounded-full text-amber-100 font-serif text-lg tracking-wide shadow-xl flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-50"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-600"></span>
            </span>
            Pursuing Degree
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Journey;