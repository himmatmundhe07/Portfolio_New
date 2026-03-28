import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Youtube } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const [greeting, setGreeting] = useState("Hi there! 👋");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Function to generate random greeting on hover
  const updateGreeting = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    let timeGreeting = "Hello! 👋";

    // Morning: 05:00 to 11:59
    const isMorning = hour >= 5 && hour < 12;
    // Afternoon: 12:00 to 17:59
    const isAfternoon = hour >= 12 && hour < 18;
    // Evening: 18:00 to 23:59
    const isEvening = hour >= 18 && hour <= 23;
    // Late Night: 00:00 to 04:59
    const isLateNight = hour >= 0 && hour < 5;

    if (isMorning) timeGreeting = "Good Morning! ☀️";
    else if (isAfternoon) timeGreeting = "Good Afternoon! 🌤️";
    else if (isEvening) timeGreeting = "Good Evening! 🌙";
    else if (isLateNight) timeGreeting = "Up late coding? 🦉";

    // Random Fun Messages
    const funMessages = [
      "Let's Code! 🚀",
      "Bug Hunter! 🐛",
      "Pixel Perfect! 🎨",
      "Coffee Time? ☕",
      "You have good taste! ✨",      // Flirty/Compliment
      "Looking sharp today! �",      // Flirty/Compliment

      "Drink water! 💧",
      "Don't overwork! 🛌",
      "Still scrolling? 👀",
      "I see you lurking... 🕵️",
      "Made with ❤️ & ☕",
      "Focus mode: ON 🔥",
      "Don't delete production DB! 🛑",
      "404: Sleep not found 😴",
      "Check your posture! 🧘",
      "Compiling... ⏳",
      "Nice creative mind! 🧠",
      "You're a wizard! 🧙‍♂️",
      "Keep hustling! 💪",
      "Dream big! 🌠"
    ];

    // 30% chance of time greeting, 70% chance of fun message
    if (Math.random() > 0.7) {
      setGreeting(timeGreeting);
    } else {
      setGreeting(funMessages[Math.floor(Math.random() * funMessages.length)]);
    }
  };

  // Initial greeting
  useEffect(() => {
    updateGreeting();
  }, []);

  // Global Section Fade/Scale
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 0.95], [0.9, 1, 1, 0.8]);

  // Parallax Effects
  const yImage = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const xTitle = useTransform(scrollYProgress, [0, 1], [-100, 50]);

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left Col: Creative Image Composition - Moves faster (Parallax) */}
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover="hover"
            onHoverStart={() => updateGreeting()} // Trigger update on parent hover
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group mx-auto lg:mx-0 max-w-sm cursor-pointer z-20"
          >
            {/* Sneaking Mascot - Pops up on Hover */}
            <motion.div
              variants={{
                hover: {
                  y: -60,
                  x: 40,
                  rotate: 10,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 180, damping: 12 }
                }
              }}
              initial={{ opacity: 0, y: 0, x: 0 }}
              className="absolute -top-10 -right-10 z-0 pointer-events-none"
            >
              <div className="filter drop-shadow-2xl">
                <img src="/mascot.svg" alt="Mascot" className="w-32 h-32 object-contain" />
              </div>
              <motion.div
                variants={{
                  hover: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.1, type: "spring" } }
                }}
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                className="absolute -top-12 -left-12 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold py-2 px-4 rounded-2xl rounded-br-none shadow-xl border border-white/50 whitespace-nowrap"
              >
                {greeting}
              </motion.div>
            </motion.div>
            {/* Decorative frame elements - Animated on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-3xl transform rotate-6 scale-95 border border-white/10 backdrop-blur-sm transition-all duration-500 ease-out group-hover:rotate-12 group-hover:scale-105 group-hover:bg-purple-500/30"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-3xl transform -rotate-3 scale-95 border border-white/10 backdrop-blur-sm transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-pink-500/30 -z-10"></div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/5] bg-gray-900 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] group-hover:border-purple-400/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
              <img
                src="/himmat-creative.png"
                alt="Himmat Profile"
                className="w-full h-full object-cover transform scale-100 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
              />

              {/* Overlay Text on Image */}
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-serif font-bold text-3xl text-white leading-none tracking-wide drop-shadow-md group-hover:text-purple-200 transition-colors duration-300">Himmat</h3>
                <p className="font-sans text-xs text-white/70 tracking-widest uppercase mt-2 group-hover:text-white transition-colors duration-300">Full Stack Developer</p>

              </div>
            </div>


          </motion.div>

          {/* Right Col: Typography & Content - Moves slower (Parallax) */}
          <motion.div
            style={{ y: yContent }}
            className="relative"
          >
            {/* Background Text - Horizontal Parallax */}
            <motion.h2
              style={{ x: xTitle }}
              className="font-serif font-black text-[3rem] md:text-[5rem] leading-none text-white/[0.15] absolute -top-24 -left-28 select-none pointer-events-none hidden lg:block -z-10"
            >
              ABOUT
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-8 leading-tight relative z-10">
                CSE Student <br />
                <span className="text-stroke-small text-white/10 font-serif italic text-3xl md:text-4xl tracking-normal normal-case block mt-2 opacity-90">
                  Software Developer
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-base md:text-lg text-white/80 font-light leading-relaxed mb-10 relative z-10"
            >
              <p>
                I’m a first-year Computer Science Engineering student focused on building practical software with strong fundamentals.
                I’m currently developing core programming and problem-solving skills through hands-on projects, data structures, and system-level thinking.
              </p>
              <p>
                I enjoy working on problems that involve real constraints such as logic, reliability, and clear user flow, rather than surface-level features.
                My goal is to grow into a dependable software engineer by continuously learning, building, and refining my understanding of how software works.
              </p>
            </motion.div>

            {/* Stats / Interactive bits */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 md:gap-6 mb-10 relative z-10"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
                <h4 className="font-serif font-bold text-2xl md:text-3xl text-white mb-1 group-hover:text-purple-300 transition-colors">LEARNING</h4>
                <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">Always Evolving</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
                <h4 className="font-serif font-bold text-2xl md:text-3xl text-white mb-1 group-hover:text-pink-300 transition-colors">BUILDING</h4>
                <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">Real Solutions</p>
              </div>
            </motion.div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {['C / C++', 'React + Vite', 'Tailwind CSS', 'UI / UX Design', 'Data Structures'].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (i * 0.1) }}
                  className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-sans hover:bg-white hover:text-black transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Resume Button */}
            <div className="flex flex-col md:flex-row items-center gap-8 mt-12 relative z-10">

              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.8 }}
                className="group relative px-8 py-3 bg-transparent overflow-hidden flex items-center gap-3 rounded-full border border-white/30 backdrop-blur-sm hover:border-white/80 transition-colors duration-300"
              >
                {/* Button Background Animation */}
                <motion.div
                  variants={{ hover: { x: "100%" } }}
                  initial={{ x: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white opacity-10"
                />

                <span className="relative z-10 font-bold text-white group-hover:text-white transition-colors">Download Resume</span>
                <motion.span
                  variants={{ hover: { y: 2 } }}
                  className="relative z-10 text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </motion.a>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/himmatmundhe07" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/himmat-mundhe/" },
                  { icon: Youtube, href: "https://www.youtube.com/@himmatmundhe07" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.9 + (index * 0.1) }}
                    className="group relative p-3 bg-transparent overflow-hidden rounded-full border border-white/30 backdrop-blur-sm hover:border-white/80 transition-colors duration-300 flex items-center justify-center"
                  >
                    <motion.div
                      variants={{ hover: { x: "100%" } }}
                      initial={{ x: "-100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 bg-white opacity-10"
                    />
                    <social.icon size={24} className="relative z-10 text-white/70 group-hover:text-white transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
