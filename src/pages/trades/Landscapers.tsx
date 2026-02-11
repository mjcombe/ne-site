import TradePageLayout from "@/components/TradePageLayout";
import { Home } from "lucide-react";
import heroImage from "@/assets/hero-trades.jpg";

const Landscapers = () => (
  <TradePageLayout
    trade="Landscapers"
    icon={Home}
    heroImage={heroImage}
    heroTitle="Get more landscaping projects from homeowners searching online"
    heroDescription="Garden design, driveways, patios, fencing, and outdoor living spaces — we help landscaping businesses attract homeowners planning outdoor improvements by making sure you're the first company they find on Google."
    problemsTitle="Why most landscapers miss out on online enquiries"
    problems={[
      "Homeowners planning garden projects start with a Google search but your business doesn't appear in results",
      "You do incredible transformations but your before-and-after photos aren't shown anywhere professional",
      "Spring and summer bring a rush of enquiries but you struggle to fill your diary during quieter months",
      "Your competitors have polished websites and are winning the projects you should be quoting for",
      "You spend time on social media posting photos but it doesn't consistently translate into new enquiries",
      "Driveway and patio enquiries are competitive and you're losing out to companies with stronger online visibility",
    ]}
    servicesTitle="What we build for landscaping businesses"
    services={[
      { title: "Landscaper Website Design", description: "Visually rich websites that showcase garden transformations, driveway installations, and outdoor living projects with the impact they deserve." },
      { title: "Local SEO for Landscapers", description: "Optimisation targeting searches like 'landscaper near me', 'driveway installer Newcastle', 'garden design Sunderland', and 'patio builder North East'." },
      { title: "Transformation Galleries", description: "Stunning before-and-after photo galleries organised by project type — gardens, driveways, patios, fencing — that show potential customers what you can deliver." },
      { title: "Service Area Pages", description: "Location-specific pages targeting homeowners in every town and area you cover across the North East." },
      { title: "Google Business Profile", description: "Optimised Google listing with project photography, seasonal service updates, and review management to maximise local visibility." },
      { title: "Seasonal Content Strategy", description: "Targeted content for each season — spring planting, summer patios, autumn clearance, winter planning — maintaining visibility year-round." },
    ]}
    searchTermsTitle="What homeowners search for when planning outdoor projects"
    searchTerms={[
      "landscaper near me",
      "driveway installer Newcastle",
      "garden designer Sunderland",
      "patio builder near me",
      "fencing contractor Durham",
      "artificial grass installer North East",
      "block paving driveway cost",
      "garden makeover Gateshead",
      "decking installer near me",
      "retaining wall builder",
    ]}
    benefitsTitle="Why landscapers choose NE Trades"
    benefits={[
      { title: "Before-and-after impact", description: "Landscaping is one of the most visual trades. We design your website to maximise the dramatic impact of your project transformations." },
      { title: "Year-round project pipeline", description: "Our seasonal content strategy targets different landscaping services throughout the year, smoothing out the seasonal peaks and troughs." },
      { title: "Multiple service visibility", description: "Whether you specialise in driveways, gardens, patios, or all three, we ensure you're visible for every type of landscaping search in your area." },
      { title: "Project value increase", description: "A professional website with impressive galleries naturally attracts larger, more valuable landscaping projects from homeowners with bigger budgets." },
    ]}
    faqTitle="Common questions from landscapers"
    faqs={[
      { question: "Landscaping is very seasonal — can you help with winter?", answer: "Yes. We create content targeting winter garden planning, hard landscaping projects suitable for colder months, and early-bird spring booking campaigns to keep enquiries flowing year-round." },
      { question: "I offer driveways, gardens, and fencing — do I need separate pages?", answer: "Absolutely. Each service has different search terms and different customer intent. Separate pages allow us to optimise specifically for each, dramatically improving your visibility for all of them." },
      { question: "How important are photos for a landscaping website?", answer: "Critical. Landscaping is a visual trade and homeowners want to see completed projects. We design your site around impactful before-and-after galleries that sell your work on sight." },
      { question: "Can you help me attract commercial landscaping contracts?", answer: "Yes. We can create dedicated pages targeting commercial property managers, housing developers, and local authorities looking for commercial grounds maintenance and landscaping services." },
    ]}
    ctaTitle="Ready to grow your landscaping business online?"
    ctaDescription="Let's build you a website that showcases your outdoor transformations and attracts homeowners with projects worth quoting for."
  />
);

export default Landscapers;
