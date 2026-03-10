import TradePageLayout from "@/components/TradePageLayout";
import { SprayCan } from "lucide-react";

const CleaningAndMaintenance = () => (
  <TradePageLayout
    trade="Cleaning & Maintenance"
    icon={SprayCan}
    heroTitle="Websites & SEO for cleaning companies and maintenance businesses"
    heroDescription="From domestic cleaners and commercial cleaning companies to window cleaners, carpet cleaners and pressure washing services — we help cleaning and maintenance businesses get found by customers searching on Google."
    problemsTitle="Why most cleaning businesses struggle to get found online"
    problems={[
      "Customers searching for cleaners near them find larger companies or directories instead of you",
      "You rely on leaflet drops and word of mouth but don't have a consistent online lead source",
      "Your competitors have professional websites while you're still using social media or free listings",
      "You don't appear on Google when people search for cleaning services in your area",
      "You're paying for leads on platforms that share them with multiple other companies",
      "You know a website would help but don't know where to start or what it should include",
    ]}
    servicesTitle="What we build for cleaning and maintenance businesses"
    services={[
      { title: "Cleaning Website Design", description: "Professional websites for domestic cleaners, commercial cleaning companies, window cleaners, carpet cleaners and pressure washing services — built to generate regular enquiries." },
      { title: "Local SEO", description: "Rank for searches like 'cleaner near me', 'window cleaner Newcastle', 'carpet cleaning Middlesbrough' and every term your customers search." },
      { title: "Google Business Profile", description: "Optimised Google listing with service details, coverage area, reviews and photos of your work." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — domestic cleaner in Sunderland, pressure washing in Gateshead, window cleaner in Durham." },
      { title: "Service Pages", description: "Dedicated pages for each service — end of tenancy cleaning, office cleaning, gutter cleaning, driveway pressure washing." },
      { title: "Quote Request Forms", description: "Easy-to-use quote request forms and click-to-call buttons that turn website visitors into booked jobs." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "cleaner near me",
      "window cleaner Newcastle",
      "carpet cleaning Middlesbrough",
      "pressure washing North East",
      "commercial cleaning Teesside",
      "end of tenancy cleaning near me",
      "office cleaning Sunderland",
      "gutter cleaning North Tyneside",
    ]}
    benefitsTitle="Why cleaning businesses choose NE1 Digital"
    benefits={[
      { title: "Service-specific targeting", description: "We target the exact cleaning services customers search for — not just 'cleaner' but specific services like carpet cleaning, pressure washing and end of tenancy cleaning." },
      { title: "Local area coverage", description: "Service area pages help you rank in every town and area you work in, capturing customers across your full coverage." },
      { title: "Professional credibility", description: "A well-designed website with insurance details, testimonials and service descriptions builds trust before customers call." },
      { title: "Consistent lead flow", description: "Stop relying on seasonal leaflet drops. A ranking website generates consistent enquiries all year round." },
    ]}
    faqTitle="Common questions from cleaning businesses"
    faqs={[
      { question: "Which cleaning businesses do you work with?", answer: "We work with domestic cleaners, commercial cleaning companies, window cleaners, carpet cleaners, pressure washing services and other maintenance businesses." },
      { question: "Can you help me get commercial cleaning contracts?", answer: "Yes. We create dedicated commercial cleaning pages targeting businesses, offices, landlords and property managers searching for reliable cleaning services." },
      { question: "Is a website worth it for a one-person cleaning business?", answer: "Absolutely. Even sole traders benefit hugely from ranking on Google. A professional website and Google Business Profile can transform your enquiry levels." },
      { question: "How long until I see results?", answer: "Most cleaning businesses see improved rankings within 4-8 weeks, with enquiries building steadily over 3-6 months." },
    ]}
    ctaTitle="Ready to get more cleaning contracts from Google?"
    ctaDescription="Book a free call and we'll show you how to fill your diary with quality cleaning work from customers who found you online."
  />
);

export default CleaningAndMaintenance;
