import React from 'react';
import { motion } from 'motion/react';
import { 
  Eye, 
  Shield, 
  Search, 
  RotateCcw, 
  RefreshCw,
  ArrowRight
} from 'lucide-react';

const definitions = [
  {
    id: 'identify',
    title: 'IDENTIFY',
    icon: Eye,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    items: [
      { name: '3rd Party Risk Management', desc: 'Assessing and mitigating risks associated with external vendors and partners.' },
      { name: 'GRC as a Service', desc: 'Governance, Risk, and Compliance management to ensure regulatory alignment.' },
      { name: 'Vulnerability Assessment', desc: 'Systematic review of security weaknesses in an information system.' }
    ],
    partners: [
      { name: 'UpGuard', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/upguard.png' },
      { name: 'Kali Linux', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/kali-linux.webp' },
      { name: 'Nmap', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/nmap.png' },
      { name: 'Tenable', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/TenableLogo_FullColor_RGB-01.webp' },
      { name: 'Qualys', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Logo-Qualys.svg.png' },
      { name: 'Shodan', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Shodan_logo.webp' }
    ]
  },
  {
    id: 'protect',
    title: 'PROTECT / PREVENT',
    icon: Shield,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    items: [
      { name: 'Security Awareness', desc: 'Training employees to recognize and respond to security threats.' },
      { name: 'MFA, IAM, SSO', desc: 'Multi-Factor Authentication, Identity Access Management, and Single Sign-On.' },
      { name: 'Firewall as a Service', desc: 'Cloud-based firewall protection for distributed network environments.' },
      { name: 'Penetration Testing', desc: 'Simulated cyber attacks to test the strength of your defenses.' },
      { name: 'EDR, XDR, DLP', desc: 'Endpoint Detection, Extended Detection, and Data Loss Prevention.' },
      { name: 'SIEM, NDR, PAM', desc: 'Security Information Event Management and Privileged Access Management.' },
      { name: 'Breach Attack Simulation', desc: 'Automated testing of security controls against real-world attack scenarios.' },
      { name: 'WAF, DDOS, IPS/IDS', desc: 'Web Application Firewall, DDoS Mitigation, and Intrusion Prevention Systems.' }
    ],
    partners: [
      { name: 'Whalebone', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/whalebone_color-4.webp' },
      { name: 'KnowBe4', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/TenEleven-KnowBe4-Logo-Alternate.webp' },
      { name: 'OneLogin', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Onelogin_Logotype_black_RGB.png' },
      { name: 'NexusGuard', logo: 'https://marketing.timcorp.net.ph/hubfs/website/nxg-logo.png' },
      { name: 'Picus', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/picus.png' },
      { name: 'Fortinet', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Fortinet_logo.svg.png' },
      { name: 'Palo Alto', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/PaloAltoNetworks_2020_Logo.svg.png' },
      { name: 'Delinea', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Delinea.jpg' },
      { name: 'Trend Micro', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Trend_Micro_logo.svg.png' },
      { name: 'SentinelOne', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/SentinelOne_logo.svg.png' },
      { name: 'CrowdStrike', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/CrowdStrike_logo.svg.png' },
      { name: 'Intrusion', logo: 'https://marketing.timcorp.net.ph/hubfs/website/Intrusion-Logo.png' },
      { name: 'Black Bear', logo: 'https://marketing.timcorp.net.ph/hubfs/website/blackbearAsset%206@4x.png' },
      { name: 'SOCFortress', logo: 'https://marketing.timcorp.net.ph/hubfs/website/socfortress_logo_orange.png' }
    ]
  },
  {
    id: 'detect',
    title: 'DETECT',
    icon: Search,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    items: [
      { name: 'SOC and NOC', desc: '24/7 Security and Network Operations Centers for continuous monitoring.' },
      { name: 'Threat Intelligence', desc: 'Real-time data on emerging cyber threats and actor behaviors.' },
      { name: 'Attack Surface Monitoring', desc: 'Continuous discovery and monitoring of your external digital assets.' }
    ],
    partners: [
      { name: 'NetWitness', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/netwitness-logo-RGB-1.webp' },
      { name: 'Wazuh', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Wazuh.png' },
      { name: 'Zabbix', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Zabbix_logo.svg.png' },
      { name: 'Microsoft Sentinel', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Microsoft_Sentinel_logo1.png' },
      { name: 'Splunk', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Splunk_logo.png' },
      { name: 'Securonix', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Securonix-Cyber-Security-Company-Logo.png' },
      { name: 'SolarWinds', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/1280px-Solarwinds.svg.png' }
    ]
  },
  {
    id: 'respond',
    title: 'RESPOND',
    icon: RotateCcw,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    items: [
      { name: 'SOAR', desc: 'Security Orchestration, Automation, and Response for rapid incident handling.' },
      { name: 'Incident Response', desc: 'Structured approach to managing the aftermath of a security breach.' },
      { name: 'Digital Forensics', desc: 'Investigation and analysis of digital evidence following an incident.' }
    ],
    partners: [
      { name: 'Cortex XSOAR', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/cortex.png' },
      { name: 'Securonix', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Securonix-Cyber-Security-Company-Logo.png' },
      { name: 'Shuffle', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/shuffle.png' },
      { name: 'Velociraptor', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/velociraptor.png' },
      { name: 'Splunk', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Splunk_logo.png' },
      { name: 'Fortinet', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Fortinet_logo.svg.png' }
    ]
  },
  {
    id: 'recover',
    title: 'RECOVER',
    icon: RefreshCw,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    items: [
      { name: 'Backup as a Service', desc: 'Managed cloud-based data backup and recovery solutions.' },
      { name: 'DR as a Service', desc: 'Disaster Recovery planning and automated failover capabilities.' },
      { name: 'Backup Solutions', desc: 'Comprehensive data protection strategies for business continuity.' }
    ],
    partners: [
      { name: 'Veeam', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/veeam.png' },
      { name: 'Rubrik', logo: 'https://marketing.timcorp.net.ph/hubfs/website/cyber%20partner%20logos/Rubrik_Logo.svg.png' },
      { name: 'TIM S3', logo: 'https://marketing.timcorp.net.ph/hubfs/website/tims3Asset%205@4x.png' }
    ]
  }
];

export default function NISTDefinitions() {
  return (
    <div className="py-10 bg-[#00021a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-12">
          {definitions.map((def, i) => (
            <motion.div
              key={def.id}
              id={`nist-def-${def.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 rounded-[3rem] border ${def.borderColor} ${def.bgColor} backdrop-blur-xl relative overflow-hidden group`}
            >
              {/* Background Icon Accent */}
              <def.icon className={`absolute -right-12 -bottom-12 w-64 h-64 opacity-[0.03] transform -rotate-12 group-hover:rotate-0 transition-transform duration-1000 text-white`} />

              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-1/3">
                  <div className={`w-20 h-20 rounded-3xl ${def.bgColor} border ${def.borderColor} flex items-center justify-center mb-10 shadow-inner`}>
                    <def.icon className={`w-10 h-10 ${def.color}`} />
                  </div>
                  <h3 className={`text-5xl lg:text-6xl font-black mb-6 tracking-tighter uppercase ${def.color}`}>
                    {def.title}
                  </h3>
                  <p className="text-xl text-blue-100/60 font-light leading-relaxed mb-12">
                    Core capabilities and services designed to address the specific requirements of the {def.title.toLowerCase()} function.
                  </p>

                  {/* Technology Partners Section */}
                  <div className="pt-10 border-t border-white/10">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-8">Technology Partners</p>
                    <div className="flex flex-wrap gap-4">
                      {def.partners.map((partner) => (
                        <div 
                          key={partner.name} 
                          className="group/logo relative"
                        >
                          <div className="w-20 h-20 rounded-2xl bg-white p-4 border border-white/10 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 flex items-center justify-center overflow-hidden">
                            <img 
                              src={partner.logo} 
                              alt={partner.name} 
                              className="max-w-full max-h-full object-contain transition-all duration-500 group-hover/logo:scale-110"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-blue-600 text-white text-[10px] rounded-lg opacity-0 group-hover/logo:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-xl font-bold uppercase tracking-widest">
                            {partner.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 grid md:grid-cols-1 gap-6">
                  {def.items.map((item) => (
                    <div key={item.name} className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group/item">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-10 h-10 rounded-xl ${def.bgColor} border ${def.borderColor} flex items-center justify-center group-hover/item:scale-110 transition-transform`}>
                          <ArrowRight className={`w-5 h-5 ${def.color}`} />
                        </div>
                        <h4 className="font-black text-white text-xl lg:text-2xl uppercase tracking-tight">{item.name}</h4>
                      </div>
                      <p className="text-lg text-blue-100/40 leading-relaxed font-light pl-14">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
