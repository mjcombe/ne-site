import portfolioNewcastleCare from "@/assets/portfolio-newcastlecare.webp";

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  thumbnail: string;
  websiteUrl?: string;
  images: string[];
  services: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "smith-plumbing-website",
    title: "Smith Plumbing & Heating",
    client: "Smith Plumbing & Heating",
    industry: "Plumbing & Heating",
    description:
      "A complete digital transformation for a family-run plumbing business in Newcastle. We designed and built a modern, high-converting website with local SEO integration and Google Business Profile optimisation — helping them dominate local search results.",
    thumbnail: "/placeholder.svg",
    websiteUrl: "https://example.com",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    services: ["Website Design", "Local SEO", "Google Business Profile"],
    results: [
      "320% increase in organic traffic within 6 months",
      "45 new enquiries per month from Google",
      "Page 1 rankings for 12 target keywords",
      "Google Business Profile views up 280%",
    ],
    testimonial: {
      quote:
        "NE1 Digital completely transformed our online presence. We went from barely getting any calls to having more work than we can handle. Couldn't recommend them enough.",
      author: "David Smith",
      role: "Owner, Smith Plumbing & Heating",
    },
  },
  {
    slug: "newcastle-care-website",
    title: "Newcastle Care",
    client: "Newcastle Care",
    industry: "Home Care Services",
    description:
      "A brand new website created for Newcastle Care, a professional home care provider supporting individuals and families across Newcastle and the surrounding areas. The goal was to design a modern, trustworthy website that clearly communicates the services available while making it simple for families to enquire about care.\n\nThe site was built with a clean layout, clear service pages and strong calls to action to help visitors quickly understand the support available. Local SEO was implemented from launch to improve visibility in Google for home care searches across Newcastle, helping the business attract more enquiries from local families.",
    thumbnail: portfolioNewcastleCare,
    websiteUrl: "https://newcastlecare.co.uk/",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    services: ["Website Design", "Local SEO", "Google Business Profile"],
    results: [
      "New professional website launched to support local growth",
      "Improved visibility for home care searches in Newcastle",
      "Increased enquiries from families seeking care support",
      "Strong foundation for ongoing SEO and Google Business Profile growth",
    ],
  },
];
