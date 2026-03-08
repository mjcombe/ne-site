import TradePageLayout from "@/components/TradePageLayout";
import { Hand } from "lucide-react";
import heroImage from "@/assets/trade-decorator.jpg";

const NailTechnicians = () => (
  <TradePageLayout
    category="beauty"
    trade="Nail Technicians"
    icon={Hand}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring nail technicians more clients"
    heroDescription="Whether you run a nail bar, offer gel extensions from a home salon, or provide mobile nail services, we help nail techs get found by clients searching for nail services in their area."
    problemsTitle="Why most nail techs struggle to grow online"
    problems={[
      "Your Instagram is full of beautiful nail photos but you're invisible on Google",
      "Clients searching 'nail technician near me' find chain salons instead of your business",
      "You rely on word of mouth and social media with no consistent lead generation strategy",
      "Your prices, availability, and services aren't easy to find online",
      "You've built a loyal client base but want to attract new customers consistently",
      "Home-based and mobile nail techs especially struggle with online visibility",
    ]}
    servicesTitle="What we build for nail technicians"
    services={[
      { title: "Nail Tech Website Design", description: "Stylish websites showcasing your nail art, service menu, and pricing — designed to convert browsers into booked appointments." },
      { title: "Local SEO for Nail Techs", description: "Rank for 'nail technician near me', 'gel nails Newcastle', 'acrylic nails' and service-specific searches locally." },
      { title: "Google Business Profile", description: "Optimised listing with nail art photos, reviews, and booking links so clients find you in local search results." },
      { title: "Service & Price Lists", description: "Clear, beautifully designed service menus showing all your treatments and prices — reducing enquiry friction." },
      { title: "Nail Art Gallery", description: "Instagram-quality galleries on your own website, driving Google traffic while showcasing your best work." },
      { title: "Online Booking", description: "Easy appointment booking so clients can secure their slot 24/7 — reducing no-shows and admin time." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "nail technician near me",
      "gel nails Newcastle",
      "acrylic nails Sunderland",
      "nail bar near me",
      "mobile nail tech Durham",
      "BIAB nails North East",
      "nail extensions Gateshead",
      "SNS nails near me",
    ]}
    benefitsTitle="Why nail technicians choose NE1 Web Digital"
    benefits={[
      { title: "Visual showcase", description: "Your nail art deserves more than Instagram. A professional website captures Google traffic while beautifully displaying your work." },
      { title: "Service-specific targeting", description: "Gel nails, acrylics, BIAB, SNS, nail art — we target the specific searches your ideal clients are making." },
      { title: "Home salon friendly", description: "We help home-based nail techs build legitimate online visibility without compromising privacy." },
      { title: "Booking-focused design", description: "Every element drives clients toward booking, with prominent CTAs and integrated online scheduling." },
    ]}
    faqTitle="Common questions from nail technicians"
    faqs={[
      { question: "I work from home — can I still rank on Google?", answer: "Yes. We can optimise your Google Business Profile and website for your service area without displaying your home address. Many successful nail techs rank well from home-based salons." },
      { question: "Isn't Instagram enough for a nail tech?", answer: "Instagram showcases your work beautifully, but doesn't capture people searching 'nail tech near me' on Google. SEO brings you clients who are actively looking to book — a completely different audience." },
      { question: "Can you help with mobile nail tech marketing?", answer: "Absolutely. We create service area pages targeting every location you travel to, helping you appear for mobile nail tech searches across your full coverage area." },
      { question: "What about trend-specific searches?", answer: "We keep your content current with trending nail search terms — BIAB, chrome nails, Russian manicure — so you capture clients searching for the latest trends." },
    ]}
    ctaTitle="Ready to book more nail clients from Google?"
    ctaDescription="Your nail art is stunning — let's make sure people searching online can find it. Build a website and SEO strategy that fills your appointment book."
  />
);

export default NailTechnicians;
