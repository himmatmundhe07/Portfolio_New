import React from 'react';
import { Mail, Github, Linkedin, Twitter, Code } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="py-20 px-6 text-center relative">
    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none"></div>
    <div className="container mx-auto relative z-10">
      <div className="w-16 h-1 bg-white/30 mx-auto rounded-full mb-12"></div>
      
      <h2 className="font-serif text-4xl md:text-6xl mb-8">
        Let's build something <br/> awesome together.
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
         <a href="mailto:himmatmundhe07@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white text-purple-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
           <Mail size={18} /> Email Me
         </a>
         <a href="https://github.com/himmatmundhe07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
           <Github size={18} /> GitHub
         </a>
         <a href="https://www.linkedin.com/in/himmat-mundhe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
           <Linkedin size={18} /> LinkedIn
         </a>
         <a href="https://leetcode.com/u/Mundhe_Himmat/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
           <Code size={18} /> LeetCode
         </a>
         <a href="https://x.com/Himmat_Mundhe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
           <Twitter size={18} /> X
         </a>
      </div>

      <p className="text-white/50 text-sm">
        © {new Date().getFullYear()} Himmat. Crafted with React & Tailwind.
      </p>
    </div>
  </footer>
);

export default Footer;