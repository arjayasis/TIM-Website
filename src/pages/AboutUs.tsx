import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/tim/CTASection';
import { Award, Users, TrendingUp, Globe, Shield, Zap, Server, ArrowRight, CheckCircle2, Cpu, Network, Database, ChevronLeft, ChevronRight } from 'lucide-react';

const boardMembers = [
  { name: 'Jose Mari M. Antunez', title: 'Chairman' },
  { name: 'Roberto A. Layson', title: 'Vice Chairman' },
  { name: 'Jaime R. Camacho', title: 'Director' },
  { name: 'Jon Mikel C. Antunez', title: 'Director' },
  { name: 'Jose Martin C. Antunez', title: 'Director' },
  { name: 'Julian Marco C. Antunez', title: 'Director' },
  { name: 'Lydia C. Antunez', title: 'Director' },
  { name: 'Ma. Verna O. Cruz', title: 'Director' },
  { name: 'Sunver Z. Bastes', title: 'Director' }
];

const officers = [
  { name: 'Jon Mikel C. Antunez', title: 'Executive Director' },
  { name: 'Sunver Z. Bastes', title: 'President' },
  { name: 'Roberto A. Layson', title: 'Senior Vice President – Special Projects' },
  { name: 'Ma. Verna O. Cruz', title: 'Senior Vice President – Finance & Admin' }
];

const managementTeam = [
  { name: 'Edgar R. Gutierrez', title: 'Sr. Vice President – Chief Revenue Officer & Head of Business Development' },
  { name: 'Maria Ruby R. Yu', title: 'Sr. Assistant Vice President – Operations, PMO and Marketing Director' },
  { name: 'Robin S. Pantuca', title: 'Field CTO' },
  { name: 'Michael M. De Guzman', title: 'Vice President – FSI Business' },
  { name: 'Mylene B. Espinola', title: 'Sr. Assistant Vice President – Managed Services and Technical Support Group' },
  { name: 'Bryan Paul L. Javier', title: 'Assistant Vice President – Enterprise Sales' },
  { name: 'Kristian Rey Trinidad', title: 'Chief Risk and Information Security Officer' },
  { name: 'Jayson C. Chico', title: 'Information and Communications Technology Head' },
  { name: 'Ivy B. Kua', title: 'Organizational Capability and Design Head' },
  { name: 'Jose Carlo C. La Rosa', title: 'Technical Solution Delivery Head' }
];

const milestones = [
  {
    year: '1985',
    event: 'Incorporated TIM Corporation',
    category: 'Strategic',
    era: '1985–2015',
    icon: Award,
    description: 'Began as Total Information Management Corporation, pioneering ICT solutions and equiping enterprises.'
  },
  {
    year: '1994',
    event: 'Launched Kings Court Data Center',
    category: 'Infrastructure',
    era: '1985–2015',
    icon: Server,
    description: 'Pioneered early commercial data center services in the Philippines.'
  },
  {
    year: '2014',
    event: 'Inaugurated Carmona Data Center to Expand Operational Capacity',
    category: 'Infrastructure',
    era: '1985–2015',
    icon: Server,
    description: 'Expanded physical data center footprints and hosting capacity to cater to enterprise scale.'
  },
  {
    year: '2016',
    event: 'Secured NTC Value-Added Service License to Enable Telecommunications Services',
    category: 'Network',
    era: '2016–2019',
    icon: CheckCircle2,
    description: 'Secured critical telecommunication licensing for high-speed value-added connectivity.'
  },
  {
    year: '2016',
    event: 'Launched Global Network Services (GNS) to Expand Connectivity Solutions',
    category: 'Network',
    era: '2016–2019',
    icon: Network,
    description: 'Built a core carrier-neutral transit network connecting the Philippines globally.'
  },
  {
    year: '2017',
    event: 'Established Managed Network Operations Center (MNOC) to Strengthen Network Management',
    category: 'Network',
    era: '2016–2019',
    icon: Database,
    description: 'Reinforced global operations oversight with continuous system health and connection analysis.'
  },
  {
    year: '2017',
    event: 'Activated Hong Kong Point of Presence to Expand Regional Presence',
    category: 'Network',
    era: '2016–2019',
    icon: Globe,
    description: 'Broadened transit pathways with active terminal routing in Hong Kong.'
  },
  {
    year: '2018',
    event: 'Introduced TIM Cloud as a Core Product to Enable Cloud Services Portfolio',
    category: 'Infrastructure',
    era: '2016–2019',
    icon: Cpu,
    description: 'Launched localized, sovereign multi-tenant enterprise cloud hosting solutions.'
  },
  {
    year: '2018',
    event: 'Achieved ISO 9001 Certification to Ensure Quality Management Excellence',
    category: 'Compliance',
    era: '2016–2019',
    icon: Shield,
    description: 'Standardized operational quality frameworks to match dynamic SLA expectations.'
  },
  {
    year: '2018',
    event: 'Achieved ISO 27001 Certification to Strengthen Information Security Management',
    category: 'Compliance',
    era: '2016–2019',
    icon: Shield,
    description: 'Established the gold standard for state-level data security and posture defense.'
  },
  {
    year: '2018',
    event: 'Achieved PCI DSS Certification to Reinforce Payment Security Compliance',
    category: 'Compliance',
    era: '2016–2019',
    icon: Shield,
    description: 'Aligned payment gateway operations with top global security standards.'
  },
  {
    year: '2019',
    event: 'Completed National Privacy Commission (NPC) Registration to Strengthen Data Privacy Compliance',
    category: 'Compliance',
    era: '2016–2019',
    icon: Shield,
    description: 'Ensured absolute safety and privacy of client databases under the Data Privacy Act.'
  },
  {
    year: '2020',
    event: 'Activated Singapore PoP to Expand Regional Connectivity',
    category: 'Network',
    era: '2020–2022',
    icon: Globe,
    description: 'Completed multi-region latency reduction by connecting key routing hubs in SG.'
  },
  {
    year: '2020',
    event: 'Operationalized the Managed Security Operations Center (MSOC) to Enhance Cybersecurity Operations',
    category: 'Cybersecurity',
    era: '2020–2022',
    icon: Shield,
    description: 'Incepted continuous log collection, correlation and security Incident Response.'
  },
  {
    year: '2020',
    event: 'Achieved ANSI/TIA-942-B Rated-3 Certification for Carmona Data Center 1 to Validate Infrastructure Resilience',
    category: 'Compliance',
    era: '2020–2022',
    icon: Award,
    description: 'Highest tier concurrent maintainability rating for physical power and cooling.'
  },
  {
    year: '2021',
    event: 'Recognized by DICT as RCAP for VAPT & ISMS to Advance Cybersecurity Leadership',
    category: 'Compliance',
    era: '2020–2022',
    icon: Award,
    description: 'Named an officially recognized provider of Vulnerability Assessment and Penetration Testing.'
  },
  {
    year: '2021',
    event: 'Launched Anti-DDoS and Cybersecurity Services to Strengthen Threat Protection Capabilities',
    category: 'Cybersecurity',
    era: '2020–2022',
    icon: Shield,
    description: 'Deployed enterprise scrubbing layers protecting infrastructure from edge attacks.'
  },
  {
    year: '2021',
    event: 'Established the Project Management Office (PMO) to Enable Enterprise Project Governance',
    category: 'Strategic',
    era: '2020–2022',
    icon: Users,
    description: 'Created centralized oversight and reporting for national deployment delivery.'
  },
  {
    year: '2022',
    event: 'Achieved SOC 2 Type 1 Certification to Strengthen Service Organization Controls',
    category: 'Compliance',
    era: '2020–2022',
    icon: Shield,
    description: 'Verified operational security process designs over defined timeline checkpoints.'
  },
  {
    year: '2023',
    event: 'Inaugurated Carmona Data Center 2 to Further Scale Data Center Capacity',
    category: 'Infrastructure',
    era: '2023–2026',
    icon: Server,
    description: 'Deployed next-generation colocation server environments for hyperscaler tenants.'
  },
  {
    year: '2023',
    event: 'Achieved SOC 2 Type 2 Certification to Demonstrate Sustained Operational Compliance',
    category: 'Compliance',
    era: '2023–2026',
    icon: Shield,
    description: 'Earned full certification for the sustained, day-to-day enforcement of data security controls.'
  },
  {
    year: '2025',
    event: 'Completed sale of Data Center Assets & Operations to Equinix',
    category: 'Strategic',
    era: '2023–2026',
    icon: TrendingUp,
    description: 'Successfully transacted physical Data Center operations to global leader Equinix.'
  },
  {
    year: '2026',
    event: 'Achieved HIPAA Certification to ensure compliance with healthcare data privacy regulations',
    category: 'Compliance',
    era: '2023–2026',
    icon: Shield,
    description: 'Secured healthcare industry frameworks for protecting patient privacy and medical records.'
  },
  {
    year: '2026',
    event: 'Launched TIM AI Innovation Program to Accelerate Digital Transformation',
    category: 'Strategic',
    era: '2023–2026',
    icon: Cpu,
    description: 'Positioned TIM to pioneer intelligence workflows, predictive models, and enterprise-grade generative AI.'
  }
];

const certifications = [
  {
    name: 'ISO 9001',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/high%20res.png?v=20260311'
  },
  {
    name: 'ISO 27001',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso%2027001.png?v=20260311'
  },
  {
    name: 'SOC 2 Type II',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311'
  },
  {
    name: 'ISO 22301',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/iso-22301%20white.png'
  },
  {
    name: 'PCI-DSS',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311'
  },
  {
    name: 'CMMC Level 1',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/cmmc%20final_level1.png'
  },
  {
    name: 'HIPAA',
    logo: 'https://marketing.timcorp.net.ph/hubfs/website/hipaa_asset.png'
  },
  {
    name: 'DICT D-TAP',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/DTAP-Logo.png'
  },
  {
    name: 'CSA STAR Level 1',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/CSA%20STAR%201.svg'
  }
];

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-[#00021a] text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Hero Section - Editorial Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 200]) }}
            className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full" 
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, -200]) }}
            className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full" 
          />
          
          {/* Background Text */}
          <motion.div 
            style={{ x: useTransform(scrollYProgress, [0, 0.5], [0, -300]), opacity: useTransform(scrollYProgress, [0, 0.3], [0.05, 0]) }}
            className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-black text-white whitespace-nowrap select-none pointer-events-none tracking-tighter"
          >
            EST. 1985
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="max-w-5xl"
          >
            <h1 className="text-[clamp(2rem,7vw,5.5rem)] font-avantgarde font-black leading-[0.95] tracking-tighter mb-12 uppercase">
              <span className="block">A LEGACY OF</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">EXCELLENCE</span>
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <p className="text-xl lg:text-3xl text-blue-100/60 leading-tight font-medium tracking-tight">
                Empowering organizations through innovative technology solutions and accelerating digital transformation since 1985.
              </p>
              <div className="flex gap-4 lg:justify-end">
                <div className="h-px w-24 bg-blue-500/50 self-center hidden lg:block" />
                <span className="text-xs uppercase tracking-widest text-blue-400/50 font-bold">Scroll to explore our story</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-12 left-6 lg:left-16 right-6 lg:right-16 flex justify-end items-end z-20">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-24 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0" 
          />
        </div>
      </section>

      {/* Legacy Section - Editorial Layout */}
      <section className="relative py-32 lg:py-48 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Fortified Since 1985</span>
                </div>

                <h2 className="tracking-tight leading-none">
                  <span className="block text-2xl lg:text-3xl uppercase tracking-[0.3em] font-light text-slate-400 mb-2">UNWAVERING</span>
                  <span className="block text-6xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 select-none">TRUST</span>
                </h2>

                <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-medium max-w-md">
                  Since 1985, Total Information Management Corporation (TIM) has been helping organizations harness technology to drive growth, efficiency, and transformation.
                </p>

                <div className="hidden lg:block pt-12">
                  <div className="w-px h-24 bg-gradient-to-b from-blue-500/60 to-transparent" />
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-12 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <h3 className="text-2xl font-bold text-white tracking-tight">The Inception</h3>
                <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed">
                  Founded in 1985, Total Information Management Corporation (TIM) has grown alongside the evolution of technology, transforming from a trusted IT equipment provider into a leading end-to-end technology solutions partner. What began as a supplier of IT hardware and peripherals has evolved into a full-service technology company delivering systems integration, cloud solutions, data center infrastructure, cybersecurity, and managed services. For over four decades, TIM has helped organizations embrace innovation, modernize operations, and unlock the full potential of digital transformation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-2xl font-bold text-white tracking-tight">The Evolution</h3>
                <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed">
                  As technology advanced, so did TIM's capabilities. Over the years, the company has become a trusted partner to leading enterprises, financial institutions, government agencies, and growing businesses. Through reliable infrastructure, strategic technology expertise, and industry-leading solutions, TIM has enabled organizations to modernize IT environments, strengthen cybersecurity, protect critical data, and build resilient digital platforms that support long-term growth and operational excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <h3 className="text-2xl font-bold text-white tracking-tight">The Future</h3>
                <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed">
                  Today, TIM continues to empower businesses with secure, scalable, and future-ready technology solutions designed for a rapidly evolving digital world. By combining deep industry expertise with innovative technologies, TIM helps organizations accelerate transformation, enhance resilience, drive operational efficiency, and realize the full value of modern IT. Committed to innovation and customer success, TIM remains focused on shaping the future of business through technology.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones - Light Mode Horizontal Timeline */}
      <section id="milestones" className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-100 scroll-mt-24">
        <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-10">
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-blue-600 font-extrabold mb-3">TIM Milestone</div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6">
                Our Journey & Evolution
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-xl">
                A direct record of our technological impact, industry conformance, and strategic growth over four decades.
              </p>
            </motion.div>
            
            {/* Navigation controls */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Scroll buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-all shadow-sm active:scale-95"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-all shadow-sm active:scale-95"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Track Structure */}
          <div className="relative mt-16">
            {/* Horizontal timeline track line */}
            <div className="absolute top-[230px] left-0 right-0 h-[2px] bg-slate-200/80 pointer-events-none z-0" />

            {/* Horizontal interactive carriage */}
            <div
              ref={scrollRef}
              className="overflow-x-auto flex gap-6 pb-6 pt-4 px-2 scroll-smooth select-none snap-x snap-mandatory h-[480px]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {milestones.map((milestone, idx) => {
                const getCategoryStyles = (category: string) => {
                  switch (category) {
                    case 'Strategic': return {
                      badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200/80',
                      dotClass: 'bg-amber-500 border-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.4)]',
                    };
                    case 'Infrastructure': return {
                      badgeClass: 'bg-cyan-50 text-cyan-700 border border-cyan-200/80',
                      dotClass: 'bg-cyan-500 border-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.4)]',
                    };
                    case 'Network': return {
                      badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200/80',
                      dotClass: 'bg-blue-500 border-blue-300 shadow-[0_0_8px_rgba(59,130,246,0.4)]',
                    };
                    case 'Cybersecurity': return {
                      badgeClass: 'bg-rose-50 text-rose-700 border border-rose-200/80',
                      dotClass: 'bg-rose-500 border-rose-300 shadow-[0_0_8px_rgba(244,63,94,0.4)]',
                    };
                    case 'Compliance': return {
                      badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
                      dotClass: 'bg-emerald-500 border-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.4)]',
                    };
                    default: return {
                      badgeClass: 'bg-slate-50 text-slate-700 border border-slate-200/80',
                      dotClass: 'bg-slate-500 border-slate-300',
                    };
                  }
                };

                const style = getCategoryStyles(milestone.category);
                const isTop = idx % 2 === 0;

                return (
                  <div
                    key={`${milestone.year}-${idx}`}
                    className="flex-shrink-0 w-[290px] sm:w-[330px] snap-start relative h-[450px]"
                  >
                    {/* Vertical Connector Line */}
                    {isTop ? (
                      <div className="absolute top-[175px] bottom-[220px] left-1/2 w-[1.5px] border-l border-dashed border-slate-300 pointer-events-none z-0" />
                    ) : (
                      <div className="absolute top-[240px] bottom-[175px] left-1/2 w-[1.5px] border-l border-dashed border-slate-300 pointer-events-none z-0" />
                    )}

                    {/* Node marker pinpoint centered on the track line */}
                    <div className="absolute top-[230px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-5 h-5 rounded-full bg-white border-[3px] border-slate-200 flex items-center justify-center shadow-sm">
                        <div className={`w-[11px] h-[11px] rounded-full ${style.dotClass}`} />
                      </div>
                    </div>

                    {/* Timeline Event Card (Alternating Top / Bottom) */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[270px] sm:w-[310px] p-5 bg-white border border-slate-200/80 rounded-2xl shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[175px] group ${
                        isTop ? 'top-0' : 'bottom-0'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2.5">
                          <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
                            {milestone.year}
                          </span>
                          <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${style.badgeClass}`}>
                            {milestone.category}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-950 mb-1.5 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                          {milestone.event}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3 font-medium">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Reimagined */}
      <section className="relative py-32 lg:py-64 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs uppercase tracking-[0.5em] text-blue-500 font-black mb-8">Leadership</div>
              <h2 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
                TIM
                <span className="text-blue-500"> LEADERSHIP</span>
              </h2>
              <p className="text-xl text-blue-100/40 font-medium leading-snug max-w-2xl">
                The strategic minds guiding TIM into the next era of enterprise computing.
              </p>
            </motion.div>
          </div>

          {/* Board of Directors */}
          <div className="mb-48">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-grow bg-white/10" />
              <h3 className="text-xs uppercase tracking-[0.5em] text-blue-500 font-black whitespace-nowrap">Board of Directors</h3>
              <div className="h-px flex-grow bg-white/10" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-12 hover:bg-white/[0.02] transition-colors group relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-700" />
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{member.name}</h4>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Principal Officers */}
          <div className="mb-48">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-grow bg-white/10" />
              <h3 className="text-xs uppercase tracking-[0.5em] text-blue-500 font-black whitespace-nowrap">Principal Officers</h3>
              <div className="h-px flex-grow bg-white/10" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
              {officers.map((officer, index) => (
                <motion.div
                  key={officer.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-10 hover:bg-white/[0.02] transition-colors group relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-700" />
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{officer.name}</h4>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">{officer.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Management Team */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-grow bg-white/10" />
              <h3 className="text-xs uppercase tracking-[0.5em] text-blue-500 font-black whitespace-nowrap">Management Team</h3>
              <div className="h-px flex-grow bg-white/10" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
              {managementTeam.map((manager, index) => (
                <motion.div
                  key={manager.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-8 hover:bg-white/[0.02] transition-colors group relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-700" />
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{manager.name}</h4>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">{manager.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* People Section - Immersive Quote */}
      <section className="relative py-48 lg:py-80 overflow-hidden bg-blue-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/20 blur-[200px] rounded-full" 
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-[8rem] font-black tracking-tighter text-white leading-none mb-16">
              TALENT <br />
              & TRUST
            </h2>
            <p className="text-2xl lg:text-4xl text-white/90 leading-tight font-medium italic tracking-tight max-w-4xl mx-auto">
              "Our people are at the center of our business and the driving force behind our success. Their expertise and passion enable us to deliver exceptional service while upholding the highest standards of quality, performance, and integrity."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications - Grayscale to Color */}
      <section className="relative py-32 lg:py-48 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.5em] text-blue-500 font-black mb-8">Compliance</div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter leading-none mb-8">
              ZERO COMPROMISE
            </h2>
            <p className="text-blue-100/40 font-medium mb-12 max-w-2xl mx-auto">
              Global standards in quality management and information security.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex justify-center flex-shrink-0"
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="h-12 lg:h-16 w-auto object-contain transition-all duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 h-auto text-sm rounded-full uppercase tracking-widest font-bold">
            <Link to={createPageUrl('Compliance')}>View Compliance Details</Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
