import ServicePageLayout from "@/components/ServicePageLayout";

const ServiceAreaPages = () => (
  <ServicePageLayout
    title="Service area pages that capture local search traffic"
    subtitle="Service Area Pages"
    description="Dedicated pages for every town and area you cover. When someone searches 'plumber in Gateshead' or 'electrician Durham', your business shows up with a page built for that exact search."
    whoIsItFor={[
      "Trade businesses that cover multiple towns or areas",
      "Tradespeople wanting to rank in specific locations they serve",
      "Growing trades companies expanding into new areas",
      "Any local business that wants to dominate searches across their service area",
    ]}
    howItHelps={[
      "Each service area page targets location-specific searches, so when a customer in Gateshead, Durham, or Sunderland searches for your trade, they find a page specifically about your services in their area.",
      "Google rewards relevance. A dedicated page about plumbing in Newcastle is far more likely to rank than a generic homepage trying to cover everything.",
      "Service area pages create multiple entry points to your website, dramatically increasing the number of search terms you can rank for.",
      "Each page includes local information, service details, and clear calls to action tailored to customers in that specific area.",
    ]}
    whatsIncluded={[
      "Location-specific keyword research",
      "Unique content for each area page",
      "Local SEO optimisation per page",
      "Internal linking strategy",
      "Clear calls to action on every page",
      "Mobile-responsive design",
      "Schema markup for local search",
      "Integration with main site navigation",
    ]}
    expectedOutcomes={[
      "Rank on Google for location-specific searches across every area you serve.",
      "Capture search traffic from multiple towns and locations with dedicated, optimised pages.",
      "More enquiries from customers in specific areas who feel you're a genuinely local option.",
      "Scalable approach that lets you expand into new areas as your business grows.",
    ]}
    relatedServices={[
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Websites for Trades", href: "/services/websites-for-trades" },
      { label: "Ongoing SEO Support", href: "/services/ongoing-seo" },
    ]}
  />
);

export default ServiceAreaPages;
