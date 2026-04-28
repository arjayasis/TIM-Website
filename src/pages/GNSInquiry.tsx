import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, ArrowLeft, ShieldCheck, CheckCircle2, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const industries = [
  "Banking & Finance",
  "BPO & IT Shared Services",
  "Manufacturing & Industrial",
  "Retail & E-commerce",
  "Logistics & Supply Chain",
  "Healthcare & Pharmaceuticals",
  "Education",
  "Real Estate & Construction",
  "Government & Public Sector",
  "Hospitality & Tourism",
  "Others"
];

export default function GNSInquiry() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    companyName: '',
    businessEmail: '',
    companyAddress: '',
    preferredPlan: '',
    industryType: '',
    confirmBusiness: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePHNumber = (num: string) => {
    // Valid PH numbers: +639XXXXXXXXX or 09XXXXXXXXX
    const regex = /^(09|\+639)\d{9}$/;
    return regex.test(num.replace(/\s/g, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validatePHNumber(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid Philippine mobile number (e.g., 09171234567 or +639171234567)';
    }

    if (!formData.confirmBusiness) {
      newErrors.confirmBusiness = 'You must confirm that this is a business inquiry.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fix the errors in the form.');
      return;
    }

    setErrors({});
    toast.success('Thank you! Your GNS inquiry has been submitted successfully.');
    // In a real app, you'd send this to your backend
    console.log('Form Data Submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          to={createPageUrl('BorderlessConnectivity')} 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={16} />
          Back to Borderless Connectivity
        </Link>

        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl mb-8 shadow-xl shadow-blue-500/20"
          >
            <Globe size={32} />
          </motion.div>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight">
            Accelerate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Business Network</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
            Fill out the form, and let's accelerate your business with fast, reliable internet!
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100"
        >
          {/* Note Section */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex gap-4 items-start">
            <ShieldCheck className="text-blue-600 shrink-0 mt-1" size={24} />
            <div>
              <p className="text-blue-900 font-bold text-sm uppercase tracking-tight mb-1">Business-Grade Solutions Only</p>
              <p className="text-blue-700/70 text-sm leading-relaxed">
                TIM Corp. GNS provides enterprise-grade connectivity for organizations. We do not offer residential plans. Please confirm that you are inquiring for a company or business entity.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. John"
                  required
                  className="h-12 bg-slate-50 border-slate-100 focus:border-blue-500/50 rounded-xl transition-all"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Doe"
                  required
                  className="h-12 bg-slate-50 border-slate-100 focus:border-blue-500/50 rounded-xl transition-all"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Contact Number</label>
                <Input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="e.g. 09171234567"
                  required
                  className={`h-12 bg-slate-50 border-slate-100 focus:border-blue-500/50 rounded-xl transition-all ${errors.contactNumber ? 'border-red-500' : ''}`}
                />
                {errors.contactNumber && <p className="text-red-500 text-[10px] font-bold ml-1">{errors.contactNumber}</p>}
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Company Name</label>
                <Input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp"
                  required
                  className="h-12 bg-slate-50 border-slate-100 focus:border-blue-500/50 rounded-xl transition-all"
                />
              </div>

              {/* Business Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Business Email Address</label>
                <Input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="h-12 bg-slate-50 border-slate-100 focus:border-blue-500/50 rounded-xl transition-all"
                />
              </div>

              {/* Industry Type */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Industry Type</label>
                <select
                  name="industryType"
                  value={formData.industryType}
                  onChange={handleChange}
                  required
                  className="w-full h-12 bg-slate-50 border border-slate-100 focus:border-blue-500/50 rounded-xl px-4 text-sm font-medium transition-all outline-none"
                >
                  <option value="" disabled>Select an Industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Company Address */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Company Address (City & Building Name Preferred)</label>
              <Input
                type="text"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                placeholder="Unit, Building, Street, City"
                required
                className="h-12 bg-slate-50 border-slate-100 focus:border-blue-500/50 rounded-xl transition-all"
              />
            </div>

            {/* Preferred Plan */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Tell us your preferred plan or service</label>
              <Textarea
                name="preferredPlan"
                value={formData.preferredPlan}
                onChange={handleChange}
                placeholder="Briefly describe your bandwidth requirements or specific connection needs..."
                required
                rows={4}
                className="bg-slate-50 border-slate-100 focus:border-blue-500/50 rounded-xl transition-all resize-none p-4"
              />
            </div>

            {/* Confirmation Radio Button (Custom Radio) */}
            <div className="space-y-4 pt-4">
              <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                <div className="relative flex items-center mt-0.5">
                  <input
                    type="checkbox"
                    name="confirmBusiness"
                    checked={formData.confirmBusiness}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-6 border-2 border-slate-200 rounded-full bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-white opacity-0 peer-checked:opacity-100 transition-all" />
                  </div>
                </div>
                <span className="text-xs font-bold leading-relaxed text-slate-500 group-hover:text-slate-700">
                  I confirm that I am inquiring for business internet and agree to TIM Corp's 
                  <Link to={createPageUrl('PrivacyPolicy')} className="text-blue-600 hover:underline mx-1">Privacy Policy</Link>.
                </span>
              </label>
              {errors.confirmBusiness && <p className="text-red-500 text-[10px] font-bold ml-1">{errors.confirmBusiness}</p>}
            </div>

            <Button 
              type="submit" 
              className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4 shadow-xl shadow-blue-500/20"
            >
              <Send className="w-5 h-5" />
              Submit Business Inquiry
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
