import { Shield, CheckCircle2, Award, Server, Lock, FileCheck, Activity, ShieldCheck } from 'lucide-react';

export const certifications = [
  {
    id: 'iso9001',
    name: 'ISO 9001',
    title: 'ISO 9001: Quality Management Systems (QMS)',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/high%20res.png?v=20260311',
    desc: 'ISO 9001 is the international standard for a quality management system. It ensures that an organization consistently provides products and services that meet customer and regulatory requirements.',
    meaning: 'This is our promise of reliability. It guarantees that our internal processes—from project management to customer support—are standardized, efficient, and focused on continuous improvement to better serve your business goals.',
    icon: Award
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    title: 'ISO 27001: Information Security Management Systems (ISMS)',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/iso%2027001.png?v=20260311',
    desc: 'ISO 27001 is the gold standard for managing information security. It defines the requirements for establishing, implementing, and maintaining a robust security framework.',
    meaning: 'Your data is shielded by world-class defense layers. This certification confirms that we have rigorous controls in place to manage risks related to data security, ensuring the confidentiality and integrity of your sensitive information.',
    icon: Lock
  },
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    title: 'SOC 2 Type II: Security, Availability, & Confidentiality Controls',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/AICPA-Logo.png?v=20260311',
    desc: "The SOC 2 Type II report is an independent audit that evaluates a service organization's controls over a sustained evaluation period (ranging from 6 to 12 months). Conducted by an independent CPA firm in accordance with the AICPA standard, it verifies our operational readiness and consistent execution of security controls.",
    meaning: 'This represents our verified, day-to-day enforcement of rigorous security boundaries. Unlike a point-in-time assessment, our SOC 2 Type II attestation guarantees to your auditors, compliance officers, and leadership that our corporate security policies are deeply integrated into our daily workflows and reliably managed.',
    icon: FileCheck
  },
  {
    id: 'pcidss',
    name: 'PCI-DSS',
    title: 'PCI-DSS Certified',
    logo: 'https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/certifications/PCIDSS%20CERTIFIED.png?v=20260311',
    desc: 'PCI-DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.',
    meaning: "If your business involves financial transactions, our compliance reduces your risk. We provide a hardened infrastructure that prevents data breaches and protects your customers' payment information.",
    icon: Shield
  },
  {
    id: 'iso22301',
    name: 'ISO 22301',
    title: 'ISO 22301: Business Continuity Management',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/iso-22301%20white.png',
    desc: 'ISO 22301 is the international standard for Business Continuity Management Systems (BCMS). It helps organizations prepare for, respond to, and recover from disruptive incidents.',
    meaning: 'Your operations are safeguarded against unexpected disruptions. This certification ensures we have robust plans in place to maintain critical functions and quickly restore services during any crisis.',
    icon: Activity
  },
  {
    id: 'cmmc',
    name: 'CMMC Level 1',
    title: 'CMMC Level 1: Cybersecurity Maturity Model Assessed',
    logo: 'https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-cmm.png',
    desc: 'CMMC is a US-mandated security framework developed by the Department of Defense (DoD). As of late 2025, it is a legal requirement for any company—regardless of location—that wishes to participate in the U.S. defense supply chain. It focuses on "Basic Cyber Hygiene," ensuring that foundational security practices like access control and system integrity are not just present, but verified.',
    meaning: 'Our adherence to these rigorous U.S. federal standards provides you with a hardened infrastructure designed to withstand 90% of common cyber threats. By partnering with a CMMC-assessed provider, you gain a future-proof foundation that simplifies your own compliance audits and ensures your business remains eligible for high-value international and defense-related projects.',
    icon: CheckCircle2
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    title: 'HIPAA Compliance: Safeguarding Healthcare Data',
    logo: 'https://marketing.timcorp.net.ph/hubfs/website/hipaa_asset.png',
    desc: 'As a pioneered ICT leader in the Philippines, our alignment with HIPAA standards is critical for local businesses serving the global healthcare market (such as Medical BPOs, Telehealth providers, and Revenue Cycle Management firms).',
    meaning: 'Our "HIPAA-ready" infrastructure ensures that your operations meet the strict Administrative, Physical, and Technical safeguards required to handle Protected Health Information (PHI). By partnering with us, you eliminate the risk of massive federal fines and reputational damage, allowing you to confidently manage healthcare data for international clients while staying compliant with both U.S. laws and the Philippine Data Privacy Act.',
    icon: Activity
  },
  {
    id: 'dict-dtap',
    name: 'DICT D-TAP',
    title: 'DICT D-TAP Certified',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/DTAP-Logo.png',
    desc: 'The Digital Trust Assurance Program (D-TAP) by the Department of Information and Communications Technology (DICT) evaluates and verifies digital service providers in the Philippines for their excellence, data privacy, security, and operational standards.',
    meaning: 'By achieving D-TAP recognition, we are formally recognized by the Philippine government as a trusted digital partner. This assures our local public and private sector clients that our processes, data handling, and infrastructure adhere to local regulatory requirements and meet the stringent national trust, safety, and resilience standards.',
    icon: ShieldCheck
  },
  {
    id: 'csa-star-1',
    name: 'CSA STAR Level 1',
    title: 'CSA STAR Level 1 Assessment',
    logo: 'https://marketing.timcorp.net.ph/hubfs/certifications/CSA%20STAR%201.svg',
    desc: 'The Cloud Security Alliance (CSA) Security Trust Assurance and Risk (STAR) Level 1 is an internationally recognized cloud security certification that involves a rigorous self-assessment of cloud providers against the CSA Cloud Controls Matrix (CCM). It verifies that cloud offerings are secure, compliant, and operate with maximum transparency.',
    meaning: 'This certification directly applies to our TIM Cloud offerings. It guarantees to our clients that our cloud security architecture has been fully evaluated against top industry best practices, giving you complete visibility and absolute trust in how your workloads are hosted, monitored, and protected in the cloud.',
    icon: Server
  }
];
