import ServicePageLayout from "@/components/ServicePageLayout";

const LocalSEO = () => (
  <ServicePageLayout
    title="Local SEO that puts your trade business in front of customers"
    subtitle="Local SEO for Trades"
    description="When someone searches 'electrician near me' or 'plumber Newcastle', local SEO determines whether they find you or your competitors. We make sure they find you."
    whoIsItFor={[
      "Trade businesses that rely on local customers for work",
      "Tradespeople who want to appear on Google's first page",
      "Businesses that want consistent enquiries without paying for ads",
      "Any trade that covers a specific geographic area",
    ]}
    howItHelps={[
      "We research exactly what your potential customers are searching for in your area and optimise your website to rank for those terms.",
      "Local SEO targets customers who are ready to hire. These aren't random visitors — they're people actively looking for a tradesperson near them.",
      "By building local relevance and authority, your business appears in Google's map pack and organic results, driving consistent enquiries month after month.",
      "Unlike paid advertising, local SEO keeps working for you long term. Once you rank, you keep getting enquiries without paying per click.",
    ]}
    whatsIncluded={[
      "Local keyword research for your trade",
      "On-page SEO optimisation",
      "Google Business Profile optimisation",
      "Local citation building",
      "Review strategy guidance",
      "Competitor analysis",
      "Monthly performance reporting",
      "Content optimisation for local search",
    ]}
    expectedOutcomes={[
      "Higher rankings on Google for your key local search terms, putting your business in front of more customers.",
      "Increased organic traffic from people in your service area who are actively searching for your trade.",
      "More inbound phone calls and quote requests without the ongoing cost of paid advertising.",
      "A stronger local online presence that builds your reputation and keeps you ahead of competitors.",
    ]}
    relatedServices={[
      { label: "Websites for Trades", href: "/services/websites-for-trades" },
      { label: "Google Business Profile", href: "/services/google-business-profile" },
      { label: "Service Area Pages", href: "/services/service-area-pages" },
    ]}
  />
);

export default LocalSEO;
