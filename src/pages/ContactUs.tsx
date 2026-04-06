import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Globe, Shield, MessageSquare, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#00021a] text-white overflow-hidden selection:bg-blue-500/30">
      {/* Advanced HUD Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Scanning Line Effect */}
        <motion.div 
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-10"
        />

        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full" />
        
        {/* HUD Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl px-6">
          <div className="absolute top-20 left-10 w-32 h-32 border-l border-t border-blue-500/20" />
          <div className="absolute top-20 right-10 w-32 h-32 border-r border-t border-blue-500/20" />
          <div className="absolute bottom-20 left-10 w-32 h-32 border-l border-b border-blue-500/20" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-r border-b border-blue-500/20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-xl"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Communication Link: Active</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.8]"
            >
              Contact <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                Command
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-blue-100/40 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed"
            >
              Initialize a secure uplink with TIM Corporation. Our solution architects and support specialists are standing by to scale your enterprise intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bento Grid Content */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Primary Action: Service Inquiry */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-7 group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000" />
              <div className="relative h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 lg:p-14 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MessageSquare size={120} className="text-blue-400" />
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                      <Send className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tight">Service Inquiry</h2>
                  </div>
                  <p className="text-blue-100/60 text-lg max-w-md leading-relaxed mb-8">
                    Ready to transform your digital infrastructure? Connect with our architects for a tailored solution proposal.
                  </p>
                  <div className="flex flex-col gap-1 mb-12">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400/60">Direct Channel</span>
                    <span className="text-xl font-bold text-white">inquiry@timcorp.net.ph</span>
                  </div>
                </div>

                <Button asChild className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Link to={createPageUrl('InquiryForm')}>
                    Inquire Service
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Primary Action: Support Portal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000" />
              <div className="relative h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield size={100} className="text-indigo-400" />
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tight">Support</h2>
                  </div>
                  <p className="text-blue-100/60 leading-relaxed mb-8">
                    Access the 24/7 Command Center for technical assistance and ticket tracking.
                  </p>
                  <div className="flex flex-col gap-1 mb-12">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400/60">Support Channel</span>
                    <span className="text-lg font-bold text-white">cx.support@timcorp.net.ph</span>
                  </div>
                </div>

                <Button asChild className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Link to={createPageUrl('SupportPortal')}>
                    Raise a Ticket
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Office Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-12 group relative"
            >
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-900 rounded-[2.5rem] p-10 lg:p-14 overflow-hidden shadow-2xl">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
                
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white">Headquarters</h3>
                    </div>
                    <p className="text-blue-100 text-lg font-medium leading-relaxed">
                      5600 Pres. Sergio Osmeña Highway<br />
                      corner Arellano Street<br />
                      Brgy. Palanan, Makati City 1235
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="text-[10px] font-black uppercase tracking-widest text-blue-200/60 mb-2">Direct Line</div>
                      <div className="text-2xl font-black text-white">+63 (2) 8857 1846</div>
                    </div>
                    <div className="flex items-center gap-4 text-blue-200/60">
                      <Globe size={16} />
                      <span className="text-xs font-bold uppercase tracking-widest">Makati Command Center</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stylized Map Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000" />
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-1000">
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.562102669605!2d121.00487786979382!3d14.562102669604814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzQzLjYiTiAxMjHCsDAwJzE3LjYiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TIM Corporation Command Center"
              />
            </div>
            
            {/* Map Overlay HUD */}
            <div className="absolute bottom-10 left-10 p-6 bg-[#00021a]/80 backdrop-blur-xl border border-white/10 rounded-2xl pointer-events-none hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Location Locked</span>
              </div>
              <div className="text-xs font-bold text-white/60">14.5621° N, 121.0049° E</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
