import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Youtube, Twitter, Code } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative z-10 w-full overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none -z-10 opacity-60" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none -z-10 opacity-60" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center relative"
                >
                    <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#1a1028]">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-sm">Connect</span>
                    </h2>
                    <p className="text-[#1a1028]/70 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Turning ideas into digital reality. Reach out for collaborations or just a friendly chat.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-8 rounded-full shadow-lg" />
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Side: Interactive Info Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1028] border border-white/10 rounded-3xl p-8 hover:bg-[#25183a] transition-all duration-500 group relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-colors" />
                            
                            <h3 className="font-serif text-3xl font-bold text-white mb-8 leading-tight">
                                Contact <br /><span className="text-white/40 text-2xl">Information</span>
                            </h3>

                            <div className="space-y-8">
                                <a href="mailto:himmatmundhe07@gmail.com" className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center group-hover/item:scale-110 group-hover/item:border-indigo-500/50 transition-all duration-300">
                                        <Mail size={24} className="text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Email Me</p>
                                        <p className="text-lg font-medium text-white group-hover/item:text-indigo-300 transition-colors">himmatmundhe07@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center group-hover/item:scale-110 group-hover/item:border-pink-500/50 transition-all duration-300">
                                        <MapPin size={24} className="text-pink-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Location</p>
                                        <p className="text-lg font-medium text-white">Ahmedabad, Gujarat</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/5">
                                <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-6">Social Profiles</p>
                                <div className="flex flex-wrap gap-4">
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
                                            className={`w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/40 ${s.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg`}
                                        >
                                            <s.icon size={20} />
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
                        className="lg:col-span-7 bg-[#1a1028] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -ml-32 -mb-32" />
                        
                        <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all duration-300"
                                        placeholder="Himmat Mundhe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 transition-all duration-300"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Subject</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500/50 transition-all duration-300"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Message</label>
                                <textarea 
                                    rows="5"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your amazing project..."
                                ></textarea>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.01, translateY: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-[0_10px_40px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.5)] transition-all duration-300 flex items-center justify-center gap-3 text-lg tracking-wide group"
                            >
                                Send Message 
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
