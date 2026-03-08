import TradePageLayout from "@/components/TradePageLayout";
import { Wrench } from "lucide-react";

const Roofers = () => (
  <TradePageLayout
    trade="Roofers"
    icon={Wrench}
    heroTitle="Get more roofing leads from homeowners who need you right now"
    heroDescription="Roof repairs, flat roofing, new roofs, and guttering — we help roofing contractors appear at the top of Google when homeowners discover a leak, need storm damage repaired, or want a quote for a new roof."
    problemsTitle="Why most roofers miss out on online leads"
    problems={[
      "Homeowners with a leaking roof search Google and call the first roofer they find — but that's not your business",
      "You get most of your work through referrals and have no control over when new jobs come in",
      "Lead generation sites send you the same lead they've already sent to three other roofers",
      "Your website doesn't rank for roofing searches in any of the areas you cover",
      "Potential customers can't tell you apart from cowboy roofers because your online presence doesn't show your quality",
      "Storm damage creates a surge in roofing searches but you're invisible during these peak moments",
    ]}
    servicesTitle="What we build for roofing businesses"
    services={[
      { title: "Roofer Website Design", description: "Professional websites with roof project galleries and clear service listings that help homeowners trust your business and request a quote with confidence." },
      { title: "Local SEO for Roofers", description: "Targeted optimisation for high-intent searches like 'roofer near me', 'roof repair Newcastle', and 'flat roof specialist Sunderland'." },
      { title: "Emergency Roof Repair Visibility", description: "Specific content targeting urgent roofing searches so you're the first roofer homeowners find when they have a leak or storm damage." },
      { title: "Service Area Pages", description: "Dedicated pages for every town and postcode area you cover, ensuring you rank for roofing searches across your entire service region." },
      { title: "Google Business Profile", description: "Fully optimised Google listing with roofing photos, customer reviews, and accurate service information to dominate the local map pack." },
      { title: "Roofing Content Strategy", description: "Helpful content about roof maintenance, common problems, and material choices that builds trust and attracts organic traffic year-round." },
    ]}
    searchTermsTitle="Searches homeowners make when they need a roofer"
    searchTerms={[
      "roofer near me",
      "roof repair Newcastle",
      "flat roof specialist Sunderland",
      "emergency roof leak repair",
      "new roof cost North East",
      "guttering replacement near me",
      "storm damage roof repair",
      "roofing contractor Durham",
      "slate roof repair Gateshead",
      "fascia and soffit replacement",
    ]}
    benefitsTitle="Why roofers choose NE1 Web Digital"
    benefits={[
      { title: "Capture emergency searches", description: "Roofing emergencies drive some of the highest-intent searches online. We make sure your business appears when homeowners urgently need a roofer." },
      { title: "Stand out from unreliable roofers", description: "A professional website with genuine reviews and project photos instantly separates you from the roofers giving the trade a bad name." },
      { title: "Weather-driven search visibility", description: "When storms hit, roofing searches spike dramatically. Our ongoing SEO ensures you're visible during these crucial peak periods." },
      { title: "Year-round roofing pipeline", description: "From emergency repairs in winter to planned re-roofs in summer, we build visibility across every roofing service and season." },
    ]}
    faqTitle="Common questions from roofers"
    faqs={[
      { question: "Roofing is seasonal — can you help with quieter months?", answer: "Yes. We target different roofing services by season — emergency repairs and maintenance in winter, new roofs and improvements in summer. This helps maintain a steady enquiry flow year-round." },
      { question: "How do you differentiate me from cowboy roofers?", answer: "Your website will prominently display your credentials, insurance details, completed project galleries, and genuine customer reviews — everything that proves you're a legitimate, quality roofing business." },
      { question: "Can you help me target commercial roofing work?", answer: "Yes. We can create dedicated pages and content targeting commercial roofing, flat roofing for businesses, and industrial roofing contracts alongside your domestic services." },
      { question: "I cover a wide area — can you target all of it?", answer: "We create individual service area pages for every town and area you cover, so you rank for roofing searches across your entire region rather than just your immediate location." },
    ]}
    ctaTitle="Ready to be the first roofer homeowners call?"
    ctaDescription="Let's build you a website and SEO strategy that puts your roofing business at the top of Google when homeowners need you most."
  />
);

export default Roofers;
