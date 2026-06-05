import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Target, 
  Lock, 
  ShieldCheck, 
  Globe, 
  Zap, 
  ArrowRight,
  ShieldAlert,
  Activity,
  Server
} from 'lucide-react';

import RelatedServices from '@/components/shared/RelatedServices';

export default function CoreCybersecurity() {
  const intrusionRef = useRef<HTMLElement>(null);
  const nxgRef = useRef<HTMLElement>(null);
  const whaleboneRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const cores = [
    {
      id: 'intrusion',
      name: 'Intrusion Detection & Prevention',
      shortName: 'Intrusion',
      icon: ShieldAlert,
      ref: intrusionRef,
      desc: 'Proactive monitoring and defense against unauthorized access attempts and malicious network activity.',
      color: 'text-red-500',
      bg: 'bg-red-500/10'
    },
    {
      id: 'nxg',
      name: 'Next-Generation Firewall (NXG)',
      shortName: 'NXG',
      icon: ShieldCheck,
      ref: nxgRef,
      desc: 'Advanced threat protection with deep packet inspection and application-level control for total perimeter security.',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      id: 'whalebone',
      name: 'Whalebone DNS Security',
      shortName: 'Whalebone',
      icon: Globe,
      ref: whaleboneRef,
      desc: 'Network-level protection against malware, phishing, and ransomware through intelligent DNS filtering.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    }
  ];

  // Nexusguard Theme Colors
  const nxColors = {
    red: '#ee3224',
    orange: '#f85c37',
    green: '#34bf49',
    navy: '#0a1d37',
    gray: '#58636e',
    lightGray: '#F7F8FA'
  };

  const NexusguardDiagram = () => (
    <div className="w-full bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-between mb-12 items-baseline border-b border-gray-50 pb-8 gap-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ee3224] block mb-2">Live traffic flow</span>
          <h4 className="text-3xl font-black text-[#0a1d37] uppercase tracking-tight">Adaptive Scrubbing Architecture</h4>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 rounded-full bg-[#ee3224]" />
             <span className="text-[11px] font-black uppercase text-[#58636e]">Mitigated Attack</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 rounded-full bg-[#34bf49]" />
             <span className="text-[11px] font-black uppercase text-[#58636e]">Clean Traffic</span>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 1000 400" className="w-full min-w-[900px] h-auto font-sans">
        <defs>
          <style>{`
            @keyframes pulse-ring {
              0% { transform: scale(0.95); opacity: 0.5; }
              50% { transform: scale(1.05); opacity: 0.3; }
              100% { transform: scale(0.95); opacity: 0.5; }
            }
            .scrub-glow { animation: pulse-ring 3s ease-in-out infinite; }
            .dash-flow { stroke-dasharray: 5 5; animation: dash 2s linear infinite; }
            @keyframes dash { to { stroke-dashoffset: -20; } }
          `}</style>
          
          <linearGradient id="cyberCloud" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a1d37" />
            <stop offset="100%" stopColor="#1a2e4a" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="7" refY="4" orientation="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#ee3224" />
          </marker>
          <marker id="arrowGreenBig" markerWidth="8" markerHeight="8" refX="7" refY="4" orientation="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#34bf49" />
          </marker>
        </defs>

        {/* 1. Internet Source */}
        <g transform="translate(80, 200)">
          <circle r="40" fill="white" stroke="#e5e7eb" strokeWidth="1" />
          <path d="M-20 -20 l40 40 M20 -20 l-40 40" stroke="#eee" strokeWidth="1" />
          <Globe className="w-8 h-8 text-[#58636e] -translate-x-4 -translate-y-4" />
          <text y="60" textAnchor="middle" className="text-[12px] font-black uppercase tracking-widest" fill="#0a1d37">Internet</text>
        </g>

        {/* 2. The Scrubbing Nexus */}
        <g transform="translate(500, 200)">
          {/* Animated Halo */}
          <circle r="120" fill="#ee3224" opacity="0.05" className="scrub-glow" />
          <circle r="100" fill="#ee3224" opacity="0.1" />
          
          {/* Main Shield Container */}
          <rect x="-140" y="-80" width="280" height="160" rx="40" fill="url(#cyberCloud)" filter="url(#glow)" />
          
          {/* Internal Logic Blocks */}
          <g transform="translate(-110, -40)">
            <rect width="60" height="80" rx="10" fill="white" opacity="0.05" />
            <text x="30" y="45" textAnchor="middle" className="text-[10px] font-black" fill="#ee3224">DDoS</text>
            <text x="30" y="58" textAnchor="middle" className="text-[8px] font-bold uppercase" fill="white">Analyze</text>
          </g>

          <g transform="translate(-30, -40)">
             <rect width="60" height="80" rx="10" fill={nxColors.red} />
             <text x="30" y="48" textAnchor="middle" className="text-[24px] font-black" fill="white">OP</text>
          </g>

          <g transform="translate(50, -40)">
            <rect width="60" height="80" rx="10" fill="white" opacity="0.05" />
            <text x="30" y="45" textAnchor="middle" className="text-[10px] font-black" fill="#34bf49">CLEAN</text>
            <text x="30" y="58" textAnchor="middle" className="text-[8px] font-bold uppercase" fill="white">Forward</text>
          </g>

          <text y="-100" textAnchor="middle" className="text-[14px] font-black uppercase tracking-[0.2em]" fill="#0a1d37">Nexusguard Global Scrubbing</text>
        </g>

        {/* 3. Customer Origin */}
        <g transform="translate(900, 200)">
          <circle r="40" fill="#0a1d37" />
          <Server className="w-8 h-8 text-white -translate-x-4 -translate-y-4" />
          <text y="60" textAnchor="middle" className="text-[12px] font-black uppercase tracking-widest" fill="#0a1d37">Origin Server</text>
        </g>

        {/* --- FLOW LINES --- */}
        
        {/* Inbound - Mixed Traffic */}
        <path d="M120 200 L360 200" stroke="#bbb" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Mitigated Path (Vertical Drop) */}
        <path d="M420 200 L420 320" stroke="#ee3224" strokeWidth="3" markerEnd="url(#arrowRed)" className="dash-flow" />
        <text x="430" y="300" className="text-[10px] font-black uppercase" fill="#ee3224">Filtered Threats</text>

        {/* Clean Outbound Flow */}
        <path d="M640 200 L860 200" stroke="#34bf49" strokeWidth="3" strokeDasharray="4 4" className="dash-flow" markerEnd="url(#arrowGreenBig)" />
        <rect x="700" y="180" width="100" height="20" rx="10" fill="#34bf49" fillOpacity="0.1" />
        <text x="750" y="194" textAnchor="middle" className="text-[10px] font-black uppercase tracking-widest" fill="#34bf49">Clean Traffic</text>
      </svg>
    </div>
  );

  const NexusguardDashboard = () => (
    <div className="relative aspect-[4/3] bg-[#0a1d37] rounded-[3.5rem] p-5 shadow-2xl shadow-navy/40">
      {/* Tablet Bezels */}
      <div className="absolute inset-[14px] border-[1.5px] border-white/10 rounded-[2.8rem]" />
      <div className="absolute top-[24px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/20" />
      
      {/* Screen Content */}
      <div className="h-full w-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col shadow-inner">
        {/* Top Nav */}
        <div className="h-14 bg-white border-b border-gray-100 flex items-center px-8 justify-between">
          <div className="flex items-center gap-5">
            <span className="text-[14px] font-black text-[#ee3224] tracking-tighter">NEXUSGUARD</span>
            <div className="h-5 w-[1px] bg-gray-200" />
            <span className="text-[12px] text-[#58636e] font-black uppercase tracking-widest">Origin Protection</span>
          </div>
          <div className="flex gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20" />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="flex-1 p-8 bg-[#F7F8FA]">
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50">
              <span className="text-[10px] text-[#58636e] uppercase font-black block mb-2 tracking-widest">Current Traffic</span>
              <span className="text-2xl font-black text-[#0a1d37]">7.8 <span className="text-[11px] uppercase opacity-40 font-bold">Gbps</span></span>
              <div className="h-10 mt-3 w-full flex items-end gap-1">
                {[3,6,4,9,5,10,6,8,5,7].map((h, i) => <div key={i} style={{height: `${h*10}%`}} className="flex-1 bg-blue-500/30 rounded-t-[2px]" />)}
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50">
              <span className="text-[10px] text-[#ee3224] uppercase font-black block mb-2 tracking-widest">Max Attack</span>
              <span className="text-2xl font-black text-[#ee3224]">3.9 <span className="text-[11px] uppercase opacity-40 font-bold">Gbps</span></span>
              <div className="h-1.5 mt-4 w-full bg-red-50 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-[#ee3224] rounded-full" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50">
              <span className="text-[10px] text-[#58636e] uppercase font-black block mb-2 tracking-widest">TOP N TCP</span>
              <span className="text-2xl font-black text-[#0a1d37]">338.1 <span className="text-[11px] uppercase opacity-40 font-bold">Mbps</span></span>
              <div className="h-10 mt-3 w-full flex items-end gap-1">
                {[5,8,3,6,10,4,7,5,9,4].map((h, i) => <div key={i} style={{height: `${h*10}%`}} className="flex-1 bg-orange-500/30 rounded-t-[2px]" />)}
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50">
              <span className="text-[10px] text-[#34bf49] uppercase font-black block mb-2 tracking-widest">Monitor Status</span>
              <div className="aspect-square w-12 border-[5px] border-[#34bf49]/20 rounded-full relative flex items-center justify-center">
                 <div className="absolute inset-0 border-[5px] border-transparent border-t-[#34bf49] rounded-full rotate-45" />
                 <span className="text-[10px] font-black text-[#34bf49]">1</span>
              </div>
              <span className="text-[10px] text-[#58636e] font-bold block mt-2">Router Active</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100/50 h-56 relative overflow-hidden">
             <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                 <span className="text-[11px] font-black uppercase text-[#0a1d37] tracking-wider">Traffic Analysis</span>
               </div>
               <div className="flex gap-6">
                 <div className="flex items-center gap-2 baseline"><div className="w-2.5 h-2.5 rounded-full bg-blue-500" /><span className="text-[10px] text-[#58636e] font-black uppercase">Traffic In</span></div>
                 <div className="flex items-center gap-2 baseline"><div className="w-2.5 h-2.5 rounded-full bg-[#34bf49]" /><span className="text-[10px] text-[#58636e] font-black uppercase">Traffic Out</span></div>
               </div>
             </div>
             
             <div className="absolute left-8 right-8 bottom-8 top-24">
                <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <path d="M0 80 L50 20 L100 60 L150 40 L200 90 L250 30 L300 70 L350 40 L400 60 L450 20 L500 80" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M0 90 L50 40 L100 75 L150 55 L200 95 L250 45 L300 85 L350 55 L400 75 L450 40 L500 90" fill="none" stroke="#34bf49" strokeWidth="2.5" strokeOpacity="0.4" strokeLinejoin="round" />
                  
                  {/* Grid Lines */}
                  {[0, 25, 50, 75, 100].map(v => (
                    <line key={v} x1="0" y1={v} x2="500" y2={v} stroke="#eee" strokeWidth="1" />
                  ))}
                </svg>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#00021a] text-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 lg:pt-48 pb-24 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[200px]" />
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">Resilient Infrastructure Defense</span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter uppercase">
                Protection for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                  Mission-Critical <br /> Infrastructure
                </span>
              </h1>
              
              <p className="text-xl text-blue-100/40 mb-12 max-w-xl font-medium leading-relaxed">
                Fortify your digital perimeter with our Core Cybersecurity suite. We provide specialized, high-performance defense mechanisms designed to safeguard your most valuable assets.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 text-sm rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-blue-500/20 font-black uppercase tracking-widest">
                  Secure My Business
                </Button>
                <Button variant="outline" size="lg" className="border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 px-10 py-8 text-sm rounded-2xl text-white font-black uppercase tracking-widest transition-all">
                  Contact Specialist
                </Button>
              </div>
            </motion.div>

            {/* Right Content: Quick Nav Cards */}
            <div className="grid gap-6">
              {cores.map((core, i) => (
                <motion.div
                  key={core.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  onClick={() => scrollToSection(core.ref)}
                  className="group cursor-pointer p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${core.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity`} />
                  <div className="flex items-center gap-8 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${core.bg} border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <core.icon className={`w-7 h-7 ${core.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                        {core.shortName}
                      </h3>
                      <p className="text-blue-100/30 text-sm font-medium line-clamp-1">
                        {core.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-500/40 ml-auto group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intrusion Section */}
      <section ref={intrusionRef} className="py-32 bg-[#00021a] relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldAlert className="w-64 h-64" />
                </div>
                <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center mb-10">
                  <ShieldAlert className="w-10 h-10 text-red-500" />
                </div>
                <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Intrusion Detection & Prevention</h2>
                <p className="text-xl text-blue-100/70 mb-10 font-medium leading-relaxed">
                  Our IDP system identifies and blocks advanced threats before they reach your internal network. Utilizing behavioral analysis and signature-based detection, we ensure your perimeter remains impenetrable.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {['Real-time Traffic Analysis', 'Automatic Threat Blocking', 'Zero-Day Attack Defense', 'Detailed Incident Logging'].map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-200/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-6xl lg:text-9xl font-black opacity-5 uppercase tracking-tighter absolute -rotate-90 select-none pointer-events-none origin-left -translate-y-1/2">
                Intrusion
              </h2>
              <div className="relative z-10 pl-20">
                <span className="text-red-500 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Defensive Layer 01</span>
                <h3 className="text-3xl lg:text-5xl font-bold mb-8 tracking-tighter uppercase leading-tight">
                  Stop Threats <br /> Before They Start
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NXG / Nexusguard Section */}
      <section ref={nxgRef} className="bg-white text-navy relative overflow-hidden scroll-mt-24">
        {/* Hero-like sub-section For Nexusguard */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 mb-8 border border-red-100">
                <span className="text-[11px] font-black tracking-[0.3em] text-[#ee3224] uppercase">Industry Leader</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-[#0a1d37] mb-10 tracking-tighter leading-[0.9] uppercase">
                Nexusguard <br />
                <span className="text-[#ee3224]">Origin Protection</span>
              </h2>
              <div className="space-y-8 text-[#58636e] text-xl font-medium leading-relaxed max-w-xl">
                <p>
                  Safeguarding mission-critical services across large-scale networks. Purpose-built for high-performance environments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 rounded-xl bg-[#F7F8FA] border border-gray-100 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#ee3224]" />
                    <span className="text-sm font-black uppercase text-[#0a1d37]">Bastion Ready</span>
                  </div>
                  <div className="px-6 py-3 rounded-xl bg-[#F7F8FA] border border-gray-100 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#f85c37]" />
                    <span className="text-sm font-black uppercase text-[#0a1d37]">Cloud Native</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-[4rem] blur-3xl -z-10" />
              <NexusguardDashboard />
            </motion.div>
          </div>
        </div>

        {/* Dynamic Flow Visualization */}
        <div className="bg-[#0a1d37] py-40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
          <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4 text-white">
                <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.8] mb-10">
                  Global <br /> <span className="text-[#f85c37]">Scrubbing</span> <br /> Architecture
                </h3>
                <p className="text-blue-100/50 text-lg font-medium mb-12">
                  Our network acts as a transparent, high-performance filter for your mission-critical origin servers.
                </p>
                <div className="space-y-6">
                  {[
                    { label: 'Network Behavior Analysis', color: 'bg-[#f85c37]' },
                    { label: 'Real-time Threat Mitigation', color: 'bg-[#ee3224]' },
                    { label: 'Cloud Diversion & GRE', color: 'bg-[#34bf49]' },
                  ].map(step => (
                    <div key={step.label} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                      <div className={`w-3 h-3 rounded-full ${step.color} shadow-lg shadow-white/10`} />
                      <span className="text-sm font-black uppercase tracking-widest">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-8">
                <NexusguardDiagram />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Feature Bento Grid */}
        <div className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 p-12 rounded-[2.5rem] bg-[#F7F8FA] border border-gray-50 group hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-[#ee3224]" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-200 group-hover:text-[#ee3224] transition-colors" />
                </div>
                <h4 className="text-3xl font-black text-[#0a1d37] uppercase tracking-tighter mb-4">Elite Origin Protection</h4>
                <p className="text-[#58636e] font-medium text-lg leading-relaxed max-w-lg">
                  Designed specifically for environments managing complex Class C networks and adaptive infrastructure needs.
                </p>
              </div>

              <div className="p-12 rounded-[2.5rem] bg-[#0a1d37] text-white flex flex-col justify-between group hover:shadow-xl transition-all">
                <Target className="w-12 h-12 text-[#f85c37] mb-8" />
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">DDoS Alert</h4>
                  <p className="text-blue-100/40 text-sm font-bold uppercase tracking-widest">Immediate Detection</p>
                </div>
              </div>

              <div className="p-12 rounded-[2.5rem] bg-[#ee3224] text-white flex flex-col justify-between group hover:shadow-xl transition-all">
                <Activity className="w-12 h-12 text-white mb-8" />
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">SOC Monitored</h4>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">24/7 Global Surveillance</p>
                </div>
              </div>

              <div className="md:col-span-2 p-12 rounded-[2.5rem] bg-[#F7F8FA] border border-gray-50 flex items-center gap-12 group hover:shadow-xl transition-all">
                <div className="hidden sm:block w-32 h-32 rounded-3xl bg-white shadow-inner flex items-center justify-center">
                  <Server className="w-16 h-16 text-[#58636e]/20" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-[#0a1d37] uppercase tracking-tighter mb-4">Remote Monitoring</h4>
                  <p className="text-[#58636e] font-medium text-lg">Continuous health checks and performance optimization across all distributed assets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whalebone Section */}
      <section ref={whaleboneRef} className="py-32 bg-[#00021a] relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Globe className="w-64 h-64" />
                </div>
                <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center mb-10">
                  <Globe className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Whalebone DNS Security</h2>
                <p className="text-xl text-blue-100/70 mb-10 font-medium leading-relaxed">
                  Protect your entire network at the DNS level. Whalebone stops phishing, malware communication, and access to malicious domains before any content is even downloaded.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {['Intelligent DNS Filtering', 'Malware Sinkholing', 'Anti-Phishing Shield', 'Policy Enforcement'].map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-200/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-6xl lg:text-9xl font-black opacity-5 uppercase tracking-tighter absolute -rotate-90 select-none pointer-events-none origin-left -translate-y-1/2">
                Whalebone
              </h2>
              <div className="relative z-10 pl-20">
                <span className="text-emerald-500 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Defensive Layer 03</span>
                <h3 className="text-3xl lg:text-5xl font-bold mb-8 tracking-tighter uppercase leading-tight">
                  DNS-Level <br /> Network Immunity
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">Secure Your Infrastructure</h2>
          <p className="text-xl text-blue-100 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Don't wait for a breach to happen. Partner with TIM and deploy a multi-layered cybersecurity strategy that protects your business 24/7.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-2xl px-12 py-8 text-lg font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-2xl">
            <Link to={createPageUrl('ContactUs')}>Speak with an Expert</Link>
          </Button>
        </div>
      </section>

      <RelatedServices />
    </div>
  );
}
