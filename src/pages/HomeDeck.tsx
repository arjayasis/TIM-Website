import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  Server, 
  Cpu, 
  Network, 
  Database, 
  Cloud,
  Users, 
  TrendingUp,
  CheckCircle2,
  Activity,
  Monitor,
  Brain,
  Layers,
  ShieldCheck,
  Maximize,
  Minimize,
  Terminal,
  Lock,
  Settings,
  BarChart3,
  Clock,
  ArrowRight,
  Search,
  Target,
  ShieldAlert,
  FileText,
  Headphones,
  Building2,
  Stethoscope,
  Briefcase,
  Landmark
} from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 'cover',
    type: 'cover',
    title: 'Turning Technology into Business Efficiency',
    subtitle: 'Homepage Presentation Deck',
    content: {
      logo: 'https://marketing.timcorp.net.ph/hubfs/website/TIM%20LOGO%20WHITE.png',
      tagline: 'Empowering enterprise growth with secure, flexible, and future-ready ICT business solutions and services.',
      stats: [
        { label: 'Founded', value: '1985' },
        { label: 'Experience', value: '40+ Yrs' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Support', value: '24/7/365' }
      ]
    }
  },
  {
    id: 'legacy',
    title: 'OUR LEGACY',
    subtitle: 'DECADES OF INNOVATION, TRUST, AND EXCELLENCE',
    content: {
      description: 'Since 1985, Total Information Management Corporation (TIM) has been helping organizations harness technology to drive growth, efficiency, and transformation.',
      items: [
        { icon: Award, title: '1985', desc: 'Founded as ICT Pioneer' },
        { icon: Server, title: '1994', desc: 'Pioneered Commercial Data Center Services' },
        { icon: Globe, title: '2020', desc: 'Regional Expansion & Cloud Leadership' },
        { icon: Zap, title: '2025', desc: 'AI-Powered Enterprise Solutions' }
      ]
    }
  },
  {
    id: 'capabilities',
    title: 'CORE CAPABILITIES',
    subtitle: 'END-TO-END ICT ECOSYSTEM',
    content: {
      items: [
        { icon: Monitor, title: 'Managed Operations', desc: '24/7 proactive monitoring and management.' },
        { icon: ShieldCheck, title: 'Cybersecurity', desc: 'Advanced threat detection and response.' },
        { icon: Cloud, title: 'Cloud Services', desc: 'Sovereign cloud and hybrid infrastructure.' },
        { icon: Server, title: 'Managed Infrastructure', desc: 'Optimized server and storage management.' },
        { icon: Terminal, title: 'VAPT', desc: 'Offensive security and vulnerability testing.' },
        { icon: Network, title: 'Connectivity', desc: 'Borderless global network services.' }
      ]
    }
  },
  {
    id: 'excellence',
    title: 'OPERATIONAL EXCELLENCE',
    subtitle: 'QUALITY & COMPLIANCE',
    content: {
      description: 'We adhere to the highest international standards to ensure the security and reliability of your business operations.',
      points: [
        'ISO 9001: Quality Management System',
        'ISO 27001: Information Security Management',
        'ISO 22301: Business Continuity Management',
        'PCI-DSS: Payment Card Industry Data Security',
        'SOC 3: Trust Services Criteria',
        'HIPAA: Healthcare Data Privacy'
      ]
    }
  },
  {
    id: 'industries',
    title: 'GLOBAL REACH',
    subtitle: 'SERVING DIVERSE INDUSTRIES',
    content: {
      items: [
        { icon: Landmark, title: 'Banking & Finance', desc: 'Securing mission-critical financial systems.' },
        { icon: Building2, title: 'Government', desc: 'Modernizing public sector infrastructure.' },
        { icon: Briefcase, title: 'BPO & Shared Services', desc: 'Scaling global operations with agility.' },
        { icon: Stethoscope, title: 'Healthcare', desc: 'Protecting sensitive patient data.' },
        { icon: Users, title: 'Enterprise', desc: 'Driving digital transformation for large-scale businesses.' }
      ]
    }
  },
  {
    id: 'trust',
    title: 'TRUSTED BY LEADERS',
    subtitle: 'CLIENT TESTIMONIALS',
    content: {
      items: [
        { title: 'Financial Institution', desc: '\"TIM has been instrumental in our digital transformation journey, providing unmatched reliability.\"' },
        { title: 'Global BPO', desc: '\"Their proactive managed services have significantly reduced our operational downtime.\"' },
        { title: 'Government Agency', desc: '\"A trusted partner for over a decade, ensuring our critical systems are always secure.\"' }
      ]
    }
  },
  {
    id: 'cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Empower your business with secure, flexible, and future-ready ICT solutions.',
      buttonText: 'Contact Our Experts'
    }
  }
];

export default function HomeDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#00021a] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      {/* Header / Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 lg:p-10 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-4">
          <img 
            src="https://marketing.timcorp.net.ph/hubfs/website/TIM%20LOGO%20WHITE.png" 
            alt="TIM Logo" 
            className="h-6 lg:h-8 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="h-4 w-px bg-white/20 hidden lg:block" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60 hidden lg:block">Digital Transformation Deck</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white/40">
            <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
            <div className="w-8 h-px bg-white/20" />
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>
          <button 
            onClick={toggleFullscreen}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 h-screen flex items-center justify-center px-6 lg:px-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction * 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -100, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-7xl h-[70vh] lg:h-[80vh] flex flex-col justify-center"
          >
            {slide.type === 'cover' ? (
              <div className="flex flex-col items-center text-center space-y-12">
                <motion.img 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  src={slide.content.logo} 
                  alt="TIM Logo" 
                  className="h-16 lg:h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-6">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] max-w-5xl mx-auto"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl lg:text-3xl text-blue-100/60 font-medium max-w-3xl mx-auto"
                  >
                    {slide.content.tagline}
                  </motion.p>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 pt-12"
                >
                  {slide.content.stats?.map((s: any) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl lg:text-4xl font-black text-blue-500 mb-1">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{s.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            ) : slide.type === 'cta' ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-24 h-24 rounded-3xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30"
                >
                  <ArrowRight className="w-12 h-12 text-blue-500" />
                </motion.div>
                <div className="space-y-6 max-w-2xl">
                  <p className="text-2xl lg:text-4xl font-bold text-blue-100/80 leading-relaxed">
                    {slide.content.text}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-blue-400 transition-colors flex items-center gap-4 mx-auto"
                  >
                    {slide.content.buttonText}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-4 space-y-12">
                  <div className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-6"
                    >
                      <div className="h-px w-16 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs">Module {String(currentSlide + 1).padStart(2, '0')}</span>
                    </motion.div>
                    <h2 className={cn(
                      "font-black tracking-tighter leading-[0.85] uppercase",
                      slide.title.length > 25 ? "text-3xl lg:text-5xl" : "text-4xl lg:text-6xl"
                    )}>
                      {slide.title.split(' ').map((word, i) => (
                        <motion.span 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className={cn("block", i === 0 ? "text-white" : "text-blue-500")}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </h2>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-xl lg:text-2xl text-white/30 font-bold tracking-tight leading-tight"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative p-10 lg:p-16 bg-white/[0.01] border border-white/5 rounded-[4rem] backdrop-blur-3xl overflow-hidden group shadow-2xl"
                  >
                    {/* HUD Brackets */}
                    <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-blue-500/40 rounded-tl-2xl" />
                    <div className="absolute top-10 right-10 w-12 h-12 border-t-2 border-r-2 border-blue-500/40 rounded-tr-2xl" />
                    <div className="absolute bottom-10 left-10 w-12 h-12 border-b-2 border-l-2 border-blue-500/40 rounded-bl-2xl" />
                    <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-blue-500/40 rounded-br-2xl" />

                    <div className="relative z-10 space-y-8">
                      {slide.content.description && (
                        <p className="text-xl lg:text-2xl leading-relaxed text-blue-100/70 font-medium">
                          {slide.content.description}
                        </p>
                      )}
                      
                      {slide.content.items && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {slide.content.items?.map((item: any, i: number) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-blue-500/10 transition-colors group/item relative overflow-hidden">
                              {item.icon && <item.icon className="w-8 h-8 text-blue-500 mb-4 group-hover/item:scale-110 transition-transform" />}
                              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-sm">{item.title}</h4>
                              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.content.points && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {slide.content.points?.map((p: string, i: number) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                              <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
                              <span className="text-sm font-bold text-white/80">{p}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Controls */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-6 lg:p-10 flex justify-between items-end pointer-events-none">
        <div className="flex flex-col gap-2 pointer-events-auto">
          <div className="text-[8px] uppercase tracking-[0.4em] font-black text-white/20">Navigation</div>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-500 hover:border-blue-500 disabled:opacity-20 disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-500 hover:border-blue-500 disabled:opacity-20 disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4 pointer-events-auto">
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentSlide ? 1 : -1);
                  setCurrentSlide(i);
                }}
                className={cn(
                  "h-1 transition-all duration-500 rounded-full",
                  i === currentSlide ? "w-8 lg:w-12 bg-blue-500" : "w-2 lg:w-4 bg-white/10 hover:bg-white/30"
                )}
              />
            ))}
          </div>
          <div className="text-[8px] uppercase tracking-[0.4em] font-black text-white/20">© 2026 Total Information Management</div>
        </div>
      </footer>
    </div>
  );
}
