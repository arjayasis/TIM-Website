import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, Rocket, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
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
            <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-black">Operational Excellence</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8"
          >
            Built on <span className="text-blue-500 italic font-serif">Precision</span> & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Reliable Delivery</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/60 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We combine our Project Management Center of Excellence (PMCOE) with a world-class service delivery framework to ensure your digital transformation is seamless, secure, and successful.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* PMCOE Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-10 lg:p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Briefcase className="w-8 h-8 text-blue-400" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 uppercase tracking-tight">
                Project Management <br />
                <span className="text-blue-400">Center of Excellence</span>
              </h3>
              
              <p className="text-blue-100/60 mb-10 font-medium leading-relaxed text-lg flex-grow">
                Our PMCOE drives value-focused project management across the organization, implementing standardized, scalable, and customer-centric practices that ensure strong governance and measurable outcomes.
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  'PMP® & CAPM® Certified Leaders',
                  'Lean Six Sigma Process Efficiency',
                  'Strategic Risk Management (PRMP®)',
                  'ITIL® Service Excellence'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-blue-100/80">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/Compliance#pmcoe">
                <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl font-bold uppercase tracking-widest transition-all group/btn">
                  Explore PMCOE
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Service Delivery Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative p-10 lg:p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Rocket className="w-8 h-8 text-indigo-400" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 uppercase tracking-tight">
                Service Delivery <br />
                <span className="text-indigo-400">Framework</span>
              </h3>
              
              <p className="text-blue-100/60 mb-10 font-medium leading-relaxed text-lg flex-grow">
                A world-class operations framework designed for 24/7 reliability. From MSOC to Cloud Ops, we embed customer-centric practices into every layer of our delivery model.
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  '24/7 Managed Operations',
                  'Customer Happiness Index',
                  'SLA-Driven Performance',
                  'Scalable Infrastructure Ops'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-blue-100/80">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/Compliance#service-delivery">
                <Button className="w-full lg:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-2xl font-bold uppercase tracking-widest transition-all group/btn">
                  View Framework
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
