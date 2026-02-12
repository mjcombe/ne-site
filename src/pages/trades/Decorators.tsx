import TradePageLayout from "@/components/TradePageLayout";
import { PaintBucket } from "lucide-react";
import heroImage from "@/assets/hero-trades.jpg";

const Decorators = () => (
  <TradePageLayout
    trade="Decorators"
    icon={PaintBucket}
    heroImage={heroImage}
    heroTitle="Attract more decorating work from homeowners who value quality"
    heroDescription="Interior painting, exterior decorating, wallpapering, and specialist finishes — we help painters and decorators build an online reputation that attracts the right customers and the right kind of work."
    problemsTitle="Why decorators struggle to stand out online"
    problems={[
      "Homeowners choose the cheapest quote because they can't see the difference between you and budget decorators online",
      "Your best work speaks for itself in person but your website doesn't capture the quality of your finishes",
      "You rely on repeat customers and recommendations but need a more consistent flow of new enquiries",
      "Social media takes time to maintain and the results are unpredictable compared to appearing on Google",
      "Your competitors have better websites even though your decorating work is superior to theirs",
      "You're missing out on lucrative exterior decorating and commercial repainting contracts",
    ]}
    servicesTitle="What we build for decorating businesses"
    services={[
      { title: "Decorator Website Design", description: "Visually stunning websites with high-quality galleries that showcase your painting, wallpapering, and specialist finishes in the best possible light." },
      { title: "Local SEO for Decorators", description: "Optimisation targeting searches like 'painter decorator near me', 'wallpaper hanger Newcastle', and 'exterior painter Sunderland'." },
      { title: "Portfolio & Gallery System", description: "Beautiful before-and-after galleries organised by room type and service — kitchens, bedrooms, hallways, exteriors — showing the transformation your work delivers." },
      { title: "Service Area Pages", description: "Location-specific pages targeting homeowners searching for decorators in each town and village across your service area." },
      { title: "Google Business Profile", description: "Fully optimised Google listing with high-quality work photos that make your decorating business stand out in local search results." },
      { title: "Specialist Service Pages", description: "Dedicated pages for specialist services like heritage property decoration, wallpaper hanging, exterior painting, and commercial decorating." },
    ]}
    searchTermsTitle="What homeowners search for when they need a decorator"
    searchTerms={[
      "painter decorator near me",
      "interior decorator Newcastle",
      "wallpaper hanger Sunderland",
      "exterior painting Durham",
      "professional painter Gateshead",
      "house painting quotes near me",
      "kitchen painter North East",
      "commercial decorator near me",
      "spray painting kitchen cabinets",
      "heritage property decorator",
    ]}
    benefitsTitle="Why decorators choose NE1 Web Digital"
    benefits={[
      { title: "Let your work sell itself", description: "We build portfolio-driven websites where stunning photography of your completed projects does the selling — so customers choose you for quality, not just price." },
      { title: "Attract premium decorating clients", description: "A professional online presence attracts homeowners willing to pay for quality finishes rather than bargain hunters looking for the cheapest quote." },
      { title: "Showcase specialist skills", description: "Whether it's heritage properties, wallpaper hanging, or spray finishes, we create dedicated content that positions you as the specialist in your area." },
      { title: "Consistent new enquiries", description: "Stop relying solely on word of mouth. A strong Google presence ensures a steady flow of new decorating enquiries alongside your existing referrals." },
    ]}
    faqTitle="Common questions from decorators"
    faqs={[
      { question: "Photography is really important for decorators — can you help?", answer: "We design your website around visual impact. We'll advise on the best ways to photograph your work, and our layouts are designed specifically to present before-and-after transformations beautifully." },
      { question: "I do both residential and commercial work — how do you handle that?", answer: "We create separate sections for domestic and commercial decorating, each with its own messaging, galleries, and targeted SEO to attract the right type of customer for each." },
      { question: "Can you help me move away from competing on price?", answer: "Absolutely. A professional website that showcases quality finishes, customer testimonials, and specialist services naturally attracts customers who value quality over the cheapest quote." },
      { question: "How does SEO work for decorators?", answer: "We target the searches homeowners actually make — 'painter decorator near me', 'kitchen painter Newcastle' — and build your website's authority for these terms over time through content and local SEO." },
    ]}
    ctaTitle="Ready to attract customers who value quality decorating?"
    ctaDescription="Let's build you a website that shows the true quality of your work and brings in the kind of customers you want to work for."
  />
);

export default Decorators;
