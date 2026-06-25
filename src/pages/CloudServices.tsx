import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Server, 
  Database, 
  Shield, 
  Network, 
  Lock,
  Cloud,
  Zap,
  RefreshCw,
  Building2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Layers,
  Globe,
  Info,
  LayoutGrid
} from 'lucide-react';

import RelatedServices from '@/components/shared/RelatedServices';

const timCloudLogo = "https://marketing.timcorp.net.ph/hubfs/website/TIM%20CLOUD%20LOGO.png";

export default function CloudServices() {
  const services = [
    {
      icon: Server,
      title: 'Cloud Computing (IaaS)',
      description: 'Deploy scalable compute, storage, and networking with bank-grade performance.',
      badge: 'High Performance'
    },
    {
      icon: Database,
      title: 'Data Protection (BaaS)',
      description: 'Automated backup and recovery solutions designed to keep critical workloads protected and recoverable.',
      badge: 'Sovereign Backup'
    },
    {
      icon: RefreshCw,
      title: 'Business Continuity (DRaaS)',
      description: 'Ensure business resilience with automated recovery and failover solutions built for mission-critical uptime and availability.',
      badge: 'Zero-Downtime Focus'
    },
    {
      icon: Lock,
      title: 'Cloud Security (SecaaS)',
      description: 'Integrated security controls and defenses designed to protect infrastructure, applications, and data.',
      badge: 'Hardened Shield'
    },
    {
      icon: Network,
      title: 'Cloud Network',
      description: 'Low-latency enterprise networking powered by TIM Cloud Global Network Services (GNS).',
      emphasis: 'Predictable pricing and no ingress or egress charges',
      badge: 'Zero Egress Fees'
    },
    {
      icon: Layers,
      title: 'Simple Storage Service (S3)',
      description: 'Highly durable object storage built for backups, archives, media, and large-scale data workloads.',
      badge: '99.9%'
    }
  ];

  return (
    <div id="cloud-services-root" className="min-h-screen bg-[#f8fafc] text-stone-900 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section id="cloud-services-hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#e0f2fe]/40 via-[#f0f9ff]/20 to-[#f8fafc]">
        {/* Abstract background grids */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ 
                 backgroundImage: 'linear-gradient(#0021a5 1.5px, transparent 1.5px), linear-gradient(90deg, #0021a5 1.5px, transparent 1.5px)', 
                 backgroundSize: '40px 40px' 
               }} 
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="max-w-4xl text-left space-y-8">
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm">
              <img 
                src={timCloudLogo} 
                alt="TIM Cloud" 
                className="h-5 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-800 font-extrabold">
                Local Sovereign Infrastructure
              </span>
            </div>

            <h1 id="hero-headline" className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight text-slate-900 uppercase">
              Sovereign Cloud <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                Built for Enterprise
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
              Scale with confidence, meet regulatory requirements, and ensure data sovereignty with secure, high-performance cloud infrastructure hosted and managed entirely within the Philippines.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button 
                id="cta-subscribe"
                asChild
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
              >
                <Link to={createPageUrl('ContactUs')}>Subscribe Now!</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-slate-200/60">
              <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-slate-400 block mb-4">
                TIM Cloud Enterprise Assurance
              </span>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "24/7 Fully Managed Infrastructure and Support", icon: ShieldCheck },
                  { label: "Data Residency in the Philippines", icon: Globe },
                  { label: "Enterprise-Grade Security", icon: Lock }
                ].map((badge, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white/50 border border-slate-200/50 p-3.5 rounded-xl backdrop-blur-sm">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                      <badge.icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 leading-tight">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Cloud Services Section */}
      <section id="core-cloud-services" className="py-32 bg-[#090e24] border-y border-slate-950 relative overflow-hidden">
        {/* Subtle decorative elements for enterprise feel */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full text-left">
          
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-400 block mb-3">
              TIM Sovereign Cloud Suite
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Core Cloud Services
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl font-medium leading-relaxed">
              Fully managed cloud infrastructure built for secure, scalable, and mission-critical workloads.
            </p>
          </div>

          {/* Service Cards Grid (6 cards) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div 
                key={idx} 
                className={`
                  bg-white/[0.02] backdrop-blur-md border p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden
                  ${item.emphasis ? 'border-blue-500 ring-2 ring-blue-500/15 bg-blue-950/20' : 'border-white/10 hover:border-blue-500/40'}
                `}
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-blue-500/10 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0
                      ${item.emphasis 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                        : 'bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600'
                      }
                    `}>
                      <item.icon className="w-7 h-7" />
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-widest text-[#a3b3d1] bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-sans font-black text-white uppercase tracking-tight mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Emphasis note for Card 5 / Cloud Network */}
                {item.emphasis && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs font-black text-blue-300 block bg-blue-950/40 p-3.5 rounded-xl border border-blue-500/20">
                      💡 {item.emphasis}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Section Footer Messaging */}
          <div className="mt-16 text-center max-w-4xl mx-auto pt-8 border-t border-white/10">
            <p className="text-base sm:text-lg font-bold text-slate-400 leading-relaxed">
              Enabling organizations to operate with <span className="text-blue-400">sovereign infrastructure</span>, <span className="text-blue-400">predictable costs</span>, and <span className="text-blue-400">enterprise-grade local support</span>.
            </p>
          </div>

        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="value-proposition" className="py-32 bg-[#f8fafc] border-y border-slate-200/60 text-slate-900 relative overflow-hidden">
        {/* Subtle dot-grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.15) 1px, transparent 1px)',
               backgroundSize: '24px 24px' 
             }} 
        />
        {/* Ambient backdrop glows */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headings and description */}
            <div className="lg:col-span-5 relative z-10 space-y-8">
              {/* Abstract network mapping dots resembling the Philippines */}
              <div className="absolute -bottom-20 -left-12 w-[350px] h-[350px] pointer-events-none opacity-[0.15] select-none z-0">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-blue-600/30">
                  <path d="M40 80 Q60 50 80 70 T120 110 T160 50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3"/>
                  <path d="M30 110 Q50 90 70 120 T110 90 T150 130" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3"/>
                  <circle cx="80" cy="70" r="2" fill="currentColor" className="animate-ping" />
                  <circle cx="120" cy="110" r="3" fill="currentColor" />
                  <circle cx="70" cy="120" r="1.5" fill="currentColor" />
                  <circle cx="110" cy="90" r="2.5" fill="currentColor" />
                  <line x1="80" y1="70" x2="120" y2="110" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="70" y1="120" x2="110" y2="90" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="120" y1="110" x2="110" y2="90" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="95" cy="140" r="1.5" fill="currentColor" />
                  <circle cx="102" cy="148" r="1" fill="currentColor" />
                  <circle cx="110" cy="155" r="2" fill="currentColor" />
                  <circle cx="115" cy="165" r="1.5" fill="currentColor" />
                  <circle cx="85" cy="115" r="1" fill="currentColor" />
                  <circle cx="90" cy="125" r="1" fill="currentColor" />
                </svg>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-avantgarde font-black tracking-tighter leading-[1.05] uppercase text-slate-900">
                  WHY PHILIPPINE <br />
                  ENTERPRISES CHOOSE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                    TIM CLOUD
                  </span>
                </h2>
                
                {/* Accent thin line */}
                <div className="w-16 h-1 bg-blue-600 rounded-full shadow-xs" />
              </div>

              <p className="text-slate-600 text-base lg:text-lg font-semibold leading-relaxed max-w-xl">
                Choosing a cloud provider is a strategic decision. TIM Cloud delivers sovereign infrastructure, fully managed operations, predictable enterprise pricing, and 24/7 local expertise, helping organizations simplify complexity while keeping critical workloads secure, compliant, and within the Philippines.
              </p>
            </div>

            {/* Right Column: Premium Glowing ADVANTAGE Card Container with detailed items */}
            <div className="lg:col-span-7">
              <div className="relative border border-slate-200 bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/80 backdrop-blur-md">
                
                {/* Header row containing LOGO and ADVANTAGE title */}
                <div className="flex items-center gap-4 pb-8 border-b border-slate-100 mb-8">
                  <img 
                    src={timCloudLogo} 
                    alt="TIM Cloud" 
                    className="h-8 sm:h-9 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="w-[1px] h-6 bg-slate-200" />
                  <h3 className="text-base sm:text-lg font-avantgarde font-extrabold tracking-wider text-slate-800">
                    TIM CLOUD ADVANTAGE
                  </h3>
                </div>

                {/* List items layout */}
                <div className="space-y-8">
                  
                  {/* Point 1: Data Sovereignty */}
                  <div className="flex items-start gap-5 sm:gap-6 pb-6 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center shrink-0 shadow-xs relative">
                      <svg className="w-6.5 h-6.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id="shield-clip">
                          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
                        </clipPath>
                        <g clipPath="url(#shield-clip)">
                          {/* Blue top */}
                          <path d="M4 2H20V12H4V2Z" fill="#0038a8" />
                          {/* Red bottom */}
                          <path d="M4 11.5H20V22H4V11.5Z" fill="#ce1126" />
                          {/* White triangle */}
                          <path d="M4 2L11 12L4 22V2Z" fill="#ffffff" />
                          {/* Golden Sun / Star details */}
                          <circle cx="6" cy="12" r="1.5" fill="#fcd116" />
                          <circle cx="5" cy="8.5" r="0.4" fill="#fcd116" />
                          <circle cx="5" cy="15.5" r="0.4" fill="#fcd116" />
                        </g>
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-slate-800 mb-2">
                        DATA SOVEREIGNTY & COMPLIANCE
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                        Keep sensitive workloads and customer data hosted within the Philippines to support governance, compliance, and lower latency.
                      </p>
                    </div>
                  </div>

                  {/* Point 2: Managed Ops */}
                  <div className="flex items-start gap-5 sm:gap-6 pb-6 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center shrink-0 shadow-xs">
                      <Cloud className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-slate-800 mb-2">
                        FULLY MANAGED OPERATIONS
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                        Reduce operational complexity with end-to-end infrastructure management, monitoring, maintenance, and support.
                      </p>
                    </div>
                  </div>

                  {/* Point 3: Predictable Pricing */}
                  <div className="flex items-start gap-5 sm:gap-6 pb-6 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center shrink-0 shadow-xs text-blue-600 font-sans text-[22px] font-bold">
                      $
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-slate-800 mb-2">
                        PREDICTABLE ENTERPRISE PRICING
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                        Avoid unpredictable pay-as-you-go billing with transparent subscription pricing and flexible 12-, 24-, and 36-month terms.
                      </p>
                    </div>
                  </div>

                  {/* Point 4: GNS Link with Green Warning banner */}
                  <div className="flex items-start gap-5 sm:gap-6 pb-6 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center shrink-0 shadow-xs">
                      <Globe className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-slate-800 mb-2">
                        POWERED BY <span className="text-blue-600 font-bold">TIM GLOBAL NETWORK SERVICES (GNS)</span>
                      </h4>
                      <div className="space-y-3">
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                          Low-latency enterprise networking powered by TIM Cloud Global Network Services (GNS). Predictable pricing and
                        </p>
                        <div className="inline-block">
                          <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/50 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                            NO INGRESS OR EGRESS CHARGES.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Point 5: Support */}
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center shrink-0 shadow-xs">
                      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-slate-800 mb-2">
                        24/7 LOCAL EXPERT SUPPORT
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                        Access dedicated local cloud specialists who understand your infrastructure, business requirements, and operational priorities.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Call-To-Action (End of Website) CPM */}
      <section id="closing-cta" className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
        {/* Atmosphere color points */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#fe3800]/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#fe3800] block mb-4">
            Take Back System Control
          </span>
          
          <h2 id="closing-headline" className="text-4xl sm:text-6xl lg:text-[5.5rem] font-sans font-black mb-8 tracking-tighter uppercase leading-[0.9] text-white">
            Enterprise Cloud <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-300">
              Simplified
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Technology should empower growth, not create operational complexity. TIM Cloud delivers the infrastructure, expertise, and partnership enterprises need to move forward with confidence.
          </p>

          <Button 
            id="final-cta-talk-to-team"
            asChild
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-12 py-8 text-sm outline-none font-black uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20"
          >
            <Link to={createPageUrl('ContactUs')}>Talk to Our Team</Link>
          </Button>
        </div>
      </section>

      <RelatedServices />
    </div>
  );
}

