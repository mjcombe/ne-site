import TradePageLayout from "@/components/TradePageLayout";
import { Brush } from "lucide-react";

const MobileBeauty = () => (
  <TradePageLayout
    category="beauty"
    trade="Mobile Beauty & Makeup Artists"
    icon={Brush}
    heroTitle="Websites & SEO that bring mobile beauty and makeup artists more bookings"
    heroDescription="Whether you specialise in bridal makeup, event styling, or mobile beauty treatments, we help mobile beauty professionals get found by clients searching for at-home and on-location services."
    problemsTitle="Why most mobile beauty pros struggle online"
    problems={[
      "You get most clients through Instagram DMs but have no Google search visibility",
      "Brides and event clients searching for makeup artists can't find your website",
      "You cover a wide area but don't rank for beauty searches in any specific location",
      "Your portfolio is scattered across social media with no professional central showcase",
      "You're competing with salon-based businesses that have physical Google listings",
      "Potential clients can't easily see your services, pricing, or availability online",
    ]}
    servicesTitle="What we build for mobile beauty professionals"
    services={[
      { title: "Mobile Beauty Website Design", description: "Elegant portfolio websites that showcase your work, services, and pricing — with easy contact and booking functionality." },
      { title: "Local SEO for Mobile Beauty", description: "Rank for 'mobile makeup artist near me', 'bridal hair and makeup Newcastle' and event-specific searches in your coverage area." },
      { title: "Google Business Profile", description: "Service-area based Google listing that helps you appear in searches across every location you travel to." },
      { title: "Service Area Coverage", description: "Individual location pages for every town and area you cover — maximising your visibility across your full travel range." },
      { title: "Portfolio & Lookbook", description: "Professional galleries organised by service type — bridal, editorial, events, everyday glam — that sell your skills." },
      { title: "Enquiry & Booking System", description: "Custom enquiry forms for weddings and events, plus easy booking for regular mobile beauty treatments." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "mobile makeup artist near me",
      "bridal makeup Newcastle",
      "wedding hair and makeup North East",
      "mobile beauty therapist Sunderland",
      "prom makeup artist Durham",
      "at home beauty treatments near me",
      "event makeup artist Gateshead",
      "mobile spray tan near me",
    ]}
    benefitsTitle="Why mobile beauty pros choose NE1 Web Digital"
    benefits={[
      { title: "Service-area SEO", description: "As a mobile business, you need to rank across multiple locations. We build pages targeting every area you cover." },
      { title: "Event & bridal focus", description: "We target high-value searches like bridal makeup and event styling — where clients are willing to pay premium prices." },
      { title: "Professional portfolio", description: "A dedicated website gives your work a permanent, professional home beyond social media feeds." },
      { title: "Enquiry management", description: "Custom contact forms for weddings, events, and regular treatments help you manage different types of bookings." },
    ]}
    faqTitle="Common questions from mobile beauty professionals"
    faqs={[
      { question: "Can I rank on Google without a physical business address?", answer: "Yes. Google Business Profile allows service-area businesses to appear in searches without showing a home address. We optimise this specifically for mobile beauty professionals." },
      { question: "How do I target bridal clients specifically?", answer: "We create dedicated wedding makeup and bridal beauty pages optimised for bridal searches — helping you capture this high-value market segment through Google." },
      { question: "I cover a large area — how does that work for SEO?", answer: "We build individual location pages for every area you travel to. This helps you rank in each location rather than just your home base." },
      { question: "Should I still invest in Instagram alongside a website?", answer: "Absolutely — they complement each other. Instagram showcases your work and builds community. Your website captures Google search traffic from clients actively looking to book. Together they're powerful." },
    ]}
    ctaTitle="Ready to book more mobile beauty clients from Google?"
    ctaDescription="Build a professional online presence that brings bridal, event, and regular beauty clients directly to you — beyond Instagram DMs."
  />
);

export default MobileBeauty;
