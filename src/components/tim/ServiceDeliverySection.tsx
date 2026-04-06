import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Rocket, 
  Settings, 
  Shield, 
  Activity, 
  Cloud, 
  MessageSquare, 
  FileText, 
  BarChart, 
  Heart,
  CheckCircle2,
  Clock,
  Users,
  RefreshCw,
  Search,
  Layers,
  Zap
} from 'lucide-react';

const processPhases = [
  {
    title: 'Initiation & Requirements',
    desc: 'Defining scope, objectives, and success criteria in collaboration with the client.',
    icon: Search,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Planning & Design',
    desc: 'Developing a detailed delivery plan, including timelines, resource allocation, and risk management.',
    icon: FileText,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10'
  },
  {
    title: 'Execution & Monitoring',
    desc: 'Implementing solutions with rigorous oversight and standardized change management controls.',
    icon: Activity,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    title: 'Validation & Closure',
    desc: 'Final testing, client acceptance, and formal project handover with ITIL-aligned service transition.',
    icon: CheckCircle2,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  }
];

const operationalization = [
  { title: 'Knowledge Transfer', desc: 'Structured training, user guides, and operational manuals for client teams.' },
  { title: 'Governance & Controls', desc: 'Implementation of monitoring, escalation paths, and compliance checks for SLAs.' },
  { title: 'Readiness Validation', desc: 'Testing and verification that all systems and workflows are fully functional before live ops.' },
  { title: 'Service Transition', desc: 'Formal handover of systems and processes into production, aligned with ITIL practices.' }
];

const capabilities = [
  {
    name: 'Managed SOC (MSOC)',
    desc: '24/7 Threat detection, incident response, vulnerability management, and compliance monitoring.',
    tools: 'SIEM, EDR, TI, Compliance & Audit Tools (ISO 27001)',
    icon: Shield,
    color: 'text-red-400',
    isAlwaysOn: true
  },
  {
    name: 'Managed NOC (MNOC)',
    desc: '24/7 Network monitoring, performance optimization, fault management, and SLA compliance.',
    tools: 'NMS, Traffic Analysis, Automated Alerting & Escalation',
    icon: Activity,
    color: 'text-blue-400',
    isAlwaysOn: true
  },
  {
    name: 'Cloud Infra Ops',
    desc: '24/7 Cloud infrastructure management, scalability, security, and cost optimization.',
    tools: 'TIM Cloud, CMP, Backup & DR, IAM/RBA Frameworks',
    icon: Cloud,
    color: 'text-sky-400',
    isAlwaysOn: true
  },
  {
    name: 'CX Operations',
    desc: '24/7 Customer experience management, feedback integration, and continuous improvement.',
    tools: 'Customer Happiness Index, Satisfaction Measurement Tools',
    icon: Heart,
    color: 'text-pink-400',
    isAlwaysOn: true
  },
  {
    name: 'Service Management',
    desc: 'Incident, problem, change, and request management.',
    tools: 'ITIL-aligned Ticketing Platforms (ITSM)',
    icon: Settings,
    color: 'text-indigo-400'
  }
];

const promises = [
  { title: 'Quality Assurance', desc: 'Robust testing protocols, peer reviews, and improvement cycles.', icon: Shield },
  { title: 'Accountability', desc: 'Commitment to meeting agreed schedules and deliverables.', icon: Clock },
  { title: 'Client-Centric', desc: 'Tailored solutions aligned with client objectives and transparent communication.', icon: Heart },
  { title: 'ITIL-Aligned', desc: 'Compliance with globally recognized service management frameworks.', icon: Layers }
];

export default function ServiceDeliverySection() {
  return (
    <div className="bg-white text-[#00021a] overflow-hidden">
      {/* Main Section Header */}
      <section className="pt-24 lg:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
              Our Service Delivery & <br />
              <span className="text-blue-600 italic font-serif">Reliable 24/7 Support</span>
            </h2>
            <div className="mt-8 w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission - Recipe 11 style */}
      <section className="py-24 lg:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Our Vision</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">
                WORLD-CLASS <br />
                <span className="text-blue-600 italic font-serif">OPERATIONS</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                We aspire to be recognized as a world-class Operations, Service, and Support Organization, consistently delivering value to both internal and external customers. Guided by our collective Passion for Excellence, unwavering Professionalism, and steadfast Reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3rem] bg-gray-50 border border-gray-200 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Rocket className="w-32 h-32 text-blue-600" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold">Our Mission</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Enhancing Customer Happiness</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                  Our mission is to continually enhance the Customer Happiness Index, ensuring that every client interaction results in measurable satisfaction and long-term trust. We achieve this by embedding Customer-centric practices into our Delivery Framework.
                </p>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-blue-600">
                  <div className="w-12 h-px bg-blue-600" />
                  Continuous Improvement
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process - Recipe 1 style */}
      <section className="py-24 lg:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter uppercase mb-6">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-2xl">
              Structured methodology aligned with ITIL service management practices, ensuring consistency, governance, and quality in collaboration with PMO & Technical Solutions Delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processPhases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-3xl bg-white border border-gray-200 hover:border-blue-500/50 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl ${phase.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <phase.icon className={`w-6 h-6 ${phase.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{phase.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{phase.desc}</p>
                <div className="absolute top-8 right-8 text-4xl font-bold text-gray-100 group-hover:text-blue-500/10 transition-colors">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Operationalization Sub-section */}
          <div className="mt-24 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Operationalization</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                At project closure, we transition deliverables into operational readiness to ensure stability and long-term value through ITIL Service Transition practices.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {operationalization.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Delivery Framework - Recipe 3 style */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-6xl font-bold tracking-tighter uppercase mb-6">Service Delivery <span className="text-blue-600">Framework</span></h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Our MSOC, MNOC, and Cloud Ops capabilities align with industry-standard platforms and ITIL frameworks, supported by a robust ecosystem of industry-grade tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm`}>
                      <cap.icon className={`w-7 h-7 ${cap.color} group-hover:text-white transition-colors`} />
                    </div>
                    {cap.isAlwaysOn && (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">24/7 Available</span>
                      </div>
                    )}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold border border-blue-600/30 px-3 py-1 rounded-full">
                    Capability
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{cap.name}</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">{cap.desc}</p>
                <div className="pt-8 border-t border-gray-200">
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">Toolsets & Platforms</div>
                  <p className="text-sm font-mono text-blue-600">{cap.tools}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continuous Service Improvement - Recipe 5 style */}
          <div className="mt-24 p-12 rounded-[3rem] bg-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl lg:text-5xl font-bold tracking-tighter uppercase mb-6 text-white">Continuous Service Improvement (CSI)</h3>
                  <p className="text-blue-50 text-lg font-medium leading-relaxed">
                    Following operationalization, we embed a culture of ongoing enhancement to maximize client satisfaction and service performance through regular KPI monitoring and ITIL CSI methodology.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Performance Measurement',
                    'Feedback Integration',
                    'Process Optimization',
                    'Innovation & Evolution',
                    'Governance Reviews'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                      <RefreshCw className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold uppercase tracking-widest text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise - Recipe 8 style */}
      <section className="py-24 lg:py-32 bg-gray-50 text-[#00021a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase mb-4">Our <span className="text-blue-600 italic font-serif">Promise</span></h2>
              <p className="text-gray-500 font-medium max-w-xl">
                We uphold standards that make our service delivery dependable, ensuring tailored solutions aligned with your objectives.
              </p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold text-blue-600/10 uppercase tracking-tighter">Dependable</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((promise, i) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <promise.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{promise.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{promise.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
