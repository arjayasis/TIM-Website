import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Brain, Zap, Shield, TrendingUp, CheckCircle, Cpu, BarChart, 
  Layers, Rocket, Globe, Database, Code, Search, MessageSquare, 
  Heart, ShoppingCart, Factory, LayoutDashboard, Bot, Send, ArrowRight,
  Play, Settings, Clock, ShieldCheck, Sliders, Terminal, CheckCircle2, 
  RefreshCw, Check, Sparkles, HelpCircle, MapPin, Award, Workflow, 
  ChevronRight, Activity, Server, ArrowUpRight
} from 'lucide-react';
import CTASection from '@/components/tim/CTASection';
import RelatedServices from '@/components/shared/RelatedServices';
import { SOLUTIONS, CAPABILITIES, TRUST_PARTNERS, type Solution, type Capability } from '@/data';

export default function TIMCorpAI() {
  const [selectedSolutionId, setSelectedSolutionId] = React.useState<string>("rask");
  const selectedSolution = SOLUTIONS.find(s => s.id === selectedSolutionId) || SOLUTIONS[0];

  // --- RASK Demo State ---
  const [raskQuery, setRaskQuery] = React.useState("");
  const [raskChat, setRaskChat] = React.useState<Array<{ sender: "user" | "rask"; text: string; source?: string }>>([
    {
      sender: "rask",
      text: "Enterprise secure node initialized. I can search safely across your connected repositories (SharePoint, Internal Wiki, PDF reports). Select a sample query below to verify local vector execution."
    }
  ]);
  const [raskSearching, setRaskSearching] = React.useState(false);

  const raskPresetQueries = [
    { label: "Summarize Q3 Compliance Guidelines", query: "Can you summarize the Q3 regulatory requirements for our localized branches?" },
    { label: "Verify BSP Circular AMLD-102", query: "What are our data storage directives under BSP Circular AMLD-102?" },
    { label: "Check physical server isolation standard", query: "What are the physical server isolation policies inside TIM Manila data racks?" }
  ];

  const handleRaskPresetClick = (query: string) => {
    if (raskSearching) return;
    setRaskQuery(query);
  };

  const executeRaskQuery = (textToSubmit: string) => {
    if (!textToSubmit.trim() || raskSearching) return;
    
    // Add user message
    const updatedChat = [...raskChat, { sender: "user" as const, text: textToSubmit }];
    setRaskChat(updatedChat);
    setRaskQuery("");
    setRaskSearching(true);

    // Simulate RASK retrieval latency
    setTimeout(() => {
      let responseText = "";
      let sourceText = "";
      
      const lower = textToSubmit.toLowerCase();
      if (lower.includes("q3 regulatory") || lower.includes("compliance")) {
        responseText = "Under the Q3 draft guidelines, all client metadata processing must satisfy localized hashing protocols prior to auditing. RASK has identified 3 active documents in your Shared compliance folder matching this request.";
        sourceText = "[Source: Sovereign_Compliance_v4_draft.pdf (Sect. 12.4)]";
      } else if (lower.includes("bsp") || lower.includes("amld-102")) {
        responseText = "AMLD-102 mandates that electronic signatures and transaction ledgers reside on bare-metal servers owned and audited within Philippine territory. Local backup copies must be retained concurrently.";
        sourceText = "[Source: Regulatory_BSP_AMLD_102_Preserve.pdf (Page 32)]";
      } else {
        responseText = "According to TIM sovereign cage policy SEC-8, RackCorp hardware hosting active weights is physically separated by dual-authentication steel enclosures. Local telemetry data is deleted within a rolling 24-hour cycle.";
        sourceText = "[Source: TIM_SEC_Cage_Guidelines_2026.pdf (Sect. 3)]";
      }

      setRaskChat(prev => [...prev, {
        sender: "rask",
        text: responseText,
        source: sourceText
      }]);
      setRaskSearching(false);
    }, 1200);
  };

  // --- n8n Workflow Demo State ---
  const [workflowState, setWorkflowState] = React.useState<"idle" | "running" | "done">("idle");
  const [wfStep, setWfStep] = React.useState<number>(0);
  const [wfLogs, setWfLogs] = React.useState<string[]>([]);

  const runWorkflowDemo = () => {
    if (workflowState === "running") return;
    setWorkflowState("running");
    setWfStep(1);
    setWfLogs(["[11:04:01] Trigger node activated: Incoming credit line application request detected..."]);

    const steps = [
      { text: "[11:04:02] Fetching applicant history from Local Core Bank Database... [SUCCESS]", step: 2 },
      { text: "[11:04:03] Passing inputs to Private Sovereign LLM node for risk classification analytics...", step: 3 },
      { text: "[11:04:05] LLM Response: Low risk factor determined. Outputting structured scoring record...", step: 4 },
      { text: "[11:04:06] Forwarding payload to Head of Lending inbox for final human-in-the-loop signoff. Automation Complete.", step: 5 }
    ];

    steps.forEach((s, index) => {
      setTimeout(() => {
        setWfStep(s.step);
        setWfLogs(prev => [...prev, s.text]);
        if (s.step === 5) {
          setWorkflowState("done");
        }
      }, (index + 1) * 1100);
    });
  };

  const resetWorkflowDemo = () => {
    setWorkflowState("idle");
    setWfStep(0);
    setWfLogs([]);
  };

  // --- LLM-as-a-Service State ---
  const [payloadSize, setPayloadSize] = React.useState<number>(50); // slider 1-100
  const [selectedModel, setSelectedModel] = React.useState<"llama8" | "llama70">("llama8");

  // Latency metrics based on slider and selection
  const publicCloudLatency = selectedModel === "llama8" 
    ? Math.round(1800 + payloadSize * 15) 
    : Math.round(3600 + payloadSize * 25);
    
  const privateSovereignLatency = selectedModel === "llama8" 
    ? Math.round(140 + payloadSize * 1.8) 
    : Math.round(320 + payloadSize * 3.5);

  // --- Agents Queue State ---
  const [auditAgentState, setAuditAgentState] = React.useState<"idle" | "running" | "success">("idle");
  const [auditProgress, setAuditProgress] = React.useState<string[]>([]);

  const startAgentAuditSim = () => {
    if (auditAgentState === "running") return;
    setAuditAgentState("running");
    setAuditProgress(["[Agent] System initialized. Setting objectives...", "[Agent] Fetching bulk invoices from local shared workspace..."]);

    const phases = [
      "[Compliance Engine] Cross-referencing invoice item currencies against BSP exchange rates...",
      "[Security Check] Flag detected: Single foreign payment exceeding ₱500k security compliance limit.",
      "[Agent Loop] Executing API pull of payee legal registration details... [Done]",
      "[Compliance Check] Target verified. Creating comprehensive local audit PDF record.",
      "[Human Override] Flag forwarded to designated Treasury Approver. Awaiting clearance key..."
    ];

    phases.forEach((text, i) => {
      setTimeout(() => {
        setAuditProgress(prev => [...prev, text]);
        if (i === phases.length - 1) {
          setAuditAgentState("success");
        }
      }, (i + 1) * 1200);
    });
  };

  const resetAgentAuditSim = () => {
    setAuditAgentState("idle");
    setAuditProgress([]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 overflow-hidden font-sans">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[40vh] h-[40vh] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Section - Matching the First Screenshot Exactly */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 opacity-15" 
               style={{ backgroundImage: 'radial-gradient(rgba(10,25,79,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <img 
                  src="https://marketing.timcorp.net.ph/hubfs/AI/Rackcorp.A_Ifinal%20logo.png" 
                  alt="RackCorp.ai" 
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/5 border border-red-500/15 mb-8 backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c1122a]" />
                <span className="text-[10px] uppercase tracking-widest text-[#0a194f] font-black">SOVEREIGN PHILIPPINE AI SUITE</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-[2.8rem] sm:text-[3.5rem] lg:text-[4.8rem] font-black mb-8 leading-[0.95] tracking-tighter uppercase font-sans text-[#0a194f]"
              >
                ENTERPRISE AI
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium"
              >
                Unlock greater efficiency, faster insights, and smarter operations with enterprise AI solutions designed to automate workflows, enhance decision-making, and drive sustainable business growth—all within a secure sovereign infrastructure, locally hosted environment.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="bg-[#c1122a] hover:bg-[#a60f22] text-white px-8 py-4 text-xs font-bold uppercase rounded-xl transition-all shadow-md shadow-red-950/10">
                  <Link to={createPageUrl('ContactUs')}>Talk to our AI Team</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-200 bg-white hover:bg-slate-50 text-[#0a194f] px-8 py-4 text-xs font-bold uppercase rounded-xl transition-all shadow-sm">
                  <a href="#solutions">Explore Solutions</a>
                </Button>
              </motion.div>
            </div>

            {/* Right Graphics/Map Tunnel Column - Matches First Image Right-Side Visual */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white/80 border border-slate-100 shadow-[0_20px_50px_rgba(10,25,79,0.06)] rounded-3xl p-8 max-w-lg mx-auto overflow-hidden backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                
                <div className="relative z-10 flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                  <div className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                    SOVEREIGN MODEL TUNNEL: <span className="text-emerald-500 font-black">CONNECTED</span>
                  </div>
                  <span className="text-[8px] uppercase font-mono tracking-wider font-extrabold text-[#c1122a] bg-red-500/5 px-2.5 py-0.5 rounded border border-red-500/10">
                    SECURE TIER
                  </span>
                </div>

                <div className="relative py-12 flex justify-center items-center">
                  {/* Decorative rotating bounds */}
                  <div className="absolute w-64 h-64 rounded-full border border-slate-100/80 animate-[spin_30s_linear_infinite]" />
                  <div className="absolute w-[12.5rem] h-[12.5rem] rounded-full border border-dashed border-slate-200/80 animate-[spin_20s_linear_infinite_reverse]" />
                  <div className="absolute w-36 h-36 rounded-full border border-emerald-500/10" />
                  
                  {/* Central Node representing the local AI core */}
                  <div className="relative w-28 h-28 rounded-full bg-[#0a194f] text-white flex flex-col items-center justify-center shadow-2xl shadow-indigo-900/30 z-10">
                    <Shield className="w-8 h-8 text-white mb-1.5 animate-pulse" />
                    <span className="text-[9px] font-black tracking-widest text-[#93c5fd]">PHILIPPINES</span>
                  </div>

                  {/* Nodes around it matching image badges */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-2 left-6 bg-white border border-slate-100/80 px-3.5 py-1.5 rounded-full shadow-md text-[10px] font-bold text-[#0a194f] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c1122a]" />
                    Local Vector DB
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute bottom-4 right-4 bg-white border border-slate-100/80 px-3.5 py-1.5 rounded-full shadow-md text-[10px] font-bold text-[#0a194f] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    NPC Compliant
                  </motion.div>

                  <div className="absolute right-6 top-16 w-8 h-8 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <Cpu className="w-4 h-4 text-[#0a194f]" />
                  </div>
                </div>

                <div className="relative pt-4 border-t border-slate-100 flex justify-between text-[10px] font-mono leading-tight">
                  <div>
                    <div className="text-slate-400 font-semibold mb-0.5">LOCAL ENCRYPTION</div>
                    <div className="font-bold text-[#0a194f]">AES-256-GCM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 font-semibold mb-0.5">ACTIVE SERVER LAYER</div>
                    <div className="font-bold text-[#c1122a]">RackCorp.ai Host</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* Operational Value Section - Matching the Second Screenshot Exactly */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-block px-3 py-1 bg-red-500/5 text-[#c1122a] text-[10px] font-black uppercase tracking-widest rounded-md mb-6">
                OPERATIONAL VALUE
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 leading-[1.05] tracking-tight uppercase text-[#0a194f]">
                AI BUILT FOR<br />
                ENTERPRISE OPERATIONS.
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                Integrating generative Artificial Intelligence into production environments is not merely a question of algorithms—it requires complete compliance security, low latency networks, and robust model governance safeguards.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-10 font-medium">
                TIM brings decades of sovereign IT hosting expertise together with modern LLM computing nodes. This ensures your operations gain intelligent velocity while respecting absolute sovereign boundaries.
              </p>

              {/* Sovereign Compliance Bullet Checklist matching Second Image bottom-left */}
              <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-4">
                  SOVEREIGN COMPLIANCE ASSURANCE
                </div>
                <ul className="space-y-3.5">
                  {[
                    'No offshore data processing',
                    'BSP compliance auditing enabled',
                    'Complete NPC compliance alignment',
                    'Encrypted local backups & cold storage'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-[#0a194f]">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Standard Architecture Cards - Matching Second Image right-side */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { 
                  icon: Database, 
                  title: 'Secure Hybrid Orchestration', 
                  desc: "Operate across public cloud end-nodes, physical virtualized environments, and TIM's private bare-metal servers through unified API endpoints." 
                },
                { 
                  icon: Shield, 
                  title: 'Legal Data Sovereignty (Philippine Bounds)', 
                  desc: 'Address Data Privacy Act of 2012 (DPA) and Bangko Sentral ng Pilipinas (BSP) circulars. Your telemetry outputs never exit Philippine borders.' 
                },
                { 
                  icon: Layers, 
                  title: 'Enterprise Context Integration', 
                  desc: 'Feed specialized operational data, business logics, and historic analytics directly into fine-tuning modules without sharing client secrets.' 
                }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-all flex gap-6 items-start shadow-sm text-left group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0a194f]/5 border border-[#0a194f]/5 flex items-center justify-center group-hover:bg-[#0a194f] group-hover:text-white transition-all">
                    <card.icon className="w-5 h-5 text-[#0a194f] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a194f] mb-2 group-hover:text-[#c1122a] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-xs leading-relaxed mb-4">
                      {card.desc}
                    </p>
                    <a className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#c1122a] uppercase tracking-wider hover:underline" href="#specs">
                      View Architecture Specification
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Our Solutions Product Catalog - Matching Third Screenshot Exactly */}
      <section id="solutions" className="py-24 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-[#c1122a] tracking-widest uppercase bg-red-500/5 px-3.5 py-1.5 rounded inline-block mb-3 border border-[#c1122a]/15">
              Sovereign Product Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a194f] leading-tight mb-4 uppercase">
              OUR SOVEREIGN AI SOLUTIONS
            </h2>
            <p className="text-slate-605 text-base md:text-lg">
              Deploy secure, Philippine-hosted Artificial Intelligence built specifically for enterprise operational constraints.
            </p>
          </div>

          {/* 4 Cards Grid - Clickable to toggle Simulator content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SOLUTIONS.map((sol) => {
              const isSelected = selectedSolutionId === sol.id;
              return (
                <button
                  id={`sol-card-${sol.id}`}
                  key={sol.id}
                  onClick={() => setSelectedSolutionId(sol.id)}
                  className={`text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group backdrop-blur-md ${
                    isSelected 
                      ? "border-[#c1122a] bg-white ring-1 ring-[#c1122a]/30 shadow-lg scale-[1.02]" 
                      : "border-slate-200/60 bg-white hover:bg-white/80 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="w-full">
                    {/* Decorative tag */}
                    <span className={`inline-flex items-center text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md mb-4 shadow-xs ${
                      isSelected ? "bg-[#c1122a] text-white" : "bg-slate-100 border border-slate-200 text-[#0a194f]"
                    }`}>
                      {sol.id === "rask" && "SECURE COPILOT"}
                      {sol.id === "workflows" && "AUTOMATION"}
                      {sol.id === "llaas" && "DEDICATED COMPUTE"}
                      {sol.id === "agents" && "AUTONOMOUS WORKER"}
                    </span>

                    <h3 className="text-lg font-bold text-[#0a194f] group-hover:text-[#c1122a] transition-colors mb-2">
                      {sol.title}
                    </h3>
                    <p className="text-[10px] font-bold text-[#0a194f]/70 font-mono mb-3 uppercase tracking-wider">{sol.tagline}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {sol.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-200/40 pt-4 mt-auto flex justify-between items-center w-full">
                    <span className={`text-[10px] font-bold transition-all flex items-center gap-1 uppercase tracking-wider ${
                      isSelected ? "text-[#c1122a]" : "text-slate-400 group-hover:text-[#0a194f]"
                    }`}>
                      {isSelected ? "Active Playground" : "Open Simulator"}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Core Interactive Simulator Console v2.0 - Inspired by original screens */}
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#0a1335] text-slate-200 border border-slate-800 shadow-2xl relative text-left">
            {/* Dashboard Upper Bar */}
            <div className="bg-[#030920] px-6 py-4 flex flex-wrap justify-between items-center gap-3 border-b border-slate-800">
              <div className="flex items-center gap-6">
                {/* Visual macOS buttons */}
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#93c5fd]">
                  RackCorp.ai :: Simulator Console v2.0
                </span>
              </div>
              {/* Online indicator */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono tracking-wider font-extrabold text-emerald-400 uppercase">
                  SOVEREIGN NODE ONLINE
                </span>
              </div>
            </div>

            {/* Split Screen Layout */}
            <div className="grid md:grid-cols-5 min-h-[420px]">
              {/* Left Details Sidebar */}
              <div className="md:col-span-2 p-8 border-r border-slate-800/80 space-y-6 flex flex-col justify-between bg-[#0a1231]">
                <div>
                  <div className="text-[9px] uppercase font-mono tracking-widest text-slate-400 mb-1.5 font-bold">
                    EXAMINING CAPABILITY
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-white mb-1">
                    {selectedSolution.title}
                  </h4>
                  <p className="text-[10px] uppercase font-mono tracking-wide text-[#93c5fd] font-bold mb-4">
                    {selectedSolution.tagline}
                  </p>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                    Deploy this workload directly inside TIM's private Philippine cages. No data enters global public environments. See how it interacts on the active simulator panel.
                  </p>

                  <ul className="space-y-3.5">
                    {selectedSolution.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs font-medium text-slate-300">
                        <span className="text-[#93c5fd] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800/60 grid grid-cols-3 gap-2 text-[9px] font-mono">
                  {selectedSolution.specs.map((spec, sidx) => (
                    <div key={sidx}>
                      <div className="text-slate-500 mb-0.5 uppercase tracking-wider">{spec.label}</div>
                      <div className="font-extrabold text-[#93c5fd]">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Interactive Window */}
              <div className="md:col-span-3 p-8 flex flex-col justify-between bg-[#040a25]">
                {/* RASK COPILOT SIMULATOR */}
                {selectedSolution.id === "rask" && (
                  <div className="flex-1 flex flex-col justify-between h-full">
                    {/* Simulated Chat Messaging logs */}
                    <div className="flex-1 overflow-y-auto space-y-4 max-h-[260px] pr-2 scrollbar-thin">
                      {raskChat.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed text-left ${
                            msg.sender === "rask"
                              ? "bg-[#0a1335]/70 text-slate-100 self-start border border-slate-800"
                              : "bg-[#c1122a] text-white self-end ml-auto rounded-tr-none shadow-md"
                          }`}
                        >
                          <div>{msg.text}</div>
                          {msg.source && (
                            <div className="text-[10px] text-emerald-400 font-mono mt-2 pt-1.5 border-t border-slate-800">
                              {msg.source}
                            </div>
                          )}
                        </div>
                      ))}
                      {raskSearching && (
                        <div className="bg-[#0a1335]/50 border border-slate-800 text-slate-300 self-start max-w-[80%] rounded-lg p-3 text-xs flex items-center gap-2">
                          <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#c1122a]" />
                          <span className="font-mono text-[10px]">RASK securing local vector nodes...</span>
                        </div>
                      )}
                    </div>

                    {/* Preset queries picker */}
                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <span className="text-[10px] text-slate-500 font-mono block mb-2 font-bold uppercase tracking-wider">SAMPLE COPILOT QUERIES:</span>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {raskPresetQueries.map((pre, pidx) => (
                          <button
                            key={pidx}
                            disabled={raskSearching}
                            onClick={() => handleRaskPresetClick(pre.query)}
                            className="bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 px-3 py-1.5 rounded-xl text-[10px] font-mono cursor-pointer text-left transition-colors"
                          >
                            {pre.label}
                          </button>
                        ))}
                      </div>

                      {/* Chat input box */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={raskQuery}
                          onChange={(e) => setRaskQuery(e.target.value)}
                          placeholder="Ask RASK a secure compliance question..."
                          className="flex-1 bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#c1122a]"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") executeRaskQuery(raskQuery);
                          }}
                        />
                        <button
                          onClick={() => executeRaskQuery(raskQuery)}
                          disabled={raskSearching || !raskQuery.trim()}
                          className="w-10 h-10 bg-[#c1122a] hover:bg-[#a60f22] disabled:bg-slate-900 disabled:text-slate-600 focus:outline-none text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer shrink-0"
                          title="Send Query"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* AUTOMATED WORKFLOW SIMULATOR */}
                {selectedSolution.id === "workflows" && (
                  <div className="flex-1 flex flex-col justify-between h-full">
                    {/* Dynamic Workflow visual graph nodes */}
                    <div className="grid grid-cols-4 gap-2 items-center py-4 px-2 relative">
                      
                      {/* Background Connecting Pipes */}
                      <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 z-0">
                        <div 
                          className="h-full bg-emerald-500 transition-all duration-[4s]" 
                          style={{ width: `${(wfStep / 5) * 100}%` }}
                        ></div>
                      </div>

                      {[
                        { num: 1, name: "API Trigger" },
                        { num: 2, name: "Query DB" },
                        { num: 3, name: "Private AI Scorer" },
                        { num: 4, name: "Human Approver" }
                      ].map((step) => {
                        const isActive = wfStep >= step.num;
                        const isCurrent = wfStep === step.num;
                        return (
                          <div key={step.num} className="relative z-10 flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                              isCurrent 
                                ? "bg-[#c1122a] border-white ring-4 ring-[#c1122a]/30 text-white scale-110"
                                : isActive 
                                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" 
                                  : "bg-slate-900 border-slate-800 text-slate-500"
                            }`}>
                              {isActive && wfStep > step.num ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              ) : (
                                <span className="text-xs font-mono font-bold">{step.num}</span>
                              )}
                            </div>
                            <span className={`text-[8px] sm:text-[9px] font-mono text-center font-bold mt-2 px-1 leading-tight ${
                              isActive ? "text-slate-200" : "text-slate-500"
                            }`}>
                              {step.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Terminal Execution Logs output */}
                    <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-4 my-4 max-h-[140px] overflow-y-auto scrollbar-thin flex flex-col gap-1.5 text-left">
                      <span className="text-[9px] text-slate-500 font-mono uppercase tracking-widest border-b border-slate-900 pb-1.5 mb-1.5 block font-bold">
                        Internal Session Logs (Local Node Manila)
                      </span>
                      {wfLogs.length === 0 ? (
                        <span className="text-[10px] text-slate-500 font-mono italic">Awaiting pipeline execution activation...</span>
                      ) : (
                        wfLogs.map((log, idx) => (
                          <div key={idx} className="text-[10px] font-mono text-slate-300 flex gap-2">
                            <span className="text-emerald-500 font-bold shrink-0">&gt;&gt;</span>
                            <span>{log}</span>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Run Control Button */}
                    <div className="flex gap-3 justify-end">
                      {workflowState !== "idle" && (
                        <button
                          onClick={resetWorkflowDemo}
                          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono cursor-pointer border border-slate-705 border-slate-700 transition"
                        >
                          Reset Simulator
                        </button>
                      )}
                      <button
                        onClick={runWorkflowDemo}
                        disabled={workflowState === "running"}
                        className="px-5 py-2.5 bg-[#c1122a] hover:bg-[#a60f22] text-white rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer transition disabled:bg-slate-850 disabled:text-slate-600"
                      >
                        {workflowState === "running" ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            AUTOMATING...
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5" />
                            TEST AUTOMATION
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* LLM-AS-A-SERVICE SIMULATOR */}
                {selectedSolution.id === "llaas" && (
                  <div className="flex-1 flex flex-col justify-between h-full py-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* Controls */}
                      <div className="space-y-4 text-left">
                        <div>
                          <span className="text-[9px] text-slate-400 font-mono uppercase tracking-wider block mb-2 font-bold">1. Target LLM Core Architecture</span>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => setSelectedModel("llama8")}
                              className={`p-2.5 rounded-xl text-[10px] font-mono font-bold tracking-tight text-center cursor-pointer border transition-all ${
                                selectedModel === "llama8"
                                  ? "bg-[#c1122a] border-white text-white shadow-sm"
                                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                              }`}
                            >
                              Llama 3 (8 Billion)
                            </button>
                            <button
                              onClick={() => setSelectedModel("llama70")}
                              className={`p-2.5 rounded-xl text-[10px] font-mono font-bold tracking-tight text-center cursor-pointer border transition-all ${
                                selectedModel === "llama70"
                                  ? "bg-[#c1122a] border-white text-white shadow-sm"
                                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                              }`}
                            >
                              Llama 3 (70 Billion)
                            </button>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono uppercase tracking-wider mb-2 font-bold">
                            <span>2. Context payload size</span>
                            <span className="text-[#93c5fd] font-bold">{payloadSize * 40} tokens</span>
                          </div>
                          <input
                            type="range"
                            min="10"
                            max="100"
                            value={payloadSize}
                            onChange={(e) => setPayloadSize(parseInt(e.target.value))}
                            className="w-full accent-[#c1122a] bg-slate-900 cursor-pointer h-1.5 rounded"
                          />
                          <div className="flex justify-between text-[8px] font-mono text-slate-500 mt-1">
                            <span>400 Tokens</span>
                            <span>4,000 Tokens</span>
                          </div>
                        </div>
                      </div>

                      {/* Comparison Bars Render */}
                      <div className="bg-slate-950 p-4 border border-slate-800 rounded-xl flex flex-col justify-between gap-4 text-left">
                        <span className="text-[9px] text-slate-400 font-mono uppercase tracking-wider block border-b border-slate-900 pb-1.5 font-bold">
                          Latency comparison benchmark
                        </span>
                        
                        {/* Public Cloud */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono">
                            <span className="text-slate-400 uppercase">Public Cloud (US West)</span>
                            <span className="text-yellow-500 font-semibold">{publicCloudLatency} ms</span>
                          </div>
                          <div className="w-full h-2 bg-slate-900 rounded overflow-hidden">
                            <div 
                              className="bg-yellow-500 h-full rounded transition-all duration-305"
                              style={{ width: `${Math.min(100, (publicCloudLatency / 6000) * 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-[8px] text-red-400 font-mono uppercase block">★ Out-of-territory Transfer Risk High</span>
                        </div>

                        {/* RackCorp Private */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono">
                            <span className="text-white font-bold uppercase block">RackCorp Local Cage</span>
                            <span className="text-emerald-400 font-bold">{privateSovereignLatency} ms</span>
                          </div>
                          <div className="w-full h-2 bg-slate-900 rounded overflow-hidden">
                            <div 
                              className="bg-emerald-400 h-full rounded transition-all duration-305"
                              style={{ width: `${Math.min(100, (privateSovereignLatency / 6000) * 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-[8px] text-emerald-400 font-mono uppercase block">★ 100% Secure Domestic LAN Speed</span>
                        </div>
                      </div>
                    </div>

                    {/* Benchmark highlights */}
                    <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
                      <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/45">
                        <div className="text-[8px] text-slate-400 font-mono uppercase font-bold">Performance advantage</div>
                        <div className="text-lg font-black text-emerald-400 mt-0.5">
                          {Math.round((publicCloudLatency / privateSovereignLatency) * 10) / 10}x Faster
                        </div>
                      </div>
                      <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/45">
                        <div className="text-[8px] text-slate-400 font-mono uppercase font-bold">Monthly token limits</div>
                        <div className="text-lg font-black text-white mt-0.5 uppercase">UNLIMITED flat-rate</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* RACKCORP AGENT WORKER SIMULATOR */}
                {selectedSolution.id === "agents" && (
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div className="flex-1 bg-slate-950 border border-slate-800 p-4 rounded-xl mb-4 max-h-[220px] overflow-y-auto scrollbar-thin text-left">
                      <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-3">
                        <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest font-bold">
                          SECURE COMPLIANCE AUDITING AGENT LOG
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                          auditAgentState === "idle" ? "bg-slate-900 text-slate-500" :
                          auditAgentState === "running" ? "bg-amber-500/20 text-amber-300 animate-pulse" : "bg-emerald-500/20 text-emerald-300"
                        }`}>
                          {auditAgentState.toUpperCase()}
                        </span>
                      </div>

                      {auditProgress.length === 0 ? (
                        <div className="text-center py-6">
                          <Terminal className="w-8 h-8 text-slate-700 mx-auto mb-2" />
                          <p className="text-slate-500 text-xs font-mono">Agent status idle. Trigger the auditing process model below.</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {auditProgress.map((p, idx) => (
                            <div key={idx} className="text-[10px] font-mono text-slate-300 flex items-start gap-2">
                              <span className="text-[#c1122a] font-bold shrink-0">&gt;&gt;</span>
                              <span className="leading-relaxed">{p}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Actions buttons */}
                    <div className="flex justify-between items-center mt-auto border-t border-slate-800 pt-3">
                      <div className="text-[8px] sm:text-[9px] text-slate-500 font-mono">
                        *Strictly logged under NPC audit rules.
                      </div>
                      <div className="flex gap-2">
                        {auditAgentState !== "idle" && (
                          <button
                            onClick={resetAgentAuditSim}
                            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono cursor-pointer border border-slate-700"
                          >
                            Reset Agent
                          </button>
                        )}
                        <button
                          onClick={startAgentAuditSim}
                          disabled={auditAgentState === "running"}
                          className="px-5 py-2.5 bg-[#c1122a] hover:bg-[#a60f22] text-white rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer disabled:bg-slate-850 disabled:text-slate-600"
                        >
                          {auditAgentState === "running" ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              AUDITING DATA...
                            </>
                          ) : (
                            <>
                              <Zap className="w-3.5 h-3.5" />
                              TRIGGER COMPLIANCE AGENT
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Architectural Capabilities Section */}
      <section id="capabilities" className="py-24 bg-white border-t border-b border-slate-100 relative overflow-hidden">
        
        {/* Visual background details */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0a194f]/5 rounded-full blur-3xl -translate-y-1/2 leading-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 font-sans w-full">
          
          {/* Section header */}
          <div className="mb-16 text-left">
            <span className="text-xs font-mono font-bold text-[#c1122a] tracking-widest uppercase bg-red-500/5 border border-[#c1122a]/15 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-xs">
              Sovereign Standard
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a194f] leading-tight uppercase">
              CORE ARCHITECTURAL CAPABILITIES
            </h2>
            <p className="text-slate-600 max-w-2xl mt-4 text-base md:text-lg font-medium">
              Our technology platform is engineered from the ground up to comply with local financial regulations and national security standards.
            </p>
          </div>

          {/* 5 Standard Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {CAPABILITIES.filter(cap => !cap.highlight).map((cap, idx) => {
              const iconsList = [
                ShieldCheck, // Sovereign Cloud Infrastructure
                MapPin,      // Local Data Residency
                Award,       // Custom Branding & Integration
                Sliders,     // Secure Model Governance
                Workflow,    // Private Workflow Automation
              ];
              const IconComponent = iconsList[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-[#f8fafc] backdrop-blur-md border border-slate-200/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:scale-[1.02] hover:border-[#c1122a]/30 hover:bg-white transition-all duration-300 hover:shadow-md group text-left"
                >
                  <div>
                    <div className="p-2.5 bg-white border border-slate-200 text-[#0a194f] group-hover:bg-[#0a194f] group-hover:text-white group-hover:border-[#0a194f] w-11 h-11 flex items-center justify-center mb-6 shadow-inner transition-all duration-300 rounded-xl">
                      <IconComponent className="w-5 h-5 shrink-0" />
                    </div>
                    <h3 className="text-base font-bold text-[#0a194f] mb-3 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[9px] font-mono font-bold text-slate-400 group-hover:text-[#c1122a] transition-colors">
                    SECURE TIER SPEC
                    <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlighted Final Capability: Continuous Improvement */}
          {CAPABILITIES.find(cap => cap.highlight) && (
            <div className="bg-[#0f172a] backdrop-blur-xl rounded-3xl border border-slate-800 shadow-xl overflow-hidden mt-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 relative">
                
                {/* Outer grid backdrop decoration */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#FFF 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                {/* Left description column */}
                <div className="lg:col-span-7 relative z-10 text-left">
                  <div className="inline-flex items-center gap-1.5 bg-[#c1122a] px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase mb-4 tracking-wider shadow-md">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    CAPABILITY CORE STAR
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white leading-tight uppercase">
                    {CAPABILITIES.find(cap => cap.highlight)?.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                    {CAPABILITIES.find(cap => cap.highlight)?.description} Rather than remaining static, models deployed on RackCorp.ai evolve dynamically. We process local feedback matrices and engagement audits to fine-tune weighting architectures continuously, keeping responses highly tailored to your shifting corporate operations.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
                    <div>
                      <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Reinforcement loop</div>
                      <div className="text-base font-bold text-emerald-400 mt-1">RLAIF Sovereign</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Active learning tier</div>
                      <div className="text-base font-bold text-emerald-400 mt-1">Weekly Incremental</div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Data telemetry</div>
                      <div className="text-base font-bold text-white mt-1">100% Localized</div>
                    </div>
                  </div>
                </div>

                {/* Right diagram illustration column */}
                <div className="lg:col-span-5 relative z-10 flex justify-center w-full">
                  <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 w-full max-w-[340px] flex flex-col gap-4 shadow-2xl">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-300 flex items-center gap-1.5 font-bold">
                      <RefreshCw className="w-3 h-3 text-[#c1122a] animate-[spin_4s_linear_infinite]" />
                      Dynamic Model Alignment Tracker
                    </span>

                    <div className="space-y-3 pb-2">
                      {/* Pipeline Stage 1 */}
                      <div className="flex justify-between items-center bg-slate-900/80 border border-slate-800/60 p-2.5 rounded text-left">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-semibold text-white">Client Feedback Collection</span>
                          <span className="text-[8px] text-slate-400 font-mono font-bold uppercase tracking-wider">Implicit & Explicit Inputs</span>
                        </div>
                        <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Active</span>
                      </div>

                      {/* Pipeline Stage 2 */}
                      <div className="flex justify-between items-center bg-slate-900/80 border border-slate-800/60 p-2.5 rounded text-left">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-semibold text-white">Sovereign Direct alignment (DPO)</span>
                          <span className="text-[8px] text-slate-400 font-mono font-bold uppercase tracking-wider">Philippines Guardrail Calibration</span>
                        </div>
                        <span className="text-[9px] font-mono text-[#c1122a] font-bold bg-red-500/10 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Running</span>
                      </div>

                      {/* Pipeline Stage 3 */}
                      <div className="flex justify-between items-center bg-slate-900/80 border border-slate-800/60 p-2.5 rounded text-left">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-semibold text-white">Refined Local Model Weights</span>
                          <span className="text-[8px] text-slate-400 font-mono font-bold uppercase tracking-wider">Deployed in Secure TIM Cages</span>
                        </div>
                        <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Deployed</span>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded border border-slate-900 flex justify-between items-center">
                      <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">System Security Status</span>
                      <span className="text-[9px] font-mono font-bold text-emerald-500 uppercase tracking-wider">100% SECURE DOMESTIC</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* Industry Use Cases Section - Custom Crafted Light Layout */}
      <section className="py-24 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-3 py-1 bg-red-500/5 text-[#c1122a] text-[10px] font-black uppercase tracking-widest rounded-md mb-4">
              INDUSTRY USE CASES
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight uppercase text-[#0a194f]">
              Tailored AI solutions that enhance efficiency and drive innovation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: BarChart, 
                title: 'Banking & Finance', 
                desc: 'Fraud detection and risk assessment.' 
              },
              { 
                icon: Heart, 
                title: 'Healthcare', 
                desc: 'Predictive diagnostics and patient engagement.' 
              },
              { 
                icon: ShoppingCart, 
                title: 'Retail & E-Commerce', 
                desc: 'Personalized recommendations.' 
              },
              { 
                icon: Factory, 
                title: 'Manufacturing', 
                desc: 'Predictive maintenance and quality control.' 
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-slate-300 shadow-[0_4px_20px_rgba(10,25,79,0.01)] hover:shadow-lg transition-all group flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0a194f] group-hover:text-white transition-all">
                    <useCase.icon className="w-5 h-5 text-[#0a194f] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a194f] mb-3 group-hover:text-[#c1122a] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-xs leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Filipino-Owned, Governed Foundation - Hardware Integration - Matches Fifth Image */}
      <section id="trust" className="py-24 bg-gradient-to-b from-[#f8fafc] to-white border-t border-slate-200/60 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full">
          
          {/* Section header split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-6 font-sans text-left">
              <span className="text-xs font-mono font-bold text-[#c1122a] tracking-widest uppercase bg-rose-500/5 border border-[#c1122a]/15 px-3 py-1.5 rounded-full inline-block mb-3 shadow-xs">
                Governances & Hardware Core
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a194f] leading-tight uppercase">
                A SECURE AND
                <br />
                SOVEREIGN INTELLIGENCE
              </h2>
            </div>
            <div className="lg:col-span-6 text-left">
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                RackCorp.ai by TIM marries global state-of-the-art server hardware architectures with complete domestic corporate governance. Operated and maintained by Filipino engineers, ensuring compliance with local mandates and absolute geographical residency.
              </p>
            </div>
          </div>

          {/* Partnership Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PARTNERS.map((partner, pIdx) => {
              return (
                <div
                  key={partner.name}
                  className="bg-white/40 backdrop-blur-md border border-slate-200/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-[#c1122a]/30 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 text-left"
                >
                  <div>
                    {/* Partner Logo */}
                    <div className="flex justify-between items-center border-b border-slate-200/30 pb-4 mb-4 h-16">
                      {partner.logoUrl ? (
                        <div className="bg-white/90 rounded-lg p-2.5 flex items-center justify-center border border-slate-100 shadow-xs h-12 w-36">
                          <img
                            src={partner.logoUrl}
                            alt={`${partner.name} Logo`}
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <span className="font-display font-black text-lg md:text-xl text-[#0a194f] tracking-tight font-mono uppercase bg-white/80 border border-slate-200/50 shadow-inner px-3 py-1 rounded-xl group-hover:bg-[#fff0f2] group-hover:text-[#c1122a] group-hover:border-rose-100 transition-colors">
                          {partner.logoText}
                        </span>
                      )}
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#c1122a] transition-colors" />
                    </div>

                    <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1.5 font-mono">
                      {partner.name} INTEGRATION
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {partner.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-1.5 text-[9px] font-mono font-bold text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                    PHYSICALLY AUDITED NODE
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tim Sovereign Commitment banner */}
          <div className="mt-16 bg-white/70 backdrop-blur-md border border-slate-200/50 p-8 rounded-3xl shadow-md flex flex-col md:flex-row gap-6 items-center max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-left w-full justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 border border-red-100 text-[#c1122a] rounded-2xl shadow-xs hidden sm:block shrink-0">
                  <Heart className="w-6 h-6 animate-pulse fill-[#c1122a]" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-[#0a194f] mb-1">The Philippines' True Sovereign AI Suite</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    100% Filipino-owned, physically operated, and locally governed inside certified domestic enterprise data networks.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <img 
                  src="https://marketing.timcorp.net.ph/hubfs/AI/Rackcorp.A_Ifinal%20logo.png" 
                  alt="RackCorp.ai logo" 
                  className="h-10 w-auto object-contain bg-white/50 px-3.5 py-2 border border-slate-150 rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA, Footer & References - Keep Sleek Authoritative Contrast at Bottom */}
      <CTASection />
      <RelatedServices />
    </div>
  );
}
