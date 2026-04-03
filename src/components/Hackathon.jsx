import React, { useRef, useState, useEffect, useCallback, useMemo, memo } from 'react';
import { createPortal } from 'react-dom';
import {
    motion,
    useScroll, useTransform,
    useMotionValueEvent,
    useMotionValue, useSpring,
    AnimatePresence,
    useReducedMotion,
} from 'framer-motion';
import {
    Calendar, MapPin, Award, Code2, Github, ExternalLink,
    ChevronDown, Sparkles, BookOpen, ChevronLeft, ChevronRight,
    Bookmark, UserCircle2, Code, Zap, X,
} from 'lucide-react';

import wceHackathonImg     from '../assets/wce-hackathon.jpg';
import sangamHackathonImg1 from '../assets/sangam-hackathon-1.jpg';
import sangamHackathonImg2 from '../assets/sangam-hackathon-2.jpg';

// ─────────────────────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────────────────────
const paperBg  = "bg-[#F3EFE9]";
const inkColor = "text-[#101828]";

const GRAIN_STYLE = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat',
};

const PAGE_SPRING  = { stiffness: 80,  damping: 22, mass: 0.6 };
const MOUSE_SPRING = { stiffness: 120, damping: 28, mass: 0.5 };

// Shared snap points — used by nav handler AND dot indicator
const SNAP_POINTS = [0, 0.2, 0.4, 0.6, 0.8, 1.0];

// ─────────────────────────────────────────────────────────────
//  HACKATHON DATA
// ─────────────────────────────────────────────────────────────
const RAW_HACKATHON_DATA = [
    {
        id: "01",
        title: "WCE ACM Hackathon 2026",
        date: "March 2026",
        venue: "WCE ACM, Sangli",
        team: "Team 4-Bits",
        description: "Secured a top spot out of 1,745 teams with 'Sanjeevani' — an AI-powered emergency healthcare ecosystem. Features intelligent triage, real-time hospital mapping, facial recognition for patient identification, and an AI chatbot powered by Gemini 2.5.",
        pullQuote: "A race against time: replacing chaotic emergency rooms with an intelligent ecosystem.",
        achievement: "🏆 Finalist — Top 10 / 1,745 Teams",
        techStack: ["React 18", "TypeScript", "Supabase", "Gemini 2.5", "face-api.js", "Leaflet.js"],
        highlights: [
            "Top 10 out of 1,745 competing teams",
            "Live facial recognition demo blew the judges away",
        ],
        gradient: "from-blue-400 to-cyan-500",
        repoLink: "https://github.com/himmatmundhe07/Sanjeevani",
        liveLink: "https://wce-hackathon2026-4-bits.vercel.app/",
        certLink: "https://drive.google.com/file/d/1CUqwkBa9A4THL1WIBSU-8OvpP7G0hU2x/view?usp=sharing",
        photos: [wceHackathonImg],
    },
    {
        id: "02",
        title: "SU Hackathon 2026",
        date: "2026",
        venue: "Sangam University",
        team: "Team 4-Bits",
        description: "Built the initial version of Sanjeevani — a QR-based EHR system. Designed to streamline patient data access in emergency scenarios using quick-scan technology. This laid the foundation for our WCE ACM winning project.",
        pullQuote: "Built entirely overnight with nothing but adrenaline and React.",
        achievement: "🥇 Finalist",
        techStack: ["React", "Supabase", "QR Generation", "EHR System"],
        highlights: [
            "Built the core QR-scan patient lookup in one night",
            "Judges praised the real-world healthcare impact",
        ],
        gradient: "from-sky-400 to-blue-500",
        repoLink: "https://github.com/himmatmundhe07/Sanjeevani",
        liveLink: "",
        certLink: "https://drive.google.com/file/d/1VEtfuU8Ul7nHqSbWHM8fOm9TrKE3Qijj/view?usp=sharing",
        photos: [sangamHackathonImg1, sangamHackathonImg2],
    },
    {
        id: "03",
        title: "ElectroSphere 2K26 Software Edition",
        date: "7 January 2026",
        venue: "TechXDM Club, Faculty of Engineering, Swaminarayan University",
        team: "Team 4-Bits",
        description: "Developed an innovative Bluetooth-Based Offline Chat Application to solve the challenge of communication in network-isolated environments. This application utilizes Bluetooth technology for reliable, real-time peer-to-peer messaging without the need for cellular data or internet.",
        pullQuote: "Resilient, off-the-grid communication for when the network goes down.",
        achievement: "⭐ Bluetooth Offline Chat Application",
        techStack: ["Java / Kotlin", "Android Studio", "Bluetooth RFCOMM"],
        highlights: [
            "Seamless offline peer-to-peer communication under 100m range",
            "Reliable data transmission using custom RFCOMM protocol",
            "Designed for emergency and low-connectivity scenarios"
        ],
        gradient: "from-purple-500 to-indigo-600",
        repoLink: "",
        liveLink: "",
        certLink: "https://drive.google.com/file/d/1t_O9RXcUNuUArbS7wKKbngpFn1bDk23q/view?usp=sharing",
        photos: ["https://lh3.googleusercontent.com/d/1t_O9RXcUNuUArbS7wKKbngpFn1bDk23q"],
    },
];

// ─────────────────────────────────────────────────────────────
//  AUDIO — singleton AudioContext, paper rustle
// ─────────────────────────────────────────────────────────────
const playTactileClick = (() => {
    let ctx = null;
    return () => {
        try {
            if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
            const gain   = ctx.createGain();
            const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.08, ctx.sampleRate);
            const data   = buffer.getChannelData(0);
            for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type            = 'bandpass';
            filter.frequency.value = 1200;
            filter.Q.value         = 0.5;
            source.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            gain.gain.setValueAtTime(0.5, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            source.start();
            source.stop(ctx.currentTime + 0.08);
        } catch (_) {}
    };
})();

// ─────────────────────────────────────────────────────────────
//  PAGE DOT
//
//  FIX: useTransform MUST be called at component top-level.
//  The previous code called useTransform inside .map() in the
//  parent — that violates Rules of Hooks and crashes React
//  StrictMode. Each dot is its own component so the hook call
//  is always at the top level of a React function.
// ─────────────────────────────────────────────────────────────
const PageDot = memo(({ index, progress }) => {
    const totalSnapPoints = SNAP_POINTS.length - 1; // e.g. 5
    const step = 1 / totalSnapPoints; // e.g. 0.2
    const lo = Math.max(0, (index - 1) * step);
    const mid = index * step;
    const hi = Math.min(1, (index + 1) * step);
    const opacity = useTransform(progress, [lo, mid, hi], [0.2, 1, 0.2]);

    return (
        <motion.div
            className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-900"
            style={{ opacity }}
        />
    );
});

// ─────────────────────────────────────────────────────────────
//  COVER ART
// ─────────────────────────────────────────────────────────────
const CoverArt = memo(() => (
    <div className="w-full h-full bg-gradient-to-br from-[#c1d3fe] via-[#a2bffe] to-[#e0c3fc] flex flex-col items-center justify-center relative overflow-hidden rounded-r-xl md:rounded-r-2xl">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={GRAIN_STYLE} />
        <div className="absolute top-[-10%] right-[-10%] w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 rounded-full bg-indigo-300/30 blur-3xl pointer-events-none" />
        <div className="absolute inset-3 md:inset-6 border border-white/60 rounded-xl pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />

        <div className="absolute top-6 md:top-14 left-0 w-full text-center">
            <p className="text-blue-900 font-mono text-[7px] md:text-[11px] uppercase tracking-[0.3em] font-extrabold">Est. 2025 · Vol. I</p>
            <div className="flex items-center justify-center gap-3 mt-1">
                <div className="w-10 md:w-16 h-px bg-blue-900/30" />
                <span className="text-[7px] md:text-[10px] tracking-[0.3em] font-mono font-bold text-blue-950">CODE ARCHIVES</span>
                <div className="w-10 md:w-16 h-px bg-blue-900/30" />
            </div>
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center mt-6 md:mt-10">
            <div className="w-12 h-12 md:w-20 md:h-20 bg-white/60 rounded-2xl flex items-center justify-center mb-6 md:mb-8 ring ring-white/80 shadow-lg">
                <BookOpen className="text-blue-800 w-6 h-6 md:w-10 md:h-10" />
            </div>
            <h2 className="font-serif text-[clamp(26px,6vw,72px)] leading-[1.05] font-extrabold text-blue-900 drop-shadow-sm">
                Hackathon
            </h2>
            <h2 className="font-serif text-[clamp(20px,4vw,60px)] text-blue-900/70 leading-tight">
                Diaries
            </h2>
            <div className="w-20 md:w-32 h-px bg-blue-900/20 mx-auto mt-6 md:mt-10" />
        </div>

        <div className="absolute bottom-6 md:bottom-14 left-0 w-full text-center">
            <p className="text-indigo-950 font-serif italic text-[11px] md:text-[16px] tracking-wide font-bold">The Innovation Blueprint</p>
            <p className="text-blue-950/70 font-mono text-[7px] md:text-[10px] uppercase tracking-[0.3em] font-extrabold mt-1">Team 4-Bits Original Edition</p>
        </div>

        {/* Wax seal */}
        <div className="absolute bottom-[10%] right-[10%] w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-red-700 via-red-800 to-red-950 rounded-full flex items-center justify-center rotate-[-15deg] shadow-[3px_5px_10px_rgba(0,0,0,0.3),inset_2px_4px_8px_rgba(255,255,255,0.2)] border border-red-900 z-20 transition-transform hover:scale-105 cursor-default select-none">
            <div className="absolute inset-[3px] md:inset-[4px] border-2 border-red-800/80 rounded-full flex items-center justify-center shadow-[inset_1px_2px_5px_rgba(0,0,0,0.4)]">
                <span className="font-serif text-[16px] md:text-[24px] font-bold text-red-100/90 tracking-tighter drop-shadow-sm">HM</span>
            </div>
        </div>
    </div>
));

// ─────────────────────────────────────────────────────────────
//  BACK COVER ART
// ─────────────────────────────────────────────────────────────
const BackCoverArt = memo(() => (
    <div className="w-full h-full bg-gradient-to-br from-[#c1d3fe] via-[#a2bffe] to-[#e0c3fc] flex flex-col items-center justify-center relative overflow-hidden rounded-l-xl md:rounded-l-2xl">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={GRAIN_STYLE} />
        <div className="absolute inset-3 md:inset-6 border border-white/60 rounded-xl pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-black/20 via-black/5 to-transparent pointer-events-none" />

        <div className="absolute top-[12%] right-[12%] w-14 h-14 md:w-24 md:h-24 bg-[#111] rounded-xl flex flex-col items-center justify-center rotate-[15deg] shadow-xl ring-2 ring-white transition-transform hover:scale-105 cursor-pointer">
            <Code className="text-cyan-400 mb-1 w-4 h-4 md:w-7 md:h-7" />
            <span className="font-sans text-white text-[7px] md:text-[11px] font-black uppercase tracking-widest text-center leading-tight">WCE<br />Hack</span>
        </div>

        <div className="absolute bottom-[12%] left-[10%] w-16 h-16 md:w-28 md:h-28 bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 rounded-full flex flex-col items-center justify-center rotate-[-12deg] shadow-xl ring-2 ring-white transition-transform hover:scale-105 cursor-pointer">
            <Zap className="text-white mb-1 w-5 h-5 md:w-8 md:h-8" />
            <span className="font-black text-white text-[11px] md:text-[20px] tracking-tighter leading-none">BUILD</span>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/70 rounded-full flex items-center justify-center mb-4 md:mb-6 ring ring-white shadow-lg">
                <Bookmark className="text-blue-900 w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="font-serif text-[clamp(14px,4vw,32px)] text-blue-950 tracking-[0.3em] uppercase font-bold">Archive Closed</h2>
        </div>

        <div className="absolute bottom-6 md:bottom-14 left-0 w-full text-center">
            <p className="text-blue-900/50 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold">Volume I · 2026</p>
        </div>
    </div>
));

// ─────────────────────────────────────────────────────────────
//  PREFACE PAGE
// ─────────────────────────────────────────────────────────────
const PrefaceVisuals = memo(() => (
    <div className={`w-full h-full flex flex-col items-center justify-center p-4 md:p-12 relative ${paperBg}`}>
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={GRAIN_STYLE} />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black/20 via-black/5 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full h-full border border-blue-900/10 p-4 md:p-8 flex flex-col items-center justify-between text-center">
            <div className="flex flex-col items-center w-full mt-4 md:mt-8">
                <BookOpen className="text-blue-950 mb-3 opacity-25 w-7 h-7 md:w-9 md:h-9" />
                <h1 className="font-serif text-[clamp(20px,5vw,48px)] text-blue-950 font-bold tracking-widest mb-1">PREFACE</h1>
                <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-blue-600/70 font-bold">Classified Log</p>
                <div className="w-12 md:w-16 h-px bg-blue-900/25 mx-auto mt-4 md:mt-6" />
            </div>

            <div className="flex-1 flex items-center justify-center px-2 md:px-6">
                <p className="font-serif italic text-[clamp(11px,2.5vw,20px)] text-slate-700 leading-relaxed">
                    "Code is poetry written with logic, engineered under pressure, and delivered safely in the dark."
                </p>
            </div>

            <div className="w-full max-w-[280px] mx-auto border-t border-b border-blue-900/10 py-4 md:py-6 mb-4">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-blue-100 border border-blue-200 mx-auto mb-3 flex items-center justify-center">
                    <UserCircle2 className="text-blue-500 w-6 h-6 md:w-9 md:h-9" />
                </div>
                <p className="font-mono text-[7px] md:text-[9px] uppercase tracking-[0.3em] text-blue-800/50 mb-1.5 font-bold">Author & Architect</p>
                <h2 className="font-serif text-[clamp(14px,4vw,26px)] text-blue-950 font-bold tracking-wider mb-3">HIMMAT MUNDHE</h2>
                <div className="flex justify-center gap-2 flex-wrap">
                    <span className="font-sans font-bold text-[7px] md:text-[10px] uppercase tracking-widest text-sky-800 bg-sky-100/60 py-1 px-3 rounded-full ring-1 ring-sky-900/10 whitespace-nowrap">Full Stack Dev</span>
                    <span className="font-sans font-bold text-[7px] md:text-[10px] uppercase tracking-widest text-amber-700 bg-amber-100/60 py-1 px-3 rounded-full ring-1 ring-amber-900/10 flex items-center gap-1 whitespace-nowrap">
                        <Award className="w-2 h-2 md:w-3 md:h-3" /> Team Lead
                    </span>
                </div>
            </div>
        </div>
    </div>
));

// ─────────────────────────────────────────────────────────────
//  INDEX PAGE
// ─────────────────────────────────────────────────────────────
const IndexDetails = memo(() => (
    <div className={`w-full h-full flex flex-col justify-center p-4 md:p-14 relative ${paperBg}`}>
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={GRAIN_STYLE} />
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />

        <div className="relative z-10 md:pl-4">
            <h2 className="font-serif text-[clamp(16px,4vw,36px)] text-blue-950 font-bold mb-6 md:mb-10 border-b-2 border-blue-900/20 pb-3 text-center">
                TABLE OF CONTENTS
            </h2>
            <div className="flex flex-col gap-6 md:gap-10 max-w-[95%] mx-auto">
                {RAW_HACKATHON_DATA.map((hack, idx) => (
                    <div key={idx} className="flex items-end gap-2 md:gap-3 w-full hover:translate-x-2 transition-transform">
                        <span className="font-mono text-[clamp(14px,3vw,30px)] text-blue-900/35 font-bold">{hack.id}</span>
                        <div className="flex-1 border-b-2 border-dotted border-blue-950/15 mb-1.5 relative">
                            <h3 className="font-serif text-[clamp(10px,2vw,20px)] text-blue-950 font-bold absolute bottom-1 bg-[#F3EFE9] pr-2 leading-tight truncate max-w-full">
                                {hack.title}
                            </h3>
                        </div>
                        <span className="font-serif text-[clamp(8px,1.5vw,14px)] text-slate-500 italic bg-[#F3EFE9] pl-1 whitespace-nowrap">
                            {hack.date.split(" ")[0]}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mt-10 md:mt-16 text-center opacity-40">
                <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-blue-900 flex items-center justify-center gap-2">
                    <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" /> Flip Pages <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </p>
            </div>
        </div>
    </div>
));

// ─────────────────────────────────────────────────────────────
//  PHOTO CAROUSEL
// ─────────────────────────────────────────────────────────────
const PhotoCarousel = memo(({ photos, hackTitle, hackDate, hackId, onPhotoClick }) => {
    const [current, setCurrent] = useState(0);
    const hasMultiple = photos.length > 1;

    useEffect(() => {
        if (!hasMultiple) return;
        const t = setInterval(() => setCurrent(p => (p + 1) % photos.length), 3000);
        return () => clearInterval(t);
    }, [hasMultiple, photos.length]);

    return (
        <div
            className="w-full h-full relative overflow-hidden rounded-sm ring-1 ring-black/10 cursor-zoom-in"
            onClick={() => onPhotoClick?.(photos, current)}
        >
            {photos.map((photo, i) => (
                <img
                    key={i}
                    src={photo}
                    alt={`${hackTitle} photo ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                    decoding="async"
                />
            ))}
            {hasMultiple && (
                <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-black/50 text-white text-[6px] md:text-[9px] font-mono px-1.5 py-0.5 rounded-sm z-10">
                    {current + 1}/{photos.length}
                </div>
            )}
            <p className="absolute bottom-2 left-0 w-full text-center text-[6px] md:text-[9px] text-white/70 font-mono uppercase tracking-wider">
                {hackDate.split(" ")[0]} · {hackId}
            </p>
        </div>
    );
});

// ─────────────────────────────────────────────────────────────
//  PAGE VISUALS
// ─────────────────────────────────────────────────────────────
const PageVisuals = memo(({ hack, onPhotoClick }) => {
    const hasPhotos   = hack.photos.length > 0;
    const hasMultiple = hack.photos.length > 1;

    return (
        <div className={`w-full h-full flex flex-col items-center justify-center p-4 md:p-12 relative ${paperBg}`}>
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #000 28px)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-black/20 via-black/5 to-transparent pointer-events-none" />

            <div className="relative w-[88%] md:w-full max-w-[380px] aspect-square flex items-center justify-center mb-3 md:mb-5 mt-3 md:mt-8">
                {/* Back polaroid */}
                <div className="absolute w-[80%] aspect-[4/3] bg-[#FEF4E8] shadow-md ring-1 ring-black/5 rotate-[-6deg] -translate-x-3 md:-translate-x-5 -translate-y-2 md:-translate-y-3 p-2 md:p-4 pb-6 md:pb-8 z-0 overflow-hidden">
                    {hasMultiple ? (
                        <img src={hack.photos[1]} alt="back polaroid" className="w-full h-full object-cover rounded-sm" loading="lazy" decoding="async" />
                    ) : (
                        <div className="w-full h-full border-2 border-[#8A6A4E]/20 border-dashed flex flex-col items-center justify-center gap-2">
                            <Award className="text-[#8A6A4E]/25 w-10 h-10 md:w-12 md:h-12" />
                            <p className="font-serif text-[7px] md:text-[10px] text-[#8A6A4E]/40 uppercase tracking-widest text-center">Achievement Log</p>
                        </div>
                    )}
                </div>

                {/* Front polaroid */}
                <div className="absolute w-[85%] aspect-[4/3] bg-[#fcfcfa] p-2 md:p-3 pb-6 md:pb-10 shadow-lg ring-1 ring-black/[0.08] rotate-[4deg] translate-x-2 md:translate-x-3 translate-y-1 md:translate-y-2 z-10 hover:rotate-0 hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-10 md:w-14 h-2 md:h-3 bg-white/50 ring-1 ring-black/5 rotate-[-2deg]" />
                    {hasPhotos ? (
                        <PhotoCarousel
                            photos={hack.photos}
                            hackTitle={hack.title}
                            hackDate={hack.date}
                            hackId={hack.id}
                            onPhotoClick={onPhotoClick}
                        />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${hack.gradient} rounded-sm flex flex-col items-center justify-center`}>
                            <Code2 className="text-white/60 mb-2 w-8 h-8 md:w-10 md:h-10" />
                            <span className="text-white/70 font-mono text-[6px] md:text-[10px] uppercase tracking-widest font-bold">Photo Coming Soon</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="border border-blue-900/20 bg-blue-900/5 px-3 py-1.5 md:px-6 md:py-2.5 rounded-md font-bold font-sans text-[8px] md:text-[13px] text-center text-blue-950 shadow-sm mt-2 truncate w-[90%] md:w-auto">
                {hack.achievement}
            </div>
        </div>
    );
});

// ─────────────────────────────────────────────────────────────
//  PAGE DETAILS
// ─────────────────────────────────────────────────────────────
const PageDetails = memo(({ hack }) => (
    <div className={`w-full h-full flex flex-col justify-start pt-6 md:pt-16 px-3 md:px-12 relative ${paperBg}`}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #000 28px)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />

        <div
            className="relative z-10 md:pl-4 h-[88%] overflow-y-auto pr-1 md:pr-2 pb-14"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <div className="font-mono text-[8px] md:text-[12px] text-blue-900/40 font-bold mb-2 md:mb-3 border-b border-blue-900/10 pb-1.5 flex justify-between">
                <span>Entry {hack.id}</span>
                <span className="truncate max-w-[55%] text-right">{hack.team}</span>
            </div>

            <h3 className={`font-serif text-[clamp(16px,4vw,44px)] mb-2 md:mb-4 leading-[1.1] font-bold ${inkColor} opacity-90`}>
                {hack.title}
            </h3>

            <div className="flex flex-wrap gap-x-3 gap-y-1 md:gap-x-5 mb-3 md:mb-6 text-[8px] md:text-[13px] font-mono text-slate-500 font-bold">
                <span className="flex items-center gap-1">
                    <Calendar className="text-blue-700 w-3 h-3 md:w-4 md:h-4" />
                    {hack.date.split(" ")[0]}
                </span>
                <span className="flex items-center gap-1 truncate max-w-full">
                    <MapPin className="text-sky-700 w-3 h-3 md:w-4 md:h-4" />
                    <span className="truncate">{hack.venue}</span>
                </span>
            </div>

            <div className="my-3 md:my-6 border-l-[3px] md:border-l-4 border-blue-500/35 pl-3 md:pl-5 py-1 bg-blue-500/[0.03] rounded-r">
                <p className="font-serif italic text-[clamp(11px,2.5vw,20px)] text-blue-950/75 leading-snug md:leading-relaxed">
                    "{hack.pullQuote}"
                </p>
            </div>

            <p className={`font-sans leading-snug md:leading-relaxed mb-4 md:mb-7 text-[clamp(9px,2vw,15px)] ${inkColor} opacity-85`}>
                {hack.description}
            </p>

            <div className="mb-4 md:mb-7">
                <h4 className="font-bold text-[7px] md:text-[11px] uppercase tracking-[0.2em] mb-2 md:mb-3 flex items-center gap-1.5 text-blue-950 opacity-75">
                    <Code2 className="w-3 h-3 md:w-4 md:h-4" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                    {hack.techStack.map((tech, j) => (
                        <span key={j} className="px-2 py-1 md:px-3 md:py-1.5 rounded text-[7px] md:text-[11px] font-mono border border-blue-900/15 text-sky-950 font-bold bg-white/50 hover:bg-white/90 hover:-translate-y-0.5 transition-all cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-4 md:mb-7">
                <h4 className="font-bold text-[7px] md:text-[11px] uppercase tracking-[0.2em] mb-2 md:mb-3 text-slate-700 opacity-75">Highlights</h4>
                <ul className="space-y-2 md:space-y-3">
                    {hack.highlights.map((mem, j) => (
                        <li key={j} className={`font-sans text-[clamp(9px,2vw,14px)] flex items-start gap-2 leading-snug md:leading-relaxed ${inkColor} opacity-85`}>
                            <Sparkles className="text-blue-600/70 w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
                            {mem}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 mt-5 md:mt-8">
                {hack.repoLink && (
                    <a href={hack.repoLink} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-5 md:py-2.5 bg-[#0c1222] hover:bg-black text-[#F3EFE9] rounded-lg text-[8px] md:text-[12px] font-bold transition-all shadow-md hover:scale-105 active:scale-95">
                        <Github className="w-3 h-3 md:w-4 md:h-4" /> Source
                    </a>
                )}
                {hack.liveLink && (
                    <a href={hack.liveLink} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-5 md:py-2.5 bg-blue-900/5 hover:bg-blue-900/10 text-blue-950 rounded-lg text-[8px] md:text-[12px] font-bold transition-all border border-blue-900/20 hover:scale-105 active:scale-95">
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /> Live Demo
                    </a>
                )}
                {hack.certLink && (
                    <a href={hack.certLink} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-5 md:py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 rounded-lg text-[8px] md:text-[12px] font-bold transition-all border border-amber-500/30 hover:scale-105 active:scale-95">
                        <Award className="w-3 h-3 md:w-4 md:h-4" /> Certificate
                    </a>
                )}
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-14 md:h-20 bg-gradient-to-t from-[#F3EFE9] to-transparent pointer-events-none z-30 flex items-end justify-center pb-2 md:pb-3">
            <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-[7px] md:text-[10px] text-blue-900/40 uppercase tracking-[0.2em] font-bold flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full ring-1 ring-blue-900/[0.08]"
            >
                Scroll <ChevronDown className="text-blue-500 w-2.5 h-2.5" />
            </motion.span>
        </div>
    </div>
));

// ─────────────────────────────────────────────────────────────
//  BOOK LEAF
// ─────────────────────────────────────────────────────────────
const BookLeaf = memo(({ rotateY, zIndex, frontContent, backContent }) => {
    const springRotate = useSpring(rotateY, PAGE_SPRING);

    return (
        <motion.div
            className="absolute left-[50%] top-0 bottom-0 w-[50%] origin-left"
            style={{ rotateY: springRotate, zIndex, transformStyle: "preserve-3d" }}
        >
            {/* Front face */}
            <div
                className="absolute inset-0 overflow-hidden rounded-r-xl md:rounded-r-2xl group"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg) translateZ(1px)" }}
            >
                {frontContent}
                {/* CSS-only page curl hint — no framer animation on this element */}
                <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-[200%] h-[200%] bg-gradient-to-tl from-black/20 via-black/5 to-transparent rotate-45 translate-x-1/2 translate-y-1/2 rounded-tl-full" />
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] md:border-l-[20px] border-l-transparent border-b-[12px] md:border-b-[20px] border-b-white/80 drop-shadow-lg" />
                </div>
            </div>

            {/* Back face */}
            <div
                className="absolute inset-0 overflow-hidden rounded-l-xl md:rounded-l-2xl"
                style={{ transform: "rotateY(180deg) translateZ(1.5px)", backfaceVisibility: "hidden" }}
            >
                {backContent}
            </div>
        </motion.div>
    );
});

// ─────────────────────────────────────────────────────────────
//  LIGHTBOX
// ─────────────────────────────────────────────────────────────
const Lightbox = memo(({ photos, index, onClose, onNext, onPrev }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
    >
        <button onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
            <X size={24} />
        </button>
        {photos.length > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 font-mono text-sm bg-black/40 px-4 py-1.5 rounded-full">
                {index + 1} / {photos.length}
            </div>
        )}
        {photos.length > 1 && (
            <button onClick={e => { e.stopPropagation(); onPrev(); }} className="absolute left-2 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <ChevronLeft size={28} />
            </button>
        )}
        <motion.img
            key={index}
            src={photos[index]}
            alt={`Photo ${index + 1}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
        />
        {photos.length > 1 && (
            <button onClick={e => { e.stopPropagation(); onNext(); }} className="absolute right-2 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <ChevronRight size={28} />
            </button>
        )}
    </motion.div>
));

// ─────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
const Hackathon = () => {
    const sectionRef           = useRef(null);
    const prefersReducedMotion = useReducedMotion();

    // ── Lightbox ──
    const [lightbox, setLightbox] = useState({ open: false, photos: [], index: 0 });
    const openLightbox  = useCallback((photos, index) => setLightbox({ open: true, photos, index }), []);
    const closeLightbox = useCallback(() => setLightbox({ open: false, photos: [], index: 0 }), []);
    const nextPhoto     = useCallback(() => setLightbox(p => ({ ...p, index: (p.index + 1) % p.photos.length })), []);
    const prevPhoto     = useCallback(() => setLightbox(p => ({ ...p, index: (p.index - 1 + p.photos.length) % p.photos.length })), []);

    // ── Scroll ──
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 55, damping: 18, mass: 0.4, restDelta: 0.0001 });

    // ── Book transforms ──
    const bookScale = useTransform(smoothProgress, [0, 0.05], [0.82, 1]);
    const bookX     = useTransform(smoothProgress,
        [0.0, 0.04, 0.16, 0.84, 0.96, 1.0],
        ["-25%", "-25%", "0%", "0%", "25%", "25%"]
    );

    const coverRotateY = useTransform(smoothProgress, [0.04, 0.16], [0, -180]);
    const indexRotateY = useTransform(smoothProgress, [0.24, 0.36], [0, -180]);
    const hack1RotateY = useTransform(smoothProgress, [0.44, 0.56], [0, -180]);
    const hack2RotateY = useTransform(smoothProgress, [0.64, 0.76], [0, -180]);
    const backRotateY  = useTransform(smoothProgress, [0.84, 0.96], [0, -180]);

    // ── z-index state ──
    const [zLevels, setZLevels] = useState({ cover: 50, index: 40, hack1: 30, hack2: 20, back: 10 });

    const scrollHintOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);
    const bindingOpacity    = useTransform(smoothProgress, [0.02, 0.1, 0.9, 0.98], [0, 1, 1, 0]);
    const rightEdgeOpacity  = useTransform(smoothProgress, [0.84, 0.92], [1, 0]);

    // ── MERGED listener: z-index swap + audio in one handler ──
    const prevProgressRef = useRef(0);
    useMotionValueEvent(smoothProgress, "change", (v) => {
        // z-index logic mapping 5 leaves
        const newZ = {
            cover: v < 0.1 ? 50 : 10,
            index: v < 0.3 ? 40 : 20,
            hack1: v < 0.5 ? 30 : 30,
            hack2: v < 0.7 ? 20 : 40,
            back:  v < 0.9 ? 10 : 50,
        };
        setZLevels(prev =>
            prev.cover !== newZ.cover || prev.index !== newZ.index ||
            prev.hack1 !== newZ.hack1 || prev.hack2 !== newZ.hack2 || prev.back !== newZ.back
                ? newZ : prev
        );

        // audio
        const prev = prevProgressRef.current;
        [0.1, 0.3, 0.5, 0.7, 0.9].forEach(t => {
            if ((prev < t && v >= t) || (prev > t && v <= t)) playTactileClick();
        });
        prevProgressRef.current = v;
    });

    // ── Mouse parallax ──
    const mouseX        = useMotionValue(0);
    const mouseY        = useMotionValue(0);
    const globalRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]),  MOUSE_SPRING);
    const globalRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), MOUSE_SPRING);

    useEffect(() => {
        if (prefersReducedMotion) return;
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
        const onMove = (e) => {
            mouseX.set(e.clientX / window.innerWidth  - 0.5);
            mouseY.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, [mouseX, mouseY, prefersReducedMotion]);

    // ── Scroll-snap ──
    const sectionRectRef = useRef(null);
    const getScrollInfo  = useCallback(() => {
        if (!sectionRef.current) return null;
        if (!sectionRectRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            sectionRectRef.current = { top: window.scrollY + rect.top, height: rect.height - window.innerHeight };
        }
        return sectionRectRef.current;
    }, []);

    useEffect(() => {
        const reset = () => { sectionRectRef.current = null; };
        window.addEventListener('resize', reset, { passive: true });
        return () => window.removeEventListener('resize', reset);
    }, []);

    const handleScrollSnap = useCallback((direction) => {
        const info = getScrollInfo();
        if (!info) return;
        const cur  = (window.scrollY - info.top) / info.height;
        const next = direction === 1
            ? SNAP_POINTS.find(s => s > cur + 0.05) ?? 1
            : [...SNAP_POINTS].reverse().find(s => s < cur - 0.05) ?? 0;
        window.scrollTo({ top: info.top + next * info.height, behavior: 'smooth' });
    }, [getScrollInfo]);

    // ── Keyboard navigation ──
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowRight') handleScrollSnap(1);
            if (e.key === 'ArrowLeft')  handleScrollSnap(-1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [handleScrollSnap]);

    // ── Touch / swipe ──
    const touchStartX = useRef(0);

    // ── Memoised page content ──
    const prefacePage  = useMemo(() => <PrefaceVisuals />, []);
    const indexPage    = useMemo(() => <IndexDetails />, []);
    const hack0Visuals = useMemo(() => <PageVisuals hack={RAW_HACKATHON_DATA[0]} onPhotoClick={openLightbox} />, [openLightbox]);
    const hack0Details = useMemo(() => <PageDetails hack={RAW_HACKATHON_DATA[0]} />, []);
    const hack1Visuals = useMemo(() => <PageVisuals hack={RAW_HACKATHON_DATA[1]} onPhotoClick={openLightbox} />, [openLightbox]);
    const hack1Details = useMemo(() => <PageDetails hack={RAW_HACKATHON_DATA[1]} />, []);
    const hack2Visuals = useMemo(() => <PageVisuals hack={RAW_HACKATHON_DATA[2]} onPhotoClick={openLightbox} />, [openLightbox]);
    const hack2Details = useMemo(() => <PageDetails hack={RAW_HACKATHON_DATA[2]} />, []);

    return (
        <section id="hackathons" ref={sectionRef} className="relative h-[400vh] md:h-[650vh] bg-transparent">
            <div
                className="sticky top-0 h-screen flex items-center justify-center overflow-hidden touch-pan-y"
                onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
                onTouchEnd={e => {
                    const delta = touchStartX.current - e.changedTouches[0].clientX;
                    if (Math.abs(delta) > 50) handleScrollSnap(delta > 0 ? 1 : -1);
                }}
            >
                {/* Scroll hint */}
                <motion.div style={{ opacity: scrollHintOpacity }} className="absolute top-14 md:bottom-10 md:top-auto left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
                    <div className="bg-white/40 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 shadow-lg ring-1 ring-white/60 whitespace-nowrap">
                        <p className="text-blue-950/75 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-extrabold">Scroll to flip pages</p>
                        <ChevronDown className="text-blue-700/60 animate-bounce w-4 h-4" />
                    </div>
                </motion.div>

                {/* 3D Book */}
                <div className="w-full max-w-[1400px] flex items-center justify-center relative">
                    <motion.div
                        className="relative w-[96vw] sm:w-[90vw] md:w-[85vw] aspect-[3/4.2] sm:aspect-[4/5] md:aspect-auto md:h-[88vh] lg:h-[92vh] max-h-[1200px]"
                        style={{
                            perspective: "2500px",
                            scale: bookScale,
                            x: bookX,
                            rotateX: prefersReducedMotion ? 0 : globalRotateX,
                            rotateY: prefersReducedMotion ? 0 : globalRotateY,
                        }}
                    >
                        {/* The Left static half has been completely removed to reveal the true 3D book background */}

                        {/* Right-edge page depth */}
                        <motion.div style={{ opacity: rightEdgeOpacity }} className="absolute right-[-2px] md:right-[-4px] top-[1%] bottom-[1%] w-2 bg-[#e6decf] rounded-r-2xl border-y border-r border-[#c2b6a3] z-[5] pointer-events-none" />
                        <motion.div style={{ opacity: rightEdgeOpacity }} className="absolute right-[-4px] md:right-[-8px] top-[2%] bottom-[2%] w-2 bg-[#d8cbbb] rounded-r-2xl border-y border-r border-[#ad9d86] z-[4] pointer-events-none" />

                        {/* Leaves */}
                        <BookLeaf rotateY={backRotateY}  zIndex={zLevels.back}  frontContent={hack2Details}  backContent={<BackCoverArt />} />
                        <BookLeaf rotateY={hack2RotateY} zIndex={zLevels.hack2} frontContent={hack1Details}  backContent={hack2Visuals} />
                        <BookLeaf rotateY={hack1RotateY} zIndex={zLevels.hack1} frontContent={hack0Details}  backContent={hack1Visuals} />
                        <BookLeaf rotateY={indexRotateY} zIndex={zLevels.index} frontContent={indexPage}     backContent={hack0Visuals} />
                        <BookLeaf rotateY={coverRotateY} zIndex={zLevels.cover} frontContent={<CoverArt />}  backContent={prefacePage} />

                        {/* Spine gutter */}
                        <motion.div style={{ opacity: bindingOpacity }} className="absolute top-[1.5%] bottom-[1.5%] left-[50%] -translate-x-1/2 w-3 md:w-10 bg-gradient-to-r from-transparent via-black/[0.18] to-transparent pointer-events-none z-[60]" />

                        {/* Spine strip */}
                        <div className="absolute top-0 bottom-0 left-[50%] -translate-x-1/2 w-1 md:w-2 bg-gradient-to-r from-black/50 via-slate-800 to-black/50 z-[-2] pointer-events-none rounded-full" />

                        {/* Ground shadow */}
                        <div className="absolute bottom-[-8px] md:bottom-[-14px] left-[5%] right-[5%] h-5 md:h-10 bg-black/25 blur-[18px] md:blur-[28px] rounded-[100%] pointer-events-none -z-10" />
                    </motion.div>

                    {/* Nav + Indicator dots */}
                    <div className="absolute bottom-[-70px] md:bottom-8 left-2 md:left-6 right-2 md:right-6 lg:left-10 lg:right-10 flex items-center justify-between z-[70] w-full max-w-[1400px]">
                        <button
                            onClick={() => handleScrollSnap(-1)}
                            className="p-3 md:p-4 bg-white/40 hover:bg-white/65 text-blue-950 rounded-full backdrop-blur-xl shadow-lg border border-white/60 ring-1 ring-black/5 transition-all hover:-translate-x-1 active:scale-95"
                            aria-label="Previous page"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {/*
                          FIX: Each dot is rendered as <PageDot> — its own component.
                          useTransform is called at the top of PageDot, not inside .map().
                          This is the only correct way to use hooks with dynamic lists.
                        */}
                        <div className="flex gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-sm">
                            {SNAP_POINTS.map((_, i) => (
                                <PageDot key={i} index={i} progress={smoothProgress} />
                            ))}
                        </div>

                        <button
                            onClick={() => handleScrollSnap(1)}
                            className="p-3 md:p-4 bg-white/40 hover:bg-white/65 text-blue-950 rounded-full backdrop-blur-xl shadow-lg border border-white/60 ring-1 ring-black/5 transition-all hover:translate-x-1 active:scale-95"
                            aria-label="Next page"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Lightbox portal */}
            {createPortal(
                <AnimatePresence>
                    {lightbox.open && (
                        <Lightbox
                            photos={lightbox.photos}
                            index={lightbox.index}
                            onClose={closeLightbox}
                            onNext={nextPhoto}
                            onPrev={prevPhoto}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Hackathon;
