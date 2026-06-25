import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Monitor, 
  Cloud, 
  Network, 
  ShieldCheck, 
  Brain,
  Layers,
  ArrowRight,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Managed Services',
    description: '24/7 proactive monitoring and management of network and security infrastructure ensuring maximum uptime.',
    color: 'from-[#0009af] to-[#0006a0]',
    links: [
      { name: 'Managed Network Operations Center', url: '/ManagedNOC' },
      { name: 'Managed Security Operations Center', url: '/ManagedSOC' },
      { name: 'Managed Infrastructure', url: '/ManagedInfrastructure' },
      { name: 'TIM VAPT', url: '/VAPT' }
    ]
  },
  {
    icon: Cloud,
    title: 'In-Country Cloud',
    description: 'Flexible, high-performance cloud environments designed to scale your digital operations securely.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Network,
    title: 'Global Network Services',
    description: 'High-speed connectivity via a globally recognized ASN for seamless enterprise communication.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Cybersecurity',
    description: 'Protect your business, minimize risk, and maintain operational continuity with comprehensive cybersecurity solutions that safeguard your applications, data, and infrastructure from evolving threats.',
    color: 'from-blue-500 to-blue-700',
    links: [
      { name: 'NIST Framework', url: '/Cybersecurity' },
      { name: 'Core Cybersecurity', url: '/CoreCybersecurity' }
    ]
  },
  {
    icon: Brain,
    title: 'Enterprise AI',
    description: 'Automate your cycle of intelligence with AI-driven productivity and process automation.',
    color: 'from-blue-300 to-blue-500'
  },
  {
    icon: Layers,
    title: 'Systems Integration',
    description: 'Unifying technologies with value-focused project management for seamless execution.',
    color: 'from-blue-600 to-blue-800'
  }
];

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="ServicesGrid" className="relative py-24 lg:py-32 overflow-hidden bg-[#00021a]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Our Capabilities</span>
          </div>
          <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6 tracking-tighter">
            Enterprise-Grade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">ICT Solutions</span>
          </h2>
          <p className="text-xl text-blue-100/40 max-w-2xl mx-auto font-medium">
            Drive growth, improve operational efficiency, and reduce business risk with comprehensive ICT solutions designed to support your organization's evolving digital needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isCloudService = service.title === 'In-Country Cloud';
            const isManagedServices = service.title === 'Managed Services';
            const isBorderlessNetwork = service.title === 'Global Network Services';
            const isSystemIntegration = service.title === 'Systems Integration';
            const isCyberDefense = service.title === 'End-to-End Cybersecurity';
            const isEnterpriseAI = service.title === 'Enterprise AI';
            
            const getUrl = () => {
              if (isCloudService) return createPageUrl('CloudServices');
              if (isManagedServices && !service.links) return createPageUrl('ManagedOps');
              if (isBorderlessNetwork) return createPageUrl('BorderlessConnectivity');
              if (isSystemIntegration) return createPageUrl('SystemIntegration');
              if (isCyberDefense) return createPageUrl('Cybersecurity');
              if (isEnterpriseAI) return createPageUrl('TIMCorpAI');
              return '#';
            };

            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  // Don't auto-collapse on mouse leave to allow clicking links
                }}
                className="relative group"
              >
                <div className={`relative h-full p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${isExpanded ? 'border-blue-500/50 bg-white/[0.07] shadow-[0_0_40px_rgba(37,99,235,0.15)]' : 'hover:border-blue-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]'}`}>
                  {/* Dynamic Gradient Glow */}
                  <div className={`absolute -inset-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 ${isExpanded ? 'opacity-10' : ''} blur-3xl transition-opacity duration-700`} />
                  
                  {/* Clickable Header Area */}
                  <div 
                    className="cursor-pointer relative z-10"
                    onClick={() => {
                      if (service.links) {
                        setExpandedIndex(isExpanded ? null : index);
                      } else {
                        navigate(getUrl());
                      }
                    }}
                  >
                    {/* Icon Container */}
                    <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} p-[1px] mb-8 transform group-hover:scale-110 ${isExpanded ? 'scale-110' : ''} transition-transform duration-500`}>
                      <div className="w-full h-full bg-[#00021a] rounded-[23px] flex items-center justify-center">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    
                    {!isExpanded && (
                      <>
                        <p className="text-blue-100/50 leading-relaxed mb-8 font-medium text-lg">
                          {service.description}
                        </p>

                        {/* Learn More Action */}
                        <div className="flex items-center gap-3 text-blue-400 font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                          <span>{service.links ? 'View Options' : 'Explore Service'}</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Expanded Links Area (Outside the header's onClick) */}
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative z-20 space-y-4 mt-6"
                    >
                      {service.links?.map((link) => (
                        <Link 
                          key={link.name}
                          to={link.url}
                          className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all group/link"
                        >
                          <span className="text-white font-medium">{link.name}</span>
                          <ArrowRight className="w-4 h-4 text-blue-400 transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                      <button 
                        onClick={() => setExpandedIndex(null)}
                        className="w-full py-3 text-blue-100/30 hover:text-blue-100/60 text-xs uppercase tracking-widest font-bold transition-colors"
                      >
                        Close Options
                      </button>
                    </motion.div>
                  )}

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-[5rem]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
