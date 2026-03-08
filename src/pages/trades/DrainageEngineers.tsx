import TradePageLayout from "@/components/TradePageLayout";
import { Wrench } from "lucide-react";

const DrainageEngineers = () => (
  <TradePageLayout
    trade="Drainage Engineers"
    icon={Wrench}
    heroTitle="Websites & SEO that bring drainage engineers more emergency and planned work"
    heroDescription="From blocked drains and CCTV surveys to full drainage installations, we help drainage businesses capture urgent searches and planned maintenance enquiries across the North East."
    problemsTitle="Why most drainage companies struggle to get found online"
    problems={[
      "Customers with blocked drains search Google first — but they're finding your competitors",
      "You offer CCTV surveys and drain repairs but your website doesn't explain these services clearly",
      "Emergency drainage searches are extremely high-intent but you're not ranking for them",
      "National drain companies with big budgets dominate the search results in your area",
      "You rely on call-out services and directories that take a cut of every job",
      "Your website is outdated and doesn't instil confidence in customers with urgent problems",
    ]}
    servicesTitle="What we build for drainage engineers"
    services={[
      { title: "Drainage Website Design", description: "Professional websites built for urgency — making it easy for customers with blocked drains to call you immediately." },
      { title: "Emergency Search SEO", description: "Targeted optimisation for high-intent searches like 'emergency drain unblocking near me' and 'blocked drain engineer'." },
      { title: "Google Business Profile", description: "Optimised Google listing ensuring you appear in the map pack for emergency and planned drainage searches." },
      { title: "Service Area Pages", description: "Location-specific pages so you rank for drainage searches in every town and area you cover." },
      { title: "CCTV Survey Content", description: "Dedicated pages explaining your CCTV drain survey services to capture this growing search category." },
      { title: "24/7 Visibility", description: "SEO strategies ensuring your business appears around the clock — because drain emergencies don't wait for business hours." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "blocked drain near me",
      "emergency drain unblocking Newcastle",
      "CCTV drain survey Sunderland",
      "drainage engineer North East",
      "drain repair Durham",
      "blocked toilet emergency",
      "drain jetting near me",
      "drainage company Gateshead",
    ]}
    benefitsTitle="Why drainage engineers choose NE1 Web Digital"
    benefits={[
      { title: "Emergency-first design", description: "Your website is built for urgency — prominent phone numbers, one-tap calling, and clear emergency messaging." },
      { title: "High-intent keyword targeting", description: "We target the searches people make when they desperately need a drainage engineer — the most valuable leads in the trade." },
      { title: "Service diversity coverage", description: "From emergency unblocking to planned CCTV surveys and new installations — we target every service you offer." },
      { title: "Direct leads, no commission", description: "Your own website means no more paying directories or national companies a cut of your hard-earned work." },
    ]}
    faqTitle="Common questions from drainage engineers"
    faqs={[
      { question: "Can you help me compete with national drainage companies?", answer: "Yes. Local SEO gives you a significant advantage over national companies. Customers prefer local drainage engineers they can trust, and we make sure you appear prominently in local search results." },
      { question: "How important is emergency search visibility?", answer: "Critical. A huge percentage of drainage work comes from emergency situations. Ranking for 'blocked drain near me' type searches can transform your business." },
      { question: "Do you understand the different drainage services?", answer: "Yes. We create specific content for drain unblocking, CCTV surveys, drain repairs, drain installations, and septic tank services — each targeting different customer searches." },
      { question: "How quickly can I start ranking?", answer: "Emergency drainage searches are competitive but achievable. Most drainage businesses see improved visibility within 6-8 weeks with steady growth over 3-6 months." },
    ]}
    ctaTitle="Ready to capture more drainage enquiries from Google?"
    ctaDescription="Stop losing emergency call-outs to competitors. Let's build you a website that captures urgent drainage searches and converts them into booked work."
  />
);

export default DrainageEngineers;
