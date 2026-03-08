import LandingPageTemplate from "@/components/LandingPageTemplate";

const LandingServices = () => (
  <LandingPageTemplate
    config={{
      slug: "services",
      heroGradient: "gradient-services",
      ctaGradient: "gradient-services",
      headerBg: "bg-[hsl(160,40%,14%)]",
      seoTitle: "Websites & SEO for Local Service Businesses | Get More Customers",
      seoDescription: "Professional websites and local SEO for cleaners, dog groomers, personal trainers, photographers and local service businesses across the North East.",
      heroHeading: "Stop losing customers to competitors with a better Google ranking",
      heroDescription: "We build websites and run local SEO specifically for local service businesses across the North East. More enquiries. More bookings. More growth.",
      problemsHeading: "Sound familiar?",
      problems: [
        "You're relying on word of mouth and social media for new customers",
        "Your website looks unprofessional or doesn't show up on Google",
        "You're losing potential customers to competitors with a better online presence",
        "You've tried marketing companies before and seen no results",
        "You know you need a proper website but can't justify a big upfront cost",
        "You're spending time on marketing instead of doing the work you love",
      ],
      solutionHeading: "Everything you need to grow your service business",
      solutionDescription: "We don't just build websites — we build customer generation machines for local service businesses.",
      ctaHeading: "Ready to grow your business?",
      ctaDescription: "Book a free, no-obligation call. We'll look at your current online presence and show you exactly how we'd get you more customers.",
    }}
  />
);

export default LandingServices;
