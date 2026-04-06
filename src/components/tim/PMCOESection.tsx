import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  Shield, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  Award,
  Zap,
  BarChart,
  Settings,
  Server,
  Code,
  Cloud,
  Trophy,
  BookOpen,
  Medal,
  Flag
} from 'lucide-react';

const testimonials = [
  {
    text: "I appreciated the project manager's clear communication, strong coordination across teams, and proactive handling of risks and dependencies. Their structured tracking and consistent follow-through were key in keeping the Migration to TIM project on schedule and running smoothly.",
    author: "N.D",
    role: "Project Manager"
  },
  {
    text: "Ability to adapt to changes during the course of the project to meet the client's dynamic needs.",
    author: "A.G",
    role: "Delivery Lead / Project Manager"
  },
  {
    text: "The Project Manager demonstrated excellent communication, strong organization, and proactive problem-solving throughout the Nutanix Implementation. Their leadership ensured the project stayed on track, risks were managed early, and deliverables met high standards.",
    author: "A.L",
    role: "IT Support"
  },
  {
    text: "Consistently delivered projects on time and within scope, demonstrating strong leadership, effective communication, and proactive risk management.",
    author: "K.T.S",
    role: "Payment Projects Officer / Project Manager"
  },
  {
    text: "Service rendered in the implementation of the project is very good! All our concerns were readily clarified and addressed! Initiative to push the project implementation on time is evident in the series of collaboration made.",
    author: "P.F",
    role: "Client"
  }
];

const focusAreas = [
  {
    title: 'Standardized Governance',
    desc: 'Implementing uniform project management methodologies across all business units to ensure consistency and quality.',
    icon: Shield
  },
  {
    title: 'Strategic Risk Management',
    desc: 'Proactive identification and mitigation of project risks using PRMP® certified frameworks.',
    icon: Target
  },
  {
    title: 'Process Efficiency',
    desc: 'Leveraging Lean Six Sigma principles to eliminate waste and optimize project delivery timelines.',
    icon: Zap
  },
  {
    title: 'Value-Focused Delivery',
    desc: 'Ensuring every project outcome is directly aligned with the client\'s strategic business objectives.',
    icon: TrendingUp
  }
];

const roadmap = [
  { 
    year: '2018', 
    title: 'Project Management Group', 
    desc: 'Our journey began in 2018 with the establishment of the Project Management Group. Back then, our focus was simple: bring structure, consistency, and support to every project we touched. Over the years, the team grew, our expertise strengthened, and the value we delivered became clearer across the organization.',
    isMilestone: true
  },
  { 
    year: '2019', 
    title: 'ITIL Certifications', 
    desc: 'Acquisition of ITIL certifications to align project delivery with IT Service Management standards.',
    isMilestone: false 
  },
  { 
    year: '2021', 
    title: 'Project Management Office', 
    desc: 'In 2021, we took a major step forward and transformed into the Project Management Office. This marked a shift from supporting projects to leading the way in standards, governance, and delivery excellence. We expanded our role, introduced better processes, and built stronger partnerships with teams across the company.',
    isMilestone: true
  },
  { 
    year: '2022', 
    title: 'Framework & PMP Start', 
    desc: 'Creation of PM Framework, policies, and guidelines. Started PMP certifications for 3 Project Managers.',
    isMilestone: false 
  },
  { 
    year: '2023', 
    title: 'Specialization & Knowledge', 
    desc: 'Acquired RMP and CAPM certifications. Launched Inyo-Pathability knowledge-sharing repository.',
    isMilestone: false 
  },
  { 
    year: '2025', 
    title: 'Digital Integration', 
    desc: 'SharePoint development for centralized resources. Functional Consultant started CAPM training.',
    isMilestone: false 
  },
  { 
    year: '2026', 
    title: 'PMCoE Alignment', 
    desc: 'Transition to PMCoE. Lean Six Sigma certification, Dashboard creation, and PgMP training.',
    isMilestone: false 
  },
  { 
    year: '2027', 
    title: 'Project Management Center of Excellence', 
    desc: 'And this journey doesn’t stop here. By 2027, we aim to achieve what we’ve been working toward all along: becoming a Project Management Center of Excellence. This means elevating our capabilities, maturing our practices, and positioning the PMO as a strategic driver for the entire organization. It’s a goal we’re ready for, and a milestone we’re excited to reach together.',
    isMilestone: true
  }
];

const pyramidLevels = [
  {
    level: 4,
    title: 'LEADERSHIP & STRATEGY',
    certs: ['Program Management Professional (PgMP)', 'Portfolio Management Professional (PfMP)'],
    icon: Trophy,
    color: 'from-blue-400 to-blue-500'
  },
  {
    level: 3,
    title: 'SPECIALIZATION PROJECT',
    certs: ['Risk Management Professional (RMP)', 'Project Scheduling Professional (SP)'],
    icon: Target,
    color: 'from-blue-500 to-blue-600'
  },
  {
    level: 2,
    title: 'PRACTITIONER',
    certs: ['Project Management Professional (PMP)', 'Agile Certified Practitioner (ACP)'],
    icon: Medal,
    color: 'from-blue-600 to-blue-700'
  },
  {
    level: 1,
    title: 'FOUNDATION PROJECT',
    certs: ['Project Management Ready', 'Certified Associate in Project Management (CAPM)'],
    icon: BookOpen,
    color: 'from-blue-700 to-blue-800'
  }
];

const frameworkLogos = [
  { name: 'CAPM', logo: 'https://marketing.timcorp.net.ph/hubfs/website/pmo/capm.png' },
  { name: 'Lean Six Sigma', logo: 'https://marketing.timcorp.net.ph/hubfs/website/pmo/lean%20sigma%20six.png' },
  { name: 'PMI-RMP', logo: 'https://marketing.timcorp.net.ph/hubfs/website/pmo/pmi-rmp.png' },
  { name: 'PMP', logo: 'https://marketing.timcorp.net.ph/hubfs/website/pmo/PMP.png' },
  { name: 'ITIL', logo: 'https://marketing.timcorp.net.ph/hubfs/MSOC%20icons/cybersec%20cert/ITIL.png' }
];

const streams = [
  { 
    title: 'BUSINESS ANALYST', 
    subtitle: 'ANALYSIS STREAM',
    icon: Trophy,
    categories: [
      {
        name: 'PROFESSIONAL MASTERY',
        icon: Medal,
        items: ['PBA (Professional in BA)', 'CBAP (Certified BA)']
      },
      {
        name: 'OPERATIONAL EFFICIENCY',
        icon: Zap,
        items: ['Lean Six Sigma Green Belt', 'Lean Six Sigma Black Belt']
      }
    ]
  },
  { 
    title: 'FUNCTIONAL CONSULTANT', 
    subtitle: 'SOLUTIONS STREAM',
    icon: Shield,
    categories: [
      {
        name: 'AGILE FRAMEWORKS',
        icon: Shield,
        items: ['CAPM (Associate in PM)', 'ACP (Agile Practitioner)', 'Scrum Master']
      },
      {
        name: 'BUSINESS ANALYSIS',
        icon: Briefcase,
        items: ['Professional in Business Analysis']
      }
    ]
  }
];

const completedProjects = [
  {
    title: 'Application - System Development',
    icon: Briefcase,
    items: [
      'Governance, Risk, and Compliance (GRC)',
      'Audit Management System (AMS)',
      'Fraud Management System (FMS)',
      'Human Resources Info System (HRIS)',
      'Credit Info Management (CRIMS)'
    ]
  },
  {
    title: 'Network / Security',
    icon: Shield,
    items: [
      'Vulnerability Assessment & Pentesting',
      'MSOC & MNOC Implementation',
      'Threat Intelligence'
    ]
  },
  {
    title: 'IT Infrastructure & Solutions',
    icon: Server,
    items: [
      'Server Refresh Projects',
      'Storage Expansion',
      'Infrastructure Build-up (Network/Storage)',
      'Virtualization / HCI',
      'Cloud & Platform (IaaS)'
    ]
  }
];

export default function PMCOESection() {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextFeedback = () => setCurrentFeedback((prev) => (prev + 1) % testimonials.length);
  const prevFeedback = () => setCurrentFeedback((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="project-management" className="py-32 relative overflow-hidden bg-[#00021a] scroll-mt-32">
      {/* Anchor for PMCOE link */}
      <div id="pmcoe" className="absolute -top-32" />
      
      {/* Background HUD Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Hero Section - Centered Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8"
          >
            <Settings className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-black">Strategic Governance</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.85]"
          >
            DRIVING PROJECT <br />
            <span className="text-blue-500">EXCELLENCE</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100/60 font-medium max-w-2xl mx-auto"
          >
            Standardizing success through our Project Management Center of Excellence.
          </motion.p>
        </div>

        {/* About PMCOE Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-black/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Briefcase className="w-64 h-64 text-blue-400" />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-4xl lg:text-6xl font-black text-blue-500 uppercase tracking-tighter mb-10">ABOUT PMCOE</h3>
              <p className="text-xl lg:text-2xl text-blue-100/80 font-medium leading-relaxed mb-16">
                We are PMCOE (Project Management Center of Excellence), driving value-focused project management across the organization. We implement standardized, scalable, and customer-centric practices that ensure strong governance, efficient execution, and measurable business outcomes.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { value: '100%', label: 'STANDARDIZED' },
                  { value: 'Global', label: 'STANDARDS' },
                  { value: 'Value', label: 'FOCUSED' }
                ].map((stat, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                    <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-black">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-black/40 backdrop-blur-xl border border-white/10 relative overflow-hidden group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Our Mission</h3>
              </div>
              <p className="text-lg text-blue-100/60 font-medium leading-relaxed">
                To transition from a traditional PMO to a PMCOE by establishing standardized, scalable, and efficient project management practices that deliver measurable business value. The PMCOE empowers globally competitive project managers through continuous learning, certifications, and adoption of industry best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-black/40 backdrop-blur-xl border border-white/10 relative overflow-hidden group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Our Vision</h3>
              </div>
              <p className="text-lg text-blue-100/60 font-medium leading-relaxed">
                To be a globally recognized Project Management Center of Excellence that drives organizational success by delivering high-value, impactful projects, while developing project managers who meet international standards of excellence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Globally Recognized Certifications Section - Redesigned */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-950/40 via-black/60 to-blue-900/20 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Award className="w-64 h-64 text-blue-400" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.6em] text-blue-400 font-black mb-4">Certifications</h3>
                  <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">Globally Recognized <span className="text-blue-500">Excellence</span></h2>
                </div>
                <p className="text-blue-100/40 font-medium max-w-md md:text-right">
                  Our team holds industry-leading certifications that ensure we deliver projects with the highest global standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {[
                  { name: 'PMP®', label: 'Project Management Professional', desc: 'The gold standard in project management.' },
                  { name: 'CAPM®', label: 'Certified Associate in Project Management', desc: 'Foundational excellence in project delivery.' },
                  { name: 'PRMP®', label: 'Project Risk Management Professional', desc: 'Advanced expertise in risk identification.' },
                  { name: 'Lean Six Sigma', label: 'Process Improvement', desc: 'Optimizing efficiency and reducing waste.' },
                  { name: 'ITIL®', label: 'IT Infrastructure Library', desc: 'Best practices for IT service management.' }
                ].map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-blue-500/5 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                      <CheckCircle2 className="w-16 h-16 text-blue-400" />
                    </div>
                    
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-7 h-7 text-blue-400" />
                    </div>
                    
                    <div className="text-2xl font-black text-white mb-2 tracking-tight">{cert.name}</div>
                    <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-4">{cert.label}</div>
                    <p className="text-sm text-blue-100/40 font-medium leading-relaxed">
                      {cert.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-16 border-t border-white/10">
                <div className="flex flex-col items-center">
                  <h4 className="text-xs uppercase tracking-[0.4em] text-blue-400/60 font-black mb-12">Frameworks & Methodologies</h4>
                  <div className="flex flex-wrap gap-12 lg:gap-20 items-center justify-center">
                    {frameworkLogos.map((logo, i) => (
                      <motion.div
                        key={logo.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img 
                          src={logo.logo} 
                          alt={logo.name} 
                          className="h-16 lg:h-24 w-auto object-contain relative z-10 hover:scale-110 transition-all duration-500 grayscale hover:grayscale-0 opacity-40 hover:opacity-100" 
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Roadmap Section - Vertical Road Timeline */}
        <div className="mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h3 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">OUR <span className="text-blue-500">JOURNEY</span></h3>
            <p className="text-blue-100/60 font-medium max-w-2xl mx-auto">From establishment to strategic excellence, follow our path of evolution.</p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* The Road - Enhanced literal design */}
            <div className="absolute left-1/2 top-0 bottom-0 w-32 bg-zinc-900 -translate-x-1/2 hidden lg:block overflow-hidden border-x-4 border-zinc-700 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* Asphalt Texture */}
              <div className="absolute inset-0 opacity-60 bg-[url('https://www.transparenttextures.com/patterns/asphalt-dark.png')]" />
              
              {/* Shoulder Lines (Solid White) */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-white/40" />
              <div className="absolute right-2 top-0 bottom-0 w-1 bg-white/40" />
              
              {/* Center Line (Dashed Yellow) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-yellow-500/60 -translate-x-1/2" />
              
              {/* Moving Dash Line for 2026-2027 (Progress Animation) */}
              <div 
                className="absolute left-1/2 w-1.5 -translate-x-1/2 z-10 overflow-hidden shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                style={{ 
                  top: '84%', 
                  height: '11%', 
                }}
              >
                <motion.div 
                  className="w-full h-[200%]"
                  style={{ 
                    background: 'repeating-linear-gradient(to bottom, #facc15, #facc15 12px, transparent 12px, transparent 24px)'
                  }}
                  animate={{
                    y: ["0%", "-50%"]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Progress Comet (2026 -> 2027) */}
              <motion.div 
                className="absolute left-1/2 w-3 h-3 bg-yellow-400 rounded-full -translate-x-1/2 z-20 shadow-[0_0_20px_#facc15,0_0_40px_#facc15]"
                animate={{
                  top: ['84%', '95%'],
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Road Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-500/10" />
            </div>

            <div className="space-y-24 relative">
              {/* Mobile Connecting Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/20 -translate-x-1/2 lg:hidden" />
              
              {/* Mobile Progress Animation (2026 -> 2027) */}
              <motion.div 
                className="absolute left-1/2 w-1 bg-blue-400 -translate-x-1/2 lg:hidden z-10 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                style={{ top: '84%', height: '11%' }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  backgroundColor: ['#60a5fa', '#3b82f6', '#60a5fa']
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {roadmap.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Content Side */}
                    <div className={`w-full lg:w-1/2 ${item.isMilestone ? 'opacity-100' : 'opacity-80'} ${isEven ? 'lg:pl-24 lg:text-left' : 'lg:pr-24 lg:text-right'} relative text-center`}>
                      {/* Pitstop Arrow - Enhanced with pulsing dot */}
                      <motion.div 
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`absolute top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-0 ${isEven ? 'left-0' : 'right-0 flex-row-reverse'}`}
                      >
                        {/* The Line */}
                        <div className={`w-16 h-px bg-gradient-to-r ${isEven ? 'from-blue-500 to-transparent' : 'from-transparent to-blue-500'} shadow-[0_0_10px_rgba(59,130,246,0.5)]`} />
                        
                        {/* The Arrow Head */}
                        <div className={`w-3 h-3 rotate-45 border-t-2 border-r-2 border-blue-400 ${isEven ? 'rotate-[225deg] -mr-1.5' : 'rotate-45 -ml-1.5'}`} />
                        
                        {/* Pulsing Dot at the start of the arrow (near the road) */}
                        <div className="relative flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                        </div>
                      </motion.div>

                      {item.isMilestone ? (
                        <div className={`p-10 rounded-[3rem] bg-gradient-to-br from-blue-900/40 to-black/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all relative group text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                          <div className={`absolute top-0 left-1/2 lg:${isEven ? 'left-0' : 'right-0'} -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 p-5 bg-blue-600 rounded-3xl font-black text-2xl shadow-2xl shadow-blue-600/40 z-30 group-hover:scale-110 transition-transform border border-white/20`}>
                            {item.year}
                          </div>
                          <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-tight mt-6">{item.title}</h4>
                          <p className="text-blue-100/70 leading-relaxed font-medium text-base">
                            {item.desc}
                          </p>
                          
                          {/* Decorative HUD element */}
                          <div className={`absolute bottom-6 ${isEven ? 'lg:right-6 right-1/2 translate-x-1/2 lg:translate-x-0' : 'lg:left-6 left-1/2 -translate-x-1/2 lg:translate-x-0'} opacity-20`}>
                            <Target className="w-12 h-12 text-blue-400" />
                          </div>
                        </div>
                      ) : (
                        <div className={`flex flex-col ${isEven ? 'lg:items-start' : 'lg:items-end'} items-center gap-2`}>
                           <span className="text-blue-400 font-black text-3xl tracking-tighter">{item.year}</span>
                           <span className="text-white/80 font-black text-sm uppercase tracking-[0.3em]">{item.title}</span>
                           <p className="text-blue-100/40 text-sm max-w-xs font-medium leading-relaxed">
                             {item.desc}
                           </p>
                        </div>
                      )}
                    </div>

                    {/* Road Marker Side - Flag Icons */}
                    <div className="relative z-20 flex items-center justify-center w-32 h-32">
                      {item.isMilestone ? (
                        <motion.div 
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className="relative flex items-center justify-center group cursor-pointer"
                        >
                          {/* Large Flag for Milestones */}
                          <div className="w-16 h-16 bg-blue-600 rounded-full border-4 border-white shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center z-10">
                            <Flag className="w-8 h-8 text-white fill-white" />
                          </div>
                          
                          {/* Label for Milestone */}
                          <div className="absolute -top-8 bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            MILESTONE {item.year}
                          </div>

                          {/* Animated Pulse */}
                          <div className="absolute inset-0 w-20 h-20 rounded-full bg-blue-500 animate-ping opacity-20" />
                        </motion.div>
                      ) : (
                        <motion.div 
                          whileHover={{ scale: 1.2 }}
                          className="relative flex flex-col items-center group cursor-pointer"
                        >
                          {/* Small Flag for other pitstops */}
                          <div className="w-10 h-10 bg-zinc-800 rounded-full border-2 border-white/40 flex items-center justify-center hover:border-blue-400 transition-colors">
                            <Flag className="w-4 h-4 text-blue-400" />
                          </div>
                          
                          {/* Year Label */}
                          <span className="text-[8px] font-black text-white/40 mt-2 uppercase tracking-tighter">{item.year}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Empty Side for Spacing */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certification Framework Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-md"
          >
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-black">Professional Excellence</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8"
          >
            CERTIFICATION <br />
            <span className="text-blue-500">FRAMEWORK</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-blue-100/60 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Project Management is the application of processes, methods, skills, knowledge, and experience to achieve specific project objectives according to the project acceptance criteria within agreed parameters.
          </motion.p>
        </div>

        {/* Mastery Path Section (Solo in a row) */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-16">
              <div>
                <h3 className="text-2xl lg:text-3xl font-black tracking-tighter uppercase mb-1">PROJECT MANAGEMENT</h3>
                <span className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-black">MASTERY PATH</span>
              </div>
              <div className="flex gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === (hoveredLevel !== null ? 4 - hoveredLevel : 3) ? 'bg-blue-500' : 'bg-blue-500/20'}`} />
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-40 items-stretch">
              {/* Pyramid Visual */}
              <div className="relative w-full max-w-[500px] aspect-[4/5] flex flex-col shrink-0 mx-auto lg:mx-0">
                {pyramidLevels.map((level, index) => {
                  // Perfect Slope Logic:
                  // Level 4 (index 0): polygon(50% 0%, 62.5% 100%, 37.5% 100%)
                  // Level 3 (index 1): polygon(37.5% 0%, 62.5% 0%, 75% 100%, 25% 100%)
                  // Level 2 (index 2): polygon(25% 0%, 75% 0%, 87.5% 100%, 12.5% 100%)
                  // Level 1 (index 3): polygon(12.5% 0%, 87.5% 0%, 100% 100%, 0% 100%)
                  
                  const clipPaths = [
                    'polygon(50% 0%, 62.5% 100%, 37.5% 100%)',
                    'polygon(37.5% 0%, 62.5% 0%, 75% 100%, 25% 100%)',
                    'polygon(25% 0%, 75% 0%, 87.5% 100%, 12.5% 100%)',
                    'polygon(12.5% 0%, 87.5% 0%, 100% 100%, 0% 100%)'
                  ];

                  const isHovered = hoveredLevel === level.level;

                  return (
                    <motion.div
                      key={level.level}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      onMouseEnter={() => setHoveredLevel(level.level)}
                      onMouseLeave={() => setHoveredLevel(null)}
                      className="relative flex-1 flex flex-col items-center justify-center cursor-pointer group"
                    >
                      {/* Trapezoid Shape with Perfect Slope */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-b ${level.color} transition-all duration-500 shadow-2xl`}
                        style={{
                          clipPath: clipPaths[index],
                          opacity: hoveredLevel === null || isHovered ? 0.9 : 0.3,
                          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                          filter: isHovered ? 'brightness(1.2) saturate(1.2)' : 'none'
                        }}
                      >
                        {/* Inner Glow & Texture */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-40" />
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        
                        {/* Active Border Glow */}
                        {isHovered && (
                          <div className="absolute inset-0 bg-blue-400/20 blur-md animate-pulse" />
                        )}
                      </div>
                      
                      {/* Content inside shape */}
                      <div className={`relative z-10 flex flex-col items-center text-center transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                        <level.icon className={`w-7 h-7 mb-1 drop-shadow-lg transition-colors ${isHovered ? 'text-white' : 'text-white/80'}`} />
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white drop-shadow-lg">LEVEL {level.level}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Labels on the right with Advanced Arrow Connectors */}
              <div className="flex flex-col flex-1 gap-0">
                {pyramidLevels.map((level, index) => {
                  const isHovered = hoveredLevel === level.level;
                  
                  return (
                    <div 
                      key={level.level} 
                      onMouseEnter={() => setHoveredLevel(level.level)}
                      onMouseLeave={() => setHoveredLevel(null)}
                      className={`flex-1 flex flex-col justify-center border-l border-dashed transition-all duration-500 pl-12 relative py-6 cursor-pointer ${isHovered ? 'border-blue-400/60 bg-blue-500/5' : 'border-blue-400/10'}`}
                    >
                      {/* Advanced Arrow Line Connector */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2">
                        {/* Dynamic Line (to the left) */}
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: 180 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                          className={`absolute right-0 top-1/2 -translate-y-1/2 h-px transition-all duration-500 ${isHovered ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]' : 'bg-gradient-to-r from-transparent via-blue-400/20 to-blue-400/40'}`}
                        />
                        
                        {/* Glowing Junction Dot */}
                        <div className={`w-3 h-3 rounded-full transition-all duration-500 -translate-x-1/2 relative z-10 ${isHovered ? 'bg-blue-400 scale-125 shadow-[0_0_20px_rgba(96,165,250,1)]' : 'bg-blue-400/40 shadow-[0_0_10px_rgba(96,165,250,0.3)]'}`}>
                          <div className={`absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 ${isHovered ? 'block' : 'hidden'}`} />
                        </div>
                        
                        {/* Arrow Head (to the right) */}
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 transition-all duration-500 rotate-45 ${isHovered ? 'border-blue-400' : 'border-blue-400/40'}`} />
                      </div>
                      
                      <motion.div
                        animate={{ 
                          x: isHovered ? 10 : 0,
                          opacity: hoveredLevel === null || isHovered ? 1 : 0.4
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className={`text-lg font-black uppercase tracking-[0.25em] transition-colors duration-500 mb-2 ${isHovered ? 'text-blue-400' : 'text-blue-400/70'}`}>
                          {level.title}
                        </h4>
                        <div className="space-y-2">
                          {level.certs.map((cert) => (
                            <p key={cert} className={`text-sm font-medium leading-tight transition-colors duration-500 ${isHovered ? 'text-blue-100' : 'text-blue-100/50'}`}>
                              {cert}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Analysis & Solutions Streams Section (Solo in a row) */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {streams.map((stream, index) => (
                <div key={stream.title} className="p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden group">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <stream.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tighter">{stream.title}</h4>
                      <div className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-black">{stream.subtitle}</div>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {stream.categories.map((cat) => (
                      <div key={cat.name} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                          <cat.icon className="w-4 h-4 text-blue-400/60" />
                          <h5 className="text-[10px] uppercase tracking-widest text-blue-400 font-black">{cat.name}</h5>
                        </div>
                        <ul className="space-y-3">
                          {cat.items.map(item => (
                            <li key={item} className="flex items-start gap-3 text-xs text-blue-100/60 font-medium leading-tight">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Completed Projects Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">COMPLETED <span className="text-blue-500">PROJECTS</span></h3>
            <p className="text-blue-100/60 font-medium">A showcase of complex projects successfully delivered by our PMCOE.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {completedProjects.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <cat.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="text-xl font-black text-white mb-8 uppercase tracking-tight leading-tight">{cat.title}</h4>
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-blue-100/50 font-medium leading-snug group/item">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative pt-16 border-t border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Quote className="w-20 h-20 text-blue-500/10" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] sm:h-[250px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeedback}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="text-center px-12"
                >
                  <p className="text-xl lg:text-2xl text-blue-100/80 font-medium leading-relaxed italic mb-8">
                    "{testimonials[currentFeedback].text}"
                  </p>
                  <div>
                    <div className="text-white font-bold text-lg">{testimonials[currentFeedback].author}</div>
                    <div className="text-blue-400 text-xs uppercase tracking-[0.3em] font-black">{testimonials[currentFeedback].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-8 mt-8">
              <button 
                onClick={prevFeedback}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-blue-500/50 transition-all group"
              >
                <ChevronLeft className="w-5 h-5 text-blue-400 group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentFeedback(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentFeedback ? 'w-8 bg-blue-500' : 'bg-white/20'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextFeedback}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-blue-500/50 transition-all group"
              >
                <ChevronRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
