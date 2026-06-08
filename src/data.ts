export interface Solution {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  accentColor: string;
}

export interface Capability {
  title: string;
  description: string;
  highlight?: boolean;
}

export interface TrustPartner {
  name: string;
  logoText: string;
  description: string;
  logoUrl?: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: "rask",
    title: "RackCorp Enterprise AI Assistant (RASK)",
    tagline: "RackCorp Assistant for Secure Knowledge",
    description: "An enterprise-grade, secure copilot that connects seamlessly to your internal documents, databases, and structural structures via dedicated sovereign endpoints.",
    features: [
      "Sovereign data boundary - indexing stays local",
      "Role-Based Access Control (RBAC) alignment",
      "Active directory and SharePoint direct sync"
    ],
    specs: [
      { label: "Deployment", value: "Sovereign Node" },
      { label: "Data Retention", value: "Strict Zero-Log" },
      { label: "LLM Options", value: "Llama, DeepSeek, Mistral" }
    ],
    accentColor: "from-blue-600 to-indigo-700"
  },
  {
    id: "workflows",
    title: "Managed n8n Workflows",
    tagline: "Sovereign IA & Private Automation",
    description: "Private automated pipelines with interactive AI nodes, hosted in a secure cloud model that connects existing systems without spilling enterprise metadata.",
    features: [
      "Custom node deployment isolated from public internet",
      "Human-in-the-loop review and approval checkpoints",
      "Secure API token and secret rotation by default"
    ],
    specs: [
      { label: "Engine", value: "n8n Sovereign Edition" },
      { label: "Compliance", value: "DPA 2012 Aligned" },
      { label: "Runtime Tier", value: "Dedicated RAM & CPU" }
    ],
    accentColor: "from-orange-500 to-red-600"
  },
  {
    id: "llaas",
    title: "LLM-as-a-Service",
    tagline: "Dedicated Compute & Model Fine-tuning",
    description: "Dedicated CPU and H100/A100 GPU compute instances configured for heavy model execution, zero rate limits, and custom weights alignment within the Philippines.",
    features: [
      "Dedicated GPU environments with zero noisy-neighbor drag",
      "Supervised fine-tuning (SFT) using custom datasets",
      "Guaranteed predictable flat-rate monthly hosting billing"
    ],
    specs: [
      { label: "Compute Base", value: "NVIDIA Tensor Core GPUs" },
      { label: "Localization", value: "Manila Tier-3 Data Center" },
      { label: "API Protocol", value: "OpenAI-Compatible REST" }
    ],
    accentColor: "from-emerald-600 to-teal-700"
  },
  {
    id: "agents",
    title: "RackCorp.ai Agents",
    tagline: "Procurement, Compliance & Auditing Autonomous Workers",
    description: "Create compliant, process-specific AI agent workers designed to operate within pre-defined security lanes to complete structural enterprise processes.",
    features: [
      "Custom safety thresholds & structural bounds",
      "Dual-stage human override gating architecture",
      "Strict telemetry logging with continuous monitoring"
    ],
    specs: [
      { label: "Architecture", value: "Stateful Agentic Loops" },
      { label: "Integrations", value: "Custom REST, SOAP, SFTP" },
      { label: "Audit Level", value: "Full Session History Trace" }
    ],
    accentColor: "from-purple-600 to-pink-700"
  }
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Sovereign Cloud Infrastructure",
    description: "Built on high-availability private server topologies designed and governed independently from the public hyper-scalers."
  },
  {
    title: "Local Data Residency (Philippines)",
    description: "Ensure complete absolute compliance with local statutes including the Data Privacy Act of 2012 (DPA) and BSP requirements. Data never leaves Philippine territory."
  },
  {
    title: "Custom Branding & Integration",
    description: "Inject premium UI containers, native styles, and custom conversational interfaces straight into your ongoing intranet or public web systems."
  },
  {
    title: "Secure Model Governance",
    description: "Total visibility of systemic logs, control over prompting guardrails, fine-tuning configurations, and context thresholds."
  },
  {
    title: "Private Workflow Automation",
    description: "Perform massive structural integration syncs across CRM and relational systems completely secured from external leakage."
  },
  {
    title: "Continuous Improvement",
    description: "Systematic model adaptation utilizing user feedback, evaluation metrics, and constant evaluation loops for supreme enterprise alignment.",
    highlight: true
  }
];

export const TRUST_PARTNERS: TrustPartner[] = [
  {
    name: "NVIDIA",
    logoText: "NVIDIA AI",
    description: "Provides state-of-the-art Tensor Core GPUs powering our low-latency LLM computation nodes.",
    logoUrl: "https://marketing.timcorp.net.ph/hubfs/AI/Nvidia_logo.svg.png"
  },
  {
    name: "Cisco",
    logoText: "CISCO",
    description: "Enforces enterprise security guardrails, secure VPC tunnels, and core networking layers.",
    logoUrl: "https://marketing.timcorp.net.ph/hubfs/AI/Cisco_logo_blue_2016.svg.png"
  },
  {
    name: "HPE",
    logoText: "HPE",
    description: "Delivers robust hybrid cloud blades and storage fabrics hosting model weights locally.",
    logoUrl: "https://marketing.timcorp.net.ph/hubfs/AI/HPE-logo-full-clr-pos-rgb%20(3).png"
  },
  {
    name: "Hitachi Vantara",
    logoText: "HITACHI",
    description: "Ensures mission-critical storage reliability and sub-millisecond local throughput.",
    logoUrl: "https://marketing.timcorp.net.ph/hubfs/AI/hv-logo-rgb-web-black-1.png"
  }
];
