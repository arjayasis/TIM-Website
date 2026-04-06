import React from 'react';
import { motion } from 'motion/react';
import { Award, Globe, Shield, Zap, Server } from 'lucide-react';

const milestones = [
  { year: '1985', event: 'Founded as ICT Pioneer', icon: Award },
  { 
    year: '1994', 
    event: 'Pioneered Commercial Data Center Services in the Philippines', 
    details: '— Infrastructure acquired by Equinix in 2025',
    icon: Server 
  },
  { year: '2020', event: 'Regional Expansion & Cloud Leadership', icon: Globe },
  { year: '2025', event: 'AI-Powered Enterprise Solutions', icon: Zap }
];

export default function BrandStory() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-[#00021a]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent" />
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Our Legacy</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 tracking-tighter leading-tight">
              <span className="text-white">Decades of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Reliability</span>
              <br />
              <span className="text-white">A Future of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Innovation</span>
            </h2>
            
            <p className="text-xl text-blue-100/60 leading-relaxed mb-6 font-medium">
              Founded in 1985, Total Information Management Corporation (TIM) has evolved into one of the country’s trusted business technology providers, helping organizations accelerate their digital transformation and unlock the full potential of modern IT.
            </p>
            
            <p className="text-xl text-blue-100/60 leading-relaxed mb-6 font-medium">
              Today, TIM continues to deliver secure, scalable, and future-ready technology solutions that empower businesses to navigate the evolving demands of the digital economy with confidence.
            </p>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Trusted</div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-blue-100/40 font-bold">Partner since 1985</div>
              </div>
              <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">24/7/365</div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-blue-100/40 font-bold">Managed Services</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative pl-8 lg:pl-16">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 lg:-left-16 top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  
                  <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all duration-500 group">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                        <milestone.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-400 font-bold uppercase tracking-widest mb-2">{milestone.year}</div>
                        <div className="text-2xl text-white font-bold leading-tight mb-2">{milestone.event}</div>
                        {milestone.details && (
                          <div className="text-sm text-blue-100/40 italic font-medium">{milestone.details}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
