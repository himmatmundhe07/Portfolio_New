import React, { useEffect, useState } from "react";
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from "framer-motion";

export default function GithubActivity() {
    const explicitTheme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <section id="github" className="py-16 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full text-center"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-10 text-white">
                        Days I <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Code</span>
                    </h2>

                    <div className="flex justify-center overflow-x-auto pb-4">
                        <div className="bg-[#0d1117] rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
                            <GitHubCalendar
                                username="himmatmundhe07"
                                blockSize={15}
                                blockMargin={5}
                                colorScheme="dark"
                                fontSize={14}
                                theme={explicitTheme}
                                style={{
                                    color: '#c9d1d9',
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
