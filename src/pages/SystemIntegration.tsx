import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Layers, Settings, Zap, Shield, CheckCircle, Database, Network, Cpu, Share2, RefreshCw, Server } from 'lucide-react';
import CTASection from '@/components/tim/CTASection';
import { IntegrationHubVisual, ProcessFlowVisual } from '@/components/tim/SystemIntegrationVisual';
import { InfrastructureVisual, SecurityVisual, SoftwareVisual } from '@/components/tim/BusinessSolutionsVisuals';

const partners = [
  { name: 'Oracle', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Oracle_logo.svg.png' },
  { name: 'HPE', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Hewlett_Packard_Enterprise_logo.svg.png', level: 'Authorized Partner' },
  { name: 'Dell', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Dell_Logo.png' },
  { name: 'Lenovo', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Lenovo_Global_Corporate_Logo.png', level: 'GOLD Partner' },
  { name: 'VMware', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/VMware-Logo.wine.png', large: true },
  { name: 'Red Hat', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Red_Hat-Logo.wine.png', large: true },
  { name: 'Palo Alto Networks', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/PaloAltoNetworks_2020_Logo.svg.png' },
  { name: 'Fortinet', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Fortinet_logo.svg', level: 'Select Partner' },
  { name: 'CrowdStrike', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/crowdstrike.jpg', large: true },
  { name: 'Check Point', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/check-point-logo-large-2024.png', large: true },
  { name: 'NetApp', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/NetApp-Logo.wine.png', large: true, level: 'Preferred Partner' },
  { name: 'Pure Storage', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Pure-storage-vector-logo.svg' },
  { name: 'Veeam', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/veeam.png', level: 'PLATINUM Partner' },
  { name: 'SolarWinds', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/1280px-Solarwinds.png' },
  { name: 'Sophos', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Sophos-Logo.wine.png', large: true },
  { name: 'Arista Networks', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Arista-networks-logo.svg.png' },
  { name: 'Rubrik', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Rubrik_Logo.svg.png', level: 'ELITE Partner' },
  { name: 'Finastra', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Finastra_Logo_2024.png', large: true },
  { name: 'Forcepoint', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Forcepoint_Logo.png', large: true },
  { name: 'Delinea', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Delinea.jpg', large: true },
  { name: 'Progress Software', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Progress_Software_logo.png' },
  { name: 'Rocket Software', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/rocket-software-logo.png' },
  { name: 'Omnissa', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/omnissa.png' },
  { name: 'WestCon', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/westcon.png' },
  { name: 'Sangfor', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/sangfor.jpg', large: true },
  { name: 'CRIF', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Crif_logo.png' },
  { name: 'Archer', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Archer%20logo%202.webp' },
  { name: 'Comstor', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/comstor.png' },
  { name: 'TeamMate', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/TeamMate-Logo.webp', large: true },
  { name: 'Outseer', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/OUTSEER_Cropped_Color.jpg' },
  { name: 'Exus', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/exus_coral_rgb.png' },
  { name: 'Kiya.ai', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Kiya_ai_Logo.jpg', large: true },
  { name: 'Stitch', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/stitch-01.png' },
  { name: 'Nutanix', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/nutanix.png', large: true, level: 'Authorized Partner' },
  { name: 'Huawei', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/huawei.png', level: 'Silver Partner' },
  { name: 'Cisco', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/cisco.png' },
  { name: 'Meraki', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/cisco%20meraki.png' },
  { name: 'Ruckus', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/ruckus.png', large: true },
  { name: 'Ruijie', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/ruijie.png' },
];

import RelatedServices from '@/components/shared/RelatedServices';

export default function SystemIntegration() {
  return (
    <div className="min-h-screen bg-[#00021a] text-white overflow-hidden">
      
      {/* Hero Section - The Integration Hub */}
      <section className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-[pulse_8s_infinite]" />
          
          {/* Integration Grid Lines */}
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          {/* Dynamic Particle System */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 2000, 
                  y: Math.random() * 1000,
                  opacity: 0 
                }}
                animate={{ 
                  x: [null, Math.random() * 2000],
                  y: [null, Math.random() * 1000],
                  opacity: [0, 0.4, 0]
                }}
                transition={{ 
                  duration: 10 + Math.random() * 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
              />
            ))}
          </div>

          {/* Moving Connection Lines (Animated SVG) */}
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M -100 100 Q 400 300 900 100 T 1900 400"
              stroke="#3b82f6"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M -100 500 Q 600 200 1100 500 T 2100 200"
              stroke="#6366f1"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
            />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-md"
            >
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Unified Enterprise Architecture</span>
            </motion.div>

            <h1 className="text-[3.375rem] lg:text-[9rem] font-avantgarde font-bold mb-12 leading-[0.85] tracking-tighter uppercase">
              RE-ENGINEERED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                INFRASTRUCTURE
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100/70 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
              Modernize with confidence through integrated infrastructure that connects legacy investments with next-generation technologies, improving performance, scalability, and long-term business agility.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-sm rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <Link to={createPageUrl('ContactUs')}>Unify Systems</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 px-6 py-4 text-sm rounded-full text-white">
                View Architecture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Diagram Section - Interactive Nodes */}
      <section className="py-32 bg-white text-[#00021a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 mb-8">
                <Settings className="w-4 h-4 text-blue-600" />
                <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">The Blueprint</span>
              </div>
              <h2 className="text-3xl lg:text-6xl font-bold mb-8 leading-[0.9] tracking-tighter">
                COHESIVE <br /> ARCHITECTURE
              </h2>
              <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
                Unify your systems, data, and processes to improve operational efficiency, accelerate decision-making, and maximize the value of your technology investments.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Legacy Bridge', desc: 'Connecting existing hardware with next-gen software.' },
                  { title: 'Cloud Sync', desc: 'Seamless data flow between on-prem and public clouds.' },
                  { title: 'Security Core', desc: 'Unified security protocols across all integrated nodes.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="text-base font-bold">{item.title}</h4>
                      <p className="text-gray-500 font-medium text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-slate-950 rounded-[40px] p-12 flex items-center justify-center overflow-hidden border border-white/5 shadow-2xl"
            >
              <IntegrationHubVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Technical Grid */}
      <section className="py-32 bg-[#00021a] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl lg:text-7xl font-bold mb-6 tracking-tighter uppercase">CORE CAPABILITIES</h2>
            <p className="text-xl text-blue-100/50 max-w-2xl mx-auto font-medium">
              End-to-end design and implementation of modern enterprise infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Data Center Solutions',
                desc: 'Modern infrastructure design, from servers to high-performance storage.'
              },
              {
                icon: Network,
                title: 'Network Infrastructure',
                desc: 'Robust, high-speed networks serving as the backbone for digital operations.'
              },
              {
                icon: Shield,
                title: 'Security Integration',
                desc: 'Embedding advanced security protocols across your entire technology stack.'
              },
              {
                icon: Cpu,
                title: 'Hardware Unification',
                desc: 'Seamless communication between diverse hardware and software platforms.'
              },
              {
                icon: Zap,
                title: 'Performance Tuning',
                desc: 'Fine-tuning integrated systems for maximum efficiency and minimal latency.'
              },
              {
                icon: Layers,
                title: 'Hybrid Cloud Sync',
                desc: 'Connecting on-premise infrastructure with public and private clouds.'
              }
            ].map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                <p className="text-blue-100/40 leading-relaxed font-medium text-sm">
                  {capability.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process - Vertical Timeline */}
      <section className="py-32 bg-white text-[#00021a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-7xl font-bold mb-12 leading-[0.9] tracking-tighter uppercase">THE <br /> PROCESS</h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Assessment', desc: 'Analyzing your current environment and designing a custom roadmap.' },
                  { step: '02', title: 'Implementation', desc: 'Deploying and configuring the integrated solution with minimal disruption.' },
                  { step: '03', title: 'Validation', desc: 'Rigorous testing ensures all components communicate perfectly.' },
                  { step: '04', title: 'Optimization', desc: 'Continuous monitoring to ensure systems stay at peak performance.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="text-5xl font-bold text-blue-100 group-hover:text-blue-600 transition-colors duration-500">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ProcessFlowVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-32 bg-white text-[#00021a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl lg:text-8xl font-bold mb-6 tracking-tighter uppercase">BUSINESS SOLUTIONS</h2>
            <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-medium">
              Comprehensive technology stacks tailored for enterprise resilience and growth.
            </p>
          </motion.div>

          <div className="space-y-48">
            {/* 1. Infrastructure and Virtualization */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 mb-8">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span className="text-sm uppercase tracking-widest text-blue-600 font-bold">Foundation</span>
                </div>
                <h3 className="text-4xl lg:text-6xl font-bold mb-8 leading-[0.9] tracking-tighter uppercase">Infrastructure & <br /> <span className="text-blue-600">Virtualization</span></h3>
                <p className="text-2xl text-gray-500 font-medium mb-12 leading-relaxed">
                  We build the physical and virtual foundations that power modern enterprise workloads, ensuring high availability, scalability, and performance.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { title: 'Infrastructure', items: ['Hardware', 'Storage', 'HCI'] },
                    { title: 'Network', items: ['Load Balancer', 'Routers', 'Firewall'] },
                    { title: 'Platform', items: ['Virtualization', 'OS'] },
                    { title: 'Managed', items: ['SOC/NOC', 'Helpdesk'] }
                  ].map((cat, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-base font-bold text-gray-900 uppercase tracking-widest">{cat.title}</h4>
                      <ul className="space-y-1">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                            <div className="w-1 h-1 rounded-full bg-blue-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 aspect-square"
              >
                <InfrastructureVisual />
              </motion.div>
            </div>

            {/* 2. Information Management and Security */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square"
              >
                <SecurityVisual />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 mb-8">
                  <Shield className="w-4 h-4 text-red-600" />
                  <span className="text-sm uppercase tracking-widest text-red-600 font-bold">Protection</span>
                </div>
                <h3 className="text-4xl lg:text-6xl font-bold mb-8 leading-[0.9] tracking-tighter uppercase">Information <br /> <span className="text-red-600">Management & Security</span></h3>
                <p className="text-2xl text-gray-500 font-medium mb-12 leading-relaxed">
                  Protecting your most valuable asset—your data. We implement multi-layered security protocols and robust management frameworks.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { title: 'Data Protection', items: ['Backup', 'Recovery', 'Archiving'] },
                    { title: 'Endpoint', items: ['Anti-Malware', 'DLP', 'Encryption'] },
                    { title: 'Auth', items: ['APT Protection', 'VM Security'] },
                    { title: 'Patching', items: ['VA', 'Patch Mgmt'] }
                  ].map((cat, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-base font-bold text-gray-900 uppercase tracking-widest">{cat.title}</h4>
                      <ul className="space-y-1">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                            <div className="w-1 h-1 rounded-full bg-red-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 3. Software Solutions */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 border border-emerald-600/30 mb-8">
                  <Cpu className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm uppercase tracking-widest text-emerald-600 font-bold">Intelligence</span>
                </div>
                <h3 className="text-4xl lg:text-6xl font-bold mb-8 leading-[0.9] tracking-tighter uppercase">Software <br /> <span className="text-emerald-600">Solutions</span></h3>
                <p className="text-2xl text-gray-500 font-medium mb-12 leading-relaxed">
                  Driving business intelligence and operational efficiency through custom software stacks and advanced analytics.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { title: 'Apps', items: ['Orchestration', 'Lifecycle'] },
                    { title: 'Monitoring', items: ['ITSM', 'APM'] },
                    { title: 'Governance', items: ['Identity', 'Data Gov'] },
                    { title: 'Analytics', items: ['BI', 'Warehouse'] }
                  ].map((cat, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-base font-bold text-gray-900 uppercase tracking-widest">{cat.title}</h4>
                      <ul className="space-y-1">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                            <div className="w-1 h-1 rounded-full bg-emerald-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 aspect-square"
              >
                <SoftwareVisual />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - High Contrast Light Background */}
      <section className="py-32 bg-white text-[#00021a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl lg:text-6xl font-bold mb-6 tracking-tighter uppercase">STRATEGIC PARTNERS</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              Collaborating with world-class technology providers to deliver best-of-breed integration.
            </p>
          </motion.div>
 
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center group"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={`${partner.large ? 'h-24' : 'h-10'} w-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply group-hover:scale-110`} 
                  referrerPolicy="no-referrer"
                />
                {partner.level && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-4 text-[10px] font-bold text-blue-600 uppercase tracking-widest text-center"
                  >
                    {partner.level}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <RelatedServices />
    </div>
  );
}
