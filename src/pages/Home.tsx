import React from 'react';
import HeroSection from '@/components/tim/HeroSection';
import BrandStory from '@/components/tim/BrandStory';
import ServicesGrid from '@/components/tim/ServicesGrid';
import IndustriesSection from '@/components/tim/IndustriesSection';
import TestimonialsCarousel from '@/components/tim/TestimonialsCarousel';
import FeaturedEvents from '@/components/tim/FeaturedEvents';
import ExcellenceSection from '@/components/tim/ExcellenceSection';
import CTASection from '@/components/tim/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#00021a] text-white overflow-hidden">
      <HeroSection />
      <BrandStory />
      <ServicesGrid />
      <ExcellenceSection />
      <IndustriesSection />
      <TestimonialsCarousel />
      <FeaturedEvents />
      <CTASection />
    </div>
  );
}
