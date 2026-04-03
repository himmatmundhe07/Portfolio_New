import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Youtube, Twitter, Code } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-24 px-4 md:px-6 relative z-10 w-full overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none -z-10 opacity-60" />
            <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-pink-600/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none -z-10 opacity-60" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 md:mb-16 text-center relative px-2"
                >
                    <h2 className="font-serif text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-[#1a1028]">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-sm">Connect</span>
                    </h2>
                    <p className="text-[#1a1028]/70 max-w-2xl mx-auto text-sm md:text-xl font-medium">
                        Turning ideas into digital reality. Reach out for collaborations or just a friendly chat.
                    </p>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-6 md:mt-8 rounded-full shadow-lg" />
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
                    {/* Left Side: Interactive Info Cards */}
                    <div className="lg:col-span-5 space-y-4 md:space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1028] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 hover:bg-[#25183a] transition-all duration-500 group relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-indigo-500/10 rounded-full blur-2xl md:blur-3xl -mr-12 -mt-12 group-hover:bg-indigo-500/20 transition-colors" />
                            
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 leading-tight">
                                Contact <br /><span className="text-white/40 text-xl md:text-2xl">Information</span>
                            </h3>

                            <div className="space-y-6 md:space-y-8">
                                <a href="mailto:himmatmundhe07@gmail.com" className="flex items-center gap-4 md:gap-6 group/item">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center group-hover/item:scale-110 group-hover/item:border-indigo-500/50 transition-all duration-300 shrink-0">
                                        <Mail size={18} className="text-indigo-400 md:hidden" />
                                        <Mail size={24} className="text-indigo-400 hidden md:block" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] mb-0.5 md:mb-1">Email Me</p>
                                        <p className="text-sm md:text-lg font-medium text-white group-hover/item:text-indigo-300 transition-colors truncate">himmatmundhe07@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 md:gap-6 group/item">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center group-hover/item:scale-110 group-hover/item:border-pink-500/50 transition-all duration-300 shrink-0">
                                        <MapPin size={18} className="text-pink-400 md:hidden" />
                                        <MapPin size={24} className="text-pink-400 hidden md:block" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] mb-0.5 md:mb-1">Location</p>
                                        <p className="text-sm md:text-lg font-medium text-white">Ahmedabad, Gujarat</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-white/5">
                                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] mb-4 md:mb-6">Social Profiles</p>
                                <div className="flex flex-wrap gap-2 md:gap-4">
                                    {[
                                        { icon: Github, href: "https://github.com/himmatmundhe07", color: "hover:text-white" },
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/himmat-mundhe/", color: "hover:text-blue-400" },
                                        { icon: Code, href: "https://leetcode.com/u/Mundhe_Himmat/", color: "hover:text-orange-400" },
                                        { icon: Twitter, href: "https://x.com/Himmat_Mundhe", color: "hover:text-sky-400" },
                                        { icon: Youtube, href: "https://www.youtube.com/@himmatmundhe07", color: "hover:text-red-500" },
                                    ].map((s, i) => (
                                        <motion.a
                                            key={i}
                                            href={s.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            className={`w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-lg md:rounded-xl flex items-center justify-center text-white/40 ${s.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg`}
                                        >
                                            <s.icon size={18} className="md:hidden" />
                                            <s.icon size={20} className="hidden md:block" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Modern Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-[#1a1028] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-12 relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-purple-500/5 rounded-full blur-2xl md:blur-3xl -ml-24 -mb-24 md:-ml-32 md:-mb-32" />
                        
                        <form className="space-y-4 md:space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-white/20 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all duration-300"
                                        placeholder="Himmat Mundhe"
                                    />
                                </div>
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-white/20 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 transition-all duration-300"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-1.5 md:space-y-2">
                                <label className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Subject</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-white/20 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500/50 transition-all duration-300"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <div className="space-y-1.5 md:space-y-2">
                                <label className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Message</label>
                                <textarea 
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-white/20 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your amazing project..."
                                ></textarea>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.01, translateY: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 md:py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl md:rounded-2xl shadow-[0_10px_40px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.5)] transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg tracking-wide group"
                            >
                                Send Message 
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform md:hidden" />
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform hidden md:block" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
