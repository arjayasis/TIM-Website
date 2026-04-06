import AboutUs from './pages/AboutUs';
import BorderlessConnectivity from './pages/BorderlessConnectivity';
import CloudServices from './pages/CloudServices';
import Compliance from './pages/Compliance';
import ContactUs from './pages/ContactUs';
import Cybersecurity from './pages/Cybersecurity';
import Home from './pages/Home';
import ManagedOps from './pages/ManagedOps';
import ManagedNOC from './pages/ManagedNOC';
import ManagedSOC from './pages/ManagedSOC';
import ManagedInfrastructure from './pages/ManagedInfrastructure';
import VAPT from './pages/VAPT';
import SystemIntegration from './pages/SystemIntegration';
import TIMCorpAI from './pages/TIMCorpAI';
import NewsEvents from './pages/NewsEvents';
import SupportPortal from './pages/SupportPortal';
import InquiryForm from './pages/InquiryForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import CompanyDeck from './pages/CompanyDeck';
import HomeDeck from './pages/HomeDeck';
import Brochure from './pages/Brochure';
import __Layout from './Layout.tsx';

export const PAGES = {
    "AboutUs": AboutUs,
    "BorderlessConnectivity": BorderlessConnectivity,
    "CloudServices": CloudServices,
    "Compliance": Compliance,
    "ContactUs": ContactUs,
    "Cybersecurity": Cybersecurity,
    "Home": Home,
    "ManagedOps": ManagedOps,
    "ManagedNOC": ManagedNOC,
    "ManagedSOC": ManagedSOC,
    "ManagedInfrastructure": ManagedInfrastructure,
    "VAPT": VAPT,
    "SystemIntegration": SystemIntegration,
    "TIMCorpAI": TIMCorpAI,
    "NewsEvents": NewsEvents,
    "SupportPortal": SupportPortal,
    "InquiryForm": InquiryForm,
    "PrivacyPolicy": PrivacyPolicy,
    "CookiePolicy": CookiePolicy,
    "presentation-deck": CompanyDeck,
    "home-deck": HomeDeck,
    "Brochure": Brochure,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
