import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { createPageUrl } from '@/utils';
import { 
  Shield, 
  Activity, 
  Network, 
  Cloud, 
  Globe, 
  Layers,
  ArrowRight,
  Server,
  Lock,
  FileCheck,
  Cpu
} from 'lucide-react';

const services = [
  {
    name: 'VAPT',
    path: 'VAPT',
    desc: 'Vulnerability Assessment & Penetration Testing',
    icon: Shield,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    name: 'Managed SOC',
    path: 'ManagedSOC',
    desc: '24/7 Security Operations Center',
    icon: Activity,
    color: 'text-red-500',
    bg: 'bg-red-500/10'
  },
  {
    name: 'Managed NOC',
    path: 'ManagedNOC',
    desc: '24/7 Network Operations Center',
    icon: Network,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    name: 'Cloud Services',
    path: 'CloudServices',
    desc: 'Scalable Cloud Infrastructure & Management',
    icon: Cloud,
    color: 'text-sky-500',
    bg: 'bg-sky-500/10'
  },
  {
    name: 'Borderless Connectivity',
    path: 'BorderlessConnectivity',
    desc: 'Secure & High-Performance Networking',
    icon: Globe,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  },
  {
    name: 'System Integration',
    path: 'SystemIntegration',
    desc: 'End-to-End Technology Solutions',
    icon: Layers,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    name: 'Managed Infrastructure',
    path: 'ManagedInfrastructure',
    desc: 'Expert Management of IT Environments',
    icon: Server,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10'
  },
  {
    name: 'Cybersecurity',
    path: 'Cybersecurity',
    desc: 'Comprehensive Digital Defense',
    icon: Lock,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10'
  },
  {
    name: 'Compliance',
    path: 'Compliance',
    desc: 'Governance & Industry Certifications',
    icon: FileCheck,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    name: 'RackCorp.ai by TIM',
    path: 'TIMCorpAI',
    desc: 'Enterprise Intelligence & Automation',
    icon: Cpu,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  }
];

// Define relationships for each page
const relationships: Record<string, string[]> = {
  'VAPT': ['ManagedSOC', 'Cybersecurity', 'Compliance'],
  'ManagedSOC': ['Cybersecurity', 'VAPT', 'ManagedNOC'],
  'ManagedNOC': ['BorderlessConnectivity', 'ManagedInfrastructure', 'ManagedSOC'],
  'CloudServices': ['ManagedInfrastructure', 'Cybersecurity', 'SystemIntegration'],
  'BorderlessConnectivity': ['ManagedNOC', 'CloudServices', 'Cybersecurity'],
  'SystemIntegration': ['CloudServices', 'ManagedInfrastructure', 'BorderlessConnectivity'],
  'ManagedInfrastructure': ['CloudServices', 'ManagedNOC', 'ManagedSOC'],
  'Cybersecurity': ['ManagedSOC', 'VAPT', 'Compliance'],
  'Compliance': ['Cybersecurity', 'ManagedSOC', 'VAPT'],
  'TIMCorpAI': ['CloudServices', 'SystemIntegration', 'ManagedInfrastructure']
};

export default function RelatedServices() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'AboutUs';

  // Get related service paths based on current page
  const relatedPaths = relationships[currentPath] || [];
  
  // Filter and sort services based on relationships
  let relatedServices = services.filter(s => relatedPaths.includes(s.path));

  // If we don't have enough related services, fill with others
  if (relatedServices.length < 3) {
    const others = services.filter(s => s.path !== currentPath && !relatedPaths.includes(s.path));
    relatedServices = [...relatedServices, ...others].slice(0, 3);
  } else {
    // Ensure we only show 3
    relatedServices = relatedServices.slice(0, 3);
  }

  return (
    <section className="py-24 bg-[#00021a] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-white text-left">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter uppercase mb-4 text-white">
              Explore More <span className="text-blue-500">Services</span>
            </h2>
            <p className="text-blue-100/40 font-medium max-w-xl">
              Discover how our comprehensive technology solutions can help your business grow and stay secure.
            </p>
          </div>
          <Link 
            to={`${createPageUrl('AboutUs')}#ServicesGrid`} 
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service, i) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                to={createPageUrl(service.path)}
                className="block p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all group h-full"
              >
                <div className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-blue-100/40 text-sm font-medium leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 opacity-0 group-hover:opacity-100 transition-all">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
