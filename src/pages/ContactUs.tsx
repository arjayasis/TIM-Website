import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Globe, Shield, MessageSquare, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { toast } from 'sonner';

export default function ContactUs() {
  const [selectedOffice, setSelectedOffice] = useState<'makati' | 'cebu'>('makati');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Inquiry sent. We will get back to you soon.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                Contact Us
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
              className="md:col-span-12 group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000" />
              <div className="relative h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-14 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <MessageSquare size={240} className="text-blue-400" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                        <Send className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">Solution & Service Inquiry</h2>
                        <p className="text-blue-100/60 text-sm mt-1">
                          Connect with our architects for a tailored solution proposal.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-left md:text-right gap-0.5 bg-blue-900/10 border border-blue-500/10 rounded-xl p-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">Direct Channel</span>
                      <span className="text-sm font-bold text-white">inquiry@timcorp.net.ph</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Full Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="h-12 bg-white/5 border-white/10 focus:border-blue-500/50 rounded-xl !text-white placeholder:text-white/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          required
                          className="h-12 bg-white/5 border-white/10 focus:border-blue-500/50 rounded-xl !text-white placeholder:text-white/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Company</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          required
                          className="h-12 bg-white/5 border-white/10 focus:border-blue-500/50 rounded-xl !text-white placeholder:text-white/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Phone Number</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Contact number"
                          className="h-12 bg-white/5 border-white/10 focus:border-blue-500/50 rounded-xl !text-white placeholder:text-white/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Message / Requirements</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project or inquiry in detail..."
                        required
                        rows={4}
                        className="bg-white/5 border-white/10 focus:border-blue-500/50 rounded-xl text-white placeholder:text-white/20 resize-none p-4"
                      />
                    </div>

                    <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3">
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Office Info Cards */}
            {/* Headquarters Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-6 group relative cursor-pointer"
              onClick={() => setSelectedOffice('makati')}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] blur transition duration-500 ${selectedOffice === 'makati' ? 'opacity-30' : 'opacity-0 group-hover:opacity-10'}`} />
              <div className={`relative h-full bg-white/5 backdrop-blur-3xl border rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 ${selectedOffice === 'makati' ? 'border-blue-500 bg-blue-950/20' : 'border-white/10 hover:border-white/20'}`}>
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
                
                <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${selectedOffice === 'makati' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70'}`}>
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Main Office</span>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-0.5">Headquarters</h3>
                      </div>
                    </div>
                    <p className="text-blue-100/90 text-base font-medium leading-relaxed">
                      5600 Pres. Sergio Osmeña Highway<br />
                      corner Arellano Street<br />
                      Brgy. Palanan, Makati City 1235
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="text-[10px] font-black uppercase tracking-widest text-blue-200/60 mb-1">Direct Line</div>
                      <div className="text-xl font-black text-white">+63 (2) 8857 1846</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-blue-200/60">
                        <Globe size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Makati Command Center</span>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border transition-all ${selectedOffice === 'makati' ? 'bg-blue-500/20 border-blue-500/40 text-blue-300' : 'border-transparent text-blue-400/40'}`}>
                        {selectedOffice === 'makati' ? 'Selected' : 'Click to View Map'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cebu Office Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-6 group relative cursor-pointer"
              onClick={() => setSelectedOffice('cebu')}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] blur transition duration-500 ${selectedOffice === 'cebu' ? 'opacity-30' : 'opacity-0 group-hover:opacity-10'}`} />
              <div className={`relative h-full bg-white/5 backdrop-blur-3xl border rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 ${selectedOffice === 'cebu' ? 'border-blue-500 bg-blue-950/20' : 'border-white/10 hover:border-white/20'}`}>
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
                
                <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${selectedOffice === 'cebu' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70'}`}>
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Regional Hub</span>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-0.5">Cebu Office</h3>
                      </div>
                    </div>
                    <p className="text-blue-100/90 text-base font-medium leading-relaxed">
                      12th Floor, 2 Quad Building, Cardinal<br />
                      Rosales Avenue, cor Sumilon Rd.,<br />
                      Cebu Business Park, Cebu City 6000
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="text-[10px] font-black uppercase tracking-widest text-blue-200/60 mb-1">Telephone Number</div>
                      <div className="text-xl font-black text-white">(+63) (32) 253 1659</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-blue-200/60">
                        <Globe size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Cebu Business Hub</span>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border transition-all ${selectedOffice === 'cebu' ? 'bg-blue-500/20 border-blue-500/40 text-blue-300' : 'border-transparent text-blue-400/40'}`}>
                        {selectedOffice === 'cebu' ? 'Selected' : 'Click to View Map'}
                      </span>
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
                src={selectedOffice === 'makati'
                  ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.562102669605!2d121.00487786979382!3d14.562102669604814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzQzLjYiTiAxMjHCsDAwJzE3LjYiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                  : "https://maps.google.com/maps?q=12th%20Floor,%202%20Quad%20Building,%20Cardinal%20Rosales%20Avenue,%20cor%20Sumilon%20Rd.,%20Cebu%20Business%20Park,%20Cebu%20City%206000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={selectedOffice === 'makati' ? "TIM Corporation Headquarters Command Center" : "TIM Corporation Cebu Office Regional Hub"}
              />
            </div>
            
            {/* Map Overlay HUD */}
            <div className="absolute bottom-10 left-10 p-6 bg-[#00021a]/80 backdrop-blur-xl border border-white/10 rounded-2xl pointer-events-none hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                  {selectedOffice === 'makati' ? 'Makati Locked' : 'Cebu Locked'}
                </span>
              </div>
              <div className="text-xs font-bold text-white/60">
                {selectedOffice === 'makati' ? '14.5621° N, 121.0049° E' : '10.3157° N, 123.9061° E'}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
