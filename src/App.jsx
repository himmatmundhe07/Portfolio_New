import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Certificates from './components/Certificates';

import Journey from './components/Journey';
import Experience from './components/Experience';
import GithubActivity from './components/GithubActivity';
import Hackathon from './components/Hackathon';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Page Imports
import FunctionalApps from './pages/FunctionalApps';
import WebsiteClones from './pages/WebsiteClones';
import GamesArcade from './pages/GamesArcade';
import UIDesigns from './pages/UIDesigns';

const ScrollHandler = () => {
  const location = useLocation();
  const navType = useNavigationType();

  // Save scroll position constantly on scroll
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${location.key}`, window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.key]);

  // Restore or reset scroll position on navigation
  useEffect(() => {
    if (!location.hash) {
      if (navType === "POP") {
        const savedScroll = sessionStorage.getItem(`scroll-${location.key}`);
        if (savedScroll !== null) {
          // Wait for framer-motion AnimatePresence "wait" exit animation (0.3s)
          setTimeout(() => {
            window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
          }, 350);
        }
      } else {
        // When pushing to a new page, scroll to top AFTER the out-animation completes
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }, 350);
      }
    }
  }, [location.pathname, location.hash, location.key, navType]);

  return null;
};

const MainLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main className="md:pl-20 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Journey />
        <Hackathon />
        <GithubActivity />
        <Contact />
      </main>
    </>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="w-full"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><MainLayout /></PageWrapper>} />
        <Route path="/projects/functional" element={<PageWrapper><FunctionalApps /></PageWrapper>} />
        <Route path="/projects/clones" element={<PageWrapper><WebsiteClones /></PageWrapper>} />
        <Route path="/projects/games" element={<PageWrapper><GamesArcade /></PageWrapper>} />
        <Route path="/projects/designs" element={<PageWrapper><UIDesigns /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#6a82fb] via-[#a389f4] to-[#e0c3fc] text-white font-sans selection:bg-pink-300 selection:text-purple-900">

      {/* Import Fonts & Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-fancy { font-family: 'Great Vibes', cursive; }
        
        html { scroll-behavior: smooth; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes drift {
          0% { transform: translateX(-10px); opacity: 0.6; }
          50% { transform: translateX(10px); opacity: 1; }
          100% { transform: translateX(-10px); opacity: 0.6; }
        }
        .cloud {
          animation: drift 8s ease-in-out infinite alternate;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>

      <Router>
        <ScrollHandler />
        <AnimatedRoutes />
      </Router>

    </div>
  );
}