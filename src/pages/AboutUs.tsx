import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/tim/CTASection';
import { Award, Users, TrendingUp, Globe, Shield, Zap, Server, ArrowRight, CheckCircle2, Cpu, Network, Database } from 'lucide-react';

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
  { name: 'Robin S. Pantuca', title: 'Sr. Assistant Vice President – Pre-sales and Product Management' },
  { name: 'Michael M. De Guzman', title: 'Vice President – FSI Business' },
  { name: 'Mylene B. Espinola', title: 'Sr. Assistant Vice President – Managed Services and Technical Support Group' },
  { name: 'Bryan Paul L. Javier', title: 'Assistant Vice President – Enterprise Sales' },
  { name: 'Kristian Rey Trinidad', title: 'Chief Risk and Information Security Officer' },
  { name: 'Jayson C. Chico', title: 'Information and Communications Technology Head' },
  { name: 'Ivy B. Kua', title: 'Organizational Capability and Design Head' },
  { name: 'Jose Carlo C. La Rosa', title: 'Technology Solutions Delivery Group Head' }
];

const milestones = [
  { year: '1985', event: 'Founded as ICT Pioneer', icon: Award },
  { 
    year: '1994', 
    event: 'Pioneered Commercial Data Center Services', 
    details: 'Infrastructure acquired by Equinix in 2025',
    icon: Server 
  },
  { year: '2020', event: 'Regional Expansion & Cloud Leadership', icon: Globe },
  { year: '2025', event: 'AI-Powered Enterprise Solutions', icon: Zap }
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
    name: 'SOC 3',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311'
  },
  {
    name: 'ISO 22301',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso-22301.png?v=20260311'
  },
  {
    name: 'PCI-DSS',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311'
  },
  {
    name: 'CMMC Level 1',
    logo: 'https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-cmm.png'
  },
  {
    name: 'HIPAA',
    logo: 'https://marketing.timcorp.net.ph/hubfs/website/hipaa_asset.png'
  }
];

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
            <h1 className="text-[clamp(4.2rem,14.4vw,10.8rem)] font-avantgarde font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              THE LEGACY OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">EXCELLENCE</span>
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <p className="text-xl lg:text-3xl text-blue-100/60 leading-tight font-medium tracking-tight">
                Helping organizations accelerate their digital transformation and unlock the full potential of modern IT since 1985.
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
      <section className="relative py-32 lg:py-64 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <h2 className="text-4xl lg:text-7xl font-black mb-12 tracking-tighter leading-none">
                  UNWAVERING <br />
                  <span className="text-blue-500">TRUST</span>
                </h2>
                <p className="text-2xl text-blue-100/40 font-medium leading-snug mb-12">
                  Founded in 1985, Total Information Management Corporation (TIM) has evolved into one of the country’s trusted business technology providers.
                </p>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-sm uppercase tracking-widest font-bold">Our Full History</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-24 lg:pt-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-3xl"
              >
                <div className="absolute -top-12 -right-12 text-[15rem] font-black text-white/[0.03] select-none pointer-events-none">01</div>
                <h3 className="text-xl font-bold mb-6 text-blue-400">The Inception</h3>
                <p className="text-lg text-blue-100/60 font-light leading-relaxed">
                  Founded in 1985, Total Information Management Corporation (TIM) has evolved into one of the country’s trusted business technology providers, helping organizations accelerate their digital transformation and unlock the full potential of modern IT. What began as a supplier of IT equipment and peripherals has grown into a full-service technology solutions company delivering systems integration, data center services, cloud platforms, cybersecurity, and managed IT operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-3xl"
              >
                <div className="absolute -top-12 -right-12 text-[15rem] font-black text-white/[0.03] select-none pointer-events-none">02</div>
                <h3 className="text-xl font-bold mb-6 text-blue-400">The Evolution</h3>
                <p className="text-lg text-blue-100/60 font-medium leading-relaxed">
                  For four decades, TIM has supported leading enterprises, financial institutions, and emerging businesses with reliable infrastructure and strategic technology expertise. Its solutions help organizations modernize their IT environments, strengthen data protection, and operate resilient digital platforms in an increasingly connected world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-3xl"
              >
                <div className="absolute -top-12 -right-12 text-[15rem] font-black text-white/[0.03] select-none pointer-events-none">03</div>
                <h3 className="text-xl font-bold mb-6 text-blue-400">The Future</h3>
                <p className="text-lg text-blue-100/60 font-medium leading-relaxed">
                  Today, TIM continues to deliver secure, scalable, and future-ready technology solutions that empower businesses to accelerate digital transformation and unlock the full potential of modern IT.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones - High Tech Timeline */}
      <section className="relative py-32 lg:py-64 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-12">
                SYSTEM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">LOG</span>
              </h2>
              <p className="text-xl text-blue-100/40 font-medium max-w-xl">
                A chronological record of our technological impact and strategic growth over four decades.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              {[
                { label: 'Data Centers', icon: Server },
                { label: 'Cloud Ops', icon: Network },
                { label: 'AI Ready', icon: Cpu },
                { label: 'Managed', icon: Database }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-[#00021a] p-12 hover:bg-blue-600/5 transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-700" />
                <div className="text-6xl font-black text-white/20 mb-12 group-hover:text-blue-400 transition-colors drop-shadow-lg">{milestone.year}</div>
                <div className="mb-8">
                  <milestone.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-4 tracking-tight leading-tight">{milestone.event}</h3>
                {milestone.details && (
                  <p className="text-xs text-blue-100/40 font-medium leading-relaxed uppercase tracking-widest">{milestone.details}</p>
                )}
              </motion.div>
            ))}
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
                THE <br />
                <span className="text-blue-500">ARCHITECTS</span>
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
                  className={`h-12 lg:h-16 w-auto object-contain transition-all duration-500 hover:scale-110 ${cert.name === 'ISO 22301' ? 'brightness-0 invert' : ''}`}
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
