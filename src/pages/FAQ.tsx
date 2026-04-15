import Layout from "@/components/layout/Layout";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How much does a trade website cost?",
        answer: "Our websites start from an affordable monthly fee with no large upfront cost. We offer packages tailored to sole traders and growing trade businesses. Visit our <a href='/pricing' class='text-accent underline hover:text-accent/80'>pricing page</a> for a clear, transparent breakdown with no hidden fees.",
      },
      {
        question: "How long does it take to build a website?",
        answer: "Most trade websites are live within two to three weeks. We handle everything — design, content, setup, and optimisation — so you don't need to lift a finger.",
      },
      {
        question: "Do I need to provide the content?",
        answer: "No. We write all the content for your website based on a quick discovery call. We understand how to write for trade businesses and their customers, so everything is clear, professional, and optimised for search.",
      },
      {
        question: "What if I already have a website?",
        answer: "If your current website isn't generating enquiries, we can either redesign it or build a brand new one. We'll audit your existing site for free and tell you honestly what needs to change.",
      },
      {
        question: "Is there a minimum contract term?",
        answer: "Yes, the minimum term is 12 months. This gives us the time needed to build, optimise, and grow your online presence properly. SEO is a long-term strategy and results build over time.",
      },
    ],
  },
  {
    title: "Websites & Design",
    faqs: [
      {
        question: "Will my website work on mobile?",
        answer: "Absolutely. Every website we build is fully responsive and optimised for mobile, tablet, and desktop. With most local searches happening on mobile, this is essential for generating enquiries.",
      },
      {
        question: "Can I update my website myself?",
        answer: "Yes. Your website comes with a content management system so you can make updates. But with our monthly plan, we handle unlimited updates for you — so most clients just send us what they need and we take care of it.",
      },
      {
        question: "Do you include a blog on the website?",
        answer: "Yes. Every website includes a blog section. Regular blog content is one of the best ways to improve your search rankings and attract more visitors to your site.",
      },
      {
        question: "Can I showcase my previous work?",
        answer: "Definitely. Your website includes a case studies section and a dynamic image gallery so you can show off your best projects and installations.",
      },
      {
        question: "What third-party tools can you integrate?",
        answer: "We support integration with WhatsApp, TrueQuote, Calendly, Tradify, Jobber, ServiceM8, Google Reviews, and more. If there's a tool you use, we can usually integrate it.",
      },
    ],
  },
  {
    title: "SEO & Google",
    faqs: [
      {
        question: "What is local SEO and why does it matter?",
        answer: "Local SEO makes sure your business appears when nearby customers search for your trade on Google. If someone searches 'electrician near me' or 'plumber Newcastle', local SEO helps you show up at the top. It's the most cost-effective way to get consistent enquiries.",
      },
      {
        question: "How long does SEO take to work?",
        answer: "You'll typically start seeing improvements within 4 to 8 weeks, with significant results building over 3 to 6 months. SEO is a long-term strategy — the longer you invest, the stronger your results become.",
      },
      {
        question: "What is AI and Generative Engine Optimisation?",
        answer: "AI search tools like ChatGPT and Google AI Overviews are changing how people find businesses. Our GEO optimisation prepares your website to appear in these AI-powered search results, keeping you ahead of competitors.",
      },
      {
        question: "Do you optimise Google Business Profiles?",
        answer: "Yes. Google Business Profile optimisation is included in both our packages. We set it up properly, optimise it for your services and locations, and keep it updated to help you appear in the local map pack.",
      },
      {
        question: "What are service area pages?",
        answer: "Service area pages are individual pages targeting specific locations you serve. For example, if you're a plumber in Newcastle, we'd create pages for each area — Jesmond, Gosforth, Heaton, and so on. This helps you rank for searches in each of those areas.",
      },
    ],
  },
  {
    title: "Hosting & Support",
    faqs: [
      {
        question: "What happens after my website is live?",
        answer: "We don't disappear after launch. We offer ongoing hosting, maintenance, and SEO support to make sure your website keeps performing and your rankings keep climbing.",
      },
      {
        question: "Is hosting included?",
        answer: "Yes. Super fast hosting is included in your monthly plan, along with an SSL security certificate, daily backups, and ongoing security updates.",
      },
      {
        question: "Do you handle domain names?",
        answer: "Yes. Domain name registration and management is included. If you already have a domain, we'll manage the transfer for you.",
      },
      {
        question: "How do I request website updates?",
        answer: "Just send us an email or message and we'll take care of it. Unlimited updates are included in your monthly plan under fair usage.",
      },
      {
        question: "Can I see examples of your work?",
        answer: "Absolutely. Get in touch and we'll share examples of trade websites we've built and the results they've achieved. We're happy to show you real data from real trade businesses.",
      },
    ],
  },
  {
    title: "General",
    faqs: [
      {
        question: "Do you work with trades outside the North East?",
        answer: "We're based in the North East and it's our home market, but we work with trade businesses across the UK. Our approach to local SEO works wherever you're based.",
      },
      {
        question: "What trades do you work with?",
        answer: "We work with electricians, plumbers, builders, roofers, joiners, decorators, landscapers, heating engineers, and other trade businesses. If you're a local service business, we can help.",
      },
      {
        question: "What makes you different from other web designers?",
        answer: "We only work with trades and local service businesses. We don't just build websites — we build websites that rank on Google and generate real enquiries. Everything we do is focused on getting you more customers.",
      },
      {
        question: "Do I get reports on how my website is performing?",
        answer: "Yes. We provide regular reports showing your traffic, rankings, and enquiry numbers. You'll always know exactly how your website is performing and the return you're getting.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <Layout>
      <SEOHead
        title="FAQ | Common Questions About Trade Websites & SEO"
        description="Answers to common questions about websites, SEO, pricing and support for trade businesses in the North East."
        canonical="https://netrades.co.uk/faq"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqCategories.flatMap(cat => cat.faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          }))),
        }}
      />
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            FAQs
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            Straight answers to the things businesses ask us most. Can't find what you're looking for? Just get in touch.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      {faqCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`section-padding ${catIndex % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {category.title}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`${catIndex}-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ))}

      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Still got questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always happy to chat. Get in touch and we'll give you a straight answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
