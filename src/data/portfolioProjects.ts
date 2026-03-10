export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  thumbnail: string;
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
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
];
