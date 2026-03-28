import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Cloud, Newspaper, Smartphone, Code2, Youtube } from 'lucide-react';
import StarBackground from '../components/StarBackground';
import { HashLink } from 'react-router-hash-link';

const ProjectCard = ({ title, tagline, description, tags, features, icon: Icon, color, liveLink, repoLink, videoLink }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col h-full shadow-lg"
    >
        <div className={`h-32 bg-gradient-to-br ${color.replace('bg-gradient-to-br', '')} bg-opacity-20 flex items-center justify-center relative`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <Icon size={48} className="text-white drop-shadow-lg relative z-10 opacity-90" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-1 font-serif text-white">{title}</h3>
            {tagline && <p className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wide">{tagline}</p>}

            <p className="text-gray-200 mb-4 text-sm leading-relaxed tracking-wide font-light">{description}</p>

            {features && (
                <ul className="list-disc list-inside text-xs text-gray-300/90 mb-5 space-y-1 font-medium">
                    {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-200 border border-white/10 font-medium">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-3 mt-4">
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center justify-center gap-2 text-sm font-semibold border border-white/10 shadow-sm cursor-pointer">
                        <Github size={16} /> Code
                    </button>
                </a>
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium shadow-lg shadow-purple-900/50 cursor-pointer">
                            <ExternalLink size={16} /> Demo
                        </button>
                    </a>
                )}
                {videoLink && (
                    <a href={videoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="w-full py-2 rounded-lg bg-red-500/10 border border-red-500/50 text-red-100 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-md group/yt text-sm font-medium shadow-lg shadow-red-900/20">
                            <Youtube size={16} className="text-red-400 group-hover/yt:text-white transition-colors" /> Watch
                        </button>
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const FunctionalApps = () => {
    const projects = [
        {
            title: "Taaza Khabar",
            tagline: "Real-time News & Weather Portal",
            description: "A responsive web application acting as a central hub for breaking news and live weather updates. Features a clean interface inspired by top-tier publications.",
            features: [
                "Real-time Headlines (The Guardian API)",
                "Live Weather Widget (WeatherAPI)",
                "Smart Search & Category Filtering",
                "Local Storage Personalization"
            ],
            tags: ["React", "The Guardian API", "WeatherAPI", "CSS Grid", "ES6+"],
            icon: Newspaper,
            color: "bg-gradient-to-br from-red-500 to-orange-600",
            repoLink: "https://github.com/himmatmundhe07/Taaza-Khabar",
            liveLink: "https://taazakhabarbydemu.netlify.app/",
            videoLink: "" // Add YouTube link here
        },
        {
            title: "Weather Dash",
            tagline: "Dynamic Forecast Dashboard",
            description: "Real-time weather forecasting dashboard. Visuals adjust based on current conditions (rain, sunny, cloudy) using dynamic CSS classes.",
            features: [
                "Geolocation Support",
                "5-Day Forecast",
                "Dynamic Backgrounds"
            ],
            tags: ["OpenWeatherMap", "Geolocation", "Chart.js"],
            icon: Cloud,
            color: "bg-gradient-to-br from-blue-400 to-cyan-600",
            repoLink: "#",
            liveLink: "#",
            videoLink: "" // Add YouTube link here
        },
        {
            title: "Air Talk",
            tagline: "Bluetooth Offline Messenger",
            description: "A decentralized chat application enabling real-time communication without Internet or SIM cards. Uses Bluetooth RFCOMM for peer-to-peer data transmission in offline scenarios.",
            features: [
                "No Internet/SIM Required",
                "Peer-to-Peer Bluetooth Connectivity",
                "Real-time Text Messaging",
                "Emergency Communication Ready"
            ],
            tags: ["Java", "Android SDK", "Bluetooth API", "RFCOMM"],
            icon: Smartphone,
            color: "bg-gradient-to-br from-indigo-500 to-purple-600",
            repoLink: "https://github.com/himmatmundhe07/Air-Talks",
            liveLink: "",
            videoLink: "" // Add YouTube link here
        }
    ];

    return (
        <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 relative overflow-x-hidden">
            <StarBackground />
            <div className="max-w-7xl mx-auto p-6 md:p-12 pt-12 relative z-10">
                <HashLink to="/#projects" className="inline-flex items-center text-purple-200 hover:text-white mb-12 transition-all group bg-purple-500/10 hover:bg-purple-500/20 px-5 py-2.5 rounded-full border border-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/10">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
                </HashLink>

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-200 to-cyan-200 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center gap-4">
                            Functional Apps
                        </h1>
                        <p className="text-xl text-purple-100/80 max-w-2xl font-light">
                            Software that solves real problems. Tools designed for utility, performance, and scalability.
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="text-6xl font-bold text-white/10">{projects.length < 10 ? `0${projects.length}` : projects.length}</span>
                        <span className="block text-sm text-gray-500 uppercase tracking-widest mt-1">Total Projects</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FunctionalApps;
