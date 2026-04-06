import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0009af] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="https://marketing.timcorp.net.ph/hubfs/logo/TIM%20logo%20(white).png"
              alt="TIM Corporation"
              className="h-10 mb-6"
            />
            <p className="text-blue-100 text-sm mb-4 leading-relaxed">
              Empowering enterprises with secure, scalable, and future-ready ICT solutions and services.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/timcorporation" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/TIMCorporationPH" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-base mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link to={createPageUrl('BorderlessConnectivity')} className="hover:text-white transition-colors">Connectivity</Link></li>
              <li><Link to={createPageUrl('CloudServices')} className="hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to={createPageUrl('Cybersecurity')} className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to={createPageUrl('ManagedOps')} className="hover:text-white transition-colors">Managed Operations</Link></li>
              <li><Link to={createPageUrl('SystemIntegration')} className="hover:text-white transition-colors">System Integration</Link></li>
              <li><Link to={createPageUrl('TIMCorpAI')} className="hover:text-white transition-colors">TIMCorp.AI</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link to={createPageUrl('AboutUs')} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to={`${createPageUrl('Home')}#IndustriesSection`} className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to={createPageUrl('home-deck')} className="hover:text-white transition-colors">Home Deck</Link></li>
              <li><Link to={createPageUrl('presentation-deck')} className="hover:text-white transition-colors">Company Deck</Link></li>
              <li><Link to={createPageUrl('SupportPortal')} className="hover:text-white transition-colors">Support Portal</Link></li>
              <li><Link to={createPageUrl('ContactUs')} className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>5600 Pres. Sergio Osmeña Highway<br />corner Arellano Street, Brgy. Palanan<br />Makati City 1235</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+63288571846" className="hover:text-white transition-colors">+63 (2) 8857 1846</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:inquiry@timcorp.net.ph" className="hover:text-white transition-colors">inquiry@timcorp.net.ph</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <p>&copy; 2026 TIM Corporation. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to={createPageUrl('PrivacyPolicy')} className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to={createPageUrl('CookiePolicy')} className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
