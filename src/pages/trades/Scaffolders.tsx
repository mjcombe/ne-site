import TradePageLayout from "@/components/TradePageLayout";
import { HardHat } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const Scaffolders = () => (
  <TradePageLayout
    trade="Scaffolders"
    icon={HardHat}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring scaffolding companies more work"
    heroDescription="From residential scaffold erection to commercial projects and scaffold hire, we help scaffolding businesses get found by builders, contractors, and homeowners who need reliable scaffolding services."
    problemsTitle="Why most scaffolding companies struggle online"
    problems={[
      "You get most of your work through builder contacts but want to diversify your lead sources",
      "Homeowners and small contractors searching for scaffolding can't find your business",
      "Your competitors have professional websites while you rely on word of mouth alone",
      "You don't appear on Google when people search for scaffold hire in your area",
      "National scaffolding directories take a commission on every job they send you",
      "You know an online presence would help but haven't had time to set one up properly",
    ]}
    servicesTitle="What we build for scaffolding companies"
    services={[
      { title: "Scaffolding Website Design", description: "Professional websites that showcase your scaffolding services, safety credentials, and project portfolio to win more contracts." },
      { title: "Local SEO for Scaffolders", description: "Rank for 'scaffolding hire near me', 'scaffold erection Newcastle' and similar searches that generate real scaffolding work." },
      { title: "Google Business Profile", description: "Optimised Google listing so builders and homeowners find your scaffolding business in the local map pack." },
      { title: "Service Area Pages", description: "Location pages targeting every area you cover — ensuring you rank for scaffolding searches across your full region." },
      { title: "Safety & Accreditation Display", description: "Prominent display of CISRS cards, CITB qualifications, and insurance details to build trust with contractors." },
      { title: "B2B Lead Generation", description: "Content and SEO targeting both direct homeowner searches and contractor/builder searches for scaffolding partners." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "scaffolding near me",
      "scaffold hire Newcastle",
      "scaffolding company Sunderland",
      "residential scaffolding North East",
      "commercial scaffolding Durham",
      "scaffold erection Gateshead",
      "temporary roofing scaffold",
      "scaffolding for loft conversion",
    ]}
    benefitsTitle="Why scaffolding companies choose NE1 Web Digital"
    benefits={[
      { title: "B2B and B2C targeting", description: "We target both homeowners needing scaffold hire and builders looking for reliable scaffolding subcontractors." },
      { title: "Safety-first messaging", description: "We highlight your safety credentials, CISRS qualifications, and insurance — the details that win contracts." },
      { title: "Local contractor visibility", description: "Service area pages help you appear when contractors search for scaffolders in specific areas." },
      { title: "Direct enquiries, no commission", description: "Your own website generates leads directly — no scaffolding directory taking a cut of your earnings." },
    ]}
    faqTitle="Common questions from scaffolding companies"
    faqs={[
      { question: "Can you help me get work from builders as well as homeowners?", answer: "Yes. We create content targeting both audiences — homeowners searching for scaffold hire and builders looking for reliable scaffolding subcontractors in your area." },
      { question: "Is a website really necessary for a scaffolding business?", answer: "Increasingly, yes. Even builders now check Google before hiring scaffolders. A professional website with your qualifications and project photos gives you a significant advantage." },
      { question: "What about larger commercial projects?", answer: "We can create dedicated commercial scaffolding pages targeting larger projects, construction companies, and facilities management firms in your region." },
      { question: "How do you handle the visual side?", answer: "Scaffolding projects photograph well. We'll help you capture impressive project shots and present them professionally on your website." },
    ]}
    ctaTitle="Ready to get more scaffolding contracts from Google?"
    ctaDescription="Build a professional online presence that brings scaffolding enquiries directly from builders, contractors, and homeowners in your area."
  />
);

export default Scaffolders;
