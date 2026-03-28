import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter, Globe, Feather, PenTool } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 3000);
        }, 2000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    // Social Links Data - Polaroids on desk
    const socialLinks = [
        { icon: Github, href: "https://github.com/himmataw", label: "GitHub", rotate: "rotate-[-5deg]", image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=150&q=80' },
        { icon: Linkedin, href: "https://linkedin.com/in/himmataw", label: "LinkedIn", rotate: "rotate-[3deg]", image: 'https://images.unsplash.com/photo-1611944212129-29990460f15d?w=150&q=80' },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter", rotate: "rotate-[-2deg]", image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=150&q=80' },
    ];

    return (
        <section id="contact" className="relative min-h-[110vh] py-24 px-6 overflow-hidden flex items-center justify-center">

            {/* Background: Transparent (User Requested) */}

            {/* Ambient Lighting - Warm Candle/Lamp Glow */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-start gap-12 lg:gap-24 pt-10">

                {/* Left Side: The Letter / Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -1 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-2/3 relative"
                >
                    {/* The Paper Sheet */}
                    <div className="bg-[#f0e6d2] text-gray-800 p-8 md:p-12 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform rotate-1 border border-[#dcd0b9] relative overflow-hidden">

                        {/* Paper Texture */}
                        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none mix-blend-multiply"></div>
                        {/* Creases/Stains */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-900/5 rounded-full blur-2xl pointer-events-none"></div>
                        <div className="absolute bottom-10 left-10 w-20 h-20 bg-black/5 rounded-full blur-xl pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-fancy text-[#2c1810] mb-2 drop-shadow-sm opacity-90">
                                Send a Raven
                            </h2>
                            <p className="font-serif text-[#5d4037] italic mb-8 border-b border-[#bfa993] pb-4 inline-block pr-12">
                                Or just fill out this parchment to reach me.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group">
                                        <label className="block font-serif text-[#5d4037] text-sm mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b-2 border-[#bfa993] py-2 text-[#2c1810] font-fancy text-xl placeholder-[#a69280] focus:outline-none focus:border-[#8b5a2b] transition-colors bg-[#00000005]"
                                            placeholder="Sir/Lady..."
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block font-serif text-[#5d4037] text-sm mb-1">Your Owl Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b-2 border-[#bfa993] py-2 text-[#2c1810] font-fancy text-xl placeholder-[#a69280] focus:outline-none focus:border-[#8b5a2b] transition-colors bg-[#00000005]"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="group mt-4">
                                    <label className="block font-serif text-[#5d4037] text-sm mb-1">The Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] bg-white/40 border border-[#bfa993] rounded-sm p-4 text-[#2c1810] font-serif text-lg leading-relaxed focus:outline-none focus:border-[#8b5a2b] focus:ring-1 focus:ring-[#8b5a2b]/20 text-justify"
                                        placeholder="Dearest Himmat, I write to you today regarding..."
                                    ></textarea>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05, rotate: 1 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        disabled={isSubmitting || isSent}
                                        className={`relative px-8 py-3 font-serif font-bold text-[#f0e6d2] tracking-wider uppercase shadow-md transition-all ${isSent
                                            ? "bg-[#4a6b4a]" // Green wax color
                                            : "bg-[#8b2b2b]" // Red wax color
                                            } rounded-sm overflow-hidden`}
                                        style={{ borderRadius: "50% 20% / 10% 40%" }} // Wax seal pseudo-shape
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {isSubmitting ? (
                                                <Feather className="animate-bounce" size={18} />
                                            ) : isSent ? (
                                                <>Sealed & Sent <Feather size={18} /></>
                                            ) : (
                                                <>Affix Seal <PenTool size={18} /></>
                                            )}
                                        </span>
                                        {/* Wax shine */}
                                        <div className="absolute top-0 right-0 w-full h-1/2 bg-white/20 rounded-full blur-md"></div>
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Desk Objects / Socials */}
                <div className="w-full md:w-3/3 flex flex-col gap-8 relative mt-12 md:mt-24">

                    {/* Compass / Map Decoration */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 20 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute -top-32 -right-10 w-48 h-48 opacity-80 pointer-events-none hidden md:block"
                    >
                        {/* Simple CSS Compass representation or SVG */}
                        <div className="w-full h-full border-4 border-[#bfa993] rounded-full flex items-center justify-center bg-[#f0e6d2]/10 backdrop-blur-sm shadow-xl">
                            <div className="w-2 h-24 bg-red-800 absolute rotate-45 shadow-md origin-center animate-[spin_10s_linear_infinite]" style={{ clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)' }}></div>
                        </div>
                    </motion.div>


                    {/* Social Polaroids */}
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            initial={{ y: 50, opacity: 0, rotate: Math.random() * 10 - 5 }}
                            whileInView={{ y: 0, opacity: 1, rotate: social.rotate }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                            transition={{ delay: index * 0.1 }}
                            className={`block bg-white p-3 pb-8 shadow-[0_5px_15px_rgba(0,0,0,0.4)] w-48 mx-auto md:mx-0 transform ${social.rotate} hover:shadow-2xl transition-all cursor-pointer`}
                        >
                            <div className="w-full h-32 bg-gray-200 mb-3 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative group">
                                <img src={social.image} alt={social.label} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-70">
                                    <social.icon size={32} className="text-white drop-shadow-md" />
                                </div>
                            </div>
                            <div className="font-handwriting text-center text-gray-800 text-xl font-bold">
                                {social.label}
                            </div>
                        </motion.a>
                    ))}

                    {/* Quill/Inkwell decoration could go here */}

                </div>
            </div>

        </section>
    );
};

export default Contact;
