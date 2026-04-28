import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Network, 
  Zap, 
  Shield, 
  TrendingUp, 
  MapPin,
  Activity,
  Lock,
  Server
} from 'lucide-react';

import RelatedServices from '@/components/shared/RelatedServices';

const gnsLogo = "https://marketing.timcorp.net.ph/hubfs/website/GNS%20LOGO.png";

export default function BorderlessConnectivity() {
  const services = [
    {
      icon: Network,
      title: 'Enterprise-grade IP Transit',
      description: 'TIM manages its own network backbone (AS#135423) to provide a legitimate alternative for business-critical connectivity.'
    },
    {
      icon: Globe,
      title: 'Virtual Point-of-Presence',
      description: 'Expand your network globally without massive CAPEX investments in hardware, routers, or rack space.'
    },
    {
      icon: TrendingUp,
      title: 'Scale on Demand',
      description: 'Start with 1G ports and grow to multiple 100G ports at your own pace on a per-Mbps basis.'
    },
    {
      icon: Server,
      title: 'Direct Cloud Interconnects',
      description: 'Peer directly with global carriers, internet exchanges, and cloud hyperscalers for minimal latency.'
    },
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Enterprise-grade security at the network edge to ensure your connectivity remains uninterrupted.'
    },
    {
      icon: Activity,
      title: 'Managed SD-WAN',
      description: 'Intelligent routing and centralized control for your distributed enterprise network.'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Optimized routing to ensure maximum speed and business agility across the globe.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: '5 Major Asian Nodes connecting you to the rest of the world seamlessly.'
    },
    {
      icon: TrendingUp,
      title: 'Cost Efficiency',
      description: 'Eliminate high CAPEX with our flexible, scalable network-as-a-service model.'
    },
    {
      icon: Lock,
      title: 'Secure Routing',
      description: 'Robust protocols and multi-layered defenses built directly into the network.'
    }
  ];

  // Floating nodes for the hero animation
  const floatingNodes = [
    { icon: Globe, x: 100, y: -180, delay: 0 },
    { icon: Network, x: 200, y: -130, delay: 0.5 },
    { icon: Shield, x: -40, y: 190, delay: 1 },
    { icon: Zap, x: 140, y: 220, delay: 1.5 },
    { icon: MapPin, x: -100, y: -100, delay: 2 },
    { icon: Activity, x: 220, y: 60, delay: 2.5 },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Internet Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* Animated Data Streams */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"
              style={{
                width: `${150 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() > 0.5 ? 0 : 90}deg)`
              }}
              animate={{
                x: [0, 300, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-48 lg:pt-56 pb-32 lg:pb-40">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold">Global Network Services. Low Latency.</span>
              </motion.div>
              
              <h1 className="text-[3.5rem] lg:text-[7rem] font-bold mb-8 leading-[0.85] tracking-tighter uppercase text-slate-900">
                Agility Meets <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
                  Global Reach
                </span>
              </h1>
              
              <p className="text-xl text-slate-500 mb-12 max-w-xl font-medium leading-relaxed">
                Eliminate latency and high CAPEX with TIM's agile backbone. Global Network Services (GNS) provide the speed mission-critical applications demand.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 text-sm rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                  <Link to={createPageUrl('ContactUs')}>Connect Now</Link>
                </Button>
                <div className="flex items-center gap-4 px-6">
                  <div className="flex -space-x-3">
                    {['PH', 'SG', 'HK'].map((loc, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 backdrop-blur-md shadow-sm">
                        {loc}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">5 Major Asian Nodes</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content: Network Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="hidden lg:flex relative h-[500px] items-center justify-center mt-20 lg:mt-0"
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

              {/* Central GNS Logo */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-48 h-48 bg-white backdrop-blur-xl rounded-full shadow-2xl border border-slate-100 flex items-center justify-center p-6"
              >
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/10 animate-ping opacity-20" />
                <img src={gnsLogo} alt="GNS" className="w-full object-contain opacity-80" referrerPolicy="no-referrer" />
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
                  className="absolute z-30 w-16 h-16 bg-white backdrop-blur-xl rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center"
                  style={{ left: `calc(50% + ${node.x}px - 32px)`, top: `calc(50% + ${node.y}px - 32px)` }}
                >
                  <node.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Network Services */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
             
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase mb-6 text-slate-900 leading-[0.9]">
                Core Network <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Services</span>
              </h2>
              <p className="text-slate-400 font-medium text-xl">
                High-performance networking solutions designed for the modern enterprise.
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
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-32 relative overflow-hidden bg-white text-slate-900 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
              Unmatched <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Connectivity</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium text-xl">
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
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-500/20 transition-all group hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
                  <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TIM GNS? Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-6xl font-bold tracking-tighter uppercase mb-8 text-slate-900 leading-[0.9]">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">TIM GNS?</span>
              </h2>
              <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-xl">
                <p>
                  Choosing a network provider is a strategic decision. While others offer basic transit, we offer a dedicated partnership. Here is why enterprises trust their mission-critical connectivity to TIM GNS.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full opacity-50" />
              <div className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">The TIM Advantage</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Direct Cloud Interconnects', 
                    'Fully Managed, Zero Complexity', 
                    'Low Latency, High Performance', 
                    'A Partner You Can Actually Talk To'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
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
          <h2 className="text-4xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">Connect Without Borders</h2>
          <p className="text-2xl text-blue-100 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            With TIM GNS, you gain a reliable partner dedicated to maintaining your network infrastructure so you can focus on strategic initiatives and business expansion.
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
