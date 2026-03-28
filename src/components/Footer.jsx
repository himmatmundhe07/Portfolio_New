import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="py-20 px-6 text-center relative">
    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none"></div>
    <div className="container mx-auto relative z-10">
      <div className="w-16 h-1 bg-white/30 mx-auto rounded-full mb-12"></div>
      
      <h2 className="font-serif text-4xl md:text-6xl mb-8">
        Let's build something <br/> awesome together.
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6 mb-12">
         <a href="mailto:contact@ayush.dev" className="flex items-center gap-2 px-6 py-3 bg-white text-purple-900 rounded-full font-bold hover:scale-105 transition-transform">
           <Mail size={20} /> Email Me
         </a>
         <a href="[https://github.com/himmatmundhe07](https://github.com/himmatmundhe07)" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
           <Github size={20} /> GitHub
         </a>
         <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
           <Linkedin size={20} /> LinkedIn
         </a>
      </div>

      <p className="text-white/50 text-sm">
        © {new Date().getFullYear()} Ayush. Crafted with React & Tailwind.
      </p>
    </div>
  </footer>
);

export default Footer;