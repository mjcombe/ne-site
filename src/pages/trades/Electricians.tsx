import TradePageLayout from "@/components/TradePageLayout";
import { Zap } from "lucide-react";
import heroImage from "@/assets/trade-electrician.jpg";

const Electricians = () => (
  <TradePageLayout
    trade="Electricians"
    icon={Zap}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring electricians more local work"
    heroDescription="Whether you specialise in domestic rewires, commercial installations, or emergency callouts, we help electricians get found by the customers who need them most — right when they're searching."
    problemsTitle="Why most electricians struggle to get found online"
    problems={[
      "Your website was built years ago and doesn't show up on Google for local electrical searches",
      "You rely on word of mouth and Checkatrade but want your own steady stream of enquiries",
      "Customers searching 'electrician near me' find your competitors instead of you",
      "You've paid for ads or directories but never see a clear return on investment",
      "Your website doesn't explain your services clearly or make it easy to get in touch",
      "You know you need to be online but don't have time to figure out SEO and marketing",
    ]}
    servicesTitle="What we build for electricians"
    services={[
      { title: "Electrician Website Design", description: "Professional websites designed to showcase your electrical services, qualifications, and accreditations. Built to convert visitors into phone calls and quote requests." },
      { title: "Local SEO for Electricians", description: "We optimise your site to rank for searches like 'electrician in Newcastle' and 'emergency electrician near me' so you appear when customers need you." },
      { title: "Google Business Profile", description: "Full setup and optimisation of your Google listing so you appear in the map pack with reviews, photos, and accurate service information." },
      { title: "Service Area Pages", description: "Dedicated pages targeting every town and area you cover — from Durham to Sunderland — so you rank locally across your full service area." },
      { title: "NICEIC & Accreditation Display", description: "We prominently feature your NICEIC, NAPIT, or Part P registration to build instant trust with potential customers." },
      { title: "Emergency Callout Visibility", description: "Specific content and SEO targeting for emergency electrical searches so customers find you first during urgent situations." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "electrician near me",
      "emergency electrician Newcastle",
      "domestic electrician Sunderland",
      "NICEIC electrician Durham",
      "rewire specialist North East",
      "commercial electrician Gateshead",
      "electrical inspection near me",
      "consumer unit upgrade cost",
      "EV charger installer Newcastle",
      "Part P electrician near me",
    ]}
    benefitsTitle="Why electricians choose NE1 Web Digital"
    benefits={[
      { title: "We understand electrical services", description: "From consumer unit upgrades to full rewires, we know how to present your services in language customers actually search for." },
      { title: "Accreditation-led trust building", description: "We make your NICEIC, NAPIT, and Part P credentials front and centre — the first thing potential customers see." },
      { title: "Emergency search visibility", description: "When someone's power goes out at 10pm, they search Google. We make sure your business is what they find." },
      { title: "Real results you can measure", description: "We track phone calls, form submissions, and quote requests so you know exactly how many jobs your website generates." },
    ]}
    faqTitle="Common questions from electricians"
    faqs={[
      { question: "How long before I start getting enquiries?", answer: "Most electricians start seeing increased website traffic within 4-8 weeks, with enquiry levels building steadily over 3-6 months as your local rankings strengthen." },
      { question: "Do you understand the different types of electrical work?", answer: "Yes. We work with domestic, commercial, and industrial electricians. We tailor your website content and SEO to match the specific services you offer and the customers you want to attract." },
      { question: "Can you help me rank for EV charger installation?", answer: "Absolutely. EV charger installation is a rapidly growing search term. We create dedicated content targeting homeowners and businesses looking for qualified EV charger installers in your area." },
      { question: "Will my accreditations be displayed clearly?", answer: "Your NICEIC, NAPIT, Part P, or other accreditations will be prominently displayed across your site to build immediate trust with potential customers." },
    ]}
    ctaTitle="Ready to get more electrical work from Google?"
    ctaDescription="Stop relying on word of mouth alone. Let's build you a website and SEO strategy that brings qualified electrical enquiries straight to your phone."
  />
);

export default Electricians;
