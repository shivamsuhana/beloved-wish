import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function MagicCard({ title, desc, icon }) {
  return (
    <Tilt 
      glareEnable={true} 
      glareMaxOpacity={0.5} 
      glareColor="#ffffff" 
      glarePosition="all" 
      glareBorderRadius="20px"
      scale={1.05}
    >
      <div className="glass-panel p-6 h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-2xl transition-all border border-white/60">
        <div className="text-6xl mb-4 filter drop-shadow-md">{icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 font-medium">{desc}</p>
      </div>
    </Tilt>
  );
}