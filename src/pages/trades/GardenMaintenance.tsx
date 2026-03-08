import TradePageLayout from "@/components/TradePageLayout";
import { TreePine } from "lucide-react";
import heroImage from "@/assets/trade-landscaper.jpg";

const GardenMaintenance = () => (
  <TradePageLayout
    category="services"
    icon={TreePine}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring garden maintenance businesses more regular clients"
    heroDescription="From lawn care and hedge trimming to seasonal garden tidying and ongoing maintenance contracts, we help garden maintenance businesses get found by homeowners who want their gardens kept beautiful."
    problemsTitle="Why most garden maintenance businesses struggle online"
    problems={[
      "You get seasonal work but struggle to fill the diary consistently year-round",
      "Homeowners searching for garden maintenance find national franchises before you",
      "Your business has no website or an outdated one that doesn't generate enquiries",
      "You rely on leaflet drops and Facebook posts without a long-term marketing strategy",
      "Potential customers don't know the full range of services you actually offer",
      "You want more regular maintenance contracts but only attract one-off jobs",
    ]}
    servicesTitle="What we build for garden maintenance businesses"
    services={[
      { title: "Garden Maintenance Website Design", description: "Professional websites showcasing your services, seasonal packages, and beautiful garden photos — designed to win regular contracts." },
      { title: "Local SEO for Garden Maintenance", description: "Rank for 'gardener near me', 'lawn care Newcastle', 'hedge trimming' and service-specific searches in your area." },
      { title: "Google Business Profile", description: "Optimised listing with garden photos, reviews, and service descriptions for maximum local search visibility." },
      { title: "Service Pages", description: "Individual pages for lawn care, hedge trimming, garden clearance, seasonal maintenance — each targeting specific searches." },
      { title: "Service Area Pages", description: "Location pages for every area you cover so homeowners find you when searching locally." },
      { title: "Contract-Focused CTAs", description: "Website design that converts one-off enquiries into regular weekly or fortnightly maintenance agreements." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "gardener near me",
      "garden maintenance Newcastle",
      "lawn care service Sunderland",
      "hedge trimming near me",
      "garden clearance Durham",
      "regular gardener Gateshead",
      "lawn mowing service near me",
      "tree pruning North East",
    ]}
    benefitsTitle="Why garden maintenance businesses choose NE1 Web Digital"
    benefits={[
      { title: "Regular contract generation", description: "Your website is designed to convert browsers into ongoing maintenance clients — not just one-off jobs." },
      { title: "Seasonal targeting", description: "Content targeting seasonal searches — spring clean-ups, autumn clearances, winter pruning — keeping enquiries flowing year-round." },
      { title: "Service breadth showcase", description: "Lawn care, hedges, borders, pruning, clearances — we ensure customers know everything you offer." },
      { title: "Local area coverage", description: "Service area pages help you rank in every neighbourhood and town you're willing to travel to." },
    ]}
    faqTitle="Common questions from garden maintenance businesses"
    faqs={[
      { question: "Can a website help me get regular contracts?", answer: "Yes. A well-designed website with clear maintenance packages and regular service options converts one-off searchers into ongoing clients. We focus your CTAs on building long-term relationships." },
      { question: "How do you handle seasonal demand changes?", answer: "We create seasonal content that targets different searches throughout the year — spring clean-ups, summer lawn care, autumn clearances — keeping your enquiry pipeline active year-round." },
      { question: "Should I offer fixed-price packages?", answer: "Packages work well for garden maintenance. We can display regular maintenance plans, one-off service prices, and seasonal packages clearly on your website." },
      { question: "Can you help me compete with national gardening franchises?", answer: "Yes. Local customers prefer local gardeners. Good SEO and genuine reviews from neighbours give you a strong advantage over impersonal national companies." },
    ]}
    ctaTitle="Ready to grow your garden maintenance business from Google?"
    ctaDescription="Build a website that brings regular maintenance clients to your business — consistently, year-round, and without relying on leaflet drops."
  />
);

export default GardenMaintenance;
