import TradePageLayout from "@/components/TradePageLayout";
import { Car } from "lucide-react";

const Automotive = () => (
  <TradePageLayout
    trade="Automotive Businesses"
    icon={Car}
    heroTitle="Websites & SEO for garages, mechanics and automotive businesses"
    heroDescription="From MOT centres and mobile mechanics to car dealers, car detailing specialists, vehicle wrap companies, tyre specialists and driving instructors — we help automotive businesses get found on Google and drive more customers through the door."
    problemsTitle="Why most automotive businesses struggle online"
    problems={[
      "Customers searching for garages or mechanics near them can't find your business on Google",
      "You rely on passing trade or word of mouth instead of generating enquiries online",
      "National directories and franchise garages dominate the search results in your area",
      "Your website is outdated and doesn't showcase your services or build trust",
      "You're paying for advertising but not seeing a consistent return on investment",
      "You know an online presence would help but haven't had time to set one up properly",
    ]}
    servicesTitle="What we build for automotive businesses"
    services={[
      { title: "Automotive Website Design", description: "Professional websites for garages, MOT centres, car dealers, detailing businesses, vehicle wrap companies and driving instructors — built to convert visitors into customers." },
      { title: "Local SEO", description: "Rank for searches like 'garage near me', 'MOT centre Newcastle', 'car detailing Middlesbrough' and every variation your customers search for." },
      { title: "Google Business Profile", description: "Optimised Google listing with photos, reviews, opening hours and services so you stand out when customers search locally." },
      { title: "Service Area Pages", description: "Location pages targeting every area you cover — mobile mechanics in Sunderland, tyre fitters in Gateshead, driving instructors in Durham." },
      { title: "Review Management", description: "Strategies to collect and showcase genuine customer reviews that build trust and win new business." },
      { title: "Online Booking Integration", description: "MOT booking forms, service enquiry forms and click-to-call buttons that make it easy for customers to get in touch." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "garage near me",
      "MOT centre Newcastle",
      "mobile mechanic North East",
      "car detailing Middlesbrough",
      "vehicle wrap near me",
      "tyre fitting Sunderland",
      "driving instructor North Tyneside",
      "used car dealer Teesside",
    ]}
    benefitsTitle="Why automotive businesses choose NE1 Digital"
    benefits={[
      { title: "Industry-specific approach", description: "Whether you're a garage, car dealer, detailing specialist or driving instructor, we understand your customers and how they search." },
      { title: "Local visibility", description: "Service area pages help you rank in every area you serve, from MOT bookings to mobile mechanic callouts." },
      { title: "Trust-building design", description: "Professional websites that showcase your credentials, customer reviews and services to build confidence before customers even call." },
      { title: "Measurable results", description: "Track every phone call, form submission and booking so you know exactly how many customers your website generates." },
    ]}
    faqTitle="Common questions from automotive businesses"
    faqs={[
      { question: "Which automotive businesses do you work with?", answer: "We work with garages, MOT centres, mobile mechanics, car dealers, car detailing businesses, vehicle wrap companies, tyre specialists, driving instructors and more." },
      { question: "Can you help with online booking?", answer: "Yes. We integrate booking forms, enquiry forms and click-to-call functionality so customers can book MOTs, request quotes or get in touch easily." },
      { question: "How long until I see results?", answer: "Most automotive businesses see improved rankings within 4-8 weeks, with customer enquiries building steadily over 3-6 months." },
      { question: "Do you work with car dealers?", answer: "Absolutely. We build websites for independent car dealers with vehicle listings, finance calculators and lead generation — all optimised for local search." },
    ]}
    ctaTitle="Ready to drive more customers to your automotive business?"
    ctaDescription="Book a free call and we'll show you exactly how to get more bookings, enquiries and customers from Google."
  />
);

export default Automotive;
