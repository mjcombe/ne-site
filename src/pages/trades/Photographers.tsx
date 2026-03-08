import TradePageLayout from "@/components/TradePageLayout";
import { Camera } from "lucide-react";

const Photographers = () => (
  <TradePageLayout
    category="services"
    trade="Photographers"
    icon={Camera}
    heroTitle="Websites & SEO that bring photographers more bookings"
    heroDescription="Whether you specialise in weddings, portraits, commercial, or event photography, we help photographers get found by clients searching for professional photography services in their area."
    problemsTitle="Why most photographers struggle to get found"
    problems={[
      "Your portfolio is stunning but clients searching locally can't find your website",
      "Instagram showcases your work but doesn't capture Google search traffic",
      "Wedding clients searching for photographers in your area find competitors first",
      "National photography directories rank above your personal website",
      "You rely on referrals and social media without a consistent lead generation strategy",
      "Your current website is beautiful but wasn't built with SEO in mind",
    ]}
    servicesTitle="What we build for photographers"
    services={[
      { title: "Photography Website Design", description: "Stunning portfolio websites that load fast, display beautifully on all devices, and are built for both visual impact and search engine visibility." },
      { title: "Local SEO for Photographers", description: "Rank for 'wedding photographer near me', 'portrait photographer Newcastle' and genre-specific searches in your area." },
      { title: "Google Business Profile", description: "Optimised listing with portfolio samples, client reviews, and service descriptions for maximum local search visibility." },
      { title: "Genre-Specific Pages", description: "Dedicated pages for weddings, portraits, commercial, events — each optimised for genre-specific search terms." },
      { title: "Portfolio Optimisation", description: "Fast-loading, SEO-optimised image galleries that look stunning and help Google understand and rank your content." },
      { title: "Enquiry & Booking System", description: "Custom enquiry forms for weddings and events, with availability calendars and package information." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "wedding photographer near me",
      "portrait photographer Newcastle",
      "commercial photographer Sunderland",
      "family photographer Durham",
      "headshot photographer North East",
      "event photographer Gateshead",
      "newborn photographer near me",
      "product photographer North East",
    ]}
    benefitsTitle="Why photographers choose NE1 Web Digital"
    benefits={[
      { title: "Visual + SEO balance", description: "We build websites that are as stunning as your photography — but with the technical SEO foundation to actually get found." },
      { title: "Genre targeting", description: "Wedding, portrait, commercial, event — each genre gets dedicated content targeting specific client searches." },
      { title: "Image optimisation", description: "Your high-res images displayed beautifully without sacrificing page speed — critical for both user experience and Google rankings." },
      { title: "Beyond portfolio sites", description: "Most photography websites are beautiful but invisible. We make yours beautiful AND discoverable." },
    ]}
    faqTitle="Common questions from photographers"
    faqs={[
      { question: "Can a photography website be fast AND image-heavy?", answer: "Yes. We use modern image optimisation, lazy loading, and responsive images to display your portfolio beautifully while maintaining fast page speeds — essential for both SEO and user experience." },
      { question: "Should I have separate pages for different types of photography?", answer: "Absolutely. Clients search for specific genres — 'wedding photographer', 'headshot photographer', 'product photographer'. Dedicated pages capture these different searches." },
      { question: "How do I compete with photography directory sites?", answer: "Local SEO gives you an advantage. Your own optimised website with genuine local content and reviews can outrank directory listings in your area." },
      { question: "Is SEO worth it for an established photographer?", answer: "Yes. Even established photographers benefit from SEO. Referrals are great but unpredictable. Google brings a consistent stream of new clients actively searching for photography services." },
    ]}
    ctaTitle="Ready to book more photography clients from Google?"
    ctaDescription="Build a portfolio website that's not just beautiful — but actually gets found by clients searching for photographers in your area."
  />
);

export default Photographers;
