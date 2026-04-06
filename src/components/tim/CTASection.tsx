import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#00021a] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M-100 100 Q 150 300 500 100 T 1100 100"
            fill="none"
            stroke="url(#cta-grad)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="cta-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Start Your Journey</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1] sm:leading-[0.9]">
            Ready to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">Re-Engineer</span> <br />
            Your Future?
          </h2>
          
          <p className="text-lg lg:text-2xl text-blue-100/40 mb-12 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Join hundreds of enterprises that trust TIM Corporation for secure, scalable, and future-ready ICT solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
            <Button 
              asChild
              className="relative group px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-sm font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] h-auto w-full sm:w-auto"
            >
              <Link to={createPageUrl('ContactUs')}>
                <span className="relative z-10 flex items-center gap-3">
                  Contact Us
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </Button>
            
            <Link 
              to={createPageUrl('AboutUs')}
              className="text-blue-400 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              Learn More About Us
              <div className="w-8 h-px bg-blue-400 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
