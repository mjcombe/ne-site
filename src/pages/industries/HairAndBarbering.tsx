import TradePageLayout from "@/components/TradePageLayout";
import { Scissors } from "lucide-react";

const HairAndBarbering = () => (
  <TradePageLayout
    trade="Hair & Barbering"
    icon={Scissors}
    heroTitle="Websites & SEO for barber shops, hair salons and mobile hairdressers"
    heroDescription="From barber shops and hair salons to mobile hairdressers and colour specialists — we help hair businesses get found by clients searching on Google."
    problemsTitle="Why most hair businesses struggle to get found online"
    problems={[
      "Clients searching for barbers or hair salons near them find competitors instead",
      "You rely on Instagram and walk-ins but don't have a professional website to build credibility",
      "Your Google listing is incomplete and doesn't show your services, prices or opening hours",
      "Competitors with less talent but better online presence are winning your potential clients",
      "You're listed on booking platforms that take commission from every appointment",
      "You know a website would help grow your client base but don't have time to set one up",
    ]}
    servicesTitle="What we build for hair and barbering businesses"
    services={[
      { title: "Hair Business Website Design", description: "Stylish, on-brand websites for barber shops, hair salons and mobile hairdressers — designed to showcase your work and generate bookings." },
      { title: "Local SEO", description: "Rank for searches like 'barber near me', 'hair salon Newcastle', 'mobile hairdresser Middlesbrough' and every term clients search." },
      { title: "Google Business Profile", description: "Optimised Google listing with photos of your work, client reviews and accurate service and pricing information." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — barber in Durham, hair salon in Sunderland, mobile hairdresser in Gateshead." },
      { title: "Service & Pricing Pages", description: "Clear, well-organised service menus and pricing pages that answer clients' questions before they call." },
      { title: "Booking Integration", description: "Online booking systems so clients can book appointments directly from your website, 24/7." },
    ]}
    searchTermsTitle="Searches clients are making right now"
    searchTerms={[
      "barber near me",
      "hair salon Newcastle",
      "mobile hairdresser North East",
      "best barber Middlesbrough",
      "hair colourist Durham",
      "balayage Sunderland",
      "fade haircut North Tyneside",
      "hair extensions near me",
    ]}
    benefitsTitle="Why hair businesses choose NE1 Digital"
    benefits={[
      { title: "Visual showcase", description: "Hair is visual. We build websites with stunning galleries of your work that convert browsers into booked clients." },
      { title: "Service-specific targeting", description: "We target specific services — fades, balayage, hair extensions, bridal hair — not just generic salon terms." },
      { title: "Local dominance", description: "Service area pages ensure you rank in every area you serve, capturing clients searching nearby." },
      { title: "Direct bookings", description: "Your own website generates bookings directly — no commission-based platforms eating into your profits." },
    ]}
    faqTitle="Common questions from hair businesses"
    faqs={[
      { question: "Which hair businesses do you work with?", answer: "We work with barber shops, hair salons, mobile hairdressers, hair extension specialists, colour experts and other hair professionals." },
      { question: "Do I really need a website if I have Instagram?", answer: "Yes. Instagram is great for showcasing work, but it doesn't rank on Google. When someone searches 'barber near me', Google shows websites, not Instagram profiles. You need both." },
      { question: "Can you integrate online booking?", answer: "Yes. We integrate booking systems so clients can see availability and book appointments directly from your website." },
      { question: "How long until I see results?", answer: "Most hair businesses see improved local rankings within 4-8 weeks, with new client bookings building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more clients from Google?"
    ctaDescription="Book a free call and we'll show you how to get more bookings, enquiries and clients for your hair business."
  />
);

export default HairAndBarbering;
