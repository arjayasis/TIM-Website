import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, CheckCircle2, ArrowRight, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { AnimatePresence } from 'motion/react';

export default function PrivacyPolicy() {
  const [selectedCert, setSelectedCert] = React.useState<{ img: string, label: string } | null>(null);
  const sections = [
    {
      id: 'introduction',
      icon: Lock,
      title: 'Introduction',
      content: 'Total Information Management Corporation (TIM) respects every individual’s right to privacy as much as we aim to ensure the safety and security of everyone accessing TIM website, facilities and premises. Total Information Management Corporation is committed to protect and respect your right to privacy. The company also aims to comply with the requirements of all relevant privacy and applicable data protection laws, specifically the Data Privacy Act of 2012 and its implementing rules, regulations and guidelines.'
    },
    {
      id: 'collection',
      icon: Eye,
      title: 'Personal Data Collected',
      subsections: [
        {
          title: 'TIM Website',
          content: 'TIM Corp uses a third-party service to analyze the web traffic data for us. Whenever you access the site, we record technical information with your visit. Data generated is not shared with any other party.',
          list: [
            'Your IP address',
            'The search terms you used',
            'The pages and internal links accessed on our site',
            'The date and time you visited the site',
            'Geolocation',
            'Your operating system',
            'Web browser type'
          ]
        },
        {
          title: 'Use of Cookies',
          content: 'This site makes use of cookies, which collect your browsing data in order to help the site better interact with you and other visitors. Cookies are also relevant for authentication, session management, and performance analytics.',
          link: {
            text: 'View Cookie Policy',
            to: createPageUrl('CookiePolicy')
          }
        },
        {
          title: 'TIM Employee, Visitors and Guests',
          content: 'We collect basic information about you by asking you to sign and fill up our Guest/Visitor logbook and requiring you to deposit a proof of identity (ID) for verification purposes. TIM facilities are also monitored by CCTV for security purposes.'
        }
      ]
    },
    {
      id: 'usage',
      icon: FileText,
      title: 'Use of Information',
      content: 'All information collected is stored securely and protected. The collected personal information is utilized solely for documentation and processing purposes within the TIM and is not shared with any outside parties. Recorded information is used primarily to help keep the site safe and secure.'
    },
    {
      id: 'protection',
      icon: Shield,
      title: 'Protection Measures',
      content: 'Your data are kept securely protected in TIM facility and only authorized personnel have access to this personal information. The collected information is kept for as long as necessary to achieve the declared purpose for its collection.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#00021a] text-white">
      {/* Animated Background HUD */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full animate-[pulse_8s_infinite]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 border-b border-white/5 bg-white/2 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-blue-400 font-semibold tracking-wider uppercase text-xs mb-4">
                <Shield className="w-4 h-4" />
                Trust & Transparency
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-12 tracking-tight uppercase">
                Privacy <span className="text-blue-500">Policy.</span>
              </h1>
              <p className="text-xl text-blue-100/60 font-medium leading-relaxed">
                We value your privacy. This policy outlines our commitment to protecting your personal data in compliance with the Data Privacy Act of 2012.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-32 h-fit">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 hover:shadow-sm transition-all border border-transparent hover:border-white/10"
                  >
                    <span className="text-sm font-medium text-blue-100/40 group-hover:text-blue-400 transition-colors">
                      {section.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-100/20 group-hover:text-blue-400 transition-all transform group-hover:translate-x-1" />
                  </a>
                ))}
              </nav>

              <div className="mt-12 p-8 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-white backdrop-blur-md">
                <h3 className="font-bold mb-4">Need help?</h3>
                <p className="text-sm text-blue-100/60 mb-6 font-medium">
                  Our Data Protection Officer is available to answer any questions regarding your data rights.
                </p>
                <a 
                  href="mailto:dataprotection@timcorp.net.ph" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300"
                >
                  Contact DPO <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </aside>

            {/* Content Area */}
            <div className="space-y-24">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight uppercase">{section.title}</h2>
                  </div>

                  {section.content && (
                    <p className="text-lg text-blue-100/60 leading-relaxed font-medium">
                      {section.content}
                    </p>
                  )}

                  {section.subsections && (
                    <div className="space-y-12 mt-8">
                      {section.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
                          <h3 className="text-xl font-bold text-white mb-4">{sub.title}</h3>
                          <p className="text-blue-100/60 leading-relaxed font-medium mb-6">
                            {sub.content}
                          </p>
                          {sub.link && (
                            <Link 
                              to={sub.link.to} 
                              className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 mb-6"
                            >
                              {sub.link.text} <ArrowRight className="w-4 h-4" />
                            </Link>
                          )}
                          {sub.list && (
                            <div className="grid sm:grid-cols-2 gap-4">
                              {sub.list.map((item, lIdx) => (
                                <div key={lIdx} className="flex items-center gap-3 text-sm text-blue-100/40">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                  {item}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* DPO Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2rem] bg-white/5 border border-white/10 text-white overflow-hidden relative backdrop-blur-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
                
                <h2 className="text-3xl font-bold mb-8 relative z-10 uppercase tracking-tight">Data Protection Officer</h2>
                
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-blue-400/60 mb-1">Email Addresses</p>
                        <a href="mailto:dataprotection@timcorp.net.ph" className="block hover:text-blue-400 transition-colors">dataprotection@timcorp.net.ph</a>
                        <a href="mailto:info.dpo@timcorp.net.ph" className="block hover:text-blue-400 transition-colors">info.dpo@timcorp.net.ph</a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-blue-400/60 mb-1">Phone & Location</p>
                        <a href="tel:+6388571846" className="block hover:text-blue-400 transition-colors">+63 (2) 8857 1846 loc 3223</a>
                        <p className="text-sm text-blue-100/40 mt-2 font-medium">Makati City, Philippines</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* NPC Certifications */}
              <div className="pt-24 border-t border-white/5">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase text-white">Official Certifications</h2>
                  <p className="text-blue-100/40 font-medium">Registered with the National Privacy Commission</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      img: "https://marketing.timcorp.net.ph/hubfs/website/partners/NPCAsset%201@4x.png",
                      label: "NPC Seal of Registration"
                    },
                    {
                      img: "https://marketing.timcorp.net.ph/hubfs/website/partners/NPCAsset%202@4x.png",
                      label: "NPC Registration Certificate"
                    }
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedCert(cert)}
                      className="group bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-zoom-in relative"
                    >
                      <div className="absolute top-12 right-12 p-2 rounded-full bg-blue-50 border border-blue-100 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <ZoomIn className="w-5 h-5 text-blue-600" />
                      </div>
                      <img 
                        src={cert.img} 
                        alt={cert.label}
                        className={`w-full h-80 md:h-[450px] object-contain rounded-xl mb-6 transition-all duration-500 ${i === 0 ? 'scale-75' : ''}`}
                        referrerPolicy="no-referrer"
                      />
                      <p className="text-center font-bold text-slate-900 uppercase tracking-tight">{cert.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Zoom Modal */}
              <AnimatePresence>
                {selectedCert && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedCert(null)}
                    className="fixed inset-0 z-[100] bg-[#00021a]/95 backdrop-blur-md flex items-center justify-center p-6 lg:p-12"
                  >
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-8 right-8 text-white/60 hover:text-white p-2"
                      onClick={() => setSelectedCert(null)}
                    >
                      <X className="w-8 h-8" />
                    </motion.button>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={selectedCert.img}
                        alt={selectedCert.label}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        referrerPolicy="no-referrer"
                      />
                      <p className="mt-8 text-white text-xl font-bold tracking-tight uppercase">
                        {selectedCert.label}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-sm text-blue-100/20 italic pt-12">
                Last updated: March 2026. We may make changes to this Policy from time to time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
