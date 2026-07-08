import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { newsEvents, NewsEvent } from '@/lib/newsData';
import { Calendar, Tag, ArrowRight, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

export default function NewsEvents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const eventId = searchParams.get('id');
  const selectedEvent = newsEvents.find(e => e.id === eventId) || null;
  const [visibleCount, setVisibleCount] = useState(9);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const featuredEvent = newsEvents[0];
  const remainingEvents = newsEvents.slice(1);

  const yParallax = useTransform(scrollYProgress, [0, 0.2], [0, 200]);

  // Synchronize browser title and Open Graph meta tags client-side
  useEffect(() => {
    if (selectedEvent) {
      document.title = `${selectedEvent.title} | TIM Corp News & Events`;
      
      const updateMeta = (propertyOrName: string, content: string, isProperty = true) => {
        const attribute = isProperty ? 'property' : 'name';
        let element = document.querySelector(`meta[${attribute}="${propertyOrName}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attribute, propertyOrName);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
      };

      updateMeta('og:title', `${selectedEvent.title} | TIM Corp News & Events`);
      updateMeta('og:description', selectedEvent.content.replace(/\s+/g, ' ').substring(0, 200).trim() + "...");
      updateMeta('og:image', selectedEvent.image);
      updateMeta('og:type', 'article');
      updateMeta('og:url', window.location.href);
      
      updateMeta('twitter:card', 'summary_large_image', false);
      updateMeta('twitter:title', `${selectedEvent.title} | TIM Corp News & Events`, false);
      updateMeta('twitter:description', selectedEvent.content.replace(/\s+/g, ' ').substring(0, 200).trim() + "...", false);
      updateMeta('twitter:image', selectedEvent.image, false);
      updateMeta('twitter:url', window.location.href, false);
    } else {
      document.title = "News & Events | TIM Corp";
    }
  }, [selectedEvent]);

  // Handle scroll to top when selecting an article
  const handleSelectEvent = (event: NewsEvent) => {
    setSearchParams({ id: event.id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = (event: NewsEvent) => {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?id=${event.id}`;
    
    const fallbackCopy = (text: string) => {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "-999999px";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          toast.success(`Link for "${event.title.substring(0, 30)}..." copied to clipboard!`);
        } else {
          throw new Error('Copy command unsuccessful');
        }
      } catch (err) {
        console.error('Fallback copy failed: ', err);
        // If everything fails (highly restricted sandbox), display a friendly manual copy popup inside toast
        toast.info(
          <div className="flex flex-col gap-2 p-1">
            <span className="font-bold text-xs text-white">Copy link manually:</span>
            <input 
              type="text" 
              readOnly 
              value={text} 
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className="bg-white/10 text-white text-xs px-2 py-1.5 rounded border border-white/20 select-all cursor-pointer w-full focus:outline-none focus:border-blue-500" 
            />
          </div>,
          { duration: 10000 }
        );
      }
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          toast.success(`Link for "${event.title.substring(0, 30)}..." copied to clipboard!`);
        })
        .catch((err) => {
          console.warn('Clipboard write error, falling back: ', err);
          fallbackCopy(shareUrl);
        });
    } else {
      fallbackCopy(shareUrl);
    }
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
            {/* Header/Hero for Article - Formatted Exactly like Screenshot */}
            <div className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-between">
              {/* Background cover image with parallax & gorgeous dark-blue overlay masks */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover opacity-85"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#00021a]/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00021a]/75 via-[#00021a]/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00021a]/95 via-transparent to-[#00021a]/25" />
              </div>

              {/* Ambient Glows */}
              <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/15 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full" />
              </div>

              {/* Relative Content Area */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full h-full flex flex-col justify-between py-12 md:py-20 animate-fade-in">
                {/* Top Section: Back Button */}
                <div className="pt-4">
                  <button
                    onClick={() => setSearchParams({})}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-extrabold uppercase tracking-[0.25em] text-[11px] transition-colors group cursor-pointer"
                  >
                    <span>←</span> BACK TO NEWS
                  </button>
                </div>

                {/* Middle Section: Solid Pill Badge & Large Title */}
                <div className="max-w-5xl mt-auto mb-6 py-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                  >
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1.5 bg-blue-600/80 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/30">
                        {selectedEvent.type}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-sans font-black text-white leading-[1.15] tracking-tight uppercase max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                      {selectedEvent.title}
                    </h1>
                  </motion.div>
                </div>

                {/* Bottom Section: Divider & Metadata Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex flex-row items-center justify-between gap-4 border-t border-white/10 pt-8"
                >
                  <div className="flex flex-wrap items-center gap-6 md:gap-8">
                    {/* Timeline Item */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-950/60 rounded-xl flex items-center justify-center border border-blue-900/30 text-blue-400 shadow-inner">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.15em] text-white/40 font-bold mb-0.5">Timeline</p>
                        <p className="text-white/90 font-bold text-xs tracking-tight">{selectedEvent.date}</p>
                      </div>
                    </div>

                    {/* Category Item */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-950/60 rounded-xl flex items-center justify-center border border-blue-900/30 text-indigo-400 shadow-inner">
                        <Tag className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.15em] text-white/40 font-bold mb-0.5">Category</p>
                        <p className="text-white/90 font-bold text-xs tracking-tight font-sans">Strategic Insight</p>
                      </div>
                    </div>
                  </div>

                  {/* Share and Save Action buttons */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleShare(selectedEvent)}
                      className="w-10 h-10 rounded-full border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-400/50 hover:bg-white/5 transition-all flex items-center justify-center p-0 cursor-pointer"
                      title="Share Article"
                    >
                      <Share2 size={15} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-400/50 hover:bg-white/5 transition-all flex items-center justify-center p-0 cursor-pointer">
                      <Bookmark size={15} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Article Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-24">
              <div className="max-w-4xl mx-auto">
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
                    onClick={() => setSearchParams({})}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 py-8 h-auto font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-blue-600/20 cursor-pointer"
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
      {/* Immersive Featured Event Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-between bg-[#00021a]">
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <motion.div 
            style={{ y: yParallax }}
            className="absolute inset-0"
          >
            <img 
              src={featuredEvent.image} 
              alt={featuredEvent.title} 
              className="w-full h-full object-cover opacity-85 scale-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Elegant multi-layered gradient backdrop to ensure text is perfectly crisp and readable */}
            <div className="absolute inset-0 bg-[#00021a]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00021a]/75 via-[#00021a]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00021a]/95 via-transparent to-transparent" />
          </motion.div>
          
          {/* Ambient Glows */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/15 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full" />
          </div>
        </div>
        
        {/* Relative Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full h-full flex flex-col justify-between py-12 md:py-20 animate-fade-in">
          {/* Top Section: Back Button linking to Homepage */}
          <div className="pt-4">
            <Link
              to={createPageUrl('')}
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-extrabold uppercase tracking-[0.25em] text-[11px] transition-colors group cursor-pointer"
            >
              <span>←</span> BACK TO HOME
            </Link>
          </div>

          {/* Middle Section: Badge & Title with Read Story CTA or hover read */}
          <div className="max-w-5xl mt-auto mb-6 py-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-[#2563eb]/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/30">
                  {featuredEvent.type}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-sans font-black text-white leading-[1.15] tracking-tight uppercase max-w-3xl cursor-pointer hover:text-blue-400 transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" onClick={() => handleSelectEvent(featuredEvent)}>
                {featuredEvent.title}
              </h1>
              <p className="text-blue-100/75 leading-relaxed text-sm md:text-base font-medium max-w-xl mt-3 line-clamp-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                {featuredEvent.content}
              </p>
            </motion.div>
          </div>

          {/* Bottom Section: Divider & Metadata Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-row items-center justify-between gap-4 border-t border-white/10 pt-8"
          >
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {/* Timeline Item */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-950/60 rounded-xl flex items-center justify-center border border-blue-900/30 text-blue-400 shadow-inner">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/40 font-bold mb-0.5">Timeline</p>
                  <p className="text-white/90 font-bold text-xs tracking-tight">{featuredEvent.date}</p>
                </div>
              </div>

              {/* Category Item */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-950/60 rounded-xl flex items-center justify-center border border-blue-900/30 text-indigo-400 shadow-inner">
                  <Tag className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/40 font-bold mb-0.5">Category</p>
                  <p className="text-white/90 font-bold text-xs tracking-tight font-sans">Strategic Insight</p>
                </div>
              </div>
            </div>

            {/* Read Button & Action group */}
            <div className="flex items-center gap-2">
              <Button 
                onClick={() => handleSelectEvent(featuredEvent)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-[11px] rounded-full transition-all hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.25)] cursor-pointer tracking-wider font-extrabold uppercase h-auto"
              >
                Read Story
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Button>

              <button 
                onClick={() => handleShare(featuredEvent)}
                className="w-10 h-10 rounded-full border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-400/50 hover:bg-white/5 transition-all flex items-center justify-center p-0 cursor-pointer"
                title="Share Article"
              >
                <Share2 size={15} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-400/50 hover:bg-white/5 transition-all flex items-center justify-center p-0 cursor-pointer">
                <Bookmark size={15} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          onClick={() => {
            document.getElementById('all-events')?.scrollIntoView({ behavior: 'smooth' });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group z-20"
        >
          <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">Discover More Events</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Breaking News Marquee */}
      <div className="bg-blue-600/10 py-5 overflow-hidden whitespace-nowrap border-y border-white/5 relative z-20 backdrop-blur-sm">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-white/80 font-black text-xs uppercase tracking-widest">Sovereign AI Ecosystem: RackCorp.ai Launch</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-white/60 font-black text-xs uppercase tracking-widest">Resiliency Forum: TIM and Rubrik executive summit</span>
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-white/50 font-black text-xs uppercase tracking-widest">TIM 40 Years of Enterprise Technology Innovation</span>
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* News Grid - Editorial Style */}
      <section id="all-events" className="py-24 bg-[#00021a] relative border-t border-white/5 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-6">
            <div>
              <span className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Archive</span>
              <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase">Recent <br />Insights</h2>
            </div>
            <p className="text-blue-100/40 text-sm max-w-sm font-medium leading-relaxed">
              Explore the timeline of our recent technology milestones, corporate achievements, and strategic alignments.
            </p>
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
                  <div className="pt-4 flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      className="border-blue-600/50 text-blue-400 hover:bg-blue-600 hover:text-white rounded-full px-6 py-4 h-auto font-black uppercase tracking-widest text-[10px] transition-all group/btn bg-white/5"
                    >
                      Read Full Article
                      <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(event);
                      }}
                      className="w-9 h-9 rounded-full border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-400/50 hover:bg-white/5 transition-all flex items-center justify-center p-0 cursor-pointer"
                      title="Share Article"
                    >
                      <Share2 size={14} />
                    </button>
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
