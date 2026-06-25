import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  HeartPulse, 
  Briefcase, 
  Factory, 
  Radio, 
  Film,
  Landmark
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Banking & Finance',
    description: 'Delivering secure and regulatory-compliant technology infrastructures, robust fraud mitigation controls, and mission-critical high-availability platforms for the financial services sector.',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600&h=400&fit=crop&v=20260311'
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Secure patient data management, scalable cloud solutions, and reliable telemedicine infrastructure designed to support seamless healthcare delivery and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=1374&auto=format&fit=crop&v=20260311'
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Accelerate business growth with seamless system integration, AI-powered automation, and cloud modernization solutions tailored for service-driven organizations.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&v=20260311'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Bridging operational technology (OT) and IT systems to optimize production, improve efficiency, and strengthen industrial security.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop&v=20260311'
  },
  {
    icon: Radio,
    title: 'Telecommunications',
    description: 'Powering global communications with high-capacity network infrastructure, seamless connectivity, and advanced cybersecurity solutions for resilient, always-on operations.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&v=20260311'
  },
  {
    icon: Film,
    title: 'Media & Entertainment',
    description: 'Empowering digital media organizations with scalable content storage, low-latency streaming infrastructure, and robust platform security to deliver exceptional audience experiences.',
    image: 'https://marketing.timcorp.net.ph/hubfs/website/modern-television-broadcasting-movie-wide-screen-generative-ai.jpg?v=20260311'
  },
  {
    icon: Landmark,
    title: 'Utilities & Public Services',
    description: 'Supporting critical infrastructure with highly available systems, secure operational data management, and resilient technology solutions that ensure continuous service delivery.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&v=20260311'
  }
];

export default function IndustriesSection() {
  return (
    <section id="IndustriesSection" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-50/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/20 blur-[120px] rounded-full" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Industries We Serve</span>
          </div>
          <h2 className="text-3xl lg:text-6xl font-bold text-[#00021a] mb-6 tracking-tighter">
            Trusted Across <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Industries</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Delivering specialized ICT solutions tailored to the unique challenges of diverse industries across the Philippines.
          </p>
        </motion.div>

        {/* Staggered Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const isOffset = index % 2 === 1;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group ${isOffset ? 'lg:mt-12' : ''} ${index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2 lg:mt-0' : ''}`}
              >
                <div className="relative h-full bg-gray-50 border border-gray-100 rounded-[2.5rem] overflow-hidden hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 z-10" />
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 z-20 p-4 bg-blue-600/90 backdrop-blur-md rounded-2xl shadow-xl">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10">
                    <h3 className="text-xl font-bold text-[#00021a] mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium text-lg">
                      {industry.description}
                    </p>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
