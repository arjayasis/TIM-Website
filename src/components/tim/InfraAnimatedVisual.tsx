import React from 'react';
import { motion } from 'motion/react';
import { Server, Database, Cloud, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function InfraAnimatedVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
      {/* Central Core */}
      <div className="relative z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 20px rgba(37, 99, 235, 0.2)",
              "0 0 60px rgba(37, 99, 235, 0.4)",
              "0 0 20px rgba(37, 99, 235, 0.2)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-blue-600/20 border-2 border-blue-500/50 flex items-center justify-center backdrop-blur-xl"
        >
          <div className="text-center">
            <Server className="w-12 h-12 lg:w-16 lg:h-16 text-blue-400 mx-auto mb-2" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold">Core Infra</span>
          </div>
        </motion.div>

        {/* Inner Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-20px] border border-dashed border-blue-500/30 rounded-full"
        />
        
        {/* Outer Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-60px] border border-blue-500/10 rounded-full"
        />
      </div>

      {/* Orbiting Nodes */}
      <OrbitingNode icon={Database} angle={0} label="Backup" color="text-emerald-400" delay={0} />
      <OrbitingNode icon={Cloud} angle={72} label="Cloud" color="text-cyan-400" delay={1} />
      <OrbitingNode icon={Activity} angle={144} label="Monitor" color="text-amber-400" delay={2} />
      <OrbitingNode icon={ShieldCheck} angle={216} label="DRaaS" color="text-red-400" delay={3} />
      <OrbitingNode icon={Zap} angle={288} label="Optimize" color="text-purple-400" delay={4} />

      {/* Scanning Radar Sweep */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(37, 99, 235, 0.1) 50%, transparent 100%)'
        }}
      />
    </div>
  );
}

function OrbitingNode({ icon: Icon, angle, label, color, delay }: { icon: any, angle: number, label: string, color: string, delay: number }) {
  const radius = 180; // Distance from center
  const lgRadius = 280;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 + delay * 0.2 }}
      className="absolute z-20"
      style={{
        transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex flex-col items-center"
      >
        <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-2 shadow-xl`}>
          <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${color}`} />
        </div>
        <span className={`text-[8px] lg:text-[10px] uppercase tracking-widest font-bold ${color}`}>{label}</span>
      </motion.div>

      {/* Connection Line to Center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px bg-gradient-to-t from-blue-500/50 to-transparent"
        style={{ 
          height: `${radius}px`,
          transform: `translateY(100%) rotate(180deg)`,
          transformOrigin: 'top'
        }}
      />
    </motion.div>
  );
}
