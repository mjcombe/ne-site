import TradePageLayout from "@/components/TradePageLayout";
import { Heart } from "lucide-react";

const HealthAndWellbeing = () => (
  <TradePageLayout
    trade="Health & Wellbeing"
    icon={Heart}
    heroTitle="Websites & SEO for health, fitness and wellbeing businesses"
    heroDescription="From dentists and physiotherapists to chiropractors, opticians, therapists, hypnotherapists, personal trainers, gyms, yoga and pilates studios — we help health and wellbeing businesses get found by local clients on Google."
    problemsTitle="Why most health and wellbeing businesses struggle online"
    problems={[
      "Potential patients and clients search Google first but find larger chains or directories instead of you",
      "Your website doesn't convey the professionalism and trust that clients expect from a health provider",
      "You rely on referrals and don't have a consistent online source of new client enquiries",
      "Competitors with less experience have better websites and are winning your potential clients",
      "You're listed on directories but they take commissions or don't drive meaningful leads",
      "You know you need better online visibility but don't have time to manage digital marketing",
    ]}
    servicesTitle="What we build for health and wellbeing businesses"
    services={[
      { title: "Health & Wellness Website Design", description: "Professional, trust-building websites for dentists, physios, chiropractors, therapists, personal trainers, gyms and studios — designed to convert visitors into clients." },
      { title: "Local SEO", description: "Rank for searches like 'dentist near me', 'physiotherapist Newcastle', 'personal trainer Middlesbrough' and every term your clients are searching." },
      { title: "Google Business Profile", description: "Optimised Google listing with service details, opening hours, reviews and photos so you stand out in local search results." },
      { title: "Service Area Pages", description: "Location pages for every area you serve — chiropractor in Durham, yoga studio in Whitley Bay, gym in Stockton." },
      { title: "Service & Treatment Pages", description: "Dedicated pages for each service — sports massage, CBT therapy, dental implants, pilates classes — each optimised for search." },
      { title: "Appointment Booking", description: "Online booking integration and enquiry forms that make it simple for clients to schedule appointments directly." },
    ]}
    searchTermsTitle="Searches your clients are making right now"
    searchTerms={[
      "dentist near me",
      "physiotherapist Newcastle",
      "chiropractor North East",
      "personal trainer Middlesbrough",
      "gym near me",
      "yoga classes North Tyneside",
      "therapist Sunderland",
      "optician Teesside",
    ]}
    benefitsTitle="Why health businesses choose NE1 Digital"
    benefits={[
      { title: "Trust-first design", description: "Health clients need to trust you before they book. We build professional websites that showcase qualifications, testimonials and your expertise." },
      { title: "Service-specific targeting", description: "We target the exact services clients search for — dental implants, sports physio, CBT therapy — not just generic terms." },
      { title: "Local client acquisition", description: "Service area pages ensure you rank in every area you serve, capturing clients searching for health services nearby." },
      { title: "Measurable growth", description: "Track every appointment request, phone call and form submission so you know exactly how your website is performing." },
    ]}
    faqTitle="Common questions from health and wellbeing businesses"
    faqs={[
      { question: "Which health businesses do you work with?", answer: "We work with dentists, physiotherapists, chiropractors, opticians, therapists, hypnotherapists, personal trainers, gyms, yoga studios, pilates studios and more." },
      { question: "Can you help with patient/client booking?", answer: "Yes. We integrate online booking systems or add custom appointment request forms to make it easy for clients to book directly from your website." },
      { question: "How important is SEO for health businesses?", answer: "Extremely important. Most people search Google when looking for a dentist, physio or personal trainer. Ranking well locally means a consistent stream of new client enquiries." },
      { question: "How long until I see results?", answer: "Most health businesses see improved rankings within 4-8 weeks, with client enquiries building over 3-6 months as your local authority grows." },
    ]}
    ctaTitle="Ready to attract more health and wellbeing clients?"
    ctaDescription="Book a free call and we'll show you how to get more appointments, enquiries and clients from Google."
  />
);

export default HealthAndWellbeing;
