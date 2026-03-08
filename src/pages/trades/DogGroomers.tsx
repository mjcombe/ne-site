import TradePageLayout from "@/components/TradePageLayout";
import { Dog } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const DogGroomers = () => (
  <TradePageLayout
    category="services"
    icon={Dog}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring dog groomers more bookings"
    heroDescription="Whether you run a grooming salon, offer mobile grooming, or specialise in breed-specific styling, we help dog groomers get found by pet owners searching for grooming services locally."
    problemsTitle="Why most dog groomers struggle to grow online"
    problems={[
      "You're fully booked from referrals but want a waiting list of new clients",
      "Pet owners searching 'dog groomer near me' find your competitors before you",
      "Your website doesn't show your grooming quality or make booking easy",
      "You rely on Facebook and Instagram but don't appear in Google searches",
      "National pet care directories rank above your business for local searches",
      "New clients can't easily find your prices, services, or availability online",
    ]}
    servicesTitle="What we build for dog groomers"
    services={[
      { title: "Dog Grooming Website Design", description: "Warm, professional websites with adorable before-and-after galleries that make pet owners confident in choosing your salon." },
      { title: "Local SEO for Dog Groomers", description: "Rank for 'dog groomer near me', 'puppy grooming Newcastle' and breed-specific searches in your area." },
      { title: "Google Business Profile", description: "Optimised listing with grooming photos, reviews from happy pet owners, and direct booking links." },
      { title: "Service & Pricing Pages", description: "Clear service menus organised by dog size and breed — helping owners understand exactly what to expect." },
      { title: "Before & After Gallery", description: "Adorable transformation galleries that showcase your grooming skills — the most effective sales tool for groomers." },
      { title: "Online Booking", description: "Easy appointment booking with breed/size options so clients can book the right service slot." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "dog groomer near me",
      "puppy grooming Newcastle",
      "cockapoo groomer Sunderland",
      "mobile dog groomer Durham",
      "dog grooming salon North East",
      "hand stripping groomer near me",
      "dog groomer Gateshead",
      "cat grooming near me",
    ]}
    benefitsTitle="Why dog groomers choose NE1 Web Digital"
    benefits={[
      { title: "Adorable sells", description: "Before-and-after grooming photos are irresistible to pet owners. We showcase your transformations beautifully." },
      { title: "Breed-specific targeting", description: "Cockapoo grooming, poodle cuts, hand stripping — we target breed-specific searches that attract your ideal clients." },
      { title: "Booking optimisation", description: "Easy online booking reduces phone tag and no-shows while keeping your diary consistently full." },
      { title: "Mobile groomer support", description: "Service area pages help mobile groomers rank across every location they travel to." },
    ]}
    faqTitle="Common questions from dog groomers"
    faqs={[
      { question: "I'm already busy from referrals — do I need a website?", answer: "A website gives you control. Referrals are great but unpredictable. A Google presence creates a consistent pipeline of new clients, builds a waiting list, and lets you be selective about the work you take." },
      { question: "Can you target specific breeds?", answer: "Yes. We create content targeting breed-specific grooming searches — cockapoo grooming, poodle cuts, spaniel stripping — capturing owners looking for breed expertise." },
      { question: "I'm a mobile dog groomer — can I rank locally?", answer: "Absolutely. We set up service-area Google Business Profiles and create location pages for every area you cover." },
      { question: "Do you help with cat grooming too?", answer: "Yes. If you offer cat grooming, we create separate content targeting this niche — it's a less competitive but growing search category." },
    ]}
    ctaTitle="Ready to fill your grooming diary from Google?"
    ctaDescription="Build an online presence that brings pet owners to your door — consistently and without relying solely on word of mouth."
  />
);

export default DogGroomers;
