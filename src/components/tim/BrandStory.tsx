import React from 'react';
import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 text-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent" />
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full opacity-60" />
        <div className="absolute -right-24 bottom-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full opacity-60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/60 mb-8 shadow-sm">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Our Legacy</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tighter leading-tight max-w-none text-slate-900">
            <span>Decades of </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Reliability</span>
            <span>, A Future of </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 font-extrabold">Innovation</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 font-medium">
            Founded in 1985, Total Information Management Corporation (TIM) has evolved into one of the country’s trusted business technology providers, helping organizations accelerate their digital transformation and unlock the full potential of modern IT.
          </p>
          
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            Today, TIM continues to deliver secure, scalable, and future-ready technology solutions that empower businesses to navigate the evolving demands of the digital economy with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
