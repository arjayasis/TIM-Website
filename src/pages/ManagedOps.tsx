import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Monitor, Shield, Zap, Clock, CheckCircle, Settings, Users, BarChart, Network, ShieldAlert, Activity, Search, FileText } from 'lucide-react';
import CTASection from '@/components/tim/CTASection';

export default function ManagedOps() {
  return (
    <div className="min-h-screen bg-[#00021a] text-white">
      
      {/* Hero Section - The Vigilance Theme */}
      <section className="relative min-h-screen pt-36 pb-20 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://marketing.timcorp.net.ph/hubfs/website/operations-center.jpg"
            alt="Operations Center"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00021a] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">24/7/365 Managed Operations</span>
            </div>
            
            <h1 className="text-[3.375rem] lg:text-[6.75rem] font-avantgarde font-bold mb-12 leading-[0.9] tracking-tighter uppercase">
              BE VIGILANT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                YOUR BUSINESS MATTERS
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100/80 leading-relaxed mb-12 max-w-2xl font-medium">
              TIM’s Managed Operations Centers (MNOC & MSOC) deliver proactive incident response and protection against network disruptions and evolving cyber threats.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-sm rounded-full transition-all hover:scale-105">
                <Link to={createPageUrl('ContactUs')}>Secure Your Business</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MNOC Section - The First Line of Defense */}
      <section className="py-32 bg-[#00021a] text-white relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
                <Network className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">TIM MNOC</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
                Your First Line <br /> of Defense
              </h2>
              
              <p className="text-xl text-blue-100/60 leading-relaxed mb-12 font-medium">
                A centralized location from which network administrators and engineers monitor and manage network activity 24/7.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Enhanced Security',
                  'Proactive Support',
                  'Increased Reliability',
                  'Enhanced Efficiency',
                  'Elevated Performance',
                  'Scalability & Flexibility'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="font-bold text-white/80 text-sm uppercase tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
                alt="MNOC Operations"
                className="relative w-full rounded-3xl shadow-2xl border border-white/10 opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* MNOC Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {[
              { icon: Activity, title: 'Monitoring', desc: 'Continuous oversight of network performance and health.' },
              { icon: ShieldAlert, title: 'Event Management', desc: 'Correct identification and analysis of potential incidents.' },
              { icon: BarChart, title: 'Traffic Analysis', desc: 'Proactive detection of abnormalities causing disruption.' },
              { icon: Settings, title: 'Configuration Control', desc: 'Managing network infrastructure settings and updates.' },
              { icon: Zap, title: 'Fault Detection', desc: 'Near real-time detection and response to network issues.' },
              { icon: Search, title: 'Diagnosis', desc: 'Investigating and analyzing connectivity problems.' },
              { icon: Clock, title: 'Maintenance', desc: 'Ensuring infrastructure performs efficiently 24/7.' },
              { icon: FileText, title: 'SLA Reporting', desc: 'Regular reporting on performance and telco compliance.' }
            ].map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#00021a] p-10 hover:bg-blue-600/5 transition-colors group"
              >
                <activity.icon className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-base font-black mb-3 uppercase tracking-tight text-white">{activity.title}</h3>
                <p className="text-sm text-blue-100/40 leading-relaxed font-medium">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MSOC Section - The Cyber Defense Theme */}
      <section className="py-32 bg-[#00021a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                alt="MSOC Operations"
                className="w-full rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.1)] border border-white/10 opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8 text-red-400">
                <Shield className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-bold">TIM MSOC</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
                Countering <br /> Sophisticated Threats
              </h2>
              
              <p className="text-xl text-blue-100/40 leading-relaxed mb-12 font-medium">
                Built as a response to increased cyber threats. Our MSOC is ran by information security experts to monitor, analyze, and improve your cybersecurity posture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Security Monitoring',
                  'Vulnerability Assessment',
                  'Endpoint Detection',
                  'Data Forensics',
                  'Anti-DDoS Solutions',
                  'Threat Intelligence'
                ].map((offering) => (
                  <div key={offering} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <span className="text-white/80 text-sm font-bold uppercase tracking-tight">{offering}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* MSOC Activities Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Threat Hunting', desc: 'Proactively searching for cyber threats that are lurking undetected in the network.' },
              { title: 'Triaging', desc: 'Prioritizing security alerts to determine the order in which they should be investigated.' },
              { title: 'Security Log Analysis', desc: 'Reviewing and analyzing logs from various systems to detect suspicious activity.' },
              { title: 'Fine-tuning of Rules', desc: 'Continuously optimizing security rules to minimize false positives and negatives.' },
              { title: 'Incident Response', desc: 'Rapidly responding to emerging and sophisticated cybersecurity threats.' },
              { title: 'Brand Reputation', desc: 'Monitoring for brand-related threats and protecting your digital identity.' }
            ].map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-xl"
              >
                <h3 className="text-lg font-black mb-4 text-red-400 uppercase tracking-tight">{activity.title}</h3>
                <p className="text-blue-100/40 leading-relaxed font-medium">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TIM Section - Minimalist & Bold */}
      <section className="py-32 bg-[#00021a] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-6xl font-black leading-[0.9] tracking-tighter uppercase">
                WHY TIM MANAGED <br /> OPERATIONS?
              </h2>
            </div>
            <p className="text-xl text-blue-100/40 max-w-sm font-medium">
              We help organizations achieve compliance and improve overall security posture through global standard processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Zap, title: 'Flexibility', desc: 'Adaptable service solutions tailored to your evolving business requirements.' },
              { icon: Users, title: 'Certified Analysts', desc: 'Staffed by highly qualified ethical hackers and certified NOC analysts.' },
              { icon: Clock, title: '24x7 Operations', desc: 'Continuous monitoring and support since 1994.' },
              { icon: Settings, title: 'Global Standard Processes', desc: 'Holistic package of professionals using top-tier tools and defined processes.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors border border-blue-500/20">
                  <item.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-blue-100/40 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
