import TradePageLayout from "@/components/TradePageLayout";
import { Bug } from "lucide-react";

const PestControl = () => (
  <TradePageLayout
    category="services"
    trade="Pest Control"
    icon={Bug}
    heroTitle="Websites & SEO that bring pest control businesses more emergency and planned work"
    heroDescription="From emergency rat and mouse call-outs to planned wasp nest removal and commercial contracts, we help pest control businesses dominate local search results for high-intent pest-related searches."
    problemsTitle="Why most pest control businesses struggle online"
    problems={[
      "Customers with pest emergencies search Google first — but national companies rank above you",
      "Your website doesn't convey urgency or make it easy to call you immediately",
      "You offer a full range of pest services but your site only mentions a few",
      "National pest control brands with big budgets dominate the search results",
      "You're paying lead generation companies for shared leads that rarely convert",
      "Commercial clients can't easily find your business pest control services online",
    ]}
    servicesTitle="What we build for pest control businesses"
    services={[
      { title: "Pest Control Website Design", description: "Professional, emergency-ready websites with prominent phone numbers and clear service descriptions that convert panicked searchers into calls." },
      { title: "Emergency Search SEO", description: "Rank for high-intent searches like 'pest control near me', 'rat catcher emergency', 'wasp nest removal' in your area." },
      { title: "Google Business Profile", description: "Optimised listing ensuring you appear in the local map pack for pest emergency and planned treatment searches." },
      { title: "Pest-Specific Pages", description: "Individual pages for rats, mice, wasps, bed bugs, cockroaches, ants — each targeting specific pest searches." },
      { title: "Service Area Pages", description: "Location pages ensuring you rank for pest control searches in every town and area you cover." },
      { title: "Commercial Pest Control", description: "Dedicated content targeting businesses, restaurants, hotels, and property managers needing commercial pest management." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "pest control near me",
      "rat catcher Newcastle",
      "wasp nest removal Sunderland",
      "mouse problem Durham",
      "bed bug treatment North East",
      "emergency pest control near me",
      "commercial pest control Gateshead",
      "cockroach treatment near me",
    ]}
    benefitsTitle="Why pest control businesses choose NE1 Web Digital"
    benefits={[
      { title: "Emergency-first design", description: "Prominent phone numbers, one-tap calling, and urgent messaging — because pest emergencies need immediate response." },
      { title: "Pest-specific targeting", description: "Rats, mice, wasps, bed bugs — each pest type has its own search pattern. We target them all individually." },
      { title: "Commercial client capture", description: "Dedicated commercial pages targeting restaurants, hotels, and businesses needing regular pest management contracts." },
      { title: "Direct enquiries", description: "Your own website means direct calls — no more sharing leads with competitors through national pest control referral services." },
    ]}
    faqTitle="Common questions from pest control businesses"
    faqs={[
      { question: "Can I compete with Rentokil and national companies?", answer: "Locally, absolutely. Customers with pest emergencies want someone fast and local. Good local SEO puts you ahead of nationals for area-specific emergency searches." },
      { question: "How important are pest-specific pages?", answer: "Very. Someone with a rat problem searches differently from someone with wasps. Dedicated pages for each pest type capture these specific, high-intent searches." },
      { question: "Can you help me get commercial contracts?", answer: "Yes. We create dedicated commercial pest control content targeting businesses, restaurants, and property management companies — a separate, high-value market." },
      { question: "How quickly can I start ranking for emergency terms?", answer: "Emergency pest control searches are competitive but local SEO gives independent operators an advantage. Most businesses see improved visibility within 6-8 weeks." },
    ]}
    ctaTitle="Ready to capture more pest control enquiries from Google?"
    ctaDescription="Stop losing emergency calls to national companies. Build a local online presence that puts your pest control business first when customers need you most."
  />
);

export default PestControl;
