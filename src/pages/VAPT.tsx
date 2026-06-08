import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Search, 
  Target, 
  ShieldAlert, 
  CheckCircle, 
  Users, 
  Zap, 
  FileText, 
  Lock,
  Bug,
  Code,
  Eye,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

import RelatedServices from '@/components/shared/RelatedServices';

export default function VAPT() {
  return (
    <div className="min-h-screen bg-[#00021a] text-white font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000" 
            alt="VAPT Background" 
            className="w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-[#00021a]/80 to-[#00021a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00021a] via-transparent to-transparent" />
          
          {/* Animated Binary Rain Effect (Simplified) */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden select-none font-mono text-[10px] leading-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100 }}
                animate={{ y: 1000 }}
                transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                className="absolute text-emerald-500"
                style={{ left: `${i * 5}%` }}
              >
                {Array.from({ length: 50 }).map(() => Math.round(Math.random())).join('\n')}
              </motion.div>
            ))}
          </div>
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8"
              >
                <Code className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-bold">Vulnerability Assessment & Penetration Testing</span>
              </motion.div>
              
              <h1 className="text-[3.5rem] lg:text-[6rem] font-bold mb-8 leading-[0.9] tracking-tighter uppercase">
                Find the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600">
                  Weak Link
                </span>
              </h1>
              
              <p className="text-xl text-emerald-100/60 mb-12 max-w-xl font-medium leading-relaxed">
                In today's fast-paced digital world, cyber threats are constantly changing. TIM VAPT services help identify weaknesses and provide actionable insights to strengthen your security posture.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-7 text-sm rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <Link to={createPageUrl('ContactUs')}>Start Assessment</Link>
                </Button>
                <div className="flex items-center gap-4 px-6">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs text-emerald-100/40 uppercase tracking-widest font-bold">Ethical Hacking Lab</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Element: Terminal Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative p-6 rounded-2xl bg-black border border-emerald-500/20 shadow-2xl font-mono text-xs text-emerald-500/80">
                <div className="flex gap-2 mb-4 border-b border-emerald-500/10 pb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  <div className="ml-4 text-[10px] opacity-40 uppercase tracking-widest">vapt_scan_v2.sh</div>
                </div>
                <div className="space-y-1">
                  <p>$ nmap -sV -p- 192.168.1.105</p>
                  <p className="text-emerald-400">Starting Nmap 7.80 ( https://nmap.org )</p>
                  <p>Nmap scan report for target-srv (192.168.1.105)</p>
                  <p>Host is up (0.00045s latency).</p>
                  <p>PORT     STATE SERVICE VERSION</p>
                  <p>22/tcp   open  ssh     OpenSSH 7.6p1</p>
                  <p>80/tcp   open  http    Apache httpd 2.4.29</p>
                  <p>443/tcp  open  ssl/http Apache httpd 2.4.29</p>
                  <p className="text-red-500/90 font-bold mt-4">Critical Findings: 2</p>
                  <p className="text-amber-500/90 font-bold">High Risk Findings: 5</p>
                  <p className="text-emerald-500/80 mt-2">Exposed Services Detected</p>
                  <p className="text-emerald-500/80">Outdated SSL/TLS Configuration</p>
                  <p className="text-emerald-500/80">Weak Authentication Policy</p>
                  <p className="text-emerald-600/60 mt-2">Vulnerability ID: CVE-2023-4863 | CVSS Score: 9.8 (CRITICAL)</p>
                  <p className="text-emerald-600/60">Asset Classification: Production-External-IP</p>
                  <motion.p 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-emerald-500 ml-1"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is VAPT? - Recipe 1 vibe */}
      <section className="py-32 bg-[#00021a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-8">
                What is <span className="text-emerald-500">VAPT?</span>
              </h2>
              <p className="text-emerald-100/60 font-medium leading-relaxed mb-6">
                Vulnerability Assessment and Penetration Testing (VAPT) helps organizations identify, validate, and remediate security weaknesses across infrastructure, applications, and cloud environments.
              </p>
              <p className="text-emerald-100/40 text-sm font-medium leading-relaxed">
                Vulnerability Assessment focuses on identifying security gaps and misconfigurations, while Penetration Testing simulates real-world attack scenarios to validate exploitability and business impact.
              </p>
            </motion.div>
            
            <div className="grid gap-6">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 uppercase tracking-tight">Vulnerability Assessment (VA)</h3>
                <p className="text-emerald-100/40 text-sm font-medium">Focuses on identifying vulnerabilities and configuration issues that could expose the organization to risk.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 uppercase tracking-tight">Penetration Testing (PT)</h3>
                <p className="text-emerald-100/40 text-sm font-medium">Goal-driven testing that identifies possible entry points and determines the potential impact if vulnerabilities are exploited.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Business Needs VAPT? - Recipe 5 vibe */}
      <section className="py-32 bg-[#00021a] text-white relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.8]">
              Why Your <br />
              <span className="text-emerald-500">Business Needs VAPT?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: 'Identify Weak Points', desc: 'Detect security gaps in networks, applications, and endpoints before attackers do.', icon: Search },
              { title: 'Prevent Data Breaches', desc: 'Reduce the risk of costly data leaks and system compromises.', icon: ShieldAlert },
              { title: 'Ensure Compliance', desc: 'Meet industry standards and regulatory requirements such as ISO 27001, PCI-DSS, SOC 2 Type II, and ISO 22301.', icon: ShieldCheck },
              { title: 'Build Trust', desc: 'Show clients and partners that your business prioritizes cybersecurity.', icon: Lock },
              { title: 'Cost-Effective Security', desc: 'Identifying and fixing vulnerabilities early is more cost-effective than dealing with the aftermath of a breach.', icon: Zap }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all backdrop-blur-sm"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">{item.title}</h3>
                  <p className="text-emerald-100/40 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TIM VAPT? - Recipe 12 vibe */}
      <section className="py-32 bg-[#00021a] text-white relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.8] mb-12">
                Why <span className="text-emerald-500 italic">TIM VAPT?</span>
              </h2>
              <div className="space-y-10">
                {[
                  { title: 'Expertise and Experience', desc: 'Certified security professionals with experience conducting VAPT engagements across enterprise infrastructure, applications, and cloud environments.', icon: Users },
                  { title: 'Comprehensive Testing', desc: 'We provide a thorough evaluation of your entire IT infrastructure, including networks, applications, and cloud environments.', icon: ShieldCheck },
                  { title: 'Actionable Insights', desc: 'Our detailed reports provide clear, prioritized recommendations for remediating identified vulnerabilities.', icon: FileText },
                  { title: 'Continuous Support', desc: 'We offer ongoing support and guidance to help you maintain a strong security posture.', icon: RefreshCw },
                  { title: 'Compliance Alignment', desc: 'Our VAPT services help you meet industry standards and regulatory requirements, such as PCI-DSS, HIPAA, and GDPR.', icon: Target }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <item.icon className="w-5 h-5 text-emerald-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight mb-2 text-white">{item.title}</h3>
                      <p className="text-emerald-100/40 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Security Expert" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 p-10 rounded-3xl bg-emerald-600 text-white shadow-xl max-w-xs backdrop-blur-md">
                <p className="text-lg italic mb-4">"Protect Your Business Proactively"</p>
                <p className="text-xs uppercase tracking-widest opacity-70">TIM Security Lab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 bg-[#00021a] relative overflow-hidden border-t border-white/5">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="p-12 lg:p-24 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Secure Your Perimeter</span>
              </div>

              <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                Protect Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-800">
                  Business Proactively
                </span>
              </h2>

              <p className="text-xl text-emerald-100/60 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                Cyber threats can target any organization, regardless of size or industry. Partner with TIM, a local trusted VAPT provider to stay ahead of attackers, safeguard sensitive information, and maintain business continuity.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 h-16 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-2xl shadow-emerald-900/40 w-full sm:w-auto cursor-pointer">
                  <Link to={createPageUrl('ContactUs')}>Talk to our security expert</Link>
                </Button>
                <div className="flex items-center gap-3 text-emerald-200/40">
                  <Bug className="w-5 h-5 animate-pulse" />
                  <span className="text-sm font-mono uppercase tracking-widest">Security Lab Active</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-[4rem]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-emerald-500/30 rounded-br-[4rem]" />
          </div>
        </div>
      </section>

      <RelatedServices />
    </div>
  );
}
