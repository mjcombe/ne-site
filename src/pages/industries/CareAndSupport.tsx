import TradePageLayout from "@/components/TradePageLayout";
import { Stethoscope } from "lucide-react";

const CareAndSupport = () => (
  <TradePageLayout
    trade="Care & Support Services"
    icon={Stethoscope}
    heroTitle="Websites & SEO for care homes, home care and support service providers"
    heroDescription="From care homes and domiciliary care to disability support and elderly care — we help care and support businesses get found by families and local authorities searching on Google."
    problemsTitle="Why most care businesses struggle to get found online"
    problems={[
      "Families searching for care services in your area find competitors or large care chains instead",
      "You rely on local authority referrals but don't have a professional website to attract private clients",
      "Your Google listing is incomplete and doesn't show your services, CQC rating or specialisms",
      "Competitors with less experience but better online presence are winning your potential clients",
      "You're listed on care directories but they don't generate consistent, quality enquiries",
      "You know a website would help grow your business but don't have time to set one up",
    ]}
    servicesTitle="What we build for care and support businesses"
    services={[
      { title: "Care Business Website Design", description: "Warm, trust-building websites for care homes, home care providers and support services — designed to reassure families and generate enquiries." },
      { title: "Local SEO", description: "Rank for searches like 'care home near me', 'home care Newcastle', 'domiciliary care Middlesbrough' and every term families search." },
      { title: "Google Business Profile", description: "Optimised Google listing with photos of your facilities, reviews from families and accurate service information." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — care home in Durham, home care in Sunderland, support services in Gateshead." },
      { title: "Service & Speciality Pages", description: "Clear pages for dementia care, palliative care, live-in care and other specialisms so families find exactly what they need." },
      { title: "Enquiry & Referral Forms", description: "Easy enquiry forms for families and professionals to request assessments, availability and pricing." },
    ]}
    searchTermsTitle="Searches families are making right now"
    searchTerms={[
      "care home near me",
      "home care Newcastle",
      "domiciliary care North East",
      "live-in care Middlesbrough",
      "dementia care Sunderland",
      "elderly care near me",
      "supported living Durham",
      "respite care North Tyneside",
    ]}
    benefitsTitle="Why care businesses choose NE1 Digital"
    benefits={[
      { title: "Family trust", description: "Families need reassurance. We build websites that showcase your qualifications, facilities and testimonials to win their confidence." },
      { title: "Service-specific targeting", description: "We target specific services — dementia care, live-in care, supported living — not just generic care terms." },
      { title: "Local dominance", description: "Service area pages ensure you rank in every area you serve, capturing families searching nearby." },
      { title: "Direct enquiries", description: "Your own website generates enquiries directly — no directory fees or commission-based referrals." },
    ]}
    faqTitle="Common questions from care businesses"
    faqs={[
      { question: "Which care businesses do you work with?", answer: "We work with care homes, home care providers, supported living services, disability support providers, elderly care specialists and other care organisations." },
      { question: "How important is a website for a care business?", answer: "Extremely important. Most families start their search for care online. A professional website with clear information, photos and reviews is often what convinces them to enquire." },
      { question: "Can you help with CQC rating display?", answer: "Yes. We integrate your CQC rating and registration details into your website to build trust and meet regulatory expectations." },
      { question: "How long until I see results?", answer: "Most care businesses see improved local rankings within 4-8 weeks, with enquiries building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more families and clients from Google?"
    ctaDescription="Book a free call and we'll show you how to get more enquiries, referrals and clients for your care business."
  />
);

export default CareAndSupport;
