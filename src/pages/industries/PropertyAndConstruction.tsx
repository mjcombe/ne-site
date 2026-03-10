import TradePageLayout from "@/components/TradePageLayout";
import { Building2 } from "lucide-react";

const PropertyAndConstruction = () => (
  <TradePageLayout
    trade="Property & Construction"
    icon={Building2}
    category="services"
    heroTitle="Websites & SEO for estate agents, architects and property businesses"
    heroDescription="From estate agents and letting agents to architects, interior designers, property developers and surveyors — we help property and construction businesses get found by clients searching on Google."
    problemsTitle="Why most property businesses struggle to get found online"
    problems={[
      "Your competitors dominate Google while your business is buried on page two or beyond",
      "You rely on portals like Rightmove or Zoopla and don't have a strong independent online presence",
      "Your website looks dated and doesn't reflect the quality of your work or services",
      "Potential clients searching for architects or interior designers in your area can't find you",
      "You're spending on portal listings but not investing in your own digital visibility",
      "You know you need SEO but aren't sure where to start or who to trust",
    ]}
    servicesTitle="What we build for property and construction businesses"
    services={[
      { title: "Property Website Design", description: "Professional websites for estate agents, letting agents, architects, interior designers, developers and surveyors — designed to showcase your portfolio and generate enquiries." },
      { title: "Local SEO", description: "Rank for searches like 'estate agent near me', 'architect Newcastle', 'interior designer Teesside' and the terms your ideal clients use." },
      { title: "Google Business Profile", description: "Optimised Google listing with project photos, reviews and service details so you stand out in local search results." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — letting agent in Sunderland, architect in Durham, surveyor in Middlesbrough." },
      { title: "Portfolio & Case Studies", description: "Beautifully presented project galleries and case studies that showcase your best work and build client confidence." },
      { title: "Lead Generation", description: "Valuation request forms, enquiry forms and clear calls-to-action designed to convert website visitors into clients." },
    ]}
    searchTermsTitle="Searches your clients are making right now"
    searchTerms={[
      "estate agent near me",
      "letting agent Newcastle",
      "architect North East",
      "interior designer Middlesbrough",
      "property developer Teesside",
      "surveyor near me",
      "house valuation North Tyneside",
      "architect Sunderland",
    ]}
    benefitsTitle="Why property businesses choose NE1 Digital"
    benefits={[
      { title: "Portfolio-driven design", description: "Property is a visual industry. We build websites that showcase your projects, properties and design work to win client confidence." },
      { title: "Beyond portals", description: "Your own website and SEO strategy means you're not dependent on Rightmove, Zoopla or other platforms for leads." },
      { title: "Local authority building", description: "Service area pages help you rank in every area you operate, capturing clients searching for property services nearby." },
      { title: "Measurable enquiries", description: "Track every valuation request, phone call and form submission so you know your website's ROI." },
    ]}
    faqTitle="Common questions from property businesses"
    faqs={[
      { question: "Which property businesses do you work with?", answer: "We work with estate agents, letting agents, architects, interior designers, property developers, surveyors and related businesses." },
      { question: "Can you help reduce my reliance on property portals?", answer: "Yes. By building your own website's visibility on Google, you generate direct enquiries without paying portal fees for every lead." },
      { question: "Do you build property listing websites?", answer: "Yes. We can build websites with property listings, search functionality and lead capture — all optimised for local search." },
      { question: "How long until I see results?", answer: "Most property businesses see improved rankings within 4-8 weeks, with enquiry levels building over 3-6 months." },
    ]}
    ctaTitle="Ready to grow your property business online?"
    ctaDescription="Book a free call and we'll show you how to generate more enquiries, valuations and clients from Google."
  />
);

export default PropertyAndConstruction;
