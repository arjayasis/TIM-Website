import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { createPageUrl } from '@/utils';
import CTASection from '@/components/tim/CTASection';
import { Shield, CheckCircle2, Award, Server, Lock, FileCheck, Globe, Activity, Clock, Target, TrendingUp, MessageSquare, Briefcase, Users, ChevronRight, ChevronLeft, Quote, Settings, MapPin, Flag, Navigation, BookOpen, Trophy } from 'lucide-react';

const certifications = [
  {
    id: 'iso9001',
    name: 'ISO 9001',
    title: 'ISO 9001: Quality Management Systems (QMS)',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/high%20res.png?v=20260311',
    desc: 'ISO 9001 is the international standard for a quality management system. It ensures that an organization consistently provides products and services that meet customer and regulatory requirements.',
    meaning: 'This is our promise of reliability. It guarantees that our internal processes—from project management to customer support—are standardized, efficient, and focused on continuous improvement to better serve your business goals.',
    icon: Award
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    title: 'ISO 27001: Information Security Management Systems (ISMS)',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso%2027001.png?v=20260311',
    desc: 'ISO 27001 is the gold standard for managing information security. It defines the requirements for establishing, implementing, and maintaining a robust security framework.',
    meaning: 'Your data is shielded by world-class defense layers. This certification confirms that we have rigorous controls in place to manage risks related to data security, ensuring the confidentiality and integrity of your sensitive information.',
    icon: Lock
  },
  {
    id: 'soc3',
    name: 'SOC 3',
    title: 'AICPA SOC 3',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311',
    desc: "SOC 3 reports are designed for users who need confidence in a service organization's controls but do not need the detailed information found in a SOC 2 report. It is a public-facing report that provides a high-level summary of the organization's security, availability, and privacy.",
    meaning: 'The SOC 3 report provides a publicly available summary of our internal controls, offering transparency and assurance to our clients and partners. It confirms that our systems meet the highest standards for security and reliability without exposing sensitive operational details.',
    icon: FileCheck
  },
  {
    id: 'pcidss',
    name: 'PCI-DSS',
    title: 'PCI-DSS Certified',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311',
    desc: 'PCI-DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.',
    meaning: "If your business involves financial transactions, our compliance reduces your risk. We provide a hardened infrastructure that prevents data breaches and protects your customers' payment information.",
    icon: Shield
  },
  {
    id: 'iso22301',
    name: 'ISO 22301',
    title: 'ISO 22301: Business Continuity Management',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso-22301.png?v=20260311',
    desc: 'ISO 22301 is the international standard for Business Continuity Management Systems (BCMS). It helps organizations prepare for, respond to, and recover from disruptive incidents.',
    meaning: 'Your operations are safeguarded against unexpected disruptions. This certification ensures we have robust plans in place to maintain critical functions and quickly restore services during any crisis.',
    icon: Activity
  },
  {
    id: 'cmmc',
    name: 'CMMC Level 1',
    title: 'CMMC Level 1: Cybersecurity Maturity Model Assessed',
    logo: 'https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-cmm.png',
    desc: 'CMMC is a US-mandated security framework developed by the Department of Defense (DoD). As of late 2025, it is a legal requirement for any company—regardless of location—that wishes to participate in the U.S. defense supply chain. It focuses on "Basic Cyber Hygiene," ensuring that foundational security practices like access control and system integrity are not just present, but verified.',
    meaning: 'Our adherence to these rigorous U.S. federal standards provides you with a hardened infrastructure designed to withstand 90% of common cyber threats. By partnering with a CMMC-assessed provider, you gain a future-proof foundation that simplifies your own compliance audits and ensures your business remains eligible for high-value international and defense-related projects.',
    icon: CheckCircle2
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    title: 'HIPAA Compliance: Safeguarding Healthcare Data',
    logo: 'https://marketing.timcorp.net.ph/hubfs/website/hipaa.png',
    desc: 'As a pioneered ICT leader in the Philippines, our alignment with HIPAA standards is critical for local businesses serving the global healthcare market (such as Medical BPOs, Telehealth providers, and Revenue Cycle Management firms).',
    meaning: 'Our "HIPAA-ready" infrastructure ensures that your operations meet the strict Administrative, Physical, and Technical safeguards required to handle Protected Health Information (PHI). By partnering with us, you eliminate the risk of massive federal fines and reputational damage, allowing you to confidently manage healthcare data for international clients while staying compliant with both U.S. laws and the Philippine Data Privacy Act.',
    icon: Activity
  }
];

import RelatedServices from '@/components/shared/RelatedServices';
import ServiceDeliverySection from '@/components/tim/ServiceDeliverySection';
import PMCOESection from '@/components/tim/PMCOESection';

export default function Compliance() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Small delay to ensure elements are rendered/animated
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#00021a] text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
          
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Compliance and Security"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />

          {/* Animated background particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                y: Math.random() * 500 
              }}
              animate={{ 
                y: [null, Math.random() * -100 - 50],
                opacity: [0.2, 0.8, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-black">Our Commitment to Governance & Excellence</span>
            </motion.div>
            
            <h1 className="text-[3.375rem] lg:text-[6.75rem] font-avantgarde font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              INDUSTRY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">CERTIFICATIONS & COMPLIANCE</span>
            </h1>
            
            <p className="text-xl lg:text-3xl text-blue-100/60 leading-tight font-medium tracking-tight max-w-4xl mx-auto mb-16">
              In the rapidly evolving digital landscape, trust is the most valuable currency. At the core of our operations is a steadfast commitment to compliance, security, Trust, and operational resiliency.
            </p>

            {/* Certifications Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 w-full max-w-5xl mx-auto px-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="relative group flex-shrink-0"
                >
                  <a 
                    href={`#${cert.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(cert.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block transition-all duration-300 hover:scale-110"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className={`h-10 sm:h-12 lg:h-14 w-auto object-contain ${cert.name === 'ISO 22301' ? 'filter brightness-0 invert' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                  </a>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap bg-black/80 text-white text-xs px-3 py-1.5 rounded-md border border-white/10 backdrop-blur-sm">
                    {cert.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-blue-100/50 leading-relaxed font-medium"
          >
            We don't just claim to follow best practices; we have them audited and certified by the world's leading regulatory bodies. Explore the standards we uphold to ensure your data is protected and your business remains resilient.
          </motion.p>
        </div>
      </section>

      {/* Global Standards & Security Frameworks */}
      <section className="py-32 relative overflow-hidden">
        {/* HUD Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-black">Verified Security</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-6 uppercase">
              GLOBAL STANDARDS & <br />
              <span className="text-blue-500">SECURITY FRAMEWORKS</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                id={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden scroll-mt-32"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <cert.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    {cert.logo && (
                      <div className="h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 rounded-xl border border-white/10 group-hover:border-blue-500/30 transition-colors">
                        <img 
                          src={cert.logo} 
                          alt={cert.name} 
                          className={`max-h-12 w-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500 ${cert.name === 'ISO 22301' ? 'filter brightness-0 invert' : ''}`} 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                  <p className="text-blue-100/60 mb-6 font-medium leading-relaxed">
                    {cert.desc}
                  </p>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6 group-hover:bg-blue-900/40 transition-colors">
                    <h4 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">What it means for you</h4>
                    <p className="text-sm text-blue-100/80 leading-relaxed">
                      {cert.meaning}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-32 relative overflow-hidden">
        {/* HUD Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-black">Strategic Advantage</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-8 uppercase">
                WHY COMPLIANCE <br />
                <span className="text-blue-500">MATTERS</span>
              </h2>
              <p className="text-xl text-blue-100/60 font-medium leading-relaxed mb-12">
                Choosing an ICT partner with these credentials isn't just about "checking boxes"—it's about risk mitigation and competitive advantage.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Globe, title: 'Global Recognition', desc: 'Our certifications allow you to expand into highly regulated markets with confidence.' },
                  { icon: Shield, title: 'Reduced Liability', desc: 'We take on the burden of compliance so you don\'t have to, lowering your insurance and legal risks.' },
                  { icon: Server, title: 'Uninterrupted Continuity', desc: 'By adhering to these standards, we minimize downtime and protect against the catastrophic costs of data breaches.' }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                      <p className="text-blue-100/60 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <h3 className="text-xs uppercase tracking-[0.5em] text-blue-300 font-black mb-6">Our Promise</h3>
                <p className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
                  As your technology partner, we don't just meet the standard—we aim to set it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PMCOESection />

      <div id="service-delivery">
        <ServiceDeliverySection />
      </div>
      <CTASection />
      <RelatedServices />
    </div>
  );
}

