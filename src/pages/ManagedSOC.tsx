import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Search, 
  ShieldCheck, 
  Activity, 
  FileText, 
  RefreshCw, 
  CheckCircle,
  AlertTriangle,
  Terminal,
  Database,
  Radar,
  Users,
  Settings
} from 'lucide-react';

import RelatedServices from '@/components/shared/RelatedServices';

export default function ManagedSOC() {
  const msocCapabilities = [
    { title: '24/7 Security Monitoring', desc: 'Continuous monitoring of logs, alerts, and security events to detect suspicious activities in real time.', icon: Activity },
    { title: 'Threat Detection & Analysis', desc: 'Advanced correlation, behavioral analysis, and threat intelligence to identify known and emerging threats.', icon: Radar },
    { title: 'Incident Response', desc: 'Rapid containment, investigation, and remediation support to minimize operational impact.', icon: Zap },
    { title: 'SIEM & Log Management', desc: 'Centralized visibility across your infrastructure for better control, audit readiness, and compliance alignment.', icon: Database },
    { title: 'Reporting & Compliance', desc: 'Detailed incident reports for executive and technical stakeholders, along with compliance-ready documentation.', icon: FileText },
    { title: 'Continuous Improvement', desc: 'Ongoing tuning, rule optimization, and security posture enhancement to stay ahead of evolving threats.', icon: RefreshCw }
  ];

  return (
    <div className="min-h-screen bg-[#00021a] text-white font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://marketing.timcorp.net.ph/hubfs/website/operations-center.jpg" 
            alt="SOC Background" 
            className="w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-[#00021a]/80 to-[#00021a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00021a] via-transparent to-transparent" />
          
          {/* Animated Scanning Line */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-red-500/30 blur-sm z-10"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8"
              >
                <Radar className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold">24/7 Threat Monitoring. Rapid Response. Complete Visibility</span>
              </motion.div>
              
              <h1 className="text-[3.5rem] lg:text-[5rem] font-bold mb-8 leading-[0.9] tracking-tighter uppercase">
                Managed <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                  Security Operations Center
                </span>
              </h1>
              
              <p className="text-lg text-red-100/60 mb-12 max-w-xl font-medium leading-relaxed">
                In today's evolving threat landscape, cyberattacks are becoming more sophisticated, persistent, and damaging making cybersecurity no longer optional, it is mission critical. TIM Managed Security Operations Center (MSOC) is a locally based SOC that delivers 24/7 monitoring, detection, and response to protect your organization from cyber threats before they impact your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 py-7 text-sm rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                  <Link to={createPageUrl('ContactUs')}>Secure Your Infrastructure</Link>
                </Button>
                <div className="flex items-center gap-4 px-6">
                  <div className="relative">
                    <Terminal className="w-5 h-5 text-red-500/50 animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  </div>
                  <span className="text-xs text-red-100/40 uppercase tracking-widest font-bold">Live Monitoring Active</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Element: Security Radar/Pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="hidden lg:flex justify-center relative"
            >
              <div className="relative w-96 h-96">
                {/* Concentric Circles */}
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                    className="absolute inset-0 border border-red-500/30 rounded-full"
                  />
                ))}
                <div className="absolute inset-0 border border-red-500/10 rounded-full" />
                <div className="absolute inset-[25%] border border-red-500/20 rounded-full" />
                <div className="absolute inset-[50%] border border-red-500/40 rounded-full" />
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Floating Threat Markers */}
                {[
                  { top: '10%', left: '20%' },
                  { top: '70%', left: '80%' },
                  { top: '40%', left: '90%' }
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
                    style={pos}
                    className="absolute w-4 h-4"
                  >
                    <AlertTriangle className="w-full h-full text-red-500" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-[#00021a] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter uppercase mb-8">
                What <span className="text-red-500">We Do</span>
              </h2>
              <div className="space-y-6 text-red-100/60 font-medium leading-relaxed text-lg">
                <p>
                  TIM Managed SOC service acts as an extension of your internal IT and security team. We continuously monitor your environment, analyze security events, and respond to threats across your entire environment, ensuring immediate action against suspicious activity.
                </p>
                <p>
                  From early threat detection to full incident containment, we provide end-to-end security coverage so your internal teams can focus on core business operations.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-red-500/20 blur-3xl rounded-full opacity-20" />
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">End-to-End Coverage</h3>
                </div>
                <ul className="space-y-4">
                  {['Real-time Intelligence', 'Proactive Defense', 'Rapid Incident Response', 'Expert Analysis'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red-100/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSOC Capabilities - Recipe 1 vibe */}
      <section className="py-32 relative overflow-hidden bg-[#00021a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-6">
              What You <span className="text-red-500">Can Expect</span>
            </h2>
            <p className="text-red-100/40 max-w-2xl mx-auto font-medium">
              Comprehensive security operations to detect, respond, and protect your organization from evolving cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {msocCapabilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-red-500/30 transition-all group backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <item.icon className="w-8 h-8 text-red-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">{item.title}</h3>
                <p className="text-red-100/40 text-sm font-medium leading-relaxed">{item.desc}</p>
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
                Why Partner <br />
                With <span className="text-red-500">TIM SOC?</span>
              </h2>
              <p className="text-red-100/40 font-medium text-lg">
                Our Managed SOC provides the expertise, technology, and 24/7 vigilance required to protect your business in an increasingly complex threat landscape.
              </p>
            </div>
            <Button asChild variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-full px-8">
              <Link to={createPageUrl('AboutUs')}>Learn More About TIM</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {[
              { icon: Zap, title: 'Agility & Faster Response', desc: 'TIM locally based SOC enables rapid escalation and direct coordination with your IT team during critical incidents — minimizing damage and downtime.' },
              { icon: Settings, title: 'Flexible Services', desc: 'We customize our security monitoring based on your infrastructure, risk profile, and compliance requirements. Technology-agnostic. Business-aligned.' },
              { icon: Users, title: 'Experienced Analysts & Local Support', desc: 'Skilled cybersecurity experts deliver accurate analysis, actionable recommendations, and clear communication.' },
              { icon: ShieldCheck, title: 'Proven Tools & Industry Standards', desc: 'We leverage enterprise-grade technologies and align with standards such as PCI-DSS, ISO 27001, and SOC 3 to strengthen your compliance posture.' }
            ].map((item, i) => (
              <div key={i} className="bg-[#00021a] p-10 hover:bg-white/[0.02] transition-colors">
                <item.icon className="w-8 h-8 text-red-500 mb-6" />
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-red-100/40 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
                
                {item.title === 'Proven Tools & Industry Standards' && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                    {[
                      { name: 'PCI-DSS', id: 'pcidss', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311' },
                      { name: 'ISO 27001', id: 'iso27001', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso%2027001.png?v=20260311' },
                      { name: 'SOC 3', id: 'soc3', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311' }
                    ].map((cert) => (
                      <Link 
                        key={cert.id}
                        to={`${createPageUrl('Compliance')}#${cert.id}`}
                        className="h-10 px-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-red-500/30 transition-all group/badge"
                        title={`View ${cert.name} Certification`}
                      >
                        <img 
                          src={cert.logo} 
                          alt={cert.name} 
                          className="h-6 w-auto object-contain opacity-50 group-hover/badge:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 bg-[#00021a] relative overflow-hidden border-t border-white/5">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="p-12 lg:p-24 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8">
                <Shield className="w-4 h-4 text-red-400" />
                <span className="text-xs uppercase tracking-widest text-red-400 font-bold">Secure Your Perimeter</span>
              </div>

              <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                Security is a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-800">
                  Partnership
                </span>
              </h2>

              <p className="text-xl text-red-100/60 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                We don’t just detect threats. We respond, collaborate, and continuously improve your security posture. With TIM, you gain a responsive, reliable, and scalable security partner not just a SOC provider.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 h-16 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-2xl shadow-red-900/40 w-full sm:w-auto">
                  <Link to={createPageUrl('ContactUs')}>Partner with Us</Link>
                </Button>
                <div className="flex items-center gap-3 text-red-200/40">
                  <Radar className="w-5 h-5 animate-pulse" />
                  <span className="text-sm font-mono uppercase tracking-widest">24/7 Monitoring Ready</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-500/30 rounded-tl-[4rem]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-500/30 rounded-br-[4rem]" />
          </div>
        </div>
      </section>

      <RelatedServices />
    </div>
  );
}
