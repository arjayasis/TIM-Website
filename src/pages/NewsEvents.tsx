import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { newsEvents, NewsEvent } from '@/lib/newsData';
import { Calendar, Tag, ArrowRight, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';

export default function NewsEvents() {
  const [selectedEvent, setSelectedEvent] = useState<NewsEvent | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const featuredEvent = newsEvents[0];
  const remainingEvents = newsEvents.slice(1);

  const yParallax = useTransform(scrollYProgress, [0, 0.2], [0, 200]);

  // Handle scroll to top when selecting an article
  const handleSelectEvent = (event: NewsEvent) => {
    setSelectedEvent(event);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      {selectedEvent ? (
        <motion.div 
          key="article-detail"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-h-screen bg-[#00021a] text-white"
        >
          {/* Full Page Article View */}
          <div className="relative">
            {/* Header/Hero for Article */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00021a] via-[#00021a]/60 to-transparent" />
              
              <div className="absolute inset-0 flex items-end">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-16 md:pb-24">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-4xl"
                  >
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="flex items-center gap-2 text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-8 group"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-2" />
                      Back to News
                    </button>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                        {selectedEvent.type}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight uppercase">
                      {selectedEvent.title}
                    </h1>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap items-center gap-10 mb-16 pb-10 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-black">Timeline</p>
                    <p className="text-white font-black text-base">{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                      <Tag className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-black">Category</p>
                      <p className="text-white font-black text-base">Strategic Insight</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-auto">
                    <button className="p-4 rounded-full border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-400/50 transition-all bg-white/5">
                      <Share2 size={20} />
                    </button>
                    <button className="p-4 rounded-full border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-400/50 transition-all bg-white/5">
                      <Bookmark size={20} />
                    </button>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="flex items-center gap-4 text-blue-400 font-black text-xs uppercase tracking-[0.3em]">
                    <div className="w-8 h-[2px] bg-blue-400" />
                    Full Report
                  </div>
                  
                  <div className="prose prose-xl prose-invert max-w-none">
                    <p className="text-blue-100/60 leading-[1.8] text-lg md:text-xl font-medium whitespace-pre-wrap">
                      {selectedEvent.content}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-10 md:p-16 rounded-[3rem] border border-white/10 mt-20 backdrop-blur-xl">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center gap-3">
                      <Bookmark className="w-4 h-4 text-blue-400" />
                      Key Themes & Tags
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedEvent.theme.split(',').map(tag => (
                        <span key={tag} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/60 uppercase tracking-widest hover:border-blue-400 hover:text-blue-400 transition-colors cursor-default">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-6">
                    <img 
                      src="https://marketing.timcorp.net.ph/hubfs/website/TIM%20Logo%20%5Bhorizontal%5D%20white.png" 
                      alt="TIM" 
                      className="h-10 opacity-50"
                    />
                    <div className="h-8 w-[1px] bg-white/10" />
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">
                      Official Release <br /> © {new Date().getFullYear()} TIM Corp.
                    </p>
                  </div>
                  
                  <Button 
                    onClick={() => setSelectedEvent(null)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 py-8 h-auto font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-blue-600/20"
                  >
                    Back to All News
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <section className="py-32 bg-[#00021a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
                  <h2 className="text-2xl md:text-4xl font-black text-white mb-8 tracking-tighter uppercase">
                Ready to <span className="text-blue-500">Transform?</span>
              </h2>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 rounded-full text-lg font-bold uppercase tracking-widest h-auto">
                <Link to={createPageUrl('ContactUs')}>Contact Our Experts</Link>
              </Button>
            </div>
          </section>
        </motion.div>
      ) : (
        <motion.div 
          key="news-list"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          ref={containerRef} 
          className="min-h-screen bg-[#00021a] overflow-x-hidden"
        >
      {/* Hero Section with Stock Image Background */}
      <section className="relative h-screen flex items-center justify-center bg-[#00021a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: yParallax }}
            className="absolute inset-0"
          >
            <img 
              src="https://picsum.photos/seed/corporate-tech/1920/1080" 
              alt="Background" 
              className="w-full h-full object-cover opacity-30 scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00021a] via-[#00021a]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00021a] via-transparent to-transparent" />
          </motion.div>
          
          {/* Animated Overlay Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full shadow-lg shadow-blue-600/20">
                  TIM News & Events
                </span>
                <div className="h-[1px] w-12 bg-white/20" />
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Est. 1985</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase">
                Stay Ahead<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400"> of the </span>
                <span className="text-white/20">Curve</span>
              </h1>
              
              <div className="flex flex-col items-center gap-12 mt-12">
                <p className="text-lg md:text-xl text-blue-100/60 font-medium leading-relaxed max-w-2xl">
                  Explore our latest corporate milestones, strategic industry partnerships, and expert insights driving the future of enterprise technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end gap-4"
        >
          <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] rotate-90 origin-right translate-y-20">Scroll to Explore</span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-blue-500 to-transparent" />
        </motion.div>
      </section>

      {/* Breaking News Marquee */}
      <div className="bg-blue-600 py-4 overflow-hidden whitespace-nowrap border-y border-blue-400/30 relative z-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-white font-black text-sm uppercase tracking-widest">Breaking: TIM Partners with KCAT for Protective DNS</span>
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white/70 font-black text-sm uppercase tracking-widest">Innovation: Carmona Data Center Zone 2 Pre-Launch</span>
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Featured Article - Cinematic Layout */}
      <section className="py-20 relative overflow-hidden bg-[#00021a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative group cursor-pointer" onClick={() => handleSelectEvent(featuredEvent)}>
              <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  src={featuredEvent.image} 
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00021a] via-transparent to-transparent opacity-80" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center border-8 border-[#00021a] shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-white font-black text-xs text-center leading-tight uppercase tracking-widest">Latest <br />Update</span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em]">Featured Story</span>
                <div className="h-[1px] w-20 bg-blue-400/30" />
                <span className="text-white/40 font-bold text-xs uppercase tracking-widest">{featuredEvent.date}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
                {featuredEvent.title}
              </h2>
              <p className="text-lg text-blue-100/60 leading-relaxed mb-10 line-clamp-4">
                {featuredEvent.content}
              </p>
              <div className="flex items-center gap-6">
                <Button 
                  onClick={() => handleSelectEvent(featuredEvent)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 rounded-full text-sm font-black uppercase tracking-widest h-auto transition-all group shadow-xl shadow-blue-600/20"
                >
                  Read Full Article
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                <button className="p-4 rounded-full border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-400/50 transition-all bg-white/5">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid - Editorial Style */}
      <section className="py-20 bg-white/5 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-end justify-between mb-20">
            <div>
              <span className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Archive</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Recent <br />Insights</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {remainingEvents.slice(0, visibleCount).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleSelectEvent(event)}
              >
                <div className="relative mb-8 overflow-hidden rounded-[2rem] aspect-[4/3] border border-white/10">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-[#00021a]/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                      {event.type.split('/')[0].trim()}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    {event.date}
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2 uppercase tracking-tighter">
                    {event.title}
                  </h3>
                  <p className="text-blue-100/40 text-sm leading-relaxed line-clamp-3">
                    {event.content}
                  </p>
                  <div className="pt-4 flex items-center">
                    <Button 
                      variant="outline" 
                      className="border-blue-600/50 text-blue-400 hover:bg-blue-600 hover:text-white rounded-full px-6 py-4 h-auto font-black uppercase tracking-widest text-[10px] transition-all group/btn bg-white/5"
                    >
                      Read Full Article
                      <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < remainingEvents.length && (
            <div className="mt-20 flex justify-center">
              <Button 
                onClick={() => setVisibleCount(prev => prev + 9)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 rounded-full text-sm font-black uppercase tracking-widest h-auto transition-all shadow-xl shadow-blue-600/20"
              >
                Show More Articles
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#00021a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0%,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
              The Future is <br />
              <span className="text-blue-500">Accelerating.</span>
            </h2>
            <p className="text-xl text-blue-100/40 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
              Join the ranks of industry leaders who trust TIM Corporation for their mission-critical digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-10 rounded-full text-sm font-black uppercase tracking-[0.2em] h-auto shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-2">
                <Link to={createPageUrl('ContactUs')}>Initiate Partnership</Link>
              </Button>
              <Button asChild variant="ghost" className="border border-white/20 text-white hover:bg-white/10 px-16 py-10 rounded-full text-sm font-black uppercase tracking-[0.2em] h-auto transition-all">
                <Link to={createPageUrl('AboutUs')}>Our Legacy</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )}
</AnimatePresence>
);
}
