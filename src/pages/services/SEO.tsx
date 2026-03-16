import ServicePageLayout from "@/components/ServicePageLayout";

const SEO = () => (
  <ServicePageLayout
    title="SEO services that get your business to page one"
    subtitle="SEO for Businesses"
    description="Search engine optimisation is how customers find you online. We build and execute SEO strategies for businesses of all kinds, so you rank higher, get more clicks, and win more local customers."
    whoIsItFor={[
      "Businesses that want to appear on Google's first page",
      "Companies tired of relying on word of mouth or paid ads alone",
      "Businesses that want a long-term source of consistent enquiries",
      "Any business covering a local area that wants to dominate search results",
    ]}
    howItHelps={[
      "We research exactly what your potential customers are searching for and build a strategy around those keywords so your website ranks for the terms that matter.",
      "On-page optimisation ensures every page on your site is structured correctly for Google, from title tags and headings to internal links and image alt text.",
      "Off-page SEO builds your website's authority through local citations, quality backlinks, and consistent business information across the web.",
      "Technical SEO ensures your site loads fast, works on mobile, and has no crawl errors or broken links holding your rankings back.",
    ]}
    whatsIncluded={[
      "Keyword research for your business and area",
      "On-page SEO optimisation",
      "Technical SEO audit and fixes",
      "Local citation building",
      "Content strategy and creation",
      "Competitor analysis",
      "Monthly performance reports",
      "Ongoing ranking tracking",
    ]}
    expectedOutcomes={[
      "Higher Google rankings for your most valuable local search terms.",
      "More organic traffic from people actively searching for your services.",
      "Increased phone calls and enquiry form submissions without ad spend.",
      "A stronger, more authoritative online presence that compounds over time.",
    ]}
    relatedServices={[
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "AI & Generative SEO", href: "/services/ai-seo" },
      { label: "Service Area Pages", href: "/services/service-area-pages" },
    ]}
  />
);

export default SEO;
