import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Scale, 
  FileCheck, 
  Users, 
  ChevronRight, 
  Lock, 
  CheckCircle2, 
  Eye, 
  CheckSquare, 
  Building, 
  Activity,
  ArrowRight,
  TrendingUp,
  FileText
} from 'lucide-react';

const governancePillars = [
  {
    icon: Scale,
    title: 'Ethical Leadership & Integrity',
    desc: 'Upholding strict ethical codes, transparency in operational reports, and full accountability across all corporate decisions and leadership matrices.',
    features: ['Code of Business Conduct', 'Anti-Bribery & Corruption Policy', 'Whistleblowing Safeguards', 'Conflict of Interest Controls']
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Risk Management',
    desc: 'Systematic Identification, assessment, and control of strategic, operational, financial, and digital risks using COBIT® and NIST-aligned risk principles.',
    features: ['Continuous Threat Assessments', 'Operational Redundancy Audits', 'Business Impact Analysis (BIA)', 'Third-Party Risk Assessments']
  },
  {
    icon: Lock,
    title: 'Data Privacy & Protection',
    desc: 'A comprehensive privacy-by-design architecture adhering strictly to the Philippine Data Privacy Act of 2012 (DPA) and guidelines by the National Privacy Commission.',
    features: ['Appointed Data Protection Officers', 'Strict Access-Control Policies', 'Regular Privacy Impact Assessments', 'Immutable Audit-Logged Transactions']
  },
  {
    icon: FileCheck,
    title: 'Regulatory & Audit Compliance',
    desc: 'Constant audit readiness for local and global frameworks (ISO 9001, ISO 27001, SOC 2 Type II, DICT D-TAP), verifying service credibility.',
    features: ['Bi-Annual Third-Party Audits', 'Continuous Self-Assessments', 'Government & Security Clearances', 'Policy Alignment with DICT Directives']
  }
];

const corporatePolicies = [
  {
    id: 'privacy',
    title: 'NPC Data Privacy Compliance',
    subtitle: 'Strict alignment with the National Privacy Commission (NPC)',
    summary: 'TIM is fully committed to protecting personal and corporate data in compliance with the Data Privacy Act of 2012. Our privacy framework guarantees that data is processed lawfully, fairly, and with the utmost transparency.',
    details: [
      'Proactive Personal Data Sheet (PDS) encryption and hashing protocols.',
      'Regular employee certification in digital privacy and cybersecurity protocols.',
      'Established rapid incident response mechanism for immediate notice and mitigation.',
      'Active registration and validation with the National Privacy Commission (NPC).'
    ]
  },
  {
    id: 'integrity',
    title: 'Whistleblowing & Ethical Conduct',
    subtitle: 'Zero tolerance for bribery, corruption, or unethical practices',
    summary: 'We maintain safe, anonymous channels for employee and partner reporting of unethical behaviors, safeguarding corporate integrity, financial trust, and moral standards.',
    details: [
      'Anonymized direct-to-ombudsman reporting pipelines.',
      'Comprehensive retaliatory protection policies for all whistleblowers.',
      'Independent audit committees evaluating operational records.',
      'Zero-tolerance anti-corruption guidelines for all external partnerships.'
    ]
  },
  {
    id: 'erm',
    title: 'Risk & Resiliency Controls',
    subtitle: 'Minimizing disruption and maintaining organizational integrity',
    summary: 'Our governance includes a highly proactive Enterprise Risk Assessment loop where potential points of failure, supply chain risks, and security issues are mapped and resolved.',
    details: [
      'Dedicated Risk & Audit Board overseeing executive maneuvers.',
      'Inter-departmental drills simulating operational or natural crises.',
      'Active supply-chain vetting ensuring trusted component delivery.',
      'Annual Business Continuity plan testing with simulated power and network outages.'
    ]
  }
];

interface GovernanceSectionProps {
  isMerged?: boolean;
}

export default function GovernanceSection({ isMerged = false }: GovernanceSectionProps) {
  const renderContent = () => (
    <>
      {/* Four Pillars Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {governancePillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/15 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <pillar.icon className="w-7 h-7 text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                {pillar.title}
              </h3>
              
              <p className="text-blue-100/60 mb-6 font-medium leading-relaxed">
                {pillar.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                {pillar.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-blue-100/80 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Policies Grid (Replaces Tabs Sandbox) */}
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 mb-3">Enterprise Protocols</span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">Core Governance Frameworks</h3>
          <p className="text-sm text-blue-100/55 font-medium mt-2">Operational blueprints guiding internal standards and vendor expectations.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {corporatePolicies.map((policy, index) => (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-blue-950/20 to-black/40 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 block mb-2">
                    {policy.subtitle}
                  </span>
                  
                  <h4 className="text-lg font-black mb-4 uppercase text-white group-hover:text-blue-400 transition-colors">
                    {policy.title}
                  </h4>
                  
                  <p className="text-sm text-blue-100/70 mb-6 leading-relaxed font-semibold">
                    {policy.summary}
                  </p>

                  <div className="space-y-3 mt-6 pt-6 border-t border-white/5">
                    {policy.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold text-blue-100/60 leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] text-blue-100/40 font-bold uppercase tracking-widest">
                    <Building className="w-3.5 h-3.5 text-blue-400" />
                    <span>TIM Certified</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase text-emerald-400 tracking-wider">
                    <span>Active</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );

  if (isMerged) {
    return (
      <div id="governance-scroll" className="scroll-mt-32">
        {renderContent()}
      </div>
    );
  }

  return (
    <section id="governance" className="py-32 bg-[#00021a] relative overflow-hidden scroll-mt-32">
      {/* HUD Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full" />
        
        {/* Dynamic Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8"
          >
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-black">Corporate Oversight & Controls</span>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4"
              >
                CORPORATE <br />
                <span className="text-blue-500 italic font-serif">GOVERNANCE</span>
              </motion.h2>
              <div className="w-24 h-1 bg-blue-600 rounded-full my-6 mx-auto lg:mx-0" />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg lg:text-xl text-blue-100/60 font-medium leading-relaxed max-w-2xl text-center lg:text-left"
            >
              We design, implement, and maintain strict governance structures that serve as the steering mechanism for our company. It aligns execution with integrity, ensuring reliable, ethical operations across all branches.
            </motion.p>
          </div>
        </div>

        {renderContent()}
      </div>
    </section>
  );
}
