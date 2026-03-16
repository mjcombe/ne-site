import ServicePageLayout from "@/components/ServicePageLayout";

const GoogleBusinessProfile = () => (
  <ServicePageLayout
    title="Google Business Profile optimisation for local businesses"
    subtitle="Google Business Profile"
    description="Your Google Business Profile is often the first thing customers see. We optimise it fully so you stand out in the map pack and get more calls directly from Google."
    whoIsItFor={[
      "Businesses that want to appear in Google's local map pack",
      "Companies that haven't claimed or optimised their Google listing",
      "Businesses that want more calls directly from Google search results",
      "Any local business that wants to build trust through reviews and visibility",
    ]}
    howItHelps={[
      "A fully optimised Google Business Profile puts your business at the top of local search results with your phone number, reviews, and service details front and centre.",
      "We set up and optimise every section of your profile — categories, services, service areas, photos, and descriptions — so Google knows exactly what you do and where you do it.",
      "We help you build a review strategy that encourages happy customers to leave feedback, boosting your ranking and building trust with new customers.",
      "Regular updates and posts on your profile keep it active and signal to Google that your business is current and relevant.",
    ]}
    whatsIncluded={[
      "Complete profile setup or optimisation",
      "Business category and service optimisation",
      "Service area configuration",
      "Photo upload and management",
      "Review response strategy",
      "Google Posts setup",
      "Q&A section management",
      "Performance tracking and insights",
    ]}
    expectedOutcomes={[
      "Higher visibility in Google's local map pack when customers search for your services nearby.",
      "More direct phone calls and website visits from your Google Business Profile listing.",
      "Stronger trust signals through a professional, complete profile with positive reviews.",
      "Better understanding of how customers find and interact with your business on Google.",
    ]}
    relatedServices={[
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Service Area Pages", href: "/services/service-area-pages" },
      { label: "Ongoing SEO Support", href: "/services/ongoing-seo" },
    ]}
  />
);

export default GoogleBusinessProfile;
