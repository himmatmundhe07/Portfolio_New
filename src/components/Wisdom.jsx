import React from 'react';

const BookSpine = ({ color, title, height, textColor = 'text-white' }) => (
  <div className={`${color} ${height} w-10 md:w-14 rounded-sm border-l border-white/10 shadow-lg relative group transition-transform hover:-translate-y-4 duration-300 cursor-pointer`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className={`block transform -rotate-90 whitespace-nowrap text-xs md:text-sm font-bold tracking-wider ${textColor} opacity-80 group-hover:opacity-100`}>
        {title.length > 15 ? title.substring(0, 12) + '...' : title}
      </span>
    </div>
    <div className="absolute top-2 left-0 w-full h-1 bg-white/20"></div>
    <div className="absolute bottom-4 left-0 w-full h-2 bg-black/20"></div>
  </div>
);

const Wisdom = () => (
  <section id="wisdom" className="py-24 px-6 relative overflow-hidden">
    <div className="absolute top-20 left-0 w-full h-32 bg-white/5 blur-3xl transform -rotate-3"></div>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/3">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Wisdom that shaped me</h2>
        <p className="text-white/80 leading-relaxed">
          Books and resources that have influenced my thinking patterns and approach to problem-solving.
        </p>
      </div>
      <div className="md:w-2/3 flex items-end justify-center md:justify-end gap-1 md:gap-2 h-64 perspective-1000">
         <BookSpine color="bg-red-700" title="The C Prog. Lang" height="h-56" />
         <BookSpine color="bg-blue-800" title="Clean Code" height="h-48" />
         <BookSpine color="bg-yellow-600" title="Atomic Habits" height="h-52" textColor="text-black" />
         <BookSpine color="bg-green-800" title="Data Structures" height="h-60" />
         <BookSpine color="bg-purple-900" title="Design of Everyday Things" height="h-44" />
      </div>
    </div>
  </section>
);

export default Wisdom;
