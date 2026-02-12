import TradePageLayout from "@/components/TradePageLayout";
import { HardHat } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const Builders = () => (
  <TradePageLayout
    trade="Builders"
    icon={HardHat}
    heroImage={heroImage}
    heroTitle="Win bigger building projects through a website that works as hard as you do"
    heroDescription="Extensions, new builds, renovations, groundworks — we help builders and construction firms attract high-value projects from homeowners and developers who are actively searching for reliable local builders."
    problemsTitle="The online challenges builders face"
    problems={[
      "Homeowners contact three or four builders for quotes and you're competing on price alone because your website doesn't stand out",
      "Your best projects come from word of mouth but you can't control when the next referral arrives",
      "You have an impressive portfolio of completed work but nowhere professional to showcase it online",
      "Larger commercial or developer projects require an online presence that demonstrates credibility and capability",
      "Your current website was thrown together quickly and doesn't reflect the quality of your building work",
      "You're missing out on extension and renovation enquiries because your competitors rank above you on Google",
    ]}
    servicesTitle="What we build for building companies"
    services={[
      { title: "Builder Website Design", description: "Professional websites with project galleries, testimonials, and clear service descriptions that help homeowners choose you with confidence over competing builders." },
      { title: "Local SEO for Builders", description: "Optimisation targeting high-value searches like 'house extension builder Newcastle', 'loft conversion near me', and 'new build contractors North East'." },
      { title: "Project Portfolio Showcase", description: "Beautifully presented before-and-after galleries and case studies that demonstrate the quality and scope of your completed projects." },
      { title: "Service Area Pages", description: "Targeted pages for every location you work in so homeowners searching for builders in specific towns find your business." },
      { title: "Google Business Profile", description: "Optimised Google listing with project photos, customer reviews, and accurate service categories that improve your visibility in local map results." },
      { title: "Quote Request System", description: "Simple, effective forms that capture project details upfront so you receive qualified enquiries with enough information to respond professionally." },
    ]}
    searchTermsTitle="What homeowners are searching for"
    searchTerms={[
      "builders near me",
      "house extension builder Newcastle",
      "loft conversion cost North East",
      "garage conversion Sunderland",
      "new build contractor Durham",
      "renovation builder Gateshead",
      "groundworks contractor near me",
      "best builders in Newcastle",
      "kitchen extension quotes",
      "reliable builder reviews",
    ]}
    benefitsTitle="Why builders choose NE1 Web Digital"
    benefits={[
      { title: "Attract higher-value projects", description: "A professional website with strong project galleries positions you for extensions, new builds, and renovations rather than small repair jobs." },
      { title: "Portfolio that sells for you", description: "We showcase your completed projects with professional layouts that demonstrate quality, scale, and attention to detail — letting your work do the talking." },
      { title: "Beat competitors on credibility", description: "When homeowners compare three builders' websites, the one that looks most professional wins. We make sure that's yours." },
      { title: "Qualified project enquiries", description: "Our quote request forms capture project type, budget range, and timeline so you receive enquiries worth responding to." },
    ]}
    faqTitle="Common questions from builders"
    faqs={[
      { question: "I do all types of building work — how do you handle that?", answer: "We create separate, optimised pages for each service — extensions, renovations, new builds, groundworks — each targeting the specific searches homeowners use when looking for that type of work." },
      { question: "Can you help me attract commercial or developer work?", answer: "Yes. We can create dedicated sections or pages targeting commercial clients and property developers, with appropriate messaging around capability, insurance, and project management experience." },
      { question: "How important are project photos?", answer: "Extremely important for builders. Homeowners want to see completed work before they make contact. We'll help you present your projects professionally, even if your photos are taken on a phone." },
      { question: "Will this replace my need for word of mouth?", answer: "It complements word of mouth rather than replacing it. Your website becomes a place referrals can check you out before calling, while also generating brand new enquiries from Google searches." },
    ]}
    ctaTitle="Ready to win more building projects?"
    ctaDescription="Let's build you a website that showcases your best work and ranks for the building searches that matter in your area."
  />
);

export default Builders;
