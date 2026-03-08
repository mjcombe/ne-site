import TradePageLayout from "@/components/TradePageLayout";
import { Car } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const Mechanics = () => (
  <TradePageLayout
    category="services"
    trade="Mechanics"
    icon={Car}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring mechanics and garages more customers"
    heroDescription="Whether you run a garage, offer mobile mechanic services, or specialise in specific vehicle types, we help mechanics get found by car owners searching for reliable repair and servicing near them."
    problemsTitle="Why most mechanics struggle to get found online"
    problems={[
      "National chains like Halfords and Kwik Fit dominate Google for car servicing searches",
      "Car owners searching for a local mechanic find chain garages instead of yours",
      "Your website is outdated and doesn't list all the services you actually offer",
      "You rely on regulars and word of mouth but new customers aren't finding you",
      "Comparison sites like WhoCanFixMyCar take a cut of every job they send you",
      "You're a skilled mechanic but don't have time to manage your online presence",
    ]}
    servicesTitle="What we build for mechanics"
    services={[
      { title: "Garage Website Design", description: "Professional websites listing all your services, pricing guides, and trust signals — built to win new customers over chains." },
      { title: "Local SEO for Mechanics", description: "Rank for 'mechanic near me', 'car service Newcastle', 'MOT near me' and service-specific searches." },
      { title: "Google Business Profile", description: "Fully optimised listing with reviews, service details, and accurate opening hours for maximum local visibility." },
      { title: "Service Pages", description: "Individual pages for MOTs, servicing, brakes, clutches, diagnostics — each targeting specific customer searches." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — essential for mobile mechanics and garages drawing from a wide area." },
      { title: "Trust & Accreditation", description: "RAC, Good Garage Scheme, or manufacturer approvals prominently displayed alongside genuine customer reviews." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "mechanic near me",
      "car service Newcastle",
      "MOT near me",
      "mobile mechanic Sunderland",
      "brake repair Durham",
      "clutch replacement North East",
      "diagnostic check Gateshead",
      "cheap car service near me",
    ]}
    benefitsTitle="Why mechanics choose NE1 Web Digital"
    benefits={[
      { title: "Compete with chains locally", description: "Local SEO and genuine reviews help independent garages beat national chains in their area." },
      { title: "Service-specific targeting", description: "MOT, servicing, brakes, clutches, diagnostics — each service attracts different customer searches." },
      { title: "Mobile mechanic support", description: "Service area pages help mobile mechanics rank across every area they travel to." },
      { title: "No more comparison site fees", description: "Your own Google ranking means direct enquiries without paying per-lead fees to comparison platforms." },
    ]}
    faqTitle="Common questions from mechanics"
    faqs={[
      { question: "Can an independent garage compete with Halfords and Kwik Fit online?", answer: "Locally, yes. Car owners often prefer trusted local garages. Good local SEO and genuine reviews give you a significant advantage for area-specific searches." },
      { question: "Should I list prices on my website?", answer: "Service and MOT pricing guides help attract cost-conscious searchers. We'll advise on the right approach for your market — from fixed prices to 'from' guides." },
      { question: "How important is the MOT page?", answer: "Very. 'MOT near me' is one of the highest-volume car-related searches. A dedicated, optimised MOT page is essential for any garage website." },
      { question: "Can you help a mobile mechanic rank locally?", answer: "Absolutely. Service area pages and a well-optimised Google Business Profile help mobile mechanics rank across their full coverage area." },
    ]}
    ctaTitle="Ready to get more customers from Google?"
    ctaDescription="Stop losing customers to chains and comparison sites. Let's build you an online presence that brings car owners directly to your garage."
  />
);

export default Mechanics;
