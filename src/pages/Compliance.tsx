import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { createPageUrl } from '@/utils';
import CTASection from '@/components/tim/CTASection';
import { Shield, CheckCircle2, Award, Server, Lock, FileCheck, Globe, Activity, Clock, Target, TrendingUp, MessageSquare, Briefcase, Users, ChevronRight, ChevronLeft, Quote, Settings, MapPin, Flag, Navigation, BookOpen, Trophy, ShieldCheck, Scale } from 'lucide-react';
import { certifications } from '@/data/certificationsData';

import RelatedServices from '@/components/shared/RelatedServices';
import ServiceDeliverySection from '@/components/tim/ServiceDeliverySection';
import PMCOESection from '@/components/tim/PMCOESection';
import GovernanceSection from '@/components/tim/GovernanceSection';

export default function Compliance() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#00021a] text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden">
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
              className="flex flex-row flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full max-w-7xl mx-auto px-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className="block transition-all duration-300 hover:scale-110"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
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

      {/* Governance, Risk & Compliance Framework (Merged Section) */}
      <section id="grc-framework-root" className="py-32 relative overflow-hidden scroll-mt-32">
        {/* HUD Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          
          {/* Main Title Section */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-black">Governance, Risk, Compliance & Information Security</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6"
            >
              GOVERNANCE &<br />
              <span className="text-blue-500 italic font-serif">RESILIENCY</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg lg:text-xl text-blue-100/60 font-medium leading-relaxed max-w-3xl mx-auto text-center"
            >
              Our dual-engine commitment: ensuring our technologies, cloud, infrastructure, and services meet global standards and compliance benchmarks, while reinforcing organizational integrity through operational resilience and robust corporate governance.
            </motion.p>
          </div>

          {/* Unified GRC & Resiliency Stream (Includes nested Global Certifications & Standards in Card 11) */}
          <div id="governance" className="scroll-mt-32 pt-12">
            <GovernanceSection isMerged={true} />
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

