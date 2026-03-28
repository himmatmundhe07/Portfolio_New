import React from 'react';

const Navbar = () => (
  <nav className="fixed left-0 top-0 h-screen w-16 md:w-20 bg-transparent flex flex-col justify-between items-center py-10 z-50 shadow-none hidden md:flex">
    {/* Top: Logo */}
    {/* Top section spacer (optional) or just remove to let flex-1 center the nav */}
    <div className="h-20"></div>

    {/* Middle: Navigation */}
    <div className="flex flex-col gap-14 items-center justify-center flex-1">
      {[
        { name: 'About Me', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Certificates', id: 'certificates' },
        { name: 'Contact', id: 'contact' },
      ].map((item) => (
        <a
          key={item.name}
          href={`#${item.id}`}
          className="writing-vertical-rl rotate-180 text-sm font-bold tracking-[0.15em] text-white/70 hover:text-white transition-all uppercase"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {item.name}
        </a>
      ))}
    </div>

    {/* Bottom spacer for balance */}
    <div className="h-20"></div>
  </nav>
);

export default Navbar;