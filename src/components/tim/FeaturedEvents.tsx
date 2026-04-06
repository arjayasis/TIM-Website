import React from 'react';
import { motion } from 'motion/react';
import { newsEvents } from '@/lib/newsData';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function FeaturedEvents() {
  // Get the latest 3 events
  const latestEvents = newsEvents.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase">
                News & <span className="text-blue-600">Events</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium">
                Discover the latest updates, partnerships, and industry engagements from TIM Corporation.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to={createPageUrl('NewsEvents')}
              className="group flex items-center gap-3 text-[#0009af] font-black text-sm uppercase tracking-widest"
            >
              View All News
              <div className="w-10 h-10 rounded-full border-2 border-[#0009af] flex items-center justify-center transition-all group-hover:bg-[#0009af] group-hover:text-white">
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={createPageUrl('NewsEvents')} className="block">
                <div className="relative h-72 rounded-[2rem] overflow-hidden mb-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {event.type.split('/')[0].trim()}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-3">
                  <Calendar size={12} className="text-blue-600" />
                  {event.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 mb-6">
                  {event.title}
                </h3>
                
                <div className="flex items-center text-blue-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Full Article
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
