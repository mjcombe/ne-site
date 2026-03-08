import TradePageLayout from "@/components/TradePageLayout";
import { Grid3X3 } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const Tilers = () => (
  <TradePageLayout
    trade="Tilers"
    icon={Grid3X3}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring tilers more local work"
    heroDescription="From bathroom tiling to kitchen splashbacks and full floor installations, we help tiling businesses get found by homeowners searching for quality tilers in their area."
    problemsTitle="Why most tilers struggle to get found online"
    problems={[
      "Your tiling work speaks for itself but potential customers can't find you on Google",
      "You rely on referrals and don't have an online presence to showcase your portfolio",
      "Homeowners searching for tilers in your area find national directories instead of you",
      "Your competitors have better websites and are winning the jobs you should be getting",
      "You don't have time to manage social media or update a website regularly",
      "You've considered SEO but aren't sure it's worth the investment for a tiling business",
    ]}
    servicesTitle="What we build for tilers"
    services={[
      { title: "Tiler Website Design", description: "Stunning portfolio websites that showcase your bathroom, kitchen, and floor tiling work with high-quality image galleries." },
      { title: "Local SEO for Tilers", description: "Rank for searches like 'tiler near me', 'bathroom tiler Newcastle' and 'floor tiling specialist' in your local area." },
      { title: "Google Business Profile", description: "Optimised Google listing with photos of completed tiling projects, reviews, and accurate service descriptions." },
      { title: "Service Area Pages", description: "Individual pages targeting every area you cover — 'tiler in Durham', 'tiler in Sunderland' and everywhere between." },
      { title: "Portfolio Galleries", description: "Beautifully organised photo galleries sorted by project type — bathrooms, kitchens, floors, outdoor tiling." },
      { title: "Lead Generation", description: "Quote request forms and clear calls-to-action designed specifically for tiling enquiries." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "tiler near me",
      "bathroom tiler Newcastle",
      "kitchen tiling Sunderland",
      "floor tiler North East",
      "wall tiling specialist Durham",
      "mosaic tiler near me",
      "wet room tiler Gateshead",
      "outdoor tiling specialist",
    ]}
    benefitsTitle="Why tilers choose NE1 Web Digital"
    benefits={[
      { title: "Visual-first design", description: "Tiling is a visual trade. We build websites that let your finished work do the selling with stunning photo galleries." },
      { title: "Niche keyword targeting", description: "We target specific searches — bathroom tiling, floor tiling, mosaic work — not just generic 'tiler' terms." },
      { title: "Local dominance", description: "Service area pages ensure you rank in every town you work in, capturing local search traffic across your coverage." },
      { title: "Real ROI tracking", description: "Know exactly how many quote requests and phone calls your website generates each month." },
    ]}
    faqTitle="Common questions from tilers"
    faqs={[
      { question: "Is SEO worth it for a tiling business?", answer: "Absolutely. 'Tiler near me' searches have grown significantly year on year. Most homeowners now search Google before choosing a tiler, and ranking well brings consistent, high-quality enquiries." },
      { question: "How important are photos for a tiling website?", answer: "Extremely important. Tiling is one of the most visual trades. Good photos of your completed projects are the single most effective way to convert website visitors into customers." },
      { question: "Can you target specific types of tiling work?", answer: "Yes. We create dedicated content for bathroom tiling, kitchen tiling, floor tiling, wet rooms, outdoor tiling — whatever services you offer and want more work in." },
      { question: "How long until I see results?", answer: "Most tilers see improved rankings within 6-8 weeks, with enquiry levels building over 3-6 months as your local authority grows." },
    ]}
    ctaTitle="Ready to get more tiling work from Google?"
    ctaDescription="Let's build you a professional online presence that brings tiling enquiries directly to your phone — consistently and predictably."
  />
);

export default Tilers;
