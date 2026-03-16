import TradePageLayout from "@/components/TradePageLayout";
import { Dumbbell } from "lucide-react";

const SportsAndFitness = () => (
  <TradePageLayout
    trade="Sports & Fitness"
    icon={Dumbbell}
    heroTitle="Websites & SEO for gyms, personal trainers and fitness businesses"
    heroDescription="From gyms and personal trainers to yoga studios and martial arts clubs — we help sports and fitness businesses get found by people searching on Google."
    problemsTitle="Why most fitness businesses struggle to get found online"
    problems={[
      "People searching for gyms or trainers in your area find competitors or national chains instead",
      "You rely on social media and word of mouth but don't have a professional website",
      "Your Google listing is incomplete and doesn't show your classes, memberships or facilities",
      "Competitors with less experience but better online presence are winning your potential members",
      "You're listed on directories but they don't generate consistent, quality enquiries",
      "You know a website would help grow your business but don't have time to set one up",
    ]}
    servicesTitle="What we build for fitness businesses"
    services={[
      { title: "Fitness Business Website Design", description: "Energetic, motivating websites for gyms, personal trainers and fitness studios — designed to convert visitors into members and clients." },
      { title: "Local SEO", description: "Rank for searches like 'gym near me', 'personal trainer Newcastle', 'yoga studio Middlesbrough' and every term potential members search." },
      { title: "Google Business Profile", description: "Optimised Google listing with photos of your facilities, member reviews and accurate class/membership information." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — gym in Durham, personal trainer in Sunderland, fitness classes in Gateshead." },
      { title: "Class & Membership Pages", description: "Clear pages for classes, membership options and personal training packages so visitors know exactly what's available." },
      { title: "Booking & Sign-up Forms", description: "Easy booking forms for trial sessions, class bookings and membership sign-ups." },
    ]}
    searchTermsTitle="Searches people are making right now"
    searchTerms={[
      "gym near me",
      "personal trainer Newcastle",
      "yoga studio North East",
      "martial arts Middlesbrough",
      "fitness classes Durham",
      "CrossFit Sunderland",
      "boxing gym North Tyneside",
      "dance classes near me",
    ]}
    benefitsTitle="Why fitness businesses choose NE1 Digital"
    benefits={[
      { title: "Member conversion", description: "We build websites that showcase your facilities, classes and success stories to convert browsers into paying members." },
      { title: "Service-specific targeting", description: "We target specific offerings — personal training, yoga classes, boxing sessions — not just generic fitness terms." },
      { title: "Local dominance", description: "Service area pages ensure you rank in every area you serve, capturing people searching nearby." },
      { title: "Direct sign-ups", description: "Your own website generates sign-ups and bookings directly — no directory fees or commission." },
    ]}
    faqTitle="Common questions from fitness businesses"
    faqs={[
      { question: "Which fitness businesses do you work with?", answer: "We work with gyms, personal trainers, yoga studios, martial arts clubs, dance schools, CrossFit boxes, sports coaches and other fitness businesses." },
      { question: "How important is a website for a gym or fitness business?", answer: "Very important. Most people search Google when looking for a gym or trainer. A professional website with class schedules, pricing and reviews is what convinces them to sign up." },
      { question: "Can you help with online class booking?", answer: "Yes. We integrate class booking systems, trial session forms and membership sign-up tools directly into your website." },
      { question: "How long until I see results?", answer: "Most fitness businesses see improved local rankings within 4-8 weeks, with new members building over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more members from Google?"
    ctaDescription="Book a free call and we'll show you how to get more sign-ups, enquiries and members for your fitness business."
  />
);

export default SportsAndFitness;
