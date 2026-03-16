import TradePageLayout from "@/components/TradePageLayout";
import { Gem } from "lucide-react";

const WeddingServices = () => (
  <TradePageLayout
    trade="Wedding Services"
    icon={Gem}
    heroTitle="Websites & SEO for wedding venues, planners and wedding businesses"
    heroDescription="From wedding venues and planners to bridal shops and cake makers — we help wedding businesses get found by couples searching on Google for their perfect day."
    problemsTitle="Why most wedding businesses struggle to get found online"
    problems={[
      "Couples searching for wedding services in your area find competitors or large directory sites instead",
      "You rely on wedding fairs and social media but don't have a professional website to showcase your work",
      "Your Google listing is incomplete and doesn't show your venue, portfolio or availability",
      "Competitors with less experience but better online presence are winning your potential bookings",
      "You're listed on wedding directories but they charge commission or don't generate consistent leads",
      "You know a website would help grow your business but don't have time to set one up",
    ]}
    servicesTitle="What we build for wedding businesses"
    services={[
      { title: "Wedding Business Website Design", description: "Beautiful, aspirational websites for wedding venues, planners and suppliers — designed to inspire couples and generate bookings." },
      { title: "Local SEO", description: "Rank for searches like 'wedding venue near me', 'wedding planner Newcastle', 'bridal shop Middlesbrough' and every term couples search." },
      { title: "Google Business Profile", description: "Optimised Google listing with stunning photos, reviews from happy couples and accurate service information." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — wedding venue in Durham, wedding planner in Sunderland, bridal shop in Gateshead." },
      { title: "Portfolio & Gallery Pages", description: "Stunning galleries and real wedding features that showcase your work and inspire couples to book." },
      { title: "Booking & Enquiry Forms", description: "Easy enquiry forms for couples to check availability, request brochures and book consultations." },
    ]}
    searchTermsTitle="Searches couples are making right now"
    searchTerms={[
      "wedding venue near me",
      "wedding planner Newcastle",
      "bridal shop North East",
      "wedding photographer Middlesbrough",
      "wedding cake maker Durham",
      "wedding flowers Sunderland",
      "wedding DJ North Tyneside",
      "wedding venues Northumberland",
    ]}
    benefitsTitle="Why wedding businesses choose NE1 Digital"
    benefits={[
      { title: "Visual storytelling", description: "Weddings are emotional. We build websites with stunning imagery and real wedding stories that inspire couples to enquire." },
      { title: "Service-specific targeting", description: "We target specific services — wedding photography, venue hire, bridal alterations — not just generic wedding terms." },
      { title: "Local dominance", description: "Service area pages ensure you rank in every area couples search, from Northumberland to Teesside." },
      { title: "Direct bookings", description: "Your own website generates bookings directly — no directory fees or commission-based referrals." },
    ]}
    faqTitle="Common questions from wedding businesses"
    faqs={[
      { question: "Which wedding businesses do you work with?", answer: "We work with wedding venues, wedding planners, photographers, florists, cake makers, bridal shops, DJs, caterers and other wedding service providers." },
      { question: "How important is a website for a wedding business?", answer: "Essential. Couples research extensively online before choosing suppliers. A beautiful website with galleries, testimonials and clear pricing is often what converts them from browsers to bookers." },
      { question: "Can you help with online booking?", answer: "Yes. We integrate enquiry forms, availability checks and booking request systems directly into your website." },
      { question: "How long until I see results?", answer: "Most wedding businesses see improved local rankings within 4-8 weeks, with bookings building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more couples from Google?"
    ctaDescription="Book a free call and we'll show you how to get more bookings, enquiries and customers for your wedding business."
  />
);

export default WeddingServices;
