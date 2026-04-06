import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Shield, 
  Cpu, 
  Database, 
  Lock, 
  Activity, 
  Globe, 
  Zap,
  Layout,
  Code,
  LineChart
} from 'lucide-react';

export const InfrastructureVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-950 rounded-[40px] overflow-hidden border border-blue-500/20 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      {/* Server Racks */}
      <div className="relative z-10 flex gap-4">
        {[0, 1, 2].map((rack) => (
          <motion.div
            key={rack}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: rack * 0.2 }}
            className="w-24 h-48 bg-slate-900 border border-white/10 rounded-lg p-2 flex flex-col gap-1"
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-4 bg-slate-800 rounded-sm flex items-center px-1 justify-between">
                <div className="flex gap-1">
                  <motion.div 
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: Math.random() }}
                    className="w-1 h-1 bg-emerald-400 rounded-full" 
                  />
                  <div className="w-1 h-1 bg-blue-400/30 rounded-full" />
                </div>
                <div className="w-8 h-0.5 bg-slate-700 rounded-full" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating Data Packets */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -100, y: Math.random() * 300, opacity: 0 }}
          animate={{ 
            x: 500, 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-8 h-px bg-gradient-to-r from-blue-500 to-transparent"
        />
      ))}

      {/* Virtualization Overlay */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-blue-500/5 pointer-events-none"
      />
    </div>
  );
};

export const SecurityVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-950 rounded-[40px] overflow-hidden border border-red-500/20 shadow-2xl">
      {/* Scanning Effect */}
      <motion.div
        animate={{ top: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-red-500/10 to-transparent z-20 pointer-events-none"
      />

      {/* Central Shield */}
      <div className="relative z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-40 h-40 rounded-full bg-red-500/5 border-2 border-red-500/30 flex items-center justify-center backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
          <Shield className="w-20 h-20 text-red-500" />
        </motion.div>

        {/* Orbiting Security Nodes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-slate-900 border border-red-500/30 flex items-center justify-center shadow-lg"
              style={{ rotate: -i * 90 }}
            >
              {i === 0 && <Lock className="w-5 h-5 text-red-400" />}
              {i === 1 && <Activity className="w-5 h-5 text-red-400" />}
              {i === 2 && <Database className="w-5 h-5 text-red-400" />}
              {i === 3 && <Zap className="w-5 h-5 text-red-400" />}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Threat Detection Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400
          }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 5 
          }}
          className="absolute w-1 h-1 bg-red-400 rounded-full"
        />
      ))}
    </div>
  );
};

export const SoftwareVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-950 rounded-[40px] overflow-hidden border border-emerald-500/20 shadow-2xl">
      {/* Code Stream Background */}
      <div className="absolute inset-0 opacity-10 font-mono text-[8px] text-emerald-400 overflow-hidden leading-tight p-4 select-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -100] }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          >
            {`const solution = new TIMCorp.Integration();
solution.connect(enterprise_nodes);
solution.optimize({ latency: "minimal", security: "hardened" });
// Processing data stream ${i}...`}
          </motion.div>
        ))}
      </div>

      {/* Application Layers */}
      <div className="relative z-10 flex flex-col gap-4">
        {[
          { icon: Layout, label: 'UI/UX Layer', color: 'text-emerald-400' },
          { icon: Code, label: 'Logic Engine', color: 'text-blue-400' },
          { icon: LineChart, label: 'Analytics Core', color: 'text-purple-400' }
        ].map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-4 bg-slate-900/80 border border-white/10 p-4 rounded-2xl backdrop-blur-md w-64"
          >
            <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${layer.color}`}>
              <layer.icon className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white uppercase tracking-widest">{layer.label}</span>
              <div className="w-32 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                <motion.div
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  className={`h-full bg-current ${layer.color}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating App Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 2 
          }}
          className="absolute opacity-20"
          style={{ 
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`
          }}
        >
          <Share2 className="w-8 h-8 text-emerald-400" />
        </motion.div>
      ))}
    </div>
  );
};

const Share2 = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
);
