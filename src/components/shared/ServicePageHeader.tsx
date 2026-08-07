import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function ServicePageHeader() {
  const location = useLocation();
  const isActive = (pageName: string) => location.pathname === createPageUrl(pageName);

  const navItems = [
    { label: 'About', page: 'AboutUs' },
    { label: 'Managed Ops', page: 'ManagedOps' },
    { label: 'TIM Cloud', page: 'CloudServices' },
    { label: 'GNS Connectivity', page: 'BorderlessConnectivity' },
    { label: 'Cybersecurity', page: 'Cybersecurity' },
    { label: 'RackCorp.ai by TIM', page: 'TIMCorpAI' },
    { label: 'Integration', page: 'SystemIntegration' }
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-16 py-6 gap-4 lg:gap-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to={createPageUrl('AboutUs')}>
          <img
            src="https://marketing.timcorp.net.ph/hubfs/website/TIM%20Logo%20%5Bhorizontal%5D%20white.png"
            alt="TIM Corporation"
            className="h-14 lg:h-16"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex items-center gap-6"
      >
        {navItems.map((item) => (
          <Link
            key={item.page}
            to={createPageUrl(item.page)}
            className={`text-sm transition-colors font-medium ${
              isActive(item.page)
                ? 'text-white font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Button asChild className="bg-white text-[#0009af] hover:bg-blue-50 px-6">
          <a href="mailto:inquiry@timcorp.net.ph">Contact</a>
        </Button>
      </motion.div>
    </nav>
  );
}
