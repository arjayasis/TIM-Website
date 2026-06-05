import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Cpu, Globe, Shield, Activity, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  variant?: 'default' | 'dark';
  isHome?: boolean;
}

const navItems = [
  { name: 'About', path: 'AboutUs' },
  { name: 'News & Events', path: 'NewsEvents' },
  { name: 'Services', path: 'Home', hash: '#ServicesGrid' },
  { name: 'Industries', path: 'Home', hash: '#IndustriesSection' },
];

export default function Header({ variant = 'default', isHome = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const { scrollY } = useScroll();

  const isDark = variant === 'dark';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest < 10 && !isAtTop) setIsAtTop(true);
    if (latest >= 10 && isAtTop) setIsAtTop(false);

    if (latest > previous && latest > 150) {
      if (!isHidden) setIsHidden(true);
    } else {
      if (isHidden) setIsHidden(false);
    }
  });

  const isActive = useCallback((pageName: string, hash?: string) => {
    const path = createPageUrl(pageName);
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path && !location.hash;
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "pointer-events-auto relative flex items-center justify-between w-full px-6 lg:px-16 py-4 border-b transition-all duration-500 overflow-hidden",
          isAtTop 
            ? "bg-transparent border-transparent" 
            : "bg-[#00021a]/90 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        )}
      >
        {/* HUD Background Data Stream */}
        <AnimatePresence>
          {!isAtTop && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.05,
                backgroundPosition: ['200% 0%', '-200% 0%']
              }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{ 
                backgroundImage: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)',
                backgroundSize: '200% 100%',
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          )}
        </AnimatePresence>

        {/* Scanning Line HUD */}
        <AnimatePresence>
          {!isAtTop && (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-40 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none z-0"
            />
          )}
        </AnimatePresence>

        {/* Logo (Left Justified) */}
        <Link to="/" className="relative z-50 shrink-0">
          <img
            src="https://marketing.timcorp.net.ph/hubfs/website/TIM%20Logo%20%5Bhorizontal%5D%20white.png"
            alt="TIM Corporation"
            className={cn(
              "h-10 lg:h-12 transition-all duration-500",
              !isDark && isAtTop ? "invert brightness-0" : ""
            )}
          />
        </Link>

        {/* Desktop Navigation & Actions (Right Justified) */}
        <div className="hidden md:flex items-center gap-8 relative z-10">
          <div className="flex items-center gap-2">
            {!isHome && (
              <Link
                to="/"
                className={cn(
                  "relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                  isAtTop && !isDark ? "text-slate-900 hover:text-blue-600" : "text-white/60 hover:text-white"
                )}
              >
                Home
              </Link>
            )}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.hash ? `${createPageUrl(item.path)}${item.hash}` : createPageUrl(item.path)}
                className={cn(
                  "relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                  isActive(item.path, item.hash)
                    ? "text-blue-400"
                    : isAtTop && !isDark ? "text-slate-900 hover:text-blue-600" : "text-white/60 hover:text-white"
                )}
              >
                {item.name}
                {isActive(item.path, item.hash) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className={cn("h-6 w-px transition-colors", isAtTop && !isDark ? "bg-slate-200" : "bg-white/10")} />
            <Button 
              asChild 
              className={cn(
                "h-11 px-8 rounded-none border border-blue-500/50 bg-blue-500/10 text-white hover:bg-blue-500 hover:text-white text-[11px] font-black uppercase tracking-widest transition-all duration-300",
                isAtTop && !isDark 
                  ? "bg-[#0009af] border-transparent text-white hover:bg-[#0008a0]" 
                  : ""
              )}
            >
              <Link to={createPageUrl('ContactUs')}>Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "md:hidden relative z-50 p-2 transition-colors",
            isMenuOpen || isDark || !isAtTop ? "text-white" : "text-[#0009af]"
          )}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#00021a] md:hidden pointer-events-auto"
          >
            {/* Close Button for Mobile Menu */}
            <div className="absolute top-8 right-8 z-[100]">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Background HUD for Mobile Menu */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full animate-pulse" />
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative h-full flex flex-col items-center justify-center p-8">
              <div className="flex flex-col items-center gap-8 w-full max-w-xs">
                {!isHome && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                    className="w-full"
                  >
                    <Link 
                      to="/"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-center text-2xl font-black uppercase tracking-widest py-4 border-b border-white/5 text-white/40 hover:text-white transition-all"
                    >
                      Home
                    </Link>
                  </motion.div>
                )}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (isHome ? index : index + 1) * 0.1 }}
                    className="w-full"
                  >
                    <Link 
                      to={item.hash ? `${createPageUrl(item.path)}${item.hash}` : createPageUrl(item.path)}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "block text-center text-2xl font-black uppercase tracking-widest py-4 border-b border-white/5 transition-all",
                        isActive(item.path, item.hash) ? "text-blue-400" : "text-white/40 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="w-full pt-8"
                >
                  <Button 
                    asChild 
                    onClick={() => setIsMenuOpen(false)} 
                    className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-blue-900/40"
                  >
                    <Link to={createPageUrl('ContactUs')}>Contact Us</Link>
                  </Button>
                </motion.div>

                {/* Mobile HUD Stats */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 grid grid-cols-2 gap-8 w-full"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Activity size={16} className="text-blue-500" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/20 text-center">System Status: Optimal</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Shield size={16} className="text-blue-500" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/20 text-center">Secure Connection</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
