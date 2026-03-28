import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, RefreshCw, Trophy } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

// Game Thumbnails
import whackMoleImg from '../assets/whack-a-mole.png';
import clickGameImg from '../assets/click-game.png';
import colorGameImg from '../assets/color guessing game.jpg';
import StarBackground from '../components/StarBackground';
import { Youtube } from 'lucide-react';

const GameCard = ({ title, description, stats, color, demoLink, repoLink, videoLink, image }) => {
    return (
        <motion.div
            layout
            className="relative bg-gray-900 border-4 border-gray-800 rounded-lg overflow-hidden group hover:border-green-500 transition-all duration-300 shadow-lg shadow-green-900/20"
        >
            {/* Animated Border Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />

            {/* Screen Area */}
            <div className="bg-black relative flex items-center justify-center overflow-hidden h-48 transition-all duration-500 group-hover:h-52">

                {/* CRT Overlay Effects */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%]"></div>

                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                ) : (
                    <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                        <h3 className={`text-3xl font-black uppercase tracking-tighter ${color.split(' ')[1]} animate-pulse drop-shadow-md`}>
                            {title}
                        </h3>
                    </>
                )}
            </div>

            {/* Controls */}
            <div className="p-6 bg-gray-900">
                <p className="text-gray-400 text-sm font-mono mb-4 h-16 line-clamp-3">{description}</p>
                <div className="space-y-3">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-4 text-white font-black uppercase tracking-widest ${color.replace('from-', 'bg-').split(' ')[1]} hover:brightness-110 flex items-center justify-center gap-3 shadow-md transition-transform active:scale-95 rounded-sm`}
                        >
                            <Play size={20} /> PLAY NOW
                        </a>
                    )}

                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center text-xs font-bold text-gray-600 hover:text-gray-400 tracking-wider uppercase"
                        >
                            [ VIEW SOURCE CODE ]
                        </a>
                    )}

                    {videoLink && (
                        <a
                            href={videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 rounded-sm bg-red-900/20 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group/yt uppercase font-bold tracking-wider text-sm"
                        >
                            <Youtube size={16} className="text-red-500 group-hover/yt:text-white transition-colors" /> Watch Gameplay
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const GamesArcade = () => {
    const games = [
        {
            title: "Whack-a-Mole",
            description: "Classic arcade fun. Smack the moles before they hide! Test your reaction speed.",
            stats: ["Reaction Time", "High Score System"],
            color: "from-yellow-400 to-orange-600",
            demoLink: "https://whack-a-mole-by-demu.netlify.app/",
            repoLink: "https://github.com/himmatmundhe07/JavaScript-Games/tree/master/Whack-a-mole",
            videoLink: "https://youtu.be/J62u0EuMsu0?si=Wp3O1CgPylw8uOQ_",
            image: whackMoleImg
        },
        {
            title: "RGB Master",
            description: "Test your color theory skills. Guess the correct color from the RGB code shown.",
            stats: ["Color Theory", "Visual Perception"],
            color: "from-blue-400 to-indigo-600",
            demoLink: "https://js-color-guessing-game.netlify.app/",
            repoLink: "https://github.com/himmatmundhe07/JavaScript-Games/tree/master/Color-game",
            videoLink: "https://youtu.be/L831qOq3tGw?si=FwZ3uJpD1mX2eT1R",
            image: colorGameImg
        },
        {
            title: "Click Counter",
            description: "How fast can you click? A simple but addictive stress reliever and speed test.",
            stats: ["CPM Tracker", "Stress Relief"],
            color: "from-red-400 to-pink-600",
            demoLink: "https://js-game-click.netlify.app/",
            repoLink: "https://github.com/himmatmundhe07/JavaScript-Games/tree/master/ClickGame",
            videoLink: "https://youtu.be/T5_hE5tYSf4?si=63kH2g0yv4R3eN1X",
            image: clickGameImg
        }
    ];

    return (
        <div className="min-h-screen text-white p-6 md:p-12 font-mono selection:bg-green-500/30 relative overflow-x-hidden">
            <StarBackground />
            <div className="max-w-6xl mx-auto relative z-10">
                <HashLink to="/#projects" className="inline-flex items-center text-green-400 hover:text-white mb-12 transition-all group bg-green-500/10 hover:bg-green-500/20 px-5 py-2.5 rounded-full border border-green-500/20 backdrop-blur-sm shadow-lg shadow-green-500/10">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform w-5 h-5" /> EXIT TO MAIN MENU
                </HashLink>

                <div className="text-center mb-16">
                    <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 transform -skew-x-6 drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]">
                        ARCADE ZONE
                    </h1>
                    <p className="text-green-400 mt-4 tracking-[0.5em] animate-pulse font-bold drop-shadow-md">PRESS START TO PLAY</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games.map((game, index) => (
                        <GameCard key={index} {...game} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamesArcade;
