import TradePageLayout from "@/components/TradePageLayout";
import { PawPrint } from "lucide-react";

const PetServices = () => (
  <TradePageLayout
    trade="Pet Services"
    icon={PawPrint}
    heroTitle="Websites & SEO for dog groomers, pet shops and pet service businesses"
    heroDescription="From dog groomers and pet shops to dog trainers and boarding kennels — we help pet service businesses get found by pet owners searching on Google."
    problemsTitle="Why most pet businesses struggle to get found online"
    problems={[
      "Pet owners searching for groomers or kennels near them find competitors or large chains instead",
      "You rely on Facebook groups and word of mouth but don't have a professional website",
      "Your Google listing is incomplete and doesn't show your services, prices or availability",
      "Competitors with less experience but better online presence are winning your potential customers",
      "You're listed on directories but they don't generate consistent, quality enquiries",
      "You know a website would help grow your business but don't have time to set one up",
    ]}
    servicesTitle="What we build for pet service businesses"
    services={[
      { title: "Pet Business Website Design", description: "Friendly, trust-building websites for dog groomers, pet shops, dog trainers and boarding kennels — designed to win pet owners' confidence and generate bookings." },
      { title: "Local SEO", description: "Rank for searches like 'dog groomer near me', 'pet shop Newcastle', 'dog trainer Middlesbrough' and every term pet owners search." },
      { title: "Google Business Profile", description: "Optimised Google listing with photos of your facilities, reviews from happy pet owners and accurate service information." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — dog groomer in North Shields, boarding kennels in Durham, pet shop in Sunderland." },
      { title: "Service & Pricing Pages", description: "Clear, well-organised service and pricing pages that answer pet owners' questions before they call." },
      { title: "Booking & Enquiry Forms", description: "Easy booking forms for grooming appointments, training sessions and boarding stays." },
    ]}
    searchTermsTitle="Searches pet owners are making right now"
    searchTerms={[
      "dog groomer near me",
      "pet shop Newcastle",
      "dog trainer North East",
      "boarding kennels Middlesbrough",
      "puppy grooming Teesside",
      "dog walking near me",
      "pet supplies North Tyneside",
      "cattery Sunderland",
    ]}
    benefitsTitle="Why pet businesses choose NE1 Digital"
    benefits={[
      { title: "Pet owner trust", description: "Pet owners are protective. We build websites that showcase your qualifications, facilities and happy customer testimonials to win their trust." },
      { title: "Service-specific targeting", description: "We target specific services — puppy grooming, dog training classes, luxury boarding — not just generic pet terms." },
      { title: "Local dominance", description: "Service area pages ensure you rank in every area you serve, capturing pet owners searching nearby." },
      { title: "Direct bookings", description: "Your own website generates bookings directly — no directory fees or commission-based referrals." },
    ]}
    faqTitle="Common questions from pet businesses"
    faqs={[
      { question: "Which pet businesses do you work with?", answer: "We work with dog groomers, pet shops, dog trainers, boarding kennels, catteries, dog walkers and other pet service providers." },
      { question: "How important is a website for a dog grooming business?", answer: "Very important. Most pet owners search Google when looking for a groomer. A professional website with photos, pricing and reviews is often what convinces them to book." },
      { question: "Can you help with online booking?", answer: "Yes. We integrate booking forms for grooming appointments, training sessions, boarding stays and other services directly into your website." },
      { question: "How long until I see results?", answer: "Most pet businesses see improved local rankings within 4-8 weeks, with bookings building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more pet owners from Google?"
    ctaDescription="Book a free call and we'll show you how to get more bookings, enquiries and customers for your pet business."
  />
);

export default PetServices;
