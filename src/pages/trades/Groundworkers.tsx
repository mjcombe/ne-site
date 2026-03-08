import TradePageLayout from "@/components/TradePageLayout";
import { Shovel } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const Groundworkers = () => (
  <TradePageLayout
    trade="Groundworkers"
    icon={Shovel}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring groundwork companies more contracts"
    heroDescription="From foundations and drainage to driveways and excavation, we help groundwork businesses get found by builders, developers, and homeowners who need reliable groundwork services."
    problemsTitle="Why most groundwork companies struggle online"
    problems={[
      "You rely on builder relationships but want to diversify and get direct enquiries too",
      "Homeowners needing driveways, foundations, or drainage can't find your business online",
      "You don't have a website that shows the scale and quality of your groundwork projects",
      "Developers and contractors search Google for groundworkers but you're not appearing",
      "Your competitors are winning jobs online while you wait for phone calls from contacts",
      "You know online visibility matters but groundwork doesn't feel like a 'Google' trade",
    ]}
    servicesTitle="What we build for groundworkers"
    services={[
      { title: "Groundwork Website Design", description: "Professional websites showcasing foundations, drainage, excavation, and driveway projects with impressive project photography." },
      { title: "Local SEO for Groundworkers", description: "Rank for 'groundworkers near me', 'foundations contractor Newcastle' and service-specific searches across your area." },
      { title: "Google Business Profile", description: "Optimised listing helping builders, developers, and homeowners find your groundwork business locally." },
      { title: "Service Area Pages", description: "Location pages ensuring you rank for groundwork searches in every town and region you cover." },
      { title: "B2B Content Strategy", description: "Targeted content attracting builders, developers, and construction companies looking for reliable groundwork subcontractors." },
      { title: "Project Case Studies", description: "Detailed case studies showing the scale and quality of your groundwork projects — powerful trust signals for larger contracts." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "groundworkers near me",
      "foundations contractor Newcastle",
      "driveway contractor Sunderland",
      "excavation services North East",
      "drainage installation Durham",
      "groundwork company Gateshead",
      "mini digger hire with operator",
      "concrete foundations near me",
    ]}
    benefitsTitle="Why groundwork companies choose NE1 Web Digital"
    benefits={[
      { title: "B2B and direct targeting", description: "We target both builders/developers needing subcontractors and homeowners needing driveways, patios, and foundations." },
      { title: "Project scale showcase", description: "Professional case studies and project galleries that demonstrate your capability for larger contracts." },
      { title: "Service diversity coverage", description: "Foundations, drainage, excavation, driveways, retaining walls — each service gets dedicated, optimised content." },
      { title: "Contract-winning credibility", description: "A professional website with project evidence helps you win larger contracts and attract better-quality work." },
    ]}
    faqTitle="Common questions from groundworkers"
    faqs={[
      { question: "Can a website really help a groundwork business?", answer: "Absolutely. More builders and developers now search Google when looking for groundwork subcontractors. Homeowners also search for driveway and foundation contractors. A professional website captures both audiences." },
      { question: "What content works best for groundwork sites?", answer: "Project photography is king. Before, during, and after shots of foundations, drainage installations, and driveway projects demonstrate your capability better than any text." },
      { question: "How do you target both builders and homeowners?", answer: "We create separate content streams — B2B pages targeting contractors and developers, and consumer-facing pages for driveways, patios, and domestic groundwork." },
      { question: "Is SEO worth it for groundwork?", answer: "Yes. Groundwork searches are less competitive than trades like plumbing or electrical, which means faster ranking results and a better return on investment." },
    ]}
    ctaTitle="Ready to get more groundwork contracts from Google?"
    ctaDescription="Build a professional online presence that brings contracts from builders, developers, and homeowners directly to your business."
  />
);

export default Groundworkers;
