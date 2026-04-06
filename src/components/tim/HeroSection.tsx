import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

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
    id: 'soc3',
    name: 'SOC 3',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311'
  },
  {
    id: 'iso22301',
    name: 'ISO 22301',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso-22301.png?v=20260311'
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
    name: 'HIPAA',
    logo: 'https://marketing.timcorp.net.ph/hubfs/website/hipaa.png'
  }
];

const LaurelWreath = ({ className, side = 'left' }: { className?: string, side?: 'left' | 'right' }) => (
  <img 
    src="https://marketing.timcorp.net.ph/hubfs/website/leafAsset%201@4x.png?v=20260311"
    alt=""
    referrerPolicy="no-referrer"
    className={`${className} ${side === 'left' ? 'scale-x-[-1]' : ''} object-contain`}
  />
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#00021a] overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-[pulse_8s_infinite]" />
        
        {/* Neural Grid Lines */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Floating Data Nodes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            initial={{ 
              x: Math.random() * 2000 - 1000, 
              y: Math.random() * 2000 - 1000 
            }}
            animate={{ 
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        >
          <source src="https://marketing.timcorp.net.ph/hubfs/website/hero%20background%20720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />
      </div>

      {/* Hero Content */}
      <div className="flex-grow flex items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-20">
        <div className="flex flex-col items-center text-center w-full">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-none relative z-10 flex flex-col items-center w-full"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-[clamp(2.4rem,11.2vw,5.2rem)] lg:text-[clamp(3rem,11.2vw,5.2rem)] font-avantgarde font-bold leading-[0.95] lg:leading-[0.85] tracking-tighter px-4 lg:px-0 mx-auto w-full mb-12 lg:mb-10 uppercase text-center">
                {/* Mobile/Tablet View: 4 lines */}
                <span className="lg:hidden">
                  <span className="block text-white">Turning</span>
                  <span className="block text-white">Technology</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 pb-1 px-4">Into Business</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 pb-1 px-4">Efficiency</span>
                </span>
                
                {/* Desktop View: 2 lines */}
                <span className="hidden lg:block">
                  <span className="block text-white whitespace-nowrap">Turning Technology</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 pb-2 whitespace-nowrap px-4">Into Business Efficiency</span>
                </span>
              </h1>
              
              <p className="text-[clamp(0.875rem,4vw,1.75rem)] lg:text-[clamp(0.875rem,3.2vw,1.4rem)] text-blue-100/70 leading-relaxed max-w-3xl px-4 sm:px-6 font-medium mb-16 lg:mb-12">
                Empowering enterprise growth with secure, flexible, and future-ready ICT business solutions and services.
              </p>
            </div>

            {/* Certifications Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-10 w-full px-6 transition-all duration-700"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                  className="relative group flex-shrink-0"
                >
                  <Link to={`${createPageUrl('Compliance')}#${cert.id}`} className="block transition-all duration-300 hover:scale-110">
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className={`h-10 sm:h-12 lg:h-11 w-auto object-contain ${cert.name === 'ISO 22301' ? 'filter brightness-0 invert' : ''}`}
                    />
                  </Link>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap bg-black/80 text-white text-xs px-3 py-1.5 rounded-md border border-white/10 backdrop-blur-sm">
                    {cert.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
