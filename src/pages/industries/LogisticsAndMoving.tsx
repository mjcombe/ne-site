import TradePageLayout from "@/components/TradePageLayout";
import { Truck } from "lucide-react";

const LogisticsAndMoving = () => (
  <TradePageLayout
    trade="Logistics & Moving"
    icon={Truck}
    heroTitle="Websites & SEO for removal companies, storage and courier services"
    heroDescription="From removal companies and storage facilities to courier services — we help logistics and moving businesses get found by customers searching on Google when they need to move, store or deliver."
    problemsTitle="Why most moving and logistics businesses struggle online"
    problems={[
      "Customers searching for removal companies near them find national chains or comparison sites instead",
      "You rely on word of mouth and repeat business but don't have a consistent online lead source",
      "Comparison sites take commissions on every job they refer, cutting into your margins",
      "Your website doesn't convey the professionalism and reliability that customers need to see",
      "You're missing out on commercial contracts because businesses can't find you online",
      "You know a better online presence would help but don't have time to manage it",
    ]}
    servicesTitle="What we build for logistics and moving businesses"
    services={[
      { title: "Moving Company Website Design", description: "Professional, trust-building websites for removal companies, storage facilities and courier services — designed to generate quotes and bookings." },
      { title: "Local SEO", description: "Rank for searches like 'removal company near me', 'storage units Newcastle', 'courier service Middlesbrough' and every term your customers search." },
      { title: "Google Business Profile", description: "Optimised Google listing with service details, van/truck photos, reviews and coverage area information." },
      { title: "Service Area Pages", description: "Location pages for every area you cover — removals in Sunderland, storage in Gateshead, courier in Durham." },
      { title: "Quote Request System", description: "Moving quote forms, storage enquiry forms and instant quote functionality that converts visitors into booked jobs." },
      { title: "Commercial & Residential Pages", description: "Dedicated pages for house moves, office relocations, storage solutions and courier services — each targeting different customer searches." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "removal company near me",
      "storage units Newcastle",
      "courier service North East",
      "man and van Middlesbrough",
      "house removals Teesside",
      "office relocation near me",
      "self storage North Tyneside",
      "same day courier Sunderland",
    ]}
    benefitsTitle="Why moving businesses choose NE1 Digital"
    benefits={[
      { title: "Trust and reliability messaging", description: "Moving is stressful. We build websites that convey professionalism, insurance details and customer testimonials to give clients confidence." },
      { title: "Residential + commercial targeting", description: "We target both house movers and businesses looking for office relocations, storage and courier services." },
      { title: "Local coverage visibility", description: "Service area pages ensure you rank everywhere you operate, capturing customers across your full service area." },
      { title: "Direct quotes, no commissions", description: "Your own website generates quote requests directly — no comparison sites taking a cut of every job." },
    ]}
    faqTitle="Common questions from logistics businesses"
    faqs={[
      { question: "Which logistics businesses do you work with?", answer: "We work with removal companies, man and van services, storage facilities, courier services, office relocation companies and similar businesses." },
      { question: "Can you help me get commercial contracts?", answer: "Yes. We create dedicated commercial pages targeting businesses, offices and organisations searching for reliable logistics partners in your area." },
      { question: "Can you add an online quote calculator?", answer: "Yes. We can build moving quote forms, instant estimators and enquiry systems that help customers get pricing quickly." },
      { question: "How long until I see results?", answer: "Most logistics businesses see improved rankings within 4-8 weeks, with quote requests building over 3-6 months." },
    ]}
    ctaTitle="Ready to move more customers to your business?"
    ctaDescription="Book a free call and we'll show you how to get more quotes, bookings and customers from Google."
  />
);

export default LogisticsAndMoving;
