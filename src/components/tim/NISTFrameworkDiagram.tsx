import React from 'react';
import { motion } from 'motion/react';
import { 
  Eye, 
  Shield, 
  Search, 
  RotateCcw, 
  RefreshCw,
  Lock
} from 'lucide-react';

const frameworkSteps = [
  {
    id: 'identify',
    title: 'IDENTIFY',
    description: 'Develop an organizational understanding to manage cybersecurity risk to systems, people, assets, data, and capabilities.',
    icon: Eye,
    color: 'blue',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
    angle: -90, // Top
  },
  {
    id: 'protect',
    title: 'PROTECT',
    description: 'Develop and implement appropriate safeguards to ensure delivery of critical services.',
    icon: Shield,
    color: 'emerald',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/20',
    angle: -18, // Top-right
  },
  {
    id: 'detect',
    title: 'DETECT',
    description: 'Develop and implement appropriate activities to identify the occurrence of a cybersecurity event.',
    icon: Search,
    color: 'amber',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/20',
    angle: 54, // Bottom-right
  },
  {
    id: 'respond',
    title: 'RESPOND',
    description: 'Develop and implement appropriate activities to take action regarding a detected cybersecurity incident.',
    icon: RotateCcw,
    color: 'red',
    accent: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    glow: 'shadow-red-500/20',
    angle: 126, // Bottom-left
  },
  {
    id: 'recover',
    title: 'RECOVER',
    description: 'Develop and implement appropriate activities to maintain plans for resilience and to restore any capabilities or services.',
    icon: RefreshCw,
    color: 'purple',
    accent: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    angle: 198, // Top-left
  }
];

export default function NISTFrameworkDiagram() {
  return (
    <div className="py-20 relative bg-[#00021a]">
      {/* Background HUD Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-blue-500/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full" />
        
        {/* Scanning Line */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent origin-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[1100px]">
          {/* Mobile View (Vertical Stack) */}
          <div className="lg:hidden w-full max-w-sm mx-auto space-y-6 relative py-10">
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-3xl border ${step.border} ${step.bg} backdrop-blur-xl relative group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${step.bg} ${step.border} flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.accent}`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-black tracking-tighter uppercase ${step.accent}`}>{step.title}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">NIST Function {index + 1}</p>
                  </div>
                </div>
                <p className="text-sm text-blue-100/60 font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop View (Radial HUD) */}
          <div className="hidden lg:flex items-center justify-center w-full h-full relative">
            {/* Central Core */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-30"
            >
              <div className="absolute -inset-12 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
              <div className="w-64 h-64 rounded-full bg-[#00021a] border-2 border-blue-500/30 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group">
                {/* Rotating Inner Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-dashed border-blue-500/20 rounded-full"
                />
                <div className="relative z-10">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-2">Standard</p>
                  <h3 className="text-2xl font-black text-white leading-none tracking-tighter uppercase">
                    NIST <br />
                    <span className="text-blue-500">FRAMEWORK</span>
                  </h3>
                  <div className="mt-4 flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-1 h-1 rounded-full bg-blue-500/40" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Radial Nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              {frameworkSteps.map((step, index) => {
                const radius = 380;
                const angleRad = (step.angle) * (Math.PI / 180);
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div key={step.id} className="absolute flex items-center justify-center">
                    {/* Connection Line to Center */}
                    <motion.div 
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                      className="absolute h-px bg-gradient-to-r from-blue-500/40 to-transparent origin-left"
                      style={{ 
                        width: radius - 130, 
                        rotate: step.angle,
                        left: 0,
                        top: 0,
                        transform: `translate(0, 0) rotate(${step.angle}deg) translateX(130px)`
                      }}
                    />

                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                      whileInView={{ opacity: 1, scale: 1, x, y }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="relative group cursor-pointer"
                    >
                      <div className={`w-80 p-8 rounded-[2.5rem] ${step.bg} ${step.border} border backdrop-blur-2xl shadow-2xl ${step.glow} transition-all duration-500 group-hover:scale-105 group-hover:bg-opacity-20`}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center shadow-inner`}>
                            <step.icon className={`w-7 h-7 ${step.accent}`} />
                          </div>
                          <div>
                            <h4 className={`text-xl font-black tracking-tighter uppercase ${step.accent}`}>{step.title}</h4>
                            <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">Function {index + 1}</p>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed font-light text-blue-100/60">
                          {step.description}
                        </p>
                        
                        {/* Decorative Corner */}
                        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${step.accent.replace('text', 'bg')} opacity-50`} />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Orbiting HUD Rings */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5" viewBox="0 0 1000 1000">
               <circle cx="500" cy="500" r="200" fill="none" stroke="white" strokeWidth="1" />
               <circle cx="500" cy="500" r="300" fill="none" stroke="white" strokeWidth="1" strokeDasharray="20 20" />
               <circle cx="500" cy="500" r="450" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
