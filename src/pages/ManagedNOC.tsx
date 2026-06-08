import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Network, 
  Clock, 
  Zap, 
  BarChart, 
  ShieldAlert, 
  Activity, 
  Search, 
  Settings, 
  FileText, 
  CheckCircle, 
  Users,
  Server,
  Cpu,
  Globe,
  ArrowRight,
  Eye
} from 'lucide-react';

import RelatedServices from '@/components/shared/RelatedServices';

export default function ManagedNOC() {
  const processSteps = [
    { title: 'Monitoring', desc: 'Real-time visibility into every node and link.', icon: Eye },
    { title: 'Detection', desc: 'Automated alerts for any performance deviation.', icon: Search },
    { title: 'Analysis', desc: 'Expert triage to determine root cause.', icon: Activity },
    { title: 'Resolution', desc: 'Rapid remediation and system recovery.', icon: Zap },
    { title: 'Optimization', desc: 'Continuous tuning for peak efficiency.', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-[#00021a] text-white font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://marketing.timcorp.net.ph/hubfs/website/operations-center.jpg" 
            alt="NOC Background" 
            className="w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-[#00021a]/80 to-[#00021a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00021a] via-transparent to-transparent" />
          
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 w-full py-20 text-left flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 font-sans"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">24/7 Network Monitoring. Proactive Support. Reliable Performance</span>
            </motion.div>
            
            <h1 className="text-[3.5rem] lg:text-[5.5rem] font-bold mb-8 leading-[0.95] tracking-tighter uppercase text-left">
              Managed <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                Network Operations Center
              </span>
            </h1>
            
            <p className="text-lg text-blue-100/60 mb-12 max-w-3xl font-medium leading-relaxed text-left">
              TIM Managed NOC delivers 24/7 monitoring, management, and operational support to help organizations maintain network stability, performance, and availability across critical infrastructure environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-sm rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer">
                <a href="#what-we-do">Explore Manage NOC</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 bg-[#00021a] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter uppercase mb-8">
                What <span className="text-blue-500">We Do</span>
              </h2>
              <div className="space-y-6 text-blue-100/60 font-medium leading-relaxed text-lg">
                <p>
                  TIM Managed NOC acts as an extension of your IT team, proactively monitoring and managing network infrastructure, cloud environments, servers, connectivity, and critical business systems to help prevent disruptions before they impact operations.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-20" />
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Network className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">End-to-End Infrastructure Visibility</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    '24/7 Infrastructure Monitoring',
                    'Rapid Incident Escalation',
                    'Multi-Environment Visibility',
                    'Performance & Availability Management'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-100/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-32 relative overflow-hidden bg-[#00021a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-6">
              What You <span className="text-blue-500">Can Expect</span>
            </h2>
            <p className="text-blue-100/40 max-w-2xl mx-auto font-medium">
              Proactive network operations to ensure your infrastructure remains secure, stable, and fully operational.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '24/7 Network Monitoring', desc: 'Continuous monitoring of network availability, performance, and infrastructure health.', icon: Activity },
              { title: 'Proactive Incident Management', desc: 'Early detection and rapid resolution of network issues to minimize downtime.', icon: ShieldAlert },
              { title: 'Performance Optimization', desc: 'Ongoing analysis and tuning to ensure optimal network efficiency and reliability.', icon: Zap },
              { title: 'Reporting & Visibility', desc: 'Centralized reporting and visibility into infrastructure health, availability, and performance trends.', icon: BarChart }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <item.icon className="w-8 h-8 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">{item.title}</h3>
                <p className="text-blue-100/40 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TIM - Recipe 1 vibe */}
      <section className="py-32 bg-[#00021a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-6">
                Why Choose <br />
                <span className="text-blue-500">TIM Managed NOC?</span>
              </h2>
              <p className="text-blue-100/40 font-medium text-lg">
                TIM Managed NOC combines proactive monitoring, experienced engineers, and responsive local support to help organizations maintain reliable, high-performing infrastructure operations.
              </p>
            </div>
            <Button asChild variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 rounded-full px-8">
              <Link to={createPageUrl('AboutUs')}>Learn More About TIM</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {[
              { icon: Search, title: 'Fast Issue Detection & Resolution', desc: 'Continuous monitoring and rapid issue resolution to minimize operational impact and downtime.' },
              { icon: ShieldAlert, title: 'Reduced Downtime & Risk', desc: 'Proactive infrastructure management designed to reduce service interruptions and operational risk.' },
              { icon: Activity, title: 'Optimized Performance & Availability', desc: 'Maintain stable, high-performing systems across critical business operations.' },
              { icon: BarChart, title: 'Cost-Efficient & Scalable', desc: 'Enterprise-grade operational support without the complexity of building an in-house NOC.' },
              { icon: Users, title: 'Expert Engineers & Local Support', desc: 'A fully homegrown team of experienced engineers delivering responsive local support and operational expertise.' }
            ].map((item, i) => (
              <div key={i} className="bg-[#00021a] p-10 hover:bg-white/[0.02] transition-colors">
                <item.icon className="w-8 h-8 text-blue-500 mb-6" />
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-blue-100/40 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 bg-[#00021a] relative overflow-hidden border-t border-white/5">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="p-12 lg:p-24 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
                <Network className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Secure Your Network</span>
              </div>

              <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                Focus on Growth. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">
                  We’ll Handle Operations
                </span>
              </h2>

              <p className="text-xl text-blue-100/60 font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
                TIM Managed NOC provides continuous monitoring, operational support, and proactive infrastructure management — helping your teams stay focused on business priorities while we maintain network stability and performance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 h-16 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-2xl shadow-blue-900/40 w-full sm:w-auto cursor-pointer">
                  <Link to={createPageUrl('ContactUs')}>Talk to our Experts</Link>
                </Button>
                <div className="flex items-center gap-3 text-blue-200/40">
                  <Activity className="w-5 h-5 animate-pulse" />
                  <span className="text-sm font-mono uppercase tracking-widest">24/7 Monitoring Ready</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-[4rem]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/30 rounded-br-[4rem]" />
          </div>
        </div>
      </section>

      <RelatedServices />
    </div>
  );
}
