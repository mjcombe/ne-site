import ServicePageLayout from "@/components/ServicePageLayout";

const WebsitesForTrades = () => (
  <ServicePageLayout
    title="Professional websites built for trade businesses"
    subtitle="Websites for Trades"
    description="Your website is your shopfront. We build clean, professional websites that make trade businesses look credible and convert visitors into phone calls and quote requests."
    whoIsItFor={[
      "Sole traders who need their first professional website",
      "Trade businesses with an outdated site that isn't generating enquiries",
      "Growing trades companies who want a website that matches their reputation",
      "Any tradesperson who wants more calls and leads from their website",
    ]}
    howItHelps={[
      "A professional website builds instant trust with potential customers. When someone searches for a local electrician or plumber, your website is the first impression they get.",
      "We design every page with conversion in mind. Clear calls to action, easy contact options, and straightforward messaging that tells customers exactly what you do and how to get in touch.",
      "Mobile-first design means your website works perfectly on phones, where most of your customers will find you. No pinching, zooming, or broken layouts.",
      "Fast loading speeds keep visitors on your site. Slow websites lose customers before they even read a word.",
    ]}
    whatsIncluded={[
      "Custom responsive website design",
      "Professional copywriting tailored to your trade",
      "Mobile-first, fast-loading build",
      "Contact forms and click-to-call buttons",
      "Google Analytics setup",
      "On-page SEO optimisation",
      "SSL security certificate",
      "Social media integration",
    ]}
    expectedOutcomes={[
      "A professional online presence that builds trust with potential customers from the first click.",
      "More phone calls and quote requests from your website every month.",
      "A website that works on every device and loads fast, keeping visitors engaged.",
      "Clear messaging that tells customers exactly what you do and how to hire you.",
    ]}
    relatedServices={[
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Google Business Profile", href: "/services/google-business-profile" },
      { label: "Hosting & Care", href: "/services/hosting-and-care" },
    ]}
  />
);

export default WebsitesForTrades;
