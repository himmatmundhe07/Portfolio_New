import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ExternalLink, Figma, Palette, Layout, GraduationCap, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarBackground from '../components/StarBackground';

// Import Screenshots
import flightBookingImg from '../assets/flight-booking.png';
import codingGitaImg from '../assets/coding-gita.png';
import mallWebsiteImg from '../assets/mall-website.png';
import educationSiteImg from '../assets/education-site.png';

// --- CSS 3D LAPTOP COMPONENT (same as WebsiteClones) ---
const LaptopFrame = ({ children }) => {
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

const figmaProjects = [
    {
        title: "Flight Booking UI/UX",
        originalBrand: "Booking Flow",
        description: "Complete end-to-end flight booking flow designed in Figma. High-fidelity mockups with reusable component library, focused on visual hierarchy and progressive disclosure for optimal user experience.",
        icon: Layout,
        color: "bg-violet-500",
        reversed: false,
        figmaLink: "https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=362-1612&t=JFYDWb9Cwte8Hqp5-1",
        techs: ["Figma", "UI/UX", "Prototyping", "Design System"],
        image: flightBookingImg,
    },
    {
        title: "CodingGita Website Clone",
        originalBrand: "Educational Platform",
        description: "A pixel-perfect Figma recreation of the CodingGita platform, focusing on clean layout structure, typography hierarchy, and a developer-friendly visual identity.",
        icon: GraduationCap,
        color: "bg-indigo-500",
        reversed: true,
        figmaLink: "https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=59-352&t=JFYDWb9Cwte8Hqp5-1",
        techs: ["Figma", "Web Design", "UI Clone", "Layout"],
        image: codingGitaImg,
    },
    {
        title: "Mall Website",
        originalBrand: "Retail Experience",
        description: "Modern shopping mall website design featuring product showcases, store directories, and promotional sections with a focus on visual appeal and user navigation flow.",
        icon: ShoppingBag,
        color: "bg-pink-500",
        reversed: false,
        figmaLink: "https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=472-3736&t=JFYDWb9Cwte8Hqp5-1",
        techs: ["Figma", "E-Commerce", "UI/UX", "Wireframing"],
        image: mallWebsiteImg,
    },
    {
        title: "Educational Website",
        originalBrand: "Learning Platform",
        description: "Clean and intuitive educational website design with course listings, student dashboards, and interactive learning modules. Focused on accessibility and clear information architecture.",
        icon: Palette,
        color: "bg-emerald-500",
        reversed: true,
        figmaLink: "https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=213-558&t=JFYDWb9Cwte8Hqp5-1",
        techs: ["Figma", "EdTech", "Dashboard", "Prototyping"],
        image: educationSiteImg,
    }
];

const ShowcaseItem = ({ title, description, originalBrand, color, icon: Icon, reversed, figmaLink, techs, image }) => {
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
            className={`flex flex-col ${reversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center xl:items-start gap-16 mb-40 last:mb-0 px-4`}
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
                                        <Figma size={32} className="text-white mb-2" />
                                        <p className="text-white font-serif italic text-lg">View in Figma</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </LaptopFrame>
            </div>

            <div className="w-full xl:w-2/5 text-center xl:text-left">
                <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/30 border border-indigo-900/10">
                    <span className="text-indigo-800 text-xs tracking-widest uppercase font-semibold">Designed for</span>
                    <span className={`font-bold ${color.replace('bg-', 'text-')}`}>{originalBrand}</span>
                </div>

                <h3 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-indigo-950">{title}</h3>
                <p className="text-lg md:text-xl text-indigo-950/80 mb-8 leading-relaxed font-light">
                    {description}
                </p>

                {/* Tech Stack Pills */}
                {techs && (
                    <div className="flex flex-wrap gap-2 mb-8 justify-center xl:justify-start">
                        {techs.map((tech, i) => (
                            <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-md bg-indigo-900/10 text-indigo-900 border border-indigo-900/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
                    <a href={figmaLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-indigo-900 text-white font-bold hover:bg-indigo-800 transition-transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-indigo-900/20">
                        <Figma size={20} /> Open in Figma
                    </a>
                </div>
            </div>
        </motion.div>
    );
};


const UIDesigns = () => {
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
                        className="text-6xl md:text-9xl font-serif font-bold mb-8 tracking-tight leading-tight pb-6 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                    >
                        Design Canvas
                    </motion.h1>
                    <p className="text-xl text-indigo-950/80 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        Crafting user-centered interfaces with precision — from wireframes to high-fidelity prototypes in Figma.
                    </p>
                </div>

                <div>
                    {figmaProjects.map((project, index) => (
                        <ShowcaseItem key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UIDesigns;
