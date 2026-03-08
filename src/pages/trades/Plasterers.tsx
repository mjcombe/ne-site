import TradePageLayout from "@/components/TradePageLayout";
import { Blocks } from "lucide-react";
import heroImage from "@/assets/trade-builder.jpg";

const Plasterers = () => (
  <TradePageLayout
    trade="Plasterers"
    icon={Blocks}
    heroImage={heroImage}
    heroTitle="Websites & SEO that bring plasterers more local work"
    heroDescription="Whether you specialise in skimming, rendering, or full re-plasters, we help plastering businesses get found by homeowners and contractors who need quality work done right."
    problemsTitle="Why most plasterers struggle to get found online"
    problems={[
      "Your work is excellent but customers searching online find bigger companies instead",
      "You rely on word of mouth and don't have a professional website showcasing your skills",
      "Homeowners searching 'plasterer near me' can't find your business on Google",
      "You've tried social media but it doesn't consistently generate quality leads",
      "Your current website doesn't show your finished work or make it easy to get a quote",
      "You know you should be ranking locally but don't have time to learn SEO",
    ]}
    servicesTitle="What we build for plasterers"
    services={[
      { title: "Plasterer Website Design", description: "Professional websites with before-and-after galleries that showcase your plastering, rendering, and skimming work to convert visitors into enquiries." },
      { title: "Local SEO for Plasterers", description: "We optimise your site to rank for searches like 'plasterer in Newcastle' and 'rendering specialist near me' across your service area." },
      { title: "Google Business Profile", description: "Full setup and optimisation so you appear in the map pack with reviews and photos of your finished plastering work." },
      { title: "Service Area Pages", description: "Dedicated pages for every town you cover — helping you rank for 'plasterer in Gateshead', 'plasterer in Sunderland' and more." },
      { title: "Portfolio & Gallery Pages", description: "Beautifully presented photo galleries showing your best work — the most powerful trust signal for plastering businesses." },
      { title: "Review & Trust Building", description: "Strategies to collect and display customer reviews that help new clients choose you over competitors." },
    ]}
    searchTermsTitle="Searches your customers are making right now"
    searchTerms={[
      "plasterer near me",
      "plastering services Newcastle",
      "rendering specialist North East",
      "skim coat plasterer Sunderland",
      "external rendering Durham",
      "ceiling plastering near me",
      "plasterer quotes Gateshead",
      "K rend installer North East",
    ]}
    benefitsTitle="Why plasterers choose NE1 Web Digital"
    benefits={[
      { title: "We showcase your craft", description: "Beautiful gallery layouts that let your finished work sell itself — before-and-after photos that convert browsers into callers." },
      { title: "Trade-specific SEO", description: "We know the difference between skimming, rendering, and dry lining — and we target the exact terms your customers search for." },
      { title: "Local area dominance", description: "Service area pages that help you rank in every town you work in, not just your home postcode." },
      { title: "Measurable enquiries", description: "Track every phone call and form submission so you know exactly how many jobs your website generates." },
    ]}
    faqTitle="Common questions from plasterers"
    faqs={[
      { question: "How quickly will I start getting enquiries?", answer: "Most plasterers see increased traffic within 4-8 weeks, with steady enquiry growth over 3-6 months as local rankings build." },
      { question: "Can you help me rank for rendering as well as plastering?", answer: "Absolutely. We create separate, optimised content for each service you offer — plastering, rendering, dry lining, coving — targeting different customer searches." },
      { question: "Do I need professional photos of my work?", answer: "Good photos make a huge difference. Even smartphone photos of finished work are valuable. We'll advise on the best way to capture your projects." },
      { question: "What if I cover a wide area?", answer: "We build service area pages for every town and area you work in, so you rank locally across your full coverage area." },
    ]}
    ctaTitle="Ready to get more plastering work from Google?"
    ctaDescription="Stop relying solely on word of mouth. Let's build you a website and SEO strategy that brings quality plastering enquiries straight to your phone."
  />
);

export default Plasterers;
