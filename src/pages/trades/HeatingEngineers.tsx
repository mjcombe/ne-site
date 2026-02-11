import TradePageLayout from "@/components/TradePageLayout";
import { Thermometer } from "lucide-react";
import heroImage from "@/assets/trade-plumber.jpg";

const HeatingEngineers = () => (
  <TradePageLayout
    trade="Heating Engineers"
    icon={Thermometer}
    heroImage={heroImage}
    heroTitle="Generate more boiler and heating enquiries from local homeowners"
    heroDescription="Boiler installations, central heating systems, underfloor heating, and annual servicing — we help Gas Safe registered heating engineers build a dominant online presence that generates consistent enquiries from homeowners who need reliable heating solutions."
    problemsTitle="Why heating engineers lose leads to competitors"
    problems={[
      "Homeowners searching for boiler installers find British Gas and national companies before they find your local business",
      "Your Gas Safe credentials and manufacturer training aren't visible enough online to build instant trust",
      "Winter brings a flood of boiler breakdown searches but your website isn't positioned to capture them",
      "You're competing with unqualified installers who undercut on price because customers can't verify credentials online",
      "Lead generation companies sell you the same boiler installation lead they've sold to four other engineers",
      "Your website doesn't differentiate between the heating services you offer or the manufacturers you specialise in",
    ]}
    servicesTitle="What we build for heating businesses"
    services={[
      { title: "Heating Engineer Website Design", description: "Professional websites that showcase your Gas Safe credentials, manufacturer partnerships, and completed installations to build immediate homeowner trust." },
      { title: "Local SEO for Heating Engineers", description: "Targeted optimisation for searches like 'boiler installer near me', 'Gas Safe engineer Newcastle', and 'central heating installation Sunderland'." },
      { title: "Manufacturer Partnership Pages", description: "Dedicated pages highlighting your Worcester, Vaillant, Baxi, or Ideal accreditations with manufacturer-specific content that drives installer searches." },
      { title: "Service Area Pages", description: "Location-specific pages targeting homeowners in every town you cover, ensuring local searches for heating engineers find your business." },
      { title: "Google Business Profile", description: "Fully optimised Google listing with installation photos, customer reviews, and Gas Safe verification that dominates the local map pack." },
      { title: "Seasonal Demand Strategy", description: "Content targeting boiler servicing in autumn, emergency repairs in winter, and new installations in spring to maintain year-round enquiry flow." },
    ]}
    searchTermsTitle="What homeowners search for when they need heating help"
    searchTerms={[
      "boiler installer near me",
      "Gas Safe engineer Newcastle",
      "central heating installation Sunderland",
      "Worcester boiler installer Durham",
      "boiler repair emergency",
      "underfloor heating installer North East",
      "annual boiler service near me",
      "new combi boiler cost Gateshead",
      "heating engineer Tynemouth",
      "Vaillant accredited installer near me",
    ]}
    benefitsTitle="Why heating engineers choose NE Trades"
    benefits={[
      { title: "Gas Safe trust prominently displayed", description: "We make your Gas Safe registration, manufacturer accreditations, and qualifications impossible to miss — the first thing homeowners see before anything else." },
      { title: "Compete with national companies locally", description: "British Gas can't offer the personal service you provide. We position your local expertise and responsiveness as advantages over faceless national companies." },
      { title: "Manufacturer-specific lead generation", description: "If you're a Worcester or Vaillant accredited installer, we target searches specifically looking for those manufacturers in your area." },
      { title: "Winter-ready visibility", description: "When temperatures drop and boilers fail, our SEO ensures your business is the emergency heating engineer homeowners find and call first." },
    ]}
    faqTitle="Common questions from heating engineers"
    faqs={[
      { question: "Can you target specific boiler manufacturer searches?", answer: "Yes. If you're accredited by Worcester, Vaillant, Baxi, or others, we create dedicated pages targeting homeowners specifically searching for those manufacturer's approved installers in your area." },
      { question: "How do you handle the seasonal nature of heating work?", answer: "We build a year-round content strategy — servicing campaigns in autumn, emergency repair visibility in winter, new installation content in spring, and energy efficiency advice in summer." },
      { question: "I also do plumbing work — should that be on the same website?", answer: "We can include both on the same site with separate, clearly defined sections. Each service gets its own optimised pages so neither dilutes the other's search visibility." },
      { question: "How do I compete with companies offering finance deals?", answer: "If you offer finance options, we'll prominently feature them. If not, we position your advantages — faster response times, personal service, local accountability — as reasons to choose you over finance-led national companies." },
    ]}
    ctaTitle="Ready to become the go-to heating engineer in your area?"
    ctaDescription="Let's build you a website and SEO strategy that positions your heating business ahead of national companies and generates consistent local enquiries."
  />
);

export default HeatingEngineers;
