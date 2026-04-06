import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  Network, 
  Cpu, 
  Shield, 
  Layers, 
  Zap, 
  ArrowRightLeft,
  Server,
  Cloud,
  Share2,
  RefreshCw,
  Settings,
  Search
} from 'lucide-react';

export const IntegrationHubVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: 360 
        }}
        transition={{ 
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
        className="relative z-20 w-48 h-48 rounded-full bg-blue-600/10 border-2 border-blue-500/30 flex items-center justify-center backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
        <Layers className="w-16 h-16 text-blue-400" />
        
        {/* Orbiting Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full"
            style={{ rotate: i * 45 }}
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Connection Lines & Satellite Nodes */}
      <div className="absolute inset-0">
        {[
          { icon: Database, label: 'Legacy DB', color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30', angle: 0 },
          { icon: Cloud, label: 'SaaS', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30', angle: 72 },
          { icon: Server, label: 'On-Prem', color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30', angle: 144 },
          { icon: Network, label: 'Edge', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30', angle: 216 },
          { icon: Shield, label: 'Security', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30', angle: 288 },
        ].map((node, i) => {
          const radius = 220;
          const x = Math.cos((node.angle - 90) * (Math.PI / 180)) * radius;
          const y = Math.sin((node.angle - 90) * (Math.PI / 180)) * radius;

          return (
            <React.Fragment key={i}>
              {/* Connection Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [0, -32] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                {/* Data Packets */}
                <motion.circle
                  r="3"
                  fill="currentColor"
                  className={node.color}
                  initial={{ offset: 0 }}
                  animate={{ 
                    cx: ["50%", `calc(50% + ${x}px)`, "50%"],
                    cy: ["50%", `calc(50% + ${y}px)`, "50%"],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeInOut" 
                  }}
                />
              </svg>

              {/* Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
                style={{ 
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
                }}
              >
                <div className={`w-16 h-16 rounded-2xl ${node.bg} ${node.border} border flex items-center justify-center backdrop-blur-md shadow-lg`}>
                  <node.icon className={`w-8 h-8 ${node.color}`} />
                </div>
                <span className={`text-[10px] uppercase tracking-widest font-bold ${node.color}`}>{node.label}</span>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export const ProcessFlowVisual = () => {
  return (
    <div className="relative w-full aspect-video bg-slate-950 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute inset-0 flex items-center justify-around px-4 md:px-12">
        {[
          { icon: Search, label: 'Assess', color: 'text-blue-400' },
          { icon: Settings, label: 'Design', color: 'text-indigo-400' },
          { icon: Zap, label: 'Deploy', color: 'text-amber-400' },
          { icon: RefreshCw, label: 'Optimize', color: 'text-emerald-400' }
        ].map((step, i) => (
          <div key={i} className="relative flex flex-col items-center gap-2 md:gap-6 z-10 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-white/10 transition-colors"
            >
              <step.icon className={`w-6 h-6 md:w-10 md:h-10 ${step.color}`} />
              
              {/* Pulse Effect */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-current opacity-20 ${step.color}`}
              />
            </motion.div>
            <span className="text-[8px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-white/60">{step.label}</span>
            
            {/* Connecting Arrows */}
            {i < 3 && (
              <div className="absolute left-full top-8 md:top-12 w-full flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
                  className="h-px bg-gradient-to-r from-blue-500/50 to-transparent relative"
                >
                  <motion.div
                    animate={{ x: [0, 40], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-1 h-1 md:w-2 md:h-2 bg-blue-400 rounded-full blur-[1px] md:blur-[2px]"
                  />
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Technical Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 1000, 
            y: Math.random() * 600,
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -100],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-px h-12 bg-gradient-to-t from-blue-500/50 to-transparent"
        />
      ))}
    </div>
  );
};


