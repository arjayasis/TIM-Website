import React, { useRef, useState, useEffect, useMemo } from 'react';
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
  Server,
  Settings,
  AlertTriangle,
  Cpu,
  Layers,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Cloud,
  Network,
  Crosshair,
  Scale,
  Trophy
} from 'lucide-react';

import RelatedServices from '@/components/shared/RelatedServices';

export default function CoreCybersecurity() {
  const intrusionRef = useRef<HTMLElement>(null);
  const nxgRef = useRef<HTMLElement>(null);
  const whaleboneRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#00021a] text-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[240px]" />
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">Resilient Infrastructure Defense Suite</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tighter uppercase max-w-4xl">
              Protection for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-[#fe3800]">
                Mission-Critical Infrastructure
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100/45 mb-16 max-w-2xl font-medium leading-relaxed">
              Fortify your digital perimeter with our Core Cybersecurity suite. We provide specialized, high-performance defense mechanisms designed to safeguard your most valuable assets.
            </p>

            {/* Strategic Partner Logo Showcase */}
            <div className="w-full max-w-3xl mb-16">
              <span className="text-[10px] uppercase tracking-[0.25em] text-blue-400/50 font-extrabold block mb-6 animate-pulse">
                Powered by Industry Leaders
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                {/* Intrusion */}
                <div onClick={() => scrollToSection(intrusionRef)} className="h-14 px-6 rounded-2xl bg-white/95 border border-white/10 hover:border-[#fe3800]/40 flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 hover:bg-white cursor-pointer transition-all">
                  <img 
                    src="https://marketing.timcorp.net.ph/hubfs/website/Intrusion-Logo.png" 
                    alt="Intrusion" 
                    className="h-6 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Nexusguard */}
                <div onClick={() => scrollToSection(nxgRef)} className="h-14 px-6 rounded-2xl bg-white/95 border border-white/10 hover:border-[#e15829]/40 flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 hover:bg-white cursor-pointer transition-all">
                  <img 
                    src="https://marketing.timcorp.net.ph/hubfs/website/nxg-logo.png" 
                    alt="Nexusguard" 
                    className="h-6 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Whalebone */}
                <div onClick={() => scrollToSection(whaleboneRef)} className="h-14 px-6 rounded-2xl bg-white/95 border border-white/10 hover:border-[#008282]/40 flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 hover:bg-white cursor-pointer transition-all">
                  <img 
                    src="https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/whalebone_color-4.webp" 
                    alt="Whalebone" 
                    className="h-6 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Sub-navigation Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl">
              <button 
                onClick={() => scrollToSection(intrusionRef)}
                className="group w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white hover:text-[#14267f] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3 text-xs uppercase font-extrabold tracking-widest cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                <span>Explore Intrusion</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection(nxgRef)}
                className="group w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white hover:text-[#101828] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3 text-xs uppercase font-extrabold tracking-widest cursor-pointer"
              >
                <Shield className="w-4 h-4 text-[#e15829] group-hover:scale-110 transition-transform" />
                <span>Explore Nexusguard</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection(whaleboneRef)}
                className="group w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white hover:text-[#0f172a] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3 text-xs uppercase font-extrabold tracking-widest cursor-pointer"
              >
                <Globe className="w-4 h-4 text-[#008282] group-hover:scale-110 transition-transform" />
                <span>Explore Whalebone</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Intrusion Section */}
      <section ref={intrusionRef} className="py-32 bg-[#fafbff] text-[#14267f] relative overflow-hidden scroll-mt-24 border-y border-stone-200">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
             style={{ 
               backgroundImage: 'radial-gradient(circle at 70% 30%, #e8ecff 0%, transparent 60%)',
             }} 
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
          
          {/* Logo & Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20 pb-8 border-b border-stone-200/50">
            <div className="flex items-center gap-4">
              <img 
                src="https://marketing.timcorp.net.ph/hubfs/website/Intrusion-Logo.png" 
                alt="Intrusion Main Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="h-8 w-px bg-stone-300" />
              <img 
                src="https://marketing.timcorp.net.ph/hubfs/website/intrusion%20logo%20icon.png" 
                alt="Intrusion Shield Logo Icon" 
                className="h-8 w-8 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f3ff] border border-[#a2b4ff]/40">
              <span className="w-2 h-2 rounded-full bg-[#2035d1] animate-ping" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2035d1]">
                Threat intelligence active
              </span>
            </div>
          </div>

          {/* Hero Content Section */}
          <div className="max-w-4xl mb-24 text-left">
            <h2 className="text-4xl lg:text-7xl font-sans font-black mb-6 leading-tight tracking-tighter text-[#2035d1] uppercase">
              See the unseen. <br />
              <span className="text-[#fe3800]">Know the unknown.</span>
            </h2>
            <p className="text-xl text-[#14267f] font-medium leading-relaxed max-w-3xl">
              Leverage our cyber threat intelligence to prioritize threats that pose the greatest risk to your business and stay protected from unknown vulnerabilities.
            </p>
          </div>

          {/* How It Works - Inline Deployment Section */}
          <div className="mb-24 bg-white rounded-[3rem] p-8 lg:p-16 border border-stone-200/60 shadow-sm text-left">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-black text-[#2035d1] uppercase tracking-tight mb-4">
                On-premise cybersecurity for your network
              </h3>
              <p className="text-[#14267f]/80 text-lg font-medium">
                We believe in a multifaceted approach to security. Shield was built to integrate with your existing solutions and architecture.
              </p>
            </div>

            {/* Diagram Sequential: Intrusion Inline Network Deployment */}
            <div className="bg-stone-50 border border-stone-200/70 rounded-3xl p-6 sm:p-10 mb-12 relative overflow-hidden">
              <h4 className="text-xs uppercase tracking-widest text-[#2035d1] font-black mb-10 text-center sm:text-left">
                Intrusion Inline Network Deployment
              </h4>
              
              {/* Sequential Flow Map */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 w-full">
                {[
                  { label: "Internet", icon: Cloud, isSpecial: false },
                  { label: "Firewall", icon: Shield, isSpecial: false },
                  { 
                    label: "Intrusion Shield", 
                    imgUrl: "https://marketing.timcorp.net.ph/hubfs/website/intrusion%20logo%20icon.png", 
                    isSpecial: true 
                  },
                  { label: "Switch", icon: Network, isSpecial: false },
                  { label: "Your Network", icon: Server, isSpecial: false }
                ].map((item, idx, arr) => (
                  <React.Fragment key={idx}>
                    {/* Node */}
                    <div className="flex flex-col items-center w-full lg:w-auto relative group">
                      <div className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm
                        ${item.isSpecial 
                          ? 'bg-white border-2 border-[#fe3800] scale-110 ring-4 ring-[#fe3800]/10 hover:ring-[#fe3800]/20' 
                          : 'bg-white border border-stone-200 hover:border-[#2035d1]'
                        }
                      `}>
                        {item.imgUrl ? (
                          <img 
                            src={item.imgUrl} 
                            alt={item.label} 
                            className="w-10 h-10 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          item.icon && <item.icon className={`w-7 h-7 ${item.isSpecial ? 'text-[#fe3800]' : 'text-[#2035d1]'}`} />
                        )}
                      </div>
                      
                      <span className={`text-[11px] uppercase tracking-wider font-extrabold mt-4 text-center
                        ${item.isSpecial ? 'text-[#fe3800]' : 'text-[#14267f]'}`}>
                        {item.label}
                      </span>

                      {/* Diagnostic Overlay Indicator */}
                      {item.isSpecial && (
                        <span className="absolute -top-3 px-2 py-0.5 rounded bg-[#fe3800] text-[8px] text-white font-black uppercase tracking-widest animate-bounce">
                          Shield
                        </span>
                      )}
                    </div>

                    {/* Divider Connector Arrow */}
                    {idx < arr.length - 1 && (
                      <div className="flex items-center justify-center h-10 lg:h-auto w-full lg:w-auto my-2 lg:my-0 lg:flex-1">
                        <div className="h-1 lg:h-0.5 w-6 lg:w-full bg-stone-200 relative">
                          <div className={`
                            absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-[#2035d1] to-transparent
                            ${idx === 1 ? 'via-[#fe3800]' : ''}
                            scale-x-0 animate-[shimmer_2s_infinite] origin-left
                          `} 
                          style={{ animationDelay: `${idx * 0.4}s` }}
                          />
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 lg:translate-x-0 w-1.5 h-1.5 border-t-2 border-r-2 border-stone-400 rotate-45 hidden lg:block" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Features list side by side */}
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Reduce your team's stress with real-time blocking and zero alerts",
                  body: "IT teams are overworked and alert fatigue is real. That's why Shield doesn't create alerts. If a connection is malicious, it gets blocked."
                },
                {
                  title: "Enhance the performance of your existing products",
                  body: "Shield improves the decision-making capabilities of your existing products and helps your team become better threat hunters."
                }
              ].map((feat, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#fe3800]/10 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#fe3800]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-[#2035d1] tracking-tight mb-2">
                        {feat.title}
                      </h4>
                      <p className="text-[#14267f]/80 text-sm font-semibold leading-relaxed">
                        {feat.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hub and Spoke Intelligence */}
          <div className="mb-24 text-left">
            <div className="text-center md:text-left mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#fe3800] font-black block mb-3">Threat Matrix Synchronizer</span>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#2035d1] uppercase tracking-tight">
                Hub & Spoke Intel Network
              </h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Spoke Cards Grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
                {[
                  {
                    title: "Account of the Internet",
                    body: "History of record for more than 8.5 billion IPs and counting."
                  },
                  {
                    title: "Manual Analysis",
                    body: "Expertly identified malicious behaviors and anomalies coded into rulesets."
                  },
                  {
                    title: "Behavior",
                    body: "Expected and suspicious patterns and behaviors of communications."
                  },
                  {
                    title: "Reputation",
                    body: "Accurate identification of connections with a record of offense."
                  }
                ].map((card, i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-stone-200/80 p-8 rounded-3xl hover:border-[#fe3800]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                  >
                    <div className="mb-4 text-xs font-bold text-[#88c2dd] uppercase tracking-widest">
                      Spoke Intelligence #{i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#2035d1] uppercase tracking-tight mb-3">
                        {card.title}
                      </h4>
                      <p className="text-[#14267f]/70 text-sm font-semibold leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Node Visual Hub */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#f0f3ff] border border-[#a2b4ff]/30 p-12 rounded-[3.5rem] relative min-h-[380px] order-1 lg:order-2">
                <div className="absolute inset-0 z-0 opacity-15"
                     style={{ 
                       backgroundImage: 'radial-gradient(circle, #2035d1 10%, transparent 10%)',
                       backgroundSize: '16px 16px' 
                     }} />
                
                {/* Simulated Spoke Connecting Rays */}
                <div className="w-48 h-48 rounded-full border-2 border-dashed border-[#2035d1]/20 flex items-center justify-center relative animate-[spin_40s_linear_infinite] z-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fe3800] absolute top-0 left-1/2 -translate-x-1/2" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2035d1] absolute bottom-0 left-1/2 -translate-x-1/2" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fe3800] absolute left-0 top-1/2 -translate-y-1/2" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2035d1] absolute right-0 top-1/2 -translate-y-1/2" />
                </div>

                <div className="absolute flex flex-col items-center z-10">
                  <div className="w-24 h-24 rounded-3xl bg-white border-4 border-[#2035d1] flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://marketing.timcorp.net.ph/hubfs/website/intrusion%20logo%20icon.png" 
                      alt="Intrusion Shield Logo Icon" 
                      className="w-14 h-14 object-contain animate-pulse"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-sm font-black text-[#2035d1] uppercase tracking-widest mt-4">
                    Your Network
                  </h4>
                  <p className="text-[10px] text-[#2035d1]/60 uppercase tracking-widest font-black mt-1">
                    Continuous Sync Map
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition & Zero Trust Mindset */}
          <div className="text-left border-t border-stone-200/50 pt-20">
            <h3 className="text-3xl lg:text-4xl font-black text-[#2035d1] uppercase tracking-tight mb-16 text-center lg:text-left">
              Why Intrusion Shield
            </h3>

            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Zero Trust core philosophy board (Large Card) */}
              <div className="lg:col-span-5 bg-[#2035d1] text-white p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between shadow-xl">
                {/* Background Atmosphere overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#fe3800]/25 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-6">
                    <ShieldAlert className="w-3.5 h-3.5 text-white" />
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#88c2dd]">
                      Zero Trust mindset
                    </span>
                  </div>
                  
                  <h4 className="text-3xl font-black uppercase tracking-tight mb-4">
                    Zero Trust mindset
                  </h4>
                  <p className="text-blue-100/80 text-sm font-semibold leading-relaxed">
                    Intrusion operates under the assumption that all networks have been compromised. There is no inherent trust. We evaluate all inbound and outbound connections to prevent deployment of Zero-Days that may exist in your environment.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#88c2dd]">
                    Assurance factor alpha
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#fe3800] flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Category Columns (Networking, Threat Hunting, Analyzing) */}
              <div className="lg:col-span-7 grid gap-6">
                {[
                  {
                    title: "Networking",
                    body: "Seamlessly sits inline within your existing network infrastructure without inducing latency, providing immediate perimeter fortification and deep inspection of all data in transit.",
                    icon: Network,
                  },
                  {
                    title: "Threat Hunting",
                    body: "Empowers SecOps teams with active kill-chain disruption, automatically neutralizing high-risk connections and hunting down hidden risks before execution.",
                    icon: Crosshair,
                  },
                  {
                    title: "Analyzing",
                    body: "Continuously maps massive datasets against local traffic anomalies, translating multi-gigabit network telemetry into immediate protective actions.",
                    icon: TrendingUp,
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-stone-200/80 p-8 rounded-[2rem] hover:bg-[#f0f3ff]/30 transition-all duration-300 group flex flex-col sm:flex-row gap-6 hover:border-[#2035d1]/30 shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#f0f3ff] flex items-center justify-center shrink-0 border border-stone-100 group-hover:bg-[#2035d1] group-hover:text-white transition-all">
                      <item.icon className="w-7 h-7 text-[#2035d1] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#2035d1] uppercase tracking-tight mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[#14267f]/80 text-sm font-semibold leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* NXG / Nexusguard Section */}
      <section ref={nxgRef} className="bg-[#fefcfb] text-[#101828] relative overflow-hidden scroll-mt-24 py-32 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
          {/* Top Row containing Logo and Pill / Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 pb-8 border-b border-stone-200/60">
            <img 
              src="https://marketing.timcorp.net.ph/hubfs/website/nxg-logo.png" 
              alt="Nexusguard Logo" 
              className="h-9 w-auto object-contain self-start"
              referrerPolicy="no-referrer"
            />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fbe7d9] border border-[#f5ccb3] self-start sm:self-auto">
              <Shield className="w-4 h-4 text-[#e15829]" />
              <span className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#e15829]">Nexusguard protection</span>
            </div>
          </div>

          {/* Hero Row: Header and Subheading */}
          <div className="mb-20 text-left">
            <h2 className="text-4xl lg:text-6xl font-black text-[#101828] mb-8 tracking-tighter leading-[1] uppercase max-w-5xl">
              Origin Protection for <br />
              <span className="text-[#e15829]">Mission-Critical Infrastructure</span>
            </h2>
            <p className="text-[#101828]/80 text-lg font-medium leading-relaxed max-w-5xl">
              Nexusguard Origin Protection is a leading-edge, purpose-built service designed to safeguard mission-critical services across large-scale networks. Tailored to meet the unique demands of environments managing hundreds of Class C networks, Origin Protection provides robust protection against evolving threats while adapting to diverse infrastructure requirements. The service offers flexible deployment options, including Nexusguard Bastions for on-premise or hybrid setups and Nexusguard Fully Managed Service for cloud-based solutions.
            </p>
          </div>

          {/* Strategic Advantages Cards Row (advantages) */}
          <div className="mb-24 text-left">
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#e15829] font-black mb-8">Strategic Advantages for 24/7 Uptime</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "End-to-end Defense", icon: ShieldCheck },
                { title: "Individual IP Protection", icon: Target },
                { title: "Uninterrupted Service", icon: Activity },
              ].map((adv) => (
                <div 
                  key={adv.title}
                  className="bg-[#fbe7d9] border border-[#f5ccb3] p-8 rounded-[2rem] flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#f5ccb3]/60 mb-6 group-hover:scale-110 transition-transform">
                    <adv.icon className="w-6 h-6 text-[#e15829]" />
                  </div>
                  <h4 className="text-xl font-black text-[#101828] uppercase tracking-tight">{adv.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-24 py-16 px-8 lg:p-16 rounded-[3rem] bg-white border border-[#f5ccb3]/35 shadow-sm text-left">
            <h3 className="text-3xl lg:text-4xl font-black text-[#101828] uppercase tracking-tight mb-12 border-b border-[#fbe7d9] pb-6">
              How it works
            </h3>
            
            <div className="flex flex-col gap-12">
              {/* Diagram */}
              <div className="w-full relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/60 p-6 sm:p-10 flex items-center justify-center group">
                <img 
                  src="https://marketing.timcorp.net.ph/hubfs/website/nxg%20OP.svg" 
                  alt="Nexusguard Origin Protection Diagram" 
                  className="w-full h-auto max-w-5xl max-h-[500px] object-contain relative z-10 filter drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-radial-gradient from-[#fbe7d9]/25 to-transparent pointer-events-none" />
              </div>

              {/* Steps (horizontal grid under diagram) */}
              <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-stone-100">
                {[
                  {
                    title: "Real-time Detection and Traffic Diversion",
                    description: "When a malicious attack is detected, the Event Notifier App immediately delivers alerts via email, SNMP Trap, or syslog. Nexusguard then leverages the Border Gateway Protocol (BGP) to announce the route of the targeted /24 IP prefix to the internet. On-demand, traffic is seamlessly diverted to Nexusguard’s globally distributed scrubbing centers, where it undergoes rigorous cleansing."
                  },
                  {
                    title: "Advanced Threat Analytics & Mitigation",
                    description: "Leveraging sophisticated flow data collection and real-time analytics, the service rapidly detects and mitigates potential DDoS threats, ensuring immediate protection with minimal latency."
                  },
                  {
                    title: "Traffic Scrubbing and Clean Traffic Delivery",
                    description: "Once the malicious traffic is filtered out, clean and legitimate traffic is securely routed back to customer networks through Generic Routing Encapsulation (GRE) tunnels, ensuring uninterrupted service and robust protection."
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#fbe7d9] border border-[#f5ccb3] flex items-center justify-center text-[#e15829] font-black text-sm shrink-0 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#101828] mb-2 uppercase tracking-tight">{step.title}</h4>
                      <p className="text-[#6d778b] text-sm leading-relaxed font-semibold">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="text-left">
            <h3 className="text-3xl lg:text-4xl font-black text-[#101828] uppercase tracking-tight mb-16 text-center">
              Core Capabilities for Unmatched Network Defense
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Safeguard against Volumetric Attacks",
                  description: "Protects CSPs and downstream customers from the largest L3-L4 DDoS attacks using best-of-breed DDoS attack mitigation techniques.",
                  icon: Zap
                },
                {
                  title: "Smart Mode Detection",
                  description: "AI-driven Smart Mode dynamically learns and adapts to traffic patterns, enabling rapid detection of cyber threats with pinpoint accuracy while minimizing false positives.",
                  icon: Cpu
                },
                {
                  title: "Automated Traffic Diversion",
                  description: "Cloud Diversion App delivers highly autonomous, fully automated traffic redirection, ensuring seamless operations and enhanced reliability — all without manual intervention.",
                  icon: Settings
                },
                {
                  title: "Surgical Mitigation",
                  description: "Automatically removes attack traffic while ensuring the flow of legitimate traffic is uninterrupted.",
                  icon: Target
                },
                {
                  title: "Flow Data Analysis",
                  description: "Multi-layered detection engine meticulously analyzes traffic data, identifying anomalies and potential threats with precision.",
                  icon: TrendingUp
                },
                {
                  title: "Clean Traffic Delivery",
                  description: "Once scrubbed, clean traffic is securely routed back to customer networks through GRE tunnels, Direct Connect or VLAN, ensuring uninterrupted service.",
                  icon: Server
                }
              ].map((cap, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-stone-200 p-8 rounded-[2rem] hover:bg-[#fbe7d9]/25 hover:border-[#f5ccb3]/60 transition-all duration-300 group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[#e15829] mb-6 group-hover:bg-[#fbe7d9] group-hover:border-[#f5ccb3] transition-all">
                      <cap.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <h4 className="text-lg font-black text-[#101828] uppercase tracking-tight mb-3">
                      {cap.title}
                    </h4>
                    <p className="text-[#6d778b] text-sm leading-relaxed font-semibold">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Whalebone Section */}
      <section ref={whaleboneRef} className="py-32 bg-[#f4fafb] text-[#0f172a] relative overflow-hidden scroll-mt-24 border-y border-stone-200">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
             style={{ 
               backgroundImage: 'radial-gradient(circle at 30% 70%, #d4f0f3 0%, transparent 60%)',
             }} 
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
          
          {/* Top Row with Logo and Brand Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16 pb-8 border-b border-stone-200/60">
            <img 
              src="https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/whalebone_color-4.webp" 
              alt="Whalebone Logo" 
              className="h-10 w-auto object-contain self-start"
              referrerPolicy="no-referrer"
            />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0f4f5] border border-[#b2e2e5]">
              <Globe className="w-4 h-4 text-[#008282]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#008282]">
                Whalebone Protective DNS
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="max-w-4xl mb-24 text-left">
            <h2 className="text-4xl lg:text-6xl font-sans font-black mb-8 leading-[1.05] tracking-tighter text-[#0f172a] uppercase">
              Stop cyber threats <br />
              <span className="text-[#008282]">before they reach your customers & teams</span>
            </h2>
            <p className="text-xl text-[#334155] font-medium leading-relaxed max-w-3xl">
              We provide telcos, ISPs, enterprises, and governments with user-centric, no-installation cybersecurity.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-24 text-left">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#008282] font-black block mb-4">DNS Resolving Immune Perimeter</span>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] uppercase tracking-tight">
                Make your network secure, fast, and reliable with our protective DNS resolver
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  id: 1,
                  icon: ShieldCheck,
                  title: "Protected users have fewer issues",
                  description: "Fewer user-generated security issues means fewer problems with speed and stability that you need to address."
                },
                {
                  id: 2,
                  icon: TrendingUp,
                  title: "Get higher revenue from B2B and B2C clients",
                  description: "Provide paid content filtering and monetize DNS security the same way major telcos do."
                },
                {
                  id: 3,
                  icon: Scale,
                  title: "Comply with any content filtering legislation",
                  description: "Peacemaker takes care of your country's content regulations, that you do not need to."
                },
                {
                  id: 4,
                  icon: Trophy,
                  title: "Stand out from the competition",
                  description: "People care about their online safety and the safety of their families. Be the one who provides it."
                }
              ].map((card) => (
                <div 
                  key={card.id} 
                  className="bg-white border border-stone-200/80 p-8 rounded-[2.5rem] hover:border-[#b2e2e5] hover:bg-[#e0f4f5]/15 transition-all duration-300 flex gap-6 shadow-sm group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#e0f4f5]/40 border border-[#b2e2e5]/50 flex items-center justify-center text-[#008282] shrink-0 group-hover:bg-[#008282] group-hover:text-white transition-all">
                    <card.icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#0f172a] uppercase tracking-tight mb-2">
                      {card.title}
                    </h4>
                    <p className="text-[#475569] text-sm leading-relaxed font-semibold">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Section */}
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 border border-stone-200/60 shadow-sm text-left">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">
                Watch Whalebone in Action
              </h3>
              <p className="text-[#475569] text-base font-medium">
                Discover how Whalebone provides seamless DNS-level protection with no client software or installation required.
              </p>
            </div>

            {/* Video Container */}
            <div className="w-full relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl aspect-video mx-auto max-w-5xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gbCgb9qQBzU?si=0wG0OAWD_NlgNYRj"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
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
