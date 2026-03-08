import TradePageLayout from "@/components/TradePageLayout";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/trade-decorator.jpg";

const BeautyTherapists = () => (
  <TradePageLayout
    category="beauty"
    icon={Sparkles}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring beauty therapists more bookings"
    heroDescription="From facials and skin treatments to aesthetics and semi-permanent makeup, we help beauty therapists and aestheticians get found by clients searching for treatments in their local area."
    problemsTitle="Why most beauty therapists struggle online"
    problems={[
      "You post regularly on Instagram but aren't appearing on Google when clients search locally",
      "Your website doesn't convey the professional, clinical quality of your treatments",
      "Clients searching for specific treatments like 'microneedling near me' can't find your business",
      "You're competing with chain beauty salons that have bigger marketing budgets",
      "Your qualifications and insurance details aren't prominently displayed online",
      "Potential clients can't easily see your treatment menu, prices, or before-and-after results",
    ]}
    servicesTitle="What we build for beauty therapists"
    services={[
      { title: "Beauty Therapist Website Design", description: "Elegant, trust-building websites that showcase your treatments, qualifications, and results — designed to convert visitors into booked clients." },
      { title: "Local SEO for Beauty", description: "Rank for treatment-specific searches like 'facial near me', 'aesthetics clinic Newcastle', and 'semi-permanent makeup' in your area." },
      { title: "Google Business Profile", description: "Optimised listing with treatment photos, client reviews, and accurate service information to attract local searches." },
      { title: "Treatment Pages", description: "Dedicated pages for each treatment you offer — facials, peels, microneedling, lip fillers — each targeting specific search terms." },
      { title: "Before & After Galleries", description: "Professional galleries showcasing treatment results — the most powerful conversion tool for beauty and aesthetics businesses." },
      { title: "Online Booking Integration", description: "Seamless booking so clients can schedule treatments directly from your website at any time of day." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "beauty therapist near me",
      "facial treatments Newcastle",
      "aesthetics clinic Sunderland",
      "microneedling North East",
      "semi permanent makeup Durham",
      "lip filler near me",
      "skin peel Gateshead",
      "anti wrinkle treatment near me",
    ]}
    benefitsTitle="Why beauty therapists choose NE1 Web Digital"
    benefits={[
      { title: "Treatment-specific targeting", description: "We create individual pages for every treatment, capturing clients searching for specific services — not just generic 'beauty salon' searches." },
      { title: "Results-driven design", description: "Before-and-after galleries and client testimonials that build confidence and drive bookings." },
      { title: "Professional credibility", description: "Your qualifications, insurance, and training displayed prominently — essential for aesthetics and advanced treatments." },
      { title: "Beyond social media", description: "Google captures clients actively searching for treatments. We make sure they find and book with you." },
    ]}
    faqTitle="Common questions from beauty therapists"
    faqs={[
      { question: "Can you help with aesthetics clinic marketing specifically?", answer: "Yes. We understand the difference between beauty therapy and medical aesthetics. We create appropriate content that builds trust for advanced treatments while complying with advertising standards." },
      { question: "How important are before-and-after photos?", answer: "Extremely. They're the single most effective way to convert website visitors into booked clients. We'll help you present them professionally and compliantly." },
      { question: "Should each treatment have its own page?", answer: "Absolutely. Clients search for specific treatments — 'lip fillers near me', 'microneedling Newcastle'. Dedicated pages capture these high-intent searches." },
      { question: "Can you help me compete with chain beauty salons?", answer: "Yes. Independent therapists often offer more personalised, higher-quality treatments. Local SEO and genuine client reviews help you communicate that advantage to potential clients." },
    ]}
    ctaTitle="Ready to fill your treatment diary from Google?"
    ctaDescription="Stop relying only on social media referrals. Let's build you an online presence that brings a consistent flow of new clients searching for your treatments."
  />
);

export default BeautyTherapists;
