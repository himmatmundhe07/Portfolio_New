import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, ShoppingBag, Droplet, Gamepad2, Shirt, Heart, Youtube } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

// Import Screenshots
import cetaphilImg from '../assets/cetaphil.png';
import bombayImg from '../assets/Bombay Closet Cleanse.png';
import trueClassicImg from '../assets/True-Classic.png';
import icalmImg from '../assets/Icalm.png';
import StarBackground from '../components/StarBackground';

// --- CSS 3D LAPTOP COMPONENT ---
const LaptopFrame = ({ children }) => {
    // ... (rest of LaptopFrame is fine)
    return (
        <div className="perspective-1000 w-full max-w-2xl mx-auto transform-gpu">
            <div className="relative group transition-transform duration-700 hover:rotate-x-2 transform-style-3d">

                {/* Lid (Screen) */}
                <div className="relative bg-gray-900 rounded-t-xl p-2 pb-0 shadow-2xl border border-gray-700/50 transform-style-3d transition-transform duration-500 origin-bottom group-hover:-rotate-x-2">
                    {/* Camera Dot */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full z-20 opacity-50"></div>

                    {/* Screen Bezel & Content */}
                    <div className="relative bg-black rounded-t-lg overflow-hidden aspect-[16/10] border-[4px] border-gray-800 shadow-inner">
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group/screen">
                            {children}
                            {/* Screen Glare Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>
                        </div>
                    </div>
                </div>

                {/* Base */}
                <div className="relative h-4 bg-gray-800 rounded-b-xl shadow-lg border-t border-gray-900 flex justify-center items-center">
                    {/* Notch */}
                    <div className="w-16 h-1.5 bg-gray-600 rounded-b-md absolute top-0"></div>
                </div>
            </div>
        </div>
    );
};

const WebsiteClones = () => {
    const clones = [
        {
            title: "Bombay Closet Cleanse",
            originalBrand: "Thrift Store",
            description: "A thrift shop e-commerce interface focusing on fashion and sustainability. Features home, premium finds, and cart pages.",
            icon: ShoppingBag,
            color: "bg-pink-500",
            reversed: false,
            repoLink: "https://github.com/himmatmundhe07/Website-Clones/tree/master/Bombay-closet",
            liveLink: "https://bombay-closet-by-demu.netlify.app/",
            videoLink: "https://youtu.be/fUZAMmhxA8o?si=lC4vTyUr52ZbwUHl",
            image: bombayImg
        },
        {
            title: "Cetaphil",
            originalBrand: "Cetaphil",
            description: "Medical-grade skincare brand replica. Focuses on clean aesthetics, sticky navigation, and detailed product filtering.",
            icon: Droplet,
            color: "bg-blue-500",
            reversed: true,
            repoLink: "https://github.com/himmatmundhe07/Website-Clones/tree/master/Cetaphil",
            liveLink: "https://cetaphilbydemu.netlify.app/",
            videoLink: "https://youtu.be/6w-wtvtZ4KY?si=Ic8uHW_hC9nCLzgh",
            image: cetaphilImg
        },
        {
            title: "True Classic",
            originalBrand: "True Classic",
            description: "Men's fashion e-commerce site. Features extensive product grids, review badges, and best-seller filtering.",
            icon: Shirt,
            color: "bg-gray-800",
            reversed: true,
            repoLink: "https://github.com/himmatmundhe07/Website-Clones/tree/master/True-Classic",
            liveLink: "https://tureclassicbydemu.netlify.app/",
            videoLink: "https://youtu.be/9urEq2xSO2E?si=4odKTMPLvKfZckGV",
            image: trueClassicImg
        },
        {
            title: "iCalm",
            originalBrand: "Wellness Brand",
            description: "Stress-relief supplement brand page. Minimalist design focusing on storytelling and 'Our Story' sections.",
            icon: Heart,
            color: "bg-teal-500",
            reversed: false,
            repoLink: "https://github.com/himmatmundhe07/Website-Clones/tree/master/icalm",
            liveLink: "https://icalmbydemu.netlify.app/",
            videoLink: "https://youtu.be/Nq9c__ZcADc?si=kc2yUginavk5kq9Q",
            image: icalmImg
        }
    ];

    return (
        <div className="min-h-screen text-white p-6 md:p-12 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
            <StarBackground />
            <div className="max-w-[1400px] mx-auto relative z-10">
                <HashLink to="/#projects" className="inline-flex items-center text-indigo-100 hover:text-white mb-12 transition-all group bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm shadow-lg shadow-indigo-500/10">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform w-5 h-5" /> Back to Projects
                </HashLink>


                <div className="text-center mb-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-9xl font-serif font-bold mb-8 tracking-tighter bg-gradient-to-br from-fuchsia-200 via-indigo-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    >
                        Pixel Perfect
                    </motion.h1>
                    <p className="text-xl text-indigo-100/90 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        Recreating the web's most complex interfaces to understand the engineering decisions behind them.
                    </p>
                </div>

                <div>
                    {clones.map((clone, index) => (
                        <ShowcaseItem key={index} {...clone} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// ... (Helper component refactor needed for context, see below)

const ShowcaseItem = ({ title, description, originalBrand, color, icon: Icon, reversed, liveLink, repoLink, videoLink, image }) => {
    // ... logic same as CloneShowcase
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const yResult = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacityResult = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity: opacityResult, y: yResult }}
            className={`flex flex-col ${reversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center gap-16 mb-40 last:mb-0 px-4`}
        >
            <div className="w-full xl:w-3/5 relative z-10">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${color} rounded-full blur-[100px] opacity-10 -z-10`}></div>
                <LaptopFrame>
                    <div className="w-full h-full relative">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-black/80 backdrop-blur-sm flex items-center px-4 gap-2 z-20 border-b border-white/10">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <div className="ml-4 h-4 w-32 bg-white/10 rounded-full"></div>
                        </div>
                        <div className={`w-full h-full ${image ? 'pt-0' : 'pt-8'} flex items-center justify-center bg-gray-900 group-hover/screen:scale-105 transition-transform duration-700 overflow-hidden`}>
                            {image ? (
                                <img src={image} alt={title} className="w-full h-full object-cover object-top opacity-90 group-hover/screen:opacity-100 transition-opacity" />
                            ) : (
                                <>
                                    <Icon size={64} className="text-white/20" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                                        <p className="text-white font-serif italic text-lg">Live Preview</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </LaptopFrame>
            </div>

            <div className="w-full xl:w-2/5 text-center xl:text-left">
                <div className={`inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20`}>
                    <span className="text-indigo-200 text-xs tracking-widest uppercase font-semibold">Clone of</span>
                    <span className={`font-bold ${color.replace('bg-', 'text-').replace('opacity-20', '')}`}>{originalBrand}</span>
                </div>

                <h3 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white">{title}</h3>
                <p className="text-lg md:text-xl text-indigo-100/90 mb-10 leading-relaxed font-light">
                    {description}
                </p>

                <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-white/10">
                            <ExternalLink size={20} /> Visit Live Demo
                        </button>
                    </a>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all flex items-center gap-2">
                            <Github size={20} /> View Source
                        </button>
                    </a>
                    {/* Conditionally Render YouTube Button */}
                    {videoLink && (
                        <a href={videoLink} target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 rounded-full bg-red-500/10 border border-red-500/50 text-red-100 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all flex items-center gap-2 backdrop-blur-md group/yt">
                                <Youtube size={20} className="text-red-400 group-hover/yt:text-white transition-colors" /> Watch Video
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default WebsiteClones;