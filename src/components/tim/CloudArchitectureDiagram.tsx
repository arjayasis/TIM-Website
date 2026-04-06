import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, 
  Shield, 
  Server, 
  Building2, 
  Zap, 
  Lock, 
  Search, 
  ShieldCheck,
  Globe,
  ArrowRightLeft
} from 'lucide-react';

export default function CloudArchitectureDiagram() {
  const timCloudLogo = "https://marketing.timcorp.net.ph/hubfs/website/TIM%20CLOUD%20LOGO.png";
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        // Get the width of the container, subtract padding if necessary
        const parentWidth = containerRef.current.clientWidth;
        // 1200 is our base width for the diagram
        const newScale = Math.min(parentWidth / 1200, 1);
        setScale(newScale);
      }
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-full pt-12 lg:pt-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16" ref={containerRef}>
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Network Infrastructure</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#00021a] mb-6 tracking-tighter uppercase">
            Cloud Architecture & <span className="text-blue-600">Security Stack</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            High-availability infrastructure with integrated security gateways across multiple availability zones.
          </p>
        </div>

        <div className="w-full flex justify-center overflow-visible">
          <div 
            className="relative w-[1200px] shrink-0 h-[1450px] flex flex-col items-center py-10 origin-top"
            style={{ 
              transform: `scale(${scale})`, 
              marginBottom: `-${1450 * (1 - scale)}px` 
            }}
          >
            
            {/* Top Level: Internet */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-20 flex flex-col items-center mb-32"
          >
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-[2.5rem] shadow-xl flex flex-col items-center group hover:border-blue-200 transition-all">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#00021a]">Public Internet</span>
            </div>
          </motion.div>

          {/* Middle Level: Security Gateways */}
          <div className="w-full grid grid-cols-2 gap-24 relative z-20 mb-40 px-12">
            {/* Left Gateway */}
            <div className="flex flex-col items-center space-y-10">
              <SecurityStack side="left" />
              <VirtualFirewall label="Makati Virtual FW" />
            </div>

            {/* Right Gateway */}
            <div className="flex flex-col items-center space-y-10">
              <SecurityStack side="right" />
              <VirtualFirewall label="Carmona Virtual FW" />
            </div>
          </div>

          {/* Level 3: AZs and PoPs */}
          <div className="w-full grid grid-cols-3 gap-8 items-end relative z-20 mb-32 px-8">
            {/* Makati AZ */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="p-6 bg-white border border-gray-100 rounded-[2.5rem] w-full flex flex-col items-center group hover:border-blue-200 hover:shadow-2xl transition-all shadow-sm">
                <div className="flex gap-4 mb-6">
                  <Server className="w-10 h-10 text-blue-600" />
                  <img src={timCloudLogo} alt="TIM Cloud" className="h-10 object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-lg font-bold text-[#00021a] uppercase tracking-tight text-center">Makati</h3>
              </div>
            </motion.div>

            {/* Vitro Makati 2 PoP */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="p-6 bg-white border border-gray-100 rounded-[2.5rem] w-full flex flex-col items-center group hover:border-blue-200 hover:shadow-2xl transition-all shadow-sm">
                <div className="flex gap-4 mb-6">
                  <Server className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#00021a] uppercase tracking-tight text-center">Vitro Makati 2</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold text-center mt-1">Interconnect Hub</p>
              </div>
            </motion.div>

            {/* Carmona AZ */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="p-6 bg-white border border-gray-100 rounded-[2.5rem] w-full flex flex-col items-center group hover:border-blue-200 hover:shadow-2xl transition-all shadow-sm">
                <div className="flex gap-4 mb-6">
                  <img src={timCloudLogo} alt="TIM Cloud" className="h-10 object-contain" referrerPolicy="no-referrer" />
                  <Server className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#00021a] uppercase tracking-tight text-center">Carmona</h3>
              </div>
            </motion.div>
          </div>

          {/* Level 4: Enterprise Hub */}
          <div className="w-full flex justify-center relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full max-w-sm"
            >
              <div className="mb-12">
                <VirtualFirewall label="Enterprise Gateway" pulse />
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] w-full flex flex-col items-center group hover:border-blue-200 hover:shadow-2xl transition-all shadow-sm">
                <Building2 className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-[#00021a] uppercase tracking-tight">Enterprise</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Customer Premises</p>
              </div>
            </motion.div>
          </div>

          {/* Connection Lines (Background) */}
          <svg viewBox="0 0 1200 1450" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.4)" />
                <stop offset="100%" stopColor="rgba(37, 99, 235, 0.1)" />
              </linearGradient>
            </defs>
            
            {/* Internet to Gateways */}
            <ConnectionLine x1={600} y1={130} x2={300} y2={478} curve />
            <ConnectionLine x1={600} y1={130} x2={900} y2={478} curve />

            {/* Gateways to AZs/PoPs */}
            <ConnectionLine x1={300} y1={478} x2={200} y2={838} curve />
            <ConnectionLine x1={300} y1={478} x2={600} y2={838} curve />
            <ConnectionLine x1={900} y1={478} x2={1000} y2={838} curve />

            {/* AZs to Enterprise Gateway */}
            <ConnectionLine x1={200} y1={838} x2={600} y2={1098} label="IPSec VPN" labelOffset={-40} curve />
            <ConnectionLine x1={600} y1={838} x2={600} y2={1098} label="Direct Connect" labelOffset={0} curve />
            <ConnectionLine x1={1000} y1={838} x2={600} y2={1098} label="IPSec VPN" labelOffset={40} curve />
          </svg>
        </div>
        </div>
      </div>
    </div>
  );
}

function SecurityStack({ side }: { side: 'left' | 'right' }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-3xl shadow-lg ${side === 'right' ? 'flex-row-reverse' : ''}`}
    >
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
            <Lock className="w-6 h-6 text-red-600" />
          </div>
          <span className="text-[10px] uppercase font-bold text-red-600">FW</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center border border-yellow-100">
            <Search className="w-6 h-6 text-yellow-600" />
          </div>
          <span className="text-[10px] uppercase font-bold text-yellow-600">IPS/IDS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
          </div>
          <span className="text-[10px] uppercase font-bold text-emerald-600">Antivir</span>
        </div>
      </div>
      <div className="h-12 w-px bg-gray-100 mx-2" />
      <div className={side === 'right' ? 'text-right' : 'text-left'}>
        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">GNS Internet</div>
        <div className="text-sm font-mono text-[#00021a] font-bold">Up to 1 Gbps</div>
      </div>
    </motion.div>
  );
}

function VirtualFirewall({ label, pulse = false }: { label: string, pulse?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group flex flex-col items-center"
    >
      {pulse && (
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl"
        />
      )}
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl border-4 border-blue-600 relative z-10 group-hover:scale-110 transition-transform">
        <Shield className="w-12 h-12 text-blue-600" />
        <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
          <Zap className="w-5 h-5 text-white fill-white" />
        </div>
      </div>
      <div className="mt-4 whitespace-nowrap">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{label}</span>
      </div>
    </motion.div>
  );
}

function ConnectionLine({ x1, y1, x2, y2, label, labelOffset = 0, curve = false }: { x1: number, y1: number, x2: number, y2: number, label?: string, labelOffset?: number, curve?: boolean }) {
  const path = curve 
    ? `M ${x1} ${y1} C ${x1} ${y2}, ${x2} ${y1}, ${x2} ${y2}`
    : `M ${x1} ${y1} L ${x2} ${y2}`;

  return (
    <g>
      <motion.path
        d={path}
        fill="none"
        stroke="rgba(37, 99, 235, 0.15)"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="rgba(37, 99, 235, 0.4)"
        strokeWidth="3"
        strokeDasharray="12, 12"
        animate={{ strokeDashoffset: [0, -24] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      {label && (
        <foreignObject x="0" y="0" width="1000" height="1000" className="pointer-events-none overflow-visible">
          <div className="w-full h-full relative">
             <div 
               style={{ 
                 position: 'absolute', 
                 left: `${(x1 + x2) / 20}%`, 
                 top: `calc(${(y1 + y2) / 20}% + ${labelOffset}px)`,
                 transform: 'translate(-50%, -50%)'
               }}
               className="px-3 py-1 bg-white border border-blue-100 rounded-full text-[9px] font-bold text-blue-600 uppercase tracking-widest shadow-lg backdrop-blur-sm ring-2 ring-blue-50/50 whitespace-nowrap"
             >
               {label}
             </div>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
