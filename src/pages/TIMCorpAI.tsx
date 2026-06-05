import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Shield, TrendingUp, CheckCircle, Cpu, BarChart, Layers, Rocket, Globe, Database, Code, Search, MessageSquare, Heart, ShoppingCart, Factory, Phone, Truck, LayoutDashboard, Bot, HardDrive } from 'lucide-react';
import CTASection from '@/components/tim/CTASection';

import RelatedServices from '@/components/shared/RelatedServices';

export default function TIMCorpAI() {
  return (
    <div className="min-h-screen bg-[#00021a] text-white overflow-hidden">
      
      {/* Hero Section - Neural Network Atmosphere */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-[pulse_8s_infinite]" />
          
          {/* Neural Grid Lines */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          {/* Floating Data Nodes */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
              initial={{ 
                x: Math.random() * 2000 - 1000, 
                y: Math.random() * 2000 - 1000 
              }}
              animate={{ 
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ 
                duration: 5 + Math.random() * 10, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
            alt="AI Neural Network"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-transparent to-[#00021a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-md"
            >
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">In-Country Enterprise GenAI</span>
            </motion.div>

            <h1 className="text-[3.375rem] lg:text-[9rem] font-avantgarde font-bold mb-12 leading-[0.85] tracking-tighter uppercase">
              UNIFY SYSTEMS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                AUTOMATE COMPLEXITY
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100/70 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
              Transform Your Operations, Elevate Your Decisions. TIM enables organizations to unlock the full potential of AI, driving efficiency and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-sm rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <Link to={createPageUrl('ContactUs')}>Deploy AI Strategy</Link>
              </Button>
              <Link to="/#ServicesGrid">
                <Button variant="outline" size="lg" className="border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 px-6 py-4 text-sm rounded-full text-white">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating AI Elements */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 lg:right-40 opacity-20 hidden lg:block"
        >
          <Bot className="w-32 h-32 text-blue-400" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-10 lg:left-40 opacity-20 hidden lg:block"
        >
          <Cpu className="w-32 h-32 text-blue-500" />
        </motion.div>
      </section>

      {/* Overview Section - Editorial Split */}
      <section className="py-32 bg-[#00021a] text-white relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 mb-8">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">The Necessity</span>
              </div>
              <h2 className="text-3xl lg:text-6xl font-bold mb-8 leading-[0.9] tracking-tighter uppercase">
                AI IS NO LONGER <br /> FUTURISTIC
              </h2>
              <p className="text-xl text-blue-100/40 font-light mb-12 leading-relaxed">
                With TIM, organizations can seamlessly develop, deploy, and scale AI solutions across any environment—whether on-premise, in the cloud, or in a hybrid setup.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Faster Deployment', desc: 'Reduce implementation from months to weeks.' },
                  { title: 'Seamless Integration', desc: 'Connect AI models with existing applications.' }
                ].map((item) => (
                  <div key={item.title} className="p-8 bg-white/5 rounded-3xl border border-white/10 group hover:bg-blue-600 transition-all duration-500 backdrop-blur-md">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-blue-100/40 group-hover:text-blue-100 transition-colors font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80"
                alt="AI Intelligence"
                className="relative z-10 w-full rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solutions - High Tech Grid */}
      <section className="py-32 bg-[#00021a] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl lg:text-7xl font-bold mb-6 tracking-tighter uppercase">OUR SOLUTIONS</h2>
            <p className="text-xl text-blue-100/50 max-w-2xl mx-auto font-medium">
              Tailored AI infrastructure and platforms to power your enterprise intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: 'AI Co-pilot',
                desc: 'Enterprise-grade AI assistant platform for knowledge management and productivity.'
              },
              {
                icon: Cpu,
                title: 'GPU-as-a-Service',
                desc: 'Local GPUaaS and AI accelerators that adapt to evolving compute needs.'
              },
              {
                icon: Database,
                title: 'LLM-as-a-Service',
                desc: 'Enterprise-grade LLM solution that allows you to create and run any GenAI model.'
              },
              {
                icon: Code,
                title: 'Custom AI Agents',
                desc: 'Tailor-made AI solutions designed to meet specific industry requirements.'
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-blue-100/40 leading-relaxed font-medium text-sm">
                    {solution.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features - Dynamic List */}
      <section className="py-32 bg-[#00021a] text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl lg:text-6xl font-bold mb-6 tracking-tighter uppercase">KEY FEATURES</h2>
            <p className="text-xl text-blue-100/40 max-w-3xl mx-auto font-medium">
              Comprehensive capabilities designed for enterprise-grade AI deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: LayoutDashboard, title: 'Customized AI Strategy', desc: 'Tailored AI strategies aligned with your unique business goals.' },
              { icon: Zap, title: 'AI-Driven Automation', desc: 'Automate complex processes and boost intelligent workflows.' },
              { icon: MessageSquare, title: 'Generative AI Capabilities', desc: 'Create AI-powered chatbots and automated reports.' },
              { icon: Globe, title: 'Multi-Model & Multi-Cloud', desc: 'Deploy and manage AI models across various environments.' },
              { icon: Shield, title: 'Scalable & Secure Infrastructure', desc: 'Enterprise-grade security for increasing AI workloads.' },
              { icon: TrendingUp, title: 'Continuous Learning', desc: 'Keep models relevant with automated retraining.' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl border border-white/10 bg-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all group backdrop-blur-md"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 transition-colors border border-white/10">
                  <feature.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-blue-100/40 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases - Horizontal Scroll Style Grid */}
      <section className="py-32 bg-[#00021a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl lg:text-6xl font-bold mb-6 tracking-tighter">INDUSTRY USE CASES</h2>
            <p className="text-xl text-blue-100/50 max-w-3xl mx-auto font-medium">
              Tailored AI solutions that enhance efficiency and drive innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart, title: 'Banking & Finance', desc: 'Fraud detection and risk assessment.' },
              { icon: Heart, title: 'Healthcare', desc: 'Predictive diagnostics and patient engagement.' },
              { icon: ShoppingCart, title: 'Retail & E-Commerce', desc: 'Personalized recommendations.' },
              { icon: Factory, title: 'Manufacturing', desc: 'Predictive maintenance and quality control.' }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <useCase.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-base">{useCase.title}</h3>
                </div>
                <p className="text-sm text-blue-100/40 leading-relaxed font-medium">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TIM - High Impact Stats */}
      <section className="py-32 bg-[#00021a] text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-7xl font-bold mb-12 leading-[0.9] tracking-tighter uppercase">WHY <br /> TIM AI?</h2>
              <div className="space-y-10">
                {[
                  { title: 'Proven Expertise', desc: 'Experienced AI professionals delivering strategy and implementation.' },
                  { title: 'Enterprise-Ready', desc: 'Secure, flexible, and optimized for business-critical applications.' },
                  { title: 'Deep Knowledge', desc: 'Seamless AI integration across cloud and on-prem environments.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors backdrop-blur-md">
                      <CheckCircle className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-blue-100/40 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Efficiency', value: 'Increased' },
                { label: 'Decision-Making', value: 'Enhanced' },
                { label: 'Deployment', value: 'Faster' },
                { label: 'Costs', value: 'Optimized' }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-white/5 rounded-3xl border border-white/10 text-center hover:bg-blue-600 hover:text-white transition-all duration-500 group backdrop-blur-md"
                >
                  <div className="text-blue-400 font-bold text-xl mb-2 group-hover:text-white transition-colors uppercase tracking-widest">{stat.value}</div>
                  <div className="text-blue-100/40 group-hover:text-blue-100 transition-colors font-medium uppercase text-xs tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <RelatedServices />
    </div>
  );
}
