import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Server, 
  Network, 
  Database, 
  MapPin,
  ArrowRightLeft,
  Cpu,
  Shield
} from 'lucide-react';

export default function GNSNetworkDiagram() {
  const timCloudLogo = "https://marketing.timcorp.net.ph/hubfs/website/TIM%20CLOUD%20LOGO.png";
  const gnsLogo = "https://marketing.timcorp.net.ph/hubfs/website/GNS%20LOGO.png";

  return (
    <div className="w-full py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Global Infrastructure</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#00021a] mb-6 tracking-tighter uppercase">
            GNS <span className="text-blue-600">Global Backbone</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Seamlessly connecting major regional hubs with high-capacity, low-latency fiber infrastructure.
          </p>
        </div>

        <div className="relative min-h-[700px] md:min-h-[900px] flex flex-col items-center py-10">
          
          {/* Top Level: Source Hubs Grid */}
          <div className="w-full grid grid-cols-2 gap-4 md:gap-12 lg:gap-48 relative z-20 mb-16 md:mb-24">
            {/* Hong Kong */}
            <div className="flex flex-col items-center">
              <NetworkNode 
                title="Hong Kong" 
                icon={Globe}
                logo={timCloudLogo}
                side="left"
              />
            </div>
 
            {/* Singapore */}
            <div className="flex flex-col items-center">
              <NetworkNode 
                title="Singapore" 
                icon={Globe}
                logo={timCloudLogo}
                side="right"
              />
            </div>
          </div>

          {/* Center Level: GNS Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-20 flex flex-col items-center mb-16 md:mb-24"
          >
            <div className="p-6 md:p-10 bg-white border-2 border-blue-100 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col items-center group hover:border-blue-300 transition-all">
              <img src={gnsLogo} alt="GNS" className="h-16 md:h-24 object-contain mb-4 group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
              <span className="text-xs md:text-sm font-black uppercase tracking-widest text-blue-600">Global Network Services</span>
            </div>
          </motion.div>
 
          {/* Bottom Level: Local Hubs Grid */}
          <div className="w-full grid grid-cols-3 gap-4 md:gap-8 lg:gap-24 relative z-20 mt-16 md:mt-24">
            {/* Carmona - PH */}
            <div className="flex flex-col items-center">
              <NetworkNode 
                title="Carmona - PH" 
                icon={Server}
                logo={timCloudLogo}
                side="left"
                isLocal
              />
            </div>

            {/* Vitro Makati 2 - PH */}
            <div className="flex flex-col items-center">
              <NetworkNode 
                title="Vitro Makati 2 - PH" 
                icon={Server}
                side="center"
                isLocal
              />
            </div>
 
            {/* Makati - PH */}
            <div className="flex flex-col items-center">
              <NetworkNode 
                title="Makati - PH" 
                icon={Server}
                logo={timCloudLogo}
                side="right"
                isLocal
              />
            </div>
          </div>
 
          {/* Connection Lines (Background) */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* HK to GNS */}
            <ConnectionLine x1="25%" y1="15%" x2="50%" y2="45%" />
            
            {/* SG to GNS */}
            <ConnectionLine x1="75%" y1="15%" x2="50%" y2="45%" />
            
            {/* GNS to PH PoPs */}
            <ConnectionLine x1="50%" y1="45%" x2="25%" y2="85%" />
            <ConnectionLine x1="50%" y1="45%" x2="50%" y2="85%" />
            <ConnectionLine x1="50%" y1="45%" x2="75%" y2="85%" />
            
            {/* Local Interconnect (Carmona to Vitro to Makati) */}
            <ConnectionLine x1="25%" y1="85%" x2="50%" y2="85%" />
            <ConnectionLine x1="50%" y1="85%" x2="75%" y2="85%" />
          </svg>
 
          {/* Labels & Icons Layer (Foreground) */}
          <div className="absolute inset-0 w-full h-full z-30 pointer-events-none">
            {/* Internet connection labels */}
            <DiagramLabel x1="25%" y1="15%" x2="50%" y2="45%" label="Internet" offset={-60} offsetX={-20} />
            <DiagramLabel x1="75%" y1="15%" x2="50%" y2="45%" label="Internet" offset={-60} offsetX={20} />
            
            {/* GNS to PH labels */}
            <DiagramLabel x1="50%" y1="45%" x2="25%" y2="85%" label="Dedicated Link" offset={-20} offsetX={-30} />
            <DiagramLabel x1="50%" y1="45%" x2="50%" y2="85%" label="Dedicated Link" offset={20} />
            <DiagramLabel x1="50%" y1="45%" x2="75%" y2="85%" label="Dedicated Link" offset={-20} offsetX={30} />

            {/* Local Interconnect Labels */}
            <DiagramLabel x1="25%" y1="85%" x2="50%" y2="85%" label="Local Interconnect" offset={45} />
            <DiagramLabel x1="50%" y1="85%" x2="75%" y2="85%" label="Local Interconnect" offset={45} />
            
            {/* Firewall Icons on Local Interconnect */}
            <div style={{ position: 'absolute', left: '37.5%', top: '85%', transform: 'translate(-50%, -50%) skewX(-12deg)' }} className="w-6 h-6 md:w-10 md:h-10 bg-blue-600 rounded-md md:rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div style={{ position: 'absolute', left: '62.5%', top: '85%', transform: 'translate(-50%, -50%) skewX(12deg)' }} className="w-6 h-6 md:w-10 md:h-10 bg-blue-600 rounded-md md:rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkNode({ title, icon: Icon, logo, side, isLocal = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative group flex flex-col items-center w-full`}
    >
      <div className={`p-4 md:p-8 bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl flex flex-col items-center w-full max-w-[160px] md:max-w-[320px] hover:border-blue-200 hover:shadow-2xl transition-all`}>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4 md:mb-6">
          <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg ${isLocal ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
            <Icon className="w-5 h-5 md:w-8 md:h-8" />
          </div>
          {logo && <img src={logo} alt="TIM Cloud" className="h-8 md:h-14 object-contain" referrerPolicy="no-referrer" />}
        </div>
        
        <div className="text-center">
          <h3 className="text-sm md:text-xl font-bold text-[#00021a] uppercase tracking-tight mb-1">{title}</h3>
        </div>

        {/* Router Icon Accent */}
        <div className="absolute -bottom-3 md:-bottom-4 bg-white p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-lg border border-gray-100 group-hover:scale-110 transition-transform">
          <Network className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
        </div>

        {/* Local Router Cluster (as seen in diagram) */}
        {isLocal && (
          <div className="absolute -bottom-12 md:-bottom-20 flex gap-1 md:gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="w-6 h-6 md:w-10 md:h-10 bg-blue-600 rounded-md md:rounded-lg flex items-center justify-center shadow-lg">
                <ArrowRightLeft className="w-3 h-3 md:w-5 md:h-5 text-white rotate-45" />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ConnectionLine({ x1, y1, x2, y2 }: any) {
  return (
    <g>
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgba(37, 99, 235, 0.1)"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgba(37, 99, 235, 0.3)"
        strokeWidth="3"
        strokeDasharray="12, 12"
        animate={{ strokeDashoffset: [0, -24] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </g>
  );
}

function DiagramLabel({ x1, y1, x2, y2, label, offset = 0, offsetX = 0 }: any) {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        left: `calc((${x1} + ${x2}) / 2 + ${offsetX}px)`, 
        top: `calc((${y1} + ${y2}) / 2 + ${offset}px)`,
        transform: 'translate(-50%, -50%)'
      }}
      className="px-3 md:px-6 py-1.5 md:py-3 bg-white border border-blue-100 rounded-full text-[8px] md:text-[12px] font-black text-blue-600 uppercase tracking-widest shadow-2xl backdrop-blur-md ring-4 md:ring-8 ring-blue-50/50 whitespace-nowrap pointer-events-none"
    >
      {label}
    </div>
  );
}
