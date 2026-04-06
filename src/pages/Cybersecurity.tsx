import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Shield, 
  Brain, 
  Zap, 
  CheckCircle, 
  Globe, 
  Lock, 
  Activity, 
  Terminal,
  AlertTriangle,
  Radar,
  Cpu,
  Database,
  Network,
  Users
} from 'lucide-react';
import RelatedServices from '@/components/shared/RelatedServices';
import NISTFrameworkDiagram from '@/components/tim/NISTFrameworkDiagram';
import NISTDefinitions from '@/components/tim/NISTDefinitions';

export default function Cybersecurity() {
  const [activeThreat, setActiveThreat] = useState(0);
  const radarContainerRef = useRef<HTMLDivElement>(null);
  
  // Interactive Radar Logic
  const rotateSpring = useSpring(0, {
    stiffness: 100,
    damping: 30
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!radarContainerRef.current) return;
    const rect = radarContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate angle in degrees
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    
    // Adjust by 90 degrees because the beam starts pointing towards the top-right
    rotateSpring.set(angle + 90);
  };

  const handleMouseLeave = () => {
    // Optional: could reset or resume auto-rotation
    // For now, let's just let it stay where it was or we could resume animation
  };
  
  const threats = [
    { type: 'DDoS Attack', origin: 'Eastern Europe', status: 'Mitigated', intensity: 'High' },
    { type: 'Phishing Campaign', origin: 'Southeast Asia', status: 'Blocked', intensity: 'Medium' },
    { type: 'Zero-Day Exploit', origin: 'Unknown', status: 'Isolated', intensity: 'Critical' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThreat((prev) => (prev + 1) % threats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#00021a] text-white overflow-hidden font-sans">
      
      {/* Hero Section - The Digital Command Center */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Cyber Command Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,transparent_70%)] opacity-30" />
          
          {/* Scanning Radar Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/10 rounded-full">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 w-1/2 h-px bg-gradient-to-r from-blue-500 to-transparent origin-left"
            />
          </div>

          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            alt="Cyber Command"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8 backdrop-blur-md">
                <Activity className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-red-400 font-black">Live Defense Active</span>
              </div>

              <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                Smart defense <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-red-600">
                  for a safer business.
                </span>
              </h1>
              
              <p className="text-xl text-blue-100/60 leading-relaxed mb-12 max-w-xl font-medium">
                You focus on growing your business; we’ll handle the threats. From 24/7 monitoring to rapid recovery, we build the digital shield your team deserves.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-blue-900/40">
                  <Link to={createPageUrl('ContactUs')}>Initialize Protection</Link>
                </Button>
                <div className="flex items-center gap-4 px-6 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#00021a] bg-blue-500 flex items-center justify-center text-[10px] font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-blue-200/60">500+ Enterprises Protected</span>
                </div>
              </div>
            </motion.div>

            {/* Live Threat Monitor Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2 }}
              className="hidden lg:block relative"
            >
              <div className="p-8 rounded-[2.5rem] border border-white/10 bg-[#0a0c2e]/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Threat_Monitor_v4.2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-500 uppercase">System Optimal</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeThreat}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/5"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Active Threat Detected</span>
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] text-white/40 uppercase mb-1">Type</p>
                          <p className="text-sm font-bold text-white">{threats[activeThreat].type}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase mb-1">Origin</p>
                          <p className="text-sm font-bold text-white">{threats[activeThreat].origin}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase mb-1">Intensity</p>
                          <p className="text-sm font-bold text-red-500">{threats[activeThreat].intensity}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase mb-1">Status</p>
                          <p className="text-sm font-bold text-emerald-500">{threats[activeThreat].status}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Latency', val: '12ms', color: 'text-blue-400' },
                      { label: 'Uptime', val: '99.99%', color: 'text-emerald-400' },
                      { label: 'Nodes', val: '124', color: 'text-purple-400' },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                        <p className="text-[9px] text-white/40 uppercase mb-1">{stat.label}</p>
                        <p className={`text-sm font-bold ${stat.color}`}>{stat.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Grid Lines */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                  <Radar className="w-full h-full text-blue-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NIST Operating System Section */}
      <section className="py-32 bg-[#00021a] text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">The Core Logic</span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-bold mb-8 tracking-tighter uppercase text-white">
                THE <span className="text-blue-500">NIST</span> FRAMEWORK
              </h2>
              <p className="text-xl text-blue-100/60 max-w-3xl mx-auto font-medium leading-relaxed">
                Our defense strategy is built on the globally recognized NIST Cybersecurity Framework, 
                ensuring a comprehensive approach from identification to recovery.
              </p>
            </motion.div>
          </div>

          <NISTFrameworkDiagram />
          <NISTDefinitions />
        </div>
      </section>

      {/* Security Infrastructure Stats */}
      <section className="py-24 bg-[#00021a] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { icon: Globe, label: 'Global PoPs', val: '5' },
              { icon: ShieldCheck, label: 'Compliance Standards', val: 'ISO/NIST' },
              { icon: Zap, label: 'Mitigation Speed', val: '< 10ms' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-6 opacity-50" />
                <p className="text-3xl lg:text-5xl font-black mb-2 tracking-tighter">{stat.val}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/40 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with TIM Section */}
      <section className="py-32 bg-[#00021a] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Your Trusted Partner</span>
              </div>
              
              <h2 className="text-4xl lg:text-7xl font-bold mb-8 tracking-tighter uppercase leading-[0.9]">
                Why Partner with <br />
                <span className="text-blue-500">TIM for Your Security?</span>
              </h2>
              
              <p className="text-xl text-blue-100/60 font-medium leading-relaxed mb-12">
                Choosing a security partner is about more than just buying software—it’s about finding a team you can trust when it matters most. Here’s how we make a difference for your business:
              </p>

              <div 
                ref={radarContainerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative aspect-square max-w-md mx-auto lg:mx-0 cursor-crosshair group/radar"
              >
                {/* Cybersecurity Animation Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer Rotating Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full border-2 border-dashed border-blue-500/20 rounded-full"
                  />
                  
                  {/* Middle Counter-Rotating Ring */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[80%] h-[80%] border border-blue-400/30 rounded-full"
                  />
 
                  {/* Inner Pulsing Ring */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[60%] h-[60%] bg-blue-500/5 rounded-full"
                  />
 
                  {/* Central Shield with Glow */}
                  <div className="relative z-10">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      <div className="absolute -inset-8 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
                      <div className="w-32 h-32 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-900/40 relative z-10">
                        <ShieldCheck className="w-16 h-16 text-white" />
                      </div>
                    </motion.div>
                  </div>
 
                  {/* Orbiting Security Nodes */}
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute w-full h-full"
                      style={{ rotate: angle }}
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#00021a] border border-blue-500/30 shadow-lg flex items-center justify-center"
                      >
                        {i === 0 && <Lock className="w-5 h-5 text-blue-400" />}
                        {i === 1 && <Zap className="w-5 h-5 text-blue-400" />}
                        {i === 2 && <Activity className="w-5 h-5 text-blue-400" />}
                      </motion.div>
                    </motion.div>
                  ))}
 
                  {/* Radar Sweep - Now Interactive */}
                  <motion.div 
                    style={{ rotate: rotateSpring }}
                    className="absolute w-full h-full pointer-events-none"
                  >
                    <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/40 to-transparent origin-bottom-left rounded-tr-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
 
            <div className="space-y-12 pt-12">
              {[
                {
                  title: "1. We Speak Business, Not Just Code",
                  desc: "We don’t just throw technical jargon at you. We take the time to understand your specific industry, your goals, and your risks, translating complex security needs into clear, actionable business strategies.",
                  icon: Brain
                },
                {
                  title: "2. Proactive, Not Just Reactive",
                  desc: "Most security providers wait for an alarm to go off. We work around the clock to hunt for threats before they ever reach your network. We don’t just \"fix\" problems; we prevent them from happening in the first place.",
                  icon: ShieldCheck
                },
                {
                  title: "3. A Safety Net That Never Sleeps",
                  desc: "Cyber threats don't stick to a 9-to-5 schedule, and neither do we. Our experts are always on standby, giving you the peace of mind to disconnect at the end of the day, knowing your digital assets are being watched by pros.",
                  icon: Activity
                },
                {
                  title: "4. Security That Scales With You",
                  desc: "Whether you’re a growing startup or an established enterprise, our solutions are built to be flexible. We provide the \"right-sized\" security you need today, with a clear roadmap for wherever you go tomorrow.",
                  icon: Zap
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-500">
                      <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-blue-100/60 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cybersecurity CTA Section */}
      <section className="py-32 bg-[#00021a] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="p-12 lg:p-24 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden text-center">
            {/* Animated Grid Background for Card */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Secure Your Perimeter</span>
              </div>

              <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                Secure your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-red-600">
                  business today.
                </span>
              </h2>

              <p className="text-xl text-blue-100/60 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                Stop worrying about "what if" and start growing with confidence. 
                Our team is ready to build your custom defense shield.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 h-16 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-2xl shadow-blue-900/40 w-full sm:w-auto">
                  <Link to={createPageUrl('ContactUs')}>Initialize Protection</Link>
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
