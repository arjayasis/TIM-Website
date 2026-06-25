import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Globe, 
  Shield, 
  Zap, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Network, 
  Database,
  Brain,
  Layers,
  Activity,
  Lock,
  Search,
  Monitor,
  Settings,
  FileText,
  Cloud,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { BrochurePDF } from '@/components/BrochurePDF';
import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { toast } from 'sonner';

const milestones = [
  { year: '1985', event: 'Founded as ICT Pioneer', icon: Award },
  { 
    year: '1994', 
    event: 'Pioneered Commercial Data Center Services', 
    details: 'Infrastructure acquired by Equinix in 2025',
    icon: Server 
  },
  { year: '2020', event: 'Regional Expansion & Cloud Leadership', icon: Globe },
  { year: '2025', event: 'AI-Powered Enterprise Solutions', icon: Zap }
];

const services = [
  {
    category: "Cloud Services",
    icon: Cloud,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    items: ["Infrastructure as a Service (IaaS)", "S3 Object Storage", "Backup as a Service (BaaS)", "Disaster Recovery (DRaaS)"],
    link: "CloudServices"
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    color: "text-red-400",
    bg: "bg-red-500/10",
    items: ["Vulnerability Assessment (VAPT)", "Endpoint Protection (EDR/XDR)", "DDoS Mitigation", "NIST Framework Alignment"],
    link: "Cybersecurity"
  },
  {
    category: "Managed Operations",
    icon: Monitor,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    items: ["24/7 Network Ops (MNOC)", "24/7 Security Ops (MSOC)", "Incident Response", "SLA-driven Support"],
    link: "ManagedOps"
  },
  {
    category: "Systems Integration",
    icon: Layers,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    items: ["Enterprise Architecture", "Data Center Solutions", "Hardware Unification", "Hybrid Cloud Sync"],
    link: "SystemIntegration"
  },
  {
    category: "Connectivity",
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    items: ["Global Network Services (GNS)", "Low-Latency IP Transit", "Managed SD-WAN", "Direct Cloud Interconnects"],
    link: "BorderlessConnectivity"
  },
  {
    category: "Enterprise AI",
    icon: Brain,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    items: ["In-Country GenAI", "Custom AI Agents", "GPU-as-a-Service", "LLM Orchestration"],
    link: "TIMCorpAI"
  }
];

const certifications = [
  { name: 'ISO 9001', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/high%20res.png?v=20260311' },
  { name: 'ISO 27001', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso%2027001.png?v=20260311' },
  { name: 'SOC 2 Type II', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311' },
  { name: 'ISO 22301', logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/iso-22301.png' },
  { name: 'PCI-DSS', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311' },
  { name: 'DICT D-TAP', logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/DTAP-Logo.png' },
  { name: 'CSA STAR Level 1', logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/CSA%20STAR%201.svg' }
];

export default function Brochure() {
  const [isDownloading, setIsDownloading] = React.useState(false);
  const pdfRef = React.useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!pdfRef.current) return;
    setIsDownloading(true);
    const toastId = toast.loading('Preparing your brochure...');

    try {
      // Small delay to ensure hidden component is ready
      await new Promise(resolve => setTimeout(resolve, 800));

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const options = {
        quality: 0.95,
        backgroundColor: '#ffffff',
        pixelRatio: 2,
        cacheBust: true,
      };

      // Capture Page 1 (Outside)
      toast.loading('Capturing Page 1...', { id: toastId });
      const imgData1 = await toJpeg(pdfRef.current.children[0] as HTMLElement, options);
      pdf.addImage(imgData1, 'JPEG', 0, 0, 297, 210, undefined, 'FAST');

      // Add Page 2 (Inside)
      toast.loading('Capturing Page 2...', { id: toastId });
      pdf.addPage();
      const imgData2 = await toJpeg(pdfRef.current.children[1] as HTMLElement, options);
      pdf.addImage(imgData2, 'JPEG', 0, 0, 297, 210, undefined, 'FAST');

      // Save PDF
      pdf.save('TIM_Corporation_Brochure_2026.pdf');
      toast.success('Brochure downloaded successfully!', { id: toastId });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF. Please try again.', { id: toastId });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#00021a] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      {/* Hidden PDF Component for rendering */}
      <div className="fixed top-[-9999px] left-[-9999px]">
        <BrochurePDF ref={pdfRef} />
      </div>
      
      {/* 1. Cover Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full animate-[pulse_8s_infinite]" />
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-12 backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-black">Corporate Brochure 2026</span>
            </motion.div>

            <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              TOTAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">INFORMATION</span> <br />
              MANAGEMENT
            </h1>
            
            <p className="text-xl lg:text-3xl text-blue-100/60 leading-tight font-medium tracking-tight max-w-4xl mx-auto mb-16">
              Accelerating digital transformation and unlocking the full potential of modern IT for the world's leading enterprises since 1985.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 text-lg rounded-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <a href="#introduction">Explore Our Story</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleDownload} 
                disabled={isDownloading}
                className="border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 px-12 py-8 text-lg rounded-2xl text-white disabled:opacity-50"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Download PDF'
                )}
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll to Begin</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" 
          />
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section id="introduction" className="py-32 lg:py-64 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs uppercase tracking-[0.5em] text-blue-500 font-black mb-8">Who We Are</h2>
              <h3 className="text-4xl lg:text-7xl font-black mb-12 tracking-tighter leading-[0.9] uppercase">
                YOUR TRUSTED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">TECHNOLOGY <br /> PARTNER</span>
              </h3>
              <p className="text-2xl text-blue-100/60 font-medium leading-relaxed mb-8">
                Since 1985, Total Information Management Corporation (TIM) has been helping organizations harness technology to drive growth, efficiency, and transformation.
              </p>
              <p className="text-xl text-blue-100/40 font-medium leading-relaxed">
                Over the years, the company has grown into a leading end-to-end technology solutions partner, delivering solutions that enable businesses to adapt, innovate, and thrive in a rapidly evolving digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                alt="TIM Headquarters" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. History & Timeline */}
      <section className="py-32 lg:py-64 bg-black/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs uppercase tracking-[0.5em] text-blue-500 font-black mb-8">Our Journey</h2>
              <h3 className="text-4xl lg:text-8xl font-black tracking-tighter leading-none mb-12 uppercase">
                FOUR DECADES OF <br />
                <span className="text-blue-500">INNOVATION</span>
              </h3>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-[#00021a] p-12 hover:bg-blue-600/5 transition-colors duration-500"
              >
                <div className="text-6xl font-black text-white/10 mb-12 group-hover:text-blue-400 transition-colors">{milestone.year}</div>
                <div className="mb-8">
                  <milestone.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-4 tracking-tight leading-tight uppercase">{milestone.event}</h3>
                {milestone.details && (
                  <p className="text-[10px] text-blue-100/40 font-bold leading-relaxed uppercase tracking-widest">{milestone.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Products & Services Overview */}
      <section className="py-32 lg:py-64 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs uppercase tracking-[0.5em] text-blue-500 font-black mb-8">Solutions Portfolio</h2>
              <h3 className="text-4xl lg:text-8xl font-black tracking-tighter leading-none mb-12 uppercase">
                COMPREHENSIVE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">CAPABILITIES</span>
              </h3>
              <p className="text-xl text-blue-100/40 font-medium max-w-2xl">
                From infrastructure to intelligence, we provide the full technology stack required for modern enterprise resilience and growth.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-12 rounded-[3rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={`absolute -right-8 -top-8 w-32 h-32 ${service.bg} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h4 className="text-2xl font-bold mb-8 uppercase tracking-tight text-white">{service.category}</h4>
                  <ul className="space-y-4 mb-10">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-blue-100/40 font-medium text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="link" className={`${service.color} p-0 h-auto font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform`}>
                    <Link to={createPageUrl(service.link)} className="flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trust & Certifications */}
      <section className="py-32 lg:py-64 bg-white text-[#00021a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-xs uppercase tracking-[0.5em] text-blue-600 font-black mb-8">Compliance & Trust</h2>
            <h3 className="text-4xl lg:text-8xl font-black tracking-tighter leading-none mb-12 uppercase">
              ZERO <br /> COMPROMISE
            </h3>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              We adhere to the most stringent global standards for quality management, information security, and business continuity.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 mb-32">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <img 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="h-16 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-blue-600 transition-colors">{cert.name}</p>
              </motion.div>
            ))}
          </div>

          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 text-lg rounded-2xl transition-all hover:scale-105">
            <Link to={createPageUrl('Compliance')}>Explore Compliance</Link>
          </Button>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="py-32 lg:py-64 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 blur-[200px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 lg:p-32 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-3xl relative overflow-hidden"
          >
            <h2 className="text-4xl lg:text-9xl font-black mb-12 tracking-tighter leading-[0.85] uppercase">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">
                TRANSFORM?
              </span>
            </h2>
            
            <p className="text-xl lg:text-3xl text-blue-100/60 font-medium leading-relaxed mb-16 max-w-3xl mx-auto">
              Partner with the technology leader that has been defining the enterprise landscape for four decades.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-16 h-20 rounded-2xl text-xl font-bold transition-all hover:scale-105 shadow-2xl shadow-blue-900/40 w-full sm:w-auto">
                <Link to={createPageUrl('ContactUs')} className="flex items-center gap-4">
                  Start a Conversation
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
              <div className="flex items-center gap-4 text-blue-200/40">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-[0.3em]">Systems Ready</span>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/30 rounded-tl-[4rem]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-blue-500/30 rounded-br-[4rem]" />
          </motion.div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[1em] text-white/20 font-black">
            Total Information Management Corporation &copy; 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
