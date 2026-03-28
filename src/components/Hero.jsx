import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <header className="relative pt-4 pb-10 md:pt-8 md:pb-20 px-6 overflow-hidden min-h-screen flex flex-col items-center">
    {/* Background Big Text */}
    <div className="absolute top-[40%] left-0 w-full overflow-hidden opacity-20 mix-blend-overlay pointer-events-none -translate-y-1/2">
      <div className="flex whitespace-nowrap animate-marquee w-fit">
        <h1 className="text-[4rem] md:text-[8rem] leading-[1.5] font-tall tracking-tight text-white px-8 py-10">
          CODING • PROBLEM-SOLVING • UI/UX • BUILDING •
        </h1>
        <h1 className="text-[4rem] md:text-[8rem] leading-[1.5] font-tall tracking-tight text-white px-8 py-10">
          CODING • PROBLEM-SOLVING • UI/UX • BUILDING •
        </h1>
      </div>
    </div>

    <div className="container mx-auto flex flex-col items-center relative z-10 text-center">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="flex flex-col items-center leading-none mb-2 drop-shadow-2xl"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="font-serif italic text-2xl md:text-3xl text-white/90 mb-0 z-10 relative"
        >
          Hi, I'm
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "backOut" } }
          }}
          className="font-serif italic text-5xl md:text-7xl font-bold text-white tracking-wide"
        >
          Himmat
        </motion.span>
      </motion.h1>

      <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 leading-relaxed font-light mb-2">
        A Computer Science student and aspiring Software Developer, focused on building practical, efficient solutions through code.
      </p>

      <div className="relative w-screen max-w-none -mt-16 md:-mt-40 flex justify-center items-center pointer-events-none">
        <img
          src="https://framerusercontent.com/images/KG8R1mCV1UsJejESQRUWuhiPci0.gif?width=1920&height=1026"
          alt="3D Floating Element"
          className="w-full h-auto object-cover scale-125 md:scale-[1.75] origin-top animate-float opacity-90"
          style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 95%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 95%)' }}
        />
      </div>
    </div>

    {/* Stars & Decor */}
    {/* Top Section */}
    <div className="absolute top-[5%] left-[10%] w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"></div>
    <div className="absolute top-[8%] left-[25%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse delay-700"></div>
    <div className="absolute top-[12%] right-[15%] w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse delay-300"></div>
    <div className="absolute top-[15%] left-[45%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-500"></div>
    <div className="absolute top-[20%] right-[35%] w-0.5 h-0.5 bg-white rounded-full opacity-90 animate-pulse delay-150"></div>
    <div className="absolute top-[25%] left-[5%] w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>

    {/* Middle Section */}
    <div className="absolute top-[35%] left-[80%] w-1 h-1 bg-white rounded-full opacity-80 animate-pulse delay-200"></div>
    <div className="absolute top-[40%] right-[5%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse delay-400"></div>
    <div className="absolute top-[45%] left-[15%] w-0.5 h-0.5 bg-white rounded-full opacity-70 animate-pulse delay-600"></div>
    <div className="absolute top-[50%] right-[25%] w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse delay-800"></div>
    <div className="absolute top-[55%] left-[60%] w-1 h-1 bg-white rounded-full opacity-90 animate-pulse delay-100"></div>

    {/* Bottom Section */}
    <div className="absolute top-[65%] left-[5%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse delay-300"></div>
    <div className="absolute top-[70%] right-[10%] w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-900"></div>
    <div className="absolute top-[75%] left-[30%] w-0.5 h-0.5 bg-white rounded-full opacity-80 animate-pulse delay-500"></div>
    <div className="absolute top-[80%] right-[40%] w-1 h-1 bg-white rounded-full opacity-70 animate-pulse delay-200"></div>
    <div className="absolute top-[85%] left-[90%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-700"></div>
    <div className="absolute top-[90%] right-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-90 animate-pulse delay-400"></div>
    <div className="absolute bottom-[5%] left-[50%] w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse delay-100"></div>

    {/* Extra scattered tiny stars */}
    <div className="absolute top-[10%] right-[45%] w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-pulse delay-300"></div>
    <div className="absolute top-[28%] left-[18%] w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-pulse delay-600"></div>
    <div className="absolute top-[62%] right-[8%] w-0.5 h-0.5 bg-white rounded-full opacity-70 animate-pulse delay-200"></div>
    <div className="absolute bottom-[15%] left-[8%] w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-pulse delay-800"></div>

    {/* Shooting Stars - Falling Vertical/Diagonal */}
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none rotate-[65deg] z-0">
      <div className="shooting-star star-1"></div>
      <div className="shooting-star star-2"></div>
      <div className="shooting-star star-3"></div>
      <div className="shooting-star star-4"></div>
      <div className="shooting-star star-5"></div>
      <div className="shooting-star star-6"></div>
      <div className="shooting-star star-7"></div>
      <div className="shooting-star star-8"></div>
      <div className="shooting-star star-9"></div>
      <div className="shooting-star star-10"></div>
    </div>

    <div className="absolute top-40 right-10 w-32 h-12 bg-white/20 blur-xl rounded-full cloud hidden md:block"></div>
    <div className="absolute bottom-20 left-10 w-48 h-16 bg-white/10 blur-xl rounded-full cloud delay-100 hidden md:block"></div>
  </header>
);

export default Hero;