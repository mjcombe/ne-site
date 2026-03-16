import TradePageLayout from "@/components/TradePageLayout";
import { ShieldCheck } from "lucide-react";

const SecurityServices = () => (
  <TradePageLayout
    trade="Security Services"
    icon={ShieldCheck}
    heroTitle="Websites & SEO for CCTV, alarm and security businesses"
    heroDescription="From CCTV installers and alarm companies to security guards and fire safety — we help security businesses get found by homeowners, landlords and businesses searching on Google."
    problemsTitle="Why most security businesses struggle to get found online"
    problems={[
      "Homeowners and businesses searching for security services find competitors or national chains instead",
      "You rely on word of mouth but don't have a professional website to showcase your work",
      "Your Google listing is incomplete and doesn't show your services, accreditations or coverage areas",
      "Competitors with less experience but better online presence are winning your potential customers",
      "You're listed on directories but they don't generate consistent, quality leads",
      "You know a website would help grow your business but don't have time to set one up",
    ]}
    servicesTitle="What we build for security businesses"
    services={[
      { title: "Security Business Website Design", description: "Professional, trust-building websites for CCTV installers, alarm companies and security firms — designed to win customer confidence and generate enquiries." },
      { title: "Local SEO", description: "Rank for searches like 'CCTV installer near me', 'alarm company Newcastle', 'security guards Middlesbrough' and every term customers search." },
      { title: "Google Business Profile", description: "Optimised Google listing with photos of your installations, reviews from clients and accurate service information." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — CCTV installer in Durham, alarm company in Sunderland, security in Gateshead." },
      { title: "Service Pages", description: "Clear, detailed pages for CCTV, intruder alarms, access control, fire safety and other services." },
      { title: "Quote & Enquiry Forms", description: "Easy quote request forms for homeowners and businesses to enquire about installations and services." },
    ]}
    searchTermsTitle="Searches customers are making right now"
    searchTerms={[
      "CCTV installer near me",
      "alarm company Newcastle",
      "security guards North East",
      "access control Middlesbrough",
      "fire alarm installation Durham",
      "home security near me",
      "commercial CCTV Sunderland",
      "intruder alarm North Tyneside",
    ]}
    benefitsTitle="Why security businesses choose NE1 Digital"
    benefits={[
      { title: "Customer trust", description: "Security is about trust. We build websites that showcase your accreditations, experience and customer testimonials to win confidence." },
      { title: "Service-specific targeting", description: "We target specific services — CCTV installation, intruder alarms, access control — not just generic security terms." },
      { title: "Local dominance", description: "Service area pages ensure you rank in every area you serve, capturing customers searching nearby." },
      { title: "Direct leads", description: "Your own website generates leads directly — no directory fees or commission-based referrals." },
    ]}
    faqTitle="Common questions from security businesses"
    faqs={[
      { question: "Which security businesses do you work with?", answer: "We work with CCTV installers, alarm companies, security guard firms, access control specialists, fire safety companies and other security service providers." },
      { question: "How important is a website for a security business?", answer: "Very important. Most homeowners and businesses search Google when looking for security services. A professional website with accreditations, case studies and reviews is what convinces them to enquire." },
      { question: "Can you help showcase accreditations?", answer: "Yes. We prominently display NSI, SSAIB, and other industry accreditations to build trust and credibility." },
      { question: "How long until I see results?", answer: "Most security businesses see improved local rankings within 4-8 weeks, with leads building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more customers from Google?"
    ctaDescription="Book a free call and we'll show you how to get more leads, enquiries and customers for your security business."
  />
);

export default SecurityServices;
