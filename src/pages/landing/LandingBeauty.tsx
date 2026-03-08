import LandingPageTemplate from "@/components/LandingPageTemplate";

const LandingBeauty = () => (
  <LandingPageTemplate
    config={{
      slug: "beauty",
      heroGradient: "gradient-beauty",
      ctaGradient: "gradient-beauty",
      headerBg: "bg-[hsl(330,45%,18%)]",
      seoTitle: "Websites & SEO for Beauty & Wellness Businesses | Get More Bookings",
      seoDescription: "Professional websites and local SEO for hair salons, beauty therapists, nail technicians and wellness businesses across the North East.",
      heroHeading: "Stop losing bookings to competitors with a better Google presence",
      heroDescription: "We build stunning websites and run local SEO specifically for hair salons, beauty therapists, nail technicians and wellness businesses across the North East.",
      problemsHeading: "Sound familiar?",
      problems: [
        "You're relying on Instagram and word of mouth for new clients",
        "Your website doesn't reflect the quality of your work",
        "Clients can't easily find or book your services online",
        "Competitors with less experience are ranking above you on Google",
        "You're spending money on ads but not getting the right clients",
        "You know you need a proper online presence but don't know where to start",
      ],
      solutionHeading: "Everything you need to get fully booked",
      solutionDescription: "We don't just build websites — we build booking machines for beauty and wellness businesses.",
      ctaHeading: "Ready to get fully booked?",
      ctaDescription: "Book a free, no-obligation call. We'll look at your current online presence and show you exactly how we'd fill your appointment book.",
    }}
  />
);

export default LandingBeauty;
