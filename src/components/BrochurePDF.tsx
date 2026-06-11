import React from 'react';
import { 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  Server, 
  Cloud,
  Monitor,
  Layers,
  Brain
} from 'lucide-react';

const milestones = [
  { year: '1985', event: 'Founded as ICT Pioneer' },
  { year: '1994', event: 'Pioneered Commercial Data Center Services' },
  { year: '2020', event: 'Regional Expansion & Cloud Leadership' },
  { year: '2025', event: 'AI-Powered Enterprise Solutions' }
];

const services = [
  { category: "Cloud Services", icon: Cloud, items: ["IaaS", "S3 Storage", "BaaS", "DRaaS"] },
  { category: "Cybersecurity", icon: Shield, items: ["VAPT", "EDR/XDR", "DDoS", "NIST"] },
  { category: "Managed Ops", icon: Monitor, items: ["MNOC", "MSOC", "IR", "SLA"] },
  { category: "Systems Integration", icon: Layers, items: ["Architecture", "Data Center", "Hardware", "Hybrid"] },
  { category: "Connectivity", icon: Globe, items: ["GNS", "IP Transit", "SD-WAN", "Direct Cloud"] },
  { category: "Enterprise AI", icon: Brain, items: ["GenAI", "AI Agents", "GPUaaS", "LLM"] }
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

export const BrochurePDF = React.forwardRef<HTMLDivElement>((props, ref) => {
  // Standard Hex Colors to avoid oklch issues with html2canvas
  const colors = {
    blue600: '#2563eb',
    blue500: '#3b82f6',
    blue200: '#bfdbfe',
    blue100: '#dbeafe',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray800: '#1f2937',
    white: '#ffffff',
    black: '#000000'
  };

  return (
    <div ref={ref} style={{ width: '1123px', overflow: 'hidden', backgroundColor: colors.white, color: colors.black, fontFamily: 'sans-serif' }}>
      {/* Page 1: Outside (Inside Flap | Back Cover | Front Cover) */}
      <div style={{ display: 'flex', height: '794px', width: '1123px' }}>
        {/* Panel 1: Inside Flap */}
        <div style={{ width: '374.33px', height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: `1px solid ${colors.gray200}`, backgroundColor: colors.gray50 }}>
          <div>
            <h2 style={{ fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', color: colors.blue600 }}>Our Commitment</h2>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Zero <br /> Compromise</h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.625, marginBottom: '2rem', color: colors.gray600 }}>
              We adhere to the most stringent global standards for quality management, information security, and business continuity.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }}>
              {certifications.map(cert => (
                <div key={cert.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <img src={cert.logo} alt={cert.name} style={{ height: '2rem', width: 'auto', marginBottom: '0.5rem', filter: 'grayscale(100%)' }} crossOrigin="anonymous" referrerPolicy="no-referrer" />
                  <span style={{ fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.025em', color: colors.gray400 }}>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.gray400 }}>
            TIM Corporation &copy; 2026
          </div>
        </div>

        {/* Panel 2: Back Cover */}
        <div style={{ width: '374.33px', height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center', borderRight: `1px solid ${colors.gray200}` }}>
          <div style={{ marginTop: '3rem' }}>
            <img 
              src="https://marketing.timcorp.net.ph/hubfs/logo/TIM%20logo%20(blue).png" 
              alt="TIM Logo" 
              style={{ height: '2rem', margin: '0 auto 2rem' }} 
              crossOrigin="anonymous"
            />
            <h4 style={{ fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Contact Us</h4>
            <p style={{ fontSize: '0.75rem', marginBottom: '0.5rem', color: colors.gray600 }}>inquiry@timcorp.net.ph</p>
            <p style={{ fontSize: '0.75rem', marginBottom: '0.5rem', color: colors.gray600 }}>+63 (2) 8857 1846</p>
            <p style={{ fontSize: '10px', marginTop: '2rem', lineHeight: 1.625, color: colors.gray400 }}>
              5600 Pres. Sergio Osmeña Highway<br />
              Makati City 1235, Philippines
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ width: '4rem', height: '4rem', margin: '0 auto', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.blue600 }}>
              <Globe style={{ color: colors.white, width: '2rem', height: '2rem' }} />
            </div>
            <p style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', marginTop: '1rem', color: colors.blue600 }}>www.timcorp.net.ph</p>
          </div>
        </div>

        {/* Panel 3: Front Cover */}
        <div style={{ width: '374.33px', height: '100%', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', backgroundColor: colors.blue600, color: colors.white }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '16rem', height: '16rem', filter: 'blur(64px)', borderRadius: '9999px', marginRight: '-8rem', marginTop: '-8rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <img 
              src="https://marketing.timcorp.net.ph/hubfs/logo/TIM%20logo%20(white).png" 
              alt="TIM Logo" 
              style={{ height: '2.5rem', marginBottom: '4rem' }} 
              crossOrigin="anonymous"
            />
            <h1 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Total <br />
              Information <br />
              Management
            </h1>
            <div style={{ width: '3rem', height: '0.25rem', marginBottom: '2rem', backgroundColor: colors.white }} />
            <p style={{ fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.25, color: colors.blue100 }}>
              Accelerating digital transformation since 1985.
            </p>
          </div>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <p style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.5em', color: colors.blue200 }}>Corporate Brochure 2026</p>
          </div>
        </div>
      </div>

      {/* Page 2: Inside (Inside Left | Inside Middle | Inside Right) */}
      <div style={{ display: 'flex', height: '794px', width: '1123px' }}>
        {/* Panel 4: Inside Left */}
        <div style={{ width: '374.33px', height: '100%', padding: '2rem', borderRight: `1px solid ${colors.gray200}` }}>
          <h2 style={{ fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', color: colors.blue600 }}>Who We Are</h2>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Your Technology Partner</h3>
          <p style={{ fontSize: '0.75rem', lineHeight: 1.625, marginBottom: '2rem', color: colors.gray600 }}>
            TIM Corporation is a full-service technology solutions company delivering systems integration, data center services, cloud platforms, cybersecurity, and managed IT operations.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {milestones.map(m => (
              <div key={m.year} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ fontSize: '1.125rem', fontWeight: 900, color: colors.blue600 }}>{m.year}</div>
                <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.025em', marginTop: '0.25rem', color: colors.gray800 }}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 5: Inside Middle */}
        <div style={{ width: '374.33px', height: '100%', padding: '2rem', borderRight: `1px solid ${colors.gray200}`, backgroundColor: colors.gray50 }}>
          <h2 style={{ fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', color: colors.blue600 }}>Solutions</h2>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Capabilities</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '1rem' }}>
            {services.slice(0, 3).map(s => (
              <div key={s.category} style={{ padding: '1rem', borderRadius: '0.75rem', border: `1px solid ${colors.gray100}`, backgroundColor: colors.white, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <s.icon style={{ width: '1rem', height: '1rem', color: colors.blue600 }} />
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.025em' }}>{s.category}</h4>
                </div>
                <ul style={{ fontSize: '9px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.25rem', color: colors.gray500, listStyle: 'none', padding: 0 }}>
                  {s.items.map(item => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 6: Inside Right */}
        <div style={{ width: '374.33px', height: '100%', padding: '2rem', backgroundColor: colors.gray50 }}>
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '1rem' }}>
            {services.slice(3).map(s => (
              <div key={s.category} style={{ padding: '1rem', borderRadius: '0.75rem', border: `1px solid ${colors.gray100}`, backgroundColor: colors.white, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <s.icon style={{ width: '1rem', height: '1rem', color: colors.blue600 }} />
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.025em' }}>{s.category}</h4>
                </div>
                <ul style={{ fontSize: '9px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.25rem', color: colors.gray500, listStyle: 'none', padding: 0 }}>
                  {s.items.map(item => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center', backgroundColor: colors.blue600, color: colors.white }}>
            <Brain style={{ width: '1.5rem', height: '1.5rem', margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Enterprise AI</h4>
            <p style={{ fontSize: '8px', opacity: 0.8, marginTop: '0.25rem' }}>Unlocking the power of GenAI for your business.</p>
          </div>
        </div>
      </div>
    </div>
  );
});
