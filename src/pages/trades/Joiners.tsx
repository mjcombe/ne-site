import TradePageLayout from "@/components/TradePageLayout";
import { Hammer } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const Joiners = () => (
  <TradePageLayout
    trade="Joiners & Carpenters"
    icon={Hammer}
    heroImage={heroImage}
    heroTitle="Showcase your craftsmanship online and attract better joinery projects"
    heroDescription="Bespoke kitchens, staircases, fitted wardrobes, and architectural joinery — we help joiners and carpenters build an online presence that attracts customers who appreciate skilled craftsmanship and are willing to pay for quality."
    problemsTitle="The challenges joiners and carpenters face online"
    problems={[
      "Customers don't understand the difference between a skilled joiner and a flat-pack fitter, so they shop on price alone",
      "Your finest bespoke work is hidden away in customers' homes with no way for new prospects to see it",
      "You get enquiries for small repair jobs when you want to focus on larger, more rewarding joinery projects",
      "Your website doesn't communicate the skill, time, and craftsmanship that goes into your work",
      "Competing against mass-produced furniture companies online feels impossible on your own",
      "You know your work is exceptional but your online presence doesn't reflect that quality",
    ]}
    servicesTitle="What we build for joinery businesses"
    services={[
      { title: "Joiner Website Design", description: "Elegant, craftsmanship-focused websites that present your bespoke joinery, fitted furniture, and carpentry projects with the quality they deserve." },
      { title: "Local SEO for Joiners", description: "Targeted optimisation for searches like 'bespoke joiner near me', 'fitted kitchen carpenter Newcastle', and 'staircase maker North East'." },
      { title: "Craftsmanship Portfolio", description: "Detailed project showcases with close-up photography, material descriptions, and customer stories that communicate the quality and care in your work." },
      { title: "Service Area Pages", description: "Location-targeted pages ensuring customers searching for joiners in specific towns across your region find your business." },
      { title: "Google Business Profile", description: "Optimised Google listing with project photography and reviews that positions you as the premium joinery choice in your area." },
      { title: "Specialist Service Pages", description: "Dedicated pages for each specialism — kitchens, staircases, wardrobes, doors, commercial fit-outs — each optimised for relevant search terms." },
    ]}
    searchTermsTitle="What customers search for when they need a joiner"
    searchTerms={[
      "joiner near me",
      "bespoke kitchen joiner Newcastle",
      "carpenter Sunderland",
      "fitted wardrobe maker Durham",
      "staircase carpenter North East",
      "bespoke shelving near me",
      "kitchen fitter Gateshead",
      "handmade furniture maker",
      "commercial joinery North East",
      "door hanging service near me",
    ]}
    benefitsTitle="Why joiners choose NE Trades"
    benefits={[
      { title: "Communicate craftsmanship digitally", description: "We build websites that capture the detail, quality, and care in your joinery work — from timber selection to finished installation." },
      { title: "Attract bespoke project enquiries", description: "Our SEO strategy targets customers searching for bespoke, custom, and fitted solutions rather than off-the-shelf alternatives." },
      { title: "Differentiate from mass market", description: "Your website will clearly position you as a skilled craftsperson, not a flat-pack assembler — attracting customers who value quality and are willing to invest." },
      { title: "Showcase materials and process", description: "We help you tell the story behind each project — the timber, the techniques, the time — so customers understand the value of commissioning bespoke joinery." },
    ]}
    faqTitle="Common questions from joiners"
    faqs={[
      { question: "My work is very visual — how do you handle that?", answer: "We design your website around visual storytelling. Detailed project galleries with close-ups of joints, finishes, and installed pieces showcase the craftsmanship that sets you apart from factory-made alternatives." },
      { question: "Can you target specific types of joinery work?", answer: "Yes. We create individual pages for each specialism — bespoke kitchens, staircases, fitted furniture, commercial fit-outs — each targeting the specific searches customers make for that type of work." },
      { question: "I want to attract bigger commercial projects — is that possible?", answer: "We can create dedicated commercial joinery content targeting property developers, architects, and businesses looking for quality commercial fit-out and shop-fitting services." },
      { question: "How do I compete with large kitchen companies?", answer: "By positioning yourself differently. Your website will emphasise bespoke craftsmanship, personal service, and unique design — the things mass-market kitchen companies simply cannot offer." },
    ]}
    ctaTitle="Ready to attract projects worthy of your craftsmanship?"
    ctaDescription="Let's build you a website that does justice to your joinery skills and connects you with customers who value bespoke quality."
  />
);

export default Joiners;
