import TradePageLayout from "@/components/TradePageLayout";
import { Sparkles } from "lucide-react";

const BeautyAndAesthetics = () => (
  <TradePageLayout
    trade="Beauty & Aesthetics"
    icon={Sparkles}
    category="beauty"
    heroTitle="Websites & SEO for salons, clinics and beauty businesses"
    heroDescription="From hair salons and barbers to beauty salons, nail technicians, lash and brow specialists, aesthetic clinics, skin clinics and laser treatment clinics — we help beauty businesses attract more clients through Google."
    problemsTitle="Why most beauty businesses struggle to get found online"
    problems={[
      "Your Instagram is thriving but you're invisible on Google when clients search locally",
      "You rely on social media algorithms that can change overnight, leaving you without enquiries",
      "Competitors with fewer skills but better websites are winning the clients you should be getting",
      "You don't have a professional website that showcases your treatments and builds trust",
      "Booking platforms take a commission on every appointment they refer to you",
      "You know you need a website but don't have time to build or manage one",
    ]}
    servicesTitle="What we build for beauty and aesthetics businesses"
    services={[
      { title: "Beauty Website Design", description: "Stunning, visual websites for hair salons, barbers, beauty salons, nail techs, lash specialists, aesthetic clinics and skin clinics — designed to convert browsers into bookings." },
      { title: "Local SEO", description: "Rank for searches like 'hair salon near me', 'aesthetics clinic Newcastle', 'nail technician Middlesbrough' and the terms your ideal clients are searching." },
      { title: "Google Business Profile", description: "Fully optimised Google listing with treatment photos, reviews and accurate service descriptions to stand out locally." },
      { title: "Service Area Pages", description: "Location pages for every area you serve — beauty salon in Whitley Bay, barber in Sunderland, aesthetic clinic in Darlington." },
      { title: "Treatment & Service Pages", description: "Dedicated pages for each treatment you offer — facials, lashes, brows, laser, skin treatments — each optimised for search." },
      { title: "Online Booking Integration", description: "Seamless booking links and enquiry forms so clients can book treatments directly from your website." },
    ]}
    searchTermsTitle="Searches your clients are making right now"
    searchTerms={[
      "hair salon near me",
      "beauty salon Newcastle",
      "nail technician North Shields",
      "lash extensions Middlesbrough",
      "aesthetic clinic Teesside",
      "barber near me",
      "skin clinic North East",
      "laser treatment near me",
    ]}
    benefitsTitle="Why beauty businesses choose NE1 Digital"
    benefits={[
      { title: "Visual-first design", description: "Beauty is a visual industry. We build websites that let your work do the talking with stunning galleries and treatment showcases." },
      { title: "Beyond social media", description: "Instagram can disappear overnight. A website you own gives you a permanent online presence that ranks on Google 24/7." },
      { title: "Treatment-specific SEO", description: "We target the exact treatments your clients search for — not just generic terms, but specific services like lash lifts, dermal fillers and keratin treatments." },
      { title: "Direct bookings, no commission", description: "Your own website means clients book directly with you — no platform taking a cut of every appointment." },
    ]}
    faqTitle="Common questions from beauty businesses"
    faqs={[
      { question: "Which beauty businesses do you work with?", answer: "We work with hair salons, barbers, beauty salons, nail technicians, lash and brow specialists, aesthetic clinics, skin clinics, laser treatment clinics and more." },
      { question: "Can you integrate my booking system?", answer: "Yes. We integrate with popular booking platforms or add custom enquiry forms and booking links directly to your website." },
      { question: "How important is a website if I have Instagram?", answer: "Critical. Instagram is great for engagement but Google is where people search when they're ready to book. A professional website captures those high-intent clients and gives you a presence you own." },
      { question: "How long until I see results?", answer: "Most beauty businesses see improved local rankings within 4-8 weeks, with bookings increasing steadily over 3-6 months." },
    ]}
    ctaTitle="Ready to attract more beauty clients from Google?"
    ctaDescription="Book a free call and we'll show you how to get more bookings, enquiries and clients without relying solely on social media."
  />
);

export default BeautyAndAesthetics;
