import React from 'react';

const StarBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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

            {/* Shooting Stars Removed */}

            {/* Clouds */}
            <div className="absolute top-40 right-10 w-32 h-12 bg-white/20 blur-xl rounded-full cloud hidden md:block"></div>
            <div className="absolute bottom-20 left-10 w-48 h-16 bg-white/10 blur-xl rounded-full cloud delay-100 hidden md:block"></div>
        </div>
    );
};

export default StarBackground;
