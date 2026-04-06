import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  AlertCircle, 
  CheckCircle, 
  Upload, 
  X, 
  Paperclip, 
  ChevronDown,
  Info,
  ShieldAlert,
  MessageSquare,
  Send,
  Image as ImageIcon,
  FileText,
  User,
  Building2,
  Briefcase,
  Mail,
  Terminal,
  Activity,
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const priorities = [
  { 
    id: 'sev1', 
    label: 'Severity - 1', 
    description: 'System is down / Blocked.',
    color: 'bg-red-500/10 text-red-400 border-red-500/20'
  },
  { 
    id: 'sev2', 
    label: 'Severity - 2', 
    description: 'Critical feature is broken.',
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  },
  { 
    id: 'sev3', 
    label: 'Severity - 3', 
    description: 'Minor issue with a workaround.',
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  { 
    id: 'sev4', 
    label: 'Severity - 4', 
    description: 'General question or feedback.',
    color: 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  }
];

const criticalityLevels = [
  { id: 'critical', label: 'Critical', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
  { id: 'high', label: 'High', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  { id: 'medium', label: 'Medium', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { id: 'low', label: 'Low', color: 'bg-slate-500/10 text-slate-400 border-slate-500/20' }
];

const ticketTypes = [
  { id: 'service_request', label: 'Service Request', description: 'Request for a new service or change.' },
  { id: 'incident_report', label: 'Incident Report', description: 'Report an unplanned interruption or reduction in quality.' }
];

export default function SupportPortal() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<any>(null);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [criticality, setCriticality] = useState<any>(null);
  const [isCriticalityOpen, setIsCriticalityOpen] = useState(false);
  const [ticketType, setTicketType] = useState<any>(null);
  const [isTicketTypeOpen, setIsTicketTypeOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '', type: 'success' as 'success' | 'error' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isSubjectValid = subject.length >= 10;
  const showSubjectTooltip = subject.length > 0 && !isSubjectValid;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      setFiles(prev => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  }, []);

  const handlePaste = useCallback((e: ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const file = new File([blob], `pasted-image-${Date.now()}.png`, { type: blob.type });
            setFiles(prev => [...prev, file]);
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [handlePaste]);

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSubjectValid) return;
    
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('company', company);
      formData.append('designation', designation);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('description', description);
      if (priority) formData.append('priority', priority.id);
      if (criticality) formData.append('criticality', criticality.id);
      if (ticketType) formData.append('ticketType', ticketType.id);
      
      files.forEach((file) => {
        formData.append('files', file);
      });

      const response = await fetch('/api/support', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        const details = errorData.details ? `\nDetails: ${JSON.stringify(errorData.details, null, 2)}` : '';
        const errorMessage = `${errorData.error || 'Failed to submit ticket'}${details}`;
        
        setDialogContent({
          title: 'Transmission Failure',
          message: errorData.error || 'An error occurred while transmitting your ticket. Please verify your connection and try again.',
          type: 'error'
        });
        setDialogOpen(true);
        
        throw new Error(errorMessage);
      }

      setDialogContent({
        title: 'Transmission Successful',
        message: 'Your support ticket has been successfully transmitted to our Command Center. A solution architect will be assigned to your case shortly.',
        type: 'success'
      });
      setDialogOpen(true);
      
      toast.success(`Ticket successfully transmitted to our Command Center and routed for processing.`);
      
      setName('');
      setCompany('');
      setDesignation('');
      setEmail('');
      setSubject('');
      setDescription('');
      setFiles([]);
      setPriority(null);
      setCriticality(null);
      setTicketType(null);
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#00021a] text-white py-24 px-6 relative overflow-hidden">
      {/* HUD Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full animate-[pulse_8s_infinite]" />
        
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-blue-500/5 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-3xl mb-8 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
          >
            <Terminal size={40} />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">
            Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Terminal</span>
          </h1>
          <p className="text-blue-100/40 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Initialize a support request. Our Customer Support Group is standing by to resolve your technical impediments.
          </p>
        </header>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="relative group"
        >
          {/* Form Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl space-y-12">
            
            {/* Section: Identity */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-widest text-white/80">Identity Verification</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Full Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Email Address</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Company</label>
                  <Input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name"
                    required
                    className="h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Designation</label>
                  <Input
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="Job title"
                    required
                    className="h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section: Issue Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-widest text-white/80">Issue Parameters</h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-3 relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Subject Line</label>
                  <div className="relative">
                    <Input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Brief summary of the technical issue"
                      required
                      className={`h-14 bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all pr-12 ${
                        subject.length > 0 && !isSubjectValid ? 'border-orange-500/50' : ''
                      }`}
                    />
                    <AnimatePresence>
                      {showSubjectTooltip && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="absolute left-0 -bottom-8 text-[10px] text-orange-400 font-bold uppercase tracking-wider"
                        >
                          Minimum 10 characters required for diagnostic accuracy
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {isSubjectValid && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400">
                        <CheckCircle size={20} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Detailed Description</label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={`SYMPTOMS: \nEXPECTED BEHAVIOR: \nERROR CODES: `}
                    required
                    className="min-h-[180px] bg-white/10 border-white/20 focus:border-blue-500/50 rounded-2xl !text-white placeholder:text-white/20 transition-all resize-none leading-relaxed p-6"
                  />
                </div>

                <div className="space-y-3 relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Ticket Type</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setIsTicketTypeOpen(!isTicketTypeOpen);
                        setIsPriorityOpen(false);
                        setIsCriticalityOpen(false);
                      }}
                      className={`w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between transition-all ${
                        isTicketTypeOpen ? 'border-blue-500/50 ring-4 ring-blue-500/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {ticketType ? (
                          <span className="text-white font-bold uppercase tracking-widest text-xs">
                            {ticketType.label}
                          </span>
                        ) : (
                          <span className="text-white/20 text-xs uppercase font-bold tracking-widest">Select Ticket Type</span>
                        )}
                      </div>
                      <ChevronDown className={`text-white/20 transition-transform ${isTicketTypeOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isTicketTypeOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 right-0 top-16 z-20 bg-[#00021a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 backdrop-blur-3xl"
                        >
                          {ticketTypes.map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => {
                                setTicketType(t);
                                setIsTicketTypeOpen(false);
                              }}
                              className={`w-full text-left p-4 rounded-xl transition-all flex flex-col gap-1 ${
                                ticketType?.id === t.id ? 'bg-white/5' : 'hover:bg-white/5'
                              }`}
                            >
                              <span className="text-white text-[10px] font-black uppercase tracking-widest">
                                {t.label}
                              </span>
                              <span className="text-white/40 text-xs font-medium">{t.description}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Priority, Criticality & Attachments */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-3 relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Priority Level (Optional)</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setIsPriorityOpen(!isPriorityOpen);
                        setIsCriticalityOpen(false);
                      }}
                      className={`w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between transition-all ${
                        isPriorityOpen ? 'border-blue-500/50 ring-4 ring-blue-500/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {priority ? (
                          <>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${priority.color}`}>
                              {priority.label}
                            </span>
                            <span className="text-white/40 text-xs hidden lg:inline">
                              — {priority.description}
                            </span>
                          </>
                        ) : (
                          <span className="text-white/20 text-xs uppercase font-bold tracking-widest">Select Priority</span>
                        )}
                      </div>
                      <ChevronDown className={`text-white/20 transition-transform ${isPriorityOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isPriorityOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 right-0 top-16 z-20 bg-[#00021a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 backdrop-blur-3xl"
                        >
                          {priorities.map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                setPriority(p);
                                setIsPriorityOpen(false);
                              }}
                              className={`w-full text-left p-4 rounded-xl transition-all flex flex-col gap-1 ${
                                priority?.id === p.id ? 'bg-white/5' : 'hover:bg-white/5'
                              }`}
                            >
                              <span className={`inline-block w-fit px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${p.color}`}>
                                {p.label}
                              </span>
                              <span className="text-white/40 text-xs font-medium">{p.description}</span>
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setPriority(null);
                              setIsPriorityOpen(false);
                            }}
                            className="w-full text-left p-4 rounded-xl hover:bg-white/5 text-white/20 text-xs uppercase font-bold tracking-widest"
                          >
                            Clear Selection
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-3 relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Criticality Level (Optional)</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setIsCriticalityOpen(!isCriticalityOpen);
                        setIsPriorityOpen(false);
                      }}
                      className={`w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between transition-all ${
                        isCriticalityOpen ? 'border-blue-500/50 ring-4 ring-blue-500/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {criticality ? (
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${criticality.color}`}>
                            {criticality.label}
                          </span>
                        ) : (
                          <span className="text-white/20 text-xs uppercase font-bold tracking-widest">Select Criticality</span>
                        )}
                      </div>
                      <ChevronDown className={`text-white/20 transition-transform ${isCriticalityOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isCriticalityOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 right-0 top-16 z-20 bg-[#00021a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 backdrop-blur-3xl"
                        >
                          {criticalityLevels.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => {
                                setCriticality(c);
                                setIsCriticalityOpen(false);
                              }}
                              className={`w-full text-left p-4 rounded-xl transition-all ${
                                criticality?.id === c.id ? 'bg-white/5' : 'hover:bg-white/5'
                              }`}
                            >
                              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${c.color}`}>
                                {c.label}
                              </span>
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setCriticality(null);
                              setIsCriticalityOpen(false);
                            }}
                            className="w-full text-left p-4 rounded-xl hover:bg-white/5 text-white/20 text-xs uppercase font-bold tracking-widest"
                          >
                            Clear Selection
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60 ml-1">Documentation</label>
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`relative h-14 border border-dashed rounded-2xl transition-all flex items-center px-6 cursor-pointer ${
                    isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 hover:border-blue-500/30 hover:bg-white/5'
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input type="file" multiple ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                  <div className="flex items-center gap-3 text-white/40">
                    <Upload size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Upload or Paste Files</span>
                  </div>
                </div>
              </div>
            </div>

            {/* File List */}
            <AnimatePresence>
              {files.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {files.map((file, index) => (
                    <motion.div
                      key={`${file.name}-${index}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                          {file.type.startsWith('image/') ? <ImageIcon size={20} /> : <FileText size={20} />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white/80 truncate">{file.name}</p>
                          <p className="text-[10px] text-white/20 uppercase font-black">{(file.size / 1024).toFixed(1)} KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                        className="p-2 text-white/10 hover:text-red-500 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <div className="pt-8">
              <Button
                type="submit"
                disabled={!isSubjectValid || isSubmitting}
                className="w-full h-20 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] text-xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
              >
                {isSubmitting ? (
                  <>
                    Transmitting...
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Activity size={24} />
                    </motion.div>
                  </>
                ) : (
                  <>
                    Transmit Ticket
                    <Send size={24} />
                  </>
                )}
              </Button>
              <div className="flex items-center justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20">
                  <Cpu size={12} className="text-blue-500/50" />
                  Encrypted Channel
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20">
                  <Activity size={12} className="text-blue-500/50" />
                  NOC Priority Routing
                </div>
              </div>
            </div>
          </div>
        </motion.form>
      </div>

      {/* Status Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-[#00021a] border-white/10 text-white rounded-[2rem] max-w-md backdrop-blur-3xl">
          <DialogHeader className="flex flex-col items-center text-center space-y-4">
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border ${
              dialogContent.type === 'success' 
                ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                : 'bg-red-500/10 border-red-500/30 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.2)]'
            }`}>
              {dialogContent.type === 'success' ? <CheckCircle size={40} /> : <AlertCircle size={40} /> }
            </div>
            <DialogTitle className="text-3xl font-black uppercase tracking-tighter">
              {dialogContent.title}
            </DialogTitle>
            <DialogDescription className="text-blue-100/60 text-lg font-medium leading-relaxed">
              {dialogContent.message}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-6">
            <Button 
              onClick={() => setDialogOpen(false)}
              className={`w-full h-14 rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] ${
                dialogContent.type === 'success'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-900/20'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
              }`}
            >
              Acknowledge
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
