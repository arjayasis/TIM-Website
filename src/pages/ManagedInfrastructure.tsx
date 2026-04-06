import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Database, 
  ShieldCheck, 
  Cloud, 
  Activity, 
  Zap, 
  CheckCircle2,
  Headphones,
  ArrowRight,
  Cpu,
  Shield,
  Network
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import RelatedServices from '@/components/shared/RelatedServices';
import InfraAnimatedVisual from '@/components/tim/InfraAnimatedVisual';

const heavyLiftingItems = [
  {
    title: "Virtualization & Server Management",
    desc: "Expert management of your VMWare ESX environment. We handle the guests and hosts, ensuring your virtual machines are optimized for peak performance and stability.",
    icon: Server,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Managed Backup & Data Protection",
    desc: "We manage the hardware and software for your backup services. From daily snapshots to long-term archiving, your critical data is in expert hands.",
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    title: "Seamless Cloud Replication",
    desc: "For an extra layer of safety, we handle the replication of local backups to the TIM Cloud. If your local site goes down, your business stays up.",
    icon: Cloud,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  },
  {
    title: "24/7 Infrastructure Monitoring",
    desc: "Our team provides constant oversight of your backup infrastructure. We catch failures, monitor storage capacity, and ensure your recovery points are always valid.",
    icon: Activity,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    title: "Disaster Recovery as a Service",
    desc: "When the unexpected happens, we’re ready. We support your specific disaster recovery requirements to ensure your business can resume operations with minimal downtime.",
    icon: ShieldCheck,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  }
];

const whyChooseItems = [
  {
    title: "Total Peace of Mind",
    desc: "We don’t just \"watch\" your systems; we proactively maintain them so issues are fixed before they impact your users.",
    icon: CheckCircle2,
    accent: "text-blue-400"
  },
  {
    title: "One Point of Contact",
    desc: "Say goodbye to juggling multiple vendors. We manage the hardware, software, and hosting relationships for you.",
    icon: Headphones,
    accent: "text-cyan-400"
  },
  {
    title: "Built-in Resilience",
    desc: "Disasters happen, but they don't have to be catastrophic. We ensure your data is always backed up and ready for a swift recovery.",
    icon: Zap,
    accent: "text-amber-400"
  }
];

export default function ManagedInfrastructure() {
  return (
    <div className="min-h-screen bg-[#00021a] text-white overflow-hidden">
      
      {/* Hero Section - Cyber Command Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-blue-500/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full" />
          
          {/* Scanning Line */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent origin-center"
          />

          {/* Floating Data Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
              initial={{ 
                x: Math.random() * 2000 - 1000, 
                y: Math.random() * 2000 - 1000 
              }}
              animate={{ 
                y: [0, -200, 0],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ 
                duration: 10 + Math.random() * 15, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-md"
              >
                <Cpu className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Infrastructure Management</span>
              </motion.div>

              <h1 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">
                Focus on <br /> your business. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                  We’ll handle <br /> the rest.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100/60 leading-relaxed mb-12 max-w-xl font-medium">
                Stop worrying about server uptime and backup logs. Our Managed Infrastructure services give you a dedicated team to manage, monitor, and protect your IT environment 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 text-lg rounded-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  <a href="mailto:inquiry@timcorp.net.ph">Contact Us</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <InfraAnimatedVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Heavy Lifting Section - Dark HUD Style */}
      <section className="py-32 bg-[#00021a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-6">Service Capabilities</h2>
                <h3 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                  We take care of the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">technical <br /> heavy lifting.</span>
                </h3>
                <p className="text-xl text-blue-100/40 font-medium leading-relaxed mb-12 max-w-md">
                  Managing infrastructure shouldn't be your bottleneck. We provide the expertise and tools to keep your systems running at peak performance.
                </p>
              </motion.div>

              <div className="grid gap-4">
                {heavyLiftingItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-500"
                  >
                    <div className="flex gap-6 items-center">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                        <p className="text-blue-100/40 font-medium text-sm leading-relaxed hidden group-hover:block mt-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 p-12 flex items-center justify-center overflow-hidden"
            >
              {/* Animated HUD Graphic */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-blue-400 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-blue-600/20 border border-blue-500/30 backdrop-blur-xl flex flex-col items-center justify-center text-center">
                  <Shield className="w-12 h-12 text-blue-400 mb-4" />
                  <span className="text-xs uppercase tracking-widest font-bold">Secure</span>
                </div>
                <div className="p-8 rounded-3xl bg-cyan-600/20 border border-cyan-500/30 backdrop-blur-xl flex flex-col items-center justify-center text-center">
                  <Network className="w-12 h-12 text-cyan-400 mb-4" />
                  <span className="text-xs uppercase tracking-widest font-bold">Connected</span>
                </div>
                <div className="p-8 rounded-3xl bg-emerald-600/20 border border-emerald-500/30 backdrop-blur-xl flex flex-col items-center justify-center text-center">
                  <Database className="w-12 h-12 text-emerald-400 mb-4" />
                  <span className="text-xs uppercase tracking-widest font-bold">Protected</span>
                </div>
                <div className="p-8 rounded-3xl bg-amber-600/20 border border-amber-500/30 backdrop-blur-xl flex flex-col items-center justify-center text-center">
                  <Activity className="w-12 h-12 text-amber-400 mb-4" />
                  <span className="text-xs uppercase tracking-widest font-bold">Monitored</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Bento Grid Style */}
      <section className="py-32 bg-[#00021a] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-6">Strategic Partnership</h2>
              <h3 className="text-4xl lg:text-8xl font-black mb-8 tracking-tighter uppercase">Your IT, simplified.</h3>
              <p className="text-xl text-blue-100/40 max-w-3xl mx-auto font-medium leading-relaxed">
                Managing a modern IT stack is a full-time job—often several. By partnering with us, you gain a seamless extension of your team that ensures your systems are always fast, secure, and available.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-xl hover:border-blue-500/30 transition-all overflow-hidden"
              >
                <div className={`absolute -right-8 -top-8 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className={`w-8 h-8 ${item.accent}`} />
                  </div>
                  <h4 className="text-2xl font-bold mb-6 uppercase tracking-tight text-white">{item.title}</h4>
                  <p className="text-blue-100/40 leading-relaxed font-medium text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - High Impact HUD */}
      <section className="py-32 bg-[#00021a] relative overflow-hidden border-t border-white/5">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="p-12 lg:p-24 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
                <Activity className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Infrastructure Audit</span>
              </div>

              <h2 className="text-4xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">
                  reclaim your time?
                </span>
              </h2>

              <p className="text-xl text-blue-100/60 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                Let’s discuss how we can streamline your operations and take the "management" off your plate. Whether you need full hosting or just a smarter backup strategy, we’re here to help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 h-16 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-2xl shadow-blue-900/40 w-full sm:w-auto">
                  <a href="mailto:inquiry@timcorp.net.ph" className="flex items-center gap-4">
                    Get a Free Audit
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </Button>
                <div className="flex items-center gap-3 text-blue-200/40">
                  <Server className="w-5 h-5 animate-pulse" />
                  <span className="text-sm font-mono uppercase tracking-widest">Systems Ready</span>
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
