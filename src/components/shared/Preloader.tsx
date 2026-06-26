import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;

    // Progress simulation for the HUD bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (100 - prev) * 0.1;
      });
    }, 100);

    // Ensure video plays automatically
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        if (error.name === 'AbortError') return;
        
        if (isMounted) {
          console.error("Video play failed:", error);
          onComplete();
        }
      });
    }

    const timeout = setTimeout(() => {
      if (isMounted) {
        onComplete();
      }
    }, 15000);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [onComplete]);

  const handleVideoEnd = () => {
    setProgress(100);
    setTimeout(onComplete, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#00021a] flex items-center justify-center overflow-hidden"
    >
      {/* Background HUD Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/10 rounded-full animate-pulse" />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full flex items-center justify-center relative"
        >
          <video
            ref={videoRef}
            src="https://marketing.timcorp.net.ph/hubfs/website/logo%20animation_website.mp4"
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
            muted
            playsInline
            autoPlay
            preload="auto"
          />
          
          {/* HUD Loading Bar */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64 flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400/60">System Initializing</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">{Math.round(progress)}%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Skip Intro Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            onClick={onComplete}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[10000] px-10 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/40 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-sm transition-all flex items-center justify-center group min-w-[180px]"
          >
            <span className="relative">Bypass Sequence</span>
            <svg 
              className="w-3 h-3 absolute right-6 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
