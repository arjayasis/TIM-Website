import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Globe, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export default function InquiryForm() {
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
    <div className="min-h-screen bg-[#00021a] text-white py-24 px-6 relative overflow-hidden">
      {/* HUD Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full animate-[pulse_8s_infinite]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-3xl mb-8 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
          >
            <MessageSquare size={40} />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">
            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Inquiry</span>
          </h1>
          <p className="text-blue-100/40 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Tell us about your requirements. Our solution architects will analyze your needs and provide a tailored proposal.
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    required
                    className="h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contact number"
                    className="h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Message / Requirements</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project or inquiry in detail..."
                  required
                  rows={6}
                  className="bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl text-white placeholder:text-white/20 resize-none p-6"
                />
              </div>

              <Button type="submit" className="w-full h-20 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] text-xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4">
                <Send className="w-6 h-6" />
                Submit Inquiry
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
