import TradePageLayout from "@/components/TradePageLayout";
import { Droplets } from "lucide-react";
import heroImage from "@/assets/trade-plumber.jpg";

const Plumbers = () => (
  <TradePageLayout
    trade="Plumbers"
    icon={Droplets}
    heroImage={heroImage}
    heroTitle="Get more plumbing jobs through Google — without chasing leads"
    heroDescription="From boiler installs to emergency callouts, we help plumbers and heating engineers build a strong online presence that generates consistent local enquiries without paying for lead generation sites."
    problemsTitle="Sound familiar? Most plumbers face these problems"
    problems={[
      "You're paying monthly fees to lead generation sites but competing with five other plumbers for the same job",
      "Your website doesn't rank for any plumbing searches in your local area",
      "Customers call the first plumber they find on Google — and that's not you",
      "You get plenty of emergency calls in winter but your diary is empty in quieter months",
      "Your website looks outdated and doesn't build confidence with homeowners",
      "You've tried Facebook ads but they attract tyre-kickers rather than genuine customers",
    ]}
    servicesTitle="What we build for plumbing businesses"
    services={[
      { title: "Plumber Website Design", description: "Clean, professional websites that showcase your plumbing services, Gas Safe registration, and customer reviews. Designed to turn website visitors into booked jobs." },
      { title: "Local SEO for Plumbers", description: "Targeted optimisation to rank your website for searches like 'plumber near me', 'boiler repair Newcastle', and 'bathroom fitter Sunderland'." },
      { title: "Google Business Profile", description: "Complete setup and optimisation of your Google profile including service categories, operating hours, service areas, and review management strategy." },
      { title: "Service Area Coverage", description: "Individual pages for every area you cover so customers in each town and postcode can find you through local searches." },
      { title: "Gas Safe & Accreditation Trust", description: "Your Gas Safe registration, Worcester accreditation, or Vaillant partnership displayed clearly to build instant trust with homeowners." },
      { title: "Seasonal Content Strategy", description: "Content targeting boiler servicing in autumn, emergency repairs in winter, and bathroom renovations in spring to maintain year-round visibility." },
    ]}
    searchTermsTitle="What your customers are searching for"
    searchTerms={[
      "plumber near me",
      "emergency plumber Newcastle",
      "boiler repair Sunderland",
      "Gas Safe plumber Durham",
      "bathroom fitter near me",
      "boiler installation cost North East",
      "leaking pipe emergency",
      "power flush central heating",
      "new bathroom quote Gateshead",
      "plumber Tynemouth",
    ]}
    benefitsTitle="Why plumbers choose NE1 Web Digital"
    benefits={[
      { title: "Stop paying for shared leads", description: "Unlike lead generation sites, your website belongs to you. Every enquiry comes directly to you with no competition and no per-lead fees." },
      { title: "Year-round enquiry pipeline", description: "Our seasonal content strategy ensures you're visible for boiler servicing, bathroom fits, and emergency work throughout the year." },
      { title: "Gas Safe credibility front and centre", description: "We make your Gas Safe registration and manufacturer accreditations impossible to miss, building immediate trust with homeowners." },
      { title: "Emergency search dominance", description: "When a pipe bursts at midnight, people grab their phone and search Google. We position you to be the plumber they call." },
    ]}
    faqTitle="Common questions from plumbers"
    faqs={[
      { question: "Can I stop using Checkatrade if I have my own website?", answer: "Many of our plumbing clients reduce or stop their Checkatrade spend once their website starts generating consistent organic enquiries. Your own website gives you leads with no ongoing per-lead cost." },
      { question: "How do you handle the different plumbing services I offer?", answer: "We create dedicated pages for each service — boiler installation, bathroom fitting, emergency repairs, central heating — each optimised for the specific searches customers use." },
      { question: "I mainly do boiler work — can you focus on that?", answer: "Absolutely. We can build your entire SEO strategy around boiler installations, servicing, and repairs. We'll target manufacturer-specific searches too if you're a Worcester or Vaillant accredited installer." },
      { question: "How quickly will I see results?", answer: "Emergency plumbing searches often produce results faster because of high search intent. Most plumbers see meaningful enquiry increases within 3-6 months of launching." },
    ]}
    ctaTitle="Ready to fill your diary with plumbing work?"
    ctaDescription="Stop sharing leads with other plumbers. Let's build you a website and local SEO strategy that brings customers directly to your business."
  />
);

export default Plumbers;
