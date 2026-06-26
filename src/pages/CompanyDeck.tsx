import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  Server, 
  Cpu, 
  Network, 
  Database, 
  Cloud,
  Users, 
  TrendingUp,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Activity,
  Monitor,
  Brain,
  Layers,
  ShieldCheck,
  Maximize,
  Minimize,
  Terminal,
  Lock,
  Wifi,
  Battery,
  Settings,
  BarChart3,
  Clock,
  AlertTriangle,
  ArrowRight,
  Search,
  RefreshCw,
  Target,
  Code,
  ShieldAlert,
  FileText,
  CheckCircle,
  FileCheck,
  Headphones
} from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 'cover',
    type: 'cover',
    title: 'Turning Technology into Business Efficiency',
    subtitle: 'Company Profile',
    content: {
      logo: 'https://marketing.timcorp.net.ph/hubfs/website/TIM%20LOGO%20WHITE.png',
      tagline: 'Empowering organizations to accelerate digital transformation since 1985.',
      stats: [
        { label: 'Founded', value: '1985' },
        { label: 'Experience', value: '40+ Yrs' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Support', value: '24/7/365' }
      ]
    }
  },
  {
    id: 'usp',
    title: 'THE TIM ADVANTAGE',
    subtitle: 'WHY ENTERPRISES TRUST US',
    content: {
      points: [
        '40 Years of Unwavering Reliability',
        'Sovereign Cloud & Data Residency',
        '24/7/365 Proactive Managed Operations',
        'Military-Grade Cybersecurity Framework',
        'Regional Benchmark for Digital Transformation'
      ]
    }
  },
  {
    id: 'about',
    title: 'ABOUT TIM',
    subtitle: 'Decades of Innovation, Trust, and Excellence',
    content: {
      description: 'Since 1985, Total Information Management Corporation (TIM) has been helping organizations harness technology to drive growth, efficiency, and transformation. With decades of industry experience, TIM has earned a reputation as one of the country\'s trusted technology partners, delivering solutions that enable businesses to adapt, innovate, and thrive in a rapidly evolving digital landscape.\n\nToday, TIM continues to empower enterprises with secure, scalable, and future-ready technology solutions, helping them accelerate digital transformation, strengthen resilience, and achieve sustainable success in the digital economy.',
      stats: [
        { label: 'Founded', value: '1985' },
        { label: 'Experience', value: '40+ Yrs' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Support', value: '24/7/365' }
      ]
    }
  },
  {
    id: 'about-legacy',
    title: 'A LEGACY OF EXCELLENCE',
    subtitle: 'UNWAVERING TRUST SINCE 1985',
    content: {
      items: [
        { icon: Award, title: 'TRUSTED PARTNER', desc: 'Total Information Management Corporation (TIM) has evolved into one of the country’s trusted business technology providers.' },
        { icon: TrendingUp, title: 'DIGITAL ACCELERATION', desc: 'Empowering organizations through innovative technology solutions and accelerating digital transformation.' },
        { icon: Globe, title: 'REGIONAL LEADERSHIP', desc: 'From a supplier of IT equipment to a full-service technology solutions company across the region.' }
      ]
    }
  },
  {
    id: 'evolution',
    title: 'OUR EVOLUTION',
    subtitle: 'FOUR DECADES OF INNOVATION',
    content: {
      items: [
        { icon: Server, title: 'THE INCEPTION', desc: 'Started in 1985 as a supplier of IT equipment and peripherals to leading enterprises.' },
        { icon: Network, title: 'THE EXPANSION', desc: 'Grew into a full-service technology solutions company delivering systems integration and data center services.' },
        { icon: Zap, title: 'THE FUTURE', desc: 'Today, we deliver secure, scalable, and future-ready solutions including AI, Cloud, and Cybersecurity.' }
      ]
    }
  },
  {
    id: 'vision',
    title: 'STRATEGIC INTENT',
    subtitle: 'VISION • MISSION • VALUES',
    content: {
      vision: 'To be the regional benchmark for digital transformation, recognized for unwavering excellence and disruptive innovation.',
      mission: 'Empowering global businesses through resilient, high-performance technology ecosystems.',
      values: ['Excellence', 'Integrity', 'Innovation', 'Agility']
    }
  },
  {
    id: 'services',
    title: 'CAPABILITIES',
    subtitle: 'END-TO-END ICT ECOSYSTEM',
    content: {
      items: [
        { icon: Monitor, title: 'Managed Services' },
        { icon: Cloud, title: 'Hybrid Cloud' },
        { icon: Network, title: 'Connectivity' },
        { icon: ShieldCheck, title: 'Cyber Defense' },
        { icon: Brain, title: 'Cognitive AI' },
        { icon: Layers, title: 'Integration' }
      ]
    }
  },
  // MANAGED NOC SECTION
  {
    id: 'noc-cover',
    type: 'service-cover',
    title: 'MANAGED NETWORK OPERATIONS CENTER',
    subtitle: 'NOC-AS-A-SERVICE',
    content: {
      icon: Activity,
      tagline: 'Optimize your network performance and ensure zero-downtime with TIM\'s Managed NOC. We provide 24/7 proactive monitoring and management of your critical network infrastructure.',
      stats: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Monitoring', value: '24/7' },
        { label: 'Support', value: 'Expert' }
      ]
    }
  },
  {
    id: 'noc-what-we-do',
    title: 'WHAT WE DO',
    subtitle: 'NOC CAPABILITIES',
    content: {
      description: 'Our Managed NOC provides continuous surveillance of your network, leveraging AI-driven analytics to ensure peak performance.',
      items: [
        { icon: Activity, title: '24/7 MONITORING', desc: 'Continuous oversight of network health and performance.' },
        { icon: AlertTriangle, title: 'INCIDENT MANAGEMENT', desc: 'Rapid detection and resolution of network issues.' },
        { icon: TrendingUp, title: 'PERFORMANCE OPTIMIZATION', desc: 'Fine-tuning network configurations for maximum efficiency.' },
        { icon: Settings, title: 'CONFIGURATION MANAGEMENT', desc: 'Expert management of network devices and settings.' },
        { icon: ShieldCheck, title: 'SECURITY MONITORING', desc: 'Integrated security oversight for network infrastructure.' },
        { icon: Headphones, title: 'TECHNICAL SUPPORT', desc: '24/7 access to expert network engineers.' }
      ]
    }
  },
  {
    id: 'noc-activities',
    title: 'NOC ACTIVITIES',
    subtitle: 'PROACTIVE NETWORK MANAGEMENT',
    content: {
      items: [
        { icon: Activity, title: 'NETWORK MONITORING', desc: '24/7/365 monitoring of network devices, links, and traffic.' },
        { icon: AlertTriangle, title: 'FAULT MANAGEMENT', desc: 'Immediate detection, isolation, and resolution of network faults.' },
        { icon: BarChart3, title: 'PERFORMANCE REPORTING', desc: 'Detailed analysis and reporting on network performance metrics.' },
        { icon: Settings, title: 'CHANGE MANAGEMENT', desc: 'Controlled implementation of network changes and updates.' }
      ]
    }
  },
  {
    id: 'noc-expect',
    title: 'WHAT YOU CAN EXPECT',
    subtitle: 'OPERATIONAL EXCELLENCE',
    content: {
      steps: [
        { step: '01', title: 'Detection', desc: 'AI-driven tools identify anomalies and potential failures in real-time.' },
        { step: '02', title: 'Triage', desc: 'Level 1-3 engineers categorize, prioritize, and analyze the event.' },
        { step: '03', title: 'Resolution', desc: 'Remediation applied via remote intervention or on-site dispatch.' }
      ],
      stats: [
        { label: 'Uptime Guarantee', value: '99.99%' },
        { label: 'P1 Response', value: '< 15m' },
        { label: 'MTTR Reduction', value: '40%' }
      ]
    }
  },
  {
    id: 'noc-why',
    title: 'WHY CHOOSE TIM IN MANAGED NOC?',
    subtitle: 'THE NOC ADVANTAGE',
    content: {
      points: [
        'Enhanced Security & Proactive Support',
        'Increased Reliability & Efficiency',
        'Elevated Performance & Scalability',
        'ISO 20000 & ISO 27001 Certified Processes'
      ]
    }
  },
  {
    id: 'noc-cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Optimize your network performance and ensure zero-downtime with TIM\'s Managed NOC.',
      buttonText: 'Schedule a NOC Consultation'
    }
  },

  // MANAGED SOC SECTION
  {
    id: 'soc-cover',
    type: 'service-cover',
    title: 'MANAGED SECURITY OPERATIONS CENTER',
    subtitle: 'SOC-AS-A-SERVICE',
    content: {
      icon: Shield,
      tagline: 'Advanced Threat Detection, Response, and Cyber Resilience. Our Managed SOC provides continuous surveillance of your digital perimeter, leveraging AI-driven analytics to neutralize threats.',
      stats: [
        { label: 'Security', value: '24/7' },
        { label: 'Threat Intel', value: 'Global' },
        { label: 'Analysts', value: 'Tier 1-3' }
      ]
    }
  },
  {
    id: 'soc-what-we-do',
    title: 'WHAT WE DO',
    subtitle: 'SOC CAPABILITIES',
    content: {
      description: 'Our Managed SOC provides continuous surveillance of your digital perimeter, leveraging AI-driven analytics to neutralize threats.',
      items: [
        { icon: Shield, title: 'THREAT HUNTING', desc: 'Proactively searching for cyber threats that are lurking undetected in the network.' },
        { icon: ShieldAlert, title: 'TRIAGING', desc: 'Prioritizing security alerts to determine the order in which they should be investigated.' },
        { icon: Activity, title: 'SECURITY LOG ANALYSIS', desc: 'Reviewing and analyzing logs from various systems to detect suspicious activity.' },
        { icon: Settings, title: 'FINE-TUNING OF RULES', desc: 'Continuously optimizing security rules to minimize false positives and negatives.' },
        { icon: Zap, title: 'INCIDENT RESPONSE', desc: 'Rapidly responding to emerging and sophisticated cybersecurity threats.' },
        { icon: Globe, title: 'BRAND REPUTATION', desc: 'Monitoring for brand-related threats and protecting your digital identity.' }
      ]
    }
  },
  {
    id: 'soc-activities',
    title: 'SOC ACTIVITIES',
    subtitle: 'CONTINUOUS CYBER DEFENSE',
    content: {
      items: [
        { icon: Shield, title: 'THREAT DETECTION', desc: '24/7 monitoring and detection of security incidents.' },
        { icon: ShieldAlert, title: 'INCIDENT RESPONSE', desc: 'Coordinated response to security breaches and threats.' },
        { icon: Search, title: 'VULNERABILITY SCANNING', desc: 'Regular scanning to identify and remediate security weaknesses.' },
        { icon: FileText, title: 'COMPLIANCE REPORTING', desc: 'Ensuring adherence to security standards and regulations.' }
      ]
    }
  },
  {
    id: 'soc-expect',
    title: 'WHAT YOU CAN EXPECT',
    subtitle: 'OPERATIONAL EXCELLENCE',
    content: {
      steps: [
        { step: '01', title: 'Identification', desc: 'Detecting and verifying security incidents using AI-powered SIEM.' },
        { step: '02', title: 'Containment', desc: 'Immediate action to limit the scope and impact of the detected threat.' },
        { step: '03', title: 'Recovery', desc: 'Restoring systems to normal operation with post-incident analysis.' }
      ],
      stats: [
        { label: 'Security Coverage', value: '24/7/365' },
        { label: 'Threat Intel', value: 'Global' },
        { label: 'Analyst Level', value: 'Tier 1-3' }
      ]
    }
  },
  {
    id: 'soc-why',
    title: 'WHY CHOOSE TIM IN MANAGED SOC?',
    subtitle: 'THE SOC ADVANTAGE',
    content: {
      points: [
        'Elite Tier 1-3 Security Analyst Hierarchy',
        'Advanced SIEM/SOAR/XDR Technology Stack',
        'Military-grade Security for Critical Digital Assets',
        'Full Compliance Adherence (PCI-DSS, HIPAA, ISO 27001)'
      ]
    }
  },
  {
    id: 'soc-cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Fortify your digital perimeter and neutralize threats with TIM\'s Managed SOC.',
      buttonText: 'Request a Security Audit'
    }
  },
  {
    id: 'ops-why',
    title: 'WHY MANAGED OPERATIONS?',
    subtitle: 'VIGILANCE & COMPLIANCE',
    content: {
      items: [
        { icon: Zap, title: 'FLEXIBILITY', desc: 'Adaptable service solutions tailored to your evolving business requirements.' },
        { icon: Users, title: 'CERTIFIED ANALYSTS', desc: 'Staffed by highly qualified ethical hackers and certified NOC analysts.' },
        { icon: Clock, title: '24/7 OPERATIONS', desc: 'Continuous monitoring and support since 1994.' },
        { icon: Settings, title: 'GLOBAL STANDARDS', desc: 'Holistic package of professionals using top-tier tools and defined processes.' }
      ]
    }
  },

  // MANAGED INFRASTRUCTURE SECTION
  {
    id: 'infra-cover',
    type: 'service-cover',
    title: 'MANAGED INFRASTRUCTURE',
    subtitle: 'FOCUS ON YOUR BUSINESS. WE’LL HANDLE THE REST.',
    content: {
      icon: Server,
      tagline: 'Stop worrying about server uptime and backup logs. Our team manages, monitors, and protects your IT environment 24/7.',
      stats: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Monitoring', value: '24/7' },
        { label: 'Support', value: 'Expert' }
      ]
    }
  },
  {
    id: 'infra-what-we-do',
    title: 'WHAT WE DO',
    subtitle: 'INFRASTRUCTURE CAPABILITIES',
    content: {
      description: 'We manage the complexity of your physical and virtual infrastructure, ensuring high availability and peak performance.',
      items: [
        { icon: Server, title: 'VIRTUALIZATION', desc: 'Expert management of VMWare ESX environments, guests, and hosts.' },
        { icon: Database, title: 'MANAGED BACKUP', desc: 'Hardware and software management for daily snapshots and archiving.' },
        { icon: Cloud, title: 'CLOUD REPLICATION', desc: 'Seamless replication of local backups to the TIM Cloud for resilience.' },
        { icon: Activity, title: '24/7 MONITORING', desc: 'Constant oversight of backup infrastructure and storage capacity.' },
        { icon: ShieldCheck, title: 'DRaaS', desc: 'Disaster Recovery as a Service to ensure minimal downtime.' },
        { icon: RefreshCw, title: 'DISASTER RECOVERY', desc: 'Resilient DRaaS solutions with seamless cloud replication.' }
      ]
    }
  },
  {
    id: 'infra-why',
    title: 'WHY MANAGED INFRASTRUCTURE?',
    subtitle: 'STRATEGIC PARTNERSHIP',
    content: {
      items: [
        { icon: CheckCircle2, title: 'PEACE OF MIND', desc: 'Proactive maintenance fixes issues before they impact users.' },
        { icon: Headphones, title: 'SINGLE POINT OF CONTACT', desc: 'We manage hardware, software, and hosting relationships for you.' },
        { icon: Zap, title: 'BUILT-IN RESILIENCE', desc: 'Ensuring your data is always backed up and ready for swift recovery.' }
      ]
    }
  },
  {
    id: 'infra-expect',
    title: 'WHAT YOU CAN EXPECT',
    subtitle: 'OPERATIONAL EXCELLENCE',
    content: {
      points: [
        '24/7 Server and storage health monitoring',
        'Proactive virtualization platform orchestration',
        'Hardware maintenance and vendor support management',
        'Continuous capacity and performance optimization'
      ]
    }
  },
  {
    id: 'infra-advantage',
    title: 'WHY CHOOSE TIM IN MANAGED INFRASTRUCTURE?',
    subtitle: 'THE INFRASTRUCTURE ADVANTAGE',
    content: {
      points: [
        '35+ Years of Data Center & Infrastructure Excellence',
        'Multi-Vendor Hardware & Software Certified Expertise',
        'Proactive Capacity Planning to Prevent Bottlenecks',
        'Seamless Scalability for Growing Enterprise Workloads'
      ]
    }
  },
  {
    id: 'infra-cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Build a resilient foundation and offload technical complexity with TIM\'s Managed Infrastructure.',
      buttonText: 'Modernize Your Infrastructure'
    }
  },

  // TIM VAPT SECTION
  {
    id: 'vapt-cover',
    type: 'service-cover',
    title: 'TIM VAPT',
    subtitle: 'OFFENSIVE SECURITY',
    content: {
      icon: Terminal,
      description: 'Vulnerability Assessment and Penetration Testing'
    }
  },
  {
    id: 'vapt-what-we-do',
    title: 'WHAT IS VAPT?',
    subtitle: 'VA VS PT',
    content: {
      description: 'Vulnerability Assessment and Penetration Testing (VAPT) is a proactive approach to identifying, evaluating, and mitigating security weaknesses in your IT infrastructure.',
      items: [
        { icon: Search, title: 'Vulnerability Assessment', desc: 'Identifies vulnerabilities and configuration issues that could expose the organization to risk.' },
        { icon: Target, title: 'Penetration Testing', desc: 'Goal-driven testing that identifies possible entry points and determines potential impact.' },
        { icon: ShieldAlert, title: 'Identify Weak Points', desc: 'Detect security gaps in networks, applications, and endpoints before attackers do.' },
        { icon: Lock, title: 'Prevent Data Breaches', desc: 'Reduce the risk of costly data leaks and system compromises.' },
        { icon: ShieldCheck, title: 'Ensure Compliance', desc: 'Meet industry standards and regulatory requirements such as PCI-DSS, HIPAA, and GDPR.' },
        { icon: Zap, title: 'Cost-Effective', desc: 'Fixing vulnerabilities early is more cost-effective than dealing with a breach.' }
      ]
    }
  },
  {
    id: 'vapt-expect',
    title: 'WHAT YOU CAN EXPECT',
    subtitle: 'OPERATIONAL EXCELLENCE',
    content: {
      steps: [
        { step: '01', title: 'Reconnaissance', desc: 'Gathering intelligence and mapping the digital attack surface.' },
        { step: '02', title: 'Exploitation', desc: 'Controlled attempts to breach identified weaknesses safely.' },
        { step: '03', title: 'Reporting', desc: 'Comprehensive remediation roadmap and executive risk summary.' }
      ]
    }
  },
  {
    id: 'vapt-why',
    title: 'WHY CHOOSE TIM IN VAPT?',
    subtitle: 'THE VAPT ADVANTAGE',
    content: {
      points: [
        'Expertise and Experience: Certified security professionals (CEH, OSCP).',
        'Comprehensive Testing: Evaluation of networks, apps, and cloud.',
        'Actionable Insights: Prioritized recommendations for remediation.',
        'Continuous Support: Guidance to maintain a strong security posture.'
      ]
    }
  },
  {
    id: 'vapt-cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Identify and neutralize vulnerabilities before attackers do with TIM\'s VAPT.',
      buttonText: 'Schedule a VAPT Assessment'
    }
  },

  // BORDERLESS CONNECTIVITY SECTION
  {
    id: 'gns-cover',
    type: 'service-cover',
    title: 'BORDERLESS CONNECTIVITY',
    subtitle: 'AGILITY MEETS GLOBAL REACH',
    content: {
      icon: Globe,
      tagline: 'Expand globally with confidence through high-performance network services that improve application responsiveness, enhance productivity, and enable seamless business operations across borders.',
      stats: [
        { label: 'Nodes', value: '5 Major' },
        { label: 'Backbone', value: 'AS#135423' },
        { label: 'Ports', value: '1G to 100G' }
      ]
    }
  },
  {
    id: 'gns-services',
    title: 'CORE NETWORK SERVICES',
    subtitle: 'HIGH-PERFORMANCE NETWORKING',
    content: {
      items: [
        { icon: Network, title: 'IP TRANSIT', desc: 'Enterprise-grade IP transit via our own network backbone.' },
        { icon: Globe, title: 'VIRTUAL POP', desc: 'Expand globally without massive CAPEX investments in hardware.' },
        { icon: TrendingUp, title: 'SCALE ON DEMAND', desc: 'Flexible per-Mbps scaling from 1G to multiple 100G ports.' },
        { icon: Server, title: 'CLOUD INTERCONNECT', desc: 'Direct peering with global carriers and cloud hyperscalers.' },
        { icon: Shield, title: 'DDOS PROTECTION', desc: 'Enterprise-grade security at the network edge.' }
      ]
    }
  },
  {
    id: 'gns-capabilities',
    title: 'UNMATCHED CONNECTIVITY',
    subtitle: 'GLOBAL NETWORK SERVICES',
    content: {
      items: [
        { icon: Zap, title: 'ULTRA-LOW LATENCY', desc: 'Optimized routing for maximum speed and business agility.' },
        { icon: Globe, title: 'GLOBAL REACH', desc: '5 Major Asian Nodes connecting you to the world seamlessly.' },
        { icon: TrendingUp, title: 'COST EFFICIENCY', desc: 'Flexible, scalable network-as-a-service model.' },
        { icon: Lock, title: 'SECURE ROUTING', desc: 'Robust protocols and multi-layered defenses built-in.' }
      ]
    }
  },
  {
    id: 'gns-why',
    title: 'WHY GNS?',
    subtitle: 'THE CONNECTIVITY ADVANTAGE',
    content: {
      points: [
        'Carrier-Neutral Interconnectivity & Global Peering',
        'High-Availability Backbone with AS#135423 Ownership',
        'Scalable Bandwidth from 1G to 100G on Demand',
        '24/7 Proactive Network Monitoring & Support'
      ]
    }
  },
  {
    id: 'gns-cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Bridge the gap between your global offices with TIM\'s Borderless Connectivity.',
      buttonText: 'Optimize Your Network'
    }
  },

  // CLOUD SERVICES SECTION
  {
    id: 'cloud-cover',
    type: 'service-cover',
    title: 'CLOUD SERVICES',
    subtitle: 'YOUR CLOUD. YOUR PACE.',
    content: {
      icon: Cloud,
      tagline: 'A sovereign, fully managed cloud designed for the modern enterprise. Scale without limits while keeping your data local and secure.',
      stats: [
        { label: 'Sovereign', value: 'Local Data' },
        { label: 'Managed', value: '24/7' },
        { label: 'Scalable', value: 'On-Demand' }
      ]
    }
  },
  {
    id: 'cloud-services',
    title: 'CORE CLOUD SERVICES',
    subtitle: 'ENTERPRISE-GRADE INFRASTRUCTURE',
    content: {
      items: [
        { icon: Server, title: 'COMPUTING (IAAS)', desc: 'On-demand compute, storage, and networking.' },
        { icon: Database, title: 'STORAGE (S3)', desc: 'Scalable, cost-effective object storage for big data.' },
        { icon: Shield, title: 'DATA PROTECTION', desc: 'Secure, automated cloud backup (BaaS).' },
        { icon: RefreshCw, title: 'DRaaS', desc: 'Minimize downtime with automated recovery solutions.' },
        { icon: Lock, title: 'CLOUD SECURITY', desc: 'Built-in defenses to safeguard your business.' }
      ]
    }
  },
  {
    id: 'cloud-why',
    title: 'WHY TIM CLOUD?',
    subtitle: 'THE CLOUD ADVANTAGE',
    content: {
      items: [
        { icon: ShieldCheck, title: 'DATA SOVEREIGNTY', desc: 'Your data stays in the Philippines, compliant with local regulations.' },
        { icon: Zap, title: 'HIGH PERFORMANCE', desc: 'Low-latency access to your critical applications and data.' },
        { icon: Headphones, title: 'FULLY MANAGED', desc: 'Expert support to help you architect and manage your cloud journey.' }
      ]
    }
  },
  {
    id: 'cloud-expect',
    title: 'WHAT YOU CAN EXPECT',
    subtitle: 'OPERATIONAL EXCELLENCE',
    content: {
      steps: [
        { step: '01', title: 'Migration', desc: 'Seamless transition of workloads with zero data loss.' },
        { step: '02', title: 'Orchestration', desc: 'Unified management of hybrid and multi-cloud environments.' },
        { step: '03', title: 'Optimization', desc: 'Continuous cost and performance tuning for maximum ROI.' }
      ],
      stats: [
        { label: 'Data Residency', value: 'Local' },
        { label: 'Latency', value: '< 5ms' }
      ]
    }
  },
  {
    id: 'cloud-advantage',
    title: 'WHY CHOOSE TIM IN CLOUD?',
    subtitle: 'THE CLOUD ADVANTAGE',
    content: {
      points: [
        'Local Data Sovereignty & Regulatory Compliance',
        'Hybrid Multi-Cloud Orchestration & Migration Expertise',
        'Enterprise-Grade Cloud Security & Cyber Resilience',
        'Optimized Cloud Economics & Predictable Performance'
      ]
    }
  },
  {
    id: 'sla',
    title: 'SERVICE LEVEL AGREEMENTS',
    subtitle: 'OUR COMMITMENT TO EXCELLENCE',
    content: {
      description: 'We guarantee the highest standards of service through rigorous SLAs that ensure your business stays operational and secure.',
      stats: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'P1 Response', value: '< 15m' },
        { label: 'MTTR', value: '4 Hours' }
      ]
    }
  },
  {
    id: 'value',
    title: 'THE VALUE PROPOSITION',
    subtitle: 'WHY CHOOSE TIM',
    content: {
      description: 'We deliver measurable business value through technology innovation, operational excellence, and strategic partnership.',
      items: [
        { icon: Zap, title: 'EFFICIENCY', desc: 'Streamlined operations and reduced technical debt.' },
        { icon: ShieldCheck, title: 'RESILIENCE', desc: 'Military-grade security and disaster recovery.' },
        { icon: TrendingUp, title: 'GROWTH', desc: 'Scalable solutions that grow with your business.' }
      ]
    }
  },
  {
    id: 'cloud-cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Scale your business with confidence using TIM\'s Secure and Sovereign Cloud Solutions.',
      buttonText: 'Start Your Cloud Journey'
    }
  },

  // TIMCORP.AI SECTION
  {
    id: 'ai-cover',
    type: 'service-cover',
    title: 'TIMCORP.AI',
    subtitle: 'THE FUTURE OF ENTERPRISE INTELLIGENCE',
    content: {
      icon: Brain,
      tagline: 'Unlock the power of Generative AI to transform your business processes. From automated insights to intelligent workflows, we bridge the gap between data and action.',
      stats: [
        { label: 'Model', value: 'Gemini 3' },
        { label: 'Latency', value: 'Low' },
        { label: 'Impact', value: 'High' }
      ]
    }
  },
  {
    id: 'ai-what-we-do',
    title: 'WHAT WE DO',
    subtitle: 'AI CAPABILITIES',
    content: {
      description: 'We help enterprises integrate AI into their core operations, driving efficiency and innovation.',
      items: [
        { icon: Brain, title: 'GEN AI STRATEGY', desc: 'Consulting on how to leverage LLMs for business growth.' },
        { icon: Code, title: 'CUSTOM AI AGENTS', desc: 'Building intelligent agents to automate complex tasks.' },
        { icon: Database, title: 'DATA PREPARATION', desc: 'Structuring your data for optimal AI performance.' },
        { icon: Zap, title: 'PROCESS AUTOMATION', desc: 'Streamlining workflows with AI-driven insights.' }
      ]
    }
  },
  {
    id: 'ai-use-cases',
    title: 'AI USE CASES',
    subtitle: 'REAL-WORLD IMPACT',
    content: {
      items: [
        { icon: Headphones, title: 'CUSTOMER SUPPORT', desc: 'AI-powered chatbots for 24/7 intelligent assistance.' },
        { icon: FileText, title: 'DOCUMENT ANALYSIS', desc: 'Automated extraction and summarization of complex data.' },
        { icon: BarChart3, title: 'PREDICTIVE ANALYTICS', desc: 'Forecasting trends and identifying business opportunities.' }
      ]
    }
  },
  {
    id: 'ai-why',
    title: 'WHY TIMCORP.AI?',
    subtitle: 'THE AI ADVANTAGE',
    content: {
      points: [
        'Deep Expertise in Generative AI & Machine Learning',
        'Secure & Private AI Deployments for Enterprise Data',
        'Custom-Built AI Solutions Tailored to Your Industry',
        'End-to-End AI Integration & Lifecycle Management'
      ]
    }
  },
  {
    id: 'ai-cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Harness the power of artificial intelligence to drive innovation and efficiency.',
      buttonText: 'Explore AI Solutions'
    }
  },

  // TIM SYSTEM INTEGRATION SECTION
  {
    id: 'si-cover',
    type: 'service-cover',
    title: 'SYSTEM INTEGRATION',
    subtitle: 'UNIFIED ICT ECOSYSTEM',
    content: {
      icon: Layers,
      description: 'Seamless Unification of Legacy and Modern Systems'
    }
  },
  {
    id: 'si-what-we-do',
    title: 'WHAT WE DO',
    subtitle: 'SI CAPABILITIES',
    content: {
      description: 'We bridge the gap between disparate systems, ensuring that your technology stack works as a single unit.',
      items: [
        { icon: Users, title: 'Consultation', desc: 'Understanding business goals and technical requirements.' },
        { icon: Monitor, title: 'Architecture', desc: 'Designing a scalable, resilient unified enterprise ecosystem.' },
        { icon: Settings, title: 'Implementation', desc: 'Expert deployment and integration of multi-vendor components.' },
        { icon: Zap, title: 'Optimization', desc: 'Fine-tuning for maximum performance and operational efficiency.' },
        { icon: Layers, title: 'Legacy Bridge', desc: 'Unifying old and new systems with modern middleware.' },
        { icon: Cloud, title: 'Cloud Sync', desc: 'Seamless integration between on-prem and multi-cloud environments.' }
      ]
    }
  },
  {
    id: 'si-expect',
    title: 'WHAT YOU CAN EXPECT',
    subtitle: 'OPERATIONAL EXCELLENCE',
    content: {
      steps: [
        { step: '01', title: 'Assessment', desc: 'Analyzing current environment and designing a custom roadmap.' },
        { step: '02', title: 'Execution', desc: 'Seamless integration and deployment with minimal disruption.' },
        { step: '03', title: 'Validation', desc: 'Rigorous testing ensures all components communicate perfectly.' }
      ]
    }
  },
  {
    id: 'si-why',
    title: 'WHY CHOOSE TIM IN SYSTEM INTEGRATION?',
    subtitle: 'THE SI ADVANTAGE',
    content: {
      points: [
        'Legacy System Modernization & Bridge Expertise',
        'API-Driven Integration & Middleware Orchestration',
        'Multi-Vendor Unification & Hardware Consolidation',
        'End-to-End Strategic Project Management'
      ]
    }
  },
  {
    id: 'si-cta',
    type: 'cta',
    title: 'READY TO TRANSFORM?',
    subtitle: 'LET\'S CONNECT',
    content: {
      text: 'Unify your technology stack and eliminate silos with TIM\'s System Integration.',
      buttonText: 'Integrate Your Systems'
    }
  },
  // SECTOR IMPACT
  {
    id: 'market',
    title: 'SECTOR IMPACT',
    subtitle: 'DOMINATING KEY INDUSTRIES',
    content: {
      industries: [
        { name: 'Banking & FSI', icon: Database },
        { name: 'Telecoms', icon: Network },
        { name: 'Public Sector', icon: Shield },
        { name: 'Conglomerates', icon: Globe }
      ]
    }
  },

  {
    id: 'news',
    title: 'LATEST UPDATES',
    subtitle: 'CORPORATE MILESTONES',
    content: {
      items: [
        { 
          title: 'Strategic Partnership with KCAT', 
          desc: 'TIM partners with KCAT to deploy Protective DNS, enhancing cybersecurity for regional enterprises.',
          date: '2024'
        },
        { 
          title: 'Carmona Data Center Zone 2', 
          desc: 'Pre-launch phase initiated for the expansion of our state-of-the-art data center facility in Carmona.',
          date: '2024'
        },
        { 
          title: 'AI Transformation Initiative', 
          desc: 'Launching TIMCorp.AI to drive enterprise-wide artificial intelligence adoption and operational excellence.',
          date: '2024'
        }
      ]
    }
  },
  // PORTFOLIO & TESTIMONIALS
  {
    id: 'achievements',
    title: 'OUR ACHIEVEMENTS',
    subtitle: 'CERTIFICATIONS & COMPLIANCE',
    content: {
      items: [
        { icon: ShieldCheck, title: 'ISO 27001:2022', desc: 'Information Security Management System (ISMS)', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso%2027001.png?v=20260311' },
        { icon: Settings, title: 'ISO 20000-1:2018', desc: 'Information Technology Service Management (ITSM)', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/ISO-20000.png?v=20260311' },
        { icon: CheckCircle2, title: 'ISO 9001:2015', desc: 'Quality Management System (QMS)', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/high%20res.png?v=20260311' },
        { icon: ShieldCheck, title: 'ISO 22301:2019', desc: 'Business Continuity Management System (BCMS)', logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/iso-22301%20white.png' },
        { icon: Award, title: 'PCI-DSS v4.0', desc: 'Payment Card Industry Data Security Standard', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311' },
        { icon: FileCheck, title: 'SOC 2 Type II', desc: 'Security, Availability, and Confidentiality Controls', logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311' },
        { icon: Shield, title: 'HIPAA Compliance', desc: 'Health Insurance Portability and Accountability Act', logo: 'https://marketing.timcorp.net.ph/hubfs/website/hipaa_asset.png' },
        { icon: ShieldCheck, title: 'NPC COMPLIANT', desc: 'National Privacy Commission Compliance', logo: 'https://marketing.timcorp.net.ph/hubfs/website/npc.png' },
        { icon: ShieldCheck, title: 'DICT D-TAP', desc: 'Digital Trust Assurance Program Certified by DICT', logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/DTAP-Logo.png' },
        { icon: ShieldCheck, title: 'CSA STAR Level 1', desc: 'Cloud Security Alliance STAR Level 1 Assessment', logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/CSA%20STAR%201.svg' }
      ]
    }
  },
  {
    id: 'portfolio',
    title: 'PROVEN SUCCESS',
    subtitle: 'TRUSTED BY INDUSTRY LEADERS',
    content: {
      testimonials: [
        {
          quote: "Since our partnership started, we have been receiving tremendous support from the TIM team...",
          author: "Alan R. Santos",
          title: "President & CEO",
          company: "NatRe"
        },
        {
          quote: "Our partnership has led us to several successful projects, and we truly appreciate your continued support...",
          author: "Jennie Lansang",
          title: "CIO",
          company: "BancNet"
        },
        {
          quote: "We feel very privileged to be one of your long-time clients. We look forward to many more years...",
          author: "Ryan Acosta",
          title: "SVP",
          company: "UnionBank"
        }
      ]
    }
  },
  {
    id: 'partnerships',
    title: 'ECOSYSTEM',
    subtitle: 'GLOBAL TECHNOLOGY ALLIANCES',
    content: {
      text: 'Strategically aligned with the world\'s most powerful technology innovators.',
      partners: [
        { name: 'Oracle', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Oracle_logo.svg.png' },
        { name: 'HPE', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Hewlett_Packard_Enterprise_logo.svg.png' },
        { name: 'Dell', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Dell_Logo.png' },
        { name: 'Lenovo', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Lenovo_Global_Corporate_Logo.png' },
        { name: 'VMware', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/VMware-Logo.wine.png' },
        { name: 'Red Hat', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Red_Hat-Logo.wine.png' },
        { name: 'Palo Alto', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/PaloAltoNetworks_2020_Logo.svg.png' },
        { name: 'Fortinet', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Fortinet_logo.svg' },
        { name: 'CrowdStrike', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/crowdstrike.jpg' },
        { name: 'Check Point', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/check-point-logo-large-2024.png' },
        { name: 'NetApp', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/NetApp-Logo.wine.png' },
        { name: 'Pure Storage', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Pure-storage-vector-logo.svg' },
        { name: 'Veeam', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/veeam.png' },
        { name: 'SolarWinds', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/1280px-Solarwinds.png' },
        { name: 'Sophos', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Sophos-Logo.wine.png' },
        { name: 'Arista', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Arista-networks-logo.svg.png' },
        { name: 'Rubrik', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Rubrik_Logo.svg.png' },
        { name: 'Finastra', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Finastra_Logo_2024.png' },
        { name: 'Forcepoint', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Forcepoint_Logo.png' },
        { name: 'Delinea', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Delinea.jpg' },
        { name: 'Progress', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Progress_Software_logo.png' },
        { name: 'Rocket', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/rocket-software-logo.png' },
        { name: 'Omnissa', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/omnissa.png' },
        { name: 'Trellix', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/trellix.png' },
        { name: 'WestCon', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/westcon.png' },
        { name: 'Sangfor', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/sangfor.jpg' },
        { name: 'CRIF', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Crif_logo.png' },
        { name: 'Archer', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Archer%20logo%202.webp' },
        { name: 'Comstor', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/comstor.png' },
        { name: 'TeamMate', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/TeamMate-Logo.webp' },
        { name: 'Outseer', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/OUTSEER_Cropped_Color.jpg' },
        { name: 'Exus', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/exus_coral_rgb.png' },
        { name: 'Kiya.ai', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/Kiya_ai_Logo.jpg' },
        { name: 'Stitch', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/stitch-01.png' },
        { name: 'Nutanix', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/nutanix.png' },
        { name: 'Huawei', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/huawei.png' },
        { name: 'Cisco', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/cisco.png' },
        { name: 'Meraki', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/cisco%20meraki.png' },
        { name: 'Ruckus', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/ruckus.png' },
        { name: 'Ruijie', logo: 'https://marketing.timcorp.net.ph/hubfs/website/partners/ruijie.png' }
      ]
    }
  },
  {
    id: 'contact',
    title: 'ENGAGE',
    subtitle: 'START YOUR TRANSFORMATION',
    content: {
      address: '5600 Pres. Sergio Osmeña Highway corner Arellano Street, Brgy. Palanan, Makati City 1235',
      email: 'solutions@timcorp.net.ph',
      phone: '+63 (2) 8885-8461',
      website: 'www.timcorp.net.ph',
      support: 'cx.support@timcorp.net.ph'
    }
  },
  // FINAL CTA
  {
    id: 'final-cta',
    type: 'cta',
    title: 'PARTNER WITH TIM',
    subtitle: 'SECURE YOUR FUTURE TODAY',
    content: {
      text: 'Cyber threats can target any organization. Stay ahead of attackers, safeguard sensitive information, and maintain business continuity with TIM.',
      buttonText: 'Connect with our Experts'
    }
  }
];

export default function CompanyDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsBooting(false), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key.toLowerCase() === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-[#00021a] text-white overflow-hidden font-sans selection:bg-blue-500/30 cursor-none sm:cursor-auto">
      <AnimatePresence>
        {isBooting && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-12"
          >
            <div className="w-full max-w-md space-y-8">
              <div className="flex items-center gap-4">
                <Terminal className="text-blue-500 animate-pulse" />
                <div className="text-xs font-mono text-blue-500 uppercase tracking-widest">
                  Initializing TIM Secure Deck v4.0.1...
                </div>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${bootProgress}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-white/20 uppercase tracking-tighter">
                <div>{">"} Kernel Loaded</div>
                <div>{">"} Assets Cached</div>
                <div>{">"} HUD Initialized</div>
                <div>{">"} Secure Link Established</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Background Video for Cover Slide */}
      <AnimatePresence>
        {currentSlide === 0 && !isBooting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Grid */}
        <motion.div 
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }} 
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, Math.random() * 100 + '%'],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{ 
              duration: Math.random() * 20 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
          />
        ))}

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      </div>

      {/* Scanning Line */}
      <motion.div 
        animate={{ y: ['0%', '100%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none z-0"
      />

      {/* Top HUD Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 border-b border-white/5 backdrop-blur-md z-50 flex items-center justify-between px-12">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Lock size={14} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Encrypted Session</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <Wifi size={14} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Link: Stable</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-black text-white/20 uppercase tracking-tighter">System Load</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={cn("w-3 h-1 rounded-full", i < 3 ? "bg-blue-500" : "bg-white/10")} />
                ))}
              </div>
            </div>
            <Battery size={16} className="text-blue-500" />
          </div>
          
          <button 
            onClick={toggleFullscreen}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors group"
            title="Press F for Fullscreen"
          >
            {isFullscreen ? <Minimize size={20} className="text-blue-400" /> : <Maximize size={20} className="text-blue-400" />}
          </button>
        </div>
      </div>

      {/* Progress Bar (Bottom of Top Bar) */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-white/5 z-50">
        <motion.div 
          className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Slide Content */}
      <div className="relative h-full flex items-center justify-center p-6 lg:p-24 pt-32">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-7xl h-full flex flex-col justify-center"
          >
            {slide.type === 'cover' ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-12">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="flex justify-center"
                >
                  <div className="relative group">
                    <div className="absolute -inset-8 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <img src={(slide.content as any).logo} alt="TIM Logo" className="h-16 lg:h-20 relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                  </div>
                </motion.div>

                <div className="space-y-8 max-w-5xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-blue-500 font-black uppercase tracking-[0.5em] text-xs lg:text-sm"
                  >
                    {slide.subtitle}
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                    className="text-[clamp(2rem,6vw,4.5rem)] lg:text-[clamp(2.5rem,6vw,5.5rem)] font-avantgarde font-bold leading-[1.1] lg:leading-[1] tracking-tighter uppercase"
                  >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
                      {slide.title}
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-base lg:text-lg text-blue-100/40 font-medium max-w-2xl mx-auto leading-relaxed"
                  >
                    {(slide.content as any).tagline}
                  </motion.p>
                </div>

                {/* Certification Badges on Cover */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="flex flex-wrap justify-center gap-6 lg:gap-8 pt-8"
                >
                  {(slides.find(s => s.id === 'achievements')?.content as any)?.items?.map((c: any) => (
                    <img 
                      key={c.title}
                      src={c.logo} 
                      alt={c.title} 
                      className="h-6 lg:h-8 object-contain opacity-40 hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </motion.div>
              </div>
            ) : slide.type === 'service-cover' ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-12">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative group"
                >
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  {slide.content.icon && <slide.content.icon className="w-16 h-16 lg:w-24 lg:h-24 text-blue-500 relative z-10" />}
                </motion.div>

                <div className="space-y-6 max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs lg:text-sm"
                  >
                    {slide.subtitle}
                  </motion.div>

                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-none"
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-lg lg:text-2xl text-white/40 font-medium"
                  >
                    {slide.content.description}
                  </motion.p>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-4 space-y-12">
                  <div className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-6"
                    >
                      <div className="h-px w-16 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs">Module {String(currentSlide + 1).padStart(2, '0')}</span>
                    </motion.div>
                    <h2 className={cn(
                      "font-black tracking-tighter leading-[0.85] uppercase",
                      slide.title.length > 25 ? "text-3xl lg:text-5xl" : "text-4xl lg:text-6xl"
                    )}>
                      {slide.title.split(' ').map((word, i) => (
                        <motion.span 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className={cn("block", i === 0 ? "text-white" : "text-blue-500")}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </h2>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-xl lg:text-2xl text-white/30 font-bold tracking-tight leading-tight"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative p-10 lg:p-16 bg-white/[0.01] border border-white/5 rounded-[4rem] backdrop-blur-3xl overflow-hidden group shadow-2xl"
                  >
                    {/* HUD Brackets */}
                    <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-blue-500/40 rounded-tl-2xl" />
                    <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-blue-500/40 rounded-br-2xl" />
                    
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                      {/* Dynamic Slide Content Rendering */}
                      {slide.id === 'about' && (
                        <div className="space-y-8">
                          <p className="text-xl lg:text-3xl leading-relaxed text-blue-100/70 font-medium">
                            {slide.content.description}
                          </p>
                        </div>
                      )}

                      {/* Generic Layouts for Service Details */}
                      {(slide.id.includes('overview') || slide.id.includes('details') || slide.id.includes('sdwan') || slide.id.includes('usecases') || slide.id.includes('what-we-do') || slide.id.includes('vapt') || slide.id === 'news' || slide.id.includes('legacy') || slide.id.includes('evolution') || slide.id.includes('leadership') || slide.id.includes('talent') || slide.id.includes('activities') || slide.id.includes('why') || slide.id.includes('services') || slide.id.includes('mission') || slide.id.includes('roadmap') || slide.id.includes('certs') || slide.id.includes('advantage')) && (
                        <div className="space-y-8">
                          {slide.content.description && (
                            <p className="text-xl lg:text-2xl leading-relaxed text-blue-100/70 font-medium">
                              {slide.content.description}
                            </p>
                          )}
                          {(slide.content as any).points && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                              {(slide.content as any).points?.map((p: string, i: number) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                  <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
                                  <span className="text-sm font-bold text-white/80">{p}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {(slide.content as any).items && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                              {(slide.content as any).items?.map((item: any, i: number) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-blue-500/10 transition-colors group/item relative overflow-hidden">
                                  {item.icon && <item.icon className="w-8 h-8 text-blue-500 mb-4 group-hover/item:scale-110 transition-transform" />}
                                  {item.date && <div className="text-[10px] font-black text-blue-500/40 mb-2 tracking-widest">{item.date}</div>}
                                  <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-sm">{item.title}</h4>
                                  <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                                  {slide.id === 'news' && (
                                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                      <Globe className="w-12 h-12 text-blue-500" />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {(slide.id.includes('functions') || slide.id.includes('capabilities') || slide.id.includes('stack') || slide.id.includes('arch') || slide.id.includes('framework') || slide.id.includes('tiers') || slide.id.includes('hierarchy')) && !slide.id.includes('what-we-do') && (
                        <div className="grid grid-cols-2 gap-6">
                          {(slide.content as any).items?.map((item: any, i: number) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-blue-500/10 transition-colors group/item">
                              {item.icon && <item.icon className="w-8 h-8 text-blue-500 mb-4 group-hover/item:scale-110 transition-transform" />}
                              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-sm">{item.title}</h4>
                              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {(slide.id.includes('process') || slide.id.includes('methodology') || slide.id.includes('lifecycle') || slide.id.includes('expect')) && (
                        <div className="space-y-8">
                          {(slide.content as any).steps && (
                            <div className="space-y-4">
                              {(slide.content as any).steps?.map((s: any, i: number) => (
                                <div key={i} className="relative p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-8 group/step hover:bg-blue-500/5 transition-colors">
                                  <div className="text-4xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors">
                                    {s.step}
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-1">{s.title}</h4>
                                    <p className="text-xs text-white/40">{s.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {(slide.content as any).stats && (
                            <div className="grid grid-cols-2 gap-4 pt-4">
                              {(slide.content as any).stats?.map((s: any, i: number) => (
                                <div key={i} className="text-center p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                                  <div className="text-3xl font-black text-blue-500 mb-1">{s.value}</div>
                                  <div className="text-[8px] uppercase tracking-widest text-white/40 font-black">{s.label}</div>
                                </div>
                              ))}
                            </div>
                          )}

                          {(slide.content as any).points && !((slide.content as any).steps) && (
                            <div className="grid grid-cols-1 gap-4">
                              {(slide.content as any).points?.map((p: string, i: number) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                  <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
                                  <span className="text-sm font-bold text-white/80">{p}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {(slide.id.includes('tech') || slide.id.includes('tooling')) && (
                        <div className="space-y-8">
                          <p className="text-lg text-blue-100/60">{(slide.content as any).description}</p>
                          <div className="grid grid-cols-2 gap-4">
                            {(slide.content as any).tools?.map((tool: any, i: number) => (
                              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-2">
                                <span className="text-xl font-black text-white">{tool.name}</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold">{tool.category}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {slide.type === 'cta' && (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-24 h-24 rounded-3xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30"
                          >
                            <ArrowRight className="w-12 h-12 text-blue-500" />
                          </motion.div>
                          <div className="space-y-6 max-w-2xl">
                            <p className="text-2xl lg:text-3xl font-bold text-blue-100/80 leading-relaxed">
                              {(slide.content as any).text}
                            </p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-10 py-5 bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-blue-400 transition-colors flex items-center gap-4 mx-auto"
                            >
                              {(slide.content as any).buttonText}
                              <ArrowRight className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>
                      )}

                      {slide.type === 'diagram' && (
                        <div className="relative h-[500px] flex items-center justify-center">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center relative">
                              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
                              {slide.content.icon && <slide.content.icon className="w-12 h-12 lg:w-16 lg:h-16 text-blue-500 relative z-10" />}
                            </div>
                          </div>
                          
                          {/* Connecting Lines (Visual only) */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                            <defs>
                              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            {(slide.content as any).items?.map((_: any, i: number) => {
                              const angle = (i * 360) / (slide.content as any).items.length;
                              const radius = 180;
                              const x2 = 50 + Math.cos((angle * Math.PI) / 180) * 40; // Approx % based
                              const y2 = 50 + Math.sin((angle * Math.PI) / 180) * 40;
                              return (
                                <line 
                                  key={i} 
                                  x1="50%" y1="50%" 
                                  x2={`${x2}%`} y2={`${y2}%`} 
                                  stroke="url(#lineGradient)" 
                                  strokeWidth="2" 
                                  strokeDasharray="4 4" 
                                />
                              );
                            })}
                          </svg>

                          {(slide.content as any).items?.map((item: any, i: number) => {
                            const angle = (i * 360) / (slide.content as any).items.length;
                            const radius = 200;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;
                            return (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                                style={{ x, y }}
                                className="absolute p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl w-48 text-center group hover:bg-blue-500/10 transition-all hover:border-blue-500/30 shadow-xl"
                              >
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                  {item.icon && <item.icon className="w-6 h-6 text-blue-400" />}
                                </div>
                                <h5 className="text-xs font-black uppercase tracking-widest text-white mb-1">{item.title}</h5>
                                <p className="text-[10px] text-white/40 leading-tight">{item.desc}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      )}

                      {slide.id.includes('sla') && (
                        <div className="space-y-12">
                          <div className="grid grid-cols-2 gap-8">
                            {(slide.content as any).stats?.map((s: any, i: number) => (
                              <div key={i} className="text-center p-8 bg-blue-500/5 rounded-3xl border border-blue-500/10">
                                <div className="text-5xl font-black text-blue-500 mb-2">{s.value}</div>
                                <div className="text-[10px] uppercase tracking-widest text-white/40 font-black">{s.label}</div>
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-white/30 text-center italic">{(slide.content as any).note}</p>
                        </div>
                      )}

                      {slide.id.includes('value') && (
                        <div className="grid gap-4">
                          {(slide.content as any).benefits?.map((b: any, i: number) => (
                            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 group/benefit hover:bg-blue-500/10 transition-all">
                              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{b.title}</h4>
                              <p className="text-sm text-white/40 leading-relaxed">{b.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.id === 'vision' && (
                        <div className="space-y-12">
                          <div className="space-y-4">
                            <h4 className="text-blue-500 font-black uppercase tracking-widest text-xs">Vision</h4>
                            <p className="text-2xl font-bold leading-tight">{slide.content.vision}</p>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-blue-500 font-black uppercase tracking-widest text-xs">Mission</h4>
                            <p className="text-2xl font-bold leading-tight">{slide.content.mission}</p>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            {slide.content.values?.map((v: string) => (
                              <span key={v} className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-black uppercase tracking-widest text-blue-400">
                                {v}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {slide.id === 'services' && (
                        <div className="grid grid-cols-2 gap-6">
                          {slide.content.items?.map((item: any, i: number) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-blue-500/10 transition-colors group/item">
                              {item.icon && <item.icon className="w-8 h-8 text-blue-500 mb-4 group-hover/item:scale-110 transition-transform" />}
                              <h4 className="font-bold text-white mb-2">{item.title}</h4>
                              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.id === 'market' && (
                        <div className="grid grid-cols-2 gap-8">
                          {slide.content.industries?.map((ind: any, i: number) => (
                            <div key={i} className="flex flex-col items-center text-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/5">
                              {ind.icon && <ind.icon className="w-12 h-12 text-blue-500" />}
                              <span className="text-sm font-black uppercase tracking-widest">{ind.name}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.id === 'usp' && (
                        <div className="space-y-6">
                          {slide.content.points?.map((p: string, i: number) => (
                            <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-black">
                                0{i + 1}
                              </div>
                              <span className="text-xl font-bold">{p}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.id === 'achievements' && (
                        <div className="space-y-12">
                          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 overflow-x-auto no-scrollbar">
                            {slide.content.items?.map((c: any) => (
                              <div key={c.title} className="flex-shrink-0 flex items-center justify-center group/c hover:scale-110 transition-transform">
                                <img 
                                  src={c.logo} 
                                  alt={c.title} 
                                  className="h-8 lg:h-10 object-contain opacity-70 group-hover/c:opacity-100 transition-opacity"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ))}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-6">
                            {slide.content.items?.map((item: any, i: number) => (
                              <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-blue-500/10 transition-colors group/item">
                                {item.icon && <item.icon className="w-8 h-8 text-blue-500 mb-4 group-hover/item:scale-110 transition-transform" />}
                                <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-sm">{item.title}</h4>
                                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {slide.id === 'portfolio' && (
                        <div className="space-y-8">
                          <div className="grid gap-6">
                            {slide.content.testimonials?.map((t: any, i: number) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="p-6 bg-white/5 border border-white/5 rounded-2xl relative group/t"
                              >
                                <div className="absolute top-4 right-6 opacity-5 group-hover/t:opacity-20 transition-opacity">
                                  <Activity className="w-12 h-12 text-blue-500" />
                                </div>
                                <p className="text-sm lg:text-base text-blue-100/70 italic mb-4 leading-relaxed">
                                  "{t.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-black text-xs">
                                    {t.author.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-white">{t.author}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-blue-400 font-black">
                                      {t.title} <span className="text-white/20 mx-1">|</span> {t.company}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {slide.id === 'partnerships' && (
                        <div className="space-y-6">
                          <p className="text-lg font-medium text-blue-100/70 text-center">{slide.content.text}</p>
                          <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl">
                            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-8 gap-y-12 items-center justify-items-center">
                              {slide.content.partners?.map((p: any) => (
                                <div key={p.name} className="w-full flex items-center justify-center group/p">
                                  <img 
                                    src={p.logo} 
                                    alt={p.name} 
                                    className="h-10 lg:h-14 w-auto object-contain opacity-80 group-hover/p:opacity-100 group-hover/p:scale-125 transition-all duration-500"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {slide.id === 'contact' && (
                        <div className="space-y-8">
                          <div className="grid gap-6">
                            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                              <MapPin className="text-blue-500" />
                              <span className="text-xl font-bold">{slide.content.address}</span>
                            </div>
                            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                              <Mail className="text-blue-500" />
                              <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">General Inquiry</span>
                                <span className="text-xl font-bold">{slide.content.email}</span>
                              </div>
                            </div>
                            {slide.content.support && (
                              <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                                <ShieldCheck className="text-blue-500" />
                                <div className="flex flex-col">
                                  <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Support Command</span>
                                  <span className="text-xl font-bold">{slide.content.support}</span>
                                </div>
                              </div>
                            )}
                            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                              <Phone className="text-blue-500" />
                              <span className="text-xl font-bold">{slide.content.phone}</span>
                            </div>
                            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                              <Globe className="text-blue-500" />
                              <span className="text-xl font-bold">{slide.content.website}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center z-50">
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all disabled:opacity-20 disabled:cursor-not-allowed group backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all disabled:opacity-20 disabled:cursor-not-allowed group backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Navigation</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">Arrows / Space / F</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-black text-white/20 uppercase tracking-tighter">Deck Status</span>
              <div className="flex items-center gap-2">
                <Settings size={10} className="text-blue-500 animate-spin-slow" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Operational</span>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10" />
          </div>
          
          <div className="text-right">
            <div className="text-4xl font-black text-white leading-none tracking-tighter">
              {String(currentSlide + 1).padStart(2, '0')}
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/20">
              / {slides.length}
            </div>
          </div>
        </div>
      </div>

      {/* HUD Corner Accents */}
      <div className="absolute top-24 left-12 w-16 h-16 border-t-2 border-l-2 border-blue-500/10 rounded-tl-3xl pointer-events-none" />
      <div className="absolute top-24 right-12 w-16 h-16 border-t-2 border-r-2 border-blue-500/10 rounded-tr-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b-2 border-l-2 border-blue-500/10 rounded-bl-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-blue-500/10 rounded-br-3xl pointer-events-none" />
    </div>
  );
}
