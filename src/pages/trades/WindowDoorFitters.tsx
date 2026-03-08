import TradePageLayout from "@/components/TradePageLayout";
import { DoorOpen } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const WindowDoorFitters = () => (
  <TradePageLayout
    trade="Window & Door Fitters"
    icon={DoorOpen}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring window and door fitters more local work"
    heroDescription="Whether you install UPVC windows, composite doors, aluminium bi-folds, or conservatories, we help window and door businesses get found by homeowners ready to invest in their property."
    problemsTitle="Why most window & door fitters struggle online"
    problems={[
      "National window companies dominate Google results with massive marketing budgets",
      "Homeowners searching for local window fitters find big brands instead of your business",
      "Your website doesn't showcase your installation quality or range of products",
      "Lead generation companies sell you shared leads that rarely convert into sales",
      "You know FENSA/CERTASS registration matters to customers but it's buried on your site",
      "Your competitors have modern websites with galleries while yours looks dated",
    ]}
    servicesTitle="What we build for window & door fitters"
    services={[
      { title: "Window Fitter Website Design", description: "Professional websites with product galleries, installation photos, and clear pricing information that convert browsers into booked surveys." },
      { title: "Local SEO for Window Fitters", description: "Rank for 'window fitter near me', 'composite doors Newcastle' and product-specific searches in your area." },
      { title: "Google Business Profile", description: "Optimised listing showcasing your installations, customer reviews, and FENSA/CERTASS registration." },
      { title: "Service Area Pages", description: "Town-specific pages so homeowners find you when searching for window fitters in their exact location." },
      { title: "Product Category Pages", description: "Dedicated pages for UPVC windows, composite doors, bi-folds, conservatories — each optimised for product-specific searches." },
      { title: "Accreditation & Trust", description: "FENSA, CERTASS, and manufacturer accreditations prominently displayed to build instant customer confidence." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "window fitter near me",
      "composite doors Newcastle",
      "UPVC windows Sunderland",
      "bi-fold doors North East",
      "double glazing installer Durham",
      "conservatory builder Gateshead",
      "FENSA registered window fitter",
      "replacement windows near me",
    ]}
    benefitsTitle="Why window & door fitters choose NE1 Web Digital"
    benefits={[
      { title: "Product-focused SEO", description: "We target specific product searches — composite doors, bi-fold doors, UPVC windows — not just generic 'window fitter' terms." },
      { title: "Visual selling power", description: "Stunning installation galleries that let homeowners see your quality before they even pick up the phone." },
      { title: "Compete with nationals locally", description: "Local SEO gives independent fitters an advantage over national companies in their home area." },
      { title: "Direct leads, not shared leads", description: "Your own website generates exclusive enquiries — no more competing with 5 other companies for the same lead." },
    ]}
    faqTitle="Common questions from window & door fitters"
    faqs={[
      { question: "Can I compete with national window companies online?", answer: "Yes, locally. Homeowners increasingly prefer local, independent fitters. Local SEO and genuine reviews give you a significant advantage over national companies in your area." },
      { question: "Should I have separate pages for different products?", answer: "Absolutely. Homeowners search for specific products — 'composite doors', 'bi-fold doors', 'UPVC windows'. Dedicated pages for each product capture these specific searches." },
      { question: "How do you handle pricing on the website?", answer: "We work with you to decide the right approach — from 'prices from' guides to free survey/quote CTAs. The right approach depends on your business model and competition." },
      { question: "Can you help with lead generation beyond SEO?", answer: "Your SEO-optimised website becomes your 24/7 lead generation tool. Combined with Google Business Profile optimisation, it delivers a consistent flow of exclusive, local enquiries." },
    ]}
    ctaTitle="Ready to get more window & door installation enquiries?"
    ctaDescription="Stop paying for shared leads. Let's build you a website that brings homeowners directly to your business — exclusively."
  />
);

export default WindowDoorFitters;
