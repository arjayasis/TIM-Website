import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Since our partnership started, we have been receiving tremendous support from the TIM team...",
    author: "Alan R. Santos",
    title: "President & CEO",
    company: "NatRe",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/NATRe.png"
  },
  {
    quote: "Our partnership has led us to several successful projects, and we truly appreciate your continued support...",
    author: "Jennie Lansang",
    title: "CIO",
    company: "BancNet",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/BancNet.png"
  },
  {
    quote: "We feel very privileged to be one of your long-time clients. We look forward to many more years...",
    author: "Ryan Acosta",
    title: "SVP",
    company: "UnionBank",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/Unionbank.png"
  },
  {
    quote: "Thank you for raising the bar in IT and enabling industries nationwide.",
    author: "Michael de Castro",
    title: "Country President",
    company: "HGC",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/HGC-Global-Communications-Limited.png"
  },
  {
    quote: "TIM has been a great partner that has provided critical support since our earliest beginnings.",
    author: "Adel Tamano",
    title: "Chief Commercial Officer",
    company: "DITO",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/DITO%20Tel.png"
  },
  {
    quote: "TIM is one of our favorite partners. We wish you more power in the coming forty years.",
    author: "Wilfredo Rodriguez",
    title: "Executive VP",
    company: "AUB",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/aub.webp"
  },
  {
    quote: "We are honored to be part of this journey and proud of the partnership we have cultivated together.",
    author: "Michael Ngan",
    title: "President & General Manager",
    company: "Lenovo",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/Lenovo_Global_Corporate_Logo.png"
  },
  {
    quote: "We look forward to many more years of continued partnership and success.",
    author: "Wang Wendong",
    title: "Enterprise Partner Dev. Director",
    company: "Huawei",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/Huawei_Standard_logo.svg.png"
  },
  {
    quote: "We have been doing business for a long time and have seen how your company grows.",
    author: "Jimmy Go",
    title: "President & CEO",
    company: "VST-ECS",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/VST-ECS.png"
  },
  {
    quote: "It has been such a pleasure and honor working with your team for almost two decades.",
    author: "Andy Tan",
    title: "Country Manager",
    company: "M.Tech",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/M.Tech-Logo_RGB-new.png"
  },
  {
    quote: "Over the past forty years, you have empowered businesses to embrace new technologies...",
    author: "Bipul Sinha",
    title: "CEO & Chairman",
    company: "Rubrik",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/Rubrik.png"
  },
  {
    quote: "Thank you for your business and your partnership. We wish you continued success.",
    author: "Paul Roderick B. Lopez",
    title: "SVP Sales & Marketing",
    company: "Ardent",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/ardent.webp"
  },
  {
    quote: "We are incredibly proud to be your strategic partner and are inspired by your ambition...",
    author: "Dette Nacario",
    title: "Country Director",
    company: "Palo Alto Networks",
    logo: "https://20245415.fs1.hubspotusercontent-na2.net/hubfs/20245415/website/testimonial%20logos/paloalto.png"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#00021a]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[180px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Client Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6 tracking-tighter">
            Trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[450px] lg:min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="absolute w-full"
              >
                <div className="relative p-6 sm:p-10 lg:p-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden group">
                  {/* Decorative Background Glow */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700" />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 sm:top-10 sm:right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-blue-400" />
                  </div>

                  <div className="relative z-10">
                    <blockquote className="text-lg sm:text-2xl lg:text-4xl text-white leading-tight mb-8 sm:mb-12 font-medium tracking-tight italic">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-[1px]">
                          <div className="w-full h-full bg-[#00021a] rounded-[11px] sm:rounded-[15px] flex items-center justify-center">
                            <span className="text-white font-bold text-xl sm:text-2xl">
                              {testimonials[currentIndex].author.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-lg sm:text-2xl text-white font-bold tracking-tight">
                            {testimonials[currentIndex].author}
                          </div>
                          <div className="text-blue-400 font-medium uppercase tracking-widest text-[10px] sm:text-xs mt-1">
                            {testimonials[currentIndex].title} <span className="text-white/20 mx-1 sm:mx-2">|</span> {testimonials[currentIndex].company}
                          </div>
                        </div>
                      </div>
                      
                      {testimonials[currentIndex].logo && (
                        <div className="h-12 sm:h-16 flex items-center lg:justify-end">
                          <img
                            src={testimonials[currentIndex].logo}
                            alt={testimonials[currentIndex].company}
                            className="max-h-8 sm:max-h-12 w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 px-4">
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                      : 'w-3 bg-white/10 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => paginate(-1)}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => paginate(1)}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
