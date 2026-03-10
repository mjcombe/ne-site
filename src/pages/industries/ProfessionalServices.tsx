import TradePageLayout from "@/components/TradePageLayout";
import { Briefcase } from "lucide-react";

const ProfessionalServices = () => (
  <TradePageLayout
    trade="Professional Services"
    icon={Briefcase}
    category="services"
    heroTitle="Websites & SEO for accountants, solicitors and professional service firms"
    heroDescription="From accountants and financial advisors to mortgage brokers, insurance brokers, solicitors, consultants and recruitment agencies — we help professional service businesses get found by clients searching on Google."
    problemsTitle="Why most professional services struggle to get found online"
    problems={[
      "Potential clients search Google for services like yours but find larger firms or directories instead",
      "Your website is outdated and doesn't reflect the professionalism of your practice",
      "You rely on referrals and networking but don't have a consistent online lead source",
      "Competitors with less experience rank higher on Google because they've invested in SEO",
      "You're listed on directories but they don't generate meaningful, quality enquiries",
      "You know digital marketing matters but don't have time to manage it alongside client work",
    ]}
    servicesTitle="What we build for professional service businesses"
    services={[
      { title: "Professional Website Design", description: "Authoritative, trust-building websites for accountants, solicitors, financial advisors, consultants and recruitment agencies — designed to generate quality client enquiries." },
      { title: "Local SEO", description: "Rank for searches like 'accountant near me', 'solicitor Newcastle', 'financial advisor Teesside' and the terms your ideal clients use." },
      { title: "Google Business Profile", description: "Optimised Google listing with service details, credentials, reviews and professional imagery." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — mortgage broker in Durham, insurance broker in Sunderland, consultant in Middlesbrough." },
      { title: "Service Pages", description: "Dedicated pages for each service you offer — tax returns, conveyancing, pensions, recruitment — each optimised for client searches." },
      { title: "Lead Generation", description: "Consultation request forms, callback forms and professional calls-to-action designed to convert visitors into qualified leads." },
    ]}
    searchTermsTitle="Searches your clients are making right now"
    searchTerms={[
      "accountant near me",
      "solicitor Newcastle",
      "financial advisor North East",
      "mortgage broker Middlesbrough",
      "insurance broker Teesside",
      "recruitment agency near me",
      "consultant Sunderland",
      "tax advisor North Tyneside",
    ]}
    benefitsTitle="Why professional services choose NE1 Digital"
    benefits={[
      { title: "Authority-building design", description: "Professional services need to convey trust and expertise. We build websites that position you as the go-to expert in your field." },
      { title: "Service-specific targeting", description: "We target the exact services clients search for — self-assessment, conveyancing, pension advice — not just generic terms." },
      { title: "Local credibility", description: "Service area pages help you rank as the trusted local option in every area you serve." },
      { title: "Qualified lead generation", description: "Our websites are designed to attract and convert the right type of client enquiries, not just traffic." },
    ]}
    faqTitle="Common questions from professional services"
    faqs={[
      { question: "Which professional services do you work with?", answer: "We work with accountants, financial advisors, mortgage brokers, insurance brokers, solicitors, consultants, recruitment agencies and similar professional service businesses." },
      { question: "How important is SEO for professional services?", answer: "Very important. More clients than ever search Google before choosing an accountant, solicitor or advisor. Ranking well locally means a consistent stream of quality enquiries." },
      { question: "Can you help with compliance content?", answer: "We work within your industry guidelines to ensure website content is appropriate and professional. We always recommend you review content for regulatory compliance." },
      { question: "How long until I see results?", answer: "Most professional service businesses see improved rankings within 4-8 weeks, with client enquiries building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more professional service clients?"
    ctaDescription="Book a free call and we'll show you how to generate more consultations, enquiries and clients from Google."
  />
);

export default ProfessionalServices;
