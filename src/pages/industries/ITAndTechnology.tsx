import TradePageLayout from "@/components/TradePageLayout";
import { Monitor } from "lucide-react";

const ITAndTechnology = () => (
  <TradePageLayout
    trade="IT & Technology"
    icon={Monitor}
    heroTitle="Websites & SEO for IT support, tech companies and SaaS businesses"
    heroDescription="From IT support companies and managed service providers to software firms and tech consultants — we help technology businesses get found by companies searching on Google."
    problemsTitle="Why most IT businesses struggle to get found online"
    problems={[
      "Businesses searching for IT support or tech services find competitors or national providers instead",
      "Your website looks outdated and doesn't reflect the quality of your technical expertise",
      "Your Google listing is incomplete and doesn't clearly show your services or coverage areas",
      "Competitors with less experience but better marketing are winning your potential clients",
      "You rely on referrals but want a consistent stream of new business enquiries",
      "You know your online presence needs work but you've been too busy delivering for clients",
    ]}
    servicesTitle="What we build for IT and technology businesses"
    services={[
      { title: "IT Business Website Design", description: "Professional, modern websites for IT support companies, MSPs and tech firms — designed to showcase expertise and generate leads." },
      { title: "Local SEO", description: "Rank for searches like 'IT support near me', 'managed IT services Newcastle', 'tech company Middlesbrough' and every term businesses search." },
      { title: "Google Business Profile", description: "Optimised Google listing with service details, client reviews and accurate coverage information." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — IT support in Durham, managed services in Sunderland, tech support in Gateshead." },
      { title: "Service & Solution Pages", description: "Clear pages for managed IT, cybersecurity, cloud services, VoIP and other solutions." },
      { title: "Lead Generation Forms", description: "Professional enquiry forms for businesses to request consultations, audits and quotes." },
    ]}
    searchTermsTitle="Searches businesses are making right now"
    searchTerms={[
      "IT support near me",
      "managed IT services Newcastle",
      "tech support North East",
      "cybersecurity company Middlesbrough",
      "cloud services Durham",
      "IT company near me",
      "business IT support Sunderland",
      "VoIP provider North Tyneside",
    ]}
    benefitsTitle="Why IT businesses choose NE1 Digital"
    benefits={[
      { title: "Professional credibility", description: "IT clients expect a polished online presence. We build websites that match the quality of your technical expertise." },
      { title: "Service-specific targeting", description: "We target specific services — managed IT, cybersecurity, cloud migration — not just generic IT terms." },
      { title: "Local dominance", description: "Service area pages ensure you rank in every area you serve, capturing businesses searching nearby." },
      { title: "Consistent leads", description: "Your own website generates qualified leads directly — reducing reliance on referrals alone." },
    ]}
    faqTitle="Common questions from IT businesses"
    faqs={[
      { question: "Which IT businesses do you work with?", answer: "We work with IT support companies, managed service providers, software developers, tech consultants, cybersecurity firms and SaaS businesses." },
      { question: "Do you understand technical services well enough to market them?", answer: "Yes. We take the time to understand your specific services and translate technical capabilities into clear benefits that resonate with business decision-makers." },
      { question: "Can you help with B2B lead generation?", answer: "Absolutely. Our websites and SEO strategies are designed to attract business clients actively searching for IT services and solutions." },
      { question: "How long until I see results?", answer: "Most IT businesses see improved local rankings within 4-8 weeks, with qualified leads building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more business clients from Google?"
    ctaDescription="Book a free call and we'll show you how to get more leads, enquiries and clients for your IT business."
  />
);

export default ITAndTechnology;
