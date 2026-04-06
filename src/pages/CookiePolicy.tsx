import React from 'react';
import { motion } from 'motion/react';
import { Cookie, Shield, Info, Trash2, Mail, ArrowRight } from 'lucide-react';

export default function CookiePolicy() {
  const sections = [
    {
      id: 'what-are-cookies',
      icon: Info,
      title: 'What are cookies?',
      content: 'Cookies are simple text files that are stored on your computer or mobile device by a website’s server. Each cookie is unique to your web browser. It will contain some anonymous information such as a unique identifier, website’s domain name, and some digits and numbers.'
    },
    {
      id: 'types-of-cookies',
      icon: Cookie,
      title: 'What types of cookies do we use?',
      subsections: [
        {
          title: 'Necessary cookies',
          content: 'Necessary cookies allow us to offer you the best possible experience when accessing and navigating through our website and using its features such as setting unique identifiers for each unique visitor, so site numbers can be analysed.'
        },
        {
          title: 'Analytical cookies',
          content: 'These cookies enable us and third-party services to collect aggregated data for statistical purposes on how our visitors use the website. These cookies do not contain personal information such as names and email addresses and are used to help us improve your user experience of the website.'
        }
      ]
    },
    {
      id: 'how-to-delete',
      icon: Trash2,
      title: 'How to delete cookies?',
      content: 'If you want to restrict or block the cookies that are set by our website, you can do so through your browser settings.'
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
                <Cookie className="w-4 h-4" />
                Transparency
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-12 tracking-tight uppercase">
                Cookie <span className="text-blue-500">Policy.</span>
              </h1>
              <p className="text-xl text-blue-100/60 font-medium leading-relaxed">
                TIM WEBSITE COOKIE POLICY. This policy explains how we use cookies to improve your experience on our website.
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
                <h3 className="font-bold mb-4">Questions?</h3>
                <p className="text-sm text-blue-100/60 mb-6 font-medium">
                  If you have any questions about this cookie policy or our use of cookies, please contact us.
                </p>
                <a 
                  href="mailto:inquiry@timcorp.net.ph" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300"
                >
                  Email Us <ArrowRight className="w-4 h-4" />
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
                          <p className="text-blue-100/60 leading-relaxed font-medium">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2rem] bg-white/5 border border-white/10 text-white overflow-hidden relative backdrop-blur-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
                
                <h2 className="text-3xl font-bold mb-8 relative z-10 uppercase tracking-tight">Contacting us</h2>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-400/60 mb-1">Email Address</p>
                      <a href="mailto:inquiry@timcorp.net.ph" className="text-xl hover:text-blue-400 transition-colors">inquiry@timcorp.net.ph</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <p className="text-sm text-blue-100/20 italic pt-12">
                Last updated: March 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
