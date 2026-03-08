import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-ongoing-seo.jpg";

const OngoingSEO = () => (
  <ServicePageLayout
    heroImage={heroImage}
    title="Ongoing SEO support to keep your rankings climbing"
    subtitle="Ongoing SEO Support"
    description="SEO isn't a one-off job. We provide continuous optimisation, fresh content, and performance tracking to make sure your trade business keeps ranking higher and generating more enquiries month after month."
    whoIsItFor={[
      "Trade businesses already ranking that want to maintain and improve positions",
      "Tradespeople who want consistent growth in online enquiries",
      "Businesses in competitive local markets where rankings fluctuate",
      "Any trade that sees the value in long-term investment in visibility",
    ]}
    howItHelps={[
      "Google's algorithms change constantly. Ongoing SEO means your website adapts to these changes and stays competitive.",
      "We publish fresh, relevant content that targets new search terms and reinforces your authority in your trade.",
      "Monthly performance tracking lets you see exactly how your rankings, traffic, and enquiries are improving over time.",
      "Competitor monitoring ensures you stay ahead of other local trade businesses fighting for the same customers.",
    ]}
    whatsIncluded={[
      "Monthly SEO performance report",
      "Keyword ranking tracking",
      "Content creation and updates",
      "Technical SEO maintenance",
      "Backlink monitoring",
      "Competitor analysis updates",
      "Conversion tracking",
      "Quarterly strategy reviews",
    ]}
    expectedOutcomes={[
      "Consistent improvement in Google rankings for your key local search terms.",
      "Steady growth in organic website traffic and enquiries month over month.",
      "Clear visibility of ROI through transparent reporting and performance data.",
      "Long-term dominance in local search results that keeps competitors behind you.",
    ]}
    relatedServices={[
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Service Area Pages", href: "/services/service-area-pages" },
      { label: "Hosting & Care", href: "/services/hosting-and-care" },
    ]}
  />
);

export default OngoingSEO;
