import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Our websites start from an affordable monthly fee with no large upfront cost. We offer packages tailored to businesses of all sizes, from startups to established brands. Visit our <a href='/pricing' class='text-accent underline hover:text-accent/80'>pricing page</a> for a clear, transparent breakdown with no hidden fees.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are live within two to three weeks. We handle everything — design, content, setup, and optimisation — so you can focus on running your business.",
  },
  {
    question: "Do I need to provide the content?",
    answer: "No. We write all the content for your website based on a discovery call. We understand how to write for businesses and their customers, so everything is clear, professional, and optimised for search.",
  },
  {
    question: "What is local SEO and why does it matter?",
    answer: "Local SEO makes sure your business appears when nearby customers search for your services on Google. It's the most cost-effective way to get consistent enquiries without relying on paid ads.",
  },
  {
    question: "Do you only work with businesses in the North East?",
    answer: "We're based in North Tyneside and Teesside and it's our home market, but we work with businesses across the UK. Our approach to local SEO works wherever you're based.",
  },
  {
    question: "What if I already have a website?",
    answer: "If your current website isn't generating enquiries, we can either redesign it or build a brand new one. We'll audit your existing site for free and tell you honestly what needs to change.",
  },
  {
    question: "Can I see examples of your work?",
    answer: "Absolutely. Get in touch and we'll share examples of websites we've built and the results they've achieved. We're happy to show you real data from real businesses.",
  },
  {
    question: "What happens after my website is live?",
    answer: "We don't disappear after launch. We offer ongoing hosting, maintenance, and SEO support to make sure your website keeps performing and your rankings keep climbing.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common questions from our clients
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Straight answers to the things businesses ask us most.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border">
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
  );
};

export default FAQ;
