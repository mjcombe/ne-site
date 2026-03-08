import TradePageLayout from "@/components/TradePageLayout";
import { Lock } from "lucide-react";

const Locksmiths = () => (
  <TradePageLayout
    trade="Locksmiths"
    icon={Lock}
    heroTitle="Websites & SEO that bring locksmiths more emergency and residential work"
    heroDescription="From emergency lockouts to new lock installations and security upgrades, we help locksmiths dominate local search results and capture high-intent customers who need help fast."
    problemsTitle="Why most locksmiths struggle to get found online"
    problems={[
      "Emergency lockout customers search Google first — but scam locksmith sites outrank you",
      "National locksmith directories charge premium commissions on every job they refer",
      "Your website doesn't convey urgency or make it easy to call you immediately",
      "Fake locksmith companies in your area are stealing your potential customers",
      "You offer a full range of services but your website only mentions basic lock changes",
      "You're spending on Google Ads but your organic visibility is non-existent",
    ]}
    servicesTitle="What we build for locksmiths"
    services={[
      { title: "Locksmith Website Design", description: "Fast-loading, mobile-first websites with prominent click-to-call buttons — built for customers who need a locksmith right now." },
      { title: "Emergency SEO", description: "Dominate searches like 'emergency locksmith near me' and '24 hour locksmith' with targeted, urgent-intent optimisation." },
      { title: "Google Business Profile", description: "Fully verified and optimised Google listing that helps you stand out from scam locksmith companies." },
      { title: "Service Area Pages", description: "Location pages for every town you cover, so you appear when someone searches 'locksmith in [their area]'." },
      { title: "Trust & Legitimacy Signals", description: "MLA membership, DBS checks, insurance details and real reviews prominently displayed to fight scam competitors." },
      { title: "Security Services Content", description: "Dedicated pages for lock upgrades, UPVC mechanisms, smart locks, and commercial security to capture planned work too." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "locksmith near me",
      "emergency locksmith Newcastle",
      "24 hour locksmith Sunderland",
      "locked out of house Durham",
      "lock change near me",
      "UPVC door lock repair",
      "commercial locksmith North East",
      "smart lock installation",
    ]}
    benefitsTitle="Why locksmiths choose NE Trades"
    benefits={[
      { title: "Emergency-optimised design", description: "One-tap calling, instant visibility of your phone number, and fast mobile loading — because lockout customers need you NOW." },
      { title: "Anti-scam positioning", description: "We help legitimate locksmiths stand out with verified credentials, real addresses, and genuine customer reviews." },
      { title: "Full service targeting", description: "Beyond emergencies — we target planned security work, lock upgrades, and commercial locksmith services." },
      { title: "No more directory commissions", description: "Your own ranking website means direct enquiries without paying locksmith directories per-lead fees." },
    ]}
    faqTitle="Common questions from locksmiths"
    faqs={[
      { question: "Can you help me outrank scam locksmith sites?", answer: "Yes. We build genuine local authority through proper SEO, verified Google Business Profile, real customer reviews, and legitimate accreditation display — the signals Google increasingly rewards over fake sites." },
      { question: "How important is mobile speed for a locksmith site?", answer: "Critical. Over 90% of emergency locksmith searches happen on mobile phones. We build lightning-fast, mobile-first sites where your phone number is the first thing customers see." },
      { question: "Do you help with commercial locksmith work?", answer: "Absolutely. We create dedicated content targeting businesses, landlords, and property managers — capturing commercial and planned security work alongside emergency residential searches." },
      { question: "Can I stop paying for locksmith directories?", answer: "That's the goal. Once your own website ranks well locally, you'll generate direct enquiries without paying per-lead fees to directories and national locksmith referral services." },
    ]}
    ctaTitle="Ready to capture more locksmith enquiries from Google?"
    ctaDescription="Stop paying commissions to directories. Let's build you a trusted online presence that brings locksmith customers directly to your phone."
  />
);

export default Locksmiths;
