import Layout from "@/components/layout/Layout";
import ServiceCards from "@/components/sections/ServiceCards";
import FinalCTA from "@/components/sections/FinalCTA";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Digital Services for Trade Businesses | NE Trades"
        description="Websites, local SEO, Google Business Profile and ongoing support built for electricians, plumbers, builders and trades."
        canonical="https://netrades.co.uk/services"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://netrades.co.uk/" },
          { name: "Services", url: "https://netrades.co.uk/services" },
        ])}
      />
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Digital services built for trades
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            From your first website to ongoing SEO, we have everything your trade business needs to get found online and win more local work.
          </p>
        </div>
      </section>
      <ServiceCards />
      <FinalCTA />
    </Layout>
  );
};

export default Services;
