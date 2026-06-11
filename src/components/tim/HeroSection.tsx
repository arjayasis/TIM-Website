import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  MousePointer2
} from 'lucide-react';

const certifications = [
  {
    id: 'iso9001',
    name: 'ISO 9001',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/high%20res.png?v=20260311'
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso%2027001.png?v=20260311'
  },
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311'
  },
  {
    id: 'bsi',
    name: 'ISO 22301',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/iso-22301%20white.png'
  },
  {
    id: 'pcidss',
    name: 'PCI-DSS',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311'
  },
  {
    id: 'cmmc',
    name: 'CMMC Level 1',
    logo: 'https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-cmm.png'
  },
  {
    id: 'hipaa',
    name: 'HIPAA Compliant',
    logo: 'https://marketing.timcorp.net.ph/hubfs/website/hipaa_asset.png'
  },
  {
    id: 'dict-dtap',
    name: 'DICT D-TAP',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/DTAP-Logo.png'
  },
  {
    id: 'csa-star-1',
    name: 'CSA STAR Level 1',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/CSA%20STAR%201.svg'
  }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#00021a] overflow-hidden pt-20">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* HTML5 Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="https://marketing.timcorp.net.ph/hubfs/website/hero%20background.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[#00021a]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00021a] via-transparent to-[#00021a] z-10" />
      </div>

      <div className="flex-grow flex items-center justify-center relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 text-center">
        <div className="max-w-4xl flex flex-col items-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-bold leading-tight tracking-tight uppercase mb-6">
              <span className="block text-white">Turning Technology</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Into Business Efficiency
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg lg:text-2xl text-slate-300 font-medium max-w-none mx-auto mb-12"
          >
            Secure, flexible, and future-ready ICT solutions and services
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/#ServicesGrid">
              <Button size="lg" className="h-14 px-8 border border-blue-500 bg-transparent hover:bg-blue-600/20 text-white rounded-md text-sm font-black uppercase tracking-widest flex gap-4 group">
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-12 mt-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="h-[1px] flex-grow bg-slate-800" />
            <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-slate-400 uppercase whitespace-nowrap">
              Certified on Global Standards
            </span>
            <div className="h-[1px] flex-grow bg-slate-800" />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-between items-center gap-8 lg:gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={`${createPageUrl('Compliance')}#${cert.id === 'bsi' ? 'iso22301' : cert.id}`}>
                  <img 
                    src={cert.logo} 
                    alt={cert.name} 
                    className="h-10 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 text-[10px] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {cert.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Hint */}
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <MousePointer2 className="w-4 h-4 animate-bounce" />
            <span className="text-[10px] font-black uppercase tracking-widest">Click any badge to learn more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
