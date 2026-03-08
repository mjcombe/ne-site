import TradePageLayout from "@/components/TradePageLayout";
import { Heart } from "lucide-react";
import heroImage from "@/assets/trade-decorator.jpg";

const MassageTherapists = () => (
  <TradePageLayout
    trade="Massage Therapists & Spa Services"
    icon={Heart}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring massage therapists more clients"
    heroDescription="From sports massage and deep tissue to relaxation and spa treatments, we help massage therapists and wellness businesses get found by clients searching for therapeutic and relaxation services locally."
    problemsTitle="Why most massage therapists struggle online"
    problems={[
      "You're qualified and experienced but potential clients can't find you on Google",
      "Generic spa directories and aggregator sites outrank your personal website",
      "Clients searching for specific massage types can't find a specialist in their area",
      "Your website doesn't convey the professionalism and therapeutic value of your services",
      "You rely on existing clients and referrals with no strategy for attracting new ones",
      "You offer mobile or home-based massage but struggle to appear in local searches",
    ]}
    servicesTitle="What we build for massage therapists"
    services={[
      { title: "Massage Therapist Website Design", description: "Calming, professional websites that communicate your expertise, qualifications, and treatment offerings — designed to drive bookings." },
      { title: "Local SEO for Massage", description: "Rank for 'massage therapist near me', 'sports massage Newcastle', 'deep tissue massage' and therapy-specific searches." },
      { title: "Google Business Profile", description: "Optimised listing with treatment descriptions, client reviews, and direct booking links for maximum local visibility." },
      { title: "Treatment Pages", description: "Individual pages for each massage type — sports, deep tissue, Swedish, prenatal — targeting specific client searches." },
      { title: "Qualification Display", description: "Your ITEC, VTCT, or other qualifications prominently displayed alongside insurance details to build client trust." },
      { title: "Online Booking", description: "Integrated booking system allowing clients to see availability and book treatments at any time." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "massage therapist near me",
      "sports massage Newcastle",
      "deep tissue massage Sunderland",
      "relaxation massage North East",
      "prenatal massage Durham",
      "mobile massage therapist near me",
      "Thai massage Gateshead",
      "remedial massage near me",
    ]}
    benefitsTitle="Why massage therapists choose NE1 Web Digital"
    benefits={[
      { title: "Therapy-specific targeting", description: "Sports massage, deep tissue, Swedish, prenatal — we target the specific searches your ideal clients are making." },
      { title: "Professional positioning", description: "A well-designed website with qualifications and testimonials positions you as a trusted professional, not just another listing." },
      { title: "Mobile therapist support", description: "Service area pages help mobile massage therapists rank across every location they travel to." },
      { title: "Consistent client flow", description: "SEO brings a steady stream of new clients searching for massage — reducing reliance on referrals alone." },
    ]}
    faqTitle="Common questions from massage therapists"
    faqs={[
      { question: "Is SEO worth it for a massage therapist?", answer: "'Massage near me' searches are huge and growing. Clients increasingly search Google to find and book massage therapists. Good local SEO can fill your diary with new clients consistently." },
      { question: "Can you help with sports massage marketing specifically?", answer: "Yes. Sports massage has very specific search terms and a different target audience. We create dedicated content targeting athletes, runners, gym-goers, and people with specific injuries." },
      { question: "I'm mobile — can I still rank?", answer: "Absolutely. We set up your Google Business Profile as a service-area business and create location pages for every area you cover — without displaying your home address." },
      { question: "How do you handle the clinical vs relaxation difference?", answer: "We create separate content streams for therapeutic/clinical massage and relaxation/spa massage — each targeting different client needs and search terms." },
    ]}
    ctaTitle="Ready to fill your massage diary from Google?"
    ctaDescription="Build a professional online presence that brings new massage clients to you consistently — beyond referrals and social media."
  />
);

export default MassageTherapists;
