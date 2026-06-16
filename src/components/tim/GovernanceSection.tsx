import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { certifications } from '@/data/certificationsData';
import { 
  ShieldCheck, 
  Scale, 
  FileCheck, 
  Lock, 
  CheckCircle2, 
  Building, 
  Activity,
  ArrowRight,
  Printer,
  Search,
  FileText,
  MapPin,
  Phone,
  Globe,
  Award,
  BookOpen,
  CornerDownRight,
  BadgeAlert,
  Sliders,
  Sparkles
} from 'lucide-react';

// Full, 100% accurate GRC Document Content from TIM-FRM-117 Rev 02
const governanceDocument = [
  {
    id: 'corporate-governance',
    number: '01',
    title: 'Corporate Governance & Resiliency',
    subtitle: 'Foundational Principles & Core Values',
    icon: Scale,
    content: [
      {
        type: 'paragraph',
        text: 'At Total Information Management Corp. (TIM), strong governance and resilience are fundamental to how we operate, grow, and protect stakeholder value.'
      },
      {
        type: 'paragraph',
        text: 'Our Corporate Governance & Resiliency framework ensures that we uphold the highest standards of integrity, accountability, and transparency, while maintaining the ability to anticipate, withstand, and recover from disruptions.'
      },
      {
        type: 'paragraph',
        text: 'We deliver information management, secure storage, and technology-enabled services that support mission-critical operations for our enterprise customers. Because our services are essential to our customers’ day-to-day operations, we place a strong emphasis on operational continuity, information protection, and service availability. These principles guide how we meet customer expectations and fulfill our contractual, regulatory, and fiduciary responsibilities.'
      },
      {
        type: 'list_header',
        text: 'We are committed to:'
      },
      {
        type: 'bullet_list',
        marker: '▪',
        items: [
          'Embedding ethical leadership and responsible decision-making',
          'Strengthening risk management and compliance practices',
          'Ensuring business continuity and operational resilience',
          'Sustaining long-term value and stakeholder trust'
        ]
      },
      {
        type: 'paragraph',
        text: 'This commitment is how we manage information security, cyber, operational and business resiliency across the organization and how we prepare for, respond to, and recover from disruptive events while continuing to serve our customers.'
      }
    ]
  },
  {
    id: 'grc-team',
    number: '02',
    title: 'A Dedicated Governance, Risk and Compliance (GRC) Team',
    subtitle: 'Specialized Oversight & Guidance Office',
    icon: ShieldCheck,
    content: [
      {
        type: 'paragraph',
        text: 'At the core of our governance framework is a specialized, in-house GRC team that drives consistency, oversight, and continuous improvement across TIM Corp.'
      },
      {
        type: 'list_header',
        text: 'This team is responsible for:'
      },
      {
        type: 'bullet_list',
        marker: '•',
        items: [
          'Designing and maintaining corporate governance frameworks and policies',
          'Ensuring alignment with regulatory requirements and industry standards',
          'Monitoring compliance and governance effectiveness',
          'Supporting leadership in risk-informed decision-making',
          'Promoting a culture of accountability, ethics, and transparency'
        ]
      },
      {
        type: 'paragraph',
        text: 'With a focused governance function, TIM Corp ensures that governance is proactive, structured, and deeply integrated into everyday operations.'
      }
    ]
  },
  {
    id: 'accountability',
    number: '03',
    title: 'Governance and Accountability',
    subtitle: 'Strategic Direction & Oversight Controls',
    icon: Building,
    content: [
      {
        type: 'paragraph',
        text: 'Our operational and business resiliency program is managed through a formal enterprise risk management and security governance framework. Executive leadership provides strategic direction and oversight to ensure resiliency objectives remain aligned with business priorities. Dedicated leaders across risk management, information security, compliance, and operations are responsible for designing, implementing, and maintaining effective controls.'
      },
      {
        type: 'paragraph',
        text: 'Key aspects of our governance model include documented resiliency policies approved by senior management, clearly defined roles and responsibilities for crisis management, business continuity, and disaster recovery, and the integration of resiliency considerations into enterprise-level risk assessments. We provide regular updates to executive stakeholders on resiliency posture, significant incidents, and improvement initiatives.'
      }
    ]
  },
  {
    id: 'bia-risk',
    number: '04',
    title: 'Business Impact Analysis and Risk Assessment',
    subtitle: 'Critical Dependencies & Threat Prioritization',
    icon: Activity,
    content: [
      {
        type: 'paragraph',
        text: 'We perform Business Impact Analyses (BIA) on a periodic basis to identify critical business processes, supporting systems, and key dependencies required to deliver our services. Through this process, we establish recovery priorities, including Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs), and assess the potential operational, financial, legal, and reputational impact of service disruptions.'
      },
      {
        type: 'paragraph',
        text: 'The results of our BIA inform our risk assessment process, which evaluates a range of threat scenarios such as cybersecurity incidents, technology failures, natural disasters, supply chain disruptions, and workforce availability challenges. Risk mitigation efforts are prioritized based on customer impact, regulatory expectations, and our defined risk tolerance.'
      }
    ]
  },
  {
    id: 'bcp-drp',
    number: '05',
    title: 'Business Continuity and Disaster Recovery',
    subtitle: 'Service Continuation & Restoration Blueprints',
    icon: FileCheck,
    content: [
      {
        type: 'paragraph',
        text: 'We maintain documented Business Continuity Plans (BCP) and Disaster Recovery Plans (DRP) to support the continuation of critical services and the timely restoration of operations during adverse events. These plans are aligned with recognized industry practices and are reviewed and updated regularly to reflect changes in our business and risk environment.'
      },
      {
        type: 'paragraph',
        text: 'Our continuity capabilities include resilient system design, secure data backup and recovery processes with defined retention and testing schedules, alternate work arrangements to maintain workforce availability, and contingency planning for critical vendors and suppliers. Disaster recovery strategies are tailored to the criticality of systems and services and are validated through tabletop exercises and technical recovery testing.'
      }
    ]
  },
  {
    id: 'tech-resilience',
    number: '06',
    title: 'Technology and Information Resilience',
    subtitle: 'Infrastructure, Platforms, and Systems Hardening',
    icon: Lock,
    content: [
      {
        type: 'paragraph',
        text: 'Our technology environment is designed to support the availability, integrity, and confidentiality of customer information. Resiliency controls are built into the infrastructure, platforms, and applications that support service delivery.'
      },
      {
        type: 'paragraph',
        text: 'These controls include system redundancy and failover capabilities, secure backup, replication, and restoration mechanisms, structured change management and configuration controls, and continuous monitoring of system performance and security events. Together, these measures help reduce operational risk and support timely recovery from technology or security incidents.'
      }
    ]
  },
  {
    id: 'incident-crisis',
    number: '07',
    title: 'Incident and Crisis Management',
    subtitle: 'Rapid Identification & Coordinated Workflows',
    icon: BadgeAlert,
    content: [
      {
        type: 'paragraph',
        text: 'We maintain a formal incident and crisis management framework to ensure that operational disruptions, cybersecurity incidents, and other crisis events are identified, escalated, and addressed in a timely and coordinated manner. This framework defines escalation criteria, decision-making authority, and communication protocols.'
      },
      {
        type: 'paragraph',
        text: 'Our approach includes 24×7 incident detection and response capabilities, established internal and external communication procedures, coordination across operational, technical, legal, and executive teams, and post-incident reviews and root cause analyses to drive corrective actions.'
      }
    ]
  },
  {
    id: 'third-party-resilience',
    number: '08',
    title: 'Third-Party and Supply Chain Resilience',
    subtitle: 'External Partner Mitigation & Security Profile',
    icon: Sliders,
    content: [
      {
        type: 'paragraph',
        text: 'We recognize the importance of third-party service providers and suppliers in supporting our operations. Resiliency considerations are integrated into our vendor risk management processes, particularly for providers that support critical services or handle sensitive information.'
      },
      {
        type: 'paragraph',
        text: 'This includes due diligence assessments of vendor continuity and recovery capabilities, contractual requirements addressing availability, incident notification, and recovery support, and ongoing monitoring of third-party performance and risk posture.'
      }
    ]
  },
  {
    id: 'testing-training',
    number: '09',
    title: 'Testing, Training, and Continuous Improvement',
    subtitle: 'Operational Readiness & Role-Based Qualifications',
    icon: BookOpen,
    content: [
      {
        type: 'paragraph',
        text: 'We regularly test our business continuity, disaster recovery, and incident response plans to validate effectiveness and operational readiness. Testing results are documented and used to strengthen processes, controls, and coordination.'
      },
      {
        type: 'paragraph',
        text: 'Employees with resiliency responsibilities receive role-based training to ensure they understand their roles during disruptive events. Lessons learned from incidents, testing activities, audits, and risk assessments are tracked through a continuous improvement process.'
      }
    ]
  },
  {
    id: 'infra-systems',
    number: '10',
    title: 'Critical Infrastructure and Systems',
    subtitle: 'Equinix Data Centers Dual-Site Redundancy',
    icon: Award,
    content: [
      {
        type: 'paragraph',
        text: 'Our critical infra and system is hosted on 2 sites running both multiple redundancies. The facilities are hosted under Equinix data centers running availability of 99.982 percent.'
      }
    ]
  },
  {
    id: 'standards-alignment',
    number: '11',
    title: 'Standards and Regulatory Alignment',
    subtitle: 'Certified Operations & Compliance Frameworks',
    icon: FileText,
    content: [
      {
        type: 'paragraph',
        text: 'As part of our commitment to operational and business resiliency, we align our programs, policies, and controls with recognized standards, assurance frameworks, and applicable regulatory requirements. This alignment supports consistent service delivery, effective risk management, and protection of customer information.'
      }
    ]
  },
  {
    id: 'customer-assurance-commit',
    number: '12',
    title: 'Customer Assurance and Commitment',
    subtitle: 'Operational Transparency & Integrity Promise',
    icon: Sparkles,
    content: [
      {
        type: 'paragraph',
        text: 'Our operational and business resiliency program is designed to minimize service disruption, protect customer data, and reduce operational impact during unforeseen events. We are committed to transparency, contractual alignment, and the continuous enhancement of our resiliency capabilities as business, technology, and regulatory requirements evolve.'
      },
      {
        type: 'paragraph',
        text: 'Through strong governance, proactive risk management, tested recovery capabilities, and alignment with recognized standards, we demonstrate our commitment to delivering reliable, trustworthy services to our customers.'
      }
    ]
  }
];

interface GovernanceSectionProps {
  isMerged?: boolean;
}

export default function GovernanceSection({ isMerged = false }: GovernanceSectionProps) {
  const renderContent = () => (
    <div className="space-y-16">
      {/* Main Sequential Document Stream (Unified standard layout) */}
      <div className="space-y-10">
        {governanceDocument.map((sec) => {
          const SecIcon = sec.icon;
          return (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-[2.5rem] bg-[#080a25] border border-blue-500/5 hover:border-blue-500/15 shadow-2xl relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

              {/* Clause Header block */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6 mb-8 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-500/15 to-indigo-500/5 rounded-2xl flex items-center justify-center border border-blue-500/25 shrink-0">
                    <SecIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-none">
                      {sec.title}
                    </h3>
                  </div>
                </div>


              </div>

              {/* Clause Subtitle */}
              <p className="text-xs text-blue-100/45 font-extrabold uppercase tracking-widest mb-6 block relative z-10">
                {sec.subtitle}
              </p>

              {/* Dynamic structured content stream */}
              <div className="space-y-5 relative z-10 max-w-4xl">
                {sec.content.map((block, idx) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p key={idx} className="text-sm sm:text-base text-blue-100/75 leading-relaxed font-semibold">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'list_header') {
                    return (
                      <h5 key={idx} className="text-[11px] uppercase font-bold tracking-[0.15em] text-blue-400 pt-3">
                        {block.text}
                      </h5>
                    );
                  }
                  if (block.type === 'bullet_list' && block.items) {
                    return (
                      <ul key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 pl-1">
                        {block.items.map((bullet, bIdx) => (
                           <li key={bIdx} className="flex gap-4 items-start p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-blue-500/15 hover:bg-white/[0.03] transition-all duration-300">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-blue-100/70 leading-relaxed font-semibold">
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>

              {sec.id === 'standards-alignment' && (
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      id={cert.id}
                      className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 hover:bg-white/[0.03] transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                          <cert.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        {cert.logo && (
                          <div className="h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm px-3 rounded-lg border border-white/5">
                            <img 
                              src={cert.logo} 
                              alt={cert.name} 
                              className="max-h-8 w-auto object-contain" 
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 relative z-10">{cert.title}</h4>
                      <p className="text-xs text-blue-100/65 mb-4 font-semibold leading-relaxed relative z-10">
                        {cert.desc}
                      </p>
                      <div className="bg-blue-950/20 border border-blue-500/10 rounded-xl p-4 relative z-10">
                        <h5 className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1">What it means for you</h5>
                        <p className="text-xs text-blue-100/85 leading-relaxed">
                          {cert.meaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Official GRC Core Assurance Seal Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-blue-950/45 to-indigo-950/35 border border-blue-500/15 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-blue-400 block mb-3">Customer Assurance & Commitment</span>
          <h4 className="text-xl sm:text-2xl font-black uppercase text-white mb-4 tracking-tight leading-snug">
            Proactive Resiliency & Unwavering Security Assurance
          </h4>
          <p className="text-sm sm:text-base text-blue-100/70 leading-relaxed font-semibold mb-6">
            Our operational and business resiliency program is designed to minimize service disruption, protect customer data, and reduce operational impact during unforeseen events. We are committed to transparency, contractual alignment, and the continuous enhancement of our resiliency capabilities as business, technology, and regulatory requirements evolve.
          </p>
          <p className="text-xs text-blue-100/50 leading-relaxed font-medium">
            Through strong governance, proactive risk management, tested recovery capabilities, and alignment with recognized standards, we demonstrate our commitment to delivering reliable, trustworthy services to our customers.
          </p>
        </div>
      </motion.div>
    </div>
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
      {/* Background visual graphics */}
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
                className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4 text-white"
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
              Our Corporate Governance & Resiliency framework ensures that we uphold the highest standards of integrity, accountability, and transparency across all operational levels.
            </motion.p>
          </div>
        </div>

        {renderContent()}
      </div>
    </section>
  );
}
