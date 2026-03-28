import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, Crown, Medal, Flame, X, Maximize2, ZoomIn } from 'lucide-react';

// Import Certificate Images
import cCert from '../assets/C certificate.jpg';
import jsCert from '../assets/javaScript certificate.jpg';
import msCert from '../assets/microsoft certificate.jpg';

// Enhanced ShelfItem with Click-to-Zoom
const ShelfItem = ({ title, issuer, date, image, color, delay, onClick }) => (
    <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: delay }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative group flex flex-col items-center justify-end h-60 w-44 md:w-60 mx-2 md:mx-4 shrink-0 perspective-500 cursor-pointer"
        onClick={onClick}
    >
        {/* The Framed Certificate Object */}
        <div className={`
            relative z-20 w-36 md:w-52 aspect-[1.4] bg-white 
            border-[6px] border-${color === 'amber' || color === 'yellow' ? 'yellow-600' : 'gray-700'} 
            shadow-[0_15px_30px_rgba(0,0,0,0.6)] 
            rounded-sm overflow-hidden 
            group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-0 rotate-x-4
            transition-all duration-300 ease-out origin-bottom transform-style-3d
        `}>
            {/* Click Hint Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center backdrop-blur-[1px]">
                <div className="bg-black/60 p-2 rounded-full border border-white/20">
                    <ZoomIn className="text-white drop-shadow-md" size={24} />
                </div>
            </div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 pointer-events-none"></div>

            {/* The Image Itself */}
            {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
                <div className={`w-full h-full bg-${color}-900/20 flex flex-col items-center justify-center p-2 text-center`}>
                    <Award className={`text-${color}-500 mb-2`} size={24} />
                    <span className="text-[10px] text-gray-400 font-serif uppercase tracking-widest">{issuer}</span>
                    <div className="w-16 h-[1px] bg-gray-600 my-1"></div>
                    <span className="text-[8px] text-gray-500">Certificate of Completion</span>
                </div>
            )}
        </div>

        {/* Reflection on the shelf - adjusted for new shelf height */}
        <div className="absolute bottom-[-14px] w-[90%] h-5 bg-gradient-to-b from-white/10 to-transparent blur-lg rounded-full pointer-events-none z-10"></div>
    </motion.div>
);

// Trophy/Award Item for the second shelf (Text removed)
const TrophyItem = ({ icon: Icon, color, delay }) => (
    <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: delay }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative group flex flex-col items-center justify-end h-48 w-32 md:w-40 mx-2 md:mx-6 shrink-0 cursor-pointer"
    >
        {/* The Trophy Object */}
        <div className="relative z-20 flex flex-col items-center justify-end group-hover:-translate-y-4 transition-transform duration-300 ease-out">
            {/* Extended Glow */}
            <div className={`absolute -inset-4 bg-${color}-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <Icon
                size={80}
                strokeWidth={1}
                className={`text-${color}-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] filter`}
                style={{ filter: `drop-shadow(0 0 10px ${color === 'amber' ? '#f59e0b' : color === 'yellow' ? '#eab308' : '#3b82f6'})` }}
            />
            {/* Base/Stand - Matched to shelf aesthetic */}
            <div className="w-16 h-3 bg-[#1e1e1e] rounded-sm mt-[-4px] shadow-lg border-t border-white/10 relative z-10"></div>
        </div>

        {/* Reflection */}
        <div className="absolute bottom-[-10px] w-20 h-4 bg-black/50 blur-md rounded-full pointer-events-none"></div>
    </motion.div>
);

const HangingMedal = () => {
    const [isSwinging, setIsSwinging] = useState(false);

    const handleClick = () => {
        setIsSwinging(true);
        setTimeout(() => setIsSwinging(false), 3000); // 3s swing for longer animation
    };

    return (
        <motion.div
            onClick={handleClick}
            className="absolute top-full right-10 md:right-24 z-30 flex flex-col items-center origin-top cursor-pointer"
            animate={isSwinging ? { rotate: [0, 45, -40, 30, -20, 10, -5, 0] } : { rotate: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, y: 5 }}
        >
            {/* Red Ribbon V-Shape (Longer) */}
            <div className="relative w-8 h-24">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-red-800 shadow-inner"></div>
                {/* Ribbon Texture */}
                <div className="absolute top-0 left-0 w-full h-full border-l-[12px] border-r-[12px] border-transparent border-t-[20px] border-t-red-700 drop-shadow-md"></div>

                {/* Ribbon Tail at bottom to connect to medal */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-red-700 clip-path-polygon-[0_0,100%_0,50%_100%]"></div>
            </div>

            {/* The Medal */}
            <div className="relative -mt-1 group z-10">
                {/* Gold Outer Ring */}
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 via-yellow-600 to-yellow-800 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.5)] border-2 border-yellow-200 flex items-center justify-center relative overflow-hidden">
                    {/* Inner Circle */}
                    <div className="w-9 h-9 bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-inner">
                        <Star size={20} className="text-yellow-900 fill-yellow-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]" />
                    </div>
                    {/* Light Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent w-[200%] translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
                </div>
            </div>
        </motion.div>
    );
};

const Shelf = ({ children, className = "max-w-7xl", hasMedal }) => (
    <div className={`relative w-full ${className} mx-auto mb-32 perspective-1000`}>
        {/* Items sitting on shelf */}
        <div className="flex justify-center flex-wrap px-4 md:px-10 pb-[6px] items-end relative z-20 gap-4 md:gap-12">
            {children}
        </div>

        {/* The Shelf Plank - Enhanced Contrast */}
        <div className="relative h-10 w-full bg-[#2a2a2a] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-t border-t-white/40 border-b border-b-black overflow-visible flex items-center justify-center ring-1 ring-white/5">
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/90 pointer-events-none"></div>
            {/* Crisp Edge Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/0 via-white/70 to-white/0 shadow-[0_0_8px_rgba(255,255,255,0.6)]"></div>

            {/* Optional Hanging Medal */}
            {hasMedal && <HangingMedal />}
        </div>

        {/* Shelf Brackets */}
        <div className="hidden md:block absolute top-full left-10 w-12 h-12 border-r-[8px] border-b-[8px] border-[#151515] rounded-br-[2rem] -mt-1 shadow-2xl"></div>
        <div className="hidden md:block absolute top-full right-10 w-12 h-12 border-l-[8px] border-b-[8px] border-[#151515] rounded-bl-[2rem] -mt-1 shadow-2xl"></div>
    </div>
);

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-black/90 to-transparent">

            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/5 pointer-events-none rounded-full blur-[100px]"></div>

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
                        <Trophy size={16} className="text-amber-500" />
                        <span className="text-amber-500 font-bold text-xs tracking-widest uppercase">My Collection</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300">Awards</span>
                    </h2>
                </motion.div>

                {/* Shelf 1: Main Certs (Large) */}
                <Shelf hasMedal={true}>
                    <ShelfItem
                        title="Programming in C"
                        issuer="Certification"
                        color="blue"
                        image={cCert}
                        delay={0.1}
                        onClick={() => setSelectedCert({ img: cCert, title: "Programming in C", desc: "Foundational programming concepts." })}
                    />
                    <ShelfItem
                        title="JavaScript Algorithms"
                        issuer="FreeCodeCamp/Udemy"
                        color="yellow"
                        image={jsCert}
                        delay={0.2}
                        onClick={() => setSelectedCert({ img: jsCert, title: "JavaScript Algorithms", desc: "Advanced algorithmic problem solving." })}
                    />
                    <ShelfItem
                        title="Microsoft Technology"
                        issuer="Microsoft Associate"
                        color="amber"
                        image={msCert}
                        delay={0.3}
                        onClick={() => setSelectedCert({ img: msCert, title: "Microsoft Certified", desc: "Cloud and AI fundamentals." })}
                    />
                </Shelf>

                {/* Shelf 2: Trophies & Medals (Smaller) */}
                <Shelf className="max-w-4xl">
                    <TrophyItem
                        icon={Trophy}
                        color="amber"
                        delay={0.4}
                    />
                    <TrophyItem
                        icon={Star}
                        color="yellow"
                        delay={0.5}
                    />
                    <TrophyItem
                        icon={Crown}
                        color="blue"
                        delay={0.6}
                    />
                </Shelf>

                {/* Bottom Smoother - Extra fading gradient at the very bottom */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent via-black/40 to-transparent pointer-events-none"></div>

            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
                        style={{ cursor: 'zoom-out' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full z-50 hover:bg-white/20"
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.8, y: 50, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()} // Prevent close on content click
                            style={{ cursor: 'default' }}
                        >

                            {/* The Big Image */}
                            <div className="relative group rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-gray-800 bg-[#1a1a1a]">
                                <img
                                    src={selectedCert.img}
                                    alt={selectedCert.title}
                                    className="max-h-[75vh] w-auto object-contain"
                                />
                                <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 inset-shadow"></div>
                            </div>

                            <div className="mt-8 text-center bg-black/60 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10">
                                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 tracking-wide">{selectedCert.title}</h3>
                                {selectedCert.desc && <p className="text-amber-400/80 font-mono text-sm">{selectedCert.desc}</p>}
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Certificates;
