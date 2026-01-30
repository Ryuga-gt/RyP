import React from 'react';

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505] overflow-hidden">
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111111]" />

      {/* Glow Elements */}
      {/* Top Right Glow */}
      <div className="absolute -top-[20%] -right-[20%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />

      {/* Bottom Left Glow */}
      <div className="absolute -bottom-[20%] -left-[20%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />

      {/* Center/Random Glows */}
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-orange-900/10 rounded-full blur-[100px] opacity-30" />
    </div>
  );
};

export default Background;
