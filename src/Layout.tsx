import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ServicePageHeader from '@/components/shared/ServicePageHeader';

interface LayoutProps {
  children: React.ReactNode;
  currentPageName: string;
}

export default function Layout({ children, currentPageName }: LayoutProps) {
  // Determine which header to use
  // Home page uses its own internal header (or we can use Header with dark variant)
  // Service pages use ServicePageHeader
  
  const isHome = currentPageName === 'Home';
  const isServicePage = [
    'ManagedOps', 
    'ManagedNOC',
    'ManagedSOC',
    'ManagedInfrastructure',
    'VAPT',
    'CloudServices', 
    'BorderlessConnectivity', 
    'Cybersecurity', 
    'TIMCorpAI', 
    'SystemIntegration'
  ].includes(currentPageName);
  const isAbout = currentPageName === 'AboutUs';

  // Pages that handle their own header (Home handles it in HeroSection)
  const hasOwnHeader = isHome;

  // Pages that should use the dark variant of the header
  const isDarkPage = (isAbout || isServicePage || ['Compliance', 'NewsEvents', 'SupportPortal', 'ContactUs', 'InquiryForm', 'CookiePolicy', 'PrivacyPolicy', 'PlaceholderPage'].includes(currentPageName)) && currentPageName !== 'BorderlessConnectivity';

  if (currentPageName === 'presentation-deck' || currentPageName === 'home-deck') {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant={isDarkPage || isHome ? 'dark' : 'default'} isHome={isHome} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
