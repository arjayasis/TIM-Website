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
  Settings,
  Activity,
  Building2
} from 'lucide-react';

import RelatedServices from '@/components/shared/RelatedServices';
import CloudArchitectureDiagram from '@/components/tim/CloudArchitectureDiagram';

const timCloudLogo = "https://marketing.timcorp.net.ph/hubfs/website/TIM%20CLOUD%20LOGO.png";

export default function CloudServices() {
  const services = [
    {
      icon: Server,
      title: 'Cloud Computing (IaaS)',
      description: 'Infrastructure as a Service (IaaS) provides on-demand compute, storage, and networking designed to adapt effortlessly to your evolving needs.'
    },
    {
      icon: Database,
      title: 'Storage Services (S3)',
      description: 'Simple Storage Service (S3) offers highly scalable, cost-effective, and limitless on-demand object storage for backups, multimedia, or big data.'
    },
    {
      icon: Shield,
      title: 'Data Protection (BaaS)',
      description: 'Backup as a Service (BaaS) delivers secure, automated cloud backup to ensure your critical data is always safe and recoverable.'
    },
    {
      icon: Network,
      title: 'Cloud Network',
      description: 'Low-latency, high-performance networking powered by TIM Cloud Global Network Services (GNS).'
    },
    {
      icon: Lock,
      title: 'Cloud Security',
      description: 'Enhance your security posture with built-in defenses designed to safeguard your business at every level.'
    },
    {
      icon: RefreshCw,
      title: 'Disaster Recovery (DRaaS)',
      description: 'Disaster Recovery as a Service (DRaaS) minimizes downtime and data loss with robust, automated recovery solutions.'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed to ensure maximum uptime and business agility.'
    },
    {
      icon: Activity,
      title: 'Scalability',
      description: 'Scale resources up or down based on demand with a fully managed platform.'
    },
    {
      icon: Settings,
      title: 'Cost Efficiency',
      description: 'Flexible pricing models to reduce IT expenditure and hardware maintenance.'
    },
    {
      icon: Shield,
      title: 'Automated Backups',
      description: 'Robust recovery options and multi-layered protocols for enhanced security.'
    }
  ];

  // Floating nodes for the hero animation
  const floatingNodes = [
    { icon: Server, x: -120, y: -100, delay: 0 },
    { icon: Database, x: 140, y: -80, delay: 0.5 },
    { icon: Shield, x: -140, y: 80, delay: 1 },
    { icon: Network, x: 120, y: 100, delay: 1.5 },
    { icon: Lock, x: -180, y: -10, delay: 2 },
    { icon: RefreshCw, x: 180, y: 10, delay: 2.5 },
  ];

  return (
    <div className="min-h-screen bg-[#00021a] text-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Clouds */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ x: [0, 100, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-20 opacity-10"
          >
            <Cloud className="w-64 h-64 text-blue-500" />
          </motion.div>
          <motion.div 
            animate={{ x: [0, -80, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 -right-20 opacity-5"
          >
            <Cloud className="w-96 h-96 text-blue-600" />
          </motion.div>
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-20 left-1/3 opacity-5"
          >
            <Cloud className="w-72 h-72 text-blue-700" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">24/7 Fully Managed Cloud. Secure. Scalable.</span>
              </motion.div>
              
              <h1 className="text-[3.5rem] lg:text-[7rem] font-bold mb-8 leading-[0.85] tracking-tighter uppercase text-white">
                Your Cloud <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                  Your Pace
                </span>
              </h1>
              
              <p className="text-xl text-blue-100/60 mb-12 max-w-xl font-medium leading-relaxed">
                A sovereign, fully managed cloud designed for the modern enterprise. Scale without limits while keeping your data local, secure, and under your control.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 text-sm rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  <Link to={createPageUrl('ContactUs')}>Deploy Now</Link>
                </Button>
                <div className="flex items-center gap-4 px-6">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white/10 bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400 backdrop-blur-md">
                        {i === 3 ? '24/7' : ''}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-blue-100/40 uppercase tracking-widest font-bold">Expert Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content: Cloud Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="hidden lg:flex relative h-[500px] items-center justify-center"
            >
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
                {floatingNodes.map((node, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1="250"
                    y1="250"
                    x2={250 + node.x}
                    y2={250 + node.y}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.5 + node.delay }}
                  />
                ))}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central TIM Cloud Logo */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-48 h-48 bg-white/5 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 flex items-center justify-center p-6"
              >
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 animate-ping opacity-20" />
                <img src={timCloudLogo} alt="TIM Cloud" className="w-full object-contain filter brightness-0 invert opacity-80" referrerPolicy="no-referrer" />
              </motion.div>

              {/* Orbiting/Floating Nodes */}
              {floatingNodes.map((node, i) => (
                <motion.div
                  key={`node-${i}`}
                  animate={{ 
                    y: [node.y, node.y - 15, node.y],
                    x: [node.x, node.x + 10, node.x]
                  }}
                  transition={{ 
                    duration: 3 + (i % 2), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: node.delay
                  }}
                  className="absolute z-30 w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 flex items-center justify-center"
                  style={{ left: `calc(50% + ${node.x}px - 32px)`, top: `calc(50% + ${node.y}px - 32px)` }}
                >
                  <node.icon className="w-8 h-8 text-blue-400" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Cloud Services */}
      <section className="py-32 bg-[#00021a] border-t border-white/5 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
             
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase mb-6 text-white leading-[0.9]">
                Core Cloud <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Services</span>
              </h2>
              <p className="text-blue-100/40 font-medium text-xl">
                Enterprise-grade infrastructure delivered with precision and reliability.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">{item.title}</h3>
                <p className="text-blue-100/40 text-sm font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="bg-[#00021a] overflow-hidden border-t border-white/5">
        <CloudArchitectureDiagram />
      </section>

      {/* Capabilities Grid */}
      <section className="py-32 relative overflow-hidden bg-[#00021a] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
              Unmatched <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Capabilities</span>
            </h2>
            <p className="text-blue-100/40 max-w-2xl mx-auto font-medium text-xl">
              We simplify the complex, allowing you to focus on what matters most: your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group hover:shadow-lg backdrop-blur-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
                  <item.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">{item.title}</h3>
                <p className="text-blue-100/40 text-sm font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TIM Cloud? Section */}
      <section className="py-24 bg-[#00021a] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-6xl font-bold tracking-tighter uppercase mb-8 text-white leading-[0.9]">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">TIM Cloud?</span>
              </h2>
              <div className="space-y-6 text-blue-100/40 font-medium leading-relaxed text-xl">
                <p>
                  Choosing a cloud provider is a strategic decision. While others offer a platform, we offer a partnership. Here is why enterprises trust their most critical data to the TIM Cloud.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-full opacity-50" />
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">The TIM Advantage</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Data Sovereignty & Compliance', 
                    'Fully Managed, Zero Complexity', 
                    'Low Latency, High Performance', 
                    'A Partner You Can Actually Talk To'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-100/60">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">Scale Without Limits</h2>
          <p className="text-2xl text-blue-100 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            With TIM Cloud, you gain a reliable partner dedicated to maintaining your infrastructure so you can focus on strategic initiatives and business expansion.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-2xl px-12 py-10 text-xl font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-2xl">
            <Link to={createPageUrl('ContactUs')}>Partner with Us</Link>
          </Button>
        </div>
      </section>

      <RelatedServices />
    </div>
  );
}
