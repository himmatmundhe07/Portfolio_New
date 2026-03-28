import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Box, CheckCircle, Download, Star, Youtube } from 'lucide-react';
import StarBackground from '../components/StarBackground';
import { HashLink } from 'react-router-hash-link';

const ExtensionItem = ({ title, description, users, rating, color, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -2 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 shadow-lg hover:bg-white/10 transition-all duration-200 flex flex-col md:flex-row gap-6 items-start"
    >
        <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center flex-shrink-0 bg-opacity-20`}>
            <Icon size={32} className="text-white" />
        </div>

        <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-3 font-medium">
                <span className="flex items-center gap-1 text-yellow-500 font-bold">
                    {rating} <Star size={12} fill="currentColor" />
                </span>
                <span>{users} users</span>
                <span className="flex items-center gap-1 text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full text-xs font-medium border border-green-500/20">
                    <CheckCircle size={10} /> Compatible
                </span>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4 text-base font-light tracking-wide">{description}</p>

            <div className="flex gap-2">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-lg shadow-purple-900/30">
                    Add to Chrome
                </button>
                <button className="px-4 py-2 border border-white/20 text-white/90 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">
                    View Details
                </button>
            </div>
        </div>
    </motion.div>
);

const BrowserExtensions = () => {
    const extensions = [
        {
            title: "Productivity Focus",
            description: "Block distracting websites during work intervals. Features a customizable whitelist/blacklist, Pomodoro timer integration, and detailed usage statistics to help you stay in the flow.",
            users: "200+",
            rating: "4.8",
            icon: Box,
            color: "bg-blue-500"
        },
        {
            title: "Quick Note",
            description: "A lightweight popup extension for taking rapid temporary notes without leaving your current tab. Supports markdown syntax, local storage auto-save, and dark mode.",
            users: "850+",
            rating: "4.5",
            icon: Box,
            color: "bg-yellow-500"
        }
    ];

    return (
        <div className="min-h-screen text-white font-sans p-6 md:p-12 selection:bg-purple-500/30 relative overflow-x-hidden">
            <StarBackground />
            <div className="max-w-4xl mx-auto relative z-10">
                <HashLink to="/#projects" className="inline-flex items-center text-purple-200 hover:text-white mb-12 transition-all group bg-purple-500/10 hover:bg-purple-500/20 px-5 py-2.5 rounded-full border border-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/10">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
                </HashLink>

                {/* Header Content moved here */}
                <div className="flex items-end justify-between mb-10 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3 bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                            <Box className="text-purple-400 drop-shadow-md" size={40} />
                            Browser Extensions
                        </h1>
                        <p className="text-lg text-purple-100/80 max-w-xl font-light">Utilities designed to enhance browser functionality and developer workflow.</p>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Chrome Web Store</span>
                    </div>
                </div>

                <div className="space-y-6">
                    {extensions.map((ext, index) => (
                        <ExtensionItem key={index} {...ext} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowserExtensions;