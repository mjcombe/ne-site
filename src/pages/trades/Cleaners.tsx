import TradePageLayout from "@/components/TradePageLayout";
import { SprayCanIcon } from "lucide-react";

const Cleaners = () => (
  <TradePageLayout
    category="services"
    trade="Cleaners"
    icon={SprayCanIcon}
    heroTitle="Websites & SEO that bring cleaning businesses more regular clients"
    heroDescription="Whether you offer domestic cleaning, commercial contracts, end-of-tenancy, or specialist cleaning services, we help cleaning businesses get found by customers searching for reliable cleaners locally."
    problemsTitle="Why most cleaning businesses struggle online"
    problems={[
      "You're competing with dozens of other cleaners in your area on Google",
      "National cleaning franchise websites dominate the search results you need",
      "Your website doesn't differentiate you from every other cleaning company",
      "You rely on Facebook groups and word of mouth with no long-term growth strategy",
      "Potential customers can't easily find your services, pricing, or availability",
      "You've tried directories and lead gen sites but the quality of leads is poor",
    ]}
    servicesTitle="What we build for cleaning businesses"
    services={[
      { title: "Cleaning Business Website Design", description: "Professional, trust-building websites that showcase your services, reliability, and customer reviews — designed to win regular clients." },
      { title: "Local SEO for Cleaners", description: "Rank for 'cleaners near me', 'domestic cleaner Newcastle', 'office cleaning' and service-specific searches in your area." },
      { title: "Google Business Profile", description: "Optimised listing that builds trust with reviews, photos, and accurate service information for maximum local visibility." },
      { title: "Service Pages", description: "Dedicated pages for domestic cleaning, commercial cleaning, end-of-tenancy, carpet cleaning, and every other service you offer." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — so you rank for cleaning searches in each specific town or neighbourhood." },
      { title: "Trust Building", description: "DBS checks, insurance details, reviews, and guarantees prominently displayed — the trust signals that win cleaning clients." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "cleaners near me",
      "domestic cleaner Newcastle",
      "office cleaning Sunderland",
      "end of tenancy cleaning Durham",
      "carpet cleaning near me",
      "deep clean service North East",
      "regular cleaner Gateshead",
      "commercial cleaning company",
    ]}
    benefitsTitle="Why cleaning businesses choose NE1 Web Digital"
    benefits={[
      { title: "Trust-first approach", description: "DBS checks, insurance, and genuine reviews front and centre — the details that make homeowners comfortable letting you into their home." },
      { title: "Service specialisation", description: "End-of-tenancy, commercial, carpet cleaning — each service gets its own optimised page targeting specific customer searches." },
      { title: "Regular client generation", description: "Your website is designed to convert one-off enquiries into regular weekly or fortnightly cleaning contracts." },
      { title: "Local area dominance", description: "Service area pages help you rank in every town and neighbourhood you cover — not just your home postcode." },
    ]}
    faqTitle="Common questions from cleaning businesses"
    faqs={[
      { question: "Can I compete with national cleaning franchises?", answer: "Yes. Local customers often prefer independent, local cleaners. Good local SEO, genuine reviews, and a professional website give you a significant advantage in your area." },
      { question: "How do you target commercial cleaning clients?", answer: "We create dedicated commercial cleaning pages targeting businesses, offices, and property managers — a separate audience from domestic cleaning with different search terms." },
      { question: "Should I show my prices on the website?", answer: "It depends on your business model. We'll advise on the best approach — from hourly rate guides to free quote CTAs — based on your competition and target market." },
      { question: "How important are reviews for a cleaning business?", answer: "Extremely. Reviews are the single biggest trust factor for cleaning businesses. We help you collect and display reviews effectively across your website and Google listing." },
    ]}
    ctaTitle="Ready to grow your cleaning business from Google?"
    ctaDescription="Build a professional website that brings a steady stream of domestic and commercial cleaning enquiries — and turns them into loyal, regular clients."
  />
);

export default Cleaners;
