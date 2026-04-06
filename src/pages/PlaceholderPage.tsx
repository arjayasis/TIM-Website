import React from 'react';

export default function PlaceholderPage({ name }: { name: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#00021a] text-white relative overflow-hidden">
      {/* Animated Background HUD */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="text-center relative z-10 p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl max-w-lg w-full mx-6">
        <h1 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">{name}</h1>
        <p className="text-blue-100/60 text-lg font-medium mb-10">This module is currently under strategic development and will be online soon.</p>
        <a href="/" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all hover:scale-[1.02] font-bold uppercase tracking-widest text-sm">
          Return to Command Center
        </a>
      </div>
    </div>
  );
}
