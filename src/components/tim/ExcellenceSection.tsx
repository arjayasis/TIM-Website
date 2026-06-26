import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, Rocket, ArrowRight, Shield, CheckCircle2, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ExcellenceSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#00021a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-md"
          >
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-black">Operational Edge</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8"
          >
            Driven by <span className="text-blue-500 italic font-serif">Strong Governance</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">and Service Excellence</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/60 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            By integrating our Project Management Center of Excellence (PMCOE) with proven service delivery practices, we help organizations achieve secure, seamless, and successful digital transformation outcomes.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* PMCOE Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full justify-between flex-grow">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Briefcase className="w-7 h-7 text-blue-400" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight text-white">
                  Project <br />
                  <span className="text-blue-400">Management</span>
                </h3>
                
                <p className="text-sm sm:text-base text-blue-100/70 mb-6 font-semibold leading-relaxed">
                  We ensure projects deliver more than milestones—they deliver business results. Through strong governance, standardized methodologies, and expert oversight, our PMCOE drives efficiency, mitigates risk, and accelerates transformation success.
                </p>
                
                <div className="space-y-3.5 mb-8">
                  {[
                    'PMP® & CAPM® Certified Leaders',
                    'Lean Six Sigma Process Efficiency',
                    'Strategic Risk Management (PRMP®)',
                    'ITIL® Service Excellence'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-blue-100/80 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/Compliance#pmcoe" className="mt-auto block w-full lg:w-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4.5 rounded-xl font-extrabold uppercase text-xs tracking-widest transition-all group/btn">
                  Explore PMCOE
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Corporate Governance Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full justify-between flex-grow">
              <div>
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Scale className="w-7 h-7 text-emerald-400" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight text-white">
                  Corporate Governance <br />
                  <span className="text-emerald-400">& Resiliency</span>
                </h3>
                
                <p className="text-sm sm:text-base text-blue-100/70 mb-6 font-semibold leading-relaxed">
                  Our Corporate Governance & Resiliency framework ensures we uphold the highest standards of integrity, accountability, and transparency, driven directly by our dedicated in-house GRC team.
                </p>
                
                <div className="space-y-3.5 mb-8">
                  {[
                    'Dedicated In-House GRC Team Oversight',
                    'Strategic Business Continuity & Disaster Recovery',
                    'Rigorous Standards & Regulatory Alignment',
                    'Proven Technology & Information Resilience'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-blue-100/80 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/Compliance#governance" className="mt-auto block w-full lg:w-auto">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4.5 rounded-xl font-extrabold uppercase text-xs tracking-widest transition-all group/btn">
                  Explore Governance
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Service Delivery Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full justify-between flex-grow">
              <div>
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="w-7 h-7 text-indigo-400" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight text-white">
                  Service Delivery <br />
                  <span className="text-indigo-400">Excellence</span>
                </h3>
                
                <p className="text-sm sm:text-base text-blue-100/70 mb-6 font-semibold leading-relaxed">
                  A world-class operations framework designed for 24/7 reliability. From MSOC to Cloud Ops, we embed customer-centric practices into every layer of our delivery model.
                </p>
                
                <div className="space-y-3.5 mb-8">
                  {[
                    '24/7 Managed Operations',
                    'Customer Happiness Index',
                    'SLA-Driven Performance',
                    'Scalable Infrastructure Ops'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-blue-100/80 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/Compliance#service-delivery" className="mt-auto block w-full lg:w-auto">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4.5 rounded-xl font-extrabold uppercase text-xs tracking-widest transition-all group/btn">
                  Explore Service Delivery
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
