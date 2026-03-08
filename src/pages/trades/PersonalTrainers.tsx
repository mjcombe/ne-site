import TradePageLayout from "@/components/TradePageLayout";
import { Dumbbell } from "lucide-react";

const PersonalTrainers = () => (
  <TradePageLayout
    category="services"
    trade="Personal Trainers"
    icon={Dumbbell}
    heroTitle="Websites & SEO that bring personal trainers more clients"
    heroDescription="Whether you train in a gym, offer mobile PT sessions, run bootcamps, or coach online, we help personal trainers get found by people searching for fitness support in their area."
    problemsTitle="Why most personal trainers struggle online"
    problems={[
      "You post fitness content on Instagram but aren't appearing when people search Google locally",
      "Your gym's website gets the traffic while your personal services remain invisible",
      "People searching 'personal trainer near me' find chain gyms instead of independent PTs",
      "You don't have a professional website to showcase your qualifications and client results",
      "You rely on gym referrals and social media with no long-term marketing strategy",
      "Potential clients can't easily find your specialities, pricing, or availability",
    ]}
    servicesTitle="What we build for personal trainers"
    services={[
      { title: "PT Website Design", description: "Motivating, results-focused websites that showcase your training style, qualifications, and client transformations." },
      { title: "Local SEO for PTs", description: "Rank for 'personal trainer near me', 'PT Newcastle', 'weight loss coach' and speciality-specific searches." },
      { title: "Google Business Profile", description: "Optimised listing that positions you as a trusted local fitness professional with client reviews and photos." },
      { title: "Speciality Pages", description: "Dedicated pages for weight loss, strength training, rehab, prenatal fitness — whatever your specialities are." },
      { title: "Client Transformation Gallery", description: "Before-and-after galleries and testimonials that prove your training delivers real results." },
      { title: "Lead Capture & Booking", description: "Free consultation forms, taster session booking, and clear CTAs designed to convert browsers into paying clients." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "personal trainer near me",
      "PT Newcastle",
      "weight loss coach Sunderland",
      "female personal trainer Durham",
      "online fitness coach North East",
      "bootcamp near me",
      "strength training coach Gateshead",
      "mobile personal trainer near me",
    ]}
    benefitsTitle="Why personal trainers choose NE1 Web Digital"
    benefits={[
      { title: "Results showcase", description: "Client transformations and testimonials are your best marketing tool. We present them powerfully." },
      { title: "Speciality targeting", description: "Weight loss, strength, rehab, prenatal — we target the specific searches your ideal clients make." },
      { title: "Independent PT visibility", description: "Rank on your own terms, not through a gym's website. Build your personal brand online." },
      { title: "Lead generation", description: "Free consultation CTAs and taster session offers that convert website visitors into paying clients." },
    ]}
    faqTitle="Common questions from personal trainers"
    faqs={[
      { question: "I mostly get clients through the gym — do I need a website?", answer: "A website gives you independence. If you change gyms, go mobile, or add online coaching, your website and Google presence go with you. It's your long-term client generation asset." },
      { question: "Can you help with online coaching marketing?", answer: "Yes. We create content targeting online fitness coaching searches alongside local PT searches — expanding your reach beyond your immediate area." },
      { question: "How important are transformation photos?", answer: "Extremely. Before-and-after results are the single most persuasive element on a PT website. We'll help you present them professionally and effectively." },
      { question: "Can you target female-specific or niche fitness searches?", answer: "Absolutely. 'Female personal trainer near me', 'prenatal fitness coach', 'over 50s PT' — we target the specific niches that match your expertise and ideal client profile." },
    ]}
    ctaTitle="Ready to get more PT clients from Google?"
    ctaDescription="Build a professional online presence that brings a consistent flow of new clients — beyond gym referrals and Instagram."
  />
);

export default PersonalTrainers;
