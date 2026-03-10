import TradePageLayout from "@/components/TradePageLayout";
import { Wrench } from "lucide-react";

const TradesAndHomeServices = () => (
  <TradePageLayout
    trade="Trades & Home Services"
    icon={Wrench}
    heroTitle="Websites & SEO for tradespeople and home service businesses"
    heroDescription="From builders and plumbers to electricians, roofers, joiners, landscapers, heating engineers, locksmiths, garage door installers and property maintenance companies — we help trades get found on Google and win more local work."
    problemsTitle="Why most tradespeople struggle to get found online"
    problems={[
      "Your phone's gone quiet and you're relying on word of mouth or lead-sharing platforms",
      "You're paying for leads on directories that get shared with 5 other companies",
      "Your website looks outdated or doesn't show up when customers search Google",
      "Competitors with worse work are getting more enquiries because they rank higher",
      "You've tried SEO companies before and got burned with no results",
      "You know you need to be online but don't have time to manage it all",
    ]}
    servicesTitle="What we build for trades and home service businesses"
    services={[
      { title: "Trade Website Design", description: "Professional, mobile-first websites built to showcase your work and convert visitors into enquiries — whether you're a plumber, electrician, builder or roofer." },
      { title: "Local SEO", description: "Rank for searches like 'plumber near me', 'electrician Newcastle', 'builder Middlesbrough' and every variation your customers actually type into Google." },
      { title: "Google Business Profile", description: "Fully optimised Google listing with photos, reviews and accurate service descriptions so you stand out in the map pack." },
      { title: "Service Area Pages", description: "Individual pages targeting every area you cover — joiners in Durham, landscapers in Sunderland, heating engineers in Gateshead and everywhere between." },
      { title: "Review & Trust Building", description: "Strategies to collect and display customer reviews that help new clients choose you over the competition." },
      { title: "Lead Generation", description: "Quote request forms, click-to-call buttons and clear calls-to-action designed to turn website visitors into booked jobs." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "plumber near me",
      "electrician Newcastle",
      "builder North Tyneside",
      "roofer Middlesbrough",
      "joiner near me",
      "landscaper Teesside",
      "locksmith emergency near me",
      "heating engineer North East",
    ]}
    benefitsTitle="Why trades choose NE1 Digital"
    benefits={[
      { title: "We understand your industry", description: "We know how tradespeople work — from builders and plumbers to locksmiths and garage door installers. We speak your language and target the right customers." },
      { title: "Local search dominance", description: "Service area pages ensure you rank in every town you work in, whether you're a roofer in Whitley Bay or an electrician in Stockton." },
      { title: "No contracts, real results", description: "We don't lock you into long contracts. We earn your business every month with measurable results — calls, enquiries and booked jobs." },
      { title: "Built for conversions", description: "Every website we build is designed to make it easy for customers to contact you, request a quote or pick up the phone." },
    ]}
    faqTitle="Common questions from tradespeople"
    faqs={[
      { question: "Which trades do you work with?", answer: "We work with builders, plumbers, electricians, roofers, joiners, landscapers, heating engineers, locksmiths, garage door installers, property maintenance companies and more. If you're a tradesperson, we can help." },
      { question: "How quickly will I start getting enquiries?", answer: "Most trade businesses see improved rankings within 4-8 weeks, with enquiry levels building steadily over 3-6 months as your local authority grows." },
      { question: "Do I need a website or just SEO?", answer: "Both work together. A professional website gives customers confidence, and SEO makes sure they find you in the first place. We typically recommend both for the best results." },
      { question: "Can you help if I cover a wide area?", answer: "Absolutely. We build service area pages for every town and area you work in, so you rank locally across your full coverage — from North Tyneside to Teesside and beyond." },
    ]}
    ctaTitle="Ready to get more trade work from Google?"
    ctaDescription="Book a free, no-obligation call. We'll look at your current online presence and show you exactly how we'd get you more enquiries."
  />
);

export default TradesAndHomeServices;
