import React from 'react';
import { User, Layers, Cpu, Award, Briefcase, Rocket, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: Layers },
    { name: 'Skills', id: 'skills', icon: Cpu },
    { name: 'Certs', id: 'certificates', icon: Award },
    { name: 'Exp', id: 'experience', icon: Briefcase },
    { name: 'Hacks', id: 'hackathons', icon: Rocket },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Sidebar Navbar */}
      <nav className="fixed left-0 top-0 h-screen w-16 md:w-20 bg-transparent flex flex-col justify-center items-center py-4 z-50 shadow-none hidden md:flex">
        <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center">
          {[
            { name: 'About Me', id: 'about' },
            { name: 'Projects', id: 'projects' },
            { name: 'Skills', id: 'skills' },
            { name: 'Certificates', id: 'certificates' },
            { name: 'Experience', id: 'experience' },
            { name: 'Hackathons', id: 'hackathons' },
            { name: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="writing-vertical-rl rotate-180 text-[11px] font-bold tracking-[0.15em] text-white/70 hover:text-white transition-all uppercase cursor-pointer"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl flex justify-around items-center py-3 px-4 z-50 md:hidden shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
          >
            <item.icon size={18} />
            <span className="text-[9px] font-bold uppercase tracking-tighter">{item.name === 'Certs' ? 'Awards' : item.name}</span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navbar;