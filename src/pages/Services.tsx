import Layout from "@/components/layout/Layout";
import ServiceCards from "@/components/sections/ServiceCards";
import FinalCTA from "@/components/sections/FinalCTA";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Digital Services for Businesses | NE1 Digital"
        description="Websites, local SEO, Google Business Profile and ongoing support built for businesses of all kinds."
        canonical="https://ne1webdesign.co.uk/services"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://ne1webdesign.co.uk/" },
          { name: "Services", url: "https://ne1webdesign.co.uk/services" },
        ])}
      />
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Digital services built for your business
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            From your first website to ongoing SEO, we have everything your business needs to get found online and win more local work.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>
      <ServiceCards />
      <FinalCTA />
    </Layout>
  );
};

export default Services;
