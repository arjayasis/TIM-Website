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
    { title: '24/7 Security Monitoring', desc: 'Continuous round-the-clock monitoring of logs, alerts, and security events to detect suspicious activities in real time.', icon: Activity },
    { title: 'Real-time Threat Intelligence', desc: 'Integration of global threat feeds and localized telemetry to identify emerging attack vectors.', icon: Radar },
    { title: 'Proactive Threat Hunting', desc: 'Actively searching for hidden threats and vulnerabilities within your networks before they can trigger an alert.', icon: Search },
    { title: 'Rapid Incident Response', desc: 'Swift containment, verification, and guided remediation support to minimize operational impact and neutralize threats.', icon: Zap },
    { title: 'Expert Analysis', desc: 'Dedicated security analysts investigating complex alerts to separate genuine threats from false positives.', icon: ShieldCheck }
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
              
              <h1 className="text-2xl sm:text-4xl lg:text-[2.5rem] xl:text-[3rem] font-bold mb-8 leading-[1.1] tracking-tighter uppercase">
                <span className="block">Cyber threats are</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                  evolving faster than ever
                </span>
              </h1>
              
              <p className="text-lg text-red-100/60 mb-12 max-w-xl font-medium leading-relaxed">
                TIM Managed Security Operations Center (MSOC) delivers 24/7 security monitoring, advanced threat detection, and rapid incident response through a locally operated Security Operations Center (SOC), helping organizations proactively defend against cyber threats before they impact business operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 py-7 text-sm rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                  <Link to={createPageUrl('ContactUs')}>Talk to a Security Expert</Link>
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
                  TIM Managed SOC acts as your trusted cybersecurity partner, seamlessly augmenting your IT and security teams with 24/7 monitoring, intelligent threat detection, and swift incident response.
                </p>
                <p>
                  Our dedicated analysts manage the entire security lifecycle—from detecting threats before they escalate to containing incidents and restoring normal operations—helping your organization stay resilient, secure, and focused on business growth.
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
                  <h3 className="text-xl font-bold uppercase tracking-tight">Core Competencies</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    '24x7 monitoring',
                    'real-time threat intelligence',
                    'proactive threat hunting',
                    'rapid incident response',
                    'expert analysis'
                  ].map((item, i) => (
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
            <p className="text-red-100/40 max-w-2xl mx-auto font-medium text-base sm:text-lg">
              Comprehensive security operations to detect, respond, and protect your organization from evolving cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
            <div className="max-w-4xl">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-6">
                Why Partner <br />
                With <span className="text-red-500">TIM MSOC?</span>
              </h2>
              <p className="text-red-100/40 font-medium text-lg leading-relaxed max-w-3xl">
                TIM MSOC provides around-the-clock security operations powered by cutting-edge technologies and a dedicated team of cybersecurity experts. With proactive threat monitoring, swift incident response, and continuous security oversight, we help organizations stay ahead of cyber threats, minimize operational disruption, and strengthen their overall cyber resilience.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {[
              { icon: Zap, title: 'Agility & Faster Response', desc: 'TIM locally based SOC enables rapid escalation and direct coordination with your IT team during critical incidents — minimizing damage and downtime.' },
              { icon: Settings, title: 'Flexible Services', desc: 'We customize our service offerings based on your infrastructure, risk profile, and compliance requirements.' },
              { icon: Users, title: 'Local Expertise and Dedicated Support', desc: 'Our fully homegrown team of cybersecurity analysts and engineers delivers rapid response, expert guidance, and responsive local support tailored to the local threat landscape.' },
              { icon: ShieldCheck, title: 'Proven Tools & Industry Standards', desc: 'We leverage enterprise-grade technologies and align with standards such as PCI-DSS, ISO 27001, SOC 2 Type II, HIPAA, and DTAP to strengthen your compliance posture.' }
            ].map((item, i) => (
              <div key={i} className="bg-[#00021a] p-10 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-between">
                <div>
                  <item.icon className="w-8 h-8 text-red-500 mb-6" />
                  <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-red-100/40 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
                </div>
                
                {item.title === 'Proven Tools & Industry Standards' && (
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                    {[
                      { name: 'PCI-DSS', id: 'pcidss', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311' },
                      { name: 'ISO 27001', id: 'iso27001', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso%2027001.png?v=20260311' },
                      { name: 'SOC 2 Type II', id: 'soc2', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311' },
                      { name: 'HIPAA', id: 'hipaa', logo: 'https://marketing.timcorp.net.ph/hubfs/website/hipaa_asset.png' },
                      { name: 'DTAP', id: 'dict-dtap', logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/DTAP-Logo.png' }
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
                Security Beyond <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-800">
                  Monitoring
                </span>
              </h2>

              <p className="text-xl text-red-100/60 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                We don’t just detect threats. We respond, collaborate, and continuously improve your security posture. With TIM, you gain a responsive, reliable, and scalable security partner — not just a SOC provider.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 h-16 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-2xl shadow-red-900/40 w-full sm:w-auto">
                  <Link to={createPageUrl('ContactUs')}>Talk to a Security Expert</Link>
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
