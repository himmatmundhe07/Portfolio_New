import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Cloud, Newspaper, Smartphone, Youtube, Award } from 'lucide-react';
import StarBackground from '../components/StarBackground';
import { Link } from 'react-router-dom';

// Import Screenshots
import taazaKhabarImg from '../assets/taaza-khabar.png';
import sanjeevaniImg from '../assets/sanjeevani.png';
import airTalkImg from '../assets/air-talk.png';

// --- CSS 3D LAPTOP COMPONENT ---
const LaptopFrame = ({ children }) => {
    return (
        <div className="perspective-1000 w-full max-w-2xl mx-auto transform-gpu">
            <div className="relative group transition-transform duration-700 hover:rotate-x-2 transform-style-3d">
                <div className="relative bg-gray-900 rounded-t-xl p-2 pb-0 shadow-2xl border border-gray-700/50 transform-style-3d transition-transform duration-500 origin-bottom group-hover:-rotate-x-2">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full z-20 opacity-50"></div>
                    <div className="relative bg-black rounded-t-lg overflow-hidden aspect-[16/10] border-[4px] border-gray-800 shadow-inner">
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group/screen">
                            {children}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>
                        </div>
                    </div>
                </div>
                <div className="relative h-4 bg-gray-800 rounded-b-xl shadow-lg border-t border-gray-900 flex justify-center items-center">
                    <div className="w-16 h-1.5 bg-gray-600 rounded-b-md absolute top-0"></div>
                </div>
            </div>
        </div>
    );
};

// --- CSS 3D PHONE COMPONENT ---
const PhoneFrame = ({ children }) => {
    return (
        <div className="perspective-1000 w-full max-w-[280px] mx-auto transform-gpu">
            <div className="relative group transition-transform duration-700 hover:rotate-y-12 transform-style-3d">
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-[6px] border-gray-800 transform-style-3d overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl z-30"></div>
                    <div className="relative bg-black rounded-[2.2rem] overflow-hidden aspect-[9/19.5] border border-gray-700/30">
                        {children}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FunctionalApps = () => {
    const projects = [
        {
            title: "Sanjeevani",
            originalBrand: "AI-Powered Emergency Healthcare Ecosystem",
            tagline: "AI-Powered Emergency Healthcare Ecosystem",
            description: "An advanced emergency healthcare platform designed to save lives. Bridges the critical information gap between accidents and hospitals with real-time biometric and AI triage intelligence.",
            features: [
                "Facial Biometrics & QR Medical Passports",
                "Live SOS with GPS Tracking",
                "Gemini AI Predictive Triage & Drug Alerts",
                "Geo-Blood Donor Network Integration",
                "NGO Sponsorship & E-Pharmacy Integration"
            ],
            tags: ["React", "Node.js", "MongoDB", "Gemini AI", "WebSocket"],
            icon: Cloud,
            color: "bg-emerald-500",
            reversed: false,
            repoLink: "https://github.com/himmatmundhe07/Sanjeevani",
            liveLink: "https://wce-hackathon2026-4-bits.vercel.app/",
            certLink: "https://drive.google.com/file/d/1CUqwkBa9A4THL1WIBSU-8OvpP7G0hU2x/view?usp=sharing",
            videoLink: "",
            image: sanjeevaniImg,
            type: "laptop"
        },
        {
            title: "Taaza Khabar",
            originalBrand: "Real-time News & Weather Portal",
            tagline: "Real-time News & Weather Portal",
            description: "A centralized hub for breaking news and live weather. Features a high-performance grid layout and real-time data ingestion from global APIs.",
            features: [
                "Real-time Headlines (The Guardian API)",
                "Live Weather Widget (WeatherAPI)",
                "Smart Search & Category Filtering",
                "Local Storage Personalization"
            ],
            tags: ["React", "The Guardian API", "WeatherAPI", "Tailwind"],
            icon: Newspaper,
            color: "bg-orange-500",
            reversed: true,
            repoLink: "https://github.com/himmatmundhe07/Taaza-Khabar",
            liveLink: "https://taazakhabarbydemu.netlify.app/",
            videoLink: "",
            image: taazaKhabarImg,
            type: "laptop"
        },
        {
            title: "Air Talk",
            originalBrand: "Bluetooth Offline Messenger",
            tagline: "Bluetooth Offline Messenger",
            description: "A decentralized mobile messenger for situations without Internet or SIM. Uses Bluetooth RFCOMM protocols for secure, peer-to-peer communication.",
            features: [
                "No Internet/SIM Required",
                "Peer-to-Peer Bluetooth Connectivity",
                "Real-time Text Messaging",
                "Emergency Communication Optimized"
            ],
            tags: ["Java", "Android SDK", "Bluetooth API"],
            icon: Smartphone,
            color: "bg-indigo-500",
            reversed: false,
            repoLink: "https://github.com/himmatmundhe07/Air-Talks",
            liveLink: "",
            certLink: "https://drive.google.com/file/d/1t_O9RXcUNuUArbS7wKKbngpFn1bDk23q/view?usp=sharing",
            videoLink: "",
            image: airTalkImg,
            type: "phone"
        }
    ];

    return (
        <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans selection:bg-purple-500/30 relative overflow-clip">
            <StarBackground />
            <div className="max-w-[1400px] mx-auto relative z-10">
                <Link to="/" className="inline-flex items-center text-indigo-900 hover:text-indigo-950 mb-12 transition-all group bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-full border border-indigo-900/10 backdrop-blur-sm shadow-lg shadow-indigo-500/10">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform w-5 h-5" /> Back to Projects
                </Link>


                <div className="text-center mb-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-9xl font-serif font-bold mb-8 tracking-tighter pb-6 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                    >
                        Functional Apps
                    </motion.h1>
                    <p className="text-xl text-indigo-950/80 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        Software that solves real problems. Tools designed for utility, performance, and scalability.
                    </p>
                </div>

                <div>
                    {projects.map((project, index) => (
                        <ShowcaseItem key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ShowcaseItem = ({ title, description, tagline, type, originalBrand, color, icon: Icon, reversed, liveLink, repoLink, certLink, videoLink, image, features, tags }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const yResult = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacityResult = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const Frame = type === "phone" ? PhoneFrame : LaptopFrame;

    return (
        <motion.div
            ref={ref}
            style={{ opacity: opacityResult, y: yResult }}
            className={`flex flex-col ${reversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center xl:items-start gap-16 mb-40 last:mb-0 px-4`}
        >
            <div className="w-full xl:w-3/5 relative z-10">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${color} rounded-full blur-[100px] opacity-10 -z-10`}></div>
                <Frame>
                    <div className="w-full h-full relative">
                        {type === "laptop" && (
                            <div className="absolute top-0 left-0 right-0 h-8 bg-black/80 backdrop-blur-sm flex items-center px-4 gap-2 z-20 border-b border-white/10">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div className="ml-4 h-4 w-32 bg-white/10 rounded-full"></div>
                            </div>
                        )}
                        <div className={`w-full h-full ${image ? 'pt-0' : 'pt-8'} flex items-center justify-center bg-gray-900 group-hover/screen:scale-105 transition-transform duration-700 overflow-hidden`}>
                            {image ? (
                                <img src={image} alt={title} className={`w-full h-full ${type === "phone" ? 'object-contain' : 'object-cover object-top'} opacity-90 group-hover/screen:opacity-100 transition-opacity`} />
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
                </Frame>
            </div>

            <div className="w-full xl:w-2/5 text-center xl:text-left">
                <div className={`inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/30 border border-indigo-900/10`}>
                    <span className="text-indigo-800 text-xs tracking-widest uppercase font-semibold">Built as</span>
                    <span className={`font-bold ${color.replace('bg-', 'text-')}`}>{originalBrand}</span>
                </div>

                <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight text-indigo-950">{title}</h3>
                {tagline && <p className="text-sm font-semibold text-purple-700 mb-4 uppercase tracking-wide">{tagline}</p>}
                <p className="text-lg md:text-xl text-indigo-950/80 mb-6 leading-relaxed font-light">
                    {description}
                </p>

                {features && features.length > 0 && (
                    <ul className="text-sm text-indigo-950/80 mb-6 space-y-1.5 list-none text-left">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">▸</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8 justify-center xl:justify-start">
                        {tags.map((tag, i) => (
                            <span key={i} className="text-xs px-3 py-1 bg-indigo-900/10 rounded-full text-indigo-900 border border-indigo-900/20 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-indigo-900 text-white font-bold hover:bg-indigo-800 transition-transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-indigo-900/20">
                            <ExternalLink size={20} /> Visit Live Demo
                        </a>
                    )}
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-indigo-900/30 text-indigo-900 hover:bg-indigo-900/10 transition-all flex items-center gap-2">
                        <Github size={20} /> View Source
                    </a>
                    {videoLink && (
                        <a href={videoLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all flex items-center gap-2 backdrop-blur-md group/yt">
                            <Youtube size={20} className="text-red-500 group-hover/yt:text-white transition-colors" /> Watch Video
                        </a>
                    )}
                    {certLink && (
                        <a href={certLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all flex items-center gap-2 backdrop-blur-md group/cert">
                            <Award size={20} className="text-amber-500 group-hover/cert:text-white transition-colors" /> Achievement
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default FunctionalApps;
