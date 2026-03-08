import TradePageLayout from "@/components/TradePageLayout";
import { Scissors } from "lucide-react";
import heroImage from "@/assets/trade-decorator.jpg";

const HairSalons = () => (
  <TradePageLayout
    category="beauty"
    trade="Hair Salons & Barbers"
    icon={Scissors}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring salons and barbers more bookings"
    heroDescription="Whether you run a high-street salon, a barbershop, or offer mobile hairdressing, we help hair businesses get found by local customers searching for cuts, colours, and styling near them."
    problemsTitle="Why most salons struggle to grow online"
    problems={[
      "You rely on walk-ins and Instagram but aren't showing up on Google for local searches",
      "Your website is outdated and doesn't reflect the quality of your salon experience",
      "Customers searching 'hair salon near me' or 'barber near me' find your competitors first",
      "You're paying for social media ads but not investing in long-term search visibility",
      "Your booking system isn't prominent on your website, so you lose potential customers",
      "New clients can't easily find your prices, services, or opening hours online",
    ]}
    servicesTitle="What we build for hair businesses"
    services={[
      { title: "Salon Website Design", description: "Beautiful, on-brand websites that showcase your salon's style, team, services, and pricing — designed to drive bookings." },
      { title: "Local SEO for Salons", description: "Rank for 'hair salon near me', 'barber Newcastle', 'balayage specialist' and style-specific searches in your area." },
      { title: "Google Business Profile", description: "Optimised listing with salon photos, reviews, opening hours, and direct booking links to attract walk-in and search customers." },
      { title: "Service & Pricing Pages", description: "Clear, well-organised service menus and pricing pages that answer customer questions before they call." },
      { title: "Online Booking Integration", description: "Seamless booking system integration so customers can book appointments directly from your website or Google listing." },
      { title: "Style Gallery & Portfolio", description: "Instagram-quality galleries on your website showcasing cuts, colours, and transformations that attract new clients." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "hair salon near me",
      "barber near me",
      "balayage specialist Newcastle",
      "mens haircut Sunderland",
      "hair colourist North East",
      "bridal hair stylist Durham",
      "mobile hairdresser near me",
      "best barber Gateshead",
    ]}
    benefitsTitle="Why salons & barbers choose NE1 Web Digital"
    benefits={[
      { title: "Brand-first design", description: "Your website reflects your salon's unique style and atmosphere — not a generic template that could belong to any business." },
      { title: "Booking-focused experience", description: "Every page drives customers toward booking — with prominent CTAs, online booking, and easy phone access." },
      { title: "Style-specific targeting", description: "We target specific searches — balayage, fades, bridal hair — capturing customers looking for your exact specialities." },
      { title: "Beyond social media", description: "Instagram is great but Google captures customers actively searching for a salon. We make sure they find yours." },
    ]}
    faqTitle="Common questions from salon owners"
    faqs={[
      { question: "Isn't Instagram enough for a salon?", answer: "Instagram is great for showcasing work, but it doesn't capture people actively searching 'hair salon near me'. Google SEO brings you customers who are ready to book right now — it's a different, highly valuable audience." },
      { question: "Can you integrate my booking system?", answer: "Yes. We integrate with popular salon booking platforms like Fresha, Booksy, and Timely — or add a simple booking form if you prefer." },
      { question: "How do you handle multiple stylists/services?", answer: "We create organised service pages and can feature individual stylist profiles — helping customers find exactly the service and person they're looking for." },
      { question: "Do barber shops benefit from SEO?", answer: "Absolutely. 'Barber near me' is one of the most searched local service terms. A well-optimised Google presence can keep your chairs full without relying solely on walk-ins." },
    ]}
    ctaTitle="Ready to fill your appointment book from Google?"
    ctaDescription="Stop relying only on social media and walk-ins. Let's build you a website and SEO strategy that brings a steady stream of new clients through your door."
  />
);

export default HairSalons;
